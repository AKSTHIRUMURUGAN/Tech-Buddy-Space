import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      className="py-20 bg-white text-black dark:from-gray-800 dark:bg-black dark:text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="mb-4 text-3xl font-bold glow-text text-black dark:text-white"
          data-aos="fade-up"
        >
          Join the TechBuddySpace Revolution
        </h2>
        <p
          className="mb-8 text-lg text-black dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Be part of our Buddy Gang and experience a new way of learning tech skills. Break free from traditional
          education barriers and scams.
        </p>
        <p
          className="mb-8 text-lg text-black dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Learn, build, and succeed together in a supportive community. Your journey to becoming a skilled tech
          professional starts here!
        </p>
        <Button
          size="md"
          variant="secondary"
          className="animate-pulse glow-button p-2"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Be Our Buddy Gang (Registration Open Soon)
          <FaArrowRight className="ml-2" />
        </Button>
        <p
          className="mt-4 text-sm text-black dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Visit us at{" "}
          <a href="https://techbuddyspace.xyz" className="underline">
            TechBuddySpace.xyz
          </a>{" "}
          for more information.
        </p>
      </div>
    </section>
  );
}
