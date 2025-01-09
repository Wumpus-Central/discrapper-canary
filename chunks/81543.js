n.d(t, {
    n: function () {
        return r;
    }
});
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(748780),
    d = n(215569),
    u = n(400331);
((i = r || (r = {}))[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT');
let m = {
    friction: 10,
    tension: 40,
    overshootClamping: !0
};
class h extends s.PureComponent {
    componentWillEnter(e) {
        var t, n;
        null === (t = (n = this.props).onAnimationStart) || void 0 === t || t.call(n),
            this._animated.setValue(-this.props.direction),
            c.Z.spring(this._animated, {
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
        c.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...m
        }).start(e);
    }
    getStyle() {
        return c.Z.accelerate({
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
        return (0, l.jsx)(c.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (i = void 0),
            (n = '_animated') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
    }
}
t.Z = (e) => {
    let { children: t, step: n, direction: i, className: r, onAnimationStart: s, onAnimationEnd: a } = e;
    return (0, l.jsx)(d.W, {
        component: 'div',
        className: o()(u.animator, r),
        children: (0, l.jsx)(
            h,
            {
                direction: i,
                onAnimationStart: s,
                onAnimationEnd: a,
                children: t
            },
            n
        )
    });
};
