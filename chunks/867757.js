n.d(t, { default: () => o });
var i = n(200651);
n(192379);
var s = n(481060),
    d = n(239091),
    r = n(410575),
    c = n(416977),
    a = n(778123),
    u = n(981631),
    l = n(388032);
function o(e) {
    let { guildId: t, analyticsContext: n, onSelect: o } = e,
        v = (0, c.Z)(t),
        h = (0, a.Z)(t);
    return (0, i.jsx)(r.Z, {
        context: n,
        object: u.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.v2r, {
            navId: 'user-context',
            onClose: d.Zy,
            'aria-label': l.NW.string(l.t.liqwPD),
            onSelect: o,
            children: [(0, i.jsx)(s.kSQ, { children: v }), (0, i.jsx)(s.kSQ, { children: h })]
        })
    });
}
