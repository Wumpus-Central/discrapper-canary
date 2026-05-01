"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    i = n(612185),
    s = n(894279),
    a = n(834730),
    r = n(272852),
    o = n(552283),
    c = n(702769);
function u(e) {
    let t,
        { component: n, required: u = !1 } = e,
        { resolveFieldValue: d, numberFormat: h, durationFormat: m } = (0, i.Q)();
    if (null == n)
        return u
            ? (0, l.jsxs)("div", {
                  children: [
                      (0, l.jsx)(o.A, { variant: "text-sm/medium", width: "8ch" }),
                      (0, l.jsx)(o.A, { variant: "text-xs/normal", width: "6ch" }),
                  ],
              })
            : null;
    let p = d(n.fields.value, [r.o.STRING, r.o.NUMBER]),
        f = d(n.fields.label, [r.o.STRING]),
        g = d(n.fields.icon, [r.o.MEDIA]);
    return (0, l.jsxs)("div", {
        children: [
            null ==
            (t = (() => {
                if (null == p) return null;
                if (p.type === r.o.STRING) return p.value;
                if (p.type === r.o.NUMBER) {
                    if (p.presentationType === s.P.NUMBER) return h.format(p.value);
                    if (p.presentationType === s.P.DURATION) {
                        var e;
                        let t, n;
                        return m.format(
                            ((n = Math.floor(
                                (t = Number.isFinite((e = p.value)) ? Math.max(0, Math.floor(e)) : 0) / 36e5,
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
                ? (0, l.jsx)(o.A, { variant: "text-sm/medium", width: "8ch" })
                : (0, l.jsxs)(a.E, {
                      variant: "text-sm/medium",
                      className: c.U,
                      children: [
                          t,
                          null != g &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      " ",
                                      (0, l.jsx)("img", {
                                          alt: "",
                                          src: g.media.url,
                                          width: 18,
                                          height: 18,
                                          className: c.K,
                                      }),
                                  ],
                              }),
                      ],
                  }),
            null != f
                ? (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: f.value })
                : (0, l.jsx)(o.A, { variant: "text-xs/normal", width: "6ch" }),
        ],
    });
}
var d = n(89832);
function h() {
    let { surfaceConfig: e } = (0, i.Q)();
    return (0, l.jsxs)("div", {
        className: d.w,
        children: [
            (0, l.jsx)(u, { component: e.components.stat_1, required: !0 }),
            (0, l.jsx)(u, { component: e.components.stat_2, required: !0 }),
            (0, l.jsx)(u, { component: e.components.stat_3, required: !0 }),
            (0, l.jsx)(u, { component: e.components.stat_4, required: !0 }),
            (0, l.jsx)(u, { component: e.components.stat_5, required: !0 }),
            (0, l.jsx)(u, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
