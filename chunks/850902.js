e.d(t, { default: () => c });
var i = e(200651);
e(192379);
var l = e(481060),
    o = e(239091),
    r = e(388032);
function c(n) {
    let { roleId: t, onLeaveRole: e, onSelect: c } = n;
    return (0, i.jsx)(
        l.v2r,
        {
            navId: 'guild-role-connections-context',
            'aria-label': r.intl.string(r.t.vytvJC),
            onClose: o.Zy,
            onSelect: c,
            children: (0, i.jsx)(l.kSQ, {
                children: (0, i.jsx)(
                    l.sNh,
                    {
                        id: 'guild-role-connections-leave-role',
                        label: r.intl.string(r.t.vytvJC),
                        action: e,
                        color: 'danger'
                    },
                    t
                )
            })
        },
        t
    );
}
