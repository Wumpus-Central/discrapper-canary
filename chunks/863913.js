n.d(t, { A: () => h, f: () => u });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(615300),
    d = n(73939),
    c = n(641694),
    u = (((i = {})[(i.RIGHT = -1)] = "RIGHT"), (i[(i.LEFT = 1)] = "LEFT"), i);
let m = { friction: 10, tension: 40, overshootClamping: !0 };
class g extends s.PureComponent {
    _animated;
    constructor(e) {
        super(e), (this._animated = new o.A.Value(-1 * e.direction));
    }
    componentWillEnter(e) {
        this.props.onAnimationStart?.(),
            this._animated.setValue(-this.props.direction),
            o.A.spring(this._animated, { toValue: 0, ...m }).start(() => {
                e(), this.props.onAnimationEnd?.();
            });
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.A.spring(this._animated, { toValue: this.props.direction, ...m }).start(e);
    }
    getStyle() {
        return o.A.accelerate({
            transform: [
                { translateX: this._animated.interpolate({ inputRange: [0, 1], outputRange: ["0%", "-100%"] }) },
            ],
        });
    }
    render() {
        return (0, l.jsx)(o.A.div, { style: this.getStyle(), className: c.A, children: this.props.children });
    }
}
let h = (e) => {
    let { children: t, step: n, direction: i, className: s, onAnimationStart: r, onAnimationEnd: o } = e;
    return (0, l.jsx)(d.F, {
        component: "div",
        className: a()(c.Q, s),
        children: (0, l.jsx)(g, { direction: i, onAnimationStart: r, onAnimationEnd: o, children: t }, n),
    });
};
