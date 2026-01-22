l.d(t, { e: () => u }), l(747238);
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(397927),
    i = l(496431),
    o = l(985018),
    c = l(487604);
let u = (e) => {
    let t,
        { endDate: l, size: r = "md", className: u } = e,
        { days: d, hours: f, minutes: b } = (0, i.A)(l),
        g = [(t = (e) => "".concat(e.toString().padStart(2, "0")))(d), t(f), t(b)].join(":");
    return (0, n.jsxs)("div", {
        className: s()(c.kL, u),
        role: "timer",
        children: [
            g.split("").map((e, t) =>
                ":" === e
                    ? (0, n.jsx)(
                          a.Text,
                          {
                              color: "none",
                              variant: "md" === r ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: c.eC,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, n.jsx)(
                          a.Text,
                          {
                              color: "always-white",
                              variant: "md" === r ? "heading-md/bold" : "heading-xl/bold",
                              className: c.ai,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, n.jsx)(a.AC4, {
                children: o.intl.format(o.t.j6IyVe, {
                    days: d,
                    hours: f,
                    minutes: b,
                }),
            }),
        ],
    });
};
