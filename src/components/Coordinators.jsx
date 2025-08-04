import "../css/Coordinators.css";
import laksh from "../assets/laksh.jpg";
import deva from "../assets/deva.jpg";
import ranj from "../assets/ranj.jpg";
import mahe from "../assets/mahe.jpg";
import balex from "../assets/balex.jpg";
import srj from "../assets/srj.png";
const Coordinators=()=>{
    return(
        <>
            <div className="c_title">Co-ordinators</div>
            <div className="image_div">
                <div>
                    <img src={deva} alt="" className="main_c"/>
                    <div className="c_name">Devanarayanan N A</div>
                </div>
                <div>
                    <img src={laksh} alt="" className="main_c"/>
                    <div className="c_name">Lakshaya K</div>
                </div>
                <div>
                    <img src={ranj} alt="" className="main_c"/>
                    <div className="c_name">Ranjith Kumar</div>
                </div>
            </div>
            <div className="c_title">Technical Team</div>
            <div className="image_div">
                <div>
                    <img src={srj} alt="" className="main_c"/>
                    <div className="c_name">Jayanth Prathab S R</div>
                </div>
                <div>
                    <img src={mahe} alt="" className="main_c"/>
                    <div className="c_name">Maheswari S</div>
                </div>
                <div>
                    <img src={balex} alt="" className="main_c"/>
                    <div className="c_name">Mahibalan S</div>
                </div>
            </div>
        </>
    );
}
export default Coordinators;