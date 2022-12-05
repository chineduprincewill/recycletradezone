import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/protected/Dashboard';
import AuthContextProvider from './context/AuthContext';
import { Fragment } from 'react';
import Layout from './components/protected/layout/Layout';
import Profiles from './components/protected/admin/Profiles';
import ProfileDetail from './components/protected/admin/ProfileDetail';
import ProducerProducts from './components/protected/producer/ProducerProducts';
import NewProduct from './components/protected/producer/NewProduct';
import UpdateProduct from './components/protected/producer/UpdateProduct';
import ProducerTracks from './components/protected/producer/ProducerTracks';
import ProducerCommissions from './components/protected/producer/ProducerCommissions';
import ProducerWithdrawalRequests from './components/protected/producer/ProducerWithdrawalRequests';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import TrackProduct from './components/TrackProduct';
import SellerTracks from './components/protected/seller/SellerTracks';
import SellerCommissions from './components/protected/seller/SellerCommissions';
import SellerWithdrawalRequests from './components/protected/seller/SellerWithdrawalRequests';
import TrackSell from './components/protected/seller/TrackSell';
import RequestWithdrawal from './components/protected/seller/RequestWithdrawal';
import UpdateProfile from './components/protected/UpdateProfile';
import { PrivateRoute } from './components/PrivateRoute';
import SellerTransactions from './components/protected/seller/SellerTransactions';
import Recyclers from './components/protected/seller/Recyclers';
import BuyerTransactions from './components/protected/buyer/BuyerTransactions';
import OpenTransactions from './components/protected/buyer/OpenTransactions';
import ViewBids from './components/protected/buyer/ViewBids';
import Sales from './components/protected/buyer/Sales';
import Market from './components/Market';
import Stewardship from './components/Stewardship';

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <div id='layout-wrapper'>
                    <Fragment>
                        <Layout />
                    </Fragment>
                    <Routes>
                        <Route exact path="/" element={<Register />} />
                        <Route exact path='/market' element={<Market />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/forgot-password" element={<ForgotPassword />} />
                        <Route exact path="/reset-password" element={<ResetPassword />} />
                        <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route exact path='/profiles' element={<PrivateRoute><Profiles /></PrivateRoute>} />
                        <Route exact path='/profile-detail/:id' element={<PrivateRoute><ProfileDetail /></PrivateRoute>} />
                        <Route exact path='/producer-products' element={<PrivateRoute><ProducerProducts /></PrivateRoute>} />
                        <Route exact path='/new-product' element={<PrivateRoute><NewProduct /></PrivateRoute>} />
                        <Route exact path='/update-product/:id' element={<PrivateRoute><UpdateProduct /></PrivateRoute>} />
                        <Route exact path='/producer-tracks' element={<PrivateRoute><ProducerTracks /></PrivateRoute>} />
                        <Route exact path='/producer-commissions' element={<PrivateRoute><ProducerCommissions /></PrivateRoute>} />
                        <Route exact path="/producer-withdrawals" element={<PrivateRoute><ProducerWithdrawalRequests /></PrivateRoute>} />
                        <Route exact path="/track-product" element={<TrackProduct />} />
                        <Route exact path='/seller-tracks' element={<PrivateRoute><SellerTracks /></PrivateRoute>} />
                        <Route exact path='/seller-commissions' element={<PrivateRoute><SellerCommissions /></PrivateRoute>} />
                        <Route exact path='/seller-withdrawals' element={<PrivateRoute><SellerWithdrawalRequests /></PrivateRoute>} />
                        <Route exact path='/track-sell' element={<PrivateRoute><TrackSell /></PrivateRoute>} />
                        <Route exact path='/request-withdrawal' element={<PrivateRoute><RequestWithdrawal /></PrivateRoute>} />
                        <Route exact path='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                        <Route exact path='/seller-transactions' element={<PrivateRoute><SellerTransactions /></PrivateRoute>} />
                        <Route exact path='/recyclers' element={<PrivateRoute><Recyclers /></PrivateRoute>} />
                        <Route exact path='/buyer-transactions' element={<PrivateRoute><BuyerTransactions /></PrivateRoute>} />
                        <Route exact path='/open-transactions' element={<PrivateRoute><OpenTransactions /></PrivateRoute>} />
                        <Route exact path='/view-bids' element={<PrivateRoute><ViewBids /></PrivateRoute>} />
                        <Route exact path='/sales' element={<PrivateRoute><Sales /></PrivateRoute>} />
                        <Route exact path='/stewardship' element={<Stewardship />} />
                    </Routes>
                </div>
            </Router>
        </AuthContextProvider>       
    )
}

export default App;