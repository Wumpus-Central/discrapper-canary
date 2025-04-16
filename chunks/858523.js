i.d(e, { default: () => o });
var l = i(200651),
    a = i(192379),
    s = i(481060),
    t = i(239091),
    c = i(299206),
    r = i(388032);
function o(n) {
    let { guild: e, shiftId: i, onSelect: o, closePopout: d, 'aria-label': u } = n,
        h = (0, c.Z)({
            id: e.id,
            label: r.NW.string(r.t['94lLDw']),
            shiftId: i,
            onSuccess: d
        }),
        p = a.useCallback((n) => {
            n.stopPropagation();
        }, []);
    return (0, l.jsx)(s.P3F, {
        onClick: p,
        children: (0, l.jsx)(s.v2r, {
            onSelect: o,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != u ? u : r.NW.string(r.t.ogxXGh),
            onClose: t.Zy,
            children: (0, l.jsx)(s.kSQ, { children: h })
        })
    });
}
