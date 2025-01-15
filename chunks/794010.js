a.d(t, {
    Z: function () {
        return l;
    }
}),
    a(47120);
var n,
    s = a(200651),
    i = a(192379);
function r(e, t, a) {
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
class l extends (n = i.PureComponent) {
    render() {
        let { tag: e, children: t, eventName: a, data: n, track: i, trackOutboundLink: r, ...l } = this.props;
        return null == e
            ? null
            : (0, s.jsx)(e, {
                  ...l,
                  onClick: this.handleClick,
                  children: t
              });
    }
    constructor(...e) {
        super(...e),
            r(this, 'handleClick', (e) => {
                let { eventName: t, data: a, href: n, onClick: s, trackOutboundLink: i, track: r } = this.props;
                if ((a.googleAnalytics && i && (null != n ? i(n) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), s && s(e), !t)) return !1;
                r(t, a);
            });
    }
}
r(l, 'defaultProps', {
    tag: 'a',
    data: {}
});
