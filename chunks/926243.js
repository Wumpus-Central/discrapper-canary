n.d(t, { Z: () => D }), n(388685);
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
    _ = n(633302),
    p = n(691251),
    h = n(536442),
    m = n(912893),
    g = n(430824),
    E = n(176354),
    b = n(358085),
    y = n(288406),
    O = n(388032),
    v = n(999642);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
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
let R = (e, t) => "".concat(e, ":").concat(t),
    P = i.forwardRef(function (e, t) {
        var {
                emoji: n,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: c,
                isInspected: u,
                isDisabled: d,
                showPulse: _,
                columnIndex: h,
                rowIndex: m,
                size: b,
                surrogateCodePoint: I,
                allowAnimatedEmoji: S,
                selectedItemClassName: N,
                inNitroLockedSection: R,
            } = e,
            P = C(e, [
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
        let D = (0, s.e7)([g.Z], () => (n.type === f.B.GUILD ? g.Z.getGuild(n.guildId) : void 0), [n]),
            w = () => {
                let e = (0, E.nY)(n);
                return ((null == D ? void 0 : D.name) != null &&
                    (e = O.intl.formatToPlainString(O.t["nXv4/B"], {
                        names: e,
                        guildName: D.name,
                    })),
                i)
                    ? O.intl.formatToPlainString(O.t["9FI9Z0"], { names: e })
                    : e;
            },
            L = d && !R;
        return (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)(
                "button",
                A(T({}, P), {
                    className: o()(v.emojiItem, {
                        [v.emojiItemLarge]: a,
                        [v.emojiItemMedium]: c,
                        [v.emojiItemSelected]: u,
                        [null != N ? N : ""]: u,
                        [v.showPulse]: _,
                    }),
                    "data-type": p.S.EMOJI,
                    "data-id": n.id,
                    "data-name": n.name,
                    "data-surrogates": "surrogates" in n ? n.surrogates : null,
                    "data-animated": n.animated ? "true" : null,
                    ref: t,
                    children: (0, r.jsx)(y.Z, {
                        "aria-label": w(),
                        columnIndex: h,
                        rowIndex: m,
                        emoji: n,
                        size: b,
                        surrogateCodePoint: I,
                        allowAnimatedEmoji: S,
                        isLocked: L,
                    }),
                }),
            ),
        });
    });
function D(e) {
    let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: o,
            rowIndex: f,
            channelGuildId: p,
            onInspect: g,
            onSelect: E,
            isScrolling: y,
            isUsingKeyboardNavigation: v,
            showEmojiFavoriteTooltip: I,
            surrogateCodePoint: S,
            selectedItemClassName: N,
            getEmojiItemProps: D,
            isMediumSize: w,
            isLargeSize: L,
            pulseItemKey: x,
            allowAnimatedEmoji: M,
            setPulseItemKey: k,
            messageId: j,
            isBurstReaction: U,
            rowPosition: G,
            inNitroLockedSection: B,
        } = e,
        [Z, F] = i.useState(""),
        V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        H = (0, s.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(p), [p]),
        Y = i.useRef(null),
        { emoji: W, size: K, isDisabled: z, columnIndex: q } = t,
        X = (e) => {
            if ((e.stopPropagation(), y.current || v.current)) return;
            let n = e.altKey;
            n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(W) && k(a),
                (0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP),
                E(t, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: n,
                });
        },
        Q = () => {
            y.current || v.current || g(t);
        },
        J = (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e("39010").then(n.bind(n, 269254));
                return (t) => (0, r.jsx)(e, T({}, t));
            });
        },
        $ = function () {
            var e;
            let { onMouseEnter: t, onMouseLeave: n } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = null != (e = D(q, f)) ? e : {},
                { ref: l, tabIndex: c, onFocus: u } = s,
                d = C(s, ["ref", "tabIndex", "onFocus"]);
            return (0, i.createElement)(
                "li",
                A(T({}, d), {
                    key: a,
                    ref: Y,
                }),
                Z !== R(q, f) &&
                    (0, r.jsx)(P, {
                        ref: l,
                        emoji: W,
                        isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(W),
                        isLargeSize: L,
                        isMediumSize: w,
                        isInspected: o,
                        isDisabled: z,
                        showPulse: x === a,
                        allowAnimatedEmoji: M,
                        onFocus: null != u ? u : Q,
                        onMouseMove: Q,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: (e) => {
                            if (
                                null != Y.current &&
                                null != G &&
                                null != j &&
                                !e.shiftKey &&
                                null != W.name &&
                                U &&
                                !V &&
                                M
                            ) {
                                let e = null == W.id ? _.ZP.convertNameToSurrogate(W.name) : W.name,
                                    t = Y.current.getBoundingClientRect();
                                (t.x = G.x + (q + 1) * K), F(R(q, f)), (0, m.U)(j, e, W.id, t);
                            }
                            X(e);
                        },
                        onContextMenu: J,
                        tabIndex: c,
                        columnIndex: q,
                        rowIndex: f,
                        size: K,
                        surrogateCodePoint: S,
                        selectedItemClassName: N,
                        inNitroLockedSection: B,
                    }),
            );
        };
    return I
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
