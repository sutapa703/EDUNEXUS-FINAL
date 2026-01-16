const stats = [
  { value: '100%', label: 'Free to Use' },
  { value: '∞', label: 'Students Capacity' },
  { value: '0', label: 'Setup Required' },
  { value: '24/7', label: 'Always Available' },
];

export const Stats = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
