n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(303727),
    a = n(985018),
    s = n(610688);
function o(e) {
    let { Icon: t, header: n, tip: o, disableStars: c } = e;
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [
            (0, r.jsxs)("div", {
                className: s.zc,
                children: [
                    (0, r.jsx)(t, {
                        color: "currentColor",
                        size: "custom",
                        className: s.Kk,
                        width: 36,
                        height: 36,
                    }),
                    c ? null : (0, r.jsx)(i.A, { className: s.uf }),
                ],
            }),
            (0, r.jsx)(l.Heading, {
                className: s.wx,
                variant: "heading-xl/semibold",
                children: n,
            }),
            (0, r.jsxs)(l.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    c
                        ? null
                        : (0, r.jsxs)(l.Text, {
                              tag: "span",
                              className: s.PP,
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
