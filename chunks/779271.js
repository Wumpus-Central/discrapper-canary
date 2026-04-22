n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(939249),
    o = n(177953),
    c = n(831544),
    d = n(834730),
    u = n(847374),
    _ = n(402216),
    A = n(667992),
    p = n(69198);
let h = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: a,
        collapsed: h,
        speakers: g,
        channel: m,
        isStreamLive: x,
    } = e;
    return (0, i.jsxs)(r.D, {
        onClick: l,
        className: s()(p.kL, a),
        children: [
            null == g
                ? (0, i.jsx)(o.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: p.Vo })
                : (0, i.jsx)(c.c, { size: "custom", color: "currentColor", width: 20, height: 20, className: p.Vo }),
            (0, i.jsxs)(d.E, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: p.Qq,
                children: [t, " — ", n],
            }),
            h &&
                null != m &&
                null != g &&
                g.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(A.A, { channel: m, speakers: g }), x && (0, i.jsx)(_.Ay, {})],
                }),
            (0, i.jsx)(u.a, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: s()(p.mw, { [p.VU]: h }),
            }),
        ],
    });
});
