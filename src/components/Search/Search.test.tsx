import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Search from "../Search";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

describe("Search component", () => {
    test("Input changes", () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByPlaceholderText(
            "Find a Pokemon"
        ) as HTMLInputElement;

        fireEvent.change(input, { target: { value: "pikachu" } });
        expect(input.value).toBe("pikachu");
    });

    test("Submit search", () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const input = screen.getByPlaceholderText(
            "Find a Pokemon"
        ) as HTMLInputElement;
        const button = screen.getByText("Search");

        fireEvent.change(input, { target: { value: "pikachu" } });
        fireEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
});
