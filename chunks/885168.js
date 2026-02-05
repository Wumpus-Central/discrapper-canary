i.d(t, { A: () => g }), i(801541);
var n = i(627968);
i(64700);
var s = i(503698),
    a = i.n(s),
    r = i(889137),
    l = i(827734),
    o = i(397927),
    d = i(820193),
    u = i(299043);
let c = () => (0, n.jsx)(d.A, { width: 13, height: 13, backgroundColor: l.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
    m = () =>
        (0, n.jsx)(o.aXh, { size: "custom", width: 13, height: 13, color: l.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
    E = () => (0, n.jsx)(o.aXh, { size: "custom", width: 13, height: 13, color: l.A.colors.TEXT_FEEDBACK_WARNING.css });
function g(e) {
    let t = (0, r.YW)(e.type)
        .with("info", () => (0, n.jsx)(E, {}))
        .with("error", () => (0, n.jsx)(m, {}))
        .with("success", () => (0, n.jsx)(c, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                className: a()(u.u1, { [u.JK]: "error" === e.type, [u.jn]: "success" === e.type }),
                children: e.children,
            }),
        ],
    });
}
