n.d(t, {
    Z: () => g,
    n: () => u
});
var i,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(748780),
    c = n(215569),
    d = n(368267),
    u = (((i = {})[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT'), i);
let m = {
    friction: 10,
    tension: 40,
    overshootClamping: !0
};
class h extends l.PureComponent {
    componentWillEnter(e) {
        var t, n;
        null === (t = (n = this.props).onAnimationStart) || void 0 === t || t.call(n),
            this._animated.setValue(-this.props.direction),
            o.Z.spring(this._animated, {
                toValue: 0,
                ...m
            }).start(() => {
                var t, n;
                e(), null === (t = (n = this.props).onAnimationEnd) || void 0 === t || t.call(n);
            });
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...m
        }).start(e);
    }
    getStyle() {
        return o.Z.accelerate({
            transform: [
                {
                    translateX: this._animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '-100%']
                    })
                }
            ]
        });
    }
    render() {
        return (0, r.jsx)(o.Z.div, {
            style: this.getStyle(),
            className: d.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            (n = void 0),
            (t = '_animated') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this._animated = new o.Z.Value(-1 * e.direction));
    }
}
let g = (e) => {
    let { children: t, step: n, direction: i, className: l, onAnimationStart: s, onAnimationEnd: o } = e;
    return (0, r.jsx)(c.W, {
        component: 'div',
        className: a()(d.animator, l),
        children: (0, r.jsx)(
            h,
            {
                direction: i,
                onAnimationStart: s,
                onAnimationEnd: o,
                children: t
            },
            n
        )
    });
};
