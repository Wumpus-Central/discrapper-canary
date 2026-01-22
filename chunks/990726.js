n.d(i, {
    default: () => e,
});
var r = n(627968);
n(64700);
var a = n(732955),
    s = n(172710),
    o = n(985018);

function e(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, r.jsx)(a.aFV, {
        transitionState: i,
        onClose: n,
        size: "sm",
        title: o.intl.formatToMarkdownString(o.t.DQsSGr, {}),
        subtitle: o.intl.string(o.t.xGMwi9),
        actions: [
            {
                variant: "secondary",
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: o.intl.string(o.t.n8U5jd),
                onClick: function () {
                    (0, s.Pt)(), n();
                },
            },
        ],
    });
}
