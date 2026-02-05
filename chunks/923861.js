"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    u = n(304072),
    c = n(736653),
    d = n(189551),
    _ = n(770335),
    f = n(598770),
    p = n(850992),
    h = n(860371),
    m = n(594061),
    g = n(771104),
    E = n(954571),
    A = n(484333),
    I = n(189628),
    T = n(732139),
    y = n(652215),
    S = n(985018),
    v = n(351341);
let C = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: a,
            onSelect: C,
            onSelectSoundmoji: b,
            onInspect: N,
            surrogateCodePoint: R,
            getEmojiItemProps: O,
            getEmojiRowProps: D,
            isScrolling: L,
            isUsingKeyboardNavigation: w,
            rowIndex: x,
            allowAnimatedEmoji: P,
            showEmojiFavoriteTooltip: M,
            channelGuildId: k,
            category: U,
            selectedItemClassName: G,
            channelId: V,
            messageId: F,
            isBurstReaction: B,
            inNitroLockedSection: j,
            handleScrollUpOnSectionCollapse: H,
        } = e,
        Y = n(619508),
        W = n(404828),
        K = n(600003),
        z = n(318121),
        $ = n(443336),
        q = n(258901),
        Z = n(135974),
        Q = n(8013),
        X = (0, c.Ay)(),
        J = p.Om.getState(),
        [ee, et] = i.useState(J.inspectedExpressionPosition),
        [en, er] = (0, u.A)(null, 300),
        ei = i.useRef(null);
    i.useEffect(
        () =>
            p.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => et(e),
            ),
        [],
    ),
        i.useEffect(() => {
            m.bW.loadIfNecessary();
        }, []);
    let ea = a === T.as.LARGE,
        es = a === T.as.MEDIUM,
        eo = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`,
                n = function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: a,
                            handleSelect: o,
                            icon: u,
                            ariaLabel: c,
                            shouldShowRoundHighlight: d,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: f } = e,
                        { ref: p, tabIndex: h, onFocus: m, ...g } = O(f, x) ?? {},
                        E = ee.rowIndex === _ && ee.columnIndex === f,
                        A = () => {
                            L.current || w.current || N(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        { ...g, key: t },
                        (0, r.jsx)(l.vN3, {
                            children: (0, r.jsx)("button", {
                                "aria-label": c,
                                ref: p,
                                className: s()(v._X, {
                                    [v.lG]: ea,
                                    [v.Lh]: es,
                                    [v.Bx]: E && !d,
                                    [G ?? ""]: E,
                                    [v.TV]: en === t,
                                }),
                                onFocus: m ?? A,
                                onMouseOver: A,
                                onMouseEnter: n,
                                onMouseLeave: a,
                                onClick: o,
                                tabIndex: h,
                                children: u,
                            }),
                        }),
                    );
                };
            switch (e.type) {
                case A.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = ee.rowIndex === t && ee.columnIndex === i,
                        s = (t) => {
                            t.stopPropagation(),
                                L.current ||
                                    w.current ||
                                    (C(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, d.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || H(),
                                    E.default.track(y.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, o.Mw)(X)
                                    ? q
                                    : Q
                                : (0, o.Mw)(X)
                                  ? Y
                                  : W
                            : a
                              ? (0, o.Mw)(X)
                                  ? $
                                  : Z
                              : (0, o.Mw)(X)
                                ? K
                                : z,
                        u = S.intl.string(e.sectionCollapsedToThreeRows ? S.t.NZI2Zk : S.t["/K2RDH"]);
                    return n({
                        handleSelect: s,
                        icon: (0, r.jsx)("img", { className: v.Kk, src: l, alt: "" }),
                        ariaLabel: u,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case A.bm.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = ee.rowIndex === i && ee.columnIndex === n;
                    return (0, r.jsx)(
                        I.A,
                        {
                            rowIndex: x,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: L,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: R,
                            allowAnimatedEmoji: P,
                            selectedItemClassName: G,
                            onSelect: C,
                            onInspect: N,
                            channelGuildId: k,
                            getEmojiItemProps: O,
                            isMediumSize: es,
                            isLargeSize: ea,
                            pulseItemKey: en,
                            setPulseItemKey: er,
                            showEmojiFavoriteTooltip: M,
                            messageId: F,
                            isBurstReaction: B,
                            rowPosition: ei?.current?.getBoundingClientRect(),
                            inNitroLockedSection: j,
                        },
                        t,
                    );
                }
                case A.bm.SOUNDMOJI:
                    return;
            }
        },
        el = (e) =>
            (0, r.jsx)("ul", {
                ...D(x),
                className: s()(v.ND, { [v.HO]: ea, [v.X$]: es }),
                ref: ei,
                children: e.map(eo),
            });
    if (U === T.R2.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: v.ND,
            ref: ei,
            children: (0, r.jsx)(h.A, { channelId: V, onSelectSoundmoji: b }),
        });
    if (U !== T.s.TOP_GUILD_EMOJI) return el(t);
    let eu = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === T.tm.TOP_GUILD_EMOJI ||
                (t.subCategory === T.tm.NEWLY_ADDED_EMOJI &&
                    t.emoji.type === _.i.GUILD &&
                    !f.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id))
            );
        }),
        ec = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === T.tm.NEWLY_ADDED_EMOJI &&
                t.emoji.type === _.i.GUILD &&
                f.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
            );
        });
    return 0 === ec.length
        ? el(t)
        : (0, r.jsxs)("div", {
              className: v.Ng,
              children: [
                  (0, r.jsx)("div", { className: s()(v.V6, { [v.$3]: 0 === eu.length }), children: el(eu) }),
                  (0, r.jsxs)("div", {
                      className: v.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: s()(v.eE, { [v.eM]: 1 === ec.length, [v.Wk]: eu.length > 0 }),
                              children: el(ec),
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(v.lD, { [v.EI]: ea, [v.qU]: es, [v.Wk]: eu.length > 0 }),
                              children: [
                                  (0, r.jsx)(g.A, { foreground: v.rI }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: S.intl.string(S.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
