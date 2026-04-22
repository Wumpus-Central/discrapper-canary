s.d(t, { A: () => y });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(735438),
    o = s.n(i),
    c = s(317097),
    h = s(187322),
    d = s(827734),
    u = s(933832),
    p = s(235986),
    m = s(650583),
    C = s(330273),
    f = s(818050);
let A = o().memoize((e) => {
    let t = !1;
    if (null != e && (0, c.qt)(e)) {
        let s = (0, c.LX)(e);
        null != s && (t = 0.2 > (0, c.OK)(s));
    }
    return t ? d.A.unsafe_rawColors.BLACK.css : d.A.unsafe_rawColors.WHITE.css;
});
class g extends n.PureComponent {
    state = { color: A(this.props.color) };
    render() {
        let e,
            { selected: t, color: s, className: n, children: l } = this.props,
            i = A(s);
        return (
            t
                ? (e = { color: i, background: s ?? d.A.unsafe_rawColors.BRAND_500.css })
                : null != s && (e = { color: s }),
            (0, r.jsx)(h.vN, {
                offset: { left: 4 },
                children: (0, r.jsxs)(p.A, {
                    className: a()(C.OR, n, { [C.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: p.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, r.jsx)(p.A, { align: p.A.Align.CENTER, className: C.Ix, shrink: 1, children: l }),
                        t &&
                            (0, r.jsx)(p.A, {
                                wrap: p.A.Wrap.WRAP,
                                className: f.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, r.jsx)(u.A, { size: "md", color: i }),
                            }),
                    ],
                }),
            })
        );
    }
    handleKeyUp = (e) => {
        if (e.key === m.dh.ENTER || e.key === m.dh.SPACE) {
            let { onClick: e, ...t } = this.props;
            e(t);
        }
    };
    handleClick = () => {
        let { onClick: e, ...t } = this.props;
        e(t);
    };
}
let y = g;
