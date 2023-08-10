// 이름 띄우는 애니메이션

const showName = () => {
  const namebox = document.getElementsByClassName("textbox_name")[0];
  const mistype = "Jung Hwan";
  const name = "Jung Jung Hwan";
  const hesitation = 10;
  let i = -30;
  const interval = setInterval(() => {
    if (i < 0) {
      //initial delay
      i++;
    } else if (i < mistype.length) {
      let txt = mistype[i++];
      namebox.innerHTML += txt;
    } else if (i < mistype.length + hesitation) {
      i++;
    } else if (i < mistype.length + hesitation + 4) {
      let txt = namebox.innerHTML;
      let len = txt.length;
      namebox.innerHTML = txt.substring(0, len - 1);
      i++;
    } else if (i < mistype.length + hesitation + 14) {
      let txt = name[i - hesitation - 9];
      i++;
      namebox.innerHTML += txt;
    } else {
      clearInterval(interval); // Stop the animation when the text is fully typed.
    }
  }, 100);
};
showName();

//메뉴바 누르면 자동 스크롤
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}

for (let i = 0; i < 4; i++) {
  const section = document.getElementsByClassName("pagelink")[i];
  const sectionId = section.getAttribute("href");
  section.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll(sectionId);
  });
}

// 스크롤에 따른 circle 위치 조정하기
const moveProgressCircle = () => {
  const progressCircleOffset = 70 - 20; // block width/2 - circle radius;
  const scrollTop = document.querySelector("html").scrollTop;
  const scrollHeight = document.querySelector("html").scrollHeight;
  const clientHeight = document.querySelector("html").clientHeight;

  let progress = scrollTop / (scrollHeight - clientHeight);
  // console.log(progress);
  const polynomial = (x) => {
    return 3.863 * Math.pow(x, 3) - 5.286 * Math.pow(x, 2) + 2.423 * x;
  };
  progress = polynomial(progress);
  const leftmost =
    document.getElementsByClassName("menu")[0].getBoundingClientRect().left +
    progressCircleOffset;
  const rightmost =
    document.getElementsByClassName("menu")[3].getBoundingClientRect().left +
    progressCircleOffset;
  document.getElementById("progress-circle").style.left =
    leftmost + progress * (rightmost - leftmost) + "px";
};
moveProgressCircle();
window.addEventListener("scroll", moveProgressCircle);
window.addEventListener("resize", moveProgressCircle);

const topbutton = document.getElementById("nav-toggle");
const topbar = document.getElementById("topbar");
const menus = document.getElementsByClassName("menu");

// work hover 애니메이션
const worksInfo = [
  {
    title: "Album Cover",
    sub: "Photoshop",
    },
  {
    title: "Freshman Guide",
    sub: "Photoshop",
    },
  {
    title: "French Dispatch",
    sub: "React js",
    },
  {
    title: "Jungsinsa",
    sub: "Java",
    },
];
//텍스트 삽입
for (var i = 0; i < 4; i++) {
  document.getElementsByClassName("works description title")[i].innerHTML =
    worksInfo[i].title;
  document.getElementsByClassName("works description sub")[i].innerHTML =
    worksInfo[i].sub;
}

for (var i = 0; i < 4; i++) {
  const element = document.getElementsByClassName("block works")[i]; //커서가 블럭에 올라가면
  const image = document.getElementsByClassName("img works")[i]; //이미지를 반투명하게
  const description = document.getElementsByClassName(
    "works description-container"
  )[i]; //설명박스를 보이게
  

  element.addEventListener("mouseenter", () => {
    image.style.opacity = 0.4;
    description.style.opacity = 1;
   
  });

  element.addEventListener("mouseleave", () => {
    
    image.style.opacity = 1;
    description.style.opacity = 0;
    
  });
}

// stack hover 애니메이션
for (var i = 0; i < 6; i++) {
  const element = document.getElementsByClassName("imgcontainer_zoom")[i];
  const right = document.getElementsByClassName("imgcontainer-reserve_push")[
    (i + 1) % 6
  ];
  const left = document.getElementsByClassName("imgcontainer-reserve_push")[
    (i + 5) % 6
  ];

  element.addEventListener("mouseenter", () => {
    element.classList.remove("stackZoomedOut");
    element.classList.add("stackZoomed");

    left.classList.remove("pushedclockwise_Rev");
    left.classList.remove("pushedcounterclockwise_Rev");
    left.classList.add("pushedcounterclockwise");

    right.classList.remove("pushedcounterclockwise_Rev");
    right.classList.remove("pushedclockwise_Rev");
    right.classList.add("pushedclockwise");
  });
  element.addEventListener("mouseleave", () => {
    element.classList.remove("stackZoomed");
    element.classList.add("stackZoomedOut");

    left.classList.remove("pushedcounterclockwise");
    left.classList.add("pushedcounterclockwise_Rev");

    right.classList.remove("pushedclockwise");
    right.classList.add("pushedclockwise_Rev");
  });
}

//전화기 흔들리는 애니메이션
const phone = document.getElementsByClassName('container_phone')[0];
phone.addEventListener("mouseover",()=>{
  let i=0;
  if(phone.classList.contains("swing")){
    return;
  }
  
  const interval = setInterval(()=>{
    if(i===0){
      phone.classList.add("swing");
      i++;
    }
    else{
      phone.classList.remove("swing");
      clearInterval(interval);
    }
  },3000);
})

