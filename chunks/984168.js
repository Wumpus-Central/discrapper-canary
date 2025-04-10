n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(314734),
    s = n(388032),
    c = n(148520);
function d(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: r } = e,
        d = (e) => {
            n(e), r();
        };
    return (0, i.jsx)('div', {
        className: l()(o.Jh, c.container),
        children: (0, i.jsx)(a.v2r, {
            navId: 'command-list-sort',
            'aria-label': s.NW.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsxs)(a.kSQ, {
                label: s.NW.string(s.t.yeYaHR),
                children: [
                    (0, i.jsx)(a.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: s.NW.string(s.t.SzxiqK),
                        action: () => d(o.bS.POPULAR),
                        checked: t === o.bS.POPULAR
                    }),
                    (0, i.jsx)(a.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: s.NW.string(s.t.m8xstr),
                        action: () => d(o.bS.ALPHABETICAL),
                        checked: t === o.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
