export default function Recipes(){
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

    return (
        <div>
            <div className="previous-searches">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map(search => (<div className="search-item">
                        {search}
                    </div>))}
                </div>
            </div>
        </div>
    )
}