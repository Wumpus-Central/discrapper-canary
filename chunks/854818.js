n.d(t, {
    e: () => u,
}),
    n(321073),
    n(747238);
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    i = n(496431),
    o = n(985018),
    c = n(487604);
let u = (e) => {
    let t,
        n,
        { endDate: l, size: u = "md", className: d, showSeconds: g = !1 } = e,
        { days: f, hours: m, minutes: p, seconds: _ } = (0, i.A)(l),
        b =
            ((n = [(t = (e) => "".concat(e.toString().padStart(2, "0")))(f), t(m), t(p)]),
            g && n.push(t(_)),
            n.join(":"));
    return (0, r.jsxs)("div", {
        className: s()(c.kL, d),
        role: "timer",
        children: [
            b.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          a.Text,
                          {
                              color: "none",
                              variant: "md" === u ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: c.eC,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, r.jsx)(
                          a.Text,
                          {
                              color: "always-white",
                              variant: "md" === u ? "heading-md/bold" : "heading-xl/bold",
                              className: c.ai,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(a.AC4, {
                children: o.intl.format(o.t.j6IyVe, {
                    days: f,
                    hours: m,
                    minutes: p,
                }),
            }),
        ],
    });
};
