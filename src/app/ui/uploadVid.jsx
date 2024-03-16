export default function UploadVid() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '80%', height:'20%'}}>
                <input type="text"
                       className="w-full h-10 px-3 rounded-b-full border border-transparent focus:outline-none focus:border-blue-500 text-x3"
                       style={{ borderRadius: '0 0 0px 0px', height:'100%', fontSize: '90px'}}
                       placeholder="Upload video file"
                />
            </div>
        </div>
    );
}