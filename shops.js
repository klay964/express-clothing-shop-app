const { v4: uuidv4 } = require('uuid');
const shops = [
  {
    id: 0,
    name: 'Adidas',

    image:
      'https://wallsdesk.com/wp-content/uploads/2016/08/Adidas-Wallpaper.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/1/9/191036907286-1.1539396404.jpg',
          name: 'Adidas shirt white',
          price: 90,
        },
        {
          id: uuidv4(),
          image:
            'https://scene7.zumiez.com/is/image/zumiez/Zoom_PDP/adidas-Boys-California-Black-T-Shirt-_302320-front-US.jpg',
          name: 'Adidas shirt balck',
          price: 100,
        },
        {
          id: uuidv4(),
          image:
            'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/405ebbe440b743d997a0aa0700810e66_9366/badge-of-sport-tee.jpg',
          name: 'Blue shirt',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://i.ebayimg.com/00/s/NDgwWDQ4MA==/z/asQAAOSwq1JZJXhf/$_57.JPG',
          name: 'red shirt',
          price: 20,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://pyxis.nymag.com/v1/imgs/c7b/ce1/b78bf88e7a5fc8bab672dd5a83686eeb76-american-apparel-jeans.2x.rsquare.w600.jpg',
          name: 'Adidas Jeans',
          price: 90,
        },
        {
          id: uuidv4(),
          image:
            'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1584477049-best-jeans-4-1584477027.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A',
          name: 'Adidas blue jeans',
          price: 110,
        },
        {
          id: uuidv4(),
          image:
            'https://pyxis.nymag.com/v1/imgs/436/b06/3b0e7863b096e15e6c4ec9523658f27898-PhotoSend.rdeep-vertical.w245.jpg',
          name: 'slim fit',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/6/_107369306.jpg?h=365&w=240&dpr=2',
          name: 'blue jeans',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://cdn.shopify.com/s/files/1/2031/6995/products/FX6920_1_1280x.jpg?v=1607015919',
          name: 'Adidas Air Jordan',
          price: 200,
        },
        {
          id: 1,
          image:
            'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/FW1485_FTW_photo_side-lateral-center_white_1360x.jpg?v=1598006917',
          name: 'Adidas Air jordan 2',
          price: 190,
        },
        {
          id: uuidv4(),
          image:
            'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/CD0461-151-PHSLH000-2000_8d5f0035-39bc-4489-8136-460918ccf7d1_240x@2x.jpg?v=1622694756',
          name: 'Air Jordan 4',
          price: 89,
        },
        {
          id: uuidv4(),
          image:
            'https://forstepstyle.b-cdn.net/wp-content/uploads/2021/02/Air-Jordan-4-Retro-University-Blue-2.png',
          name: 'Jordan limited ',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1608063448/header-adidas-meissen-zx8000-porcelain-SPECIALSNEAK1220.jpg?itok=IYDu8bzF',

          name: 'Adidas sneakers',
          price: 2000,
        },
        {
          id: uuidv4(),
          image:
            'https://cdn.cliqueinc.com/posts/273895/the-coolest-sneakers-to-wear-now-273895-1618608221542-product.700x0c.jpg',
          name: 'Adidas snekaers 2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19537643/FV6404_PRFTWCOPAR_FI.jpg',
          name: 'third Adidas edition',
          price: 200,
        },
        {
          id: uuidv4(),
          image:
            'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/e4df2f8972ba4a9d8620ac8400a3ed09_9366/zx-1k-boost-shoes.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },

  {
    id: 1,
    name: 'Nike',
    image: 'https://wallpaperaccess.com/full/281050.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Puma',
    image: 'https://wallpaper.dog/large/5518102.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Polo Ralph Lauren ',
    image: 'https://cdn.wallpapersafari.com/25/28/vDVSg2.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },

  {
    id: 4,
    name: 'LC WAIKIKI',
    image:
      'https://lh3.googleusercontent.com/proxy/oiBPUSKHabITX01OBNrjo3Gg4R_M4etsPwO8a7y-tb1dB2iZWf9lSTKAtkB3BP1JG3o3Cl3zgONgvsE24HpBgcXCDo54ReY4L2oXxQ6uCw3YBbe8CXb9NArnjDlzscH0Dl4oyYSI',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
  {
    id: 5,
    name: 'DeFacto',
    image:
      'https://secureservercdn.net/160.153.138.177/zmx.041.myftpupload.com/wp-content/uploads/2020/01/defacto_media.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
  {
    id: 6,
    name: 'Mavi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_of_Mavi.png',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Zara',
    image:
      'https://d2qpatdq99d39w.cloudfront.net/wp-content/uploads/2019/01/30100901/zara.jpg',
    category: {
      shirt: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt1',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt2',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt3',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt4',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt5',
          price: 40,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'shirt6',
          price: 40,
        },
      ],
      jeans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jeans4',
          price: 20,
        },
      ],
      jordans: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'jordan4',
          price: 20,
        },
      ],
      sneakers: [
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker1',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker2',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker3',
          price: 20,
        },
        {
          id: uuidv4(),
          image:
            'https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg',
          name: 'sneaker4',
          price: 20,
        },
      ],
    },
  },
];

module.exports = shops;
