(n.d(t, { Z: () => m }), n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(755721),
    c = n(481060),
    u = n(540026),
    d = n(388032),
    _ = n(24008);
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
let p = 150;
class h extends (r = a.PureComponent) {
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
        let { iconClassName: e, iconColor: t, className: n, sliderWrapperClassName: r, sliderClassName: a, currentWindow: o, muted: f, minValue: h, maxValue: m, value: g, onVolumeShow: E, onVolumeHide: b } = this.props,
            { hovered: y, focused: O, dragging: v } = this.state,
            I = c.gj8;
        return (
            f || g === h ? (I = c.OyP) : g < m / 2 && (I = c.X2j),
            (0, i.jsxs)('div', {
                className: s()(n, _.container),
                onMouseEnter: () => {
                    (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == E || E());
                },
                onMouseLeave: () => {
                    (clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            (this.setState({ hovered: !1 }), null == b || b());
                        }, p)));
                },
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, i.jsx)('div', {
                        className: s()(_.volumeButtonSlider, r, { [_.sliderVisible]: y || O || v }),
                        onMouseEnter: () => {
                            (clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }));
                        },
                        onMouseLeave: () => {
                            (clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), p)));
                        },
                        children: (0, i.jsx)(u.Z, {
                            sliderClassName: a,
                            type: u.Z.Types.VOLUME,
                            value: g / m,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: o,
                            ref: this._mediaBar
                        })
                    }),
                    (0, i.jsx)(l.zx, {
                        className: _.volumeButton,
                        'aria-label': d.intl.string(d.t['19lt29']),
                        size: l.zx.Sizes.NONE,
                        look: l.zx.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, i.jsx)(I, {
                            color: t,
                            className: e
                        })
                    })
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            f(this, '_mediaBar', a.createRef()),
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
                    a = 0.05 * (r - t);
                switch (e.key) {
                    case 'ArrowUp':
                        (e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(r, n + a)));
                        break;
                    case 'ArrowDown':
                        (e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - a)));
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
            }));
    }
}
f(h, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
});
let m = h;
