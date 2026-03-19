a.d(t, { Y: () => A });
var s = a(627968),
    l = a(64700),
    i = a(503698),
    r = a.n(i),
    n = a(409291),
    o = a(829869),
    c = a(280617),
    d = a(855522),
    _ = a(61561);
let N = null;
class A extends l.PureComponent {
    constructor(e) {
        super(e),
            null != e.locale && d.A.setLocale(e.locale),
            (N = (t) => (0, s.jsx)(n.A, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: i,
            mobileClassName: n,
            avoidRouter: d,
            authRedirectTo: A,
            openNavAriaLabel: u,
            hideNavAriaLabel: I,
            skipToContentLabel: k,
        } = this.props;
        return null == N
            ? null
            : (0, s.jsxs)(l.Fragment, {
                  children: [
                      (0, s.jsx)(o.Q, {
                          className: r()(_.q, t),
                          TrackClick: N,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: A,
                          onChangeLocale: a,
                          mainContentId: i,
                          skipToContentLabel: k,
                      }),
                      (0, s.jsx)(c.i, {
                          className: r()(_.O, n),
                          token: e,
                          avoidRouter: d,
                          TrackClick: N,
                          onChangeLocale: a,
                          openNavAriaLabel: u,
                          hideNavAriaLabel: I,
                      }),
                  ],
              });
    }
}
