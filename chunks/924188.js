n.d(i, { default: () => l });
var e = n(54381);
n(473749);
var a = n(793030),
    r = n(481060),
    s = n(468706),
    o = n(388032);
function l(t) {
    let { channelId: i, messageId: n, onClose: l, transitionState: d } = t;
    return (0, e.jsx)(a.Modal, {
        transitionState: d,
        onClose: l,
        title: o.intl.string(o.t.B3vFdU),
        subtitle: o.intl.string(o.t.i4AbAS),
        actions: [
            {
                text: o.intl.string(o.t.WAI6xu),
                onClick: l,
            },
        ],
        children: (0, e.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: o.intl.format(o.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    l(), (0, s.e)(i, n);
                },
            }),
        }),
    });
}
