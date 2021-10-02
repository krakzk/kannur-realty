import history from "../routes/history";
import '../styles/plotDetails.css';


const sampleData = [
    [
        {
            heading:"Test1",
            pointers: "This is pointer text",
            details: "The wholde details come here"
        },
        {
            heading:"Test2",
            pointers: "This is pointer text",
            details: "The wholde details come here"
        },
        {
            heading:"Test3",
            pointers: "This is pointer text",
            details: "The wholde details come here"
        },
    ],
    [
        {
            heading:"Test4",
            pointers: "This is pointer text",
            details: "The wholde details come here"
        },
        {
            heading:"Test5",
            pointers: "This is pointer text",
            details: "The wholde details come here"
        },
        {
            heading:"Test6",
            pointers: "This is pointer text",
            details: "The wholde details come here"
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