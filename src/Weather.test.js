import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import axios from 'axios';
import Weather from './Weather';

jest.mock("axios", () => {
  return {
   get: jest.fn(() =>
   Promise.resolve({
    data: {
      main: {
        name: "London"
      }
    }
   })
   )
  }
});
afterEach(cleanup);

describe("Weather", () => {
     it('should render location in location div', async () => {
     render(<Weather />)
     const locationPlaceHolder = screen.getByPlaceholderText("Enter Location");
     fireEvent.change(locationPlaceHolder, { target: { value: "London" } });
     fireEvent.keyPress(locationPlaceHolder, { key: 'Enter', charCode: 13 });
     const locationDiv = screen.getByTestId("location");
     expect(locationDiv.textContent).toBeInTheDocument("London");
   })
})


//  it("rendering enter location in placeholder", () => {
  //   render(<Weather />)
  //   const placeholderText = screen.getByPlaceholderText("Enter Location")
  //   expect(placeholderText).toBeInTheDocument();
  //  });

  //  it('should render location in location div', async () => {
  //    render(<Weather />)
  //    const locationPlaceHolder = screen.getByPlaceholderText("Enter Location");
  //    fireEvent.change(locationPlaceHolder, { target: { value: "London" } });
   
  //    fireEvent.keyPress(locationPlaceHolder, { key: 'Enter', charCode: 13 });
  //    const locationDiv = screen.getByTestId("location");
  //    console.log(locationPlaceHolder)
  //    expect(locationDiv.textContent).toBeInTheDocument("London");
  //  })