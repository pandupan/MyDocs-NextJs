import AboutPage from "@/pages/about";
import { render,screen } from "@testing-library/react";

describe("About Page", () => {
  it('render about page', () => {
    const page = render(<AboutPage />);
    // console.log(screen.getByTestId("title").textContent);
    expect(screen.getByTestId("title").textContent).toBe("About Page");
    expect(page).toMatchSnapshot();
  });
});