n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(793030),
    d = n(692547),
    f = n(481060),
    p = n(600164),
    _ = n(981631),
    m = n(261080),
    h = n(478411);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = l().memoize((e) => {
    let t = !1;
    if (null != e && (0, c.FX)(e)) {
        let n = (0, c._i)(e);
        null != n && (t = 0.2 > (0, c.Bd)(n));
    }
    return t ? d.Z.unsafe_rawColors.BLACK.css : d.Z.unsafe_rawColors.WHITE.css;
});
class v extends i.PureComponent {
    render() {
        let e,
            { selected: t, color: n, className: i, children: a } = this.props,
            s = O(n);
        return (
            t
                ? (e = {
                      color: s,
                      background: null != n ? n : d.Z.unsafe_rawColors.BRAND_500.css,
                  })
                : null != n && (e = { color: n }),
            (0, r.jsx)(u.tEY, {
                offset: { left: 4 },
                children: (0, r.jsxs)(p.Z, {
                    className: o()(m.selectableItem, i, { [m.selected]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: p.Z.Align.CENTER,
                    style: E({}, e, this.props.style),
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, r.jsx)(p.Z, {
                            align: p.Z.Align.CENTER,
                            className: m.selectableItemLabel,
                            shrink: 1,
                            children: a,
                        }),
                        t &&
                            (0, r.jsx)(p.Z, {
                                wrap: p.Z.Wrap.WRAP,
                                className: h.marginReset,
                                grow: 0,
                                shrink: 0,
                                children: (0, r.jsx)(f.dz2, {
                                    size: "md",
                                    color: s,
                                }),
                            }),
                    ],
                }),
            })
        );
    }
    constructor(...e) {
        super(...e),
            g(this, "state", { color: O(this.props.color) }),
            g(this, "handleKeyUp", (e) => {
                if (e.which === _.yXg.ENTER || e.which === _.yXg.SPACE) {
                    let e = this.props,
                        { onClick: t } = e;
                    t(b(e, ["onClick"]));
                }
            }),
            g(this, "handleClick", () => {
                let e = this.props,
                    { onClick: t } = e;
                t(b(e, ["onClick"]));
            });
    }
}
let S = v;
