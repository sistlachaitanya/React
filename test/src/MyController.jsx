import { useState } from "react";

export default function MyController(props) {

    const [value, setValue] = useState("");

    const field = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    };

    return props.render({
        field
    });
}
