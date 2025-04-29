n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(314734),
    s = n(388032),
    c = n(148520);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: r } = e,
        u = (e) => {
            n(e), r();
        };
    return (0, i.jsx)('div', {
        className: l()(a.Jh, c.container),
        children: (0, i.jsx)(o.v2r, {
            navId: 'command-list-sort',
            'aria-label': s.intl.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, i.jsxs)(o.kSQ, {
                label: s.intl.string(s.t.yeYaHR),
                children: [
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: s.intl.string(s.t.SzxiqK),
                        action: () => u(a.bS.POPULAR),
                        checked: t === a.bS.POPULAR
                    }),
                    (0, i.jsx)(o.k5B, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: s.intl.string(s.t.m8xstr),
                        action: () => u(a.bS.ALPHABETICAL),
                        checked: t === a.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
