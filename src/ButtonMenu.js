import React, {Component} from "react";  
import Products from "./Products";


export const  ProductList =[
    {
        id:0,
        category:"accessories",
        image:"./prod_images/accessory1.jpg",
        product: "Warriors Lanyard",
        description: "Official Golden State Warriors Lanyard",
        price: 12.99
},
{
    id:1,
    category:"accessories",
    image:"./prod_images/accessory2.jpg",
    product: "Warriors Water Bootle",
    description: "32oz Hydration Waterbottle",
    price: 69.99
},
{
    id:2,
    category:"accessories",
    image:"./prod_images/accessory3.jpg",
    product: "Warriors Tumbler",
    description: "Stainless Steel 30oz Insulated Tumbler",
    price: 69.99
},
{
    id:3,
    category:"accessories",
    image:"./prod_images/accessory4.jpg",
    product: "Warriors Keychain",
    description: "Official Championship Keychain",
    price: 8.99
},
{
    id:4,
    category:"accessories",
    image:"./prod_images/accessory5.jpg",
    product: "Warriors Bracelet",
    description: "Official  Warriors Bracelet",
    price: 9.99
},
{
    id:5,
    category:"accessories",
    image:"./prod_images/accessory6.jpg",
    product: "Warroirs Tumbler",
    description: "Black 30oz Insulated Tumbler",
    price: 74.99
},
{
    id:6,
    category:"accessories",
    image:"./prod_images/accessory7.jpg",
    product: "Warriors Lanyard",
    description: "Official Golden State Warriors Lanyard",
    price: 12.99
},
{
    id:7,
    category:"accessories",
    image:"./prod_images/accessory9.jpg",
    product: "Warroirs Cell Phone Case",
    description: "Official  Warriors Protective Phone Case",
    price: 25.99
},
{
    id:8,
    category:"collectable",
    image:"./prod_images/collectable.jpg",
    product: "Kuminga Basketball Card",
    description: "Authentic Kuminga Basketball Card",
    price: 9.99
},
{
    id:9,
    category:"collectable",
    image:"./prod_images/collectable2.jpg",
    product: "Stephen Curry Action Figure",
    description: "Official Stephen Curry Action Figure",
    price: 9.99
},
{
    id:10,
    category:"collectable",
    image:"./prod_images/collectable3.jpg",
    product: "Curry Socks",
    description: "Official Stephen Curry Socks",
    price: 24.99
},
{
    id:11,
    category:"collectable",
    image:"./prod_images/collectable4.jpg",
    product: "Klay Socks",
    description: "Official Klay Thompson Socks",
    price: 24.99
},
{
    id:12,
    category:"collectable",
    image:"./prod_images/collectable5.jpg",
    product: "Klay Thompson Plaque",
    description: "Official Klay Thompson Basketball Cards ",
    price: 24.99
},
{
    id:13,
    category:"collectable",
    image:"./prod_images/collectable6.jpg",
    product: "Jordan Poole Basketball Card",
    description: "Framed Jordan Poole Basketball Card",
    price: 24.99
},
{
    id:14,
    category:"collectable",
    image:"./prod_images/collectable7.jpg",
    product: "Jordan Poole Plaque",
    description: "10.5 x 13 Jordan Poole Plaque ",
    price: 49.99
},
{
    id:15,
    category:"collectable",
    image:"./prod_images/collectable8.jpg",
    product: "Automotive Decoration",
    description: "Official Warroirs Automotive Decoration",
    price: 69.99
},
{
    id:16,
    category:"collectable",
    image:"./prod_images/collectable9.jpg",
    product: "Signed Warriors Plaque",
    description: "Team Signed Plaque ",
    price: 499.99
},
{
    id:17,
    category:"collectable",
    image:"./prod_images/collectable10.jpg",
    product: "Framed Stephen Curry Art",
    description: "10.5 x 13 Framed Curry Art",
    price: 49.99
},
{
    id:18,
    category:"men",
    image:"./prod_images/mens_polo.jpg",
    product: "Men's Warriors Polo Shirt",
    description: "Men's Polo Short With Warriors Logo",
    price: 12.99
},
{
    id:19,
    category:"men",
    image:"./prod_images/mens_robe.jpg",
    product: "Men's Warriors Robe",
    description: "Men's Robe With Warriors Logo",
    price: 12.99
},
{
    id:20,
    category:"women",
    image:"./prod_images/womens_bag.jpg",
    product: "Women's Warrior Bag",
    description: "Women's Warriors Leather Bag",
    price: 99.99
},
{
    id:21,
    category:"women",
    image:"./prod_images/womens_dress.jpg",
    product: "Women's Warriors Dress",
    description: "Women's Dress With Warriors Logo",
    price: 39.99
},
{
    id:22,
    category:"women",
    image:"./prod_images/womens_fleece.jpg",
    product: "Wome's Warriors Fleece",
    description: "Women's Warriors Fleece",
    price: 12.99
},
{
    id:23,
    category:"women",
    image:"./prod_images/womens_jacket.jpg",
    product: "Womens Warriors Jacket",
    description: "Official Warriors Jacket",
    price: 99.99
},
{
    id:24,
    category:"women",
    image:"./prod_images/womens_mina.jpg",
    product: "Warriors Thong Sandals",
    description: "Official Warriors Thong Sandals",
    price: 29.99
},
{
    id:25,
    category:"women",
    image:"./prod_images/womens_polo.jpg",
    product: "Women's Polo Shirt",
    description: "Women's Polo Shirt With Warriors Logo",
    price: 49.99
},
{
    id:26,
    category:"women",
    image:"./prod_images/womens_sandals.jpg",
    product: "Women's Sandals",
    description: "Women's Warriors Sandals",
    price: 29.99
},
{
    id:27,
    category:"women",
    image:"./prod_images/womens_slides.jpg",
    product: "Women's Warrios Slides",
    description: "Women's Pink Warriors Slides",
    price: 29.99
},
{
    id:28,
    category:"women",
    image:"./prod_images/womens_slippers.jpg",
    product: "Women's Warrior Slippers",
    description: "Official Women's Warrior Slippers",
    price: 12.99
},
{
    id:29,
    category:"jersey",
    image:"./prod_images/uni-jersey2.jpg",
    product: "Stephen Curry Jersey",
    description: "Official Stephen Curry Jersey",
    price: 99.99
},
{
    id:30,
    category:"jersey",
    image:"./prod_images/uni-jersey3.jpg",
    product: "Klay Thompson Jersey",
    description: "Official Klay Thompson Jersey",
    price: 99.99
},
{
    id:31,
    category:"jersey",
    image:"./prod_images/uni-jersey4.jpg",
    product: "Draymond Green Jersey",
    description: "Official Draymond Green Jersey",
    price: 99.99
},
{
    id:32,
    category:"jersey",
    image:"./prod_images/uni-jersey5.jpg",
    product: "Andrew Wiggins Jersey",
    description: "Official Andrew Wiggins Jersey",
    price: 99.99
},
{
    id:33,
    category:"jersey",
    image:"./prod_images/uni-jersey6.jpg",
    product: "Gary Payton II Jersey",
    description: "Official Gary Payton II Jersey",
    price: 99.99
},
{
    id:34,
    category:"jersey",
    image:"./prod_images/uni-jersey7.jpg",
    product: "Stephen Curry Jersey",
    description: "Official Klay Thompson Jersey",
    price: 99.99
},
{
    id:35,
    category:"jersey",
    image:"./prod_images/uni-jersey8.jpg",
    product: "Andre Igoudala Jersey",
    description: "Official Andre Igoudala Jersey",
    price: 99.99
},
{
    id:36,
    category:"jersey",
    image:"./prod_images/uni-jersey9.jpg",
    product: "Kevon Looney Jersey",
    description: "Official Kevon Looney Jersey",
    price: 99.99
},
{
    id:37,
    category:"jersey",
    image:"./prod_images/uni-jersey10.jpg",
    product: "Juan Toscano Jersey",
    description: "Official Juan Toscano Jersey",
    price: 99.99
},
{
    id:38,
    category:"jersey",
    image:"./prod_images/uni-jersey11.jpg",
    product: "Otto Porter Jersey",
    description: "Official Otto Porter Jersey",
    price: 99.99
},
{
    id:39,
    category:"jersey",
    image:"./prod_images/uni-jersey12.jpg",
    product: "James Wiseman Jersey",
    description: "Official James Wiseman Jersey",
    price: 99.99
},
{
    id:40,
    category:"jersey",
    image:"./prod_images/uni-jersey13.jpg",
    product: "David Lee Jersey",
    description: "Official David Lee Jersey",
    price: 99.99
},
{
    id:41,
    category:"jersey",
    image:"./prod_images/uni-jersey14.jpg",
    product: "Jonathan Kuminga Jersey",
    description: "Official Jonathan Kuminga Jersey",
    price: 99.99
},
{
    id:42,
    category:"jersey",
    image:"./prod_images/uni-jersey1.jpg",
    product: "Jordan Poole Jersey",
    description: "Official Jordan Poole Jersey",
    price: 99.99
},
{
    id:43,
    category:"hats",
    image:"./prod_images/uni_hat.jpg",
    product: "Warroirs Championship Hat",
    description: "Official Warroirs Championship Hat",
    price: 39.99
},
{
    id:44,
    category:"hats",
    image:"./prod_images/uni_hat2.jpg",
    product: "Warroirs Hat",
    description: "Official Black Warroirs Hat",
    price: 39.99
},
{
    id:45,
    category:"hats",
    image:"./prod_images/uni_hat3.jpg",
    product: "Warroirs Hat",
    description: "Official Blue Warroirs Hat",
    price: 39.99
},
{
    id:46,
    category:"hats",
    image:"./prod_images/uni_hat4.jpg",
    product: "Warroirs Hat",
    description: "Official Gray Warroirs Hat",
    price: 39.99
},
{
    id:47,
    category:"shirts",
    image:"./prod_images/uni_shirt.jpg",
    product:"Warroirs Championship Shirt",
    description: "Warroirs Championship Shirt",
    price: 12.99
},
{
    id:48,
    category:"shirts",
    image:"./prod_images/uni_shirt2.jpg",
    product: "Warroirs Gold Blooded Shirt",
    description: "Official Warroirs Gold Blooded Shirt",
    price: 29.99
},
{
    id:49,
    category:"shirts",
    image:"./prod_images/uni_shirt3.jpg",
    product: "Steph Curry Shirt",
    description: "Official Steph Curry Shirt",
    price: 29.99
},
{
    id:50,
    category:"top-products",
    image:"./prod_images/top1.png",
    product: "Steph Curry Shirt",
    description: "Official Steph Curry Shirt",
    price: 29.99
},{
    id:51,
    category:"top-products",
    image:"./prod_images/top2.png",
    product: "Jordan Poole Shirt",
    description: "Official Jordan Poole Shirt",
    price: 29.99
},{
    id:52,
    category:"top-products",
    image:"./prod_images/top3.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},{
    id:53,
    category:"top-products",
    image:"./prod_images/top4.png",
    product: "NBA Jams Shirt",
    description: "Official NBA Jam Shirt",
    price: 29.99
},{
    id:54,
    category:"top-products",
    image:"./prod_images/top5.png",
    product: "Warriors Paddle",
    description: "Ping Pong Paddle",
    price: 29.99
},{
    id:56,
    category:"new-arrivals",
    image:"./prod_images/new1.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},{
    id:57,
    category:"new-arrivals",
    image:"./prod_images/new2.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},{
    id:58,
    category:"new-arrivals",
    image:"./prod_images/new3.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},{
    id:59,
    category:"new-arrivals",
    image:"./prod_images/new4.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},
{
    id:60,
    category:"new-arrivals",
    image:"./prod_images/new5.png",
    product: "Warriors Shirt",
    description: "Official Warriors Shirt",
    price: 29.99
},
{
    id:61,
    category:"curry",
    image:"./prod_images/curry1.jpg",
    product: "Curry Hoodie",
    description: "Official Curry Hoodie",
    price: 1000
},
{
    id:62,
    category:"curry",
    image:"./prod_images/curry2.jpg",
    product: "Curry Shorts",
    description: "Official Curry Shorts",
    price: 1000
},
{
    id:63,
    category:"curry",
    image:"./prod_images/curry3.jpg",
    product: "Curry Jersey",
    description: "Steph Curry Jersey",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry4.jpg",
    product: "Curry Long Sleeve T",
    description: "Curry Long Sleeve T",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry5.jpg",
    product: "Curry Hoodie",
    description: "Official Curry Hoodie",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry6.jpg",
    product: "Signed Curry Picture",
    description: "Framed Picture",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry7.jpg",
    product: "Curry Coozie",
    description: "Curry Coozie",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry8.jpg",
    product: "Curry ALL Star MVP",
    description: "Curry MVP Plaque",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry9.jpg",
    product: "Curry Shirt",
    description: "Official Curry Shirt",
    price: 1000
},
{
    id:64,
    category:"curry",
    image:"./prod_images/curry10.jpg",
    product: "Curry Onesie",
    description: "Official Curry Onesie",
    price: 1000
},
{
    id:64,
    category:"draymond",
    image:"./prod_images/new5.png",
    product: "test curry",
    description: "test draymond",
    price: 1000
},
{
    id:64,
    category:"draymond",
    image:"./prod_images/new5.png",
    product: "test curry",
    description: "test draymond",
    price: 1000
},
{
    id:64,
    category:"draymond",
    image:"./prod_images/new5.png",
    product: "test curry",
    description: "test draymond",
    price: 1000
},

];

const CATEGORIES = ['All', 'Men', 'Women', 'Jersey', "Hats",'Shirts', 'Accessories', 'Collectable', 'Top-Products', 'New-Arrivals'];

 


class ButtonMenu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: ProductList
      };

    }
    

    getCategory = (category) => {
      if (category === "all") {
        this.setState({ products: ProductList });
      } else {
        const filter = ProductList.filter((d) => d.category === category);
        if (filter) {
          this.setState({ products: filter });
        }
      }
    };

    componentDidMount(){
   
        const path = this.props.path
        if (path === "all") {
        this.setState({ products: ProductList });
      } else {
        const filter = ProductList.filter((d) => d.category === path);
        if (filter) {
          this.setState({ products: filter });
        }
      }
    }

    render() {
      return (
        <>
          <div className="mainbtn-menu-container">
            
            {CATEGORIES.map((item, index) => (
                 <button
              key={index}
                className="main-btn"
                onClick={() => { this.getCategory(item.toLowerCase()) } }
                value={item.toLowerCase()}
              >
               {item} 
              </button> 
            ))}
            </div>

            <Products products={this.state.products} updateCart={this.props.updateCart} />
         
        </>
      );
    }
  }
  
  export default ButtonMenu;