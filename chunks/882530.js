"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(317097),
    c = n(158954),
    d = n(827734),
    _ = n(397927),
    f = n(235986),
    p = n(650583),
    h = n(330273),
    m = n(818050);
let E = l().memoize((e) => {
    let t = !1;
    if (null != e && (0, u.qt)(e)) {
        let n = (0, u.LX)(e);
        null != n && (t = 0.2 > (0, u.OK)(n));
    }
    return t ? d.A.unsafe_rawColors.BLACK.css : d.A.unsafe_rawColors.WHITE.css;
});
class g extends i.PureComponent {
    state = { color: E(this.props.color) };
    render() {
        let e,
            { selected: t, color: n, className: i, children: s } = this.props,
            o = E(n);
        return (
            t
                ? (e = { color: o, background: n ?? d.A.unsafe_rawColors.BRAND_500.css })
                : null != n && (e = { color: n }),
            (0, r.jsx)(c.vN3, {
                offset: { left: 4 },
                children: (0, r.jsxs)(f.A, {
                    className: a()(h.OR, i, { [h.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: f.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, r.jsx)(f.A, { align: f.A.Align.CENTER, className: h.Ix, shrink: 1, children: s }),
                        t &&
                            (0, r.jsx)(f.A, {
                                wrap: f.A.Wrap.WRAP,
                                className: m.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, r.jsx)(_.A9s, { size: "md", color: o }),
                            }),
                    ],
                }),
            })
        );
    }
    handleKeyUp = (e) => {
        if (e.key === p.dh.ENTER || e.key === p.dh.SPACE) {
            let { onClick: e, ...t } = this.props;
            e(t);
        }
    };
    handleClick = () => {
        let { onClick: e, ...t } = this.props;
        e(t);
    };
}
let A = g;
