import { Link } from 'react-router-dom';
import card from './card.jpg';


const Stewardship = () => {

    return(
        <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-12">
                                    <div className="p-lg-5 p-4 auth-one-bg h-100">
                                        <div className="bg-overlay"></div>
                                        <div className="position-relative h-100 d-flex flex-column">
                                            <div>
                                                <Link to="/" className="d-block">
                                                    <img src="assets/images/logo-light.png" alt="" height="90" />
                                                </Link>
                                            </div>
                                            <div className="mb-4 mt-3">
                                                <span className="display-5 text-white">Recycle Stewardship Program</span>
                                            </div>
                                            <div className='row'>
                                                
                                                <div className='col-lg-5 mb-2'>
                                                    <img 
                                                        src={card}
                                                        alt="card"
                                                        width="100%"
                                                    />
                                                </div>

                                                <div className='col-lg-7 pl-3'>
                                                    
                                                    <div className="mb-3 mt-1">
                                                        <h4 className='text-warning' style={{ lineHeight : 1.5 }}>Financing Plastic Waste Recovery and Recycling Projects</h4> 
                                                    </div>

                                                    <div className="mb-0">
                                                        <p className='text text-white' style={{ fontSize : 15, textAlign : 'justify' }}>
                                                        Recycle Stewardship Program is an opportunity for Companies and Organizations to sponsor projects aimed to achieve plastic waste reduction and recycling commitment. It serves as the organizations Cooperate Social Responsibility (CSR) and also a part of their Plastic footprint reduction and mitigation strategy to reduce Plastic waste in the Environment while empowering and supporting community development.
                                                        </p>
                                                    </div>

                                                    <div className="mb-3 mt-1">
                                                        <h5 className='text-warning'>Contact Us On <span className="text-white">07031658657</span> to find Out More</h5> 
                                                    </div>

                                                    <div className="mb-4 mt-2">
                                                        <Link to="/login" className="btn btn-success rounded-pill p-3">Return to Home</Link>
                                                    </div>

                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Stewardship