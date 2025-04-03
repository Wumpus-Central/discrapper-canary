n.d(t, {
    PA: () => h,
    ZP: () => g,
    iG: () => m
});
var r,
    a = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    c = n(706454),
    d = n(290646);
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function p(e) {
    var { items: t, onClose: n, onSelect: r, selected: i } = e,
        l = u(e, ['items', 'onClose', 'onSelect', 'selected']);
    return (0, a.jsx)(s.v2r, {
        className: d.menu,
        navId: 'global-discovery-search-filter-options',
        'aria-label': l['aria-label'],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(
            s.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, a.jsx)(
                        s.sNh,
                        {
                            id: t,
                            label: n,
                            icon: t === i ? s.owK : void 0,
                            action: () => r(t)
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
        r = t.toLocaleString(c.default.locale);
    return (0, a.jsxs)('div', {
        className: d.categoryLabel,
        children: [
            (0, a.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: n
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: r
            })
        ]
    });
}
var h = (((r = {}).FILLED = 'FILLED'), (r.TRANSPARENT = 'TRANSPARENT'), r);
function g(e) {
    var { items: t, title: n, onSelect: r, selected: l, variant: c = 'TRANSPARENT' } = e,
        m = u(e, ['items', 'title', 'onSelect', 'selected', 'variant']);
    let h = i.useMemo(
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
    return (0, a.jsx)(s.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(p, {
                selected: l,
                onClose: n,
                items: t,
                onSelect: r,
                'aria-label': m['aria-label']
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            var r, i;
            let { isShown: l } = t;
            return (0, a.jsxs)(
                'div',
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        className: o()(d.filter, h),
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'interactive-normal',
                                children: n
                            }),
                            l
                                ? (0, a.jsx)(s.u04, {
                                      size: 'xs',
                                      color: s.TVs.colors.INTERACTIVE_NORMAL
                                  })
                                : (0, a.jsx)(s.CJ0, {
                                      size: 'xs',
                                      color: s.TVs.colors.INTERACTIVE_NORMAL
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r)
            );
        }
    });
}
