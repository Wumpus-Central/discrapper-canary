n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(314734),
    c = n(388032),
    s = n(148520);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: r } = e,
        u = (e) => {
            n(e), r();
        };
    return (0, i.jsx)('div', {
        className: l()(o.Jh, s.container),
        children: (0, i.jsx)(a.v2r, {
            navId: 'command-list-sort',
            'aria-label': c.NW.string(c.t.Ugo9ub),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsxs)(a.kSQ, {
                label: c.NW.string(c.t.yeYaHR),
                children: [
                    (0, i.jsx)(a.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: c.NW.string(c.t.SzxiqK),
                        action: () => u(o.bS.POPULAR),
                        checked: t === o.bS.POPULAR
                    }),
                    (0, i.jsx)(a.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: c.NW.string(c.t.m8xstr),
                        action: () => u(o.bS.ALPHABETICAL),
                        checked: t === o.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
