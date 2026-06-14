import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const TOKEN = process.env.GITHUB_PAT;
const OWNER = 'kozlovheritage';
const REPO = 'texcex';
const BASE = new URL('../../artifacts/techtsekh', import.meta.url).pathname;

if (!TOKEN) {
  console.error('GITHUB_PAT не задан');
  process.exit(1);
}

const SKIP_DIRS = ['node_modules', '.git', 'dist', '.replit-artifact'];
const SKIP_FILES = ['.DS_Store'];

function walk(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.includes(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else {
      if (!SKIP_FILES.includes(entry)) results.push(full);
    }
  }
  return results;
}

const H = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  'X-GitHub-Api-Version': '2022-11-28',
} as const;

async function getFileSha(repoPath: string): Promise<string | undefined> {
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${repoPath}`,
    { headers: H }
  );
  if (!res.ok) return undefined;
  const data = await res.json() as { sha?: string };
  return data.sha;
}

async function pushFile(repoPath: string, rawContent: Buffer): Promise<boolean> {
  const sha = await getFileSha(repoPath);
  const body = {
    message: `deploy: update ${repoPath}`,
    content: rawContent.toString('base64'),
    ...(sha ? { sha } : {}),
  };
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${repoPath}`,
    { method: 'PUT', headers: H, body: JSON.stringify(body) }
  );
  return res.ok;
}

const files = walk(BASE);
console.log(`Pushing ${files.length} files to github.com/${OWNER}/${REPO}...`);

let ok = 0;
let fail = 0;

for (const file of files) {
  const repoPath = relative(BASE, file);
  const raw = readFileSync(file);
  const success = await pushFile(repoPath, raw);
  if (success) { ok++; process.stdout.write('.'); }
  else { fail++; process.stdout.write(`\nFAIL: ${repoPath}\n`); }
  await new Promise((r) => setTimeout(r, 80));
}

console.log(`\n\nDone: ${ok} pushed, ${fail} failed`);
console.log(`https://github.com/${OWNER}/${REPO}`);
