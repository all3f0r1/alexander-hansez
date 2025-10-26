export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=800&fit=crop"
              alt="Alexander Hansez"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Alexander Hansez</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Photographe professionnel passionné par la capture de moments authentiques et intemporels. 
              Avec plus de 10 ans d'expérience dans la photographie de mariage, d'événements et de portraits, 
              je m'efforce de créer des images qui racontent des histoires uniques.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche combine une sensibilité artistique avec une technique maîtrisée, 
              permettant de capturer l'essence de chaque moment avec élégance et naturel.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h4 className="text-xl font-semibold mb-3">Mariages</h4>
                <p className="text-muted-foreground">
                  Couverture complète de votre journée spéciale, des préparatifs à la réception, 
                  avec une approche documentaire et artistique.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h4 className="text-xl font-semibold mb-3">Événements</h4>
                <p className="text-muted-foreground">
                  Documentation professionnelle de vos événements corporatifs, concerts, 
                  conférences et célébrations privées.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h4 className="text-xl font-semibold mb-3">Portraits</h4>
                <p className="text-muted-foreground">
                  Séances photo professionnelles pour headshots corporate, portraits artistiques 
                  et photographie personnelle.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h4 className="text-xl font-semibold mb-3">Studio</h4>
                <p className="text-muted-foreground">
                  Accès à nos studios professionnels avec différentes ambiances 
                  (Green Room, Blue Room, White Room).
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Philosophie</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Je crois que chaque image doit raconter une histoire authentique. Mon travail se concentre 
              sur la capture de moments spontanés et d'émotions véritables, créant ainsi des souvenirs 
              qui résisteront à l'épreuve du temps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Que ce soit pour un mariage, un événement corporatif ou une séance portrait, 
              j'apporte la même attention aux détails et la même passion pour créer des images 
              exceptionnelles qui dépassent vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

