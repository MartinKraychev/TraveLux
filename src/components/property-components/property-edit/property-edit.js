import styles from "./property-edit.module.css"

export const PropertyEdit = () => {
    return (
        <div className={styles['add-property']}>
            <div className={styles['create-content']}>
                <h1 className={styles['title']}>Edit your property</h1>
            </div>
            <form id="create">
                <div className={styles['container']}>
                    <h1></h1>
                    <label htmlFor="title" className={styles['label']}>Title:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter ad title"
                    />
                    <label htmlFor="type" className={styles['label']}>Type:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Enter property type"
                    />
                    <label htmlFor="img" className={styles['label']}>Image:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="img"
                        name="img"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="price" className={styles['label']}>Price per night:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Enter price per night"
                    />
                    <label htmlFor="address" className={styles['label']}>Address:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Property Address"
                    />
                    <label htmlFor="contact" className={styles['label']}>Contact Number:</label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Contact Number"
                    />
                    <label htmlFor="summary" className={styles['label']}>Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} className={styles['textarea']}/>
                    <input
                        className={styles['btn-submit']}
                        type="submit"
                        value="Edit"
                    />
                </div>
            </form>
        </div>
    )
}