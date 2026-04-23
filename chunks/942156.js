"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(615300),
    o = n(844222),
    c = n(652215),
    d = n(471561);
class u extends s.Component {
    static contextType = o.C;
    anim = new a.A.Value(0);
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(+!!this.props.show);
    }
    animate = (e) => {
        a.A.spring(this.anim, { toValue: e, friction: 10, tension: 100 }).start();
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
        return (0, i.jsx)(a.A.a, {
            href: c.BVt.INDEX,
            target: "_blank",
            rel: "noopener",
            className: l()(d.w, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
}
