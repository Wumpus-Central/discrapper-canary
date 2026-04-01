"use strict";
n.d(t, { $n: () => m, WS: () => h, XD: () => _, lO: () => f, pR: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936504),
    l = n(158954),
    u = n(985018),
    c = n(661321);
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
        submitting: s = !1,
        disabled: o = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return a()(c.x6, e, t, n, { [c.Ij]: r, [c.wS]: i, [c.B2]: s && !o });
}
function m(e) {
    let {
            look: t = d.FILLED,
            color: n = _.BRAND,
            size: s = f.MEDIUM,
            fullWidth: o = !1,
            grow: m = !0,
            disabled: E = !1,
            submitting: g = !1,
            type: A = "button",
            style: I,
            wrapperClassName: T,
            className: S,
            innerClassName: y,
            onClick: v,
            onDoubleClick: N,
            onMouseDown: C,
            onMouseUp: R,
            onMouseEnter: O,
            onMouseLeave: b,
            onKeyDown: D,
            children: L,
            rel: w,
            buttonRef: M,
            focusProps: P,
            "aria-label": x,
            submittingStartedLabel: k,
            submittingFinishedLabel: U,
            ...G
        } = e,
        F = E || g,
        V = F && (null != O || null != b),
        B = V ? null : T,
        H = p(P, t),
        j = i.useRef(!1);
    i.useEffect(() => {
        !0 === g && ((j.current = !0), l.ORC.announce(k ?? u.intl.string(u.t.pfChQr))),
            !1 === g && !0 === j.current && l.ORC.announce(U ?? u.intl.string(u.t.SVParY));
    }, [g, k, U]);
    let Y = (0, r.jsx)(l.vN3, {
        ...P,
        offset: H,
        children: (0, r.jsxs)("button", {
            ...(F ? null : G),
            "aria-label": x,
            "aria-busy": !!g || void 0,
            ref: M,
            onClick: F ? (e) => e.preventDefault() : v,
            onDoubleClick: F ? (e) => e.preventDefault() : N,
            onMouseUp: E ? void 0 : R,
            onMouseDown: E ? void 0 : C,
            onMouseEnter: O,
            onMouseLeave: b,
            onKeyDown: E ? void 0 : D,
            type: A,
            disabled: E,
            style: I,
            rel: w,
            className: a()(S, h({ look: t, color: n, size: s, fullWidth: o, grow: m, submitting: g, disabled: E }), B),
            children: [
                g && !E
                    ? (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, className: c.u1, itemClassName: c.$N })
                    : null,
                (0, r.jsx)("div", { className: a()(c.PG, y), children: L }),
            ],
        }),
    });
    return V
        ? (0, r.jsxs)("span", {
              className: a()(c.Yr, T, s, { [c.wS]: m, [c.Ij]: o }),
              children: [Y, (0, r.jsx)("span", { onMouseEnter: O, onMouseLeave: b, className: c.p5 })],
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
            fullWidth: s = !1,
            grow: l = !0,
            style: u,
            className: p,
            innerClassName: h,
            to: m,
            onClick: E,
            onMouseDown: g,
            onMouseUp: A,
            children: I,
            rel: T,
            ...S
        } = e;
        return (0, r.jsx)(o.N_, {
            ...S,
            to: m,
            onClick: E,
            onMouseUp: A,
            onMouseDown: g,
            style: u,
            rel: T,
            className: a()(p, c.x6, t, n, i, { [c.Ij]: s, [c.wS]: l }),
            children: (0, r.jsx)("span", { className: a()(c.PG, h), children: I }),
        });
    });
