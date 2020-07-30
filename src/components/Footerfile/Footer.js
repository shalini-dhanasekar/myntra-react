import React,{Component} from 'react';
import {Row,Col,ListGroup} from 'react-bootstrap';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="rowforfooter">
                <Row>
                <div className="online">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><span class="top">ONLINE SHOPPING</span></ListGroup.Item>
                  <ListGroup.Item>Men</ListGroup.Item>
                  <ListGroup.Item>Women</ListGroup.Item>
                  <ListGroup.Item>Kids</ListGroup.Item>
                  <ListGroup.Item>Home & Living</ListGroup.Item>
                  <ListGroup.Item>Essentials</ListGroup.Item>
                  <ListGroup.Item>Gift Cards</ListGroup.Item>
                  <ListGroup.Item>Myntra Insider<a className="new-badge text-white">New</a></ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>
                  <div className="online">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><span class="top">USEFUL LINKS</span></ListGroup.Item>
                  <ListGroup.Item>Contact Us</ListGroup.Item>
                  <ListGroup.Item>FAQ</ListGroup.Item>
                  <ListGroup.Item>T & C</ListGroup.Item>
                  <ListGroup.Item>Track Orders</ListGroup.Item>
                  <ListGroup.Item>Shipping</ListGroup.Item>
                  <ListGroup.Item>Cancellation</ListGroup.Item>
                  <ListGroup.Item>Returns</ListGroup.Item>
                  <ListGroup.Item>Whitehat</ListGroup.Item>
                  <ListGroup.Item>Blog</ListGroup.Item>
                  <ListGroup.Item>Careers</ListGroup.Item>
                  <ListGroup.Item>Privacy Policy</ListGroup.Item>
                  <ListGroup.Item>SiteMap</ListGroup.Item>
                </ListGroup>

                  </Col>
                  </div>
                  <div className="experience">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><span class="top">EXPERIENCE MYNTRA APP ON MOBILE</span></ListGroup.Item>
                  <ListGroup.Item><img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" width="150px" height="auto" />
                  <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" width="130px" height="auto"  />
                  </ListGroup.Item>
                  <ListGroup.Item><span class="top">KEEP IN TOUCH</span></ListGroup.Item>
                  <ListGroup.Item>
                  <div className="icons">
                  <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"/>
                  <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"/>
                  <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"/>
                  <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"/>
                  </div>
                  </ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>
                <div className="ordericons">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" width="48px" height ="40px"/>
                  </ListGroup.Item>
                  <ListGroup.Item><img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" width="48px" height ="49px"/>
                  </ListGroup.Item>
                  <ListGroup.Item><img src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png" width="48px" height="43px"/>
                  </ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>
                  <div className="order">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item>
                  <p><b className="top1">100% ORIGINAL</b> guarantee<br/>for all products at myntra.com</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <p><b className="top1">Return within 30days</b> of<br/>receiving your order</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <p><b className="top1">Get free delivery</b> for every<br/>order above Rs. 799</p>
                  </ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>

                </Row>
                <hr/>
                <p><b className="top1">POPULAR SEARCHES</b></p>
                <div className="popular">
                <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |  Sport Shoes |  Reebok Shoes | Puma<br/>Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever<br/>
                21  Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
                  Bras | Suit |<br/> Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers | Sarees</p>
                </div>


                <div className="contact">
                <p>In case of any concern ,<b className="bluecontact"> Contact Us</b></p>
                </div>
                <div className="copyrights">
                <p>© 2020 www.myntra.com. All rights reserved.</p>
                </div>
                <hr/>

                <p><b className="top1">Registered Office Address</b></p>
                <div className="contact">
                3rd Floor, A Block,<br/>
                AKR Tech Park, 7th Mile,<br/>
                Krishna Reddy Industrial Area,<br/>
                Kudlu Gate,<br/>
                Bangalore – 560068<br/>
                </div>
                <div className="copyrights1">
                <p>
                CIN: U72300KA2007PTC041799<br/>
                Telephone: <b className="bluecontact">+91-80-61561999</b></p>
                </div>
                <hr/>

                <p><b className="top2">ONLINE SHOPPING MADE EASY AT MYNTRA</b></p>
                <p className="popular1">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate
                destination for fashion and lifestyle, being<br/> host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal
                care products and more. It is time to redefine your style statement with our treasure-trove<br/> of trendy items. Our online store brings you the
                latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your<br/> favourites
                  delivered right to your doorstep.</p>
                <p><b className="top2">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</b></p>
                <p className="popular1">Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will
                realise that the sky is the limit when it comes<br/>to the types of outfits that you can purchase for different occasions.</p>

                <p className="popular2">1.<b className="top3">Smart men’s clothing</b> - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and
                pyjama combinations for men. Wear your<br/>attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans.
                Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably<br/>smart. Team them up with chinos, cuffed jeans or cropped trousers
                for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage<br/>in water-resistant jackets.
                Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</p>

                <p className="popular2">2.<b className="top3">Trendy women’s clothing </b>- Online shopping for women at Myntra is a mood-elevating experience.
                Look hip and stay comfortable with chinos and printed shorts this summer. Look<br/>hot on your date dressed in a little black dress, or
                opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your<br/>favourites
                from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts
                or palazzos. Kurtis and<br/>jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections
                are perfect to make an impression at big social events such as<br/>weddings. Our salwar-kameez sets, kurtas and Patiala suits make
                comfortable options for regular wear.</p>

                <p className="popular2">3.<b className="top3">Fashionable footwear</b>- While clothes maketh the man, the type of footwear you wear reflects your personality.
                  We bring you an exhaustive lineup of options in casual shoes for<br/>men, such as sneakers and loafers. Make a power statement at work dressed in
                  brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose<br/>shoes for individual games such as tennis, football,
                  basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of<br/>
                  fashionable footwear for ladies, including pumps,
                  heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</p>

                  <p className="popular2">4.<b className="top3">Stylish accessories</b>- Myntra is one of the best online shopping sites for classy accessories
                  that perfectly complement your outfits. You can select smart analogue or digital watches<br/>and match them up with belts and ties. Pick up spacious
                  bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling<br/>pieces, our online
                  jewellery collection offers you many impressive options.</p>

                  <p className="popular2">5.<b className="top3">Fun and frolic</b>- Online shopping for kids at Myntra is a complete joy. Your little princess
                  is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips.<br/>Delight your son by picking up sports shoes,
                  superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create<br/>memories to
                    cherish.</p>

                    <p className="popular2">6.<b className="top3">Beauty begins here</b>- You can also refresh, rejuvenate and reveal beautiful skin with personal
                    care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care<br/>creams, lotions and other ayurvedic products are specially
                    formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair<br/> uber-stylish with
                    shampoos and hair care products. Choose makeup to enhance your natural beauty.</p>

                    <p className="popular1">Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality
                    to your bedrooms with bed linen and<br/>curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants
                    are sure to breathe life into any corner of your home.</p>

                <b className="top2">AFFORDABLE FASHION AT YOUR FINGERTIPS</b>
                <p className="popular1"> Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest
                designer clothing, footwear and accessories in the<br/>market. You can get your hands on the trendiest style every season in western wear. You can also
                avail the best of ethnic fashion during all Indian festive occasions. You are sure to be<br/>impressed with our seasonal discounts on footwear,
                trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>

                <b className="top2"> MYNTRA INSIDER </b>
                <p className="popular1"> Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra
                Insider was introduced to enhance your online experience. The<br/>program is applicable to every registered customer and measures rewards in the form
                of Insider Points.</p>

                <p className="popular1">There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from
                offering discounts on Myntra and partner platform<br/>coupons, each tier comes with its own special perks.</p>

                <b className="top2">Insider</b>
                <p className="popular2">Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</p>
                <p className="popular2">Curated collections from celeb stylists.</p>

                <b className="top2">Elite</b>
                <p className="popular2">VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</p>
                <p className="popular2">Exclusive early access to Limited Edition products</p>

                <b className="top2">Icon</b>
                <p className="popular2">Chance to get on guest lists for special events.</p>


                <b className="top2">Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</b>
                <p className="popular1">The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming
                surge of online content. It was for this very<br/>reason that personalisation of search feeds was proposed as a solution to combat the overload of
                irrelevant information.</p>

                <p className="popular1">Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content,
                increasing user engagement, retention and customer loyalty.</p>

                <p className="popular1">Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed.
                Named theMyntra Studio, this personalised search feed brings you<br/>the latest men and women’s fashion trends, celebrity styles, branded content and
                  daily updates from your favourite fashion labels.</p>

                  <p className="popular1">If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful,
                  and personalised fashion feed in your life.</p>


                <p className="popular2">1.<b className="top4">Keep Up With What Your Favourite Fashion Icons Are Upto</b></p>
                <p className="popular2">The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists.
                The whole concept of building an outfit from scratch and showcasing it to a<br/>huge community of enthusiasts using the hashtag has helped
                individuals with understanding trends and making suitable for daily wear.</p>

                <p className="popular2">Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto.
                From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a<br/>‘Stories’ feature to help track celebrity fashion trends, exploring details
                  such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends,<br/>from all around the world.</p>


                <p className="popular2">2.<b className="top4">Quick Fashion Tip And Tricks</b></p>
                <p className="popular2">Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering
                multiple uses out of heavy ethnic wear, Myntra Studio will help you<br/>acquire some unique and useful fashion hacks. Each hack is designed with
                the intention to help you get the best wear out of everything in your wardrobe.</p>

                <p className="popular2">3.<b className="top4">Updates on What Is Trending and New Product Launches</b></p>
                <p className="popular2">Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending
                  in accessories, clothing and footwear would certainly be of great help.<br/>Myntra Studio helps you stay connected to the most beloved and
                  sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
                  <p className="popular2">Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and
                    jewellery, along with their new seasonal collections.</p>

                <p className="popular2">4.<b className="top4">Explicit Step-By-Step Beauty Routines From Experts</b></p>
                <p className="popular2">Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif,
                are constantly coming up with<br/>mind-blowing products. Whether it is <br/>creating a no-makeup look, different winged eyeliners, do-it-yourself facial
                masks and other personal care beauty routines, Myntra Studio is here for you.</p>

                <p className="popular2">5.<b className="top4">Celebrity Confessions And A Look Into Their Lives</b></p>
                <p className="popular2">A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay
                connected to your most beloved celebrities in a<br/>matter of clicks.</p>

                <p className="popular2">If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter
                content helps achieve that. Applying the<br/>same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix
                  incorporating everything that you love, all at one place. Sign up on Myntra today<br/>and start organising your fashion feed, just the way you want
                  to.</p>


                  <p><b className="top2">MYNTRA APP</b></p>
                  <p className="popular3">Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily.
                Fashion trends seem to change at lightning<br/>speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra
                  has vowed to serve customers to the best of its ability by introducing its first-ever<br/>loyalty program, The Myntra Insider. Gain access to
                  priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra<br/>app
                    on your Android or IOS device today and experience shopping like never before!</p>


                    <p><b className="top2">HISTORY OF MYNTRA</b></p>
                    <p className="popular3">Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel
                with an equally loyal customer base have made<br/>Myntra the online platform that it is today. The original B2B venture for personalized gifts
                was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just<br/>a few years. By 2012, Myntra had introduced
                350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the<br/>online
                  fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>



                  <p className="popular3">The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees.
                  Download the app on your Android or IOS device this very minute to<br/>experience fashion like never before</p>


                <p><b className="top2">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</b></p>
                <p className="popular3">Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view
                your favourite brands with price options for different products in one<br/>place. A user-friendly interface will guide you through your selection
                process. Comprehensive size charts, product information and high-resolution images help you make the best buying<br/>decisions. You also have the
                  freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally,
                  the try-and-<br/>buy option for select products takes customer-friendliness to the next level.</p>

                <p className="popular3">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for
                your friends, family and loved-ones and avail our gift services for<br/> special occasions.</p>

                </div>
                </div>







            );
    }
}
export default Footer;