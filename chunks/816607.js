n.d(i, { default: () => p }), n(953529);
var r = n(54381);
n(473749);
var s = n(512722),
    e = n.n(s),
    a = n(793030),
    o = n(481060),
    c = n(584825),
    l = n(388032),
    d = n(695231);
function p(t) {
    let { onClose: i, guildId: n, transitionState: s } = t,
        p = (0, c.YB)(n);
    return (
        e()(null != p, "subscriptionsSettings cannot be null"),
        (0, r.jsx)(a.Modal, {
            onClose: i,
            title: l.intl.string(l.t.xPum5Q),
            transitionState: s,
            "aria-label": l.intl.string(l.t.D98gRz),
            actions: [
                {
                    variant: "primary",
                    text: l.intl.string(l.t.wdo1oB),
                    onClick: i,
                },
            ],
            children: (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.description,
                children: p.description,
            }),
        })
    );
}
