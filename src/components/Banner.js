import { Link } from "react-router-dom"

const Banner = () => {

    return(
        <div className="col-lg-6">
            <div className="p-lg-5 p-4 auth-one-bg h-100">
                <div className="bg-overlay"></div>
                <div className="position-relative h-100 d-flex flex-column">
                    <div>
                        <Link to="/" className="d-block">
                            <img src="assets/images/logo-light.png" alt="" height="90" />
                        </Link>
                    </div>
                    <div>
                        <div className="mb-4 mt-3">
                            <span className="display-4 text-white">Recycle <br />Trade Zone</span>
                        </div>

                        <div className="mb-4 mt-2">
                            <Link to="/market" className="btn btn-warning rounded-pill p-3"><strong>Visit Our Trade Zone</strong></Link>
                        </div>
                        <div className="mb-4 mt-2">
                            <Link to="/stewardship" className="btn btn-success rounded-pill p-3"><strong>Sponsor Recycle Stewardship Program</strong></Link>
                        </div>

                        <div id="qoutescarouselIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner text-center text-warning pb-4">
                                <div className="carousel-item active">
                                    <p className="fs-16 fst-italic">" Seamless solution for recycling trash generated in your household! "</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="fs-16 fst-italic">" You have wastes to recycle? Find recyclers with ease using our platform. "</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="fs-16 fst-italic">" Are you a Recycler? Find consumers who have wastes to recycle on our platform "</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="fs-16 fst-italic">" A Producer? Track your Recyclable Packaging using our platform "</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="fs-16 fst-italic">" Trade your Recyclable Waste for Cash to the the Highest Bidder "</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner