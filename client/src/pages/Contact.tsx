import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GET IN TOUCH</h1>
          
          <div className="space-y-2 text-lg text-muted-foreground">
            <p>Got any question(s)?</p>
            <p>Look no further.</p>
            <p>Just leave a message and I'll get back to you within 24h.</p>
            <div className="mt-4">
              <p className="font-semibold">Email</p>
              <a 
                href="mailto:info@alexanderhansez.com" 
                className="text-foreground hover:underline"
              >
                info@alexanderhansez.com
              </a>
            </div>
            <p className="mt-4">Or try the chat</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

