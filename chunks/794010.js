a.d(t, { Z: () => r }), a(47120);
var n,
    s = a(200651),
    l = a(192379);
function i(e, t, a) {
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
class r extends (n = l.PureComponent) {
    render() {
        let { tag: e, children: t, eventName: a, data: n, track: l, trackOutboundLink: i, ...r } = this.props;
        return null == e
            ? null
            : (0, s.jsx)(e, {
                  ...r,
                  onClick: this.handleClick,
                  children: t
              });
    }
    constructor(...e) {
        super(...e),
            i(this, 'handleClick', (e) => {
                let { eventName: t, data: a, href: n, onClick: s, trackOutboundLink: l, track: i } = this.props;
                if ((a.googleAnalytics && l && (null != n ? l(n) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), s && s(e), !t)) return !1;
                i(t, a);
            });
    }
}
i(r, 'defaultProps', {
    tag: 'a',
    data: {}
});
