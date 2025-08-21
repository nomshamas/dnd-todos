import { useRef} from "react";
import Card from './components/Card.jsx';

const App = () => {

  const ref = useRef(null);

  const data = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      hobbies: ["reading", "hiking"],
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
      hobbies: ["gaming", "cycling"],
      address: {
        street: "456 Elm St",
        city: "Othertown",
      },
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      hobbies: ["cooking", "traveling"],
      address: {
        street: "789 Oak St",
        city: "Sometown",
      },
    },
    {
      id: 4,
      name: "Alice",
      age: 30,
      hobbies: ["reading", "hiking"],
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    },
    {
      id: 5,
      name: "Bob",
      age: 25,
      hobbies: ["gaming", "cycling"],
      address: {
        street: "456 Elm St",
        city: "Othertown",
      },
    },
    {
      id: 6,
      name: "Charlie",
      age: 28,
      hobbies: ["cooking", "traveling"],
      address: {
        street: "789 Oak St",
        city: "Sometown",
      },
    },
  ];

  return (
    <div className="fixed min-h-screen min-w-screen bg-zinc-800 p-6 overflow-hidden">
      <h1 className='absolute top-1/2 left-1/2 -translate-1/2 -z-10 leading-none tracking-tight text-5xl lg:text-8xl xl:text-9xl select-none'>Docs.</h1>
      <h2 className='text-zinc-500 text-sm lg:text-xl text-center leading-none tracking-tight mb-8'>Documents.</h2>
      <div ref={ref} className="h-[90vh] flex flex-col gap-4 overflow-hidden">
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'>
          {data.map((item) => (
            <Card key={item.id} user={item} reference={ref} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
