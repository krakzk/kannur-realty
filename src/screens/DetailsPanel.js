import history from '../routes/history';
import '../styles/detailsPanel.css';

const sampleData = [
    {
        heading: "Test1",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    },
    {
        heading: "Test2",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    },
    {
        heading: "Test3",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    },
    {
        heading: "Test4",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    },
    {
        heading: "Test5",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    },
    {
        heading: "Test6",
        pointers: "This is pointer text",
        details: "The wholde details come here"
    }
]

const DetailsPanel = () => {
    return (
        <div className="Details-parent row col-sm-12 mx-0">
            {sampleData.slice(0, 3).map((plot, index) => {
                return (
                    <div className={index === 1 ? "mx-3 Details-plot col" : "Details-plot col"}
                        onClick={() => history.push({
                            pathname: '/PlotDetails',
                            state: plot
                        })}>
                        <div className="plot-details">
                            <div className="plot-main"></div>
                            <div className="Details-plotheader">{plot.heading}</div>
                            <div className="Details-plotcontent">
                                {plot.pointers}
                            </div>
                            <div className="details-click-more">
                                Click to view more details
                            </div>
                        </div>
                    </div>
                )

            })}
            
            <div className="load-more">
                            <button className="btn btn-primary float-right" onClick={() => history.push('/AllPlots')}>
                                Load More &nbsp;
                                <div className="fa load-icon"></div>
                            </button>
                        </div>
        </div>
    )
}

export default DetailsPanel;