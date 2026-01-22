a.d(t, { Y: () => A });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    n = a.n(r),
    i = a(409291),
    o = a(829869),
    c = a(280617),
    d = a(855522),
    u = a(730555);
let N = null;
class A extends l.PureComponent {
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: r,
            mobileClassName: i,
            avoidRouter: d,
            authRedirectTo: A,
            openNavAriaLabel: p,
            hideNavAriaLabel: h,
            skipToContentLabel: b,
        } = this.props;
        return null == N
            ? null
            : (0, s.jsxs)(l.Fragment, {
                  children: [
                      (0, s.jsx)(o.Q, {
                          className: n()(u.q, t),
                          TrackClick: N,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: A,
                          onChangeLocale: a,
                          mainContentId: r,
                          skipToContentLabel: b,
                      }),
                      (0, s.jsx)(c.i, {
                          className: n()(u.O, i),
                          token: e,
                          avoidRouter: d,
                          TrackClick: N,
                          onChangeLocale: a,
                          openNavAriaLabel: p,
                          hideNavAriaLabel: h,
                      }),
                  ],
              });
    }
    constructor(e) {
        super(e),
            null != e.locale && d.A.setLocale(e.locale),
            (N = (t) =>
                (0, s.jsx)(
                    i.A,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                s = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (s = s.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                s.forEach(function (t) {
                                    var s;
                                    (s = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: s,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = s);
                                });
                        }
                        return e;
                    })(
                        {
                            track: e.track,
                            trackOutboundLink: e.trackOutboundLink,
                        },
                        t,
                    ),
                ));
    }
}
