"use strict";
n.d(t, { F: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(397927),
    u = n(796032);
let c = { friction: 7, tension: 60 };
class d extends i.Component {
    static contextType = l.CZY;
    animation = new o.A.Value(0);
    componentWillAppear(e) {
        this.animateTo(1).start(e);
    }
    componentWillEnter(e) {
        this.animateTo(1).start(e);
    }
    componentWillLeave(e) {
        let { reducedMotion: t } = this.context;
        t.enabled ? this.animateTo(0).start(e) : o.A.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e);
    }
    animateTo(e) {
        return o.A.spring(this.animation, { ...c, toValue: e });
    }
    getAnimatedStyle() {
        let { reducedMotion: e } = this.context;
        return o.A.accelerate({
            opacity: this.animation,
            transform: e.enabled
                ? void 0
                : [{ translateY: this.animation.interpolate({ inputRange: [0, 1], outputRange: ["150%", "0%"] }) }],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, r.jsx)(o.A.div, { className: s()(e, u.a), style: this.getAnimatedStyle(), children: t });
    }
}
