n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(951394),
    c = n(858523),
    u = n(388032),
    d = n(484741);
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let h = function (e) {
    let { guild: t, className: n } = e,
        [l, h] = i.useState(!1),
        f = i.useRef(null),
        g = i.useCallback(() => h(!0), [h]),
        m = i.useCallback(() => h(!0), [h]);
    return (0, r.jsx)('div', {
        className: a()(d.actionButtonsContainer, n, { [d.forceButtonsShow]: l }),
        children: (0, r.jsx)(s.ZP, {
            children: (0, r.jsx)(c.R, {
                targetElementRef: f,
                onRequestOpen: g,
                onRequestClose: m,
                guild: t,
                children: (e) => {
                    var { onClick: t } = e,
                        n = p(e, ['onClick']);
                    return (0, r.jsx)(o.ua7, {
                        text: u.NW.string(u.t.UKOtz8),
                        hideOnClick: !0,
                        children: (e) => {
                            var i,
                                l,
                                { onClick: a } = e,
                                c = p(e, ['onClick']);
                            return (0, r.jsx)(
                                s.zx,
                                ((i = (function (e) {
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
                                })({}, n, c)),
                                (l = l =
                                    {
                                        ref: f,
                                        onClick: (e) => {
                                            e.stopPropagation(), null == a || a(), t(e);
                                        },
                                        'aria-label': u.NW.string(u.t.UKOtz8),
                                        children: (0, r.jsx)(o.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.overflowIcon
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i)
                            );
                        }
                    });
                }
            })
        })
    });
};
