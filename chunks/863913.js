n.d(t, {
    A: () => p,
    f: () => g,
});
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(615300),
    o = n(73939),
    d = n(209349);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
var g = (((r = {})[(r.RIGHT = -1)] = "RIGHT"), (r[(r.LEFT = 1)] = "LEFT"), r);
let b = {
    friction: 10,
    tension: 40,
    overshootClamping: !0,
};
class m extends l.PureComponent {
    componentWillEnter(e) {
        var t, n;
        null == (t = (n = this.props).onAnimationStart) || t.call(n),
            this._animated.setValue(-this.props.direction),
            c.A.spring(
                this._animated,
                f(
                    {
                        toValue: 0,
                    },
                    b,
                ),
            ).start(() => {
                var t, n;
                e(), null == (t = (n = this.props).onAnimationEnd) || t.call(n);
            });
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        c.A.spring(
            this._animated,
            f(
                {
                    toValue: this.props.direction,
                },
                b,
            ),
        ).start(e);
    }
    getStyle() {
        return c.A.accelerate({
            transform: [
                {
                    translateX: this._animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "-100%"],
                    }),
                },
            ],
        });
    }
    render() {
        return (0, i.jsx)(c.A.div, {
            style: this.getStyle(),
            className: d.A,
            children: this.props.children,
        });
    }
    constructor(e) {
        super(e), u(this, "_animated", void 0), (this._animated = new c.A.Value(-1 * e.direction));
    }
}
let p = (e) => {
    let { children: t, step: n, direction: r, className: l, onAnimationStart: s, onAnimationEnd: c } = e;
    return (0, i.jsx)(o.F, {
        component: "div",
        className: a()(d.Q, l),
        children: (0, i.jsx)(
            m,
            {
                direction: r,
                onAnimationStart: s,
                onAnimationEnd: c,
                children: t,
            },
            n,
        ),
    });
};
