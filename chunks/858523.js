n.d(t, {
    R: () => c,
    default: () => d
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(388032);
function d(e) {
    let { guild: t, shiftId: n, onSelect: d, closePopout: c, 'aria-label': u } = e,
        h = (0, s.Z)({
            id: t.id,
            label: o.intl.string(o.t['94lLDw']),
            shiftId: n,
            onSuccess: c
        }),
        m = l.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, i.jsx)(r.P3F, {
        onClick: m,
        children: (0, i.jsx)(r.v2r, {
            onSelect: d,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != u ? u : o.intl.string(o.t.ogxXGh),
            onClose: a.Zy,
            children: (0, i.jsx)(r.kSQ, { children: h })
        })
    });
}
let c = (e) => {
    let { guild: t, children: n, onRequestOpen: l, onRequestClose: a } = e;
    return (0, i.jsx)(r.yRy, {
        onRequestOpen: l,
        onRequestClose: a,
        animation: r.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(d, {
                guild: t,
                closePopout: n
            });
        },
        children: n
    });
};
