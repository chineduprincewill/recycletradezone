import { Fragment, useState } from "react"
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
  } from 'mdb-react-ui-kit';

//const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const MarketProduct = ({prod}) => {

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);


    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    
                    <div className="flex-grow-1">
                        <h5 className="text text-info">{prod.product}</h5>
                        <p className="mb-0 text-muted">
                            Country - <strong>{prod.state}</strong>
                        </p>
                        <p className="mb-0 pt-1 text-muted">
                            Minimum Order Quantity - <strong>{prod.quantity} Tons</strong>
                        </p>
                        <p className="mb-0 pt-1 text-muted">
                            Supplying Ability - <strong>{prod.price_per_kg} Tons per month</strong>
                        </p>
                        <p className="mb-0 pt-1 text-muted">
                        Tel : <strong>{prod.phonenumber}</strong>
                        </p>
                    </div>
                </div>
            </div>

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Product detail</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        
                    </MDBModalBody>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default MarketProduct

