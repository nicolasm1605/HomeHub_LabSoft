import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://th.bing.com/th/id/OIP.AEyITsC-32lNFN-G2mhqNAHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.6f328a7536ec38bcceefc783c9587b9e?rik=U1zpvIxll%2b7i9Q&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.da0ac603ccbe822a1bb5a801812e5327?rik=pLqIOnRQO92oLw&riu=http%3a%2f%2fwww.crpcali.com%2fwp-content%2fuploads%2f2016%2f03%2f0Z6A1398.jpg&ehk=gU3Jf5HUtPWSq2Scm7A01qVbhwHQbvH4SXcl7MztJIc%3d&risl=&pid=ImgRaw&r=0",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
