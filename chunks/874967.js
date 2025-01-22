var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(866442),
    f = r(692547),
    p = r(84735),
    h = r(481060),
    _ = r(600164),
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
let y = c().memoize((e) => {
    let n = !1;
    if (null != e && (0, d.FX)(e)) {
        let r = (0, d._i)(e);
        null != r && (n = 0.2 > (0, d.Bd)(r));
    }
    return n ? f.Z.unsafe_rawColors.BLACK_500.css : f.Z.unsafe_rawColors.WHITE_500.css;
});
class b extends o.PureComponent {
    render() {
        let e;
        let { selected: n, color: r, className: i, children: o } = this.props,
            s = y(r);
        return (
            n
                ? (e = {
                      color: s,
                      background: null != r ? r : f.Z.unsafe_rawColors.BRAND_500.css
                  })
                : null != r && (e = { color: r }),
            (0, a.jsx)(p.t, {
                offset: { left: 4 },
                children: (0, a.jsxs)(_.Z, {
                    className: l()(g.selectableItem, i, { [g.selected]: n }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: _.Z.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: 'button',
                    tabIndex: 0,
                    children: [
                        (0, a.jsx)(_.Z, {
                            align: _.Z.Align.CENTER,
                            className: g.selectableItemLabel,
                            shrink: 1,
                            children: o
                        }),
                        n &&
                            (0, a.jsx)(_.Z, {
                                wrap: _.Z.Wrap.WRAP,
                                className: E.marginReset,
                                grow: 0,
                                shrink: 0,
                                children: (0, a.jsx)(h.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: s
                                })
                            })
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { color: y(this.props.color) }),
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
n.Z = b;
