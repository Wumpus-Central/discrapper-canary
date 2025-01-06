n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(239091),
    s = n(299206),
    c = n(388032);
function o(e) {
    let { application: t, onSelect: n } = e,
        o = (0, s.Z)({
            id: t.id,
            label: c.intl.string(c.t['+NP/b2'])
        });
    return (0, i.jsx)(a.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: l.Zy,
        'aria-label': c.intl.string(c.t.WkcHT0),
        onSelect: n,
        children: (0, i.jsx)(a.MenuGroup, { children: o }, 'developer-actions')
    });
}
