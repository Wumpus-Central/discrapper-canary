var l = n(477900),
    i = n(503698),
    r = n.n(i),
    u = n(805251),
    a = n(834730),
    s = n(174947),
    o = n(453310);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { countdown: t, variant: n, className: i, id: d } = e,
                f = (0, s.Fu)(t, "sidebar" === n ? "compact" : "expanded");
            return "profile" === n
                ? (0, l.jsx)("span", {
                      id: d,
                      className: r()(o.Pf, o.ME, i),
                      children: (0, l.jsx)(u.E, { type: { text: f }, variant: "inverted" }),
                  })
                : (0, l.jsx)(a.E, {
                      id: d,
                      variant: "footnote/semibold",
                      color: "text-invert",
                      tag: "span",
                      lineClamp: 1,
                      className: r()(o.Pf, o.pz, i),
                      children: f,
                  });
        },
    },
);
