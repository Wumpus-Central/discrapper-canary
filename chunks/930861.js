"use strict";
n.d(t, { kF: () => p, wL: () => m });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(615300),
    u = n(862482),
    d = n(235986),
    c = n(713517),
    _ = n(186710),
    f = (((r = {}).DEFAULT = "default"), (r.SMALL = "small"), r);
let E = { default: _.hk, small: _.p$ },
    h = { default: _.VE, small: _.TY };
class p extends s.PureComponent {
    static defaultProps = { shineSize: "default" };
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
        return (0, i.jsx)(l.A.div, {
            ...r,
            className: o()(_.dj, e, { [_.EM]: n }),
            children: (0, i.jsx)(d.A, {
                align: d.A.Align.CENTER,
                justify: d.A.Justify.CENTER,
                className: E[t],
                children: (0, i.jsx)("div", { className: h[t] }),
            }),
        });
    }
}
let m = (e) => {
    let {
            children: t,
            className: n,
            disabled: r,
            submitting: a,
            pauseAnimation: l,
            shineSize: d = "default",
            shinePaused: f,
            buttonShineClassName: E,
            onlyShineOnHover: h,
            ...m
        } = e,
        g = s.useRef(null),
        A = (0, c.M)(g),
        I = !r && !a && !0 !== l && (!h || A);
    return (0, i.jsxs)(u.$n, {
        "data-migration-pending": !0,
        buttonRef: g,
        ...m,
        className: o()(_.WE, n),
        disabled: r,
        submitting: a,
        children: [
            t,
            I
                ? (0, i.jsx)(p, {
                      "data-migration-pending": !0,
                      shinePaused: f,
                      className: o()(_.Qr, h ? _.PK : void 0, E),
                      shineSize: d,
                  })
                : null,
        ],
    });
};
m.ShineSizes = f;
