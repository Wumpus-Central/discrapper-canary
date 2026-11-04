var i = n(582128);
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t = i.useRef(e);
            i.useEffect(() => t.current(), []);
        },
        l0: function (e) {
            let t = i.useRef(e);
            (i.useEffect(() => {
                t.current = e;
            }),
                i.useEffect(
                    () => () => {
                        t.current();
                    },
                    [],
                ));
        },
        u5: function (e) {
            let t = i.useRef(e);
            i.useLayoutEffect(() => t.current(), []);
        },
    },
);
