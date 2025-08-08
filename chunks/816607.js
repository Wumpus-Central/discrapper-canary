n.d(i, { default: () => p }), n(953529);
var e = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    a = n(82659),
    o = n(481060),
    c = n(584825),
    l = n(388032),
    d = n(578305);
function p(t) {
    let { onClose: i, guildId: n, transitionState: r } = t,
        p = (0, c.YB)(n);
    return (
        s()(null != p, "subscriptionsSettings cannot be null"),
        (0, e.jsx)(a.Modal, {
            onClose: i,
            title: l.intl.string(l.t.xPum5e),
            transitionState: r,
            "aria-label": l.intl.string(l.t.D98gR0),
            actions: [
                {
                    variant: "primary",
                    text: l.intl.string(l.t.wdo1oK),
                    onClick: i,
                },
            ],
            children: (0, e.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.description,
                children: p.description,
            }),
        })
    );
}
