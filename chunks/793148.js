var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(540026),
    f = r(388032),
    _ = r(712402);
function h(e, n, r) {
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
let p = 150;
class m extends (i = o.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let { muted: e, value: n, maxValue: r } = this.props,
            i = this._mediaBar.current;
        null != i && (e ? i.setGrabber(0) : i.setGrabber(n / r));
    }
    render() {
        let { iconClassName: e, iconColor: n, className: r, sliderWrapperClassName: i, sliderClassName: a, currentWindow: o, muted: l, minValue: h, maxValue: m, value: g, onVolumeShow: E, onVolumeHide: v } = this.props,
            { hovered: I, focused: T, dragging: b } = this.state,
            y = c.VoiceNormalIcon;
        return (
            l || g === h ? (y = c.VoiceXIcon) : g < m / 2 && (y = c.VoiceLowIcon),
            (0, s.jsxs)('div', {
                className: u()(r, _.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == E || E();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), null == v || v();
                        }, p));
                },
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, s.jsx)('div', {
                        className: u()(_.volumeButtonSlider, i, { [_.sliderVisible]: I || T || b }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), p));
                        },
                        children: (0, s.jsx)(d.Z, {
                            sliderClassName: a,
                            type: d.Z.Types.VOLUME,
                            value: g / m,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: o,
                            ref: this._mediaBar
                        })
                    }),
                    (0, s.jsx)(c.Button, {
                        className: _.volumeButton,
                        'aria-label': f.intl.string(f.t['19lt29']),
                        size: c.Button.Sizes.NONE,
                        look: c.Button.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, s.jsx)(y, {
                            color: n,
                            className: e
                        })
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            h(this, '_mediaBar', o.createRef()),
            h(this, '_hoverTimeout', void 0),
            h(this, 'state', {
                hovered: !1,
                focused: !1,
                dragging: !1
            }),
            h(this, 'handleValueChange', (e) => {
                let { maxValue: n, onValueChange: r } = this.props,
                    i = e * n;
                null == r || r(i);
            }),
            h(this, 'handleToggleMute', () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            h(this, 'handleKeyDown', (e) => {
                let { minValue: n, value: r, maxValue: i, onValueChange: a } = this.props,
                    s = 0.05 * (i - n);
                switch (e.key) {
                    case 'ArrowUp':
                        e.stopPropagation(), e.preventDefault(), null == a || a(Math.min(i, r + s));
                        break;
                    case 'ArrowDown':
                        e.stopPropagation(), e.preventDefault(), null == a || a(Math.max(n, r - s));
                }
            }),
            h(this, 'handleDragStart', () => {
                this.setState({ dragging: !0 });
            }),
            h(this, 'handleDragEnd', () => {
                this.setState({ dragging: !1 });
            }),
            h(this, 'blur', () => {
                this.setState({ focused: !1 });
            });
    }
}
h(m, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
}),
    (n.Z = m);
