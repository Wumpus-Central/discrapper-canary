n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(314734),
    s = n(388032),
    c = n(797915);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e,
        u = (e) => {
            n(e), l();
        };
    return (0, i.jsx)('div', {
        className: r()(a.Jh, c.container),
        children: (0, i.jsx)(o.v2r, {
            navId: 'command-list-sort',
            'aria-label': s.NW.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(o.kSQ, {
                label: s.NW.string(s.t.yeYaHR),
                children: [
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: s.NW.string(s.t.SzxiqK),
                        action: () => u(a.bS.POPULAR),
                        checked: t === a.bS.POPULAR
                    }),
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: s.NW.string(s.t.m8xstr),
                        action: () => u(a.bS.ALPHABETICAL),
                        checked: t === a.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
