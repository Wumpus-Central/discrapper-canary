"use strict";
n.d(t, { $n: () => m, WS: () => h, XD: () => _, lO: () => f, pR: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(758879),
    l = n(158954),
    u = n(985018),
    c = n(134112);
let d = { FILLED: c.WL, OUTLINED: c.uu, LINK: c.M_, BLANK: c.Ev },
    _ = {
        BRAND: c.x8,
        BRAND_INVERTED: c.Qn,
        RED: c.D,
        GREEN: c.RH,
        PRIMARY: c.cG,
        LINK: c.I5,
        WHITE: c.bD,
        TRANSPARENT: c.Ey,
        CUSTOM: "",
    },
    f = { NONE: "", TINY: c.Ei, SMALL: c.g4, MEDIUM: c.$g, LARGE: c.Pu, MIN: c.CM, MAX: c.Gn, ICON: c.Rk };
function p(e, t) {
    let n = e?.offset;
    return t === d.LINK || t === d.BLANK
        ? n
        : null == n
          ? -2
          : "number" == typeof n
            ? n + 2
            : {
                  top: (n.top ?? 0) - 2,
                  right: (n.right ?? 0) - 2,
                  bottom: (n.bottom ?? 0) - 2,
                  left: (n.left ?? 0) - 2,
              };
}
function h() {
    let {
        look: e = d.FILLED,
        color: t = _.BRAND,
        size: n = f.MEDIUM,
        fullWidth: r = !1,
        grow: i = !0,
        submitting: a = !1,
        disabled: o = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(c.x6, e, t, n, { [c.Ij]: r, [c.wS]: i, [c.B2]: a && !o });
}
function m(e) {
    let {
            look: t = d.FILLED,
            color: n = _.BRAND,
            size: a = f.MEDIUM,
            fullWidth: o = !1,
            grow: m = !0,
            disabled: g = !1,
            submitting: E = !1,
            type: A = "button",
            style: I,
            wrapperClassName: T,
            className: y,
            innerClassName: S,
            onClick: v,
            onDoubleClick: C,
            onMouseDown: b,
            onMouseUp: N,
            onMouseEnter: R,
            onMouseLeave: O,
            onKeyDown: D,
            children: L,
            rel: w,
            buttonRef: x,
            focusProps: P,
            "aria-label": M,
            submittingStartedLabel: k,
            submittingFinishedLabel: U,
            ...G
        } = e,
        V = g || E,
        F = V && (null != R || null != O),
        B = F ? null : T,
        j = p(P, t),
        H = i.useRef(!1);
    i.useEffect(() => {
        !0 === E && ((H.current = !0), l.ORC.announce(k ?? u.intl.string(u.t.pfChQr))),
            !1 === E && !0 === H.current && l.ORC.announce(U ?? u.intl.string(u.t.SVParY));
    }, [E, k, U]);
    let Y = (0, r.jsx)(l.vN3, {
        ...P,
        offset: j,
        children: (0, r.jsxs)("button", {
            ...(V ? null : G),
            "aria-label": M,
            "aria-busy": !!E || void 0,
            ref: x,
            onClick: V ? (e) => e.preventDefault() : v,
            onDoubleClick: V ? (e) => e.preventDefault() : C,
            onMouseUp: g ? void 0 : N,
            onMouseDown: g ? void 0 : b,
            onMouseEnter: R,
            onMouseLeave: O,
            onKeyDown: g ? void 0 : D,
            type: A,
            disabled: g,
            style: I,
            rel: w,
            className: s()(y, h({ look: t, color: n, size: a, fullWidth: o, grow: m, submitting: E, disabled: g }), B),
            children: [
                E && !g
                    ? (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, className: c.u1, itemClassName: c.$N })
                    : null,
                (0, r.jsx)("div", { className: s()(c.PG, S), children: L }),
            ],
        }),
    });
    return F
        ? (0, r.jsxs)("span", {
              className: s()(c.Yr, T, a, { [c.wS]: m, [c.Ij]: o }),
              children: [Y, (0, r.jsx)("span", { onMouseEnter: R, onMouseLeave: O, className: c.p5 })],
          })
        : Y;
}
(m.Looks = d),
    (m.Colors = _),
    (m.Sizes = f),
    (m.Link = function (e) {
        let {
            look: t = d.FILLED,
            color: n = _.BRAND,
            size: i = f.MEDIUM,
            fullWidth: a = !1,
            grow: l = !0,
            style: u,
            className: p,
            innerClassName: h,
            to: m,
            onClick: g,
            onMouseDown: E,
            onMouseUp: A,
            children: I,
            rel: T,
            ...y
        } = e;
        return (0, r.jsx)(o.N_, {
            ...y,
            to: m,
            onClick: g,
            onMouseUp: A,
            onMouseDown: E,
            style: u,
            rel: T,
            className: s()(p, c.x6, t, n, i, { [c.Ij]: a, [c.wS]: l }),
            children: (0, r.jsx)("span", { className: s()(c.PG, h), children: I }),
        });
    });
