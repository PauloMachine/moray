import * as React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "../../../src/components/ui";

const mockData = [
  { label: "Jd. Colinas", value: 1 },
  { label: "Jd. das Industrias", value: 2 },
  { label: "Jd. Alvorada", value: 3 },
  { label: "Pq. Res. Aquarius", value: 4 },
];

const renderSearchInput = (onSelect = vi.fn()) =>
  render(
    <SearchInput
      data={mockData}
      onSelect={onSelect}
      placeholder="Search for a neighborhood"
    />
  );

describe("SearchInput Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // Reset mocks before each test
  });

  it("renders the input field correctly", () => {
    renderSearchInput();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("displays filtered results when typing", async () => {
    renderSearchInput();
    const input = screen.getByTestId("search-input");

    await userEvent.type(input, "Jd.");

    await waitFor(() => {
      const options = screen.getAllByRole("listitem");
      expect(options.length).toBe(3);
    });
  });

  it("calls onSelect when an item is selected", async () => {
    const onSelectMock = vi.fn();
    renderSearchInput(onSelectMock);

    const input = screen.getByTestId("search-input") as HTMLInputElement;
    await userEvent.type(input, "Jd. Colinas");

    const option = await screen.findByText("Jd. Colinas");
    await userEvent.click(option);

    expect(onSelectMock).toHaveBeenCalledWith(1);
    expect(input.value).toBe("");
  });

  it("clears input when the clear button is clicked", async () => {
    renderSearchInput();

    const input = screen.getByTestId("search-input") as HTMLInputElement;
    await userEvent.type(input, "Jd. Colinas");

    const clearButton = screen.getByTestId("search-input-on-clear");
    await userEvent.click(clearButton);

    expect(input.value).toBe("");
  });

  it("hides the list after an item is selected", async () => {
    renderSearchInput();
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    await userEvent.type(input, "Jd. Colinas");

    const option = await screen.findByText("Jd. Colinas");
    await userEvent.click(option);

    await waitFor(() => {
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });
});
