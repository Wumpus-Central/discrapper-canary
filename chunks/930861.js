"use strict";
n.d(t, { kF: () => h, wL: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(421380),
    u = n(235986),
    c = n(713517),
    d = n(767997),
    _ = (function (e) {
        return (e.DEFAULT = "default"), (e.SMALL = "small"), e;
    })({});
let f = { default: d.hk, small: d.p$ },
    p = { default: d.VE, small: d.TY };
class h extends i.PureComponent {
    static defaultProps = { shineSize: "default" };
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
        return (0, r.jsx)(o.A.div, {
            ...i,
            className: a()(d.dj, e, { [d.EM]: n }),
            children: (0, r.jsx)(u.A, {
                align: u.A.Align.CENTER,
                justify: u.A.Justify.CENTER,
                className: f[t],
                children: (0, r.jsx)("div", { className: p[t] }),
            }),
        });
    }
}
let m = (e) => {
    let {
            children: t,
            className: n,
            disabled: s,
            submitting: o,
            pauseAnimation: u,
            shineSize: _ = "default",
            shinePaused: f,
            buttonShineClassName: p,
            onlyShineOnHover: m,
            ...E
        } = e,
        g = i.useRef(null),
        A = (0, c.M)(g),
        I = !s && !o && !0 !== u && (!m || A);
    return (0, r.jsxs)(l.$n, {
        "data-migration-pending": !0,
        buttonRef: g,
        ...E,
        className: a()(d.WE, n),
        disabled: s,
        submitting: o,
        children: [
            t,
            I
                ? (0, r.jsx)(h, {
                      "data-migration-pending": !0,
                      shinePaused: f,
                      className: a()(d.Qr, m ? d.PK : void 0, p),
                      shineSize: _,
                  })
                : null,
        ],
    });
};
m.ShineSizes = _;
