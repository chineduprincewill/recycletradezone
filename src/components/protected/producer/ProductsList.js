import { Fragment, useState } from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

const ProductsList = ({products}) => {

    const [qrcode, setQrcode] = useState();

    const printQrcode = (id) => {

        var divContents = document.getElementById('div-'+id).innerHTML;
        var a = window.open();
        //a.document.write('<html>');
        //a.document.write('<body > <h1>Div contents are <br>');
        a.document.write(divContents);
        //a.document.write('</body></html>');
        //a.document.close();
        a.print();
    }


    const showQrcode = (id) => {

        setQrcode(
            <Fragment>
                <div id={`div-${id}`} className="mx-5">
                    <QRCode 
                        title="QRCODE"
                        value={`${window.location.hostname}/track-product#${id}`}
                        bgColor='#FFFFFF'
                        fgColor='#000000'
                        size= {200}
                    />
                </div>
                <div className='row'>
                    <div className='col-sm-7'>
                        <button 
                            type="button" 
                            className="btn btn-info"
                            onClick={(e) => printQrcode(id)}
                            style={{ marginTop : 20, marginRight : 7 }}
                        >
                            <i className="las la-print"></i> Print
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={(e) => setQrcode('')}
                            style={{ marginTop : 20 }}
                        >
                            Clear
                        </button>
                    </div>
                    <div className='col-sm-5'></div>
                </div>
            </Fragment>
            
        )

    }


    return(
        <div className='row'>
            <div className='col-sm-9'>
                <table className="table nowrap table-striped align-middle">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Volume</th>
                            <th>Weight</th>
                            <th>Unique ID</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map(product => {
                            return(
                                <tr key={product.id}>
                                    <td>{product.category}</td>
                                    <td>{product.item}</td>
                                    <td>{product.volume}</td>
                                    <td>{product.weight}</td>
                                    <td>{product.uid}</td>
                                    <td>
                                        <Link 
                                            to={`/update-product/${product.id}`}
                                            className='btn btn-danger btn-icon waves-effect waves-light'
                                            title="Update product"
                                        > 
                                            <i className="las la-search"></i>
                                        </Link>
                                        <span 
                                            className='btn btn-soft-info'
                                            title='Show QrCode'
                                            onClick={(e) => showQrcode(product.uid)}
                                            style={{ marginLeft : 5 }}
                                        >
                                            <i className="las la-qrcode"></i>
                                        </span>
                                    </td>
                                    
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
            <div className='col-sm-3'>
                <div className='text text-warning py-3'>QRCode for any product clicked appears here!</div>
                {qrcode}
            </div>
        </div>
    )
            
          
}

export default ProductsList