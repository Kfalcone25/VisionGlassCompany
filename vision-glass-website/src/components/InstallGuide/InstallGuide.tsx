import React, { useState } from "react";
import "./InstallGuide.css";
import cycle1 from "../../assets/images/cycle1.jpg";
import ImageSelector from "./ImageSelector";
import { Steps } from "antd";

type Props = {};

const InstallGuide = (props: Props) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "Hello Worlds";
  return (
    <div className="installation-process">
      <div className="container">
        <div className="process-content">
          <div className="process-description">
            <h2>Our Installation Process</h2>
            <p className="">
              At Vision Glass, we follow a meticulous installation process to
              ensure the highest quality results for both residential and
              commercial projects. Our installation process is designed to
              deliver exceptional results, whether you're looking for
              residential glass solutions or commercial glazing services. With
              our expertise and attention to detail, we ensure a seamless and
              professional installation every time.
            </p>
            <ImageSelector />
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>consultation</h3>
                <p>
                  we begin with a detailed consultation to understand your
                  project requirements and provide expert recommendations
                  tailored to your needs.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>measurement and design</h3>
                <p>
                  our team takes precise measurements and creates a custom
                  design based on your specifications, ensuring a perfect fit
                  for your space.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>fabrication</h3>
                <p>
                  using state-of-the-art technology, we fabricate your glass
                  components with utmost precision and care, adhering to the
                  highest quality standards.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>installation</h3>
                <p>
                  our skilled technicians install your glass solutions with
                  meticulous attention to detail, ensuring a flawless finish
                  that enhances the beauty and functionality of your space.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>cleaning and finishing</h3>
                <p>
                  we thoroughly clean the site, leaving it spotless and ready
                  for you to enjoy your newly installed glass products, whether
                  it's for your home or business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallGuide;
