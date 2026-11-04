var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(561028),
    o = n(765178),
    d = n(559106),
    c = n(289873),
    u = n(792996),
    _ = n(211182);
let E = { FILLED: _.WL, OUTLINED: _.uu, LINK: _.M_, BLANK: _.Ev },
    A = {
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
function f() {
    let {
        look: e = E.FILLED,
        color: t = A.BRAND,
        size: n = h.MEDIUM,
        fullWidth: i = !1,
        grow: r = !0,
        submitting: a = !1,
        disabled: l = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(_.x6, e, t, n, { [_.Ij]: i, [_.wS]: r, [_.B2]: a && !l });
}
function I(e) {
    let t,
        {
            look: n = E.FILLED,
            color: a = A.BRAND,
            size: l = h.MEDIUM,
            fullWidth: I = !1,
            grow: p = !0,
            disabled: m = !1,
            submitting: T = !1,
            type: g = "button",
            style: S,
            wrapperClassName: N,
            className: C,
            innerClassName: O,
            onClick: R,
            onDoubleClick: L,
            onMouseDown: y,
            onMouseUp: D,
            onMouseEnter: b,
            onMouseLeave: v,
            onKeyDown: P,
            children: M,
            rel: U,
            buttonRef: w,
            focusProps: G,
            "aria-label": x,
            submittingStartedLabel: k,
            submittingFinishedLabel: F,
            ...B
        } = e,
        V = m || T,
        H = V && (null != b || null != v),
        j =
            ((t = G?.offset),
            n === E.LINK || n === E.BLANK
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
        W = r.useRef(!1);
    r.useEffect(() => {
        (!0 === T && ((W.current = !0), o.O.announce(k ?? u.intl.string(u.t.pfChQr))),
            !1 === T && !0 === W.current && o.O.announce(F ?? u.intl.string(u.t.SVParY)));
    }, [T, k, F]);
    let Y = (0, i.jsx)(d.vN, {
        ...G,
        offset: j,
        children: (0, i.jsxs)("button", {
            ...(V ? null : B),
            "aria-label": x,
            "aria-busy": !!T || void 0,
            ref: w,
            onClick: V ? (e) => e.preventDefault() : R,
            onDoubleClick: V ? (e) => e.preventDefault() : L,
            onMouseUp: m ? void 0 : D,
            onMouseDown: m ? void 0 : y,
            onMouseEnter: b,
            onMouseLeave: v,
            onKeyDown: m ? void 0 : P,
            type: g,
            disabled: m,
            style: S,
            rel: U,
            className: s()(
                C,
                f({ look: n, color: a, size: l, fullWidth: I, grow: p, submitting: T, disabled: m }),
                H ? null : N,
            ),
            children: [
                T && !m
                    ? (0, i.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, className: _.u1, itemClassName: _.$N })
                    : null,
                (0, i.jsx)("div", { className: s()(_.PG, O), children: M }),
            ],
        }),
    });
    return H
        ? (0, i.jsxs)("span", {
              className: s()(_.Yr, N, l, { [_.wS]: p, [_.Ij]: I }),
              children: [Y, (0, i.jsx)("span", { onMouseEnter: b, onMouseLeave: v, className: _.p5 })],
          })
        : Y;
}
((I.Looks = E),
    (I.Colors = A),
    (I.Sizes = h),
    (I.Link = function (e) {
        let {
            look: t = E.FILLED,
            color: n = A.BRAND,
            size: r = h.MEDIUM,
            fullWidth: a = !1,
            grow: o = !0,
            style: d,
            className: c,
            innerClassName: u,
            to: f,
            onClick: I,
            onMouseDown: p,
            onMouseUp: m,
            children: T,
            rel: g,
            ...S
        } = e;
        return (0, i.jsx)(l.N_, {
            ...S,
            to: f,
            onClick: I,
            onMouseUp: m,
            onMouseDown: p,
            style: d,
            rel: g,
            className: s()(c, _.x6, t, n, r, { [_.Ij]: a, [_.wS]: o }),
            children: (0, i.jsx)("span", { className: s()(_.PG, u), children: T }),
        });
    }),
    n.d(t, {}, { $n: I, WS: f, XD: A, lO: h, pR: E }));
