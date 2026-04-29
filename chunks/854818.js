i.d(e, { e: () => c }), i(321073);
var l = i(627968);
i(64700);
var n = i(503698),
    r = i.n(n),
    a = i(834730),
    u = i(140735),
    s = i(496431),
    o = i(985018),
    d = i(467513);
let c = (t) => {
    let e,
        i,
        { endDate: n, size: c = "md", className: h, showSeconds: p = !1 } = t,
        { days: m, hours: f, minutes: g, seconds: A } = (0, s.A)(n),
        v = ((i = [(e = (t) => `${t.toString().padStart(2, "0")}`)(m), e(f), e(g)]), p && i.push(e(A)), i.join(":"));
    return (0, l.jsxs)("div", {
        className: r()(d.kL, h),
        role: "timer",
        children: [
            v
                .split("")
                .map((t, e) =>
                    ":" === t
                        ? (0, l.jsx)(
                              a.E,
                              {
                                  color: "none",
                                  variant: "md" === c ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: d.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: t,
                              },
                              e,
                          )
                        : (0, l.jsx)(
                              a.E,
                              {
                                  color: "always-white",
                                  variant: "md" === c ? "heading-md/bold" : "heading-xl/bold",
                                  className: d.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: t,
                              },
                              e,
                          ),
                ),
            (0, l.jsx)(u.A, { children: o.intl.format(o.t.j6IyVe, { days: m, hours: f, minutes: g }) }),
        ],
    });
};
