import {Link} from 'react-router-dom'

const EventComponent = () => {
  return (
    <div className="flex items-center xl:justify-end text-right">
      <div>
        <div className="xl:block hidden">
        <div className="text-4xl font-bold">Imagine if <span className="text-indigo-600"><br /> Snapchat <br /></span> had events</div>
        <div className="text-sm text-gray-500 md:mb-10 mb-5">Easily host and share events with your friends <br /> across any social media.</div>
        </div>
        <Link to="/create-event" className="bg-indigo-700 text-white rounded-md px-5 py-2">&#127881; Create my event</Link>
      </div>
    </div>
  );
}

export default EventComponent;
