"use strict";
n.d(t, { $n: () => m, WS: () => p, XD: () => E, lO: () => h, pR: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(936504),
    l = n(765178),
    u = n(187322),
    d = n(289873),
    c = n(985018),
    _ = n(809657);
let f = { FILLED: _.WL, OUTLINED: _.uu, LINK: _.M_, BLANK: _.Ev },
    E = {
        BRAND: _.x8,
        BRAND_INVERTED: _.Qn,
        RED: _.D,
        GREEN: _.RH,
        PRIMARY: _.cG,
        LINK: _.I5,
        WHITE: _.bD,
        TRANSPARENT: _.Ey,
        CUSTOM: "",
    },
    h = { NONE: "", TINY: _.Ei, SMALL: _.g4, MEDIUM: _.$g, LARGE: _.Pu, MIN: _.CM, MAX: _.Gn, ICON: _.Rk };
function p() {
    let {
        look: e = f.FILLED,
        color: t = E.BRAND,
        size: n = h.MEDIUM,
        fullWidth: r = !1,
        grow: i = !0,
        submitting: s = !1,
        disabled: o = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return a()(_.x6, e, t, n, { [_.Ij]: r, [_.wS]: i, [_.B2]: s && !o });
}
function m(e) {
    let t,
        {
            look: n = f.FILLED,
            color: s = E.BRAND,
            size: o = h.MEDIUM,
            fullWidth: m = !1,
            grow: g = !0,
            disabled: A = !1,
            submitting: I = !1,
            type: T = "button",
            style: S,
            wrapperClassName: y,
            className: N,
            innerClassName: O,
            onClick: R,
            onDoubleClick: v,
            onMouseDown: C,
            onMouseUp: b,
            onMouseEnter: D,
            onMouseLeave: L,
            onKeyDown: w,
            children: M,
            rel: P,
            buttonRef: U,
            focusProps: k,
            "aria-label": x,
            submittingStartedLabel: G,
            submittingFinishedLabel: V,
            ...F
        } = e,
        B = A || I,
        H = B && (null != D || null != L),
        Y =
            ((t = k?.offset),
            n === f.LINK || n === f.BLANK
                ? t
                : null == t
                  ? -2
                  : "number" == typeof t
                    ? t + 2
                    : {
                          top: (t.top ?? 0) - 2,
                          right: (t.right ?? 0) - 2,
                          bottom: (t.bottom ?? 0) - 2,
                          left: (t.left ?? 0) - 2,
                      }),
        W = i.useRef(!1);
    i.useEffect(() => {
        !0 === I && ((W.current = !0), l.O.announce(G ?? c.intl.string(c.t.pfChQr))),
            !1 === I && !0 === W.current && l.O.announce(V ?? c.intl.string(c.t.SVParY));
    }, [I, G, V]);
    let j = (0, r.jsx)(u.vN, {
        ...k,
        offset: Y,
        children: (0, r.jsxs)("button", {
            ...(B ? null : F),
            "aria-label": x,
            "aria-busy": !!I || void 0,
            ref: U,
            onClick: B ? (e) => e.preventDefault() : R,
            onDoubleClick: B ? (e) => e.preventDefault() : v,
            onMouseUp: A ? void 0 : b,
            onMouseDown: A ? void 0 : C,
            onMouseEnter: D,
            onMouseLeave: L,
            onKeyDown: A ? void 0 : w,
            type: T,
            disabled: A,
            style: S,
            rel: P,
            className: a()(
                N,
                p({ look: n, color: s, size: o, fullWidth: m, grow: g, submitting: I, disabled: A }),
                H ? null : y,
            ),
            children: [
                I && !A
                    ? (0, r.jsx)(d.y, { type: d.y.Type.PULSING_ELLIPSIS, className: _.u1, itemClassName: _.$N })
                    : null,
                (0, r.jsx)("div", { className: a()(_.PG, O), children: M }),
            ],
        }),
    });
    return H
        ? (0, r.jsxs)("span", {
              className: a()(_.Yr, y, o, { [_.wS]: g, [_.Ij]: m }),
              children: [j, (0, r.jsx)("span", { onMouseEnter: D, onMouseLeave: L, className: _.p5 })],
          })
        : j;
}
(m.Looks = f),
    (m.Colors = E),
    (m.Sizes = h),
    (m.Link = function (e) {
        let {
            look: t = f.FILLED,
            color: n = E.BRAND,
            size: i = h.MEDIUM,
            fullWidth: s = !1,
            grow: l = !0,
            style: u,
            className: d,
            innerClassName: c,
            to: p,
            onClick: m,
            onMouseDown: g,
            onMouseUp: A,
            children: I,
            rel: T,
            ...S
        } = e;
        return (0, r.jsx)(o.N_, {
            ...S,
            to: p,
            onClick: m,
            onMouseUp: A,
            onMouseDown: g,
            style: u,
            rel: T,
            className: a()(d, _.x6, t, n, i, { [_.Ij]: s, [_.wS]: l }),
            children: (0, r.jsx)("span", { className: a()(_.PG, c), children: I }),
        });
    });
