import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Simple & Powerful Student Management</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Manage Students{' '}
            <span className="relative">
              <span className="relative z-10 text-primary">Effortlessly</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10" />
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            A modern, intuitive platform to organize student records, track enrollment, 
            and streamline your educational administration. Built for educators who value simplicity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 px-8">
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#features">
                <GraduationCap className="h-4 w-4" />
                Learn More
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Image / Preview */}
        <div className="mt-16 sm:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-sm text-muted-foreground">Student Manager Dashboard</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                {[
                  { name: 'John Doe', grade: '10th', email: 'john@school.edu' },
                  { name: 'Jane Smith', grade: '9th', email: 'jane@school.edu' },
                  { name: 'Michael Johnson', grade: '11th', email: 'michael@school.edu' },
                ].map((student, i) => (
                  <div key={i} className="rounded-lg border border-border bg-background p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.grade} Grade</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{student.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
