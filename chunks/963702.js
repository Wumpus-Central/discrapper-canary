n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(303727),
    a = n(985018),
    r = n(384573);
function o(e) {
    let { Icon: t, header: n, tip: o, disableStars: c } = e;
    return (0, i.jsxs)("div", {
        className: r.kL,
        children: [
            (0, i.jsxs)("div", {
                className: r.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: r.Kk, width: 36, height: 36 }),
                    c ? null : (0, i.jsx)(s.A, { className: r.uf }),
                ],
            }),
            (0, i.jsx)(l.Heading, { className: r.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(l.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    c
                        ? null
                        : (0, i.jsxs)(l.Text, {
                              tag: "span",
                              className: r.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [a.intl.string(a.t["8tvIiN"]), ":", " "],
                          }),
                    o,
                ],
            }),
        ],
    });
}
