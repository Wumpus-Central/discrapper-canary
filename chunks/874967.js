var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(866442),
    f = r(692547),
    _ = r(84735),
    h = r(481060),
    p = r(600164),
    m = r(981631),
    g = r(863192),
    E = r(232186);
function v(e, n, r) {
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
let I = c().memoize((e) => {
    let n = !1;
    if (null != e && (0, d.FX)(e)) {
        let r = (0, d._i)(e);
        null != r && (n = 0.2 > (0, d.Bd)(r));
    }
    return n ? f.Z.unsafe_rawColors.BLACK_500.css : f.Z.unsafe_rawColors.WHITE_500.css;
});
class T extends s.PureComponent {
    render() {
        let e;
        let { selected: n, color: r, className: i, children: s } = this.props,
            o = I(r);
        return (
            n
                ? (e = {
                      color: o,
                      background: null != r ? r : f.Z.unsafe_rawColors.BRAND_500.css
                  })
                : null != r && (e = { color: r }),
            (0, a.jsx)(_.t, {
                offset: { left: 4 },
                children: (0, a.jsxs)(p.Z, {
                    className: l()(g.selectableItem, i, { [g.selected]: n }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: p.Z.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: 'button',
                    tabIndex: 0,
                    children: [
                        (0, a.jsx)(p.Z, {
                            align: p.Z.Align.CENTER,
                            className: g.selectableItemLabel,
                            shrink: 1,
                            children: s
                        }),
                        n &&
                            (0, a.jsx)(p.Z, {
                                wrap: p.Z.Wrap.WRAP,
                                className: E.marginReset,
                                grow: 0,
                                shrink: 0,
                                children: (0, a.jsx)(h.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: o
                                })
                            })
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { color: I(this.props.color) }),
            v(this, 'handleKeyUp', (e) => {
                if (e.which === m.yXg.ENTER || e.which === m.yXg.SPACE) {
                    let { onClick: e, ...n } = this.props;
                    e(n);
                }
            }),
            v(this, 'handleClick', () => {
                let { onClick: e, ...n } = this.props;
                e(n);
            });
    }
}
n.Z = T;
