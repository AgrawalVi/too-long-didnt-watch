import YoutubeBox from "../ui/youtubeBox"
import UploadVid from "../ui/uploadVid";
import {HeadMetaTags} from "@/app/layout";
export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <div className="row-auto">
          <div className="columns-auto">
            <YoutubeBox />

          </div>
        </div>
        <div className="row-auto">
          <div className="columns-auto">
            <UploadVid />
          </div>
        </div>
      </div>


    </main>
  )
}