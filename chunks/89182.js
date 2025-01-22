n.d(t, {
    PA: function () {
        return a;
    },
    ZP: function () {
        return h;
    },
    iG: function () {
        return p;
    }
});
var i,
    a,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    d = n(706454),
    u = n(600419);
function m(e) {
    let { items: t, onClose: n, onSelect: i, selected: a, ...l } = e;
    return (0, r.jsx)(c.Menu, {
        className: u.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': l['aria-label'],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, r.jsx)(
            c.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, r.jsx)(
                        c.MenuItem,
                        {
                            id: t,
                            label: n,
                            icon: t === a ? c.CircleCheckIcon : void 0,
                            action: () => i(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
function p(e) {
    let { count: t, name: n } = e,
        i = t.toLocaleString(d.default.locale);
    return (0, r.jsxs)('div', {
        className: u.categoryLabel,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: n
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: i
            })
        ]
    });
}
((i = a || (a = {})).FILLED = 'FILLED'), (i.TRANSPARENT = 'TRANSPARENT');
function h(e) {
    let { items: t, title: n, onSelect: i, selected: a, variant: o = 'TRANSPARENT', ...d } = e,
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
            let { closePopout: n } = e;
            return (0, r.jsx)(m, {
                selected: a,
                onClose: n,
                items: t,
                onSelect: i,
                'aria-label': d['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsxs)('div', {
                ...e,
                className: s()(u.filter, p),
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n
                    }),
                    i
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
