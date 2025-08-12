n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(388905),
    a = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    h = n(661753),
    p = n(881488);
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)("li", {
        className: h.listItem,
        children: (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t,
        }),
    });
}
function m(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Ee, {
                src: n(26230),
                className: l()(p.marginBottom20, p.marginTop8),
            }),
            (0, r.jsx)(s.Dx, {
                className: p.marginBottom8,
                children: d.intl.string(d.t["8UcxIy"]),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: d.intl.string(d.t.O37hMj),
            }),
            (0, r.jsxs)(s.gO, {
                className: l()(p.marginBottom20, p.marginTop20),
                children: [
                    (0, r.jsx)(o.Text, { variant: "text-sm/normal" }),
                    (0, r.jsxs)("ul", {
                        className: h.listContainer,
                        children: [
                            (0, r.jsx)(f, { children: d.intl.string(d.t.Gj1Zr6) }),
                            (0, r.jsx)(a.Z, {}),
                            (0, r.jsx)(f, { children: d.intl.string(d.t["8C6t3N"]) }),
                            (0, r.jsx)(a.Z, {}),
                            (0, r.jsx)(f, { children: d.intl.string(d.t.mToZMD) }),
                            (0, r.jsx)(a.Z, {}),
                            (0, r.jsx)(f, { children: d.intl.string(d.t.TPEvkZ) }),
                            (0, r.jsx)(a.Z, {}),
                            (0, r.jsx)(f, { children: d.intl.string(d.t.H8Y1Li) }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(s.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: d.intl.string(d.t.GgCRqa),
                    }),
                    (0, r.jsx)(s.zx, {
                        color: s.zx.Colors.PRIMARY,
                        onClick: () => i(u.Z5c.LOGIN, { source: "account_revert" }),
                        children: d.intl.string(d.t["B/yHcX"]),
                    }),
                ],
            }),
        ],
    });
}
