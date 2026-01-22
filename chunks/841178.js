n.d(i, { default: () => e });
var r = n(54381);
n(473749);
var s = n(159691),
    a = n(952164),
    o = n(388032);
function e(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, r.jsx)(s.u_l, {
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
                    (0, a.KK)(), n();
                },
            },
        ],
    });
}
