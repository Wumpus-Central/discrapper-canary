var l = n(477900),
    i = n(503698),
    r = n.n(i),
    u = n(805251),
    a = n(834730),
    o = n(174947),
    s = n(453310);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { countdown: t, variant: n, className: i, id: f } = e,
                d = (0, o.Fu)(t, "sidebar" === n ? "compact" : "expanded");
            return "profile" === n
                ? (0, l.jsx)("span", {
                      id: f,
                      className: r()(s.Pf, s.ME, i),
                      children: (0, l.jsx)(u.E, { type: { text: d }, variant: "inverted" }),
                  })
                : (0, l.jsx)(a.E, {
                      id: f,
                      variant: "footnote/semibold",
                      color: "text-invert",
                      tag: "span",
                      lineClamp: 1,
                      className: r()(s.Pf, s.pz, i),
                      children: d,
                  });
        },
    },
);
