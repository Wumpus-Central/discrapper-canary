n.d(t, { A: () => P }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    c = n(304072),
    u = n(736653),
    d = n(189551),
    f = n(770335),
    p = n(598770),
    _ = n(850992),
    h = n(860371),
    m = n(594061),
    g = n(771104),
    E = n(954571),
    b = n(484333),
    y = n(189628),
    O = n(732139),
    A = n(652215),
    v = n(985018),
    S = n(351341);
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
function N(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = w(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let P = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: a,
            onSelect: I,
            onSelectSoundmoji: C,
            onInspect: w,
            surrogateCodePoint: P,
            getEmojiItemProps: D,
            getEmojiRowProps: x,
            isScrolling: L,
            isUsingKeyboardNavigation: j,
            rowIndex: M,
            allowAnimatedEmoji: k,
            showEmojiFavoriteTooltip: U,
            channelGuildId: G,
            category: V,
            selectedItemClassName: F,
            channelId: B,
            messageId: H,
            isBurstReaction: Y,
            inNitroLockedSection: W,
            handleScrollUpOnSectionCollapse: K,
        } = e,
        z = n(619508),
        q = n(404828),
        X = n(600003),
        Z = n(318121),
        Q = n(443336),
        $ = n(258901),
        J = n(135974),
        ee = n(8013),
        et = (0, u.Ay)(),
        en = _.Om.getState(),
        [er, ei] = i.useState(en.inspectedExpressionPosition),
        [ea, es] = (0, c.A)(null, 300),
        eo = i.useRef(null);
    i.useEffect(
        () =>
            _.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ei(e),
            ),
        [],
    ),
        i.useEffect(() => {
            m.bW.loadIfNecessary();
        }, []);
    let el = a === O.as.LARGE,
        ec = a === O.as.MEDIUM,
        eu = (e) => {
            let t = "".concat(e.rowIndex, "c").concat(e.columnIndex),
                n = function () {
                    var n;
                    let {
                            onMouseEnter: a,
                            onMouseLeave: o,
                            handleSelect: c,
                            icon: u,
                            ariaLabel: d,
                            shouldShowRoundHighlight: f,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: p, columnIndex: _ } = e,
                        h = null != (n = D(_, M)) ? n : {},
                        { ref: m, tabIndex: g, onFocus: E } = h,
                        b = R(h, ["ref", "tabIndex", "onFocus"]),
                        y = er.rowIndex === p && er.columnIndex === _,
                        O = () => {
                            L.current || j.current || w(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        N(T({}, b), { key: t }),
                        (0, r.jsx)(l.vN3, {
                            children: (0, r.jsx)("button", {
                                "aria-label": d,
                                ref: m,
                                className: s()(S._X, {
                                    [S.lG]: el,
                                    [S.Lh]: ec,
                                    [S.Bx]: y && !f,
                                    [null != F ? F : ""]: y,
                                    [S.TV]: ea === t,
                                }),
                                onFocus: null != E ? E : O,
                                onMouseOver: O,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: c,
                                tabIndex: g,
                                children: u,
                            }),
                        }),
                    );
                };
            switch (e.type) {
                case b.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = er.rowIndex === t && er.columnIndex === i,
                        s = (t) => {
                            t.stopPropagation(),
                                L.current ||
                                    j.current ||
                                    (I(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1,
                                    }),
                                    (0, d.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || K(),
                                    E.default.track(A.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, o.Mw)(et)
                                    ? $
                                    : ee
                                : (0, o.Mw)(et)
                                  ? z
                                  : q
                            : a
                              ? (0, o.Mw)(et)
                                  ? Q
                                  : J
                              : (0, o.Mw)(et)
                                ? X
                                : Z,
                        c = v.intl.string(e.sectionCollapsedToThreeRows ? v.t.NZI2Zk : v.t["/K2RDH"]);
                    return n({
                        handleSelect: s,
                        icon: (0, r.jsx)("img", {
                            className: S.Kk,
                            src: l,
                            alt: "",
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case b.bm.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = er.rowIndex === i && er.columnIndex === n;
                    return (0, r.jsx)(
                        y.A,
                        {
                            rowIndex: M,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: L,
                            isUsingKeyboardNavigation: j,
                            surrogateCodePoint: P,
                            allowAnimatedEmoji: k,
                            selectedItemClassName: F,
                            onSelect: I,
                            onInspect: w,
                            channelGuildId: G,
                            getEmojiItemProps: D,
                            isMediumSize: ec,
                            isLargeSize: el,
                            pulseItemKey: ea,
                            setPulseItemKey: es,
                            showEmojiFavoriteTooltip: U,
                            messageId: H,
                            isBurstReaction: Y,
                            rowPosition: null == eo || null == (a = eo.current) ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: W,
                        },
                        t,
                    );
                }
                case b.bm.SOUNDMOJI:
                    return;
            }
        },
        ed = (e) =>
            (0, r.jsx)(
                "ul",
                N(T({}, x(M)), {
                    className: s()(S.ND, {
                        [S.HO]: el,
                        [S.X$]: ec,
                    }),
                    ref: eo,
                    children: e.map(eu),
                }),
            );
    if (V === O.R2.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: S.ND,
            ref: eo,
            children: (0, r.jsx)(h.A, {
                channelId: B,
                onSelectSoundmoji: C,
            }),
        });
    if (V !== O.s.TOP_GUILD_EMOJI) return ed(t);
    let ef = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === O.tm.TOP_GUILD_EMOJI ||
                (t.subCategory === O.tm.NEWLY_ADDED_EMOJI &&
                    t.emoji.type === f.i.GUILD &&
                    !p.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id))
            );
        }),
        ep = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === O.tm.NEWLY_ADDED_EMOJI &&
                t.emoji.type === f.i.GUILD &&
                p.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
            );
        });
    return 0 === ep.length
        ? ed(t)
        : (0, r.jsxs)("div", {
              className: S.Ng,
              children: [
                  (0, r.jsx)("div", {
                      className: s()(S.V6, { [S.$3]: 0 === ef.length }),
                      children: ed(ef),
                  }),
                  (0, r.jsxs)("div", {
                      className: S.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: s()(S.eE, {
                                  [S.eM]: 1 === ep.length,
                                  [S.Wk]: ef.length > 0,
                              }),
                              children: ed(ep),
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(S.lD, {
                                  [S.EI]: el,
                                  [S.qU]: ec,
                                  [S.Wk]: ef.length > 0,
                              }),
                              children: [
                                  (0, r.jsx)(g.A, { foreground: S.rI }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: v.intl.string(v.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
