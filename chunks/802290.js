var n = l(477900),
    i = l(503698),
    a = l.n(i),
    r = l(805251),
    s = l(834730),
    u = l(792996),
    o = l(453310);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { countdown: t, variant: l, className: i, id: d } = e,
                c =
                    "sidebar" === l
                        ? "hours" === t.unit
                            ? u.intl.formatToPlainString(u.t.WJieZ2, { hours: t.hours })
                            : u.intl.formatToPlainString(u.t.DkxLY0, { days: t.days })
                        : "hours" === t.unit
                          ? u.intl.string(u.t.Bc13HF)
                          : u.intl.formatToPlainString(u.t.Io7ozn, { days: t.days });
            return "profile" === l
                ? (0, n.jsx)("span", {
                      id: d,
                      className: a()(o.Pf, o.ME, i),
                      children: (0, n.jsx)(r.E, { type: { text: c }, variant: "inverted" }),
                  })
                : (0, n.jsx)(s.E, {
                      id: d,
                      variant: "footnote/semibold",
                      color: "text-invert",
                      tag: "span",
                      lineClamp: 1,
                      className: a()(o.Pf, o.pz, i),
                      children: c,
                  });
        },
    },
);
