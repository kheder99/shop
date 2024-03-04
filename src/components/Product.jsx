
import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import products from '../data';

export default function Product() {
    const {id} = useParams();
    //eslint-disable-next-line no-unused-vars
    const [data,setData] = useState(products);
    const [product,setProduct] = useState(data);

    const productDetails = (id)=> {
        const productDetails1 = data.filter ( (prod) => prod.id===parseInt(id) );
        setProduct(productDetails1);
        
        console.log(id)
    }
    useEffect(() => {
        productDetails(id);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    return (
        
        <div className='product-page'>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6">
                    <img src={product[0].image} alt={product[0].title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product[0].category}</h4>
                    <h1 className="display-5">{product[0].title}</h1>
                    <p className="lead">
                        Rating {product[0].rating.rate} 
                        <i className="fa fa-star"></i> ({product[0].rating.count })
                    </p>
                    <h3 className="display-6 fw-bold my-4">${product[0].price}</h3>
                    <p className="lead">{product[0].description}</p>
                    <button className="btn btn-dark outline-dark px-4 py-2">Add to Cart</button>
                    <NavLink  to ="/"className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>
                </div> 
                
            </div>
        </div>
    )
}
