import {useEffect, useState} from 'react';
import axios from "axios";

export const AccessoriesPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response);
                const filteredProducts = response.data.filter((product) => product.category === "men's clothing" || product.category === "women's clothing");
                setData(filteredProducts);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <section>
            <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 my-4">Products</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    data?.map((product) => (
                        <div key={product.id}
                             className="w-full bg-white rounded-2xl p-5 flex flex-col justify-between gap-6 shadow-2xl border border-gray-600 border-solid hover:cursor-pointer">
                            <figure className='w-full flex items-center justify-center min-h-[250px]'><img
                                src={product.image} className='w-full max-w-[150px] block object-contain' alt={product.category}/>
                            </figure>
                            <hr/>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-gray-900 min-h-[90px]">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 font-bold">$ {product.price}</p>
                                <button className='text-green-500 w-full py-4 px-3 border border-solid border-green-500 rounded hover:bg-green-500 hover:text-white'>
                                    Add to cart
                                </button>
                            </div>
                            </div>
                            ))}
                        </div>
            </div>
        </section>
    );
}
