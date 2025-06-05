import Header from './component/Header';
import Banner from './component/Banner';
// import Button from './component/Button';
import Gallery from './component/Gallery';
import Footer from './component/Footer';


function App() {
  let title = "The Golden Spoon";
  const menuBtn = "View-menu";
  const cartBtn = "Add-Cart";

  const navLinks = [
    {index: 0, name: 'About', url: 'https://www.components.com/about'},
    {index: 1, name: 'Projects', url: 'https://www.components.com/projects'},
    {index: 2, name: 'Contact', url: 'https://www.components.com/contact'},
    {index: 3, name: 'Blogs', url: 'https://www.components.com/blogs'},
  ]

  const foodItems = [
    "https://dev.muddystilettos.co.uk/suffolkcambs/wp-content/uploads/sites/15/2024/02/goat-curry-at-pea-porridge-suffolk.jpg",
    "https://images.squarespace-cdn.com/content/v1/641b0f5cfe0a554b739a23e7/d839494a-276a-4162-b6d8-5221af02a74d/DSC_7022-2+copy+2.JPG",
    "https://get.pxhere.com/photo/dish-meal-food-produce-fish-gourmet-cuisine-asian-food-french-dining-fine-gastronomy-fine-dining-hors-d-oeuvre-720500.jpg",
    "https://dev.muddystilettos.co.uk/suffolkcambs/wp-content/uploads/sites/15/2024/02/midsummer-house-food.jpg"
  ]

  const footerLinks = [
    { name: "Privacy", url: "#" },
    { name: "Terms", url: "#" },
    { name: "Support", url: "#" }
  ]

  return (
    <>
      <Header title={title} navLinks={navLinks} />
      <main>
        <Banner bannerHeading="Welcome to The Golden Spoon" paragraph="Where taste meets tradition!" menuBtn={menuBtn} cartBtn={cartBtn}/>
        <Gallery galleryHeading= "Specialities" foodItems={foodItems} />
        <Footer copy="© 2025 The Golden Spoon. All rights reserved." footerLinks={footerLinks} />
      </main>
    </>
  );
}

export default App;
