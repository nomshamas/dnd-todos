import {motion} from 'framer-motion'

const Card = ({ user, reference }) => {
  const { name, age, hobbies, address } = user;

  return (
    <motion.div drag whileDrag={{scale:1.1}} dragConstraints={reference}
    className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer select-none p-4">

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h2>

      <p className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-gray-700">Age:</span> {age}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-700">Address:</span> {address.street}, {address.city}
      </p>

      <div>
        <h3 className="text-base font-medium text-gray-700 mb-2">Hobbies</h3>
        <ul className="flex flex-wrap gap-2">
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-blue-100 transition"
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
