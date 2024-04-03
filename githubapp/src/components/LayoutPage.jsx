import React from "react";

import InfoSection from "./InfoSection";
import User from "./User";


const LayoutPage =()=>{
return<div className="container">
<div className="box-left">
   <User/>

</div>
<div className="box-right">
<InfoSection/>
</div>
</div>
}
export default LayoutPage;