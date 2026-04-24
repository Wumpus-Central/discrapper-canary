i.d(e, { e: () => c }), i(321073);
var l = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    o = i(834730),
    r = i(140735),
    u = i(496431),
    d = i(985018),
    s = i(467513);
let c = (t) => {
    let e,
        i,
        { endDate: n, size: c = "md", className: f, showSeconds: p = !1 } = t,
        { days: h, hours: m, minutes: g, seconds: _ } = (0, u.A)(n),
        E = ((i = [(e = (t) => `${t.toString().padStart(2, "0")}`)(h), e(m), e(g)]), p && i.push(e(_)), i.join(":"));
    return (0, l.jsxs)("div", {
        className: a()(s.kL, f),
        role: "timer",
        children: [
            E.split("").map((t, e) =>
                ":" === t
                    ? (0, l.jsx)(
                          o.E,
                          {
                              color: "none",
                              variant: "md" === c ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: s.eC,
                              "aria-hidden": !0,
                              tag: "div",
                              children: t,
                          },
                          e,
                      )
                    : (0, l.jsx)(
                          o.E,
                          {
                              color: "always-white",
                              variant: "md" === c ? "heading-md/bold" : "heading-xl/bold",
                              className: s.ai,
                              "aria-hidden": !0,
                              tag: "div",
                              children: t,
                          },
                          e,
                      ),
            ),
            (0, l.jsx)(r.A, { children: d.intl.format(d.t.j6IyVe, { days: h, hours: m, minutes: g }) }),
        ],
    });
};
