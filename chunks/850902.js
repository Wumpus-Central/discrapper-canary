t.d(e, { default: () => l });
var i = t(200651);
t(192379);
var o = t(481060),
    r = t(239091),
    c = t(388032);
function l(n) {
    let { roleId: e, onLeaveRole: t, onSelect: l } = n;
    return (0, i.jsx)(
        o.v2r,
        {
            navId: 'guild-role-connections-context',
            'aria-label': c.NW.string(c.t.vytvJC),
            onClose: r.Zy,
            onSelect: l,
            children: (0, i.jsx)(o.kSQ, {
                children: (0, i.jsx)(
                    o.sNh,
                    {
                        id: 'guild-role-connections-leave-role',
                        label: c.NW.string(c.t.vytvJC),
                        action: t,
                        color: 'danger'
                    },
                    e
                )
            })
        },
        e
    );
}
