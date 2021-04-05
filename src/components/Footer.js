import "../index.css"

function Footer() {
    return (
        <div>
            <footer>
                <div className="pane bg-primary ">
                    <div>
                        <p><i class="icons fas fa-truck"></i></p>
                        <p>Fast Delivery</p>
                    </div>
                    <div>
                        <p><i class="icons  fas fa-certificate"></i></p>
                        <p>Buyer Protection</p>
                    </div>
                    <div>
                        <p><i class="icons fab fa-stumbleupon-circle"></i></p>
                        <p>Customer Support</p>
                    </div>
                </div>
                <div className="last">
                    <div>
                        <p>STORE DETAILS </p>
                    </div>
                    <div>
                        <strong>Target </strong>
                    </div>
                    <div>
                        <p>Cham Towers,Plot 12 Nkruma Rd ,Kampala ,Ug</p>
                    </div>
                    <div className="btn btn-success">
                    <i class="fab fa-whatsapp"></i> Chat with us 
                    </div>
                </div>
            </footer>   
        </div>
    )
}

export default Footer
