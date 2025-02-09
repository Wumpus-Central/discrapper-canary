s.d(t, { Z: () => o }), s(47120);
var a,
    n = s(200651),
    i = s(192379);
function r(e, t, s) {
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
class o extends (a = i.PureComponent) {
    render() {
        let { tag: e, children: t, eventName: s, data: a, track: i, trackOutboundLink: r, ...o } = this.props;
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
            r(this, 'handleClick', (e) => {
                let { eventName: t, data: s, href: a, onClick: n, trackOutboundLink: i, track: r } = this.props;
                if ((s.googleAnalytics && i && (null != a ? i(a) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), n && n(e), !t)) return !1;
                r(t, s);
            });
    }
}
r(o, 'defaultProps', {
    tag: 'a',
    data: {}
});
