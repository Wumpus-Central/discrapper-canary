n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(314734),
    r = n(388032),
    c = n(283437);
function d(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e,
        d = (e) => {
            n(e), l();
        };
    return (0, i.jsx)('div', {
        className: a()(s.Jh, c.container),
        children: (0, i.jsx)(o.v2r, {
            navId: 'command-list-sort',
            'aria-label': r.intl.string(r.t.Ugo9ub),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(o.kSQ, {
                label: r.intl.string(r.t.yeYaHR),
                children: [
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: r.intl.string(r.t.SzxiqK),
                        action: () => d(s.bS.POPULAR),
                        checked: t === s.bS.POPULAR
                    }),
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: r.intl.string(r.t.m8xstr),
                        action: () => d(s.bS.ALPHABETICAL),
                        checked: t === s.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
