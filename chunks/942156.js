"use strict";
a.d(t, { A: () => u });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    l = a(615300),
    o = a(397927),
    c = a(652215),
    d = a(505802);
class u extends r.Component {
    static contextType = o.CZY;
    anim = new l.A.Value(0);
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(+!!this.props.show);
    }
    animate = (e) => {
        l.A.spring(this.anim, { toValue: e, friction: 10, tension: 100 }).start();
    };
    getAnimatedStyle() {
        let { anim: e } = this,
            { reducedMotion: t } = this.context;
        return {
            opacity: e,
            transform: t.enabled
                ? void 0
                : [
                      { translateY: e.interpolate({ inputRange: [0, 1], outputRange: ["-100px", "0px"] }) },
                      { translateZ: 0 },
                  ],
        };
    }
    render() {
        return (0, s.jsx)(l.A.a, {
            href: c.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: i()(d.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
}
