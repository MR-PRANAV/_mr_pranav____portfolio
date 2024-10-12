// ----------------MENU OPTION HIDE AND SHOW----START--------

let hb_burger = document.querySelector(".hb-burger");
let nav_option_pop = document.querySelector(".nav-option-pop");

hb_burger.addEventListener("click", () => {
  let dis_prop = window
    .getComputedStyle(nav_option_pop)
    .getPropertyValue("display");
  if (dis_prop == "none") {
    nav_option_pop.style.display = "flex";
  } else if (dis_prop == "flex") {
    nav_option_pop.style.display = "none";
  }
  hide_by_outer();
});

// -------------TO CERATE A FUNCTIONALITY WHEN OPTIONS ARE VISIBLE (display: flex)
// ---------IN A NAV BAR WITHOUT A MENU ICON HIDE THE MENU BOX IF ITS VISIBLE---------------

window.addEventListener("resize", logWindowWidth);

logWindowWidth();
function logWindowWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= "827") {
    nav_option_pop.style.display = "none";
  }
}

function hide_by_outer() {
  let inner_click = false;
  let outer_click = false;

  // Add event listener to outer div
  document.querySelector(".OUTER-BOX").addEventListener("click", () => {
    // Check if the target is the inner div
    if (event.target.class === "nav-option-pop") {
      inner_click = true;
      outer_click = false;
    } else {
      inner_click = false;
      outer_click = true;
    }
  });

  let nav_option_pop_state = nav_option_pop.style.display;

  if (nav_option_pop_state == "flex" && (outer_click || inner_click)) {
    nav_option_pop.style.display = "none";
  }
}

// ----------------MENU OPTION HIDE AND SHOW----END--------

// -----------MAIN SECTION HIDE AND SHOW USING MENU OPTION ----START-----------

// Main navigation options
let nav_option_js_1 = document.querySelector(".nav-option-js-1");
let nav_option_js_2 = document.querySelector(".nav-option-js-2");
let nav_option_js_3 = document.querySelector(".nav-option-js-3");
let nav_option_js_4 = document.querySelector(".nav-option-js-4");
let nav_option_js_5 = document.querySelector(".nav-option-js-5");
// A PROFILE BUTTON FROM SIDE BAR SECTION WHOCH IS ( Go For More )
let nav_option_js_2_1 = document.querySelector(".go-to-profile");

// Pop-up navigation options
let nav_option_js_pop_1 = document.querySelector(".nav-option-js-1-pop");
let nav_option_js_pop_2 = document.querySelector(".nav-option-js-2-pop");
let nav_option_js_pop_3 = document.querySelector(".nav-option-js-3-pop");
let nav_option_js_pop_4 = document.querySelector(".nav-option-js-4-pop");
let nav_option_js_pop_5 = document.querySelector(".nav-option-js-5-pop");

// Sections
let main_section_1 = document.querySelector(".home-section");
let main_section_2 = document.querySelector(".about-section");
let main_section_3 = document.querySelector(".project-section");
let main_section_4 = document.querySelector(".skill-section");
let main_section_5 = document.querySelector(".contact-section");

//TO PREDISPLAY TO THE HOME SECTION
main_section_1.style.display = "block";
//TO DISPLAY THE UNDERLINE FOR PREDISPLAY SECTION OPTION OF NEV BAR
nav_option_js_1.style.textDecoration = "underline";

nav_option_js_1.addEventListener("click", () => showSection(0));
nav_option_js_2.addEventListener("click", () => showSection(1));
// A FUNCTION CALL FOR ON CLICK ON A ( Go For More ) BUTTON FROM
// SIDE SECTION TO OPEN PROFILE PAGE
nav_option_js_2_1.addEventListener("click", () => showSection(1));
nav_option_js_3.addEventListener("click", () => showSection(2));
nav_option_js_4.addEventListener("click", () => showSection(3));
nav_option_js_5.addEventListener("click", () => showSection(4));

nav_option_js_pop_1.addEventListener("click", () => showSection(0));
nav_option_js_pop_2.addEventListener("click", () => showSection(1));
nav_option_js_pop_3.addEventListener("click", () => showSection(2));
nav_option_js_pop_4.addEventListener("click", () => showSection(3));
nav_option_js_pop_5.addEventListener("click", () => showSection(4));

function showSection(index) {
  const sections = [
    main_section_1,
    main_section_2,
    main_section_3,
    main_section_4,
    main_section_5,
  ];
  sections.forEach((section, i) => {
    section.style.display = i === index ? "block" : "none";
    nav_option_pop.style.display = "none";
  });

  const nav_option = [
    nav_option_js_1,
    nav_option_js_2,
    nav_option_js_3,
    nav_option_js_4,
    nav_option_js_5,
  ];
  nav_option.forEach((option, j) => {
    option.style.textDecoration = j === index ? "underline" : "none";
  });
}

// -----------MAIN SECTION HIDE AND SHOW USING MENU OPTION ----END-----------

// <!------------------HOME TEXT ANIMATION--------START ------------------->
var txt = "A WEB & SOFT DEVLOPER...";
var speed = 210;
var pauseDuration = 3000;

function typeForward() {
  var i = 0;
  function forward() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      moveCursor();
      setTimeout(forward, speed);
    } else {
      setTimeout(typeReverse, pauseDuration);
    }
  }
  forward();
}

function typeReverse() {
  var i = txt.length - 1;
  function reverse() {
    if (i >= 0) {
      var newTxt = txt.substring(0, i);
      document.getElementById("demo").innerHTML = newTxt;
      i--;
      moveCursor();
      setTimeout(reverse, speed);
    } else {
      setTimeout(typeForward, speed);
    }
  }
  reverse();
}

function moveCursor() {
  var cursorPosition = document.getElementById("demo").innerText.length;
  document.getElementById("cursor").style.marginLeft =
    cursorPosition * -0.3 + "px";
}

typeForward();

// <!---------------HOME TEXT ANIMATION----------END-------------- -->

// ----------------------------CONTACT FORM VALIDATION --------S---------------------

function validateForm(event) {
  // Clear previous error messages
  document.getElementById("fname-error").innerHTML = "";
  document.getElementById("lname-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("mnumber-error").innerHTML = "";
  document.getElementById("message-error").innerHTML = "";

  let isValid = true;

  // Get the form values
  const fname = document.forms[0]["fname"].value;
  const lname = document.forms[0]["lname"].value;
  const email = document.forms[0]["email"].value;
  const mnumber = document.forms[0]["mnumber"].value;
  const message = document.forms[0]["message"].value;

  if (fname.trim() === "") {
    document.getElementById("fname-error").innerHTML = "First name is required";
    isValid = false;
  } else if (!/^[a-zA-Z\s]*$/.test(fname)) {
    document.getElementById("fname-error").innerHTML =
      "First name can't be a number";
    isValid = false;
  }

  if (lname.trim() === "") {
    document.getElementById("lname-error").innerHTML = "Last name is required";
    isValid = false;
  } else if (!/^[a-zA-Z\s]*$/.test(lname)) {
    document.getElementById("lname-error").innerHTML =
      "Last name can't be a number";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address";
    isValid = false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(mnumber)) {
    document.getElementById("mnumber-error").innerHTML =
      "Please enter a valid contact number";
    isValid = false;
  }

  if (message.trim() === "") {
    document.getElementById("message-error").innerHTML =
      "Message cannot be empty";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }

  return isValid;
}

// ----------------------------CONTACT FORM VALIDATION --------E---------------------





// -------------------------------PROJECTS SECTION ------S------------------
// FORMATE OF OBLECT FOR PRIJECT DATA INSERT IT INTO ARRAY NAMED AS "pro"
// {
//   // # PROJECT NUMBER
//   p_tag: "#Mini Projects",
//   p_name: "SYMON SAYS GAME",
//   // github link
//   p_link: "https://github.com/MR-PRANAV/SYMON-SAYS-GAME",
//   p_play: "https://mr-pranav.github.io/SYMON-SAYS-GAME/",
//   p_tech: ["HTML", "CSS", "JS"],
//   p_info: `
//             A SYMON SAYS GAME With Four Colors To Increase The Mind Concentration...
//             `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
//   p_isplay:true
// },

const pro = [
  // ------------ All Grand Projects----------------
  
  {
  // # PROJECT NUMBER
  p_tag: "#Grand Projects",
  p_name: "INFO.EVENT-MANAGEMENT",
  // github link
  p_link: "https://github.com/MR-PRANAV/INFO.EVENT-MANAGEMENT",
  p_play: "https://mr-pranav.github.io/INFO.EVENT-MANAGEMENT/",
  p_tech: ["HTML", "CSS", "JS"],
  p_info: `
     A Premier Destination For Event Planning And Design Needs. With A Commitment To Creating Extraordinary Celebrations, The Website Will Showcase A Wide Range Of Services. Our User-Friendly Interface, Robust Features, And Dedicated Support Make
            `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
  p_isplay:true
},

  {
    // # PROJECT NUMBER
    p_tag: "#Grand Projects",
    p_name: "BOOK.EVENT-MANAGEMENT",
    // github link
    p_link: "https://github.com/MR-PRANAV/BOOK.EVENT-MANAGEMENT",
    p_play: "https://mr-pranav.github.io/BOOK.EVENT-MANAGEMENT/",
    p_tech: ["HTML", "CSS" , "BOOTSTRAP" , "JS" , "PHP" , "MY-SQL" ],
    p_info: `
              This System Organizes The Event For The Customers. Whether You’re Looking To Book A Cocktail Party, Post-Work Gathering, Celebratory Function, Conference, Business Meeting, Wedding Or Private Dining Event, Our Dedicated Urban Events Team Can Create A Package That Will Meet Your Every Need.              
              `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:false
  },
  
  {
    // # PROJECT NUMBER
    p_tag: "#Grand Projects",
    p_name: "NETFLIX CLONE",
    // github link
    p_link: "https://github.com/MR-PRANAV/NETFLIX.in",
    p_play: "https://mr-pranav.github.io/NETFLIX.in/",
    p_tech: ["HTML", "CSS", "JS"],
    p_info: `
              A NETFLIX CLONE SITE With Home Page & Sign-in Page - Validation - Responsive
              `
              ,
      // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:true
  },
  // ------------ All Mini Projects----------------
  {
    // # PROJECT NUMBER
    p_tag: "#Mini Projects",
    p_name: "TODO",
    // github link
    p_link: "https://github.com/MR-PRANAV/TODO-APP",
    p_play: "https://mr-pranav.github.io/TODO-APP/",
    p_tech: ["HTML", "CSS", "JS"],
    p_info: `
              A TODO App Without Handeling A DOM Content...
              Pleas Open Only If You Are In A Laptop And Desktop...
              `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:true
  },

  {
    // # PROJECT NUMBER
    p_tag: "#Mini Projects",
    p_name: "TODO-DOM",
    // github link
    p_link: "https://github.com/MR-PRANAV/TO-DO-WITH-DOM",
    p_play: "https://mr-pranav.github.io/TO-DO-WITH-DOM/",
    p_tech: ["HTML", "CSS", "JS"],
    p_info: `
              A TODO App With Handeling A DOM Content...
              `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:true
  },

  {
    // # PROJECT NUMBER
    p_tag: "#Mini Projects",
    p_name: "SYMON SAYS GAME",
    // github link
    p_link: "https://github.com/MR-PRANAV/SYMON-SAYS-GAME",
    p_play: "https://mr-pranav.github.io/SYMON-SAYS-GAME/",
    p_tech: ["HTML", "CSS", "JS"],
    p_info: `
              A SYMON SAYS GAME With Four Colors To Increase The Mind Concentration...
              `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:true
  },

  {
    // # PROJECT NUMBER
    p_tag: "#Mini Projects",
    p_name: "DELTA-USER-SYSTEM",
    // github link
    p_link: "https://github.com/MR-PRANAV/DELTA-USER-SYSTEM",
    p_play: "",
    p_tech: ["HTML", "CSS", "JS" ,"NODE.JS" , "EXPRESS.JS" , "DB-MYSQL"],
    p_info: `
              A DELTA USER SYSTEM Where User Can See Total User, Can See All User Data, User Can Edit Its Data By Using Its Personal Password, New User Can Register To The Delta System... 
              `,
    // IF WANT TO SHOW THE PROJECT LIVE THEN 'true' ELSE 'false' 
    p_isplay:false
  },

];


let project_section_main = document.querySelector(".project-section-main");
// -----TO SHOW PROJECTS DIRECT-------
nav_option_js_3.addEventListener("click", () => {
  showProjects(pro);
});
nav_option_js_pop_3.addEventListener("click", () => {
  showProjects(pro);
});




function showProjects(pro) {
  reset_projects();
  let project_container;
  for (const p of pro) {
    project_container = document.createElement("div");
    project_container.classList.add("project-container");
    project_section_main.appendChild(project_container);

    let container_top = document.createElement("div");
    container_top.classList.add("project-container-top");
    project_container.appendChild(container_top);

    let top_title = document.createElement("h3");
    top_title.classList.add("top-title");
    top_title.innerText = p.p_name;
    container_top.appendChild(top_title);

    let top_tag = document.createElement("p");
    top_tag.classList.add("top-tag");
    top_tag.classList.add("top-tag2");
    top_tag.innerText = p.p_tag;
    container_top.appendChild(top_tag);

    let link_tag = document.createElement("div");
    link_tag.classList.add("top-tag");
    link_tag.innerHTML = ` <a class="project-link" href="${p.p_link}" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="#ffffff" viewBox="0 0 30 30">
                                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                                  </path>
                              </svg>
                            </a>`;
    top_tag.appendChild(link_tag);
    let link_tag2 = document.createElement("div");
    link_tag2.classList.add("top-tag");
    link_tag2.innerHTML = ` <a class="project-play" href="${p.p_play}" target="_blank">
                              <svg height="35px" width="35px" fill="#ffffff" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve">
                                  <g>
                                    <path class="st0" d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256
                                      C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031
                                      c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031
                                      l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"/>
                                  </g>
                              </svg>
                            </a>`;

    if(p.p_isplay == true){
    top_tag.appendChild(link_tag2);
    }



    let container_mid = document.createElement("div");
    container_mid.classList.add("project-container-mid");
    for (const every_tech of p.p_tech) {
      let mid_tech = document.createElement("p");
      mid_tech.classList.add("mid-tech");
      mid_tech.innerText = every_tech;
      container_mid.appendChild(mid_tech);
    }
    project_container.appendChild(container_mid);

    let container_buttom = document.createElement("div");
    container_buttom.classList.add("project-container-buttom");
    container_buttom.innerText = p.p_info;
    project_container.appendChild(container_buttom);

    let devide_line = document.createElement("hr");
    project_section_main.appendChild(devide_line);
  }
  console.clear();
  console.log(project_container);
}

nav_option_js_1.addEventListener("click", reset_projects);
nav_option_js_2.addEventListener("click", reset_projects);
// nav_option_js_3.addEventListener("click", showProjects(pro));
nav_option_js_4.addEventListener("click", reset_projects);
nav_option_js_5.addEventListener("click", reset_projects);

nav_option_js_pop_1.addEventListener("click", reset_projects);
nav_option_js_pop_2.addEventListener("click", reset_projects);
// nav_option_js_pop_3.addEventListener("click", showProjects(pro) );
nav_option_js_pop_4.addEventListener("click", reset_projects);
nav_option_js_pop_5.addEventListener("click", reset_projects);

function reset_projects() {
  project_section_main.innerHTML = '';
}

// -------------------------------PROJECTS SECTION ------E------------------


// ---------------------------------SKILS SECTION --------S-----------------------

// FORMATE OF OBLECT FOR SKILS DATA INSERT IT INTO ARRAY NAMED AS "skils"
// {
//   // # skil NUMBER
//   s_tag: "#Skils",
//   s_name: "DSA & ADV-DSA ( In Java )",
//   s_key: `  `,
// },
const skill = [
    // ------------ All primary skils----------------
    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "JAVA",
      s_key: `  Flowcharts & Pseudocodes | Variables & Data Types | Conditional Statements | Operators | For, While, Do-while loops | Patterns | Functions |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "ADV-DSA ( In Java )",
      s_key: ` Arrays | 2D Arrays | Strings | Recursion | Divide & Conquer | Backtracking | Bit Manipulation | Time & Space Complexity | Greedy Algorithms | OOPS | ArrayLists | Linked lists | Stacks and Queues | Binary Trees & BST | Heaps/Priority Queues | Hashing (Maps & Sets) | Tries | Graphs | Segment Trees | DP

              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "HTML 5",
      s_key: `Structure | HTML Tags | Block v/s Inline | Tables | Forms | Selectors |

              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "CSS 3",
      s_key: `Css Basic's | Selectors | Box Model | CSS Units | Transition | Transforms | Flex | Media Queries | Animations & 3d Space | 
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "BOOTSTRAP CSS",
      s_key: `Bootstrap Basic's | Components | Layouts(Grid system) |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "JS ( ES6 )",
      s_key: `Variables | Operators | Conditional | Loops | Scope | Functions expressions | Function declaration | Arrays | Objects | Object functions | DOM | Events | IIFE | Closures | Arrow Functions | “this” Keyword | Prototypes | Class | Promises | Callback Timed Events | Async Await |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "NODE.JS",
      s_key: ` Intro | REPL | File Handling | NPM | Intro to Servers | MVC | 
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "EXPRESS",
      s_key: ` Intro | Ejs | Middleware |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "DATABASE-SQL",
      s_key: ` Intro | Select | Create | Alter | Drop | Truncate | Insert | Update | Delete | Grant | Revoke |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skils",
      s_name: "MONGO-DB",
      s_key: ` Intro | Use | CRUD Operations | Mongoose |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Skills",
      s_name: "PHP",
      s_key: `Intro | Variables | Data Types | Functions | Arrays | Forms and User Input | File Handling | Sessions and Cookies | Error Handling | Object-Oriented PHP | MVC | RESTful API | Composer | Performance Optimization |
              `,
    },
    // ------------ All soft skils----------------
    {
      // # skil NUMBER
      s_tag: "#Soft Skils",
      s_name: "GIT & GITHUB",
      s_key: `Intro | Branches | Workflow | Clone To Repo | Push | Commits | Pull Requeste |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Soft Skils",
      s_name: "TERMINAL",
      s_key: `Intro | Directories | Commands | paths | operations on files |
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Soft Skils",
      s_name: "AJAX",
      s_key: `ASYNC Requests | API | JSON | 
              `,
    },

    {
      // # skil NUMBER
      s_tag: "#Soft Skils",
      s_name: "OTHER MEGA WORK",
      s_key: `API's Handling | Error Handling | Validation |
              `,
              // Express Router | Authentication | Deployment 
    },

];

let skill_section_main = document.querySelector(".skill-section-main");
// -----TO SHOW PROJECTS DIRECT-------
nav_option_js_4.addEventListener("click", () => {
  showskill(skill);
});
nav_option_js_pop_4.addEventListener("click", () => {
  showskill(skill);
});


function showskill(skill) {
  reset_skils();

  let skill_container;
  for (const s of skill) {
    skill_container = document.createElement("div");
    skill_container.classList.add("skill-container");
    skill_section_main.appendChild(skill_container);

    let s_container_top = document.createElement("div");
    s_container_top.classList.add("skill-container-top");
    skill_container.appendChild(s_container_top);

    let stop_title = document.createElement("h3");
    stop_title.classList.add("stop-title");
    stop_title.innerText = s.s_name;
    s_container_top.appendChild(stop_title);

    let stop_tag = document.createElement("p");
    stop_tag.classList.add("stop-tag");
    stop_tag.innerText = s.s_tag;
    s_container_top.appendChild(stop_tag);

    let scontainer_mid = document.createElement("div");
    scontainer_mid.classList.add("skill-container-mid");
    scontainer_mid.innerText = s.s_key;

    skill_container.appendChild(scontainer_mid);

    let devide_line = document.createElement("hr");
    skill_section_main.appendChild(devide_line);




  }
  console.clear();
  console.log(skill_container);
}


nav_option_js_1.addEventListener("click", reset_skils);
nav_option_js_2.addEventListener("click", reset_skils);
nav_option_js_3.addEventListener("click", reset_skils);
// nav_option_js_4.addEventListener("click", showskill(pro) );
nav_option_js_5.addEventListener("click", reset_skils);

nav_option_js_pop_1.addEventListener("click", reset_skils);
nav_option_js_pop_2.addEventListener("click", reset_skils);
nav_option_js_pop_3.addEventListener("click", reset_skils);
// nav_option_js_pop_4.addEventListener("click", showskill(pro) );
nav_option_js_pop_5.addEventListener("click", reset_skils);

function reset_skils() {
  skill_section_main.innerHTML = '';
}

// ---------------------------------SKILS SECTION --------E-----------------------
