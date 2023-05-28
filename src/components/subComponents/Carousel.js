import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel" style={{objectFit: "contain !important"}}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel" >
            <div className="carousel-caption d-none d-md-block mb-4" style={{ "zIndex": "15"}}>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-success text-white" type="submit">Search</button>
                </form>
            </div>
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/300*300/?burger" className="d-block w-100 h-20" style={{filter: "brightness(30%)"}} alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/300*300/?chicken" className="d-block w-100 h-20" style={{filter: "brightness(30%)"}} alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/300*300/?momos" className="d-block w-100 h-20" style={{filter: "brightness(30%)"}} alt="..." />
            </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
