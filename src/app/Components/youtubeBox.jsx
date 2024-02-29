
export default function YoutubeBox() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                <input type="text" style={{ width: '300px', height: '40px', borderRadius: '20px', border: '1px solid #ccc', paddingLeft: '10px', outline: 'none' }} placeholder="Enter text..." />
            </div>
            </div>
        </>
    )
}