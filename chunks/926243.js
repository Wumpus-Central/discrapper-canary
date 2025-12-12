n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(681715),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    f = n(339085),
    p = n(906411),
    _ = n(633302),
    m = n(691251),
    h = n(536442),
    g = n(912893),
    E = n(430824),
    b = n(176354),
    y = n(358085),
    O = n(288406),
    v = n(388032),
    S = n(8905);
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
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = (e, t) => "".concat(e, ":").concat(t),
    w = i.forwardRef(function (e, t) {
        var {
                emoji: n,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: l,
                isInspected: u,
                isDisabled: d,
                showPulse: f,
                columnIndex: _,
                rowIndex: h,
                size: g,
                surrogateCodePoint: y,
                allowAnimatedEmoji: I,
                selectedItemClassName: C,
                inNitroLockedSection: P,
            } = e,
            R = N(e, [
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
        let w = (0, s.e7)([E.Z], () => (n.type === p.B.GUILD ? E.Z.getGuild(n.guildId) : void 0), [n]),
            D = () => {
                let e = (0, b.nY)(n);
                return ((null == w ? void 0 : w.name) != null &&
                    (e = v.intl.formatToPlainString(v.t["nXv4/B"], {
                        names: e,
                        guildName: w.name,
                    })),
                i)
                    ? v.intl.formatToPlainString(v.t["9FI9Z0"], { names: e })
                    : e;
            },
            x = d && !P;
        return (0, r.jsx)(c.tEY, {
            children: (0, r.jsx)(
                "button",
                A(T({}, R), {
                    className: o()(S.emojiItem, {
                        [S.emojiItemLarge]: a,
                        [S.emojiItemMedium]: l,
                        [S.emojiItemSelected]: u,
                        [null != C ? C : ""]: u,
                        [S.showPulse]: f,
                    }),
                    "data-type": m.S.EMOJI,
                    "data-id": n.id,
                    "data-name": n.name,
                    "data-surrogates": "surrogates" in n ? n.surrogates : null,
                    "data-animated": n.animated ? "true" : null,
                    ref: t,
                    children: (0, r.jsx)(O.Z, {
                        "aria-label": D(),
                        columnIndex: _,
                        rowIndex: h,
                        emoji: n,
                        size: g,
                        surrogateCodePoint: y,
                        allowAnimatedEmoji: I,
                        isLocked: x,
                    }),
                }),
            ),
        });
    });
function D(e) {
    var t;
    let {
            descriptor: a,
            emojiItemKey: o,
            isInspected: c,
            rowIndex: p,
            channelGuildId: m,
            onInspect: E,
            onSelect: b,
            isScrolling: O,
            isUsingKeyboardNavigation: S,
            showEmojiFavoriteTooltip: I,
            surrogateCodePoint: C,
            selectedItemClassName: P,
            getEmojiItemProps: D,
            isMediumSize: x,
            isLargeSize: L,
            pulseItemKey: j,
            allowAnimatedEmoji: M,
            setPulseItemKey: k,
            messageId: U,
            isBurstReaction: G,
            rowPosition: Z,
            inNitroLockedSection: F,
        } = e,
        [B, V] = i.useState(""),
        H = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        Y = (0, s.e7)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(m), [m]),
        W = i.useRef(null),
        { emoji: K, size: z, isDisabled: q, columnIndex: Q } = a,
        X = (e) => {
            if ((e.stopPropagation(), O.current || S.current)) return;
            let t = e.altKey;
            t && !f.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(K) && k(o),
                (0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP),
                b(a, {
                    isFinalSelection: !e.shiftKey,
                    toggleFavorite: t,
                });
        },
        J = () => {
            O.current || S.current || E(a);
        },
        $ = (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e("39010").then(n.bind(n, 269254));
                return (t) => (0, r.jsx)(e, T({}, t));
            });
        },
        ee = null != (t = D(Q, p)) ? t : {},
        { ref: et, tabIndex: en, onFocus: er } = ee,
        ei = N(ee, ["ref", "tabIndex", "onFocus"]),
        ea =
            B !== R(Q, p)
                ? (0, r.jsx)(w, {
                      ref: et,
                      emoji: K,
                      isFavorite: Y.isFavoriteEmojiWithoutFetchingLatest(K),
                      isLargeSize: L,
                      isMediumSize: x,
                      isInspected: c,
                      isDisabled: q,
                      showPulse: j === o,
                      allowAnimatedEmoji: M,
                      onFocus: null != er ? er : J,
                      onMouseMove: J,
                      onClick: (e) => {
                          if (
                              null != W.current &&
                              null != Z &&
                              null != U &&
                              !e.shiftKey &&
                              null != K.name &&
                              G &&
                              !H &&
                              M
                          ) {
                              let e = null == K.id ? _.ZP.convertNameToSurrogate(K.name) : K.name,
                                  t = W.current.getBoundingClientRect();
                              (t.x = Z.x + (Q + 1) * z), V(R(Q, p)), (0, g.U)(U, e, K.id, t);
                          }
                          X(e);
                      },
                      onContextMenu: $,
                      tabIndex: en,
                      columnIndex: Q,
                      rowIndex: p,
                      size: z,
                      surrogateCodePoint: C,
                      selectedItemClassName: P,
                      inNitroLockedSection: F,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        A(T({}, ei), {
            key: o,
            ref: W,
        }),
        I
            ? (0, r.jsx)(l.u, {
                  text: v.intl.formatToPlainString(v.t.glqNsf, { key: (0, y.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: ea,
              })
            : ea,
    );
}
