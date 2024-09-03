'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return <Menu />;
};

export interface PizzaData {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate: number;
  country: string;
  qauntity: number;
}

const Menu = () => {
  const data: PizzaData[] = [
    {
      id: '001',
      img: 'https://media.istockphoto.com/id/1307275152/photo/healthy-gluten-free-cauliflower-crust-pizza-with-tomatoes-mushrooms-and-spinach-top-down-view.jpg?s=2048x2048&w=is&k=20&c=qpXjVfHYmKsZBCr_KP0xcGnA467FsEeyr8oEaHe_524=',
      name: 'Margherita Pizza',
      dsc: 'A classic Italian pizza with a simple yet flavorful topping of fresh tomatoes, mozzarella cheese, and basil. Perfectly balanced with a crispy crust.',
      price: 12.99,
      rate: 4.8,
      country: 'Rome, Italy',
      qauntity: 0
    },
    {
      id: '002',
      img: 'https://media.istockphoto.com/id/859395410/photo/homemade-pizza-with-tomatoes-top-view-on-dark-wooden-table.jpg?s=2048x2048&w=is&k=20&c=yEKh-6ioYjDLqSn4a19mEgLMHcE3N-9Ebr83K9s9Qjc=',
      name: 'Pepperoni Pizza',
      dsc: 'A favorite among pizza lovers, topped with spicy pepperoni slices, mozzarella cheese, and a rich tomato sauce. A crowd-pleaser every time!',
      price: 14.99,
      rate: 4.7,
      country: 'New York, NY',
      qauntity: 0
    },
    {
      id: '003',
      img: 'https://media.istockphoto.com/id/1092357466/photo/pizza-with-cheese-ham-pickled-cucumbers-meat-and-olives-on-chalk-board.jpg?s=2048x2048&w=is&k=20&c=Y5Wx08KgmgAmeRwaz7fwBAkGVMy2StsNSub4AgVueQk=',
      name: 'Vegetarian Pizza',
      dsc: 'Loaded with a variety of fresh vegetables including bell peppers, onions, mushrooms, and olives. A delicious and healthy option for veggie enthusiasts.',
      price: 13.49,
      rate: 4.6,
      country: 'Los Angeles, CA',
      qauntity: 0
    },
    {
      id: '004',
      img: 'https://media.istockphoto.com/id/821782828/photo/delicious-pizza-with-with-onions-bacon-and-cherry.jpg?s=2048x2048&w=is&k=20&c=53nNk-vZlNxp8eCNi9VLbF89v8cNFa6cr2vlNGwn_vc=',
      name: 'Barbecue Chicken Pizza',
      dsc: 'Featuring tender chicken pieces smothered in tangy barbecue sauce, along with red onions and cilantro. A smoky and sweet delight.',
      price: 15.99,
      rate: 4.8,
      country: 'Austin, TX',
      qauntity: 0
    },
    {
      id: '005',
      img: 'https://media.istockphoto.com/id/680827610/photo/hot-pizza-junk-food-unhealthy-eating-calories.jpg?s=2048x2048&w=is&k=20&c=9x2dJDJMHNqkm6oBfKB9XeFLcxPVjkXmTxdkjHbm4cM=',
      name: "Meat Lover's Pizza",
      dsc: 'For the meat enthusiasts, this pizza is piled high with pepperoni, sausage, bacon, and ham. A hearty and satisfying choice for those with a big appetite.',
      price: 16.99,
      rate: 4.9,
      country: 'Chicago, IL',
      qauntity: 0
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((pizza) => (
        <Card data={pizza} />
      ))}
    </div>
  );
};

const Card = ({ data }: { data: PizzaData }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img className="rounded-t-lg" src={data?.img} alt="" />
        </a>
        <div className="p-5">
          <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data?.name}
            </h5>
          </>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.dsc}
          </p>
          <button
            onClick={() => {
              addToCart(data);
            }}
            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart +
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
