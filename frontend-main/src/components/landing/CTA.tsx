import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-16 sm:px-16 sm:py-20">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 h-[400px] w-[400px] rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 h-[300px] w-[300px] rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join educators who trust our platform for managing student records. 
              No signup required – start using it immediately.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="gap-2 px-8"
            >
              <Link to="/dashboard">
                Start Managing Students
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
