import "./page.css";
export default function Challenge2() {
    const btnCss = {margin:"0px 10px",fontSize:"17px",color:"#626262"}

    return (
        <div style={{display: "flex", flexDirection: "column",padding:"10px 10px 0px 10px",boxSizing:"border-box"}}>
            <div style={{display: "flex", flexDirection: "row",fontSize:"25px",marginBottom:"10px"}}>
                <div style={{fontWeight: "bold",marginRight:"5px"}}>Desktop</div>
                <div>View</div>
            </div>

            <div style={{display: "flex", flexDirection: "row",justifyContent:"space-between",paddingBottom:"20px",borderBottom:"1px solid #626262"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <a href="/" style={btnCss}>AEON</a>
                    <a href="/" style={btnCss}>Showcase</a>
                    <a href="/" style={btnCss}>Docs</a>
                    <a href="/" style={btnCss}>Blog</a>
                    <a href="/" style={btnCss}>Analytics</a>
                    <a href="/" style={btnCss}>Templates</a>
                    <a href="/" style={btnCss}>Enterprise</a>
                </div>

                <input className="inputX" type="text" placeholder="Search documentation..."/>
            </div>
        </div>

    );
}
