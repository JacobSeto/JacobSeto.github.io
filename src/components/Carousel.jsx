import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} pause="hover">
      <Carousel.Item>
        <img
          src="/images/slideshow/PAX East.webp"
          alt="PAX East"
        />
        <Carousel.Caption>
          <h3>Booth at PAX East 2023</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/images/slideshow/DGA x Roblox.webp"
          alt="DGA x Roblox"
        />
        <Carousel.Caption>
          <h3>DGA x Roblox Collab</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/images/slideshow/DGA Studios.webp"
          alt="DGA Studios"
        />
        <Carousel.Caption>
          <h3>DGA Studios Team Photo</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/images/slideshow/Rabbeat Team.webp"
          alt="Rabbeat Team"
        />
        <Carousel.Caption>
          <h3>Intro to Game Design Team Photo</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/images/slideshow/Trigger Happy.webp"
          alt="Trigger Happy"
        />
        <Carousel.Caption>
          <h3>Advanced Game Design Team Photo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
