"use client";

import { useState } from "react";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";
import Link from "next/link";

export default function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 max-w-md text-center">
        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to PlacementSprint. We've sent your receipt and login details to your email.
        </p>
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all inline-block"
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Secure Checkout</h1>
        <p className="text-xl text-muted-foreground">Complete your enrollment to get started.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <div className="bg-white/5 border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6" /> Payment Details
            </h2>
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com"
                  className="w-full bg-black/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Card Information</label>
                <div className="border border-border rounded-lg overflow-hidden bg-black/50">
                  <input 
                    type="text" 
                    required
                    placeholder="Card number"
                    className="w-full bg-transparent border-b border-border px-4 py-3 text-white focus:outline-none focus:bg-white/5 transition-colors"
                  />
                  <div className="flex">
                    <input 
                      type="text" 
                      required
                      placeholder="MM / YY"
                      className="w-1/2 bg-transparent border-r border-border px-4 py-3 text-white focus:outline-none focus:bg-white/5 transition-colors"
                    />
                    <input 
                      type="text" 
                      required
                      placeholder="CVC"
                      className="w-1/2 bg-transparent px-4 py-3 text-white focus:outline-none focus:bg-white/5 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name on Card</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? "Processing..." : (
                  <>
                    <Lock className="w-5 h-5" /> Pay $297.00
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                This is a secure, encrypted payment. (Mock)
              </p>
            </form>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white/5 border border-border rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">PlacementSprint Access</span>
                <span className="font-medium">$297.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">$0.00</span>
              </div>
            </div>
            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-extrabold">$297.00</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Full lifetime access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 1-on-1 Resume Review
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 2 AI Mock Interviews
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}