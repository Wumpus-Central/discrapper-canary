n.d(e, { default: () => s });
var i = n(255367);
n(73800);
var a = n(82659),
    o = n(481060),
    l = n(468706),
    r = n(388032);
function s(t) {
    let { channelId: e, messageId: n, onClose: s, transitionState: c } = t;
    return (0, i.jsx)(a.Modal, {
        transitionState: c,
        onClose: s,
        title: r.intl.string(r.t.B3vFdX),
        subtitle: r.intl.string(r.t.i4AbAQ),
        actions: [
            {
                text: r.intl.string(r.t.WAI6xs),
                onClick: s
            }
        ],
        children: (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            children: r.intl.format(r.t.Ge0HUl, {
                handleFalsePositiveHook: () => {
                    (s(), (0, l.e)(e, n));
                }
            })
        })
    });
}
