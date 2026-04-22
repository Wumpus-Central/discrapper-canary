"use strict";
s.d(t, { e: () => u }), s(321073);
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(834730),
    i = s(140735),
    o = s(496431),
    c = s(985018),
    d = s(467513);
let u = (e) => {
    let t,
        s,
        { endDate: l, size: u = "md", className: g, showSeconds: h = !1 } = e,
        { days: _, hours: m, minutes: p, seconds: f } = (0, o.A)(l),
        E = ((s = [(t = (e) => `${e.toString().padStart(2, "0")}`)(_), t(m), t(p)]), h && s.push(t(f)), s.join(":"));
    return (0, n.jsxs)("div", {
        className: r()(d.kL, g),
        role: "timer",
        children: [
            E.split("").map((e, t) =>
                ":" === e
                    ? (0, n.jsx)(
                          a.E,
                          {
                              color: "none",
                              variant: "md" === u ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: d.eC,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, n.jsx)(
                          a.E,
                          {
                              color: "always-white",
                              variant: "md" === u ? "heading-md/bold" : "heading-xl/bold",
                              className: d.ai,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, n.jsx)(i.A, { children: c.intl.format(c.t.j6IyVe, { days: _, hours: m, minutes: p }) }),
        ],
    });
};
