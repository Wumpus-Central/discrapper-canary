n.d(e, { default: () => u });
var i = n(255367),
    a = n(73800),
    l = n(82659),
    o = n(481060),
    s = n(468706),
    r = n(470734),
    c = n(388032);
function u(t) {
    let { channelId: e, messageId: n, onClose: u, transitionState: d } = t,
        m = (0, r.pn)('ForumExplicitMediaModal'),
        f = a.useMemo(() => (m ? c.intl.string(c.t.i4AbAQ) : c.intl.string(c.t.bNMQVF)), [m]);
    return (0, i.jsx)(l.Modal, {
        transitionState: d,
        onClose: u,
        title: c.intl.string(c.t.B3vFdX),
        subtitle: f,
        actions: [
            {
                text: c.intl.string(c.t.WAI6xs),
                onClick: u
            }
        ],
        children: (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            children: c.intl.format(c.t.Ge0HUl, {
                handleFalsePositiveHook: () => {
                    (u(), (0, s.e)(e, n));
                }
            })
        })
    });
}
