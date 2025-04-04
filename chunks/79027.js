n.d(t, { o: () => m }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(748780),
    c = n(481060),
    u = n(881447);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
    friction: 7,
    tension: 60
};
class m extends (r = o.Component) {
    componentWillAppear(e) {
        this.animateTo(1).start(e);
    }
    componentWillEnter(e) {
        this.animateTo(1).start(e);
    }
    componentWillLeave(e) {
        let { reducedMotion: t } = this.context;
        t.enabled ? this.animateTo(0).start(e) : l.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e);
    }
    animateTo(e) {
        return l.Z.spring(this.animation, p(f({}, h), { toValue: e }));
    }
    getAnimatedStyle() {
        let { reducedMotion: e } = this.context;
        return l.Z.accelerate({
            opacity: this.animation,
            transform: e.enabled
                ? void 0
                : [
                      {
                          translateY: this.animation.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['150%', '0%']
                          })
                      }
                  ]
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsx)(l.Z.div, {
            className: s()(e, u.slider),
            style: this.getAnimatedStyle(),
            children: t
        });
    }
    constructor(...e) {
        super(...e), d(this, 'animation', new l.Z.Value(0));
    }
}
d(m, 'contextType', c.Sfi);
