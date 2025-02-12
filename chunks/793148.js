n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(540026),
    c = n(388032),
    d = n(761535);
function f(e, t, n) {
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
let _ = 150;
class p extends (i = a.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let { muted: e, value: t, maxValue: n } = this.props,
            i = this._mediaBar.current;
        null != i && (e ? i.setGrabber(0) : i.setGrabber(t / n));
    }
    render() {
        let { iconClassName: e, iconColor: t, className: n, sliderWrapperClassName: i, sliderClassName: a, currentWindow: s, muted: f, minValue: p, maxValue: h, value: m, onVolumeShow: g, onVolumeHide: E } = this.props,
            { hovered: v, focused: y, dragging: I } = this.state,
            T = l.gj8;
        return (
            f || m === p ? (T = l.OyP) : m < h / 2 && (T = l.X2j),
            (0, r.jsxs)('div', {
                className: o()(n, d.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == g || g();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), null == E || E();
                        }, _));
                },
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(d.volumeButtonSlider, i, { [d.sliderVisible]: v || y || I }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), _));
                        },
                        children: (0, r.jsx)(u.Z, {
                            sliderClassName: a,
                            type: u.Z.Types.VOLUME,
                            value: m / h,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: s,
                            ref: this._mediaBar
                        })
                    }),
                    (0, r.jsx)(l.zxk, {
                        className: d.volumeButton,
                        'aria-label': c.intl.string(c.t['19lt29']),
                        size: l.zxk.Sizes.NONE,
                        look: l.zxk.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, r.jsx)(T, {
                            color: t,
                            className: e
                        })
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            f(this, '_mediaBar', a.createRef()),
            f(this, '_hoverTimeout', void 0),
            f(this, 'state', {
                hovered: !1,
                focused: !1,
                dragging: !1
            }),
            f(this, 'handleValueChange', (e) => {
                let { maxValue: t, onValueChange: n } = this.props,
                    i = e * t;
                null == n || n(i);
            }),
            f(this, 'handleToggleMute', () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            f(this, 'handleKeyDown', (e) => {
                let { minValue: t, value: n, maxValue: i, onValueChange: r } = this.props,
                    a = 0.05 * (i - t);
                switch (e.key) {
                    case 'ArrowUp':
                        e.stopPropagation(), e.preventDefault(), null == r || r(Math.min(i, n + a));
                        break;
                    case 'ArrowDown':
                        e.stopPropagation(), e.preventDefault(), null == r || r(Math.max(t, n - a));
                }
            }),
            f(this, 'handleDragStart', () => {
                this.setState({ dragging: !0 });
            }),
            f(this, 'handleDragEnd', () => {
                this.setState({ dragging: !1 });
            }),
            f(this, 'blur', () => {
                this.setState({ focused: !1 });
            });
    }
}
f(p, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
});
let h = p;
