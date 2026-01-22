n.d(r, {
    default: () => s,
});
var i = n(627968);
n(64700);
var e = n(397927),
    a = n(985018);

function s(t) {
    let { onClose: r, transitionState: n, body: s } = t;
    return (0, i.jsxs)(e.EOs, {
        transitionState: n,
        parentComponent: "ProblemReported",
        children: [
            (0, i.jsx)(e.rQ0, {
                separator: !1,
                children: (0, i.jsx)(e.Heading, {
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.KTjjrG),
                }),
            }),
            (0, i.jsx)(e.$mQ, {
                children:
                    "string" == typeof s
                        ? (0, i.jsx)(e.Text, {
                              variant: "text-md/normal",
                              children: s,
                          })
                        : s,
            }),
            (0, i.jsx)(e.jlY, {
                children: (0, i.jsx)(e.Button, {
                    variant: "primary",
                    text: a.intl.string(a.t.i4jeWR),
                    onClick: r,
                }),
            }),
        ],
    });
}
