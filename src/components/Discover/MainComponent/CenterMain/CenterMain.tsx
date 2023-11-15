import style from "./CenterMain.module.css"

const CenterMain = () => {
    return (
        <div className={style.CenterMainImgs}>
            <div className={style.CenterMainFirstImg}>
                <h1>SELL BACK YOUR BMW.</h1>
                <p>
                    Why not sell your BMW back to the experts and get a
                    trusted price for your car? Simply provide us with the
                    details and your local BMW Centre will be in touch with
                    a provisional valuation.
                </p>
                <a href="#request">Request a Valuation.</a>
            </div>
            <div className={style.CenterMainSecondImg}>
                <h1>BENEFITS OF BUYING APPROVED USED.</h1>
                <ul>
                    <li>12+ mth BMW Warranty</li>
                    <li>12+ mth BMW Roadside Assistance</li>
                    <li>12+ mth MOT Cover</li>
                    <li>Checked by BMW Technicians</li>
                </ul>
                <a href="#request">Request a Valuation.</a>
            </div>
            <div className={style.CenterMainThirdImg}>
                <h1>FINANCE YOUR CAR WITH
                    BMW FINANCE OFFERS.</h1>
                <p>
                    Configure your perfect finance deal with BMW Finance
                    Services on Approved Used Cars now. Search available
                    cars that match your monthly budget and deposit now.
                </p>
                <a href="#request">Request a Valuation.</a>
            </div>
        </div>
    )
}

export default CenterMain