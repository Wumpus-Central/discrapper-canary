n.d(i, { default: () => r });
var e = n(54381);
n(473749);
var a = n(793030),
    l = n(481060),
    s = n(468706),
    o = n(388032);
function r(t) {
    let { channelId: i, messageId: n, onClose: r, transitionState: d } = t;
    return (0, e.jsx)(a.Modal, {
        transitionState: d,
        onClose: r,
        title: o.intl.string(o.t.B3vFdU),
        subtitle: o.intl.string(o.t.i4AbAS),
        actions: [
            {
                text: o.intl.string(o.t.WAI6xu),
                onClick: r,
            },
        ],
        children: (0, e.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: o.intl.format(o.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    r(), (0, s.e)(i, n);
                },
            }),
        }),
    });
}
