n.d(t, {
    Vq: () => N,
    Xo: () => k,
    qE: () => x
}),
    n(411104),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(1561),
    u = n(438784),
    c = n(696826),
    d = n(981729),
    f = n(481060),
    _ = n(686546),
    p = n(51144),
    h = n(182294),
    m = n(981631),
    g = n(419061),
    E = n(388032),
    v = n(94710);
let y = {
    tension: 1200,
    friction: 70
};
function I() {
    return document.hasFocus();
}
function T(e) {
    let { size: t, isMobile: n, isTyping: r, ...a } = e,
        s = (0, h.UC)(t),
        o = s.status * (n && !r ? h.EW : 1),
        l = s.status * (r ? h.D6 : 1),
        u = r ? (s.status * h.D6 - s.status) / 2 : 0,
        c = s.size - s.status - u - s.offset,
        d = s.size - o - s.offset;
    return (0, i.jsx)('rect', {
        x: c,
        y: d,
        width: l,
        height: o,
        fill: 'transparent',
        'aria-hidden': !0,
        ...a
    });
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? E.intl.formatToPlainString(E.t['/6mw19'], {
              label: e,
              status: (0, p.u5)(t, n)
          })
        : e;
}
function S(e, t, n, i) {
    if (null == e) return null;
    if (i)
        switch (t) {
            case h.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case h.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case h.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case h.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case h.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case h.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case h.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case h.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case h.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case h.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case h.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case h.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case h.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case h.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case h.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case h.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case h.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case h.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case h.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case h.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case h.EF.SIZE_16:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case h.EF.SIZE_20:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case h.EF.SIZE_24:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case h.EF.SIZE_32:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case h.EF.SIZE_40:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case h.EF.SIZE_44:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case h.EF.SIZE_48:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case h.EF.SIZE_56:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case h.EF.SIZE_80:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case h.EF.SIZE_120:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function A(e, t, n, i) {
    if (null == e) return _.QS.AVATAR_DEFAULT;
    if (i)
        switch (t) {
            case h.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_TYPING_16;
            case h.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_TYPING_20;
            case h.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_TYPING_24;
            case h.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_TYPING_32;
            case h.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_TYPING_40;
            case h.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_TYPING_44;
            case h.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_TYPING_48;
            case h.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_TYPING_56;
            case h.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_TYPING_80;
            case h.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === m.Skl.ONLINE && n)
        switch (t) {
            case h.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_MOBILE_16;
            case h.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_MOBILE_20;
            case h.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_MOBILE_24;
            case h.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_MOBILE_32;
            case h.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_MOBILE_40;
            case h.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_MOBILE_44;
            case h.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_MOBILE_48;
            case h.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_MOBILE_56;
            case h.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_MOBILE_80;
            case h.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case h.EF.SIZE_16:
            return _.QS.AVATAR_STATUS_ROUND_16;
        case h.EF.SIZE_20:
            return _.QS.AVATAR_STATUS_ROUND_20;
        case h.EF.SIZE_24:
            return _.QS.AVATAR_STATUS_ROUND_24;
        case h.EF.SIZE_32:
            return _.QS.AVATAR_STATUS_ROUND_32;
        case h.EF.SIZE_40:
            return _.QS.AVATAR_STATUS_ROUND_40;
        case h.EF.SIZE_44:
            return _.QS.AVATAR_STATUS_ROUND_44;
        case h.EF.SIZE_48:
            return _.QS.AVATAR_STATUS_ROUND_48;
        case h.EF.SIZE_56:
            return _.QS.AVATAR_STATUS_ROUND_56;
        case h.EF.SIZE_80:
            return _.QS.AVATAR_STATUS_ROUND_80;
        case h.EF.SIZE_120:
            return _.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        'getMaskId(): Unsupported type, size: '
            .concat(t, ', status: ')
            .concat(e, ', isMobile: ')
            .concat(n ? 'true' : 'false')
    );
}
function N(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = (0, c.W5)(e.status, t, n, i),
        a = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
    return {
        ...r,
        x: a,
        y: e.size - r.height - e.offset
    };
}
function C(e, t, n) {
    let { size: i, status: r, stroke: a, offset: s } = e,
        o = n ? r * h.D6 : r,
        l = (o - r) / 2,
        u = t ? r * h.EW : r;
    return {
        avatarCutoutX: i - o + l - a - s,
        avatarCutoutY: i - u - a - s,
        avatarCutoutWidth: o + 2 * a,
        avatarCutoutHeight: u + 2 * a,
        avatarCutoutRadius: t ? (u + 2 * a) * h.ZC : (r + 2 * a) / 2
    };
}
function R(e, t, n, r) {
    let a = N(n, r, t, !1),
        s = (0, c.lm)(r, e);
    if (!t) {
        let t = a.height / 2 + n.stroke,
            r = a.x + n.status / 2;
        return (0, i.jsx)('circle', {
            style: { opacity: s },
            fill: e,
            r: t,
            cx: r,
            cy: r
        });
    }
    let o = a.height + 2 * n.stroke,
        l = a.width + 2 * n.stroke,
        u = a.x - n.stroke,
        d = a.y - n.stroke;
    return (0, i.jsx)('rect', {
        fill: e,
        height: o,
        width: l,
        style: { opacity: s },
        x: u,
        y: d,
        rx: n.stroke
    });
}
function O(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        a = n && !i && t === m.Skl.ONLINE,
        s = (0, h.UC)(r);
    return {
        ...C(s, a, i),
        ...(0, c.Dk)({
            status: t,
            size: s.status,
            isMobile: a,
            isTyping: i,
            topOffset: 2,
            leftOffset: 6
        })
    };
}
function D(e) {
    let { children: t, size: n, onClick: r, onMouseDown: a, onKeyDown: o, onContextMenu: u, onMouseEnter: c, onMouseLeave: d, className: f, tabIndex: _, ariaLabel: p, ariaHidden: m, status: E, isMobile: y = !1, isTyping: I = !1, avatarDecoration: T, typingOffset: A, specs: N } = e,
        C = {
            width: (0, h.px)(n),
            height: (0, h.px)(n)
        },
        R = null == p || m ? void 0 : b(p, E, y),
        O = N.size * g.hs,
        D = S(E, n, y, I),
        L =
            null != T &&
            (0, i.jsx)('svg', {
                width: O + A,
                height: O,
                viewBox: '0 0 '.concat(O + A, ' ').concat(O),
                className: v.avatarDecoration,
                'aria-hidden': !0,
                children: (0, i.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: O,
                    height: O,
                    mask: null != D ? 'url(#'.concat(D, ')') : void 0,
                    children: (0, i.jsx)('div', {
                        className: v.avatarStack,
                        children: (0, i.jsx)('img', {
                            className: v.avatar,
                            src: T,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != r || null != a
        ? (0, i.jsxs)(l.P, {
              className: s()(v.wrapper, v.pointer, f),
              style: C,
              onClick: r,
              tabIndex: _,
              onContextMenu: u,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != d ? d : void 0,
              'aria-label': R,
              'aria-hidden': m,
              children: [t, L]
          })
        : (0, i.jsxs)('div', {
              className: s()(v.wrapper, f),
              style: C,
              onContextMenu: null != u ? u : void 0,
              onMouseEnter: null != c ? c : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: 'img',
              'aria-label': R,
              'aria-hidden': m,
              children: [t, L]
          });
}
function L(e) {
    let { src: t, isSpeaking: n, className: r } = e;
    return (0, i.jsxs)(
        'div',
        {
            className: s()(v.avatarStack, r),
            children: [
                (0, i.jsx)('img', {
                    src: null != t ? t : void 0,
                    alt: ' ',
                    className: v.avatar,
                    'aria-hidden': !0
                }),
                n && (0, i.jsx)('div', { className: v.avatarSpeaking })
            ]
        },
        t
    );
}
function x(e) {
    let { src: t, status: n, size: r, statusColor: a, isMobile: o = !1, isTyping: l = !1, typingIndicatorRef: f, isSpeaking: _ = !1, statusTooltip: g = !1, statusTooltipDelay: E, statusBackdropColor: y, 'aria-hidden': I = !1, 'aria-label': T, imageClassName: b } = e,
        S = n !== m.Skl.UNKNOWN ? n : null,
        C = (0, h.UC)(r),
        O = null != S ? Math.ceil((C.status * h.D6 - C.status) / 2) : 0,
        x = C.size + O,
        P = (0, c.vj)(S, a);
    return (0, i.jsx)(D, {
        ...e,
        ariaLabel: T,
        ariaHidden: I,
        status: S,
        specs: C,
        typingOffset: O,
        children: (0, i.jsxs)('svg', {
            width: x,
            height: x,
            viewBox: '0 0 '.concat(x, ' ').concat(x),
            className: s()(v.mask, v.svg),
            'aria-hidden': !0,
            children: [
                (0, i.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: C.size,
                    height: C.size,
                    mask: 'url(#'.concat(A(S, r, o, l), ')'),
                    children: (0, i.jsx)(L, {
                        src: t,
                        isSpeaking: _,
                        className: b
                    })
                }),
                null != S && null != y ? R(y, o, C, S) : null,
                null != S
                    ? (0, i.jsx)(d.u, {
                          text: g ? (0, p.u5)(S) : null,
                          'aria-label': !1,
                          position: 'top',
                          spacing: 5 + 1.5 * C.stroke,
                          delay: E,
                          children: (e) =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('rect', {
                                          ...e,
                                          ...N(C, S, o, l),
                                          fill: P,
                                          mask: 'url(#'.concat((0, c.rs)(S, o, l), ')'),
                                          className: v.pointerEvents
                                      }),
                                      l
                                          ? (0, i.jsx)(u.b, {
                                                ref: f,
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
function P(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
}
function w(e) {
    let { fromIsMobile: t = !0, fromStatus: n, fromColor: a, isMobile: l = !1, isTyping: _ = !1, typingIndicatorRef: m, isSpeaking: g = !1, size: E, src: b, status: S, statusColor: A, statusTooltip: N = !1, statusTooltipDelay: C, statusBackdropColor: x, 'aria-hidden': w = !1, 'aria-label': M, imageClassName: k } = e,
        U = (0, c.vj)(S, A),
        G = r.useId(),
        B = r.useId(),
        [Z] = r.useState(() => ({
            fill: a,
            ...O({
                size: E,
                status: n,
                isMobile: t,
                isTyping: !1
            })
        })),
        F = r.useMemo(
            () => ({
                fill: U,
                ...O({
                    size: E,
                    status: S,
                    isMobile: l,
                    isTyping: _
                })
            }),
            [U, E, S, l, _]
        ),
        {
            avatarCutoutX: V,
            avatarCutoutY: j,
            avatarCutoutWidth: H,
            avatarCutoutHeight: Y,
            avatarCutoutRadius: W,
            fill: K,
            ...z
        } = (0, f.q_F)(
            {
                config: y,
                from: Z,
                to: F
            },
            I() ? 'animate-always' : 'animate-never'
        ),
        q = (0, h.px)(E),
        Q = (0, h.UC)(E),
        X = Q.status * h.D6,
        J = Q.status * h.EW,
        $ = null != S ? (Q.status * h.D6 - Q.status) / 2 : 0,
        ee = Q.size - Q.status - $ - Q.offset,
        et = Q.size - J - Q.offset,
        en = Q.size + Math.ceil($);
    return (0, i.jsx)(D, {
        ...e,
        ariaLabel: M,
        ariaHidden: w,
        typingOffset: $,
        specs: Q,
        children: (0, i.jsxs)('svg', {
            width: en,
            height: en,
            viewBox: '0 0 '.concat(en, ' ').concat(en),
            className: s()(v.mask, v.svg),
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('mask', {
                    id: G,
                    width: q,
                    height: q,
                    children: [
                        (0, i.jsx)('circle', {
                            cx: q / 2,
                            cy: q / 2,
                            r: q / 2,
                            fill: 'white'
                        }),
                        (0, i.jsx)(o.animated.rect, {
                            color: 'black',
                            x: V,
                            y: j,
                            width: H,
                            height: Y,
                            rx: W,
                            ry: W
                        })
                    ]
                }),
                (0, i.jsx)('foreignObject', {
                    className: v.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: q,
                    height: q,
                    mask: 'url(#'.concat(G, ')'),
                    children: (0, i.jsx)(L, {
                        src: b,
                        isSpeaking: g,
                        className: k
                    })
                }),
                null != x && R(x, l, Q, S),
                (0, i.jsx)(d.u, {
                    text: N ? (0, p.u5)(S) : null,
                    'aria-label': !1,
                    position: 'top',
                    spacing: P(Q.status, Q.stroke, l, _),
                    delay: C,
                    children: (e) =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)('svg', {
                                    x: ee,
                                    y: et,
                                    width: X,
                                    height: J,
                                    viewBox: '0 0 '.concat(X, ' ').concat(J),
                                    className: N ? v.cursorDefault : void 0,
                                    children: [
                                        (0, c.vP)(z, Q.status, B),
                                        (0, i.jsx)(o.animated.rect, {
                                            fill: K,
                                            width: X,
                                            height: J,
                                            mask: 'url(#'.concat(B, ')')
                                        }),
                                        (0, i.jsx)(u.b, {
                                            ref: m,
                                            dotRadius: Q.status / 4,
                                            x: 0.15 * X,
                                            y: 0.5 * J,
                                            hide: !_
                                        })
                                    ]
                                }),
                                (0, i.jsx)(T, {
                                    size: E,
                                    isMobile: l,
                                    isTyping: _,
                                    className: v.pointerEvents,
                                    ...e
                                })
                            ]
                        })
                })
            ]
        })
    });
}
function M(e, t, n, i, r) {
    return null != n && null != t && (!!e || t !== n || (t === m.Skl.ONLINE && i !== r));
}
let k = r.memo(function (e) {
    let { statusColor: t, status: n, ...a } = e,
        { isMobile: s = !1, isTyping: o = !1 } = a,
        l = r.useRef(n),
        u = r.useRef(s),
        d = (0, c.vj)(n, t),
        f = r.useRef(d),
        _ = r.useRef(!1),
        p = _.current || M(o, n, l.current, s, u.current);
    return (
        r.useLayoutEffect(() => {
            (_.current = p), (l.current = n), (u.current = s), (f.current = d);
        }, [n, s, d, p]),
        null != n && null != l.current && p
            ? (0, i.jsx)(w, {
                  ...a,
                  status: n,
                  statusColor: d,
                  fromStatus: l.current,
                  fromIsMobile: u.current,
                  fromColor: f.current
              })
            : (0, i.jsx)(x, {
                  ...a,
                  status: n,
                  statusColor: d
              })
    );
});
