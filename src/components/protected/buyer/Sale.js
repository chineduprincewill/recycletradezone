import { Fragment, useContext, useState } from "react"
import axios from "../../../api/axios";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { AuthContext } from "../../../context/AuthContext";

//const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const Sale = ({prod, setUpdatestat}) => {

    const { token } = useContext(AuthContext);

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const [product, setProduct] = useState(prod.product);
    const [category, setCategory] = useState(prod.category);
    const [quantity, setQuantity] = useState(prod.quantity);
    const [price, setPrice] = useState(prod.price_per_kg);

    const [updating, setUpdating] = useState('Update');
    const [deact, setDeact] = useState('Deactivate');
    const [act, setAct] = useState('Activate');


    const updateProduct = async () => {

        setUpdating('Updating');

        try{
            const data = {
                id : prod.id,
                product,
                category,
                quantity,
                price_per_kg : price
            }

            const response = await axios.post('update-trade',
                data,
                {
                    headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                }
            );

            alert('Product successfully updated.');
            console.log(response.data);
            //setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                //console.log(err.response.data);
                console.log(err.response.data);
            }

            setUpdatestat(Date.now());
            setUpdating('Update');
        }
    }


    const deactivateProduct = async () => {

        if(window.confirm('Are you sure you want to deactivate this product?')){

            setDeact('Deactivating...');

            try{
                const data = {
                    id : prod.id
                }
    
                const response = await axios.post('deactivate-trade',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Product successfully deactivated');
                console.log(response.data);
                setUpdatestat(Date.now());
                setDeact('Deactivate');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    console.log(err.response.data);
                }
            }
        }
    }


    const activateProduct = async () => {

        if(window.confirm('Are you sure you want to activate this product?')){

            setAct('Activating...');

            try{
                const data = {
                    id : prod.id
                }
    
                const response = await axios.post('activate-trade',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Product successfully activated');
                console.log(response.data);
                setUpdatestat(Date.now());
                setAct('Activate');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    console.log(err.response.data);
                }
            }
        }
    }


    return (
        <Fragment>
              <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <div className="flex-grow-1 px-3">
                        <h5><span className="lh-base mb-0 text-info">{product}</span></h5>
                        <p className="mb-0 py-1 text-muted">
                            <strong>Category</strong> : <span className="mx-4">{category}</span>
                        </p>
                        <p className="mb-0 py-1 text-muted">
                            <strong>Minimum Order Quantity</strong> : <span className="mx-4">{`${quantity} Ton`}</span>
                        </p>
                        <p className="mb-0 py-1 text-muted">
                            <strong>Supplying Ability</strong> : <span className="mx-4">{`${price}`} Ton per Month</span>
                        </p>
                    </div>
                </div>
                <div className="d-flex py-1 px-3 border-top">
                    {prod.status != 0 ? 
                    <button 
                        className="btn btn-soft-danger mx-2"
                        onClick={deactivateProduct}
                    >
                        {deact}
                    </button> :
                    <button 
                        className="btn btn-soft-success mx-2"
                        onClick={activateProduct}
                    >
                        {act}
                    </button>}
                    <MDBBtn 
                        onClick={toggleShow}    
                        className="btn btn-soft-info mx-2"
                        style={{ height : 37, width : 100 }}
                    >
                        Update
                    </MDBBtn>
                </div>
            </div>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Update Product</MDBModalTitle>
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
                                    <option value={category}>{category}</option>
                                    <option value="Plastics">Plastics</option>
                                    <option value="Metals">Metals</option>
                                    <option value="Glass">Glass</option>
                                    <option value="Paper/Cardboard">Paper/Cardboard</option>
                            </select>
                        </div>
                        <div className="row p-2">
                            <label className="form-label">Minimum Order Quantity</label>
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
                                placeholder="in Tons..."
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter>
                    <MDBBtn
                        onClick={updateProduct}
                        style={{ height : 37 }}
                        className="btn btn-soft-primary w-100"
                    >
                        {updating}
                    </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default Sale