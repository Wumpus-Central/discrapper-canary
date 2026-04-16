"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(771104),
    g = n(954571),
    A = n(484333),
    I = n(189628),
    T = n(732139),
    S = n(652215),
    y = n(985018),
    v = n(6376);
let N = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: s,
            onSelect: N,
            onSelectSoundmoji: C,
            onInspect: R,
            surrogateCodePoint: O,
            getEmojiItemProps: b,
            getEmojiRowProps: D,
            isScrolling: L,
            isUsingKeyboardNavigation: w,
            rowIndex: M,
            allowAnimatedEmoji: P,
            showEmojiFavoriteTooltip: x,
            channelGuildId: k,
            category: U,
            selectedItemClassName: G,
            channelId: F,
            messageId: V,
            isBurstReaction: B,
            inNitroLockedSection: H,
            handleScrollUpOnSectionCollapse: j,
        } = e,
        Y = n(619508),
        W = n(404828),
        K = n(600003),
        $ = n(318121),
        z = n(443336),
        q = n(258901),
        Z = n(135974),
        X = n(8013),
        Q = (0, c.Ay)(),
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
    let es = s === T.as.LARGE,
        ea = s === T.as.MEDIUM,
        eo = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`,
                n = function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: s,
                            handleSelect: o,
                            icon: u,
                            ariaLabel: c,
                            shouldShowRoundHighlight: d,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: f } = e,
                        { ref: p, tabIndex: h, onFocus: m, ...E } = b(f, M) ?? {},
                        g = ee.rowIndex === _ && ee.columnIndex === f,
                        A = () => {
                            L.current || w.current || R(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        { ...E, key: t },
                        (0, r.jsx)(l.vN3, {
                            children: (0, r.jsx)("button", {
                                "aria-label": c,
                                ref: p,
                                className: a()(v._X, {
                                    [v.lG]: es,
                                    [v.Lh]: ea,
                                    [v.Bx]: g && !d,
                                    [G ?? ""]: g,
                                    [v.TV]: en === t,
                                }),
                                onFocus: m ?? A,
                                onMouseOver: A,
                                onMouseEnter: n,
                                onMouseLeave: s,
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
                        s = ee.rowIndex === t && ee.columnIndex === i,
                        a = (t) => {
                            t.stopPropagation(),
                                L.current ||
                                    w.current ||
                                    (N(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, d.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || j(),
                                    g.default.track(S.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? s
                                ? (0, o.Mw)(Q)
                                    ? q
                                    : X
                                : (0, o.Mw)(Q)
                                  ? Y
                                  : W
                            : s
                              ? (0, o.Mw)(Q)
                                  ? z
                                  : Z
                              : (0, o.Mw)(Q)
                                ? K
                                : $,
                        u = y.intl.string(e.sectionCollapsedToThreeRows ? y.t.NZI2Zk : y.t["/K2RDH"]);
                    return n({
                        handleSelect: a,
                        icon: (0, r.jsx)("img", { className: v.Kk, src: l, alt: "" }),
                        ariaLabel: u,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case A.bm.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = ee.rowIndex === i && ee.columnIndex === n;
                    return (0, r.jsx)(
                        I.A,
                        {
                            rowIndex: M,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: L,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: O,
                            allowAnimatedEmoji: P,
                            selectedItemClassName: G,
                            onSelect: N,
                            onInspect: R,
                            channelGuildId: k,
                            getEmojiItemProps: b,
                            isMediumSize: ea,
                            isLargeSize: es,
                            pulseItemKey: en,
                            setPulseItemKey: er,
                            showEmojiFavoriteTooltip: x,
                            messageId: V,
                            isBurstReaction: B,
                            rowPosition: ei?.current?.getBoundingClientRect(),
                            inNitroLockedSection: H,
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
                ...D(M),
                className: a()(v.ND, { [v.HO]: es, [v.X$]: ea }),
                ref: ei,
                children: e.map(eo),
            });
    if (U === T.R2.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: v.ND,
            ref: ei,
            children: (0, r.jsx)(h.A, { channelId: F, onSelectSoundmoji: C }),
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
                  (0, r.jsx)("div", { className: a()(v.V6, { [v.$3]: 0 === eu.length }), children: el(eu) }),
                  (0, r.jsxs)("div", {
                      className: v.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: a()(v.eE, { [v.eM]: 1 === ec.length, [v.Wk]: eu.length > 0 }),
                              children: el(ec),
                          }),
                          (0, r.jsxs)("div", {
                              className: a()(v.lD, { [v.EI]: es, [v.qU]: ea, [v.Wk]: eu.length > 0 }),
                              children: [
                                  (0, r.jsx)(E.A, { foreground: v.rI }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: y.intl.string(y.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
