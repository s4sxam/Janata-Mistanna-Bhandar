import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useSubmitContactInquiry } from '../hooks/useQueries';
import { toast } from 'sonner';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '', isBulkOrder: false });
  const { mutate: submit, isPending } = useSubmitContactInquiry();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    submit(form, {
      onSuccess: () => {
        toast.success("Inquiry sent successfully!");
        setForm({ name: '', email: '', phone: '', inquiry: '', isBulkOrder: false });
      }
    });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 font-serif text-5xl font-bold">Contact Us</h1>
            <p className="mb-8 text-muted-foreground">Planning a wedding or a corporate event? We specialize in bulk orders and custom packaging.</p>
            <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground border-2 border-dashed">
              [Google Maps Integration]
            </div>
          </div>
          <Card className="border-saffron/20 shadow-xl">
            <CardHeader><CardTitle className="font-serif text-2xl">Send Inquiry</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleSend} className="space-y-4">
                <Input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                <Input placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                <Textarea placeholder="How can we help you?" value={form.inquiry} onChange={e => setForm({...form, inquiry: e.target.value})} rows={4} required />
                <div className="flex items-center gap-2">
                  <Checkbox id="bulk" checked={form.isBulkOrder} onCheckedChange={c => setForm({...form, isBulkOrder: c as boolean})} />
                  <Label htmlFor="bulk">This is a bulk/wedding inquiry</Label>
                </div>
                <Button className="w-full bg-saffron" disabled={isPending}>{isPending ? "Sending..." : "Submit Request"}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
