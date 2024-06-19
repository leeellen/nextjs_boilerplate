import { useEffect, useState } from 'react';

export default function useToggle(initValue = false) {
    const [visible, setVisible] = useState(initValue);

    useEffect(
        () => () => {
            setVisible(initValue);
        },
        [],
    );

    const handleVisible = () => setVisible(!visible);

    return [visible, handleVisible] as const;
}
