import UserPage from "./UserPage"; 
import Card from "./Card";


const OverviewPage =()=>{


    return<>
    <div className="container">
    <div className="box-left">
<UserPage/>
</div>
<div className="box-right"><Card/></div>

</div> 
    
    </>
}
export default OverviewPage;