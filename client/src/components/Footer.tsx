import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Alexander Hansez</h3>
            <p className="text-sm text-muted-foreground">
              Film & Photography
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/alexanderhansez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alexander Hansez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

