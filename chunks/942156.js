i.d(e, {
    A: () => p,
}),
    i(896048);
var s,
    n = i(627968),
    r = i(64700),
    a = i(503698),
    h = i.n(a),
    l = i(615300),
    o = i(397927),
    c = i(652215),
    d = i(505802);

function u(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
class p extends (s = r.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(t) {
        t.show !== this.props.show && this.animate(+!!this.props.show);
    }
    getAnimatedStyle() {
        let { anim: t } = this,
            { reducedMotion: e } = this.context;
        return {
            opacity: t,
            transform: e.enabled
                ? void 0
                : [
                      {
                          translateY: t.interpolate({
                              inputRange: [0, 1],
                              outputRange: ["-100px", "0px"],
                          }),
                      },
                      {
                          translateZ: 0,
                      },
                  ],
        };
    }
    render() {
        return (0, n.jsx)(l.A.a, {
            href: c.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: h()(d.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
    constructor(...t) {
        super(...t),
            u(this, "anim", new l.A.Value(0)),
            u(this, "animate", (t) => {
                l.A.spring(this.anim, {
                    toValue: t,
                    friction: 10,
                    tension: 100,
                }).start();
            });
    }
}
u(p, "contextType", o.CZY);
