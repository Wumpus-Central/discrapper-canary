n.d(t, {
    Vq: () => D,
    Xo: () => Z,
    qE: () => U
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(1561),
    c = n(438784),
    u = n(696826),
    d = n(981729),
    f = n(481060),
    _ = n(686546),
    p = n(51144),
    h = n(182294),
    m = n(981631),
    g = n(419061),
    E = n(388032),
    b = n(661085);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = {
    tension: 1200,
    friction: 70
};
function A() {
    return document.hasFocus();
}
function C(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        o = S(e, ['size', 'isMobile', 'isTyping']);
    let a = (0, h.UC)(t),
        s = a.status * (n && !i ? h.EW : 1),
        l = a.status * (i ? h.D6 : 1),
        c = i ? (a.status * h.D6 - a.status) / 2 : 0,
        u = a.size - a.status - c - a.offset,
        d = a.size - s - a.offset;
    return (0, r.jsx)(
        'rect',
        v(
            {
                x: u,
                y: d,
                width: l,
                height: s,
                fill: 'transparent',
                'aria-hidden': !0
            },
            o
        )
    );
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? E.NW.formatToPlainString(E.t['/6mw19'], {
              label: e,
              status: (0, p.u5)(t, n)
          })
        : e;
}
function P(e, t, n, r) {
    if (null == e) return null;
    if (r)
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
function w(e, t, n, r) {
    if (null == e) return _.QS.AVATAR_DEFAULT;
    if (r)
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
function D(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, u.W5)(e.status, t, n, r),
        o = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return I(v({}, i), {
        x: o,
        y: e.size - i.height - e.offset
    });
}
function L(e, t, n) {
    let { size: r, status: i, stroke: o, offset: a } = e,
        s = n ? i * h.D6 : i,
        l = (s - i) / 2,
        c = t ? i * h.EW : i;
    return {
        avatarCutoutX: r - s + l - o - a,
        avatarCutoutY: r - c - o - a,
        avatarCutoutWidth: s + 2 * o,
        avatarCutoutHeight: c + 2 * o,
        avatarCutoutRadius: t ? (c + 2 * o) * h.ZC : (i + 2 * o) / 2
    };
}
function x(e, t, n, i) {
    let o = D(n, i, t, !1),
        a = (0, u.lm)(i, e);
    if (!t) {
        let t = o.height / 2 + n.stroke,
            i = o.x + n.status / 2;
        return (0, r.jsx)('circle', {
            style: { opacity: a },
            fill: e,
            r: t,
            cx: i,
            cy: i
        });
    }
    let s = o.height + 2 * n.stroke,
        l = o.width + 2 * n.stroke,
        c = o.x - n.stroke,
        d = o.y - n.stroke;
    return (0, r.jsx)('rect', {
        fill: e,
        height: s,
        width: l,
        style: { opacity: a },
        x: c,
        y: d,
        rx: n.stroke
    });
}
function M(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        o = n && !r && t === m.Skl.ONLINE,
        a = (0, h.UC)(i);
    return v(
        {},
        L(a, o, r),
        (0, u.Dk)({
            status: t,
            size: a.status,
            isMobile: o,
            isTyping: r,
            topOffset: 2,
            leftOffset: 6
        })
    );
}
function k(e) {
    let { children: t, size: n, onClick: i, onMouseDown: o, onKeyDown: s, onContextMenu: c, onMouseEnter: u, onMouseLeave: d, className: f, tabIndex: _, ariaLabel: p, ariaHidden: m, status: E, isMobile: y = !1, isTyping: v = !1, avatarDecoration: O, typingOffset: I, specs: S } = e,
        T = {
            width: (0, h.px)(n),
            height: (0, h.px)(n)
        },
        N = null == p || m ? void 0 : R(p, E, y),
        A = S.size * g.hs,
        C = P(E, n, y, v),
        w =
            null != O &&
            (0, r.jsx)('svg', {
                width: A + I,
                height: A,
                viewBox: '0 0 '.concat(A + I, ' ').concat(A),
                className: b.avatarDecoration,
                'aria-hidden': !0,
                children: (0, r.jsx)('foreignObject', {
                    x: 0,
                    y: 0,
                    width: A,
                    height: A,
                    mask: null != C ? 'url(#'.concat(C, ')') : void 0,
                    children: (0, r.jsx)('div', {
                        className: b.avatarStack,
                        children: (0, r.jsx)('img', {
                            className: b.avatar,
                            src: O,
                            alt: ' ',
                            'aria-hidden': !0
                        })
                    })
                })
            });
    return null != i || null != o
        ? (0, r.jsxs)(l.P, {
              className: a()(b.wrapper, b.pointer, f),
              style: T,
              onClick: i,
              tabIndex: _,
              onContextMenu: c,
              onMouseDown: o,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              'aria-label': N,
              'aria-hidden': m,
              children: [t, w]
          })
        : (0, r.jsxs)('div', {
              className: a()(b.wrapper, f),
              style: T,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: 'img',
              'aria-label': N,
              'aria-hidden': m,
              children: [t, w]
          });
}
function j(e) {
    let { src: t, isSpeaking: n, className: i } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: a()(b.avatarStack, i),
            children: [
                (0, r.jsx)('img', {
                    src: null != t ? t : void 0,
                    alt: ' ',
                    className: b.avatar,
                    'aria-hidden': !0
                }),
                n && (0, r.jsx)('div', { className: b.avatarSpeaking })
            ]
        },
        t
    );
}
function U(e) {
    let { src: t, status: n, size: i, statusColor: o, isMobile: s = !1, isTyping: l = !1, typingIndicatorRef: f, isSpeaking: _ = !1, statusTooltip: g = !1, statusTooltipDelay: E, statusBackdropColor: y, 'aria-hidden': O = !1, 'aria-label': S, imageClassName: T } = e,
        N = n !== m.Skl.UNKNOWN ? n : null,
        A = (0, h.UC)(i),
        C = null != N ? Math.ceil((A.status * h.D6 - A.status) / 2) : 0,
        R = A.size + C,
        P = (0, u.vj)(N, o);
    return (0, r.jsx)(
        k,
        I(v({}, e), {
            ariaLabel: S,
            ariaHidden: O,
            status: N,
            specs: A,
            typingOffset: C,
            children: (0, r.jsxs)('svg', {
                width: R,
                height: R,
                viewBox: '0 0 '.concat(R, ' ').concat(R),
                className: a()(b.mask, b.svg),
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)('foreignObject', {
                        x: 0,
                        y: 0,
                        width: A.size,
                        height: A.size,
                        mask: 'url(#'.concat(w(N, i, s, l), ')'),
                        children: (0, r.jsx)(j, {
                            src: t,
                            isSpeaking: _,
                            className: T
                        })
                    }),
                    null != N && null != y ? x(y, s, A, N) : null,
                    null != N
                        ? (0, r.jsx)(d.u, {
                              text: g ? (0, p.u5)(N) : null,
                              'aria-label': !1,
                              position: 'top',
                              spacing: 5 + 1.5 * A.stroke,
                              delay: E,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              'rect',
                                              I(v({}, e, D(A, N, s, l)), {
                                                  fill: P,
                                                  mask: 'url(#'.concat((0, u.rs)(N, s, l), ')'),
                                                  className: b.pointerEvents
                                              })
                                          ),
                                          l
                                              ? (0, r.jsx)(c.b, {
                                                    ref: f,
                                                    dotRadius: A.status / 4,
                                                    x: A.size - 1.375 * A.status - A.offset,
                                                    y: A.size - A.status / 1.333 - A.offset
                                                })
                                              : null
                                      ]
                                  })
                          })
                        : null
                ]
            })
        })
    );
}
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function B(e, t, n) {
    let r = e.status * t,
        i = null != n ? (r * h.D6 - r) / 2 : 0,
        o = (e.status - r) / 2,
        a = e.size - r - i - e.offset - o,
        s = e.size - r * h.EW - e.offset - o,
        l = Math.round((a / t) * 100) / 100,
        c = Math.round((s / t) * 100) / 100;
    return 'translate('.concat(l, ', ').concat(c, ')');
}
function F(e) {
    let { fromIsMobile: t = !0, fromStatus: n, fromColor: o, isMobile: l = !1, isTyping: _ = !1, typingIndicatorRef: m, isSpeaking: g = !1, size: E, src: y, status: O, statusColor: T, statusTooltip: R = !1, statusTooltipDelay: P, statusBackdropColor: w, 'aria-hidden': D = !1, 'aria-label': L, imageClassName: U, pulseStatusIcon: F } = e,
        V = (0, u.vj)(O, T),
        Z = i.useId(),
        H = i.useId(),
        [W] = i.useState(() =>
            v(
                { fill: o },
                M({
                    size: E,
                    status: n,
                    isMobile: t,
                    isTyping: !1
                })
            )
        ),
        Y = i.useMemo(
            () =>
                v(
                    { fill: V },
                    M({
                        size: E,
                        status: O,
                        isMobile: l,
                        isTyping: _
                    })
                ),
            [V, E, O, l, _]
        ),
        K = (0, f.q_F)(
            {
                config: N,
                from: W,
                to: Y
            },
            A() ? 'animate-always' : 'animate-never'
        ),
        { avatarCutoutX: z, avatarCutoutY: q, avatarCutoutWidth: Q, avatarCutoutHeight: X, avatarCutoutRadius: J, fill: $ } = K,
        ee = S(K, ['avatarCutoutX', 'avatarCutoutY', 'avatarCutoutWidth', 'avatarCutoutHeight', 'avatarCutoutRadius', 'fill']),
        et = (0, h.px)(E),
        en = (0, h.UC)(E),
        er = en.status * h.D6,
        ei = en.status * h.EW,
        eo = null != O ? (en.status * h.D6 - en.status) / 2 : 0,
        ea = en.size + Math.ceil(eo),
        [es, el, ec] = (0, f.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0
                },
                from: { scale: 1 },
                to: F ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : []
            },
            A() ? 'animate-always' : 'animate-never',
            [F, O]
        );
    return (0, r.jsx)(
        k,
        I(v({}, e), {
            ariaLabel: L,
            ariaHidden: D,
            typingOffset: eo,
            specs: en,
            children: (0, r.jsxs)('svg', {
                width: ea,
                height: ea,
                viewBox: '0 0 '.concat(ea, ' ').concat(ea),
                className: a()(b.mask, b.svg),
                'aria-hidden': !0,
                children: [
                    (0, r.jsxs)('mask', {
                        id: Z,
                        width: et,
                        height: et,
                        children: [
                            (0, r.jsx)('circle', {
                                cx: et / 2,
                                cy: et / 2,
                                r: et / 2,
                                fill: 'white'
                            }),
                            (0, r.jsx)(s.animated.rect, {
                                color: 'black',
                                x: z,
                                y: q,
                                width: Q,
                                height: X,
                                rx: J,
                                ry: J
                            })
                        ]
                    }),
                    (0, r.jsx)('foreignObject', {
                        className: b.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: et,
                        height: et,
                        mask: 'url(#'.concat(Z, ')'),
                        children: (0, r.jsx)(j, {
                            src: y,
                            isSpeaking: g,
                            className: U
                        })
                    }),
                    null != w && x(w, l, en, O),
                    (0, r.jsx)(d.u, {
                        text: R ? (0, p.u5)(O) : null,
                        'aria-label': !1,
                        position: 'top',
                        spacing: G(en.status, en.stroke, l, _),
                        delay: P,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: es.scale.to((e) => 'scale('.concat(e, ') ').concat(B(en, e, O))),
                                children: [
                                    (0, r.jsxs)('svg', {
                                        width: er,
                                        height: ei,
                                        viewBox: '0 0 '.concat(er, ' ').concat(ei),
                                        className: R ? b.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(ee, en.status, H),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: $,
                                                width: er,
                                                height: ei,
                                                mask: 'url(#'.concat(H, ')')
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: m,
                                                dotRadius: en.status / 4,
                                                x: 0.15 * er,
                                                y: 0.5 * ei,
                                                hide: !_
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(
                                        C,
                                        v(
                                            {
                                                size: E,
                                                isMobile: l,
                                                isTyping: _,
                                                className: b.pointerEvents
                                            },
                                            e
                                        )
                                    )
                                ]
                            })
                    })
                ]
            })
        })
    );
}
function V(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === m.Skl.ONLINE && r !== i));
}
let Z = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        o = S(e, ['statusColor', 'status']);
    let { isMobile: a = !1, isTyping: s = !1 } = o,
        l = i.useRef(n),
        c = i.useRef(a),
        d = (0, u.vj)(n, t),
        f = i.useRef(d),
        _ = i.useRef(!1),
        p = _.current || V(s, n, l.current, a, c.current);
    return (
        i.useLayoutEffect(() => {
            (_.current = p), (l.current = n), (c.current = a), (f.current = d);
        }, [n, a, d, p]),
        null != n && null != l.current && p
            ? (0, r.jsx)(
                  F,
                  I(v({}, o), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current
                  })
              )
            : (0, r.jsx)(
                  U,
                  I(v({}, o), {
                      status: n,
                      statusColor: d
                  })
              )
    );
});
