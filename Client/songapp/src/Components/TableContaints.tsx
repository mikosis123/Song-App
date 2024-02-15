import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { baseurl } from "../axios/Baseurl";
interface TableRowProps {
  itemName: string;
  color: string;
  category: string;
  price: number;
  onEditClick?: () => void; // Optional prop for handling edit click
}

const TableContaints = ({
  itemName,
  color,
  category,
  price,
  onEditClick,
}: TableRowProps) => {
  const [Title, setTitle] = useState([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    axios.get(`${baseurl}/get`).then((res) => {
      console.log(res.data);
    });
  }, [input]);
  const addsong = () => {
    axios.post(`${baseurl}/save`, { Title: input }).then((res) => {
      console.log(res.data);
      setInput("");
    });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="pr-64 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {itemName}
      </th>
      <td className="px-6 py-4 text-xl">{color}</td>
      <td className="px-6 py-4 text-xl">{category}</td>
      <td className="px-6 py-4 text-xl">${price}</td>
      <td className="px-6 py-4 text-right text-xl">
        <a
          href="#"
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={onEditClick}
        >
          Edit
        </a>
        <a
          href="#"
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={onEditClick}
        >
          Delete
        </a>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter song"
        ></input>
        <button type="button" onClick={addsong}>
          submit
        </button>
      </td>
    </tr>
  );
};

export default TableContaints;
