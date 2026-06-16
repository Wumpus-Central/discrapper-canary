s.d(e, { A: () => d });
var n = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
    p = s(615300),
    r = s(844222),
    h = s(652215),
    c = s(471561);
class d extends a.Component {
    static contextType = r.C;
    anim = new p.A.Value(0);
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(t) {
        t.show !== this.props.show && this.animate(+!!this.props.show);
    }
    animate = (t) => {
        p.A.spring(this.anim, { toValue: t, friction: 10, tension: 100 }).start();
    };
    getAnimatedStyle() {
        let { anim: t } = this,
            { reducedMotion: e } = this.context;
        return {
            opacity: t,
            transform: e.enabled
                ? void 0
                : [
                      { translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["-100px", "0px"] }) },
                      { translateZ: 0 },
                  ],
        };
    }
    render() {
        return (0, n.jsx)(p.A.a, {
            href: h.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: o()(c.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
}
