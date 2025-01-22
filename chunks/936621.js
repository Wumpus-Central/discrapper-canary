r.d(n, {
    F: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(392711),
    u = r.n(l);
function c(e, n, r) {
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
class d extends a.Component {
    getDefaultAnimProps(e, n) {
        return {
            duration: null != e ? e : 300,
            progress: 0,
            last: Date.now(),
            intensity: null != n ? n : 5,
            lastDirection: -1,
            frameCount: 0
        };
    }
    componentWillUnmount() {
        this._animationCleanup();
    }
    shake(e, n) {
        if (((this.animProps = this.getDefaultAnimProps(e, n)), !this.state.shaking)) this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    render() {
        let { children: e, ...n } = this.props;
        return (0, i.jsx)('div', {
            ...n,
            ref: this.ref,
            children: e
        });
    }
    constructor(e) {
        super(e),
            c(this, 'animProps', void 0),
            c(this, '_animationFrame', void 0),
            c(this, 'ref', a.createRef()),
            c(this, '_animate', () => {
                let { animProps: e } = this;
                if (!this.state.shaking || e.progress > e.duration || null == this.ref.current) {
                    this._animationComplete();
                    return;
                }
                let n = Date.now();
                if (((e.progress += n - e.last), (e.last = n), e.frameCount % 2 != 0)) {
                    let n = e.lastDirection * e.intensity,
                        r = u().random(-e.intensity, e.intensity, !0),
                        i = Math.max(0, Math.cbrt(e.duration - e.progress / 1000));
                    (e.intensity *= Math.min(1, i)), (e.lastDirection *= -1), s()(null != this.ref.current, 'Shakeable style set when not mounted'), (this.ref.current.style.transform = 'translate3d('.concat(n, 'px,').concat(r, 'px,0px)'));
                }
                (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
            }),
            c(this, '_animationCleanup', () => {
                null != this.ref.current && (this.ref.current.style.transform = ''), cancelAnimationFrame(this._animationFrame);
            }),
            (this.state = { shaking: !1 });
    }
}
