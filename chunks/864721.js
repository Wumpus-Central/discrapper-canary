"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(485845),
    o = n(179771),
    l = n(834730),
    u = n(285796),
    d = n(628284),
    c = n(534514),
    _ = n(444927),
    f = n(647053),
    E = n(985018),
    h = n(415122);
function p(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)("div", {
        className: h.z8,
        children: [
            i
                ? (0, r.jsx)(u.a, { size: "md", color: "currentColor", className: s()(h.Kk, h.RC) })
                : (0, r.jsx)(d.y, { size: "md", color: "currentColor", className: s()(h.Kk, h.sc) }),
            (0, r.jsxs)("div", {
                className: h.rv,
                children: [
                    (0, r.jsx)(l.E, { variant: "text-md/normal", color: i ? "text-muted" : void 0, children: t }),
                    null != n
                        ? (0, r.jsx)(l.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function m(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: i,
            integrationType: l,
            errors: u,
            isTrustedName: d = !1,
            noDivider: m = !1,
        } = e,
        g = (0, _.A)(() => f.O_[Math.floor(Math.random() * f.O_.length)]);
    if (0 === n.length) return null;
    let A = g(),
        I = d ? E.t.PZpY9c : E.t["1Hz+Sl"],
        T = l === a.b.USER_INSTALL && i.includes(o.F.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)("div", {
        className: s()(h.Wu, m ? h.bc : void 0),
        children: [
            (0, r.jsx)(c.D, {
                variant: "heading-sm/normal",
                className: h.a9,
                children: E.intl.format(I, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, f.rY)(e, n).map((t, n) =>
                        (0, r.jsx)(p, { text: t, error: 0 === n ? u?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            T && (0, r.jsx)(p, { text: E.intl.string(E.t.Ls2XRq) }),
            (0, r.jsx)(p, { text: A, isFake: !0 }),
        ],
    });
}
