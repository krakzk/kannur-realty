import history from '../routes/history';
import '../styles/detailsPanel.css';

const sampleData = [
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

const DetailsPanel = () => {
    return (
        <div className="Details-parent">
                {sampleData.slice(0, 3).map((plot, index) => {
                        return (
                            <div className="Details-plot" onClick={() => history.push({
                                pathname: '/PlotDetails',
                                state: plot
                                })}>
                                <div className="Details-plotheader">{plot.heading}</div>
                   <div className="Details-plotcontent">
                       {plot.pointers}
                   </div>
                   <div>
                       click to view more details
                   </div>
                            </div>
                        )
                    
                })}
                <div onClick={() => history.push('/AllPlots')}>
                    Load More.......
                </div>
        </div>
    )
}

export default DetailsPanel;