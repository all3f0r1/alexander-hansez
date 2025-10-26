import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in my services? Please reach out to me, and we'll figure something out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 XXX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:contact@alexanderhansez.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    contact@alexanderhansez.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+32123456789" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +44 (actual number)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    London, UK
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/alexanderhansez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @alexanderhansez
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-sm">
              <h3 className="font-semibold mb-3">Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

