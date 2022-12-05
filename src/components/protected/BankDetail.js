import { Fragment, useContext, useState } from "react"
import axios from "../../api/axios";
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
import { AuthContext } from "../../context/AuthContext";

const BankDetail = ({bankinfo, setBankupdate}) => {

    const { token } =  useContext(AuthContext)

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const [bankname, setBankname] = useState(bankinfo !== null ? bankinfo.bank : '');
    const [accno, setAccno] = useState(bankinfo !== null ? bankinfo.account_no : '');
    const [accname, setAccname] = useState(bankinfo !== null ? bankinfo.account_name : '')
    const [acctype, setAcctype] = useState(bankinfo !== null ? bankinfo.account_type : '');
    const [updateProfile, setUpdateProfile] = useState('Update');
    const [success, setSuccess] = useState('');
    const [errmsg, setErrmsg] = useState('');
  

    const handleSubmit = async () => {

        if(bankname === '' || accname === '' || accno === '' || acctype === ''){
            alert('All fields must be filled!');
        }
        else{
            setUpdateProfile('Updating...');

            try{

                const BANK_UPDATE_API = bankinfo === null ? 'add-bank' : 'update-bank';

                const data = {
                    bank : bankname,
                    account_no : accno,
                    account_name : accname,
                    account_type : acctype
                }

                const response = await axios.post(BANK_UPDATE_API,
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );

                setSuccess(response.data.message);
                setErrmsg('');

            } catch (err) {
                if (!err?.response) {
                    setErrmsg('No Server Response');
                } else {
                    //console.log(err.response.data);
                    setErrmsg(err.response.data);
                }

                setSuccess('');
            }
            
            setUpdateProfile('Update');
            toggleShow();
            setBankupdate(Date.now());
        }

    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Bank Detail</h5>
                </div>
                <div className="card-body">                  
                    <p>
                        {success && <span className="text text-success">{success}</span>}
                        {errmsg && <span className="text text-danger">{errmsg}</span>}
                    </p>
                    {bankinfo === null ? 
                        <div className="bg-white text-warning border border-warning px-2 ">
                            <strong>No bank information provided yet! Click button below to Update.</strong>
                        </div>
                        :
                        <div className="row">
                            <span className="col-sm-4 pb-2"><strong>Bank</strong></span><span className="col-sm-8 pb-2">{bankinfo.bank}</span>

                            <span className="col-sm-4 py-2"><strong>Account No.</strong></span><span className="col-sm-8 py-2">{bankinfo.account_no}</span>

                            <span className="col-sm-4 py-2"><strong>Account Name</strong></span><span className="col-sm-8 py-2">{bankinfo.account_name}</span>

                            <span className="col-sm-4 py-2"><strong>Account type</strong></span><span className="col-sm-8 py-2">{bankinfo.account_type}</span>

                        </div>
                }
                    <MDBBtn 
                        onClick={toggleShow}    
                        className="btn btn-soft-info my-3 w-100"
                        style={{ height : 37 }}
                    >
                        Update bank detail
                    </MDBBtn>
                </div>        
            </div>

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Update Bank detail</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <div className="row px-2 mb-2">
                                <label className="form-label">Bank</label>
                                <input 
                                    type="text"
                                    value={bankname}
                                    className="form-control"
                                    placeholder="Enter bank name..."
                                    onChange={(e) => setBankname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="row px-2 mb-2">
                                <label className="form-label">Account No.</label>
                                <input 
                                    type="number"
                                    value={accno}
                                    className="form-control"
                                    placeholder="Enter account no..."
                                    onChange={(e) => setAccno(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="row px-2 mb-2">
                                <label className="form-label">Account Name</label>
                                <input 
                                    type="text"
                                    value={accname}
                                    className="form-control"
                                    placeholder="Enter account name..."
                                    onChange={(e) => setAccname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="row px-2 mb-2">
                                <label className="form-label">Account type</label>
                                <input 
                                    type="text"
                                    value={acctype}
                                    className="form-control"
                                    placeholder="Enter account type..."
                                    onChange={(e) => setAcctype(e.target.value)}
                                    required
                                />
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn
                                onClick={(e) => handleSubmit()}
                                style={{ height : 37 }}
                                className="btn btn-soft-primary w-100"
                            >
                                {updateProfile}
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default BankDetail