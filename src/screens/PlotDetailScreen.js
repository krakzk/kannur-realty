import '../styles/plotDetails.css';

const PlotDetailScreen = (props) => {
    const { location } = props;
    return (
        <div className="Detail-parent">
           <div>
               {location.state.heading}
           </div>
           <div>
               <img src={location.state.imageId} width="75%" height="50%" alt="plot-image" />
           </div>
           <div>
               {location.state.pointers}
           </div>
           <div>
               {location.state.details}
           </div>
           <div>
               For more information on the property
               <br/>
               Contact:
               <br/>
               Sajeevan P V
               <br/>
               Call : +91 94477 29473, +91 80757 45576
               <br/>
               Whatsapp : +91 80757 45576
           </div>
        </div>
    )
}

export default PlotDetailScreen;