import Eventcard from 'components/eventcard';
import EventComponent from 'components/eventcomponent';


export default function Home() {

  // const { defaultStates: { isLoading } } = useSelector(getExpenses)

  return (
    <>
      <div className="container mx-auto p-10 md:p-20 xl:p-36">
        <div className="text-center xl:hidden">
          <div className="text-4xl font-bold">Imagine if <span className="text-indigo-600"><br /> Snapchat <br /></span> had events</div>
          <div className="text-sm text-gray-500 md:mb-10 mb-5">Easily host and share events with your friends <br /> across any social media.</div>
        </div>
        <div className="grid xl:grid-cols-3 gap-5 lg:gap-10">
          <Eventcard />
          <div className="xl:col-span-2 flex md:items-center xl:justify-end md:text-right justify-center text-center">
            <EventComponent />
          </div>
        </div>
      </div>
    </>
  )
}

