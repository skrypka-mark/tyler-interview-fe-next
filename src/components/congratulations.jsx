import Button from "@/components/button";

export default function Congratulations({ goBack }) {
  return (
    <section className="flex flex-col h-full">
      <h1 className="text-4xl font-bold m-auto">Congratulations 🎉</h1>
      <footer className='self-end mt-auto p-8'>
        <Button variant='secondary' onClick={goBack}>Back</Button>
      </footer>
    </section>
  );
}
