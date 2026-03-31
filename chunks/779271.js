n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(402216),
    c = n(667992),
    d = n(876542);
let u = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: s,
        collapsed: u,
        speakers: h,
        channel: A,
        isStreamLive: _,
    } = e;
    return (0, i.jsxs)(r.DUT, {
        onClick: l,
        className: a()(d.kL, s),
        children: [
            null == h
                ? (0, i.jsx)(r.nFg, { size: "custom", color: "currentColor", width: 20, height: 20, className: d.Vo })
                : (0, i.jsx)(r.cNw, { size: "custom", color: "currentColor", width: 20, height: 20, className: d.Vo }),
            (0, i.jsxs)(r.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: d.Qq,
                children: [t, " — ", n],
            }),
            u &&
                null != A &&
                null != h &&
                h.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.A, { channel: A, speakers: h }), _ && (0, i.jsx)(o.Ay, {})],
                }),
            (0, i.jsx)(r.abt, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(d.mw, { [d.VU]: u }),
            }),
        ],
    });
});
