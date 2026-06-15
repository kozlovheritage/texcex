import React from 'react';
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Process from "./components/Process";
import About from "./components/About";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { ContactModalProvider } from "./hooks/use-contact-modal";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[hsl(var(--bg-primary))]">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <ForWhom />
        <Services />
        <Cases />
        <Process />
        <About />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactModalProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </ContactModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
