"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(485845),
    o = n(179771),
    l = n(571356),
    u = n(397927),
    c = n(444927),
    d = n(647053),
    _ = n(985018),
    f = n(406421);
function p(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)("div", {
        className: f.z8,
        children: [
            i
                ? (0, r.jsx)(u.aXh, { size: "md", color: "currentColor", className: a()(f.Kk, f.RC) })
                : (0, r.jsx)(u.yr3, { size: "md", color: "currentColor", className: a()(f.Kk, f.sc) }),
            (0, r.jsxs)("div", {
                className: f.rv,
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
function h(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: i,
            integrationType: l,
            errors: h,
            isTrustedName: m = !1,
            noDivider: g = !1,
        } = e,
        E = (0, c.A)(() => d.O_[Math.floor(Math.random() * d.O_.length)]);
    if (0 === n.length) return null;
    let A = E(),
        I = m ? _.t.PZpY9c : _.t["1Hz+Sl"],
        T = l === s.b.USER_INSTALL && i.includes(o.F.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)("div", {
        className: a()(f.Wu, g ? f.bc : void 0),
        children: [
            (0, r.jsx)(u.Heading, {
                variant: "heading-sm/normal",
                className: f.a9,
                children: _.intl.format(I, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, d.rY)(e, n).map((t, n) =>
                        (0, r.jsx)(p, { text: t, error: 0 === n ? h?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            T && (0, r.jsx)(p, { text: _.intl.string(_.t.Ls2XRq) }),
            (0, r.jsx)(p, { text: A, isFake: !0 }),
        ],
    });
}
