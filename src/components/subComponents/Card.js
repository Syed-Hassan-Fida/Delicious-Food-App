import React from "react";

function Card() {
  return (
    <div className="container m-4">
      <div className="row d-flex">
        <div className="col-4 col-sm-4 col-md-4">
          <div class="card" style={{ width: "18rem;", maxHeight: "360px" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example</p>
              <div className="container w-100">
                <select className="m-2 h-100 bg-success rounded">
                  {Array.from(Array(6), (k, v) => {
                    return (
                      <option key={v + 1} value={v + 1}>
                        {v + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="m-2 h-100 bg-success rounded">
                  <option value="half">Half</option>
                  <option value="Medium">Medium</option>
                  <option value="Full">Full</option>
                </select>
                <div className="d-inline fs-5 h-100">Total Price</div>
              </div>
              <a href="/" class="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
