import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex gap-3">
        <Button isLoading color="primary">
          Loading
        </Button>
      </div>
    </section>
  );
}
