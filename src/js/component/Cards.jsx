import React from "react";

export const Cards = () => {
  const Cards = [
    {
      photo: "https://www.globalapptesting.com/hs-fs/hubfs/Ada_Lovelace_Chalon_portrait.jpg?width=750&name=Ada_Lovelace_Chalon_portrait.jpg",
      title: "Ada Lovelace",
      text:
        "Ada is often referred to as the “world’s first computer programmer”. It was Lovelace's notes on the Analytical Engine that Alan Turing used as a form of inspiration for his work on the first modern computer in the 1940s.",
      button: "Find Out more!",
    },
    {
      photo: "https://www.globalapptesting.com/hs-fs/hubfs/grace%20hopper-1.jpg?width=750&name=grace%20hopper-1.jpg",
      title: "Grace Hopper",
      text:
        "Undeniably famous in the tech world, Rear Admiral Grace M. Hopper was an esteemed computer scientist and one of the first computer programmers to work on the Harvard Mark I.",
      button: "Find Out more!",
    },
    {
      photo: "https://www.globalapptesting.com/hs-fs/hubfs/hedy%20lamarr.jpg?width=750&name=hedy%20lamarr.jpg",
      title: "Hedy Lamarr",
      text:
        "This frequency hopping system was intended as a way to set radio-guided torpedos off course during the war, but the idea eventually inspired Wi-Fi, GPS and Bluetooth technology commonly used today.",
      button: "Find Out more!",
    },
    {
      photo: "https://www.globalapptesting.com/hs-fs/hubfs/annie%20easley.jpg?width=750&name=annie%20easley.jpg",
      title: "Annie Easley",
      text:
        "Annie was a NASA rocket scientist, and a trailblazer for gender and racial diversity in STEM. When hired, she was one of only four black employees at the Lab.",
      button: "Find Out more!",
    },
  ];

  return (
    <div className="row mb-2" id="carta">
      {Cards.map((item, i) => (
        <div key={i} className="col">
          <div className="card">
            <img
              className="card-img-top" 
              src={item.photo}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title  text-center mb-2">{item.title}</h5>
              <div className=" text-center mb-2">
                <p className="card-text mt-auto">{item.text}</p>
              </div>
              <div className="container d-flex justify-content-center">
                <a href="https://www.globalapptesting.com/blog/the-women-who-changed-the-tech-world" className="btn btn-info">
                  {item.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
