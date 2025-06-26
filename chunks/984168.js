n.d(t, { Z: () => u });
var l = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    o = n(314734),
    s = n(388032),
    c = n(148520);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        u = (e) => {
            n(e), i();
        };
    return (0, l.jsx)('div', {
        className: r()(o.Jh, c.container),
        children: (0, l.jsx)(a.v2r, {
            navId: 'command-list-sort',
            'aria-label': s.intl.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, l.jsxs)(a.kSQ, {
                label: s.intl.string(s.t.yeYaHR),
                children: [
                    (0, l.jsx)(a.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: s.intl.string(s.t.SzxiqK),
                        action: () => u(o.bS.POPULAR),
                        checked: t === o.bS.POPULAR
                    }),
                    (0, l.jsx)(a.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: s.intl.string(s.t.m8xstr),
                        action: () => u(o.bS.ALPHABETICAL),
                        checked: t === o.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
