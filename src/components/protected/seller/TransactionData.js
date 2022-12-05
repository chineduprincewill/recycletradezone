import { Fragment, useContext, useState } from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom";
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
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const TransactionData = ({trans, setCancelval, setWeightSet}) => {

    const { token } = useContext(AuthContext);

    const [basicModal, setBasicModal] = useState(false);

    let curWeight = trans.weight === null ? '0.00' : trans.weight;
    const toggleShow = () => setBasicModal(!basicModal);
    const [weight, setWeight] = useState(curWeight);
    const [submit, setSubmit] = useState('Submit');
    const [complete, setComplete] = useState('Complete');

    const [ cancel, setCancel ] = useState('Cancel');

    const cancelRequest = async () => {

        if(window.confirm('Are you sure you want to cancel this transaction?')){

            setCancel('Cancelling...');

            try{
                const data = {
                    id : trans.id
                }
    
                const response = await axios.post('close-request',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Request successfully Cancelled.');
                setCancelval(trans.id);
                //setErrmsg('');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    console.log(err.response.data);
                }
    
                //setSuccess('');
            }

            setCancel('Cancel');
        }

    }

    const updateWeight = async () => {

        if(weight === '' || weight === '0.00'){
            alert('Weight must be entered!');
        }
        else{
            setSubmit('Submitting...');

            try{
                const data = {
                    id : trans.id,
                    weight : weight
                }

                console.log(data);
    
                const response = await axios.post('update-transaction',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Request successfully Updated.');
                console.log(response.data);
                setCancelval(trans.id);
                setWeightSet(Date.now());
                //setErrmsg('');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    console.log(err.response.data);
                }
    
                //setSuccess('');
            }

            setSubmit('Submit');
            //setWeight('');
        }
    }

    const completeRequest = async () => {
        if(window.confirm('Are you sure that all requirements are met by both parties before completing this request?')){

            setComplete('Completing...');

            try{
                const data = {
                    id : trans.id,
                    weight : trans.weight
                }
    
                const response = await axios.post('complete-transaction',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Request successfully Completed.');
                console.log(response.data);
                setWeightSet(Date.now());
                //setErrmsg('');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    console.log(err.response.data);
                }
    
                //setSuccess('');
            }

            setComplete('Complete');
        }
    }

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <img className="img-circle p-10" src={trans.buyer_img !== '' && trans.buyer_img !== null ? trans.buyer_img : profileImage} alt="User pix" style={{height: 70, marginRight: 20 }} />
                    <div className="flex-grow-1">
                        <Link to={trans.buyer !== null ? `/profile-detail/${trans.buyer}` : `#`}>
                            <h5>{trans.buyer === null || trans.buyer === '' ? <span className="lh-base mb-0 text-danger">No recycler yet!</span> :  <span className="lh-base mb-0 text-info">{trans.buyer_name}</span>}</h5>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Price / kg</strong> - `&#8358;{`${trans.price_per_kg}`}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Weight</strong> - {trans.weight !== null ? trans.weight : 'not weighed yet'}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Amount</strong> - &#8358;{`${trans.amount}`}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Status</strong> - <span className={trans.status === 'completed' ? 'text text-success' : 'text text-warning'}>{trans.status}</span>
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Date</strong> - <Moment format='MMMM Do YYYY'>{trans.created_at}</Moment>
                            </p>
                        </Link>
                    </div>
                </div>
                {trans.status !== 'completed' && 
                    <div className="d-flex p-1 border-top">
                        {trans.status === 'open' && 
                        <Link 
                            to="/view-bids"
                            state={{ transObject : trans }}
                            className='btn btn-soft-success mx-3'
                            title="view biddings" 
                        > 
                            View bids
                        </Link>}
                        {trans.status === 'in progress' && (
                            <button 
                            className="btn btn-soft-success mx-3"
                            onClick={(e) => completeRequest()}
                            >
                                {complete}
                            </button>
                        )}
                        <MDBBtn 
                            onClick={toggleShow}    
                            className="btn btn-soft-info mx-3"
                            style={{ height : 37, width : 100 }}
                        >
                            Update
                        </MDBBtn>
                        <button 
                            className="btn btn-soft-danger mx-3"
                            onClick={(e) => cancelRequest()}
                        >
                            {cancel}
                        </button>
                    </div>
                }
            </div>

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Update Request</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className="row mb-2">
                            <span className="col-sm-4">Recycler</span>
                            <span className="col-sm-8 text-info">{trans.buyer_name}</span>
                        </div>
                        <div className="row mb-3">
                            <span className="col-sm-4">Price / kg</span>
                            <span className="col-sm-8 text-info">&#8358;{trans.price_per_kg}</span>
                        </div>
                        <div className="row px-2">
                            <input 
                                type="number"
                                value={weight}
                                className="form-control"
                                placeholder="Enter weight..."
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter>
                    <MDBBtn
                        onClick={(e) => updateWeight()}
                        style={{ height : 37 }}
                        className="btn btn-soft-primary w-100"
                    >
                        {submit}
                    </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default TransactionData

