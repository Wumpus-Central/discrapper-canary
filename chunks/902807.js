n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(642128),
    o = n(481060),
    c = n(386476);
class d extends i.Component {
    render() {
        var e, t;
        let n = this.props,
            { icon: i } = n,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(n, ['icon']);
        return (0, r.jsx)(
            i,
            ((e = (function (e) {
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
            })({ size: 'md' }, s)),
            (t = t = { color: 'currentColor' }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
}
let u = (0, l.animated)(d),
    m = function (e) {
        let { className: t, name: n, icon: i, iconClassName: s } = e,
            l = (0, o.Yzy)(
                {
                    name: n,
                    icon: i,
                    iconClassName: s
                },
                {
                    key: (e) => e.name,
                    initial: null,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 }
                },
                'animate-always'
            );
        return (0, r.jsx)('div', {
            className: a()(c.crossfade, t),
            children: l((e, t) => {
                let { icon: n, iconClassName: i } = t;
                return (0, r.jsx)(u, {
                    icon: n,
                    className: a()(c.icon, i),
                    style: e
                });
            })
        });
    };
