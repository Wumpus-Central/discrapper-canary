n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(402216),
    c = n(667992),
    u = n(920660);
let d = l.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: i,
        collapsed: d,
        speakers: f,
        channel: p,
        isStreamLive: h,
    } = e;
    return (0, r.jsxs)(s.DUT, {
        onClick: l,
        className: a()(u.kL, i),
        children: [
            null == f
                ? (0, r.jsx)(s.nFg, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.Vo,
                  })
                : (0, r.jsx)(s.cNw, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.Vo,
                  }),
            (0, r.jsxs)(s.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: u.Qq,
                children: [t, " — ", n],
            }),
            d &&
                null != p &&
                null != f &&
                f.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.A, {
                            channel: p,
                            speakers: f,
                        }),
                        h && (0, r.jsx)(o.Ay, {}),
                    ],
                }),
            (0, r.jsx)(s.abt, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(u.mw, {
                    [u.VU]: d,
                }),
            }),
        ],
    });
});
