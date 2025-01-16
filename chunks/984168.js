t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    o = t(481060),
    r = t(314734),
    s = t(388032),
    c = t(283437);
function d(e) {
    let { sortOrder: n, onSortOptionClick: t, closePopout: l } = e,
        d = (e) => {
            t(e), l();
        };
    return (0, i.jsx)('div', {
        className: a()(r.Jh, c.container),
        children: (0, i.jsx)(o.Menu, {
            navId: 'command-list-sort',
            'aria-label': s.intl.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(o.MenuGroup, {
                label: s.intl.string(s.t.yeYaHR),
                children: [
                    (0, i.jsx)(o.MenuRadioItem, {
                        id: 'sort-by-popular',
                        group: 'sort-by',
                        label: s.intl.string(s.t.SzxiqK),
                        action: () => d(r.bS.POPULAR),
                        checked: n === r.bS.POPULAR
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                        id: 'sort-by-alphabetical',
                        group: 'sort-by',
                        label: s.intl.string(s.t.m8xstr),
                        action: () => d(r.bS.ALPHABETICAL),
                        checked: n === r.bS.ALPHABETICAL
                    })
                ]
            })
        })
    });
}
