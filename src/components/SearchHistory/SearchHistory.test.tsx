import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import searchHistoryReducer from "../../reducers/searchHistorySlice";
import SearchHistory from "../SearchHistory";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

describe("SearchHistory component", () => {
    test("Search history remders", () => {
        const mockState = {
            searchHistory: {
                history: ["pikachu", "snorlax"],
            },
        };

        const mockStore = configureStore({
            reducer: { searchHistory: searchHistoryReducer },
            preloadedState: mockState,
        });

        render(
            <Provider store={mockStore}>
                <SearchHistory />
            </Provider>
        );

        expect(screen.getByText("pikachu")).toBeInTheDocument();
        expect(screen.getByText("snorlax")).toBeInTheDocument();
    });

    test("Click history item", () => {
        const mockState = {
            searchHistory: {
                history: ["pikachu"],
            },
        };

        const mockStore = configureStore({
            reducer: { searchHistory: searchHistoryReducer },
            preloadedState: mockState,
        });

        render(
            <Provider store={mockStore}>
                <SearchHistory />
            </Provider>
        );

        fireEvent.click(screen.getByText("pikachu"));
        expect(mockDispatch).toHaveBeenCalled();
    });
});
