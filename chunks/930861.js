"use strict";
n.d(t, { kF: () => E, wL: () => m });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(615300),
    u = n(862482),
    c = n(235986),
    d = n(713517),
    _ = n(186710),
    h = (((i = {}).DEFAULT = "default"), (i.SMALL = "small"), i);
let f = { default: _.hk, small: _.p$ },
    p = { default: _.VE, small: _.TY };
class E extends s.PureComponent {
    static defaultProps = { shineSize: "default" };
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
        return (0, r.jsx)(l.A.div, {
            ...i,
            className: o()(_.dj, e, { [_.EM]: n }),
            children: (0, r.jsx)(c.A, {
                align: c.A.Align.CENTER,
                justify: c.A.Justify.CENTER,
                className: f[t],
                children: (0, r.jsx)("div", { className: p[t] }),
            }),
        });
    }
}
function m(e) {
    let {
            children: t,
            className: n,
            disabled: i,
            submitting: a,
            pauseAnimation: l,
            shineSize: c = "default",
            shinePaused: h,
            buttonShineClassName: f,
            onlyShineOnHover: p,
            ...m
        } = e,
        g = s.useRef(null),
        A = (0, d.M)(g),
        I = !i && !a && !0 !== l && (!p || A);
    return (0, r.jsxs)(u.$n, {
        "data-migration-pending": !0,
        buttonRef: g,
        ...m,
        className: o()(_.WE, n),
        disabled: i,
        submitting: a,
        children: [
            t,
            I
                ? (0, r.jsx)(E, {
                      "data-migration-pending": !0,
                      shinePaused: h,
                      className: o()(_.Qr, p ? _.PK : void 0, f),
                      shineSize: c,
                  })
                : null,
        ],
    });
}
m.ShineSizes = h;
