n.d(t, { F: () => c });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o);
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
class c extends r.Component {
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
        (this.animProps = this.getDefaultAnimProps(e, t)), !this.state.shaking && this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    render() {
        let { children: e, ...t } = this.props;
        return (0, i.jsx)('div', {
            ...t,
            ref: this.ref,
            children: e
        });
    }
    constructor(e) {
        super(e),
            u(this, 'animProps', void 0),
            u(this, '_animationFrame', void 0),
            u(this, 'ref', r.createRef()),
            u(this, '_animate', () => {
                let { animProps: e } = this;
                if (!this.state.shaking || e.progress > e.duration || null == this.ref.current) {
                    this._animationComplete();
                    return;
                }
                let t = Date.now();
                if (((e.progress += t - e.last), (e.last = t), e.frameCount % 2 != 0)) {
                    let t = e.lastDirection * e.intensity,
                        n = l().random(-e.intensity, e.intensity, !0),
                        i = Math.max(0, Math.cbrt(e.duration - e.progress / 1000));
                    (e.intensity *= Math.min(1, i)), (e.lastDirection *= -1), s()(null != this.ref.current, 'Shakeable style set when not mounted'), (this.ref.current.style.transform = 'translate3d('.concat(t, 'px,').concat(n, 'px,0px)'));
                }
                (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
            }),
            u(this, '_animationCleanup', () => {
                null != this.ref.current && (this.ref.current.style.transform = ''), cancelAnimationFrame(this._animationFrame);
            }),
            (this.state = { shaking: !1 });
    }
}
