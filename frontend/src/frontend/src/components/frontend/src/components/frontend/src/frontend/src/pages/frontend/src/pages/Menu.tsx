import { useEffect } from 'react';
import { useGetProductsByCategory, useInitializeMenu } from '../hooks/useQueries';
import { Category } from '../backend';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

export function Menu() {
  const { data: signature = [], isLoading: l1 } = useGetProductsByCategory(Category.signatureSweets);
  const { data: specialties = [], isLoading: l2 } = useGetProductsByCategory(Category.specialties);
  const { mutate: init } = useInitializeMenu();

  useEffect(() => {
    if (!l1 && !l2 && signature.length === 0 && specialties.length === 0) init();
  }, [l1, l2, signature, specialties, init]);

  if (l1 || l2) return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-saffron" /></div>;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-5xl font-bold">Our Sweet Collection</h1>
        
        <h2 className="mb-8 border-b-2 border-saffron pb-2 font-serif text-3xl font-bold">Signature Sweets</h2>
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {signature.map((p, i) => (
            <Card key={i} className="overflow-hidden border-gold/20">
              <div className="h-48 bg-cream/50 p-8 flex items-center justify-center text-saffron font-bold text-2xl uppercase tracking-widest">{p.name}</div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">{p.name}</CardTitle>
                  <Badge variant="secondary" className="bg-saffron text-white">₹{Number(p.price)}/kg</Badge>
                </div>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{p.description}</p></CardContent>
            </Card>
          ))}
        </div>

        <h2 className="mb-8 border-b-2 border-gold pb-2 font-serif text-3xl font-bold">Specialties</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {specialties.map((p, i) => (
            <Card key={i} className="overflow-hidden border-gold/20">
               <div className="h-48 bg-gold/10 p-8 flex items-center justify-center text-gold font-bold text-2xl uppercase tracking-widest">{p.name}</div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">{p.name}</CardTitle>
                  <Badge className="bg-gold text-white">₹{Number(p.price)}/kg</Badge>
                </div>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{p.description}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
