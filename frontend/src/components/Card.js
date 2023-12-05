const Card = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  domain,
  avatar,
  available,
  update,
  remove
}) => {
  return (
    <>
      <div className=" w-60 sm:mx-auto  md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 dark:bg-gray-800 dark:border-gray-700">
        <div className="rounded-t-lg h-24 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center w-24 h-24"
            src={avatar}
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h4 className="font-semibold dark:text-white">
            {first_name + " " + last_name}
          </h4>
          <p className="text-gray-500 dark:text-white">{email}</p>
          <div className="flex flex-row justify-around">
            <p>{gender}</p>
            <p>{domain}</p>
          </div>
        </div>

        <div className="flex flex-row p-2 border-t  " >
          <button id={id} onClick={remove} className="min-w-1/3  block mx-auto rounded-full bg-gray-900 dark:bg-white dark:text-black hover:shadow-lg font-semibold text-white px-6 py-2">
            Delete
          </button>
          <button id={id} onClick={update} className="min-w-1/3 block mx-auto rounded-full bg-gray-900 dark:bg-white dark:text-black hover:shadow-lg font-semibold text-white px-6 py-2">
            Update
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
