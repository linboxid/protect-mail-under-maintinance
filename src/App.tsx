import { BackgroundBeams } from "@/components/atomic/templates/background-beams.tsx";
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail("support@linbox.id");
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#0f182a] antialiased">
      <main className="z-10 flex flex-col items-center gap-4 px-4 text-center">
        {/* Logo */}
        <img
          src="/logo-dark-horizontal.svg"
          alt="Company logo"
          className="mb-6 w-40 md:w-60"
          loading="lazy"
        />

        {/* Badge */}
        <span className="rounded-full bg-gray-700 px-4 py-2 text-sm font-bold uppercase text-white">
          Under Maintenance
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white md:text-7xl">
          We&apos;ll be back soon
        </h1>

        {/* Description */}
        <p className="text-sm text-neutral-400">
          Our site is currently undergoing scheduled maintenance.
          <br />
          Thank you for your patience — please check back shortly.
        </p>

        {/* Contact */}
        <p className="mt-4 text-sm text-neutral-400">
          Questions? Contact us via email{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-white underline underline-offset-4 hover:text-neutral-200"
          >
            {email}
          </a>{" "}
          or reach our WhatsApp Customer Service.
        </p>
      </main>

      {/* Background */}
      <BackgroundBeams />
    </div>
  );
}

export default App;
