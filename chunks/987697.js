var i = n(477900),
    r = n(582128),
    a = n(855986),
    s = n(310685),
    l = n(76795),
    o = n(210608),
    d = n(712577),
    c = n(34387);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { streamKey: t, paused: n, ...u } = e,
                _ = (0, a.bG)([o.A], () => o.A.isStreamDrawingAllowed(t), [t]),
                E = (0, s.T)("BufferedStreamVideo"),
                [A, f] = r.useState(null),
                h = r.useRef(null),
                I = r.useCallback((e) => {
                    h.current = e;
                }, []);
            return (0, i.jsxs)("div", {
                className: c.i,
                children: [
                    (0, i.jsx)(d.A, { ...u, paused: n, onResize: f, onVideoElement: I }),
                    E && _ ? (0, i.jsx)(l.A, { streamKey: t, dimensions: A, visible: !n, videoRef: h }) : null,
                ],
            });
        },
    },
);
