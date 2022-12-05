import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import Spinner from "../spinners/Spinner";
import MarketProduct from './MarketProduct';

const Market = () => {

    const [products, setProducts] = useState(null);
    const [result, setResult] = useState('');

    const fetchProducts = async () => {

        const response = await axios.get('all-trades',
            {
                headers: { 'Accept' : 'application/json' }
            }
        );

        setProducts(response.data.trades);
    }


    const filterProducts = val => {

        const searchResult = products.filter((item) => {
            return Object.keys(item).some(key => (typeof item[key] === 'string' && item[key].includes(result))
            || ((typeof item[key] === 'number') && item[key] === Number(result)));
        });

        setProducts(searchResult);
    }


    useEffect(() => {
        result !== '' ? filterProducts(result) : fetchProducts();
    }, [result])

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0"></h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/login" className="text text-info">Create account with us</Link></li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="h-100">
                                <div className="row mb-3 pb-1">
                                    <div className="col-12">
                                        <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                            <div className="flex-grow-1">
                                                <h2 className="fs-28 mb-1 text-info">Welcome to the <strong className="text text-warning">Trade Zone!</strong></h2>
                                                <p className="text-muted mb-0">Search through to find available recycled products from various vendors</p>
                                            </div>
                                            <div className="mt-3 mt-lg-0">
                                                <form >
                                                    <div className="row g-3 mb-0 align-items-center">
                                                        <div className="col-sm-auto">
                                                            <div className="input-group">
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control border-0 dash-filter-picker shadow" 
                                                                    placeholder="Search"
                                                                    value={result}
                                                                    onChange={(e) => setResult(e.target.value)}
                                                                />
                                                                <div className="input-group-text bg-primary border-primary text-white">
                                                                    <i className="ri-search-eye-line align-middle me-2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {products === null ? <Spinner /> : (products.length == 0 ? <span className="bg-warning text-white p-2 my-3">Oops! No available product in trade zone.</span> :
                            products.map(prod => {
                                return (<div key={prod.id} className="col-xl-4">
                                    <MarketProduct prod={prod} />
                                </div>)
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market;