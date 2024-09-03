// import dessert from '../assets/images/image-cake-desktop.jpg';



const DessertCard = ({item}) => {

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', './assets/images/')] = r(item); });
    console.log(images);
    return images;
  };
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
  console.log(images);
  console.log(item.image.desktop)

console.log(images[item.image.desktop]);
    return (
      <>
        <img src={images[item.image.desktop]} />
        <button>Add to Card</button>
        <p className='category'>{item.category}</p>
        <p className='name'>{item.name}</p>
        <p className='price'>{`$${(item.price).toFixed(2)}`}</p>
      </>

    )

}

export default DessertCard

// frontend/src/assets/images/image-baklava-desktop.jpg
