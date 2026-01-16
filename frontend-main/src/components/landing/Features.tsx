import { Users, Search, Moon, Shield, Zap, Database } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Student Records',
    description: 'Store and manage comprehensive student information including contact details, grades, and enrollment dates.',
  },
  {
    icon: Search,
    title: 'Quick Search',
    description: 'Find any student instantly with powerful search capabilities across names, emails, and grades.',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Easy on the eyes with a beautiful dark theme that reduces eye strain during long work sessions.',
  },
  {
    icon: Shield,
    title: 'Data Validation',
    description: 'Built-in form validation ensures data integrity and prevents errors before they happen.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with instant updates and smooth animations for a delightful experience.',
  },
  {
    icon: Database,
    title: 'Local Storage',
    description: 'Your data persists automatically in browser storage, always available when you need it.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-muted/30 py-20 sm:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to simplify student management and boost your productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
