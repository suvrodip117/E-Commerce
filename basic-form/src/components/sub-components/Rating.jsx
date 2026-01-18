import React from "react";
import '../../styles/subcomponent-style/Rating.css';

const Rating = () => {
  return (
    <div class="rating">
      <input type="radio" id="star1" name="rating" value="1" />
      <label for="star1" class="star">
        &#9733;
      </label>

      <input type="radio" id="star2" name="rating" value="2" />
      <label for="star2" class="star">
        &#9733;
      </label>

      <input type="radio" id="star3" name="rating" value="3" />
      <label for="star3" class="star">
        &#9733;
      </label>

      <input type="radio" id="star4" name="rating" value="4" />
      <label for="star4" class="star">
        &#9733;
      </label>

      <input type="radio" id="star5" name="rating" value="5" />
      <label for="star5" class="star">
        &#9733;
      </label>
    </div>
  );
};

export default Rating;
