s.d(t, {
    Z: function () {
        return o;
    }
}),
    s(47120);
var a,
    n = s(200651),
    r = s(192379);
function i(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class o extends (a = r.PureComponent) {
    render() {
        let { tag: e, children: t, eventName: s, data: a, track: r, trackOutboundLink: i, ...o } = this.props;
        return null == e
            ? null
            : (0, n.jsx)(e, {
                  ...o,
                  onClick: this.handleClick,
                  children: t
              });
    }
    constructor(...e) {
        super(...e),
            i(this, 'handleClick', (e) => {
                let { eventName: t, data: s, href: a, onClick: n, trackOutboundLink: r, track: i } = this.props;
                if ((s.googleAnalytics && r && (null != a ? r(a) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), n && n(e), !t)) return !1;
                i(t, s);
            });
    }
}
i(o, 'defaultProps', {
    tag: 'a',
    data: {}
});
