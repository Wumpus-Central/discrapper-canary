t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    l = t(481060),
    a = t(984168),
    o = t(314734),
    r = t(388032),
    s = t(853936);
function c(e) {
    let n,
        { sortOrder: t, onSortOptionClick: c } = e;
    switch (t) {
        case o.bS.POPULAR:
            n = r.intl.string(r.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            n = r.intl.string(r.t.m8xstr);
    }
    return (0, i.jsx)(l.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(a.Z, {
                sortOrder: t,
                onSortOptionClick: c,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, i.jsxs)(l.Button, {
                ...e,
                size: l.Button.Sizes.MIN,
                color: l.Button.Colors.CUSTOM,
                className: s.sortDropdown,
                innerClassName: s.sortDropdownInner,
                'aria-label': r.intl.string(r.t.yeYaHR),
                children: [
                    (0, i.jsx)(l.ArrowsUpDownIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: s.sortIconMargin
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: n
                    }),
                    a
                        ? (0, i.jsx)(l.ChevronSmallUpIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                        : (0, i.jsx)(l.ChevronSmallDownIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                ]
            });
        }
    });
}
