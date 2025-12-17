n.d(i, { default: () => p }), n(953529);
var e = n(54381);
n(473749);
var a = n(512722),
    r = n.n(a),
    s = n(793030),
    o = n(481060),
    c = n(584825),
    d = n(388032),
    l = n(595986);
function p(t) {
    let { onClose: i, guildId: n, transitionState: a } = t,
        p = (0, c.YB)(n);
    return (
        r()(null != p, "subscriptionsSettings cannot be null"),
        (0, e.jsx)(s.Modal, {
            onClose: i,
            title: d.intl.string(d.t.xPum5Q),
            transitionState: a,
            "aria-label": d.intl.string(d.t.D98gRz),
            actions: [
                {
                    variant: "primary",
                    text: d.intl.string(d.t.wdo1oB),
                    onClick: i,
                },
            ],
            children: (0, e.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: l.description,
                children: p.description,
            }),
        })
    );
}
