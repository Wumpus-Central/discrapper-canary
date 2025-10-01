n.d(i, { default: () => o });
var e = n(951288);
n(647438);
var s = n(793030),
    a = n(481060),
    r = n(468706),
    l = n(388032);
function o(t) {
    let { channelId: i, messageId: n, onClose: o, transitionState: d } = t;
    return (0, e.jsx)(s.Modal, {
        transitionState: d,
        onClose: o,
        title: l.intl.string(l.t.B3vFdX),
        subtitle: l.intl.string(l.t.i4AbAQ),
        actions: [
            {
                text: l.intl.string(l.t.WAI6xs),
                onClick: o,
            },
        ],
        children: (0, e.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: l.intl.format(l.t.Ge0HUl, {
                handleFalsePositiveHook: () => {
                    o(), (0, r.e)(i, n);
                },
            }),
        }),
    });
}
