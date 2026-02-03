import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle2, Trophy, Users } from 'lucide-react';
import { useGetAllTestimonials } from '../hooks/useQueries';

export function Home() {
  const navigate = useNavigate();
  const { data: testimonials = [] } = useGetAllTestimonials();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-saffron/10 via-cream to-gold/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-saffron/20 px-4 py-1 text-sm font-semibold text-saffron">
            Bengali Sweet Paradise | Est. 1968
          </span>
          <h1 className="mb-6 font-serif text-5xl font-extrabold leading-tight md:text-7xl">
            Authentic Taste of <span className="text-saffron">Bengal</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            The Best Sweet Shop in Habra & Nagarukhra. Preserving traditional recipes for over 50 years.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-saffron hover:bg-saffron/90" onClick={() => navigate({ to: '/menu' })}>View Menu</Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>Order Now</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            { icon: CheckCircle2, title: "Freshly Made Daily", text: "Prepared at dawn using traditional methods." },
            { icon: Trophy, title: "Pure Ingredients", text: "Organic milk and zero artificial flavors." },
            { icon: Users, title: "Traditional Recipes", text: "Legacy recipes passed down since 1968." }
          ].map((f, i) => (
            <Card key={i} className="border-gold/20 bg-cream/20 text-center">
              <CardContent className="pt-8">
                <f.icon className="mx-auto mb-4 h-12 w-12 text-saffron" />
                <h3 className="mb-2 font-serif text-2xl font-bold">{f.title}</h3>
                <p className="text-muted-foreground">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-cream/20 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-4xl font-bold">Customer Love</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.slice(0, 3).map((t, i) => (
                <Card key={i} className="border-gold/10">
                  <CardContent className="pt-8 text-center">
                    <div className="mb-4 flex justify-center text-gold">
                      {Array.from({ length: Number(t.rating) }).map((_, idx) => <Star key={idx} fill="currentColor" size={18} />)}
                    </div>
                    <p className="mb-4 italic text-muted-foreground">"{t.review}"</p>
                    <p className="font-bold text-saffron">— {t.customerName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
