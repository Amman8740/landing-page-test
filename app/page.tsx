import { BleedGroup } from "@/components/marketing/BleedGroup";
import { CTA } from "@/components/marketing/CTA";
import { DashboardShowcase } from "@/components/marketing/DashboardShowcase";
import { Feature, FeatureBulletsShowcase } from "@/components/marketing/FeatureBulletShowcase";
import { FeatureChecklistBowl } from "@/components/marketing/FeatureChecklistBowl";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { NavBar } from "@/components/marketing/Navbar";
import { SecurityFeatures } from "@/components/marketing/SecurityFeatures";
import { FeatureStats } from "@/components/marketing/Stats";
import { Supporters } from "@/components/marketing/Supporters";
import { Testimonials } from "@/components/marketing/Testimonial";


const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Founder, Papercut",
    avatar: "/avatars/floyd.png",
    quote:
      "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis.",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Ops Lead",
    avatar: "/avatars/esther.png",
    quote:
      "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.",
  },
  {
    id: 3,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/avatars/erat.png",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },  {
    id: 6,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/avatars/erat.png",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
    {
    id: 4,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/avatars/erat.png",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
    {
    id: 5,
    name: "Erat consectetur",
    role: "Product @ Delta",
    avatar: "/avatars/erat.png",
    quote:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit.",
  },
];
export default function Home() {
    const featureBullets : Feature[] = [
    {
      id: 1,
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/financial-dashboard.png",
      imageAlt: "Full dashboard",
    },
    {
      id: 2,
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/dashboard-zoom1.png",
      imageAlt: "Deposits and withdrawals",
    },
    {
      id: 3,
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.",
      imageSrc: "/images/dashboard-zoom2.png",
      imageAlt: "Charts and KPIs",
    },
  ] as const;
  return(
    <main className="min-h-dvh bg-[#0b0c10] text-white">
      <NavBar />
      <Hero />
      <BleedGroup>
      <Supporters />
      <DashboardShowcase imageSrc="/images/financial-dashboard.png" imageAlt="Financial dashboard" />
      <FeatureStats/>
      <SecurityFeatures/>
      <FeatureChecklistBowl
  leftScreenshots={["/images/ss.png"]}
  left={{
    titleA: "Lorem Ipsum",
    titleB: "Dolar Sed",
    titleC: "congue",
    bullets: [
      "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
      "Consectetur enim nulla risus elementum mattis.",
      "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
      "Consectetur enim nulla risus elementum mattis.",
    ],
  }}
  rightScreenshots={[
    "/images/ss4.png",
    "/images/ss3.png",
    "/images/ss2.png",
    "/images/ss5.png",
  ]}
  right={{
    titleA: "Lorem Ipsum",
    titleB: "Dolar Sed",
    titleC: "congue",
    bullets: [
      "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
      "Consectetur enim nulla risus elementum mattis.",
      "Pellentesque odio sit sem nulla fringilla cum diam morbi at.",
      "Consectetur enim nulla risus elementum mattis.",
    ],
  }}
/>
      <FeatureBulletsShowcase
        heading="Lorem ipsum dolor"
        features={featureBullets}
        defaultImageSrc="/images/financial-dashboard.png"
        defaultImageAlt="Product screenshot"
      />
      <Testimonials items={testimonials} />
      <CTA />
      </BleedGroup>
      <Footer/>
    </main>
  )
}