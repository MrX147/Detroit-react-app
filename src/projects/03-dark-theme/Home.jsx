import React from "react";
import Title from "../components/Title";
// import { ThemeContext } from "./context/theme-context";
import "./Home.css";

import image1 from "./images/image1.jpg";

export default function Home() {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className="container border border-success">
      <Title className="title" text={`Detroit Airport Limo Car Service`} />
      <img src={image1} alt="buildings" />

      <h2>
        When it comes to exceptional chauffeured transportation in the Metro
        Detroit Area, Metro Cars stands out as your ultimate choice!
      </h2>

      <div className="my-form-body">
        <p className="my-home-para">
          Detroit Metro Airport Limo Service is the perfect choice for
          dependable and refined transportation to and from Detroit Airport. You
          can say goodbye to traffic concerns and parking issues, as our service
          ensures a punctual and stress-free journey in our luxurious fleet of
          vehicles, allowing you to relax and unwind. As the leading service
          provider in Detroit, we provide a top-notch transportation experience
          thanks to our courteous chauffeurs and well-maintained sedans. Our
          fleet is the epitome of luxury and comfort, perfect for various
          occasions, from social gatherings to leisurely visits to the casino.
          If you’re planning a wedding, we offer the most exquisite and opulent
          cars in the industry, and we can also customize our wedding limos to
          match your wedding theme. Our services go beyond just transportation;
          we also assist travelers, including airport check-ins for those
          traveling abroad. We even offer a ten percent senior discount for
          added convenience and savings. Are we worried about the cost of a
          limo? Detroit Airport Cars provide affordable yet premium sedan and
          taxi services, ensuring a comfortable and cost-effective journey
          without compromising quality. Our drivers are always professional and
          courteous, ensuring your travel experience is as pleasant as possible.
          We operate across various locations in Michigan, and our Detroit
          Airport Limo & Detroit airport taxi service is committed to providing
          a uniform quality of service. Detroit Metro Airport Limo is a trusted
          and versatile transportation service that caters to the needs of
          travelers in and around the Detroit Airport. They are known for their
          commitment to punctuality, ensuring swift and efficient transportation
          for passengers. Their fleet of well-maintained vehicles is diverse and
          tailored to accommodate various preferences and requirements of
          travelers. The Detroit Airport Black Taxi Car Service is a distinct
          offering that provides passengers with an elegant, sleek, and upscale
          travel experience. Additionally, the Detroit Airport Car Service
          strongly emphasizes safety and comfort, ensuring that travelers have a
          secure and smooth transit experience to and from the airport or
          anywhere in the Detroit metropolitan area. Detroit Airport Taxi is a
          professional and convenient transportation solution that offers a
          comprehensive array of services, making it an ideal choice for those
          seeking reliable, timely, and comfortable travel experiences. Detroit
          Airport limo service is now available in Detroit, Royal Oak, Canton,
          Ann Arbor, Lansing, Southfield, Troy, Farmington Hill, Kalamazoo, Port
          Huron, Rochester, Rochester Hill, West Bloomfield, Birmingham,
          Saginaw, Canton, Waterford, Utica, Plymouth as well as all over in
          Michigan. We operate 24/7, so you can always rely on us for
          transportation. To book our services, please get in touch with us via
          our Toll-Free Numbers: (800) 729-6459 or (888) 412-3141
        </p>

        <form className="my-form mb-3">
          <div className="row">
            <div class="form-group mb-3">
              <label for="inputState">Select Service Type</label>
              <select id="inputState" class="form-control">
                <option selected>From Airport...</option>
                <option>To Airport</option>
                <option>Point-to-point</option>
                <option>Hourly/As directed</option>
              </select>
            </div>
            <div class="col">
              <label>Pick-Up Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Date"
              />
            </div>
            <div class="col">
              <label>Pick-Up Time</label>
              <input type="time" placeholder="Enter Time" />
            </div>
            <div className="row">
              <div className="col ">
                <label>Your Pick-Up Location</label>
                <input
                  type="text"
                  className=""
                  placeholder="Enter Your Location"
                />
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>{" "}
            </div>
            <div className="row">
              <div className="col col-md-4">
                <label>No Of Passengers</label>
                <input type="number" className="form-control" id="inputCity" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
