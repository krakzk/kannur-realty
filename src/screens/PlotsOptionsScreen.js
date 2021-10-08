import history from "../routes/history";
import '../styles/plotOptions.css';
import plot1 from '../images/plots/plot-1.jpg';
import plot2 from '../images/plots/plot-2.jpg';
import plot4 from '../images/plots/plot-4.jpg';
import plot5 from '../images/plots/plot-5.jpg';

const sampleData = [
    [
        {
            heading: "Plot Available",
            pointers: "18 cents near Pallikunnu Mookambika Temple",
            details: "18 cents of land near Pallikunnu Mookambika Temple, Kannur. Rate 4.5L. Neogotiable. Partition is possible as per requirement.",
            imageId: plot1
        },
        {
            heading: "Residential Plot Available",
            pointers: "11 cents at near Kannur Town",
            details: "11 cents residential plot  at Pallikunnu Kannur. Hardly 3km from heart of Kannur town. Rate 5.5L.",
            imageId: plot2
        },
        {
            heading: "House Plot Available",
            pointers: "16 cents of House Plot at Cheruvathala",
            details: "16 cents house plot in Cheruvathala Motta. Less than 300m from Cheruvathala Motta town. Rate 1.5L",
            imageId: "test"
        }
    ],
    [
        {
            heading:"Plot with Road Access",
            pointers: "10 cents of land near Niranthode",
            details: "In between Cheruvathala Motta and Niranthode bus stop. 10 cents of land. Only 300m from main road and road access to the plot. Rate 1L.",
            imageId: plot4
        },
        {
            heading:"Plot with House",
            pointers: "12 cents of land with House at Puzhathi",
            details: "12 cents of land with 2400 sqft house near Someswary Temple, Puzhathi. 1.5 km from Puthiyatheru Town. Constructed only 7 years ago. Rate 72L.",
            imageId: plot5
        }
    ]
    
];

const toChunkArray = (myArray) => {
    var results = [];

    while (myArray.length) {
        results.push(myArray.slice(0, 3));
    }

    return results;
}


const PlotsOptionsScreen = () => {

    return (
        <div className="Plot-parent">
                {
                    sampleData.map( (colSizeArray, index) =>
                    <div className="Plot-row" key={index.toString()}>
                        {colSizeArray.map((plot, i) =>
                            <div className="Plot-content" onClick={() => history.push({
                                pathname: '/PlotDetails',
                                state: plot
                                })}>
                                <div className="Plot-plotheader">{plot.heading}</div>
                   <div className="Plot-plotcontent">
                       {plot.pointers}
                   </div>
                   <div>
                       click to view more details
                   </div>
                 </div> 
                        )}
                    </div>
                )
                }
            {/* {sampleData.map((plot, index) => {
                return(
                        <div className="Plot-content" onClick={() => history.push({
                            pathname: '/PlotDetails',
                            state: plot
                            })}>
                            <div className="Plot-plotheader">{plot.heading}</div>
               <div className="Plot-plotcontent">
                   {plot.pointers}
               </div>
               <div>
                   click to view more details
               </div>
             </div>        
                    
                )                        
                    
                })} */}
        </div>
    )
}

export default PlotsOptionsScreen;