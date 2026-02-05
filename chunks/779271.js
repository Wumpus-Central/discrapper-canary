n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(402216),
    d = n(667992),
    c = n(920660);
let u = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: s,
        collapsed: u,
        speakers: h,
        channel: A,
        isStreamLive: g,
    } = e;
    return (0, i.jsxs)(r.DUT, {
        onClick: l,
        className: a()(c.kL, s),
        children: [
            null == h
                ? (0, i.jsx)(r.nFg, { size: "custom", color: "currentColor", width: 20, height: 20, className: c.Vo })
                : (0, i.jsx)(r.cNw, { size: "custom", color: "currentColor", width: 20, height: 20, className: c.Vo }),
            (0, i.jsxs)(r.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: c.Qq,
                children: [t, " — ", n],
            }),
            u &&
                null != A &&
                null != h &&
                h.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.A, { channel: A, speakers: h }), g && (0, i.jsx)(o.Ay, {})],
                }),
            (0, i.jsx)(r.abt, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(c.mw, { [c.VU]: u }),
            }),
        ],
    });
});
