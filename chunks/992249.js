n.d(t, { Z: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(717251),
    c = n(313795);
function d(e) {
    var { action: t, children: n, className: l, onExpandChange: d, loading: u } = e,
        m = (function (e, t) {
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
        })(e, ['action', 'children', 'className', 'onExpandChange', 'loading']);
    let [g, p] = i.useState(!1),
        h = (e) => {
            p(e), null == d || d(e);
        };
    return (0, r.jsx)(a.zF9, {
        className: s()(c.groupContainer, l),
        isExpanded: g,
        collapsibleContent: (0, r.jsxs)('div', {
            className: c.groupCollapsedContainer,
            children: [g && (0, r.jsx)('div', { className: c.pointer }), n]
        }),
        children: (e) => {
            var n, i;
            let { onClick: l } = e;
            return (0, r.jsx)(
                o.Z,
                ((n = (function (e) {
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
                })({}, m)),
                (i = i =
                    {
                        className: c.groupHeaderRow,
                        action: u ? (0, r.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }) : t,
                        onClick: (e) => {
                            h(!g), l(e);
                        }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        }
    });
}
