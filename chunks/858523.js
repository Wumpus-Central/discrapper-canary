n.d(t, {
    R: () => d,
    default: () => c
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(388032);
function c(e) {
    let { guild: t, shiftId: n, onSelect: c, closePopout: d, 'aria-label': u } = e,
        h = (0, s.Z)({
            id: t.id,
            label: o.intl.string(o.t['94lLDw']),
            shiftId: n,
            onSuccess: d
        }),
        m = l.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, i.jsx)(r.P3F, {
        onClick: m,
        children: (0, i.jsx)(r.v2r, {
            onSelect: c,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != u ? u : o.intl.string(o.t.ogxXGh),
            onClose: a.Zy,
            children: (0, i.jsx)(r.kSQ, { children: h })
        })
    });
}
let d = (e) => {
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
            return (0, i.jsx)(c, {
                guild: t,
                closePopout: n
            });
        },
        children: n
    });
};
