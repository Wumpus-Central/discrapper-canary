"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(462887),
    o = n(187322),
    c = n(834730),
    u = n(304072),
    d = n(736653),
    h = n(189551),
    m = n(770335),
    p = n(598770),
    f = n(850992),
    g = n(860371),
    _ = n(594061),
    x = n(771104),
    A = n(954571),
    C = n(484333),
    E = n(189628),
    I = n(732139),
    v = n(652215),
    y = n(985018),
    S = n(503656);
let b = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: s,
            onSelect: b,
            onSelectSoundmoji: N,
            onInspect: T,
            surrogateCodePoint: j,
            getEmojiItemProps: R,
            getEmojiRowProps: w,
            isScrolling: L,
            isUsingKeyboardNavigation: M,
            rowIndex: k,
            allowAnimatedEmoji: O,
            showEmojiFavoriteTooltip: P,
            channelGuildId: D,
            category: U,
            selectedItemClassName: V,
            channelId: G,
            messageId: F,
            isBurstReaction: B,
            inNitroLockedSection: H,
            handleScrollUpOnSectionCollapse: W,
        } = e,
        K = n(619508),
        z = n(404828),
        Z = n(600003),
        q = n(318121),
        Y = n(443336),
        J = n(258901),
        $ = n(135974),
        X = n(8013),
        Q = (0, d.Ay)(),
        ee = f.Om.getState(),
        [et, en] = l.useState(ee.inspectedExpressionPosition),
        [ei, el] = (0, u.A)(null, 300),
        es = l.useRef(null);
    l.useEffect(
        () =>
            f.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => en(e),
            ),
        [],
    ),
        l.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []);
    let er = s === I.as.LARGE,
        ea = s === I.as.MEDIUM,
        eo = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case C.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: s } = e,
                        c = et.rowIndex === n && et.columnIndex === s,
                        u = e.sectionCollapsedToThreeRows
                            ? c
                                ? (0, a.M)(Q)
                                    ? J
                                    : X
                                : (0, a.M)(Q)
                                  ? K
                                  : z
                            : c
                              ? (0, a.M)(Q)
                                  ? Y
                                  : $
                              : (0, a.M)(Q)
                                ? Z
                                : q,
                        d = y.intl.string(e.sectionCollapsedToThreeRows ? y.t.NZI2Zk : y.t["/K2RDH"]);
                    return (function () {
                        let {
                                onMouseEnter: n,
                                onMouseLeave: s,
                                handleSelect: a,
                                icon: c,
                                ariaLabel: u,
                                shouldShowRoundHighlight: d,
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { visibleRowIndex: h, columnIndex: m } = e,
                            { ref: p, tabIndex: f, onFocus: g, ..._ } = R(m, k) ?? {},
                            x = et.rowIndex === h && et.columnIndex === m,
                            A = () => {
                                L.current || M.current || T(e);
                            };
                        return (0, l.createElement)(
                            "li",
                            { ..._, key: t },
                            (0, i.jsx)(o.vN, {
                                children: (0, i.jsx)("button", {
                                    "aria-label": u,
                                    ref: p,
                                    className: r()(S._X, {
                                        [S.lG]: er,
                                        [S.Lh]: ea,
                                        [S.Bx]: x && !d,
                                        [V ?? ""]: x,
                                        [S.TV]: ei === t,
                                    }),
                                    onFocus: g ?? A,
                                    onMouseOver: A,
                                    onMouseEnter: n,
                                    onMouseLeave: s,
                                    onClick: a,
                                    tabIndex: f,
                                    children: c,
                                }),
                            }),
                        );
                    })({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                L.current ||
                                    M.current ||
                                    (b(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, h.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || W(),
                                    A.default.track(v.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, i.jsx)("img", { className: S.Kk, src: u, alt: "" }),
                        ariaLabel: d,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case C.bm.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: l } = e,
                        s = et.rowIndex === l && et.columnIndex === n;
                    return (0, i.jsx)(
                        E.A,
                        {
                            rowIndex: k,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: L,
                            isUsingKeyboardNavigation: M,
                            surrogateCodePoint: j,
                            allowAnimatedEmoji: O,
                            selectedItemClassName: V,
                            onSelect: b,
                            onInspect: T,
                            channelGuildId: D,
                            getEmojiItemProps: R,
                            isMediumSize: ea,
                            isLargeSize: er,
                            pulseItemKey: ei,
                            setPulseItemKey: el,
                            showEmojiFavoriteTooltip: P,
                            messageId: F,
                            isBurstReaction: B,
                            rowPosition: es?.current?.getBoundingClientRect(),
                            inNitroLockedSection: H,
                        },
                        t,
                    );
                }
                case C.bm.SOUNDMOJI:
                    return;
            }
        },
        ec = (e) =>
            (0, i.jsx)("ul", {
                ...w(k),
                className: r()(S.ND, { [S.HO]: er, [S.X$]: ea }),
                ref: es,
                children: e.map(eo),
            });
    if (U === I.R2.SOUNDMOJI)
        return (0, i.jsx)("ul", {
            className: S.ND,
            ref: es,
            children: (0, i.jsx)(g.A, { channelId: G, onSelectSoundmoji: N }),
        });
    if (U !== I.s.TOP_GUILD_EMOJI) return ec(t);
    let eu = t.filter(
            (e) =>
                e.subCategory === I.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === I.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === m.i.GUILD &&
                    !p.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        ed = t.filter(
            (e) =>
                e.subCategory === I.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === m.i.GUILD &&
                p.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === ed.length
        ? ec(t)
        : (0, i.jsxs)("div", {
              className: S.Ng,
              children: [
                  (0, i.jsx)("div", { className: r()(S.V6, { [S.$3]: 0 === eu.length }), children: ec(eu) }),
                  (0, i.jsxs)("div", {
                      className: S.bc,
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(S.eE, { [S.eM]: 1 === ed.length, [S.Wk]: eu.length > 0 }),
                              children: ec(ed),
                          }),
                          (0, i.jsxs)("div", {
                              className: r()(S.lD, { [S.EI]: er, [S.qU]: ea, [S.Wk]: eu.length > 0 }),
                              children: [
                                  (0, i.jsx)(x.A, { foreground: S.rI }),
                                  (0, i.jsx)(c.E, {
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
