var i = n(477900),
    r = n(582128),
    a = n(855986),
    s = n(652896),
    l = n(310685),
    o = n(76795),
    d = n(210608),
    c = n(712577),
    u = n(34387);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { streamKey: t, paused: n, ..._ } = e,
                E = (0, a.bG)([d.A], () => d.A.isStreamDrawingAllowed(t), [t]),
                A = (0, l.TC)((0, s.Iy)(t).channelId, "BufferedStreamVideo"),
                [f, h] = r.useState(null),
                I = r.useRef(null),
                p = r.useCallback((e) => {
                    I.current = e;
                }, []);
            return (0, i.jsxs)("div", {
                className: u.i,
                children: [
                    (0, i.jsx)(c.A, { ..._, paused: n, onResize: h, onVideoElement: p }),
                    A && E ? (0, i.jsx)(o.A, { streamKey: t, dimensions: f, visible: !n, videoRef: I }) : null,
                ],
            });
        },
    },
);
