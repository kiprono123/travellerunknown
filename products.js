const products = [
  // Pants (10)
  { id:  1, name: "Explorer Pants",        category: "pants",        description: "Stretch hiking pants built for rugged trails.",               price: "$79.99",  image: "https://source.unsplash.com/featured/?hiking,pants" },
  { id:  2, name: "TrailFlex Pant",         category: "pants",        description: "Articulated knees and quick-dry fabric.",                   price: "$89.99",  image: "https://source.unsplash.com/featured/?outdoor,pants" },
  { id:  3, name: "Summit Softshell",       category: "pants",        description: "Windproof softshell pants with fleece lining.",             price: "$99.99",  image: "https://source.unsplash.com/featured/?softshell,pants" },
  { id:  4, name: "Pivot Convertible Pant",  category: "pants",        description: "Zip-off legs transform into shorts on the fly.",             price: "$69.99",  image: "https://source.unsplash.com/featured/?convertible,pants" },
  { id:  5, name: "Alpine Insulated Pant",   category: "pants",        description: "PrimaLoft® insulated bib-style pant for alpine climbs.",    price: "$149.99", image: "https://source.unsplash.com/featured/?insulated,pants" },
  { id:  6, name: "RapidDry Trail Pant",     category: "pants",        description: "Ultra-light, moisture-wicking trail running pant.",          price: "$64.99",  image: "https://source.unsplash.com/featured/?trailrunning,pants" },
  { id:  7, name: "EcoCanvas Pant",          category: "pants",        description: "Recycled canvas work pant with reinforced hems.",            price: "$84.99",  image: "https://source.unsplash.com/featured/?canvas,pants" },
  { id:  8, name: "WindWall Pant",           category: "pants",        description: "Wind-blocking stretch pants perfect for breezy summits.",    price: "$109.99", image: "https://source.unsplash.com/featured/?windproof,pants" },
  { id:  9, name: "Urban Adventure Pant",    category: "pants",        description: "Water-resistant pant for city and trail transitions.",       price: "$94.99",  image: "https://source.unsplash.com/featured/?urban,pants" },
  { id: 10, name: "FlexStretch Joggers",     category: "pants",        description: "Casual joggers with four-way stretch fabric.",               price: "$59.99",  image: "https://source.unsplash.com/featured/?joggers,pants" },

  // Hoodies (10)
  { id: 11, name: "Trailblazer Hoodie",      category: "hoodies",      description: "Cozy, breathable fleece hoodie.",                             price: "$59.99",  image: "https://source.unsplash.com/featured/?hoodie,outdoor" },
  { id: 12, name: "Summit Zip-Up",           category: "hoodies",      description: "Full-zip hoodie with micro-fleece lining.",                 price: "$69.99",  image: "https://source.unsplash.com/featured/?zipup,hoodie" },
  { id: 13, name: "Peak Performance Hoodie", category: "hoodies",      description: "Lightweight performance hoodie for layering.",               price: "$54.99",  image: "https://source.unsplash.com/featured/?performance,hoodie" },
  { id: 14, name: "Eco-Blend Hoodie",        category: "hoodies",      description: "50% recycled fabric comfort hoodie.",                       price: "$49.99",  image: "https://source.unsplash.com/featured/?eco,hoodie" },
  { id: 15, name: "WindResist Hoodie",       category: "hoodies",      description: "Wind-resistant shell hoodie for harsh conditions.",          price: "$99.99",  image: "https://source.unsplash.com/featured/?windresist,hoodie" },
  { id: 16, name: "Adventure Pullover",      category: "hoodies",      description: "Pullover hoodie with kangaroo pocket.",                      price: "$44.99",  image: "https://source.unsplash.com/featured/?pullover,hoodie" },
  { id: 17, name: "Fleece Lined Hoodie",     category: "hoodies",      description: "Heavy fleece-lined for cold nights.",                        price: "$79.99",  image: "https://source.unsplash.com/featured/?fleece,hoodie" },
  { id: 18, name: "Packable Hoodie",         category: "hoodies",      description: "Compressible into a pocket for travel.",                     price: "$39.99",  image: "https://source.unsplash.com/featured/?packable,hoodie" },
  { id: 19, name: "Urban Tech Hoodie",       category: "hoodies",      description: "Moisture-wicking tech fabric for city-to-trail.",           price: "$64.99",  image: "https://source.unsplash.com/featured/?urban,hoodie" },
  { id: 20, name: "SoftShell Hoodie",        category: "hoodies",      description: "Softshell front, jersey back for mobility.",                price: "$89.99",  image: "https://source.unsplash.com/featured/?softshell,hoodie" },

  // Shirts (10)
  { id: 21, name: "Adventure T-Shirt",       category:"shirts",       description:"Quick-dry, breathable cotton blend tee.",                   price:"$29.99",  image:"https://source.unsplash.com/featured/?tshirt,outdoor" },
  { id: 22, name:"Trail Tank Top",           category:"shirts",       description:"Sleeveless tank for hot days.",                             price:"$24.99",  image:"https://source.unsplash.com/featured/?tanktop,hiking" },
  { id: 23, name:"Long-Sleeve Base Layer",   category:"shirts",       description:"Thermal base layer for cold weather.",                      price:"$34.99",  image:"https://source.unsplash.com/featured/?baselayer,shirt" },
  { id: 24, name:"Merino Wool Tee",          category:"shirts",       description:"Odor-resistant merino wool performance tee.",                price:"$49.99",  image:"https://source.unsplash.com/featured/?merino,shirt" },
  { id: 25, name:"UV-Protect Shirt",         category:"shirts",       description:"UPF 50+ sun protection long sleeve.",                       price:"$39.99",  image:"https://source.unsplash.com/featured/?sunshirt,outdoor" },
  { id: 26, name:"Graphic Adventure Tee",    category:"shirts",       description:"Bold graphic print on durable cotton.",                     price:"$27.99",  image:"https://source.unsplash.com/featured/?graphic,shirt" },
  { id: 27, name:"Performance Polo",         category:"shirts",       description:"Collared polo with moisture control.",                      price:"$44.99",  image:"https://source.unsplash.com/featured/?polo,outdoor" },
  { id: 28, name:"Packable Hoodie Shirt",    category:"shirts",       description:"Light hoodie-style shirt with packable hood.",              price:"$32.99",  image:"https://source.unsplash.com/featured/?hoodieshirt,travel" },
  { id: 29, name:"Chamois Cycling Shirt",    category:"shirts",       description:"Cycling cut with chamois-friendly back pockets.",            price:"$54.99",  image:"https://source.unsplash.com/featured/?cycling,shirt" },
  { id: 30, name:"CoolMax Shirt",            category:"shirts",       description:"CoolMax® fiber for rapid moisture evaporation.",            price:"$37.99",  image:"https://source.unsplash.com/featured/?coolmax,shirt" },

  // Shorts (10)
  { id: 31, name:"Performance Shorts",       category:"shorts",       description:"High-mobility trail running shorts.",                       price:"$29.99",  image:"https://source.unsplash.com/featured/?shorts,trail" },
  { id: 32, name:"Hiking Cargo Shorts",      category:"shorts",       description:"Multiple pockets for gear storage.",                       price:"$39.99",  image:"https://source.unsplash.com/featured/?cargos,shorts" },
  { id: 33, name:"Convertible Hiking Shorts", category:"shorts",       description:"Zip-off legs convert to pants.",                            price:"$49.99",  image:"https://source.unsplash.com/featured/?convertible,shorts" },
  { id: 34, name:"Mesh Lined Swim Shorts",   category:"shorts",       description:"Quick-dry mesh lining for water adventures.",               price:"$34.99",  image:"https://source.unsplash.com/featured/?swim,shorts" },
  { id: 35, name:"Softshell Bike Shorts",     category:"shorts",       description:"Softshell front and breathable back.",                      price:"$44.99",  image:"https://source.unsplash.com/featured/?bikeshorts,outdoor" },
  { id: 36, name:"Loose Fit Trail Shorts",   category:"shorts",       description:"Relaxed fit for comfortable hikes.",                        price:"$28.99",  image:"https://source.unsplash.com/featured/?loose,shorts" },
  { id: 37, name:"UV-Guard Khaki Shorts",    category:"shorts",       description:"Sun-protective fabric with classic khaki look.",            price:"$31.99",  image:"https://source.unsplash.com/featured/?khaki,shorts" },
  { id: 38, name:"FastDry Running Shorts",   category:"shorts",       description:"Moisture-wicking for high-intensity runs.",                 price:"$26.99",  image:"https://source.unsplash.com/featured/?runningshorts" },
  { id: 39, name:"Thermal Lined Shorts",      category:"shorts",       description:"Light insulation for cool-weather hikes.",                  price:"$42.99",  image:"https://source.unsplash.com/featured/?thermals,shorts" },
  { id: 40, name:"Lightweight Work Shorts",  category:"shorts",       description:"Tough ripstop fabric for work and play.",                   price:"$36.99",  image:"https://source.unsplash.com/featured/?workshorts" },

  // Socks (10)
  { id: 41, name:"Hiking Socks (3 Pack)",    category:"socks",        description:"Cushioned, moisture-wicking hiking socks.",                 price:"$19.99",  image:"https://source.unsplash.com/featured/?socks,hiking" },
  { id: 42, name:"Merino Wool Socks",        category:"socks",        description:"Odor-resistant wool blend for multi-day treks.",            price:"$24.99",  image:"https://source.unsplash.com/featured/?merinosocks" },
  { id: 43, name:"Compression Running Socks", category:"socks",        description:"Graduated compression for improved circulation.",           price:"$14.99",  image:"https://source.unsplash.com/featured/?compressionsocks" },
  { id: 44, name:"Trail Crew Socks",         category:"socks",        description:"Mid-calf height for trail protection.",                    price:"$17.99",  image:"https://source.unsplash.com/featured/?crewsocks" },
  { id: 45, name:"Lightweight Liner Socks",   category:"socks",        description:"Ultra-thin liners for blister prevention.",                 price:"$11.99",  image:"https://source.unsplash.com/featured/?linersocks" },
  { id: 46, name:"ColdWeather Boot Socks",    category:"socks",        description:"Thick insulation for winter boots.",                        price:"$21.99",  image:"https://source.unsplash.com/featured/?bootsocks" },
  { id: 47, name:"Ankle Trail Socks",        category:"socks",        description:"Low-cut for minimalist trail runners.",                     price:"$13.99",  image:"https://source.unsplash.com/featured/?anklesocks" },
  { id: 48, name:"Merino Hiker Mid Socks",    category:"socks",        description:"Mid-height wool mix for backpackers.",                     price:"$22.99",  image:"https://source.unsplash.com/featured/?hikersocks" },
  { id: 49, name:"Cushioned Ski Socks",       category:"socks",        description:"Extra padding for ski and snowboard.",                     price:"$26.99",  image:"https://source.unsplash.com/featured/?skisocks" },
  { id: 50, name:"Breathable No-Show Socks",  category:"socks",        description:"Invisible no-show design with vented mesh.",                price:"$12.99",  image:"https://source.unsplash.com/featured/?noshow,socks" },

  // Jackets (10)
  { id: 51, name:"Stormproof Jacket",        category:"jackets",      description:"Waterproof, breathable shell.",                             price:"$129.99", image:"https://source.unsplash.com/featured/?rainjacket" },
  { id: 52, name:"Insulated Parka",          category:"jackets",      description:"Down-filled parka for extreme cold.",                       price:"$199.99", image:"https://source.unsplash.com/featured/?parka" },
  { id: 53, name:"Softshell Windbreaker",    category:"jackets",      description:"Wind-blocking softshell with stretch.",                     price:"$99.99",  image:"https://source.unsplash.com/featured/?windbreaker" },
  { id: 54, name:"Fleece Midlayer",          category:"jackets",      description:"Midlayer fleece for versatile warmth.",                     price:"$79.99",  image:"https://source.unsplash.com/featured/?fleecejacket" },
  { id: 55, name:"Packable Down Jacket",     category:"jackets",      description:"Compresses into a pocket for travel.",                     price:"$159.99", image:"https://source.unsplash.com/featured/?packabledown" },
  { id: 56, name:"3-in-1 Ski Jacket",         category:"jackets",      description:"Removable liner for multiple seasons.",                     price:"$229.99", image:"https://source.unsplash.com/featured/?skijacket" },
  { id: 57, name:"Softshell Hybrid Jacket",   category:"jackets",      description:"Jacket with hybrid insulation zones.",                      price:"$114.99", image:"https://source.unsplash.com/featured/?hybridjacket" },
  { id: 58, name:"Rain Cape",                category:"jackets",      description:"Lightweight waterproof rain cape.",                         price:"$49.99",  image:"https://source.unsplash.com/featured/?raincape" },
  { id: 59, name:"Urban Commuter Jacket",    category:"jackets",      description:"Tech fabric with reflective detailing.",                   price:"$119.99", image:"https://source.unsplash.com/featured/?commuterjacket" },
  { id: 60, name:"Insulated Puffer Jacket",   category:"jackets",      description:"Warm puffer with water-repellent shell.",                   price:"$139.99", image:"https://source.unsplash.com/featured/?pufferjacket" },

  // Hats (10)
  { id: 61, name:"Explorer Hat",             category:"hats",         description:"Wide-brimmed sun hat with chin strap.",                    price:"$24.99",  image:"https://source.unsplash.com/featured/?sunhat" },
  { id: 62, name:"Beanie Winter Hat",         category:"hats",         description:"Knit beanie for cold weather.",                             price:"$19.99",  image:"https://source.unsplash.com/featured/?beanie" },
  { id: 63, name:"Tech Baseball Cap",         category:"hats",         description:"Moisture-wicking performance cap.",                         price:"$29.99",  image:"https://source.unsplash.com/featured/?baseballcap" },
  { id: 64, name:"Buff Neck Gaiter",          category:"hats",         description:"Multi-use tube for head and neck protection.",              price:"$17.99",  image:"https://source.unsplash.com/featured/?buff" },
  { id: 65, name:"Bucket Fishing Hat",        category:"hats",         description:"Water-resistant bucket hat.",                               price:"$21.99",  image:"https://source.unsplash.com/featured/?buckethat" },
  { id: 66, name:"UPF Sun Visor",            category:"hats",         description:"Lightweight visor for sun protection.",                    price:"$14.99",  image:"https://source.unsplash.com/featured/?visor" },
  { id: 67, name:"Hiking Cap",               category:"hats",         description:"Breathable cap with moisture-wicking liner.",               price:"$22.99",  image:"https://source.unsplash.com/featured/?hikingcap" },
  { id: 68, name:"Fleece Ear Warmer",         category:"hats",         description:"Soft fleece ear band for winter.",                         price:"$16.99",  image:"https://source.unsplash.com/featured/?earwarmer" },
  { id: 69, name:"Merino Watch Cap",          category:"hats",         description:"Lightweight merino wool cap.",                              price:"$34.99",  image:"https://source.unsplash.com/featured/?watchcap" },
  { id: 70, name:"Rainproof Boonie Hat",      category:"hats",         description:"Boonie hat with waterproof treatment.",                     price:"$27.99",  image:"https://source.unsplash.com/featured/?booniehat" },

  // Boots (10)
  { id: 71, name:"Trail Boots",              category:"boots",        description:"High-traction waterproof leather boots.",                  price:"$149.99", image:"https://source.unsplash.com/featured/?hikingboots" },
  { id: 72, name:"Lightweight Trail Runners", category:"boots",        description:"Breathable trail running shoes.",                           price:"$99.99",  image:"https://source.unsplash.com/featured/?trailrunners" },
  { id: 73, name:"Mountaineering Boots",      category:"boots",        description:"Rigid sole for technical climbs.",                          price:"$249.99", image:"https://source.unsplash.com/featured/?mountaineeringboots" },
  { id: 74, name:"Urban Waterproof Boots",    category:"boots",        description:"Stylish yet waterproof city boots.",                        price:"$129.99", image:"https://source.unsplash.com/featured/?urbanboots" },
  { id: 75, name:"Packable Camp Shoes",       category:"boots",        description:"Compressible camp shoes for backpackers.",                  price:"$79.99",  image:"https://source.unsplash.com/featured/?campshoes" },
  { id: 76, name:"Leather Work Boots",        category:"boots",        description:"Rugged leather for outdoor work.",                          price:"$159.99", image:"https://source.unsplash.com/featured/?workboots" },
  { id: 77, name:"Insulated Snow Boots",      category:"boots",        description:"Warm insulation and grip for snow.",                       price:"$189.99", image:"https://source.unsplash.com/featured/?snowboots" },
  { id: 78, name:"Water Shoes",              category:"boots",        description:"Quick-dry water-resistant shoes.",                           price:"$49.99",  image:"https://source.unsplash.com/featured/?watershoes" },
  { id: 79, name:"Desert Sandals",           category:"boots",        description:"Ventilated sandals for hot climates.",                      price:"$39.99",  image:"https://source.unsplash.com/featured/?trailsandals" },
  { id: 80, name:"Climbing Approach Shoes",   category:"boots",        description:"Sticky rubber soles for rock approaches.",                  price:"$139.99", image:"https://source.unsplash.com/featured/?approachshoes" },

  // Shoes (10)
  { id: 81, name:"Trek Shoes",               category:"shoes",        description:"Lightweight cushioned trail shoes.",                        price:"$99.99",  image:"https://source.unsplash.com/featured/?trekshoes" },
  { id: 82, name:"FastDry Running Shoes",     category:"shoes",        description:"Breathable mesh for speed runs.",                           price:"$89.99",  image:"https://source.unsplash.com/featured/?runningshoes" },
  { id: 83, name:"Urban Commuter Sneakers",   category:"shoes",        description:"Casual sneakers with grip sole.",                           price:"$79.99",  image:"https://source.unsplash.com/featured/?sneakers" },
  { id: 84, name:"Cycling Shoes",            category:"shoes",        description:"Clip-in cycling shoes with stiff sole.",                     price:"$119.99", image:"https://source.unsplash.com/featured/?cyclingshoes" },
  { id: 85, name:"Approach Shoes",            category:"shoes",        description:"Hybrid between boot and shoe for rock approaches.",          price:"$129.99", image:"https://source.unsplash.com/featured/?approachshoes" },
  { id: 86, name:"Waterproof Sneakers",       category:"shoes",        description:"Sneakers with waterproof membrane.",                        price:"$109.99", image:"https://source.unsplash.com/featured/?waterproofshoes" },
  { id: 87, name:"Lightweight Trainers",      category:"shoes",        description:"Daily trainers with lightweight foam midsole.",             price:"$69.99",  image:"https://source.unsplash.com/featured/?trainers" },
  { id: 88, name:"Sand & Sea Slides",         category:"shoes",        description:"Quick-dry slides for beach and camp.",                      price:"$29.99",  image:"https://source.unsplash.com/featured/?slides" },
  { id: 89, name:"Winter Insulated Shoes",    category:"shoes",        description:"Insulated for frost protection.",                           price:"$139.99", image:"https://source.unsplash.com/featured/?wintershoes" },
  { id: 90, name:"Trail Grip Shoes",          category:"shoes",        description:"Aggressive outsole for loose terrain.",                     price:"$119.99", image:"https://source.unsplash.com/featured/?trailshoes" },

  // Rashguards (10)
  { id: 91, name:"Trail Rashguard",          category:"rashguards",   description:"UPF 50+ moisture-wicking rashguard.",                        price:"$44.99",  image:"https://source.unsplash.com/featured/?rashguard" },
  { id: 92, name:"Long-Sleeve Surf Guard",   category:"rashguards",   description:"Full-coverage for sun and surf.",                            price:"$49.99",  image:"https://source.unsplash.com/featured/?surf,guards" },
  { id: 93, name:"Zip-Up Rashguard",         category:"rashguards",   description:"Front zip for ventilation control.",                        price:"$54.99",  image:"https://source.unsplash.com/featured/?ziprashguard" },
  { id: 94, name:"Kids Junior Rashguard",    category:"rashguards",   description:"Youth size UPF sun protection.",                            price:"$34.99",  image:"https://source.unsplash.com/featured/?kidsrashguard" },
  { id: 95, name:"Women’s Crop Rashguard",   category:"rashguards",   description:"Crop-length design with stretchy fabric.",                  price:"$39.99",  image:"https://source.unsplash.com/featured/?womenrashguard" },
  { id: 96, name:"Men’s Long-Leg Rashguard", category:"rashguards",   description:"Extended leg coverage rashguard pants.",                    price:"$59.99",  image:"https://source.unsplash.com/featured/?rashguardpants" },
  { id: 97, name:"Seam-Free Rashguard",       category:"rashguards",   description:"Flatlock seams for chafe-free wear.",                        price:"$47.99",  image:"https://source.unsplash.com/featured/?seamless,rashguard" },
  { id: 98, name:"Reef-Safe Rashguard",      category:"rashguards",   description:"Eco-friendly fabric with reef-safe sunscreen treatment.",   price:"$52.99",  image:"https://source.unsplash.com/featured/?reef,safe" },
  { id: 99, name:"Quick-Dry Surf Shirt",      category:"rashguards",   description:"Slim fit with rapid evaporation.",                         price:"$42.99",  image:"https://source.unsplash.com/featured/?surfshirt" },
  { id:100, name:"Neon Reflective Guard",    category:"rashguards",   description:"High-visibility reflective rashguard.",                    price:"$49.99",  image:"https://source.unsplash.com/featured/?reflective,rashguard" },

  // Accessories (10)
  { id:101, name:"Trail Water Bottle",       category:"accessories",  description:"Insulated stainless steel water bottle.",                   price:"$29.99",  image:"https://source.unsplash.com/featured/?waterbottle" },
  { id:102, name:"Headlamp 500 Lumens",      category:"accessories",  description:"Rechargeable, weatherproof headlamp.",                       price:"$49.99",  image:"https://source.unsplash.com/featured/?headlamp" },
  { id:103, name:"Compact Sleeping Bag",     category:"accessories",  description:"Down sleeping bag rated to 20°F.",                           price:"$179.99", image:"https://source.unsplash.com/featured/?sleepingbag" },
  { id:104, name:"Adventure Cooking Kit",    category:"accessories",  description:"Portable cooking set for backpackers.",                     price:"$69.99",  image:"https://source.unsplash.com/featured/?campingcookware" },
  { id:105, name:"Trekking Poles",           category:"accessories",  description:"Lightweight, collapsible trekking poles.",                   price:"$79.99",  image:"https://source.unsplash.com/featured/?trekkingpoles" },
  { id:106, name:"Dry Bag 20L",              category:"accessories",  description:"Waterproof dry bag for river trips.",                       price:"$34.99",  image:"https://source.unsplash.com/featured/?drybag" },
  { id:107, name:"Adventure Watch",          category:"accessories",  description:"GPS-enabled outdoor watch.",                                 price:"$249.99", image:"https://source.unsplash.com/featured/?outdoorwatch" },
  { id:108, name:"Multi-Tool Kit",           category:"accessories",  description:"Essential pocket multi-tool with 12 functions.",            price:"$39.99",  image:"https://source.unsplash.com/featured/?multitool" },
  { id:109, name:"Paracord Bracelet",        category:"accessories",  description:"550 paracord survival bracelet with firestarter.",          price:"$24.99",  image:"https://source.unsplash.com/featured/?paracord" },
  { id:110, name:"Portable Solar Charger",   category:"accessories",  description:"Compact solar panel power bank.",                            price:"$59.99",  image:"https://source.unsplash.com/featured/?solarcharger" },

  // Tents (10)
  { id:111, name:"Camping Tent 2P",          category:"tents",        description:"Ultra-light, waterproof 2-person tent.",                    price:"$199.99", image:"https://source.unsplash.com/featured/?tent" },
  { id:112, name:"Family Cabin Tent",        category:"tents",        description:"Spacious cabin tent for 4-6 people.",                       price:"$349.99", image:"https://source.unsplash.com/featured/?cabintent" },
  { id:113, name:"Backpacking Tent",         category:"tents",        description:"High-durability 1-person tent for solo trips.",             price:"$149.99", image:"https://source.unsplash.com/featured/?backpackingtent" },
  { id:114, name:"FastPitch Tent",           category:"tents",        description:"Pop-up tent for quick setup.",                              price:"$129.99", image:"https://source.unsplash.com/featured/?poptent" },
  { id:115, name:"Four-Season Tent",         category:"tents",        description:"Built for winter storms and heavy snow.",                   price:"$399.99", image:"https://source.unsplash.com/featured/?wintertent" },
  { id:116, name:"Beach Shelter",            category:"tents",        description:"Open-face UV-protected beach tent.",                        price:"$89.99",  image:"https://source.unsplash.com/featured/?beachtent" },
  { id:117, name:"Bivy Sack",                category:"tents",        description:"Minimal single-person bivy shelter.",                       price:"$59.99",  image:"https://source.unsplash.com/featured/?bivy" },
  { id:118, name:"Mosquito Net Tent",        category:"tents",        description:"Lightweight mesh for insect-free camping.",                  price:"$49.99",  image:"https://source.unsplash.com/featured/?mosquitonet" },
  { id:119, name:"Inflatable Tent",          category:"tents",        description:"Air-beam tent with no poles required.",                     price:"$279.99", image:"https://source.unsplash.com/featured/?airtent" },
  { id:120, name:"Ultralite Hammock Tent",   category:"tents",        description:"Hammock-style tree tent for elevated camping.",             price:"$159.99", image:"https://source.unsplash.com/featured/?hammocktent" },

  // Sleeping Gear (10)
  { id:121, name:"Compact Sleeping Bag",     category:"sleepinggear", description:"Down sleeping bag rated to 20°F.",                           price:"$179.99", image:"https://source.unsplash.com/featured/?sleepingbag" },
  { id:122, name:"Inflatable Sleeping Pad",  category:"sleepinggear", description:"Self-inflating foam pad with comfort top.",                 price:"$89.99",  image:"https://source.unsplash.com/featured/?sleepingpad" },
  { id:123, name:"Camping Pillow",           category:"sleepinggear", description:"Compressible travel pillow with soft cover.",               price:"$39.99",  image:"https://source.unsplash.com/featured/?travelpillow" },
  { id:124, name:"Insulated Air Mat",        category:"sleepinggear", description:"Air mat with integrated insulation.",                       price:"$119.99", image:"https://source.unsplash.com/featured/?airmat" },
  { id:125, name:"Underquilt",               category:"sleepinggear", description:"Underquilt for hammock warmth.",                             price:"$149.99", image:"https://source.unsplash.com/featured/?underquilt" },
  { id:126, name:"Sleeping Bag Liner",       category:"sleepinggear", description:"Silk liner for extra warmth and hygiene.",                  price:"$29.99",  image:"https://source.unsplash.com/featured/?bagliner" },
  { id:127, name:"Cold-Weather Quilt",       category:"sleepinggear", description:"Lightweight quilt rated to 30°F.",                          price:"$139.99", image:"https://source.unsplash.com/featured/?sleepquilt" },
  { id:128, name:"Camping Blanket",          category:"sleepinggear", description:"Warm wool blend camping blanket.",                          price:"$49.99",  image:"https://source.unsplash.com/featured/?campblanket" },
  { id:129, name:"PillowCase Case",          category:"sleepinggear", description:"Protective travel case for pillows and liners.",            price:"$19.99",  image:"https://source.unsplash.com/featured/?pillowcase" },
  { id:130, name:"Heated Sleeping Bag",      category:"sleepinggear", description:"Battery-powered heated bag for extreme cold.",               price:"$229.99", image:"https://source.unsplash.com/featured/?heatingsleepingbag" }
];
// js/products.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productContainer');
  const searchInput = document.getElementById('searchInput');
  const searchBtn   = document.getElementById('searchBtn');

  // Function to render any list of products
  function renderProducts(list) {
    container.innerHTML = '';
    if (list.length === 0) {
      container.innerHTML = '<p>No products found.</p>';
      return;
    }
    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <a href="product-detail.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}">
          <div class="product-info">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
          </div>
        </a>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }

  // Initially show all products
  renderProducts(products);

  // Optional: wire up search
  searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    renderProducts(filtered);
  });
});
// products.js
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();

  // On login.html
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const user = { username, email };
      localStorage.setItem('tu_user', JSON.stringify(user));
      window.location.href = 'index.html';
    });
  }

  // On profile.html
  const profileInfo = document.getElementById('profileInfo');
  if (profileInfo) {
    const user = JSON.parse(localStorage.getItem('tu_user'));
    if (user) {
      profileInfo.innerHTML = `
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
    } else {
      window.location.href = 'login.html';
    }
    document.getElementById('btnLogout').addEventListener('click', () => {
      localStorage.removeItem('tu_user');
      window.location.href = 'index.html';
    });
  }
});

// Renders either “Login” or “Profile / Logout” in header
function renderHeader() {
  const header = document.getElementById('site-header');
  const user = JSON.parse(localStorage.getItem('tu_user'));
  header.innerHTML = user
    ? `<nav>
         <a href="index.html">Home</a> |
         <a href="profile.html">Profile</a> |
         <a href="#" id="logoutLink">Logout</a>
       </nav>`
    : `<nav>
         <a href="index.html">Home</a> |
         <a href="login.html">Login</a>
       </nav>`;

  // attach logout link if present
  const logoutLink = document.getElementById('logoutLink');
  if (logoutLink) {
    logoutLink.addEventListener('click', e => {
      e.preventDefault();
      localStorage.removeItem('tu_user');
      window.location.href = 'index.html';
    });
  }
}

card.innerHTML = `
  <img src="${p.image}" alt="${p.name}" class="detail-img">
  <div class="detail-info">
    <h2>${p.name}</h2>
    <p class="description">${p.description}</p>
    <p><em>Category:</em> ${p.category}</p>
    <p class="price"><strong>${p.price}</strong></p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  </div>
`;
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cartItems');
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      total += parseFloat(item.price.replace('$',''));
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>
      `;
      cartContainer.appendChild(div);
    });
    const totalDiv = document.createElement('p');
    totalDiv.className = 'cart-total';
    totalDiv.id = 'orderTotal';
    totalDiv.textContent = `Order Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
  }

  // Coupon system
  const coupons = { 'SAVE10': 10, 'ADVENTURE15': 15 }; // in dollars
  document.getElementById('applyCoupon').addEventListener('click', () => {
    const code = document.getElementById('couponInput').value.toUpperCase();
    const discount = coupons[code];
    const totalElement = document.getElementById('orderTotal');
    const message = document.getElementById('couponMessage');

    if (discount) {
      total -= discount;
      if (total < 0) total = 0;
      totalElement.textContent = `Order Total: $${total.toFixed(2)}`;
      message.textContent = `Coupon applied! You saved $${discount}`;
    } else {
      message.textContent = 'Invalid coupon code.';
    }
  });

  // Payment Method Toggle
  const form = document.getElementById('paymentForm');
  const cardFields = document.getElementById('cardFields');

  form.payment.forEach(radio => {
    radio.addEventListener('change', () => {
      cardFields.style.display = radio.value === 'card' ? 'block' : 'none';
    });
  });

  // Address Save
  const addressForm = document.getElementById('addressForm');
  const savedAddress = document.getElementById('savedAddress');

  addressForm.addEventListener('submit', e => {
    e.preventDefault();
    const address = {
      line: document.getElementById('addressLine').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value
    };
    localStorage.setItem('tu_address', JSON.stringify(address));
    savedAddress.innerHTML = `<strong>Saved Address:</strong> ${address.line}, ${address.city}, ${address.state} ${address.zip}`;
  });

  // Load existing address if any
  const storedAddress = JSON.parse(localStorage.getItem('tu_address'));
  if (storedAddress) {
    savedAddress.innerHTML = `<strong>Saved Address:</strong> ${storedAddress.line}, ${storedAddress.city}, ${storedAddress.state} ${storedAddress.zip}`;
  }

  // Place Order
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Payment successful! Thank you for your order.');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  });
});
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
