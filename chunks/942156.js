i.d(e, { A: () => c });
var s = i(627968),
    n = i(64700),
    a = i(503698),
    h = i.n(a),
    l = i(615300),
    r = i(397927),
    o = i(652215),
    d = i(722392);
class c extends n.Component {
    static contextType = r.CZY;
    anim = new l.A.Value(0);
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(t) {
        t.show !== this.props.show && this.animate(+!!this.props.show);
    }
    animate = (t) => {
        l.A.spring(this.anim, { toValue: t, friction: 10, tension: 100 }).start();
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
        return (0, s.jsx)(l.A.a, {
            href: o.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: h()(d.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
}
