import React from 'react'

export default function Fruits() {
   let fruits= [{
        name:"Apple",
        description: "Apples contain antioxidants, vitamins, dietary fiber, and a range of other nutrients.",
        price:100,
        image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
    },
    {
        name:"Banana",
        description: "Bananas give you instant energy",
        price:45,
        image:"https://5.imimg.com/data5/ANDROID/Default/2022/2/UT/VN/SF/29630129/product-jpeg-250x250.jpg",
    },
    {
        name:"Orange",
        description: "An orange a day will give you all the vitamin C you need.",
        price:70,
        image:"https://5.imimg.com/data5/SELLER/Default/2022/9/OH/QA/NX/45117192/fresh-nagpur-orange-500x500.png"
    },
    {
        name:"Papaya",
        description: "Papayas have a slightly sweet taste",
        price:30,
        image:"https://5.imimg.com/data5/SELLER/Default/2021/3/QL/AL/BR/86539219/papaya-fruit-500x500.jpg"
    },
    {
        name:"Pineapple",
        description: "A sweet tropical fruit with a tough leathery skin and spiky leaves on top.",
        price:45,
        image:"https://yogisorganic.com/cdn/shop/products/Pineapple_600x@2x.jpg?v=1496866405",
    },
    {
        name:"Mango",
        description: "A mango is a sweet tropical fruit, and it's also the name of the trees on which the fruit grows.",
        price:120,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWDJ-HWeQQRRh875fubksEgXpt_ju_fkORrG8t6T9_cB6B0aPU",
    },

   ]
  return (
    <div>
        {fruits.map((value,index)=>(
            <div class="container">
                <div><img src={value.image} width={175} height={150} alt='fruitimg'></img></div>
                <div id="fname">{value.name}</div>
                <div>{value.description}</div>
                <div>{value.price}</div>
                <div><button id="btn" onclick="addCart(${index})">ADD</button></div>
            </div> 

            ))
        }
    </div>
  )
}