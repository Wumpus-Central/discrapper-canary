n.d(t, { Z: () => f }), n(314940);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(278074),
    s = n(692547),
    l = n(481060),
    c = n(551556),
    u = n(631936);
let d = () =>
        (0, r.jsx)(c.Z, {
            width: 13,
            height: 13,
            backgroundColor: s.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
        }),
    m = () =>
        (0, r.jsx)(l.k$p, {
            size: "custom",
            width: 13,
            height: 13,
            color: s.Z.colors.TEXT_DANGER.css,
        }),
    g = () =>
        (0, r.jsx)(l.k$p, {
            size: "custom",
            width: 13,
            height: 13,
            color: s.Z.colors.TEXT_FEEDBACK_WARNING.css,
        });
function f(e) {
    let t = (0, o.EQ)(e.type)
        .with("info", () => (0, r.jsx)(g, {}))
        .with("error", () => (0, r.jsx)(m, {}))
        .with("success", () => (0, r.jsx)(d, {}))
        .otherwise(() => null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                className: a()(u.formMessage, {
                    [u.formMessageNegative]: "error" === e.type,
                    [u.formMessagePositive]: "success" === e.type,
                }),
                children: e.children,
            }),
        ],
    });
}
