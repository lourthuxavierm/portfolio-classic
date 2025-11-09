import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Lourthu Xavier M - Full Stack Developer | React .NET SQL Server",
  description = "Full Stack Developer specializing in React.js, .NET Core, and SQL Server. Building scalable web applications with modern technologies. Available for new opportunities.",
  canonical = "https://lourthuxavier.com",
  ogImage = "https://lourthuxavier.com/og-image.png",
  keywords = "Full Stack Developer, React Developer, .NET Developer, SQL Server, TypeScript, Web Applications, Portfolio, Lourthu Xavier M",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lourthu Xavier M" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lourthu Xavier M",
          jobTitle: "Full Stack Developer",
          url: canonical,
          sameAs: [
            "https://www.linkedin.com/in/lourthu-xavier-m",
            "https://github.com/lourthuxavierm",
          ],
          knowsAbout: [
            "React.js",
            "TypeScript",
            ".NET Core",
            "SQL Server",
            "Web Development",
            "Full Stack Development",
          ],
          description: description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruvannamalai",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          email: "mailto:lourthuxavierm@gmail.com",
          telephone: "+91-8870398675",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
