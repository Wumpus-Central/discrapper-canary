n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(540026),
    u = n(388032),
    d = n(24008);
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
class p extends (r = o.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let { muted: e, value: t, maxValue: n } = this.props,
            r = this._mediaBar.current;
        null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n));
    }
    render() {
        let { iconClassName: e, iconColor: t, className: n, sliderWrapperClassName: r, sliderClassName: o, currentWindow: a, muted: f, minValue: p, maxValue: h, value: m, onVolumeShow: g, onVolumeHide: E } = this.props,
            { hovered: b, focused: y, dragging: v } = this.state,
            O = l.gj8;
        return (
            f || m === p ? (O = l.OyP) : m < h / 2 && (O = l.X2j),
            (0, i.jsxs)('div', {
                className: s()(n, d.container),
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
                    (0, i.jsx)('div', {
                        className: s()(d.volumeButtonSlider, r, { [d.sliderVisible]: b || y || v }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), _));
                        },
                        children: (0, i.jsx)(c.Z, {
                            sliderClassName: o,
                            type: c.Z.Types.VOLUME,
                            value: m / h,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: a,
                            ref: this._mediaBar
                        })
                    }),
                    (0, i.jsx)(l.zxk, {
                        className: d.volumeButton,
                        'aria-label': u.NW.string(u.t['19lt29']),
                        size: l.zxk.Sizes.NONE,
                        look: l.zxk.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, i.jsx)(O, {
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
            f(this, '_mediaBar', o.createRef()),
            f(this, '_hoverTimeout', void 0),
            f(this, 'state', {
                hovered: !1,
                focused: !1,
                dragging: !1
            }),
            f(this, 'handleValueChange', (e) => {
                let { maxValue: t, onValueChange: n } = this.props,
                    r = e * t;
                null == n || n(r);
            }),
            f(this, 'handleToggleMute', () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            f(this, 'handleKeyDown', (e) => {
                let { minValue: t, value: n, maxValue: r, onValueChange: i } = this.props,
                    o = 0.05 * (r - t);
                switch (e.key) {
                    case 'ArrowUp':
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(r, n + o));
                        break;
                    case 'ArrowDown':
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - o));
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
