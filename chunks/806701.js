n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    a = n(388905),
    o = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    h = n(710509),
    g = n(197571);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)("li", {
        className: h.listItem,
        children: (0, r.jsx)(l.Text, {
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
            (0, r.jsx)(a.Ee, {
                src: n(26230),
                className: s()(g.marginBottom20, g.marginTop8),
            }),
            (0, r.jsx)(a.Dx, {
                className: g.marginBottom8,
                children: d.intl.string(d.t["8UcxI6"]),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: d.intl.string(d.t.O37hMl),
            }),
            (0, r.jsxs)(a.gO, {
                className: s()(g.marginBottom20, g.marginTop20),
                children: [
                    (0, r.jsx)(l.Text, { variant: "text-sm/normal" }),
                    (0, r.jsxs)("ul", {
                        className: h.listContainer,
                        children: [
                            (0, r.jsx)(p, { children: d.intl.string(d.t.Gj1Zry) }),
                            (0, r.jsx)(o.Z, {}),
                            (0, r.jsx)(p, { children: d.intl.string(d.t["8C6t3B"]) }),
                            (0, r.jsx)(o.Z, {}),
                            (0, r.jsx)(p, { children: d.intl.string(d.t.mToZMA) }),
                            (0, r.jsx)(o.Z, {}),
                            (0, r.jsx)(p, { children: d.intl.string(d.t.TPEvkc) }),
                            (0, r.jsx)(o.Z, {}),
                            (0, r.jsx)(p, { children: d.intl.string(d.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(l.ButtonGroup, {
                direction: "vertical",
                fullWidth: !0,
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(l.Button, {
                        text: d.intl.string(d.t.GgCRqR),
                        onClick: () => t(c.n.PASSWORD),
                    }),
                    (0, r.jsx)(l.Button, {
                        text: d.intl.string(d.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(u.Z5c.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
