import plotimage from '../images/for-sale.jpeg';

const PlotDetailScreen = (props) => {
    const { location } = props;
    return (
        <div>
           <div>
               Heading: {location.state.heading}
           </div>
           <div>
               <img src={plotimage} alt="plot-image" />
           </div>
           <div>
               Pointers: {location.state.pointers}
           </div>
           <div>
               Deatils: {location.state.details}
           </div>
        </div>
    )
}

export default PlotDetailScreen;