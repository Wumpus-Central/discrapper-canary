"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(485845),
    o = n(179771),
    l = n(834730),
    _ = n(285796),
    d = n(628284),
    u = n(534514),
    c = n(444927),
    E = n(647053),
    h = n(985018),
    m = n(415122);
function f(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)("div", {
        className: m.z8,
        children: [
            r
                ? (0, i.jsx)(_.a, { size: "md", color: "currentColor", className: s()(m.Kk, m.RC) })
                : (0, i.jsx)(d.y, { size: "md", color: "currentColor", className: s()(m.Kk, m.sc) }),
            (0, i.jsxs)("div", {
                className: m.rv,
                children: [
                    (0, i.jsx)(l.E, { variant: "text-md/normal", color: r ? "text-muted" : void 0, children: t }),
                    null != n
                        ? (0, i.jsx)(l.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function g(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: l,
            errors: _,
            isTrustedName: d = !1,
            noDivider: g = !1,
        } = e,
        A = (0, c.A)(() => E.O_[Math.floor(Math.random() * E.O_.length)]);
    if (0 === n.length) return null;
    let I = A(),
        p = d ? h.t.PZpY9c : h.t["1Hz+Sl"],
        T = l === a.b.USER_INSTALL && r.includes(o.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: s()(m.Wu, g ? m.bc : void 0),
        children: [
            (0, i.jsx)(u.D, {
                variant: "heading-sm/normal",
                className: m.a9,
                children: h.intl.format(p, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, E.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(f, { text: t, error: 0 === n ? _?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            T && (0, i.jsx)(f, { text: h.intl.string(h.t.Ls2XRq) }),
            (0, i.jsx)(f, { text: I, isFake: !0 }),
        ],
    });
}
