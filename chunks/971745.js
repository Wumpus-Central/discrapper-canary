var s = r(582128);
r.d(
    p,
    {},
    {
        A: () => {
            let [e, p] = (0, s.useState)(null);
            return (
                (0, s.useEffect)(() => {
                    window?.EyeDropper != null && p(new window.EyeDropper());
                }, []),
                e
            );
        },
    },
);
