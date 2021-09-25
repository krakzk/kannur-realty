import '../styles/detailsPanel.css';

const DetailsPanel = () => {
    return (
        <div className="Details-parent">
            Details Shall come here
            <div className="Details-plot">
               <div className="Details-plotheader">PLot Heading</div>
               <div className="Details-plotcontent">
                   Plot Mini Description: Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut 
                   enim ad minim veniam, quis nostrud exercitation 
                   ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </div>
               <div>
                   click to view more details
               </div>
            </div>
        </div>
    )
}

export default DetailsPanel;