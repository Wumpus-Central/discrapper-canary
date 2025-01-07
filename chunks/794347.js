n.d(t, {
    _: function () {
        return p;
    }
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(692547),
    c = n(477690),
    d = n(162168),
    u = n(624138),
    g = n(261886);
function m(e, t, n) {
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
let f = (0, u.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH),
    p = Object.freeze({
        BLACK: g.black,
        GRAY: g.gray
    });
class _ extends (i = a.Component) {
    componentDidMount() {
        this.computeBars(), window.addEventListener('resize', this.computeBars);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.computeBars);
    }
    roundToNearestStep(e) {
        return Math.round(e / f) * f;
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
            className: g.wrapper,
            ref: this.sizerRef,
            children: (0, r.jsxs)('div', {
                className: l()(g.container, e),
                style: this.getGradientStyles(),
                children: [
                    (0, r.jsx)('div', {
                        className: g.progress,
                        style: this.getProgressStyles()
                    }),
                    0 !== n &&
                        (0, r.jsx)(d.Z, {
                            width: n,
                            className: l()(g.notches, t)
                        })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { barWidth: 0 }),
            m(this, 'sizerRef', a.createRef()),
            m(this, 'computeBars', () => {
                let { current: e } = this.sizerRef;
                this.setState({ barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0 });
            });
    }
}
m(_, 'defaultProps', {
    gradientStart: o.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: o.Z.unsafe_rawColors.GREEN_360.css
}),
    (t.Z = _);
