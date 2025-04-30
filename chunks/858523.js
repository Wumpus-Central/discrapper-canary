l.d(i, { default: () => o });
var e = l(200651),
    t = l(192379),
    a = l(481060),
    s = l(239091),
    c = l(299206),
    r = l(388032);
function o(n) {
    let { guild: i, shiftId: l, onSelect: o, closePopout: d, 'aria-label': u } = n,
        h = (0, c.Z)({
            id: i.id,
            label: r.intl.string(r.t['94lLDw']),
            shiftId: l,
            onSuccess: d
        }),
        p = t.useCallback((n) => {
            n.stopPropagation();
        }, []);
    return (0, e.jsx)(a.P3F, {
        onClick: p,
        children: (0, e.jsx)(a.v2r, {
            onSelect: o,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != u ? u : r.intl.string(r.t.ogxXGh),
            onClose: s.Zy,
            children: (0, e.jsx)(a.kSQ, { children: h })
        })
    });
}
