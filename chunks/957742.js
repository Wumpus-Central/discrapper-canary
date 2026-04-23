"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(612185),
    s = n(894279),
    a = n(834730),
    o = n(272852),
    l = n(552283),
    d = n(702769);
function _(e) {
    let t,
        { component: n, required: _ = !1 } = e,
        { resolveFieldValue: u, numberFormat: c, durationFormat: E } = (0, r.Q)();
    if (null == n)
        return _
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(l.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, i.jsx)(l.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let h = u(n.fields.value, [o.o.STRING, o.o.NUMBER]),
        m = u(n.fields.label, [o.o.STRING]),
        f = u(n.fields.icon, [o.o.MEDIA]);
    return (0, i.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == h) return null;
                if (h.type === o.o.STRING) return h.value;
                if (h.type === o.o.NUMBER) {
                    if (h.presentationType === s.P.NUMBER) return c.format(h.value);
                    if (h.presentationType === s.P.DURATION) {
                        var e;
                        let t, n;
                        return E.format(
                            ((n = Math.floor(
                                (t = Number.isFinite((e = h.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
                            )),
                            {
                                hours: n,
                                minutes: Math.floor(t / 6e4) % 60,
                                seconds: Math.floor(t / 1e3) % 60,
                                milliseconds: t % 1e3,
                            }),
                        );
                    }
                }
                return null;
            })())
                ? (0, i.jsx)(l.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, i.jsxs)(a.E, {
                      variant: "text-sm/medium",
                      className: d.U,
                      children: [
                          t,
                          null != f &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      " ",
                                      (0, i.jsx)("img", {
                                          alt: "",
                                          src: f.media.url,
                                          width: 18,
                                          height: 18,
                                          className: d.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != m
                ? (0, i.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: m.value })
                : (0, i.jsx)(l.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var u = n(89832);
function c() {
    let { surfaceConfig: e } = (0, r.Q)();
    return (0, i.jsxs)("div", {
        className: u.w,
        children: [
            (0, i.jsx)(_, { component: e.components.stat_1, required: !0 }),
            (0, i.jsx)(_, { component: e.components.stat_2, required: !0 }),
            (0, i.jsx)(_, { component: e.components.stat_3, required: !0 }),
            (0, i.jsx)(_, { component: e.components.stat_4, required: !0 }),
            (0, i.jsx)(_, { component: e.components.stat_5, required: !0 }),
            (0, i.jsx)(_, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
