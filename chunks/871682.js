a.d(e, { F: () => h });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    o = a.n(s),
    r = a(615300),
    l = a(844222),
    p = a(6349);
let c = { friction: 7, tension: 60 };
class h extends i.Component {
    static contextType = l.C;
    animation = new r.A.Value(0);
    componentWillAppear(t) {
        this.animateTo(1).start(t);
    }
    componentWillEnter(t) {
        this.animateTo(1).start(t);
    }
    componentWillLeave(t) {
        let { reducedMotion: e } = this.context;
        e.enabled ? this.animateTo(0).start(t) : r.A.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(t);
    }
    animateTo(t) {
        return r.A.spring(this.animation, { ...c, toValue: t });
    }
    getAnimatedStyle() {
        let { reducedMotion: t } = this.context;
        return r.A.accelerate({
            opacity: this.animation,
            transform: t.enabled
                ? void 0
                : [{ translateY: this.animation.interpolate({ inputRange: [0, 1], outputRange: ["150%", "0%"] }) }],
        });
    }
    render() {
        let { className: t, children: e } = this.props;
        return (0, n.jsx)(r.A.div, { className: o()(t, p.a), style: this.getAnimatedStyle(), children: e });
    }
}
