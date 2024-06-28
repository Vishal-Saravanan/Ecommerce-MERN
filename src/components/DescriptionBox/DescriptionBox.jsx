import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews {122}
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The elegant evening gown was a masterpiece of design and craftsmanship, capturing the essence of timeless beauty and sophistication. Crafted from luxurious silk satin, the dress draped gracefully over the wearer’s form, highlighting curves while maintaining an air of regal refinement. The deep emerald green fabric shimmered under the light, creating a mesmerizing effect with every movement. Intricate lace detailing adorned the bodice, interwoven with delicate beads that added a touch of sparkle.
        </p>
        <p>
          Beneath the dress's enchanting exterior lay thoughtful design elements aimed at ensuring both comfort and style. The interior was lined with the softest silk, providing a smooth feel against the skin, while the hidden corsetry offered subtle support, creating a flattering silhouette without sacrificing ease of movement. A discreet side zipper allowed for seamless wear, preserving the dress's sleek lines.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
