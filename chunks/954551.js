n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(665149),
    r = n(388035),
    s = n(453473),
    o = n(388032);
function c(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, i.jsx)(s.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, s) =>
            (0, i.jsx)(r.U, {
                location: 'bookmarks-button',
                children: (0, i.jsx)(a.JO, {
                    ...n,
                    className: c,
                    onClick: e,
                    icon: l.plf,
                    'aria-label': o.intl.string(o.t['2pAkDA']),
                    tooltip: t ? null : o.intl.string(o.t['2pAkDA']),
                    selected: t,
                    showBadge: s
                })
            })
    });
}
