import { render, screen } from "@testing-library/react";
import {describe, expect} from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {

    it ("if don't have prop this is default Error", () => {
        render(<ErrorMessage />);
        const element = screen.getByTestId("error");
        expect(element).toHaveTextContent("Error Occurred");
    })

    it ("if have prop this is default color", () => {
        const message = "A random message";
        render(<ErrorMessage message={message} />)
        const element = screen.getByTestId("error");
        expect(element).toHaveStyle({
            "backgroundColor": "rgb(255, 0, 0)"
        })
    })

    it ("this props inner message writed ?", () => {
        const message = "props inner message ";
        render(<ErrorMessage message={message} />)
        expect(element).toHaveTextContent(message);
    })

    it ("this props inner color writed ?", () => {
        const color = "props inner message ";
        render(<ErrorMessage color={color} />)
        const element = screen.getByTestId("error");
        expect(element).toHaveStyle({
            "backgroundColor": "green"
        })
    })

    it ("this props inner message and color writed ?", () => {
        const color = "green";
        const message = "props inner message ";
        render(<ErrorMessage color={color} message={message} />)

        const element = screen.getByTestId("error");
        expect(element).toHaveStyle({
            "backgroundColor": "rgb(255, 0, 0)"
        })
        expect(element).toHaveTextContent(message);
    })
})

