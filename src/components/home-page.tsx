import { getDictionary, type Locale } from "@/lib/i18n";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Skills dict={dict} locale={locale} />
      <Projects dict={dict} locale={locale} />
      <Contact dict={dict} />
    </>
  );
}
