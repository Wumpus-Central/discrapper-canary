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
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(666912),
    d = r(1561),
    f = r(438784),
    _ = r(696826),
    h = r(981729),
    p = r(481060),
    m = r(686546),
    g = r(51144),
    E = r(182294),
    v = r(981631),
    I = r(419061),
    T = r(388032),
    b = r(704293);
let y = {
    tension: 1200,
    friction: 70
};
function S() {
    return document.hasFocus();
}
function A(e) {
    let { size: n, isMobile: r, isTyping: i, ...a } = e,
        o = (0, E.UC)(n),
        l = o.status * (r && !i ? E.EW : 1),
        u = o.status * (i ? E.D6 : 1),
        c = i ? (o.status * E.D6 - o.status) / 2 : 0,
        d = o.size - o.status - c - o.offset,
        f = o.size - l - o.offset;
    return (0, s.jsx)('rect', {
        x: d,
        y: f,
        width: u,
        height: l,
        fill: 'transparent',
        'aria-hidden': !0,
        ...a
    });
}
function N(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != n
        ? T.intl.formatToPlainString(T.t['/6mw19'], {
              label: e,
              status: (0, g.u5)(n, r)
          })
        : e;
}
function C(e, n, r, i) {
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
        a = (0, _.W5)(e.status, n, r, i),
        s = (i ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return {
        ...a,
        x: s,
        y: e.size - a.height - e.offset
    };
}
function D(e, n, r) {
    let { size: i, status: a, stroke: s, offset: o } = e,
        l = r ? a * E.D6 : a,
        u = (l - a) / 2,
        c = n ? a * E.EW : a;
    return {
        avatarCutoutX: i - l + u - s - o,
        avatarCutoutY: i - c - s - o,
        avatarCutoutWidth: l + 2 * s,
        avatarCutoutHeight: c + 2 * s,
        avatarCutoutRadius: n ? (c + 2 * s) * E.ZC : (a + 2 * s) / 2
    };
}
function L(e, n, r, i) {
    let a = O(r, i, n, !1),
        o = (0, _.lm)(i, e);
    if (!n) {
        let n = a.height / 2 + r.stroke,
            i = a.x + r.status / 2;
        return (0, s.jsx)('circle', {
            style: { opacity: o },
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
    return (0, s.jsx)('rect', {
        fill: e,
        height: l,
        width: u,
        style: { opacity: o },
        x: c,
        y: d,
        rx: r.stroke
    });
}
function x(e) {
    let { status: n, isMobile: r, isTyping: i, size: a } = e,
        s = r && !i && n === v.Skl.ONLINE,
        o = (0, E.UC)(a);
    return {
        ...D(o, s, i),
        ...(0, _.Dk)({
            status: n,
            size: o.status,
            isMobile: s,
            isTyping: i,
            topOffset: 2,
            leftOffset: 6
        })
    };
}
function w(e) {
    let { children: n, size: r, onClick: i, onMouseDown: a, onKeyDown: o, onContextMenu: l, onMouseEnter: c, onMouseLeave: f, className: _, tabIndex: h, ariaLabel: p, ariaHidden: m, status: g, isMobile: v = !1, isTyping: T = !1, avatarDecoration: y, typingOffset: S, specs: A } = e,
        R = {
            width: (0, E.px)(r),
            height: (0, E.px)(r)
        },
        O = null == p || m ? void 0 : N(p, g, v),
        D = A.size * I.hs,
        L = C(g, r, v, T),
        x =
            null != y &&
            (0, s.jsx)('svg', {
                width: D + S,
                height: D,
                viewBox: '0 0 '.concat(D + S, ' ').concat(D),
                className: b.avatarDecoration,
                'aria-hidden': !0,
                children: (0, s.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? 'url(#'.concat(L, ')') : void 0,
                    children: (0, s.jsx)('div', {
                        className: b.avatarStack,
                        children: (0, s.jsx)('img', {
                            className: b.avatar,
                            src: y,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != i || null != a
        ? (0, s.jsxs)(d.P, {
              className: u()(b.wrapper, b.pointer, _),
              style: R,
              onClick: i,
              tabIndex: h,
              onContextMenu: l,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != f ? f : void 0,
              'aria-label': O,
              'aria-hidden': m,
              children: [n, x]
          })
        : (0, s.jsxs)('div', {
              className: u()(b.wrapper, _),
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
    return (0, s.jsxs)(
        'div',
        {
            className: u()(b.avatarStack, i),
            children: [
                (0, s.jsx)('img', {
                    src: null != n ? n : void 0,
                    alt: ' ',
                    className: b.avatar,
                    'aria-hidden': !0
                }),
                r && (0, s.jsx)('div', { className: b.avatarSpeaking })
            ]
        },
        n
    );
}
function M(e) {
    let { src: n, status: r, size: i, statusColor: a, isMobile: o = !1, isTyping: l = !1, typingIndicatorRef: c, isSpeaking: d = !1, statusTooltip: p = !1, statusTooltipDelay: m, statusBackdropColor: I, 'aria-hidden': T = !1, 'aria-label': y, imageClassName: S } = e,
        A = r !== v.Skl.UNKNOWN ? r : null,
        N = (0, E.UC)(i),
        C = null != A ? Math.ceil((N.status * E.D6 - N.status) / 2) : 0,
        D = N.size + C,
        x = (0, _.vj)(A, a);
    return (0, s.jsx)(w, {
        ...e,
        ariaLabel: y,
        ariaHidden: T,
        status: A,
        specs: N,
        typingOffset: C,
        children: (0, s.jsxs)('svg', {
            width: D,
            height: D,
            viewBox: '0 0 '.concat(D, ' ').concat(D),
            className: u()(b.mask, b.svg),
            'aria-hidden': !0,
            children: [
                (0, s.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: N.size,
                    height: N.size,
                    mask: 'url(#'.concat(R(A, i, o, l), ')'),
                    children: (0, s.jsx)(P, {
                        src: n,
                        isSpeaking: d,
                        className: S
                    })
                }),
                null != A && null != I ? L(I, o, N, A) : null,
                null != A
                    ? (0, s.jsx)(h.u, {
                          text: p ? (0, g.u5)(A) : null,
                          'aria-label': !1,
                          position: 'top',
                          spacing: 5 + 1.5 * N.stroke,
                          delay: m,
                          children: (e) =>
                              (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('rect', {
                                          ...e,
                                          ...O(N, A, o, l),
                                          fill: x,
                                          mask: 'url(#'.concat((0, _.rs)(A, o, l), ')'),
                                          className: b.pointerEvents
                                      }),
                                      l
                                          ? (0, s.jsx)(f.b, {
                                                ref: c,
                                                dotRadius: N.status / 4,
                                                x: N.size - 1.375 * N.status - N.offset,
                                                y: N.size - N.status / 1.333 - N.offset
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
    let { fromIsMobile: n = !0, fromStatus: r, fromColor: i, isMobile: a = !1, isTyping: l = !1, typingIndicatorRef: d, isSpeaking: m = !1, size: v, src: I, status: T, statusColor: N, statusTooltip: C = !1, statusTooltipDelay: R, statusBackdropColor: O, 'aria-hidden': D = !1, 'aria-label': M, imageClassName: U } = e,
        B = (0, _.vj)(T, N),
        G = o.useId(),
        Z = o.useId(),
        [F] = o.useState(() => ({
            fill: i,
            ...x({
                size: v,
                status: r,
                isMobile: n,
                isTyping: !1
            })
        })),
        V = o.useMemo(
            () => ({
                fill: B,
                ...x({
                    size: v,
                    status: T,
                    isMobile: a,
                    isTyping: l
                })
            }),
            [B, v, T, a, l]
        ),
        {
            avatarCutoutX: j,
            avatarCutoutY: H,
            avatarCutoutWidth: Y,
            avatarCutoutHeight: W,
            avatarCutoutRadius: K,
            fill: z,
            ...q
        } = (0, p.useSpring)(
            {
                config: y,
                from: F,
                to: V
            },
            S() ? 'animate-always' : 'animate-never'
        ),
        Q = (0, E.px)(v),
        X = (0, E.UC)(v),
        J = X.status * E.D6,
        $ = X.status * E.EW,
        ee = null != T ? (X.status * E.D6 - X.status) / 2 : 0,
        et = X.size - X.status - ee - X.offset,
        en = X.size - $ - X.offset,
        er = X.size + Math.ceil(ee);
    return (0, s.jsx)(w, {
        ...e,
        ariaLabel: M,
        ariaHidden: D,
        typingOffset: ee,
        specs: X,
        children: (0, s.jsxs)('svg', {
            width: er,
            height: er,
            viewBox: '0 0 '.concat(er, ' ').concat(er),
            className: u()(b.mask, b.svg),
            'aria-hidden': !0,
            children: [
                (0, s.jsxs)('mask', {
                    id: G,
                    width: Q,
                    height: Q,
                    children: [
                        (0, s.jsx)('circle', {
                            cx: Q / 2,
                            cy: Q / 2,
                            r: Q / 2,
                            fill: 'white'
                        }),
                        (0, s.jsx)(c.animated.rect, {
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
                (0, s.jsx)('foreignObject', {
                    className: b.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: Q,
                    height: Q,
                    mask: 'url(#'.concat(G, ')'),
                    children: (0, s.jsx)(P, {
                        src: I,
                        isSpeaking: m,
                        className: U
                    })
                }),
                null != O && L(O, a, X, T),
                (0, s.jsx)(h.u, {
                    text: C ? (0, g.u5)(T) : null,
                    'aria-label': !1,
                    position: 'top',
                    spacing: k(X.status, X.stroke, a, l),
                    delay: R,
                    children: (e) =>
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)('svg', {
                                    x: et,
                                    y: en,
                                    width: J,
                                    height: $,
                                    viewBox: '0 0 '.concat(J, ' ').concat($),
                                    className: C ? b.cursorDefault : void 0,
                                    children: [
                                        (0, _.vP)(q, X.status, Z),
                                        (0, s.jsx)(c.animated.rect, {
                                            fill: z,
                                            width: J,
                                            height: $,
                                            mask: 'url(#'.concat(Z, ')')
                                        }),
                                        (0, s.jsx)(f.b, {
                                            ref: d,
                                            dotRadius: X.status / 4,
                                            x: 0.15 * J,
                                            y: 0.5 * $,
                                            hide: !l
                                        })
                                    ]
                                }),
                                (0, s.jsx)(A, {
                                    size: v,
                                    isMobile: a,
                                    isTyping: l,
                                    className: b.pointerEvents,
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
let G = o.memo(function (e) {
    let { statusColor: n, status: r, ...i } = e,
        { isMobile: a = !1, isTyping: l = !1 } = i,
        u = o.useRef(r),
        c = o.useRef(a),
        d = (0, _.vj)(r, n),
        f = o.useRef(d),
        h = o.useRef(!1),
        p = h.current || B(l, r, u.current, a, c.current);
    return (
        o.useLayoutEffect(() => {
            (h.current = p), (u.current = r), (c.current = a), (f.current = d);
        }, [r, a, d, p]),
        null != r && null != u.current && p
            ? (0, s.jsx)(U, {
                  ...i,
                  status: r,
                  statusColor: d,
                  fromStatus: u.current,
                  fromIsMobile: c.current,
                  fromColor: f.current
              })
            : (0, s.jsx)(M, {
                  ...i,
                  status: r,
                  statusColor: d
              })
    );
});
