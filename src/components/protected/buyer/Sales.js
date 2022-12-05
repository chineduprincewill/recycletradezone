import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

import { AuthContext } from "../../../context/AuthContext"
import Spinner from "../../../spinners/Spinner";
import Sale from './Sale';

const Sales = () => {

    const { isLoggedin, token, user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [products, setProducts] = useState(null);
    const [result, setResult] = useState('');
    const [updatestat, setUpdatestat] = useState();

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = (e) => {
        e.preventDefault();
        setBasicModal(!basicModal)
    };

    const [product, setProduct] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();

    const [add, setAdd] = useState('Add');

    const fetchProducts = async () => {

        const response = await axios.get('buyer-trades',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setProducts(response.data.trades);
        console.log(response.data.trades);
    }


    const filterProducts = val => {

        const searchResult = products.filter((item) => {
            return Object.keys(item).some(key => (typeof item[key] === 'string' && item[key].includes(result))
            || ((typeof item[key] === 'number') && item[key] === Number(result)));
        });

        setProducts(searchResult);
    }


    const addProduct = async () => {

        setAdd('Adding...');

        try{
            const data = {
                product,
                category,
                quantity,
                price_per_kg : price
            }

            const response = await axios.post('create-trade',
                data,
                {
                    headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                }
            );

            alert('Product successfully added.');
            console.log(response.data);
            //setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                //console.log(err.response.data);
                console.log(err.response.data);
            }

            
            setAdd('Add');
        }

        setUpdatestat(Date.now());
        setAdd('Add');
    }


    useEffect(() => {

        isLoggedin ? (result !== '' ? filterProducts(result) : fetchProducts()) : navigate('/login');
    }, [result, updatestat])



    return(
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Products</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Products</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                            <div className="h-100">
                                <div className="row mb-3 pb-1">
                                    <div className="col-12">
                                        <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-16 mb-1">Good Day, {user === null ? '' : `${user.fullname}`}!</h4>
                                                <p className="text-muted mb-0">What's happening with you today?</p>
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
                                                                
                                                                <MDBBtn 
                                                                    onClick={toggleShow}    
                                                                    className="btn btn-soft-info mx-3"
                                                                    style={{ height : 37, width : 120 }}
                                                                >
                                                                    Add Product
                                                                </MDBBtn>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>

                                                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                                    <MDBModalDialog>
                                                    <MDBModalContent>
                                                        <MDBModalHeader>
                                                        <MDBModalTitle>Add Product</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                                        </MDBModalHeader>
                                                        <MDBModalBody>
                                                            
                                                            <div className="row p-2">
                                                                <label className="form-label">Product</label>
                                                                <input 
                                                                    type="text"
                                                                    value={product}
                                                                    className="form-control"
                                                                    placeholder="Enter product..."
                                                                    onChange={(e) => setProduct(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="row p-2">
                                                                <label className="form-label">Category</label>
                                                                <select 
                                                                    required="required" 
                                                                    className="form-control"
                                                                    value={category}
                                                                    onChange={(e) => setCategory(e.target.value)}
                                                                >
                                                                        <option></option>
                                                                        <option value="Plastics">Plastics</option>
                                                                        <option value="Metals">Metals</option>
                                                                        <option value="Glass">Glass</option>
                                                                        <option value="Paper/Cardboard">Paper/Cardboard</option>
                                                                </select>
                                                            </div>
                                                            <div className="row p-2">
                                                                <label className="form-label">Minimum Order Quantity (Tons)</label>
                                                                <input 
                                                                    type="number"
                                                                    value={quantity}
                                                                    className="form-control"
                                                                    placeholder="in Tons..."
                                                                    onChange={(e) => setQuantity(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="row p-2">
                                                                <label className="form-label">Supplying Ability</label>
                                                                <input 
                                                                    type="number"
                                                                    value={price}
                                                                    className="form-control"
                                                                    placeholder="Tons per month"
                                                                    onChange={(e) => setPrice(e.target.value)}
                                                                />
                                                            </div>
                                                        </MDBModalBody>

                                                        <MDBModalFooter>
                                                        <MDBBtn
                                                            onClick={addProduct}
                                                            style={{ height : 37 }}
                                                            className="btn btn-soft-primary w-100"
                                                        >
                                                            {add}
                                                        </MDBBtn>
                                                        </MDBModalFooter>
                                                    </MDBModalContent>
                                                    </MDBModalDialog>
                                                </MDBModal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {products === null ? <Spinner /> : (products === undefined ? <span className="bg-warning text-white p-2 my-3">Oops! it's like your session has expired. Sign out and Sign in again.</span> :(
                            products.length === 0 ? <span className="bg-danger text-white p-2 my-3">You currently do not have any product in your stock.</span> :
                            products.map(prod => {
                                return (<div key={prod.id} className="col-xl-4">
                                <Sale prod={prod} setUpdatestat={setUpdatestat} />
                                </div>)
                            }))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales