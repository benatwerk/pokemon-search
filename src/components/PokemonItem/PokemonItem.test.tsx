import { useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import PokemonItem from "../PokemonItem";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

test("Renders loading screen", () => {
    (useSelector as jest.Mock).mockImplementation(() => ({
        status: "loading",
    }));

    render(<PokemonItem />);

    expect(screen.getByText("PokéLoading...")).toBeInTheDocument();
});
