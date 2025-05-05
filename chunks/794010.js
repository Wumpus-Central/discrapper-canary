a.d(t, { Z: () => i }), a(388685);
var n,
    r = a(255367),
    s = a(73800);
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
class i extends (n = s.PureComponent) {
    render() {
        var e, t;
        let a = this.props,
            { tag: n, children: s, eventName: i, data: o, track: c, trackOutboundLink: d } = a,
            u = (function (e, t) {
                if (null == e) return {};
                var a,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) (a = s[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                }
                return r;
            })(a, ['tag', 'children', 'eventName', 'data', 'track', 'trackOutboundLink']);
        return null == n
            ? null
            : (0, r.jsx)(
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
                          children: s
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
                let { eventName: t, data: a, href: n, onClick: r, trackOutboundLink: s, track: l } = this.props;
                if ((a.googleAnalytics && s && (null != n ? s(n) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), r && r(e), !t)) return !1;
                l(t, a);
            });
    }
}
l(i, 'defaultProps', {
    tag: 'a',
    data: {}
});
