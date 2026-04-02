import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-6 max-w-2xl text-start">          
          <h1 className={cn(
            "text-4xl font-extrabold tracking-tight lg:text-6xl",
            "font-sans" 
          )}>
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {t('heroDescription')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8">
              {t('getStarted')}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -end-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}