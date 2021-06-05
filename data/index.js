import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark
};

export const NavLinks = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Services",
    url: "/service",
    subItems: [
      {
        name: "Batavia Crypto Token",
        url: "/service"
      },
      {
        name: "BEP20 Token Development",
        url: "/service-details"
      }
    ]
  },
  {
    name: "Contact",
    url: "/contact"
  }
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WELCOME TO BATAVIA CRYPTO",
    title: "MODERN TOKEN ON BINANCE SMART CHAIN",
    button: {
      label: "DISCOVER MORE",
      url: "/service"
    }
  },
  {
    image: sliderOne02,
    subTitle: "WELCOME TO BATAVIA CRYPTO",
    title: "We Help You Build Your Own BEP20 Token",
    button: {
      label: "FIND OUT MORE",
      url: "/service-details"
    }
  }
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO BATAVIA CRYPTO",
    title: "MODERN TOKEN ON BINANCE SMART CHAIN",
    button: {
      label: "DISCOVER MORE",
      url: "/service"
    }
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO BATAVIA CRYPTO",
    title: "We Help You Build Your Own BEP20 Token",
    button: {
      label: "FIND OUT MORE",
      url: "/service-details"
    }
  }
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "We are committed to providing our customers with exceptional service."
};

export const ContactInfosList = [
  {
    title: "Indonesia",
    infos: [
      {
        name: " Glodok Harco baru floor 6 ( Near Foodcourt Area ), Jakarta"
      },
      {
        name: "info@bataviacrypto.com"
      },
      {
        name: "+621 8128 0010 723"
      }
    ]
  }
];

export const ContactFormTitle = {
  subTitle: "Contact with us",
  title: "write us a message",
  description:
    "We are committed to providing our customers with exceptional service."
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single"
  }
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  }
];

export const ServicePostData = [
  {
    title: "Pancake Swap",
    text:
      "You can buy our token in here.",
      iconName: "icon-pancakeswap-cake-seeklogo",
      url: "https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x4abdf364a9ada13c600498cadf4f1a187c695dc9"
  },
  {
    title: "BTV SWAP (COMING SOON)",
    text:
      "You can buy our token in here.",
      iconName: "mei-transfer",
      url: "https://bataviacrypto.com/service"
  }
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServiceHomeThreeData = {
  subTitle: "We are offering",
  title: "Our Services",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "We Create BEP20 Token Based From Binance Smart Chain.",
    subTitle: "We are offering",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      title: "Batavia Crypto Token",
      iconName: "mei-web-design",
      url: "/service"
    },
    {
      title: "BEP20 Token Development",
      iconName: "mei-settings",
      url: "/service-details"
    }
  ]
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details"
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/service-details"
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/service-details"
    }
  ]
};

export const FunfactData = [
  {
    title: "Total Supply",
    countNumber: 1000000
  },
  {
    title: "Burn (%)",
    countNumber: 50
  },
  {
    title: "LP Locked (%)",
    countNumber: 50
  }
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "We are trusted by more than 8900 clients",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.",
  url: "/about"
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";

export const ClientCarouselData = {
  items: [
    {
      url: "https://bscscan.com/token/0x4abDF364A9aDa13c600498cAdf4f1a187C695Dc9",
      image: ClientCarousel01
    },
    {
      url: "https://exchange.pancakeswap.finance/#/swap",
      image: ClientCarousel02
    },
    {
      url: "https://poocoin.app/tokens/0x4abdf364a9ada13c600498cadf4f1a187c695dc9",
      image: ClientCarousel03
    },
    {
      url: "https://dex.guru/token/0x4abdf364a9ada13c600498cadf4f1a187c695dc9-bsc",
      image: ClientCarousel04
    }
  ]
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "build better website alot quicker with meipaly agency",
    subTitle: "get to know us"
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Company Started",
    number: 1990
  }
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "expert people",
    subTitle: "meet the team",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      image: team01,
      name: "Herman Fisher",
      designation: "General Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team02,
      name: "Charlie Kennedy",
      designation: "Brand Designer",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team03,
      name: "Helena Adkins",
      designation: "Seinor Designer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team04,
      name: "Virginia Farmer",
      designation: "Marketing Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team05,
      name: "Philip Hansen",
      designation: "Co Founder",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    }
  ]
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Make amazing websites without touching cod",
    subTitle: "the only design you need",
    text:
      "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purus aliquet."
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "Watch Video"
  }
};


import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers"
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    }
  ]
};

import featureTab01 from "@/images/home_1/c1.jpg";
import featureTab02 from "@/images/home_1/c2.jpg";
import featureTab03 from "@/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "why choose us",
    subTitle: "our benefits",
    text:
      "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
  },
  posts: [
    {
      title: "Latest technology",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab01,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock"
        },
        {
          item: "Scalability of up to 500 employees per time clock"
        },
        {
          item: "The ability to connect up to 32 time clocks"
        },
        {
          item: "Employee self-enrollment"
        },
        {
          item: "Payroll integration"
        },
        {
          item: "Built-in backup camera to verify failed punches"
        }
      ]
    },
    {
      title: "Awesome Support",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab02,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock"
        },
        {
          item: "Scalability of up to 500 employees per time clock"
        },
        {
          item: "The ability to connect up to 32 time clocks"
        },
        {
          item: "Employee self-enrollment"
        },
        {
          item: "Payroll integration"
        },
        {
          item: "Built-in backup camera to verify failed punches"
        }
      ]
    },
    {
      title: "1 Click demo install",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock"
        },
        {
          item: "Scalability of up to 500 employees per time clock"
        },
        {
          item: "The ability to connect up to 32 time clocks"
        },
        {
          item: "Employee self-enrollment"
        },
        {
          item: "Payroll integration"
        },
        {
          item: "Built-in backup camera to verify failed punches"
        }
      ]
    }
  ]
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Every trade contributes towards automatically generating liquidity that goes into multiple pools used by exchanges",
  specialText: "",
  text:
    "Holders earn passive rewards through static reflection as they watch their balance of Batavia Crypto grow indefinitely."
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "work showcase",
    subTitle: "our portfolio",
    text:
      "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
  }
};



import aboutTwo01 from "@/images/home_1/2.jpg";
import aboutTwo02 from "@/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "We make your life easier to understand cryptocurrencies",
    subTitle: "welcome to smart batavia crypto",
    text:
      "We will finish our crypto educational app and begin our own charity project. We will begin a community listing donation raise for several exchanges (i.e. Coinbase, Binance, Kraken)."
  },
  button: {
    label: "Learn More",
    url: "#"
  },
  gallery: [aboutTwo01, aboutTwo02]
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "real experience",
    subTitle: "our core features",
    text:
      " We are committed to providing our customers with exceptional service while offering our employees the best training. "
  },
  posts: [
    {
      title: "No Coding Skills Require",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "Online Documentation",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "SEO Optimized",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    }
  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01
  }
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio"
  },
  {
    label: "Reqeust a free quote",
    url: "/contact"
  }
];
