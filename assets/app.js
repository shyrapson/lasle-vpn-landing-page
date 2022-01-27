
    // arrays of data plans object
    const dataPlans = [
      {
        img: "./images/giftbox.png",
        title: "free plan",
        icon: "./images/mark.png",
        text: "Unlimited Bandwitch",
        text1: "Encrypted Connection",
        text2: "No Traffic Logs",
        text3: "Works on All Devices",
        text4: "",
        text5: "",
        icon1: "",
        icon2: "",
        subttitle: "Free",
        btn: "Select",
      },
      {
        img: "./images/giftbox.png",
        title: "Standard Plan",
        icon: "./images/mark.png",
        icon1: "./images/mark.png",
        icon2: "",
        text: "Unlimited Bandwitch",
        text1: "Encrypted Connection",
        text2: "Yes Traffic Logs",
        text3: "Works on All Devices",
        text4: "Connect Anyware",
        text5: "",
        subttitle: "$9 / mo",
        btn: "Select",
      },
      {
        img: "./images/Standardgift.png",
        title: "Premium Plan",
        icon: "./images/mark.png",
        icon1: "./images/mark.png",
        icon2: "./images/mark.png",
        text: "Unlimited Bandwitch",
        text1: "Encrypted Connection",
        text2: "Yes Traffic Logs",
        text3: "Works on All Devices",
        text4: "Connect Anyware",
        text5: "Get New Features",
        subttitle: "$12 / mo",
        btn: "Select",
      },
    ];

    /*array of features objects and mapping through it items*/
  const featureDatas = [
    { icon: "./images/good icon.png", text: "Powerfull online protection." },
    { icon: "./images/good icon.png", text: "Internet without borders." },
    { icon: "./images/good icon.png", text: "Supercharged VPN" },
    { icon: "./images/good icon.png", text: "No specific time limits." },
  ];
// review datas
const reviewData = [
  {
    avatar: "./images/Robert.png",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    number: "4.5",
    icon: "./images/star-filled.png",
  },
  {
    avatar: "./images/christy.png",
    name: "Yessica Christy",
    location: "Shanxi, China",
    text: "“I like it because I like to travel far and still can connect with high speed.”.",
    number: "4.5",
    icon: "./images/star-filled.png",
  },
  {
    avatar: "./images/Kim.png",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    text: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    number: "4.5",
    icon: "./images/star-filled.png",
  },
  {
    avatar: "./images/Mike.png",
    name: "rabiu saidu",
    location: "Minna, Nigeria",
    text: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    number: "4.5",
    icon: "./images/star-filled.png",
  },

];


  const navLinks = document.querySelector('.navlinks');
const showMenu = document.querySelector('.menu_bar');
showMenu.addEventListener('click',()=>{
  navLinks.classList.toggle('nav_active')
})
  /*IntersectionObserver*/
  const allSections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.3,
  };

  /*  hiding the left and right column */
  document.querySelectorAll(".left_column").forEach((column) => column.classList.add("hidden_left"));
  document.querySelectorAll(".right_column").forEach((column) => column.classList.add("hidden_right"));

  /*  the function that will trigger when intersecting*/
  const callback = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    const imgName = entry.target.getAttribute("class");
    const img = document.querySelector(`.${imgName}`);
    img.lastElementChild.firstElementChild.classList.remove("hidden_left");
    img.lastElementChild.lastElementChild.classList.remove("hidden_right");
    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(callback, options);
  allSections.forEach((section) => observer.observe(section));

  userDatas = [
    { icon: "./images/user.png", numbers: "90+", text: "Users" },
    { icon: "./images/Location.png", numbers: "30+", text: "Locations" },
    { icon: "./images/Server.png", numbers: "50+", text: "Servers" },
  ];

  document.querySelector(".user_datas").innerHTML = userDatas
    .map(
      (data) =>
     `<div class="details">
        <img src = "${data.icon}"/>
        <div class = "no_users">
        <h1>${data.numbers}</h1>
        <p>${data.text}</p>
        </div>
     </div>
        `
    )
    .join("");

  document.querySelector(".features").innerHTML = featureDatas
    .map(
      (data) =>
        `<div class="services">
        <img src = "${data.icon}"/>
        <p>${data.text}</p>
        </div>`
    )
    .join("");

  document.querySelector(".select_plans").innerHTML = dataPlans
    .map(
      (plan) => 
        `<div class = "data_plans">
     <img src ="${plan.img}">
     <h1>${plan.title}</h1>
     <div class="plans"> 
     <div> <img src = "${plan.icon}"><p>${plan.text}</p></div>
      <div> <img src = "${plan.icon}"><p>${plan.text1}</p></div>
      <div> <img src = "${plan.icon}"><p>${plan.text2}</p></div>
      <div> <img src = "${plan.icon}"><p>${plan.text3}</p></div>
      <div> <img src = "${plan.icon1}"><p>${plan.text4}</p></div>
      <div> <img src = "${plan.icon2}"><p>${plan.text5}</p></div>
     </div>
      <h3>${plan.subttitle}<h3/>
      <button class = "select">${plan.btn}<button/>     

    </div>`
    )
    .join("");

// arrow selectors
  const rightArrow = document.querySelector('.right_arrow');
  const leftArrow = document.querySelector('.left_arrow');
 
   let count = 0;

 const nextReview = () => {
  let multipleReviews = [reviewData[count],reviewData[count + 1], reviewData[count + 2]]
  // console.log(multipleReviews)
  const rate =   document.querySelector(".ratings").innerHTML = multipleReviews
  .map(
    (data) =>
      `<div class="rating_card">
      <div class ="user_review">
          <img src ="${data.avatar}"/> 
          <div >
             <h2>${data.name}</h2> 
              <h6>${data.location}</h6>
          </div>
          <div class="btn_star">
          <h4>${data.number}</h4>
          <img src ="${data.icon}"/>
          </div>
      </div>
      <p>${data.text}</p>
</div>`
  )
  .join("");

  

  
  

 }

// next button
    const nextBtn = ()=> {
      count ++;
        
      if(count > reviewData.length-3){
       count = 0
      }
      nextReview()
    }

    // previous button
    const prevBtn = ()=> {
      count --;
      if(count < 0 ){
       count = reviewData.length-3
      }
      nextReview()
    }
    // event listener
    // event loaded
    window.addEventListener('DOMContentLoaded',function(){
      nextReview()
    })
    rightArrow.addEventListener('click',nextBtn)
    leftArrow.addEventListener('click',prevBtn)

    // footer datas
    const footerDatas = [
      {title:'Product', link:'Download ', link1:'Pricing', link2:'Locations', link3:'Server', link4:'Countries', link5:'Blogs'},
      {title:'Engage', link:'LaslesVPN ? ', link1:'FAQ', link2:'Tutorials', link3:'About Us', link4:'Privacy Policy', link5:'Terms of Service'},
      {title:'Earn Money', link:'Affiliate', link1:'Become Partner', link2:'', link3:'', link4:'', link5:''}
    ]
  document.querySelector('.footer_links').innerHTML = footerDatas.map ((data)=>(
      `<ul class="footer_li">
      <h1 class="footer_title"><a href="">${data.title}</a></h1>
      <li><a href="">${data.link}</a></li>
      <li><a href="">${data.link1}</a></li>
      <li><a href="">${data.link2}</a></li>
      <li><a href="">${data.link3}</a></li>
      <li><a href="">${data.link4}</a></li>
      <li><a href="">${data.link5}</a></li>
      </ul>`
    )).join('')

