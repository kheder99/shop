import React,{useState,useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import products from '../data';

export default function Products() {
    const [data,setData] = useState(products);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;
    const filterProduct = (cate)=> {
        const filteredList = data.filter((product) => product.category===cate);
        setFilter(filteredList);
        console.log(filteredList)
    }
    const list = 
                filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" height ="250px" alt={product.title}/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-dark outline-white" >Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                            
                        </>
                        
                    )
                })
    
    const ShowProducts = () => {
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-dark outline-white me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-dark outline-white me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-dark outline-white me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-dark outline-white me-2" onClick={()=>filterProduct("jewelery")}>Jewelry</button>
                    <button className="btn btn-dark outline-white me-2" onClick={()=>filterProduct("Electronic")}>Electronic</button>
                </div>
                {list.length===0? <h1 className='error'>Coming Soon</h1> : list}
            </>
        );
    }

    return (
        <div id='products'>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts/>
                </div>
            </div>
        </div>
    );
}
