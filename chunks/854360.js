n.d(e, { default: () => g }), n(47120);
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(749210),
    c = n(910693),
    l = n(51144),
    o = n(981631),
    d = n(388032),
    u = n(381518);
function g(t) {
    let { guildId: e, user: n, location: g, ...m } = t,
        [p, x] = i.useState(''),
        h = (0, c.sE)(e, {
            location: g,
            targetUserId: n.id
        }),
        f = i.useCallback(() => {
            r.Z.kickUser(e, n.id, p), h(c.jQ.KICK);
        }, [e, n.id, p, h]),
        k = i.useCallback((t) => {
            x(t);
        }, []);
    return (0, a.jsxs)(s.ConfirmModal, {
        header: d.intl.formatToPlainString(d.t['1Ie87u'], { user: n.username }),
        confirmText: d.intl.string(d.t['3glT6e']),
        cancelText: d.intl.string(d.t['ETE/oK']),
        onConfirm: f,
        ...m,
        children: [
            (0, a.jsx)(s.Text, {
                variant: 'text-md/normal',
                className: u.spacing,
                children: d.intl.format(d.t['/yH0UV'], { user: '@'.concat(l.ZP.getName(n)) })
            }),
            (0, a.jsx)(s.xJW, {
                title: d.intl.string(d.t['+2QEPj']),
                className: u.spacing,
                children: (0, a.jsx)(s.Kx8, {
                    maxLength: o.GNZ,
                    onChange: k,
                    value: p,
                    rows: 2
                })
            })
        ]
    });
}
