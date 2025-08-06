n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(314734),
    l = n(388032),
    c = n(148520);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        u = (e) => {
            (n(e), i());
        };
    return (0, r.jsx)('div', {
        className: o()(s.Jh, c.container),
        children: (0, r.jsx)(a.v2r, {
            navId: 'command-list-sort',
            'aria-label': l.intl.string(l.t.Ugo9ub),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsxs)(a.kSQ, {
                label: l.intl.string(l.t.yeYaHR),
                children: [
                    (0, r.jsx)(a.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: l.intl.string(l.t.SzxiqK),
                        action: () => u(s.bS.POPULAR),
                        checked: t === s.bS.POPULAR
                    }),
                    (0, r.jsx)(a.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: l.intl.string(l.t.m8xstr),
                        action: () => u(s.bS.ALPHABETICAL),
                        checked: t === s.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
