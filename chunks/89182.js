n.d(t, {
    PA: () => h,
    ZP: () => p,
    iG: () => m
});
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(706454),
    d = n(486370);
function u(e) {
    let { items: t, onClose: n, onSelect: i, selected: r, ...l } = e;
    return (0, a.jsx)(o.v2r, {
        className: d.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': l['aria-label'],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(
            o.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, a.jsx)(
                        o.sNh,
                        {
                            id: t,
                            label: n,
                            icon: t === r ? o.owK : void 0,
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
function m(e) {
    let { count: t, name: n } = e,
        i = t.toLocaleString(c.default.locale);
    return (0, a.jsxs)('div', {
        className: d.categoryLabel,
        children: [
            (0, a.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: n
            }),
            (0, a.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: i
            })
        ]
    });
}
var h = (((i = {}).FILLED = 'FILLED'), (i.TRANSPARENT = 'TRANSPARENT'), i);
function p(e) {
    let { items: t, title: n, onSelect: i, selected: l, variant: c = 'TRANSPARENT', ...m } = e,
        h = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case 'FILLED':
                            return d.filterBackground;
                        case 'TRANSPARENT':
                            return;
                    }
                })(c),
            [c]
        );
    return (0, a.jsx)(o.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(u, {
                selected: l,
                onClose: n,
                items: t,
                onSelect: i,
                'aria-label': m['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, a.jsxs)('div', {
                ...e,
                className: s()(d.filter, h),
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n
                    }),
                    i
                        ? (0, a.jsx)(o.u04, {
                              size: 'xs',
                              color: o.TVs.colors.INTERACTIVE_NORMAL
                          })
                        : (0, a.jsx)(o.CJ0, {
                              size: 'xs',
                              color: o.TVs.colors.INTERACTIVE_NORMAL
                          })
                ]
            });
        }
    });
}
