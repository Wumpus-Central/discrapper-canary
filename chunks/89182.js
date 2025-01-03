t.d(n, {
    PA: function () {
        return i;
    },
    ZP: function () {
        return _;
    },
    iG: function () {
        return p;
    }
});
var a,
    i,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    c = t(481060),
    d = t(706454),
    u = t(600419);
function m(e) {
    let { items: n, onClose: t, onSelect: a, selected: i, ...l } = e;
    return (0, r.jsx)(c.Menu, {
        className: u.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': l['aria-label'],
        hideScroller: !0,
        onClose: t,
        onSelect: t,
        children: (0, r.jsx)(
            c.MenuGroup,
            {
                children: n.map((e) => {
                    let { id: n, label: t } = e;
                    return (0, r.jsx)(
                        c.MenuItem,
                        {
                            id: n,
                            label: t,
                            icon: n === i ? c.CircleCheckIcon : void 0,
                            action: () => a(n)
                        },
                        n
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
function p(e) {
    let { count: n, name: t } = e,
        a = n.toLocaleString(d.default.locale);
    return (0, r.jsxs)('div', {
        className: u.categoryLabel,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: a
            })
        ]
    });
}
((a = i || (i = {})).FILLED = 'FILLED'), (a.TRANSPARENT = 'TRANSPARENT');
function _(e) {
    let { items: n, title: t, onSelect: a, selected: i, variant: o = 'TRANSPARENT', ...d } = e,
        p = l.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case 'FILLED':
                            return u.filterBackground;
                        case 'TRANSPARENT':
                            return;
                    }
                })(o),
            [o]
        );
    return (0, r.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(m, {
                selected: i,
                onClose: t,
                items: n,
                onSelect: a,
                'aria-label': d['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let { isShown: a } = n;
            return (0, r.jsxs)('div', {
                ...e,
                className: s()(u.filter, p),
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: t
                    }),
                    a
                        ? (0, r.jsx)(c.ChevronSmallUpIcon, {
                              size: 'xs',
                              color: c.tokens.colors.INTERACTIVE_NORMAL
                          })
                        : (0, r.jsx)(c.ChevronSmallDownIcon, {
                              size: 'xs',
                              color: c.tokens.colors.INTERACTIVE_NORMAL
                          })
                ]
            });
        }
    });
}
