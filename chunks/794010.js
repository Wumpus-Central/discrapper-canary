a.d(t, { Z: () => i }), a(47120);
var n,
    s = a(200651),
    r = a(192379);
function l(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
class i extends (n = r.PureComponent) {
    render() {
        var e, t;
        let a = this.props,
            { tag: n, children: r, eventName: i, data: o, track: c, trackOutboundLink: d } = a,
            u = (function (e, t) {
                if (null == e) return {};
                var a,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) (a = r[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
                }
                return s;
            })(a, ['tag', 'children', 'eventName', 'data', 'track', 'trackOutboundLink']);
        return null == n
            ? null
            : (0, s.jsx)(
                  n,
                  ((e = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var a = null != arguments[t] ? arguments[t] : {},
                              n = Object.keys(a);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                  Object.getOwnPropertySymbols(a).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                  })
                              )),
                              n.forEach(function (t) {
                                  l(e, t, a[t]);
                              });
                      }
                      return e;
                  })({}, u)),
                  (t = t =
                      {
                          onClick: this.handleClick,
                          children: r
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                      : (function (e, t) {
                            var a = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                a.push.apply(a, n);
                            }
                            return a;
                        })(Object(t)).forEach(function (a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                        }),
                  e)
              );
    }
    constructor(...e) {
        super(...e),
            l(this, 'handleClick', (e) => {
                let { eventName: t, data: a, href: n, onClick: s, trackOutboundLink: r, track: l } = this.props;
                if ((a.googleAnalytics && r && (null != n ? r(n) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), s && s(e), !t)) return !1;
                l(t, a);
            });
    }
}
l(i, 'defaultProps', {
    tag: 'a',
    data: {}
});
