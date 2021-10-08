import history from '../routes/history';
import '../styles/detailsPanel.css';
import plot1 from '../images/plots/plot-1.jpg';
import plot2 from '../images/plots/plot-2.jpg';

const sampleData = [
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