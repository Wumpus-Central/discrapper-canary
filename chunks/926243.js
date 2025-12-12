n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(607070),
    d = n(339085),
    f = n(906411),
    p = n(633302),
    _ = n(691251),
    m = n(536442),
    h = n(912893),
    g = n(430824),
    E = n(176354),
    b = n(358085),
    y = n(288406),
    O = n(388032),
    v = n(8905);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = (e, t) => "".concat(e, ":").concat(t),
    R = i.forwardRef(function (e, t) {
        var {
                emoji: n,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: c,
                isInspected: u,
                isDisabled: d,
                showPulse: p,
                columnIndex: m,
                rowIndex: h,
                size: b,
                surrogateCodePoint: S,
                allowAnimatedEmoji: T,
                selectedItemClassName: N,
                inNitroLockedSection: P,
            } = e,
            R = A(e, [
                "emoji",
                "isFavorite",
                "isLargeSize",
                "isMediumSize",
                "isInspected",
                "isDisabled",
                "showPulse",
                "columnIndex",
                "rowIndex",
                "size",
                "surrogateCodePoint",
                "allowAnimatedEmoji",
                "selectedItemClassName",
                "inNitroLockedSection",
            ]);
        let w = (0, s.e7)([g.Z], () => (n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : void 0), [n]),
            D = () => {
                let e = (0, E.nY)(n);
                return ((null == w ? void 0 : w.name) != null &&
                    (e = O.intl.formatToPlainString(O.t["nXv4/B"], {
                        names: e,
                        guildName: w.name,
                    })),
                i)
                    ? O.intl.formatToPlainString(O.t["9FI9Z0"], { names: e })
                    : e;
            },
            x = d && !P;
        return (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)(
                "button",
                C(I({}, R), {
                    className: o()(v.emojiItem, {
                        [v.emojiItemLarge]: a,
                        [v.emojiItemMedium]: c,
                        [v.emojiItemSelected]: u,
                        [null != N ? N : ""]: u,
                        [v.showPulse]: p,
                    }),
                    "data-type": _.S.EMOJI,
                    "data-id": n.id,
                    "data-name": n.name,
                    "data-surrogates": "surrogates" in n ? n.surrogates : null,
                    "data-animated": n.animated ? "true" : null,
                    ref: t,
                    children: (0, r.jsx)(y.Z, {
                        "aria-label": D(),
                        columnIndex: m,
                        rowIndex: h,
                        emoji: n,
                        size: b,
                        surrogateCodePoint: S,
                        allowAnimatedEmoji: T,
                        isLocked: x,
                    }),
                }),
            ),
        });
    });
function w(e) {
    let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: o,
            rowIndex: f,
            channelGuildId: _,
            onInspect: g,
            onSelect: E,
            isScrolling: y,
            isUsingKeyboardNavigation: v,
            showEmojiFavoriteTooltip: S,
            surrogateCodePoint: T,
            selectedItemClassName: N,
            getEmojiItemProps: w,
            isMediumSize: D,
            isLargeSize: x,
            pulseItemKey: L,
            allowAnimatedEmoji: j,
            setPulseItemKey: M,
            messageId: k,
            isBurstReaction: U,
            rowPosition: G,
            inNitroLockedSection: Z,
        } = e,
        [F, B] = i.useState(""),
        V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        H = (0, s.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(_), [_]),
        Y = i.useRef(null),
        { emoji: W, size: K, isDisabled: z, columnIndex: q } = t,
        Q = (e) => {
            if ((e.stopPropagation(), y.current || v.current)) return;
            let n = e.altKey;
            n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(W) && M(a),
                (0, m.Kw)(m.v6.FAVORITE_EMOJI_TOOLTIP),
                E(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n,
                });
        },
        X = () => {
            y.current || v.current || g(t);
        },
        J = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e("39010").then(n.bind(n, 269254));
                return (t) => (0, r.jsx)(e, I({}, t));
            });
        },
        $ = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = null != (e = w(q, f)) ? e : {},
                { ref: l, tabIndex: c, onFocus: u } = s,
                d = A(s, ["ref", "tabIndex", "onFocus"]);
            return (0, i.createElement)(
                "li",
                C(I({}, d), {
                    key: a,
                    ref: Y,
                }),
                F !== P(q, f) &&
                    (0, r.jsx)(R, {
                        ref: l,
                        emoji: W,
                        isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(W),
                        isLargeSize: x,
                        isMediumSize: D,
                        isInspected: o,
                        isDisabled: z,
                        showPulse: L === a,
                        allowAnimatedEmoji: j,
                        onFocus: null != u ? u : X,
                        onMouseMove: X,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (
                                null != Y.current &&
                                null != G &&
                                null != k &&
                                !e.shiftKey &&
                                null != W.name &&
                                U &&
                                !V &&
                                j
                            ) {
                                let e = null == W.id ? p.ZP.convertNameToSurrogate(W.name) : W.name,
                                    t = Y.current.getBoundingClientRect();
                                (t.x = G.x + (q + 1) * K), B(P(q, f)), (0, h.U)(k, e, W.id, t);
                            }
                            Q(e);
                        },
                        onContextMenu: J,
                        tabIndex: c,
                        columnIndex: q,
                        rowIndex: f,
                        size: K,
                        surrogateCodePoint: T,
                        selectedItemClassName: N,
                        inNitroLockedSection: Z,
                    }),
            );
        };
    return S
        ? (0, r.jsx)(
              l.aML,
              {
                  "data-migration-pending": !0,
                  text: O.intl.formatToPlainString(O.t.glqNsf, { key: (0, b.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: (e) => $(e),
              },
              a,
          )
        : $();
}
