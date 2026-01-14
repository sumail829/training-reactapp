import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { describe, it, expect } from "vitest";
import React from "react";

describe("App", () => {
    it("renders the main heading", () => {
        // Basic test to verify the app renders without crashing
        // and contains expected text (adjust based on default Vite app content)
        render(<App />);
        // Just checking if something renders, modifying to be generic for default Vite app
        // Default Vite app usually has "Vite + React" text
        expect(screen.getByText(/Suman \+ Devops/i)).toBeInTheDocument();
    });
});
