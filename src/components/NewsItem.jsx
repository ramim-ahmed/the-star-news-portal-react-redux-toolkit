import PropTypes from "prop-types";
export default function NewsItem({ newsItem }) {
  const { title, urlToImage, description } = newsItem || {};
  return (
    <div className="bg-white border border-opacity-20 p-3 rounded-md">
      <div>
        <img
          className="h-[200px] object-cover w-full"
          src={urlToImage}
          alt={title}
        />
      </div>
      <div className="mt-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  newsItem: PropTypes.object,
};
