n.d(t, { F: () => h });
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(392711),
    l = n.n(s);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class h extends i.Component {
    getDefaultAnimProps(e, t) {
        return {
            duration: null != e ? e : 300,
            progress: 0,
            last: Date.now(),
            intensity: null != t ? t : 5,
            lastDirection: -1,
            frameCount: 0
        };
    }
    componentWillUnmount() {
        this._animationCleanup();
    }
    shake(e, t) {
        (this.animProps = this.getDefaultAnimProps(e, t)), this.state.shaking || this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    render() {
        let e = this.props,
            { children: t } = e,
            n = _(e, ['children']);
        return (0, r.jsx)(
            'div',
            f(u({}, n), {
                ref: this.ref,
                children: t
            })
        );
    }
    constructor(e) {
        super(e),
            c(this, 'animProps', void 0),
            c(this, '_animationFrame', void 0),
            c(this, 'ref', i.createRef()),
            c(this, '_animate', () => {
                let { animProps: e } = this;
                if (!this.state.shaking || e.progress > e.duration || null == this.ref.current) return void this._animationComplete();
                let t = Date.now();
                if (((e.progress += t - e.last), (e.last = t), e.frameCount % 2 != 0)) {
                    let t = e.lastDirection * e.intensity,
                        n = l().random(-e.intensity, e.intensity, !0),
                        r = Math.max(0, Math.cbrt(e.duration - e.progress / 1000));
                    (e.intensity *= Math.min(1, r)), (e.lastDirection *= -1), a()(null != this.ref.current, 'Shakeable style set when not mounted'), (this.ref.current.style.transform = 'translate3d('.concat(t, 'px,').concat(n, 'px,0px)'));
                }
                (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
            }),
            c(this, '_animationCleanup', () => {
                null != this.ref.current && (this.ref.current.style.transform = ''), cancelAnimationFrame(this._animationFrame);
            }),
            (this.state = { shaking: !1 });
    }
}
