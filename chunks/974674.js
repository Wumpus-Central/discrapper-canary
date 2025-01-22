r.d(n, {
    Vq: function () {
        return O;
    },
    Xo: function () {
        return G;
    },
    qE: function () {
        return M;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(642128),
    d = r(1561),
    f = r(438784),
    p = r(696826),
    h = r(981729),
    _ = r(481060),
    m = r(686546),
    g = r(51144),
    E = r(182294),
    v = r(981631),
    y = r(419061),
    b = r(388032),
    I = r(704293);
let T = {
    tension: 1200,
    friction: 70
};
function S() {
    return document.hasFocus();
}
function A(e) {
    let { size: n, isMobile: r, isTyping: i, ...a } = e,
        s = (0, E.UC)(n),
        l = s.status * (r && !i ? E.EW : 1),
        u = s.status * (i ? E.D6 : 1),
        c = i ? (s.status * E.D6 - s.status) / 2 : 0,
        d = s.size - s.status - c - s.offset,
        f = s.size - l - s.offset;
    return (0, o.jsx)('rect', {
        x: d,
        y: f,
        width: u,
        height: l,
        fill: 'transparent',
        'aria-hidden': !0,
        ...a
    });
}
function C(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != n
        ? b.intl.formatToPlainString(b.t['/6mw19'], {
              label: e,
              status: (0, g.u5)(n, r)
          })
        : e;
}
function N(e, n, r, i) {
    if (null == e) return null;
    if (i)
        switch (n) {
            case E.EF.SIZE_16:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case E.EF.SIZE_80:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case E.EF.SIZE_120:
                return m.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (r)
        switch (n) {
            case E.EF.SIZE_16:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case E.EF.SIZE_80:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case E.EF.SIZE_120:
                return m.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (n) {
        case E.EF.SIZE_16:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case E.EF.SIZE_80:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case E.EF.SIZE_120:
            return m.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function R(e, n, r, i) {
    if (null == e) return m.QS.AVATAR_DEFAULT;
    if (i)
        switch (n) {
            case E.EF.SIZE_16:
                return m.QS.AVATAR_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return m.QS.AVATAR_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return m.QS.AVATAR_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return m.QS.AVATAR_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return m.QS.AVATAR_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return m.QS.AVATAR_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return m.QS.AVATAR_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return m.QS.AVATAR_STATUS_TYPING_56;
            case E.EF.SIZE_80:
                return m.QS.AVATAR_STATUS_TYPING_80;
            case E.EF.SIZE_120:
                return m.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === v.Skl.ONLINE && r)
        switch (n) {
            case E.EF.SIZE_16:
                return m.QS.AVATAR_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return m.QS.AVATAR_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return m.QS.AVATAR_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return m.QS.AVATAR_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return m.QS.AVATAR_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return m.QS.AVATAR_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return m.QS.AVATAR_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return m.QS.AVATAR_STATUS_MOBILE_56;
            case E.EF.SIZE_80:
                return m.QS.AVATAR_STATUS_MOBILE_80;
            case E.EF.SIZE_120:
                return m.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (n) {
        case E.EF.SIZE_16:
            return m.QS.AVATAR_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return m.QS.AVATAR_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return m.QS.AVATAR_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return m.QS.AVATAR_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return m.QS.AVATAR_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return m.QS.AVATAR_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return m.QS.AVATAR_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return m.QS.AVATAR_STATUS_ROUND_56;
        case E.EF.SIZE_80:
            return m.QS.AVATAR_STATUS_ROUND_80;
        case E.EF.SIZE_120:
            return m.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        'getMaskId(): Unsupported type, size: '
            .concat(n, ', status: ')
            .concat(e, ', isMobile: ')
            .concat(r ? 'true' : 'false')
    );
}
function O(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = (0, p.W5)(e.status, n, r, i),
        o = (i ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return {
        ...a,
        x: o,
        y: e.size - a.height - e.offset
    };
}
function D(e, n, r) {
    let { size: i, status: a, stroke: o, offset: s } = e,
        l = r ? a * E.D6 : a,
        u = (l - a) / 2,
        c = n ? a * E.EW : a;
    return {
        avatarCutoutX: i - l + u - o - s,
        avatarCutoutY: i - c - o - s,
        avatarCutoutWidth: l + 2 * o,
        avatarCutoutHeight: c + 2 * o,
        avatarCutoutRadius: n ? (c + 2 * o) * E.ZC : (a + 2 * o) / 2
    };
}
function L(e, n, r, i) {
    let a = O(r, i, n, !1),
        s = (0, p.lm)(i, e);
    if (!n) {
        let n = a.height / 2 + r.stroke,
            i = a.x + r.status / 2;
        return (0, o.jsx)('circle', {
            style: { opacity: s },
            fill: e,
            r: n,
            cx: i,
            cy: i
        });
    }
    let l = a.height + 2 * r.stroke,
        u = a.width + 2 * r.stroke,
        c = a.x - r.stroke,
        d = a.y - r.stroke;
    return (0, o.jsx)('rect', {
        fill: e,
        height: l,
        width: u,
        style: { opacity: s },
        x: c,
        y: d,
        rx: r.stroke
    });
}
function x(e) {
    let { status: n, isMobile: r, isTyping: i, size: a } = e,
        o = r && !i && n === v.Skl.ONLINE,
        s = (0, E.UC)(a);
    return {
        ...D(s, o, i),
        ...(0, p.Dk)({
            status: n,
            size: s.status,
            isMobile: o,
            isTyping: i,
            topOffset: 2,
            leftOffset: 6
        })
    };
}
function w(e) {
    let { children: n, size: r, onClick: i, onMouseDown: a, onKeyDown: s, onContextMenu: l, onMouseEnter: c, onMouseLeave: f, className: p, tabIndex: h, ariaLabel: _, ariaHidden: m, status: g, isMobile: v = !1, isTyping: b = !1, avatarDecoration: T, typingOffset: S, specs: A } = e,
        R = {
            width: (0, E.px)(r),
            height: (0, E.px)(r)
        },
        O = null == _ || m ? void 0 : C(_, g, v),
        D = A.size * y.hs,
        L = N(g, r, v, b),
        x =
            null != T &&
            (0, o.jsx)('svg', {
                width: D + S,
                height: D,
                viewBox: '0 0 '.concat(D + S, ' ').concat(D),
                className: I.avatarDecoration,
                'aria-hidden': !0,
                children: (0, o.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? 'url(#'.concat(L, ')') : void 0,
                    children: (0, o.jsx)('div', {
                        className: I.avatarStack,
                        children: (0, o.jsx)('img', {
                            className: I.avatar,
                            src: T,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != i || null != a
        ? (0, o.jsxs)(d.P, {
              className: u()(I.wrapper, I.pointer, p),
              style: R,
              onClick: i,
              tabIndex: h,
              onContextMenu: l,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != f ? f : void 0,
              'aria-label': O,
              'aria-hidden': m,
              children: [n, x]
          })
        : (0, o.jsxs)('div', {
              className: u()(I.wrapper, p),
              style: R,
              onContextMenu: null != l ? l : void 0,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != f ? f : void 0,
              role: 'img',
              'aria-label': O,
              'aria-hidden': m,
              children: [n, x]
          });
}
function P(e) {
    let { src: n, isSpeaking: r, className: i } = e;
    return (0, o.jsxs)(
        'div',
        {
            className: u()(I.avatarStack, i),
            children: [
                (0, o.jsx)('img', {
                    src: null != n ? n : void 0,
                    alt: ' ',
                    className: I.avatar,
                    'aria-hidden': !0
                }),
                r && (0, o.jsx)('div', { className: I.avatarSpeaking })
            ]
        },
        n
    );
}
function M(e) {
    let { src: n, status: r, size: i, statusColor: a, isMobile: s = !1, isTyping: l = !1, typingIndicatorRef: c, isSpeaking: d = !1, statusTooltip: _ = !1, statusTooltipDelay: m, statusBackdropColor: y, 'aria-hidden': b = !1, 'aria-label': T, imageClassName: S } = e,
        A = r !== v.Skl.UNKNOWN ? r : null,
        C = (0, E.UC)(i),
        N = null != A ? Math.ceil((C.status * E.D6 - C.status) / 2) : 0,
        D = C.size + N,
        x = (0, p.vj)(A, a);
    return (0, o.jsx)(w, {
        ...e,
        ariaLabel: T,
        ariaHidden: b,
        status: A,
        specs: C,
        typingOffset: N,
        children: (0, o.jsxs)('svg', {
            width: D,
            height: D,
            viewBox: '0 0 '.concat(D, ' ').concat(D),
            className: u()(I.mask, I.svg),
            'aria-hidden': !0,
            children: [
                (0, o.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: C.size,
                    height: C.size,
                    mask: 'url(#'.concat(R(A, i, s, l), ')'),
                    children: (0, o.jsx)(P, {
                        src: n,
                        isSpeaking: d,
                        className: S
                    })
                }),
                null != A && null != y ? L(y, s, C, A) : null,
                null != A
                    ? (0, o.jsx)(h.u, {
                          text: _ ? (0, g.u5)(A) : null,
                          'aria-label': !1,
                          position: 'top',
                          spacing: 5 + 1.5 * C.stroke,
                          delay: m,
                          children: (e) =>
                              (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)('rect', {
                                          ...e,
                                          ...O(C, A, s, l),
                                          fill: x,
                                          mask: 'url(#'.concat((0, p.rs)(A, s, l), ')'),
                                          className: I.pointerEvents
                                      }),
                                      l
                                          ? (0, o.jsx)(f.b, {
                                                ref: c,
                                                dotRadius: C.status / 4,
                                                x: C.size - 1.375 * C.status - C.offset,
                                                y: C.size - C.status / 1.333 - C.offset
                                            })
                                          : null
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
function k(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (r && !i ? 0 : 0.5 * e) + 1.5 * n;
}
function U(e) {
    let { fromIsMobile: n = !0, fromStatus: r, fromColor: i, isMobile: a = !1, isTyping: l = !1, typingIndicatorRef: d, isSpeaking: m = !1, size: v, src: y, status: b, statusColor: C, statusTooltip: N = !1, statusTooltipDelay: R, statusBackdropColor: O, 'aria-hidden': D = !1, 'aria-label': M, imageClassName: U } = e,
        B = (0, p.vj)(b, C),
        G = s.useId(),
        Z = s.useId(),
        [F] = s.useState(() => ({
            fill: i,
            ...x({
                size: v,
                status: r,
                isMobile: n,
                isTyping: !1
            })
        })),
        V = s.useMemo(
            () => ({
                fill: B,
                ...x({
                    size: v,
                    status: b,
                    isMobile: a,
                    isTyping: l
                })
            }),
            [B, v, b, a, l]
        ),
        {
            avatarCutoutX: j,
            avatarCutoutY: H,
            avatarCutoutWidth: Y,
            avatarCutoutHeight: W,
            avatarCutoutRadius: K,
            fill: z,
            ...q
        } = (0, _.useSpring)(
            {
                config: T,
                from: F,
                to: V
            },
            S() ? 'animate-always' : 'animate-never'
        ),
        Q = (0, E.px)(v),
        X = (0, E.UC)(v),
        J = X.status * E.D6,
        $ = X.status * E.EW,
        ee = null != b ? (X.status * E.D6 - X.status) / 2 : 0,
        et = X.size - X.status - ee - X.offset,
        en = X.size - $ - X.offset,
        er = X.size + Math.ceil(ee);
    return (0, o.jsx)(w, {
        ...e,
        ariaLabel: M,
        ariaHidden: D,
        typingOffset: ee,
        specs: X,
        children: (0, o.jsxs)('svg', {
            width: er,
            height: er,
            viewBox: '0 0 '.concat(er, ' ').concat(er),
            className: u()(I.mask, I.svg),
            'aria-hidden': !0,
            children: [
                (0, o.jsxs)('mask', {
                    id: G,
                    width: Q,
                    height: Q,
                    children: [
                        (0, o.jsx)('circle', {
                            cx: Q / 2,
                            cy: Q / 2,
                            r: Q / 2,
                            fill: 'white'
                        }),
                        (0, o.jsx)(c.animated.rect, {
                            color: 'black',
                            x: j,
                            y: H,
                            width: Y,
                            height: W,
                            rx: K,
                            ry: K
                        })
                    ]
                }),
                (0, o.jsx)('foreignObject', {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: Q,
                    height: Q,
                    mask: 'url(#'.concat(G, ')'),
                    children: (0, o.jsx)(P, {
                        src: y,
                        isSpeaking: m,
                        className: U
                    })
                }),
                null != O && L(O, a, X, b),
                (0, o.jsx)(h.u, {
                    text: N ? (0, g.u5)(b) : null,
                    'aria-label': !1,
                    position: 'top',
                    spacing: k(X.status, X.stroke, a, l),
                    delay: R,
                    children: (e) =>
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsxs)('svg', {
                                    x: et,
                                    y: en,
                                    width: J,
                                    height: $,
                                    viewBox: '0 0 '.concat(J, ' ').concat($),
                                    className: N ? I.cursorDefault : void 0,
                                    children: [
                                        (0, p.vP)(q, X.status, Z),
                                        (0, o.jsx)(c.animated.rect, {
                                            fill: z,
                                            width: J,
                                            height: $,
                                            mask: 'url(#'.concat(Z, ')')
                                        }),
                                        (0, o.jsx)(f.b, {
                                            ref: d,
                                            dotRadius: X.status / 4,
                                            x: 0.15 * J,
                                            y: 0.5 * $,
                                            hide: !l
                                        })
                                    ]
                                }),
                                (0, o.jsx)(A, {
                                    size: v,
                                    isMobile: a,
                                    isTyping: l,
                                    className: I.pointerEvents,
                                    ...e
                                })
                            ]
                        })
                })
            ]
        })
    });
}
function B(e, n, r, i, a) {
    return null != r && null != n && (!!e || n !== r || (n === v.Skl.ONLINE && i !== a) || !1);
}
let G = s.memo(function (e) {
    let { statusColor: n, status: r, ...i } = e,
        { isMobile: a = !1, isTyping: l = !1 } = i,
        u = s.useRef(r),
        c = s.useRef(a),
        d = (0, p.vj)(r, n),
        f = s.useRef(d),
        h = s.useRef(!1),
        _ = h.current || B(l, r, u.current, a, c.current);
    return (
        s.useLayoutEffect(() => {
            (h.current = _), (u.current = r), (c.current = a), (f.current = d);
        }, [r, a, d, _]),
        null != r && null != u.current && _
            ? (0, o.jsx)(U, {
                  ...i,
                  status: r,
                  statusColor: d,
                  fromStatus: u.current,
                  fromIsMobile: c.current,
                  fromColor: f.current
              })
            : (0, o.jsx)(M, {
                  ...i,
                  status: r,
                  statusColor: d
              })
    );
});
