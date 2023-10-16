export const PropertyEdit = () => {
    return (
        <div id="add-property">
            {/* <div className="create-content">
                <h1>Unlock New Opportunities as a <span className="colored-text">TraveLux</span> Agent!</h1>
                <p>
                    Our 'Add Property' page empowers you to showcase your accommodations to a global audience.
                    Tailor your listing, share captivating images, and set your own rules - it's all at your fingertips.
                </p>
            </div> */}
            <form id="create">
                <div className="container">
                    <h1></h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter ad title"
                    />
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Enter property type"
                    />
                    <label htmlFor="img">Image:</label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="price">Price per night:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Enter price per night"
                    />
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Property Address"
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input
                        className="btn submit"
                        type="submit"
                        Value="Add the property"
                    />
                </div>
            </form>
        </div>
    )
}