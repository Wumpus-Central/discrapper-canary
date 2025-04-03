n.d(t, {
    Z: () => f,
    n: () => g
});
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(748780),
    c = n(215569),
    d = n(65187);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
var g = (((r = {})[(r.RIGHT = -1)] = 'RIGHT'), (r[(r.LEFT = 1)] = 'LEFT'), r);
let p = {
    friction: 10,
    tension: 40,
    overshootClamping: !0
};
class h extends s.PureComponent {
    componentWillEnter(e) {
        var t, n;
        null == (t = (n = this.props).onAnimationStart) || t.call(n),
            this._animated.setValue(-this.props.direction),
            o.Z.spring(this._animated, m({ toValue: 0 }, p)).start(() => {
                var t, n;
                e(), null == (t = (n = this.props).onAnimationEnd) || t.call(n);
            });
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.Z.spring(this._animated, m({ toValue: this.props.direction }, p)).start(e);
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
        return (0, i.jsx)(o.Z.div, {
            style: this.getStyle(),
            className: d.item,
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), u(this, '_animated', void 0), (this._animated = new o.Z.Value(-1 * e.direction));
    }
}
let f = (e) => {
    let { children: t, step: n, direction: r, className: s, onAnimationStart: a, onAnimationEnd: o } = e;
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: l()(d.animator, s),
        children: (0, i.jsx)(
            h,
            {
                direction: r,
                onAnimationStart: a,
                onAnimationEnd: o,
                children: t
            },
            n
        )
    });
};
