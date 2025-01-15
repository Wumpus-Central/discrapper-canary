n.d(t, {
    _: function () {
        return p;
    }
}),
    n(47120);
var i,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(692547),
    c = n(477690),
    d = n(162168),
    u = n(624138),
    m = n(508955);
function g(e, t, n) {
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
let h = (0, u.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH),
    p = Object.freeze({
        BLACK: m.black,
        GRAY: m.gray
    });
class x extends (i = s.Component) {
    componentDidMount() {
        this.computeBars(), window.addEventListener('resize', this.computeBars);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.computeBars);
    }
    roundToNearestStep(e) {
        return Math.round(e / h) * h;
    }
    getProgressStyles() {
        let { progress: e } = this.props,
            t = Math.max(0, Math.min(100, e)),
            { barWidth: n } = this.state,
            i = Math.abs(this.roundToNearestStep((n * (100 - t)) / 100) - n);
        return { transform: 'translateX('.concat(i, 'px)') };
    }
    getGradientStyles() {
        let { gradientEnd: e, gradientStart: t, progress: n } = this.props,
            { barWidth: i } = this.state;
        return {
            width: ''.concat(i, 'px'),
            background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(t, ', ').concat(e, ')')
        };
    }
    render() {
        let { className: e, notchBackground: t } = this.props,
            { barWidth: n } = this.state;
        return (0, r.jsx)('div', {
            className: m.wrapper,
            ref: this.sizerRef,
            children: (0, r.jsxs)('div', {
                className: l()(m.container, e),
                style: this.getGradientStyles(),
                children: [
                    (0, r.jsx)('div', {
                        className: m.progress,
                        style: this.getProgressStyles()
                    }),
                    0 !== n &&
                        (0, r.jsx)(d.Z, {
                            width: n,
                            className: l()(m.notches, t)
                        })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { barWidth: 0 }),
            g(this, 'sizerRef', s.createRef()),
            g(this, 'computeBars', () => {
                let { current: e } = this.sizerRef;
                this.setState({ barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0 });
            });
    }
}
g(x, 'defaultProps', {
    gradientStart: o.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: o.Z.unsafe_rawColors.GREEN_360.css
}),
    (t.Z = x);
