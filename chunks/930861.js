"use strict";
n.d(t, { kF: () => I, wL: () => f });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(615300),
    d = n(862482),
    c = n(235986),
    u = n(713517),
    _ = n(22350),
    E = (((i = {}).DEFAULT = "default"), (i.SMALL = "small"), i);
let A = { default: _.hk, small: _.p$ },
    h = { default: _.VE, small: _.TY };
class I extends a.PureComponent {
    static defaultProps = { shineSize: "default" };
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
        return (0, r.jsx)(o.A.div, {
            ...i,
            className: l()(_.dj, e, { [_.EM]: n }),
            children: (0, r.jsx)(c.A, {
                align: c.A.Align.CENTER,
                justify: c.A.Justify.CENTER,
                className: A[t],
                children: (0, r.jsx)("div", { className: h[t] }),
            }),
        });
    }
}
function f(e) {
    let {
            children: t,
            className: n,
            disabled: i,
            submitting: s,
            pauseAnimation: o,
            shineSize: c = "default",
            shinePaused: E,
            buttonShineClassName: A,
            onlyShineOnHover: h,
            ...f
        } = e,
        p = a.useRef(null),
        T = (0, u.M)(p),
        m = !i && !s && !0 !== o && (!h || T);
    return (0, r.jsxs)(d.$n, {
        "data-migration-pending": !0,
        buttonRef: p,
        ...f,
        className: l()(_.WE, n),
        disabled: i,
        submitting: s,
        children: [
            t,
            m
                ? (0, r.jsx)(I, {
                      "data-migration-pending": !0,
                      shinePaused: E,
                      className: l()(_.Qr, h ? _.PK : void 0, A),
                      shineSize: c,
                  })
                : null,
        ],
    });
}
f.ShineSizes = E;
