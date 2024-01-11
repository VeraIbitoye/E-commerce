import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          molestias sed cumque reiciendis reprehenderit iste doloremque, illum
          facilis deleniti praesentium ius to aperiam, hic distinctio atque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          animi ipsa numquam sit nostrum sapiente dicta fugit delectus velit
          incidunt?  
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
