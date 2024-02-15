import React from "react";
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
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="pr-64 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {itemName}
      </th>
      <td className="px-6 py-4">{color}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4 text-right">
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
      </td>
    </tr>
  );
};

export default TableContaints;
