n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(314734),
    c = n(388032),
    s = n(956924);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: r } = e,
        u = (e) => {
            n(e), r();
        };
    return (0, i.jsx)('div', {
        className: l()(a.Jh, s.container),
        children: (0, i.jsx)(o.v2r, {
            navId: 'command-list-sort',
            'aria-label': c.intl.string(c.t.Ugo9ub),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsxs)(o.kSQ, {
                label: c.intl.string(c.t.yeYaHR),
                children: [
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: c.intl.string(c.t.SzxiqK),
                        action: () => u(a.bS.POPULAR),
                        checked: t === a.bS.POPULAR
                    }),
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: c.intl.string(c.t.m8xstr),
                        action: () => u(a.bS.ALPHABETICAL),
                        checked: t === a.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
