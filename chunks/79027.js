r.d(n, {
    o: function () {
        return p;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(748780),
    d = r(481060),
    f = r(728767);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = {
    friction: 7,
    tension: 60
};
class p extends (i = o.Component) {
    componentWillAppear(e) {
        this.animateTo(1).start(e);
    }
    componentWillEnter(e) {
        this.animateTo(1).start(e);
    }
    componentWillLeave(e) {
        let { reducedMotion: n } = this.context;
        n.enabled ? this.animateTo(0).start(e) : c.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e);
    }
    animateTo(e) {
        return c.Z.spring(this.animation, {
            ...h,
            toValue: e
        });
    }
    getAnimatedStyle() {
        let { reducedMotion: e } = this.context;
        return c.Z.accelerate({
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
        let { className: e, children: n } = this.props;
        return (0, s.jsx)(c.Z.div, {
            className: u()(e, f.slider),
            style: this.getAnimatedStyle(),
            children: n
        });
    }
    constructor(...e) {
        super(...e), _(this, 'animation', new c.Z.Value(0));
    }
}
_(p, 'contextType', d.AccessibilityPreferencesContext);
