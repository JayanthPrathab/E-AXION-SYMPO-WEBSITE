import "../css/Coordinators.css";
import laksh from "../assets/laksh.jpg";
import deva from "../assets/deva.jpg";
import ranj from "../assets/ranj.jpg";
import mahe from "../assets/mahe.jpg";
import balex from "../assets/balex2.jpg";
import srj from "../assets/srj.png";
import joan from "../assets/joan.jpg";
import mohan from "../assets/mohan.jpg";
import manoj from "../assets/manoj2.jpg";
const Coordinators=()=>{
    return(
        <>
            <br />
            <div className="c_title">Co-ordinators</div> <br />
            <div className="image_div">
                <div className="main_c_div">
                    <img src={deva} alt="" className="main_c"/>
                    <div className="c_name">Devanarayanan N A</div>
                    <div className="mobile" onClick={() => window.open("tel:+91 63825 01422")}>63825 01422</div>
                </div>
                <div className="main_c_div" >
                    <img src={laksh} alt="" className="main_c"/>
                    <div className="c_name">Lakshaya K</div>
                    <div className="mobile" onClick={() => window.open("tel:+91 97906 06702")}>97906 06702</div>
                </div>
                <div className="main_c_div">
                    <img src={ranj} alt="" className="main_c"/>
                    <div className="c_name">Ranjith Kumar</div>
                    <div className="mobile" onClick={() => window.open("tel:+91 93605 95266")}>93605 95266</div>
                </div>
            </div>
            <br /><br />
            <div className="c_title">Technical Team</div> <br />    
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
                <div>
                    <img src={joan} alt="" className="main_c"/>
                    <div className="c_name">Joan Sharon A</div>
                </div>
                <div>
                    <img src={mohan} alt="" className="main_c"/>
                    <div className="c_name">Mohana Priyan T</div>
                </div>
                <div>
                    <img src={manoj} alt="" className="main_c"/>
                    <div className="c_name">Manoj</div>
                </div>
            </div>
        </>
    );
}
export default Coordinators;