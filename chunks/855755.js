var c = t(582128);
t.d(
    u,
    {},
    {
        A: function (e) {
            let u = c.useRef(null),
                t = c.useRef(e);
            return (
                c.useEffect(() => {
                    if (e && !t.current) {
                        let e = document.activeElement;
                        (null == e || e === document.body) && u.current?.focus();
                    }
                    t.current = e;
                }, [e]),
                u
            );
        },
    },
);
