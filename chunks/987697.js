var i = n(477900),
    r = n(582128),
    a = n(310685),
    s = n(76795),
    l = n(712577),
    o = n(34387);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { streamKey: t, paused: n, ...d } = e,
                c = (0, a.T)("BufferedStreamVideo"),
                [u, _] = r.useState(null),
                E = r.useRef(null),
                A = r.useCallback((e) => {
                    E.current = e;
                }, []);
            return (0, i.jsxs)("div", {
                className: o.i,
                children: [
                    (0, i.jsx)(l.A, { ...d, paused: n, onResize: _, onVideoElement: A }),
                    c ? (0, i.jsx)(s.A, { streamKey: t, dimensions: u, visible: !n, videoRef: E }) : null,
                ],
            });
        },
    },
);
