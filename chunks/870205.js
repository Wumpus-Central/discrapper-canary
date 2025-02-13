n.d(t, { Z: () => c });
var i = n(200651),
    l = n(481060),
    a = n(984168),
    o = n(314734),
    s = n(388032),
    r = n(981844);
function c(e) {
    let t,
        { sortOrder: n, onSortOptionClick: c } = e;
    switch (n) {
        case o.bS.POPULAR:
            t = s.intl.string(s.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            t = s.intl.string(s.t.m8xstr);
    }
    return (0, i.jsx)(l.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.Z, {
                sortOrder: n,
                onSortOptionClick: c,
                closePopout: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let { isShown: a } = n;
            return (0, i.jsxs)(l.zxk, {
                ...e,
                size: l.zxk.Sizes.MIN,
                color: l.zxk.Colors.CUSTOM,
                className: r.sortDropdown,
                innerClassName: r.sortDropdownInner,
                'aria-label': s.intl.string(s.t.yeYaHR),
                children: [
                    (0, i.jsx)(l.uVW, {
                        size: 'xs',
                        color: 'currentColor',
                        className: r.sortIconMargin
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: t
                    }),
                    a
                        ? (0, i.jsx)(l.u04, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                        : (0, i.jsx)(l.CJ0, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                ]
            });
        }
    });
}
