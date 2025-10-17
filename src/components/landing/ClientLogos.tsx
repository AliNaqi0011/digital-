'use client';

import { Building2, Zap, Globe, Shield, Cpu, Database } from 'lucide-react';

const clients = [
  { name: 'TechCorp', icon: Building2 },
  { name: 'InnovateLab', icon: Zap },
  { name: 'GlobalTech', icon: Globe },
  { name: 'SecureNet', icon: Shield },
  { name: 'DataFlow', icon: Database },
  { name: 'CloudSync', icon: Cpu }
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <p className="text-center text-muted-foreground mb-8">Trusted by leading companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Icon className="w-6 h-6" />
                <span className="font-semibold">{client.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}