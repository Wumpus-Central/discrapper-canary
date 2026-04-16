"use strict";
s.d(t, { e: () => d }), s(321073);
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(397927),
    i = s(496431),
    o = s(985018),
    c = s(467513);
let d = (e) => {
    let t,
        s,
        { endDate: l, size: d = "md", className: u, showSeconds: _ = !1 } = e,
        { days: g, hours: m, minutes: h, seconds: p } = (0, i.A)(l),
        f = ((s = [(t = (e) => `${e.toString().padStart(2, "0")}`)(g), t(m), t(h)]), _ && s.push(t(p)), s.join(":"));
    return (0, n.jsxs)("div", {
        className: r()(c.kL, u),
        role: "timer",
        children: [
            f
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, n.jsx)(
                              a.Text,
                              {
                                  color: "none",
                                  variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
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
                                  variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
                                  className: c.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, n.jsx)(a.AC4, { children: o.intl.format(o.t.j6IyVe, { days: g, hours: m, minutes: h }) }),
        ],
    });
};
