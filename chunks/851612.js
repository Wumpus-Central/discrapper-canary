l.d(t, { MO: () => h, Zj: () => f, eU: () => x });
var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i),
    s = l(289873),
    r = l(738188),
    d = l(834730),
    c = l(331322),
    o = l(297264),
    u = l(375708),
    m = l(448492);
function x() {
    return (0, n.jsx)("div", {
        className: m.w,
        children: (0, n.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE, "aria-label": u.intl.string(u.t.ZTNur7) }),
    });
}
function h() {
    return (0, n.jsxs)("div", {
        className: m.w,
        role: "alert",
        children: [
            (0, n.jsx)(r.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", children: u.intl.string(u.t.F8FvUy) }),
        ],
    });
}
function f(e) {
    let { className: t, title: l, body: i, action: s } = e;
    return (0, n.jsxs)(c.B, {
        className: a()(m.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, n.jsxs)(c.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            s,
        ],
    });
}
