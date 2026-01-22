r.d(t, { A: () => f }), r(801541);
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(889137),
    o = r(827734),
    l = r(397927),
    c = r(820193),
    u = r(299043);
let d = () =>
        (0, n.jsx)(c.A, {
            width: 13,
            height: 13,
            backgroundColor: o.A.colors.TEXT_FEEDBACK_POSITIVE.css,
        }),
    m = () =>
        (0, n.jsx)(l.aXh, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.A.colors.TEXT_FEEDBACK_CRITICAL.css,
        }),
    g = () =>
        (0, n.jsx)(l.aXh, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.A.colors.TEXT_FEEDBACK_WARNING.css,
        });
function f(e) {
    let t = (0, a.YW)(e.type)
        .with("info", () => (0, n.jsx)(g, {}))
        .with("error", () => (0, n.jsx)(m, {}))
        .with("success", () => (0, n.jsx)(d, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(l.Text, {
                variant: "text-sm/medium",
                className: s()(u.u1, {
                    [u.JK]: "error" === e.type,
                    [u.jn]: "success" === e.type,
                }),
                children: e.children,
            }),
        ],
    });
}
