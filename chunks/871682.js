t.d(e, { F: () => c });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(615300),
    s = t(844222),
    o = t(225677);
let d = { friction: 7, tension: 60 };
class c extends n.Component {
    static contextType = s.C;
    animation = new i.A.Value(0);
    componentWillAppear(A) {
        this.animateTo(1).start(A);
    }
    componentWillEnter(A) {
        this.animateTo(1).start(A);
    }
    componentWillLeave(A) {
        let { reducedMotion: e } = this.context;
        e.enabled ? this.animateTo(0).start(A) : i.A.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(A);
    }
    animateTo(A) {
        return i.A.spring(this.animation, { ...d, toValue: A });
    }
    getAnimatedStyle() {
        let { reducedMotion: A } = this.context;
        return i.A.accelerate({
            opacity: this.animation,
            transform: A.enabled
                ? void 0
                : [{ translateY: this.animation.interpolate({ inputRange: [0, 1], outputRange: ["150%", "0%"] }) }],
        });
    }
    render() {
        let { className: A, children: e } = this.props;
        return (0, a.jsx)(i.A.div, { className: l()(A, o.a), style: this.getAnimatedStyle(), children: e });
    }
}
