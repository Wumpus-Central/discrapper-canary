r.d(t, { A: () => p }), r(896048);
var a,
    n = r(627968),
    s = r(64700),
    i = r(503698),
    l = r.n(i),
    c = r(615300),
    o = r(397927),
    d = r(652215),
    u = r(505802);
function f(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class p extends (a = s.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(+!!this.props.show);
    }
    getAnimatedStyle() {
        let { anim: e } = this,
            { reducedMotion: t } = this.context;
        return {
            opacity: e,
            transform: t.enabled
                ? void 0
                : [
                      {
                          translateY: e.interpolate({
                              inputRange: [0, 1],
                              outputRange: ["-100px", "0px"],
                          }),
                      },
                      { translateZ: 0 },
                  ],
        };
    }
    render() {
        return (0, n.jsx)(c.A.a, {
            href: d.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: l()(u.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "anim", new c.A.Value(0)),
            f(this, "animate", (e) => {
                c.A.spring(this.anim, {
                    toValue: e,
                    friction: 10,
                    tension: 100,
                }).start();
            });
    }
}
f(p, "contextType", o.CZY);
