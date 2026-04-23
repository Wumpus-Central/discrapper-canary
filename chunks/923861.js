"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(462887),
    l = n(187322),
    u = n(834730),
    c = n(304072),
    d = n(736653),
    _ = n(189551),
    f = n(770335),
    p = n(598770),
    h = n(850992),
    E = n(860371),
    m = n(594061),
    g = n(771104),
    A = n(954571),
    I = n(484333),
    T = n(189628),
    S = n(732139),
    y = n(652215),
    N = n(985018),
    v = n(6376);
let C = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: s,
            onSelect: C,
            onSelectSoundmoji: O,
            onInspect: R,
            surrogateCodePoint: b,
            getEmojiItemProps: D,
            getEmojiRowProps: L,
            isScrolling: w,
            isUsingKeyboardNavigation: M,
            rowIndex: P,
            allowAnimatedEmoji: x,
            showEmojiFavoriteTooltip: k,
            channelGuildId: U,
            category: G,
            selectedItemClassName: F,
            channelId: V,
            messageId: B,
            isBurstReaction: H,
            inNitroLockedSection: j,
            handleScrollUpOnSectionCollapse: Y,
        } = e,
        W = n(619508),
        K = n(404828),
        $ = n(600003),
        z = n(318121),
        q = n(443336),
        X = n(258901),
        Q = n(135974),
        Z = n(8013),
        J = (0, d.Ay)(),
        ee = h.Om.getState(),
        [et, en] = i.useState(ee.inspectedExpressionPosition),
        [er, ei] = (0, c.A)(null, 300),
        es = i.useRef(null);
    i.useEffect(
        () =>
            h.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => en(e),
            ),
        [],
    ),
        i.useEffect(() => {
            m.bW.loadIfNecessary();
        }, []);
    let ea = s === S.as.LARGE,
        eo = s === S.as.MEDIUM,
        el = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case I.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: s } = e,
                        u = et.rowIndex === n && et.columnIndex === s,
                        c = e.sectionCollapsedToThreeRows
                            ? u
                                ? (0, o.M)(J)
                                    ? X
                                    : Z
                                : (0, o.M)(J)
                                  ? W
                                  : K
                            : u
                              ? (0, o.M)(J)
                                  ? q
                                  : Q
                              : (0, o.M)(J)
                                ? $
                                : z,
                        d = N.intl.string(e.sectionCollapsedToThreeRows ? N.t.NZI2Zk : N.t["/K2RDH"]);
                    return (function () {
                        let {
                                onMouseEnter: n,
                                onMouseLeave: s,
                                handleSelect: o,
                                icon: u,
                                ariaLabel: c,
                                shouldShowRoundHighlight: d,
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { visibleRowIndex: _, columnIndex: f } = e,
                            { ref: p, tabIndex: h, onFocus: E, ...m } = D(f, P) ?? {},
                            g = et.rowIndex === _ && et.columnIndex === f,
                            A = () => {
                                w.current || M.current || R(e);
                            };
                        return (0, i.createElement)(
                            "li",
                            { ...m, key: t },
                            (0, r.jsx)(l.vN, {
                                children: (0, r.jsx)("button", {
                                    "aria-label": c,
                                    ref: p,
                                    className: a()(v._X, {
                                        [v.lG]: ea,
                                        [v.Lh]: eo,
                                        [v.Bx]: g && !d,
                                        [F ?? ""]: g,
                                        [v.TV]: er === t,
                                    }),
                                    onFocus: E ?? A,
                                    onMouseOver: A,
                                    onMouseEnter: n,
                                    onMouseLeave: s,
                                    onClick: o,
                                    tabIndex: h,
                                    children: u,
                                }),
                            }),
                        );
                    })({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                w.current ||
                                    M.current ||
                                    (C(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, _.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || Y(),
                                    A.default.track(y.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, r.jsx)("img", { className: v.Kk, src: c, alt: "" }),
                        ariaLabel: d,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case I.bm.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = et.rowIndex === i && et.columnIndex === n;
                    return (0, r.jsx)(
                        T.A,
                        {
                            rowIndex: P,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: w,
                            isUsingKeyboardNavigation: M,
                            surrogateCodePoint: b,
                            allowAnimatedEmoji: x,
                            selectedItemClassName: F,
                            onSelect: C,
                            onInspect: R,
                            channelGuildId: U,
                            getEmojiItemProps: D,
                            isMediumSize: eo,
                            isLargeSize: ea,
                            pulseItemKey: er,
                            setPulseItemKey: ei,
                            showEmojiFavoriteTooltip: k,
                            messageId: B,
                            isBurstReaction: H,
                            rowPosition: es?.current?.getBoundingClientRect(),
                            inNitroLockedSection: j,
                        },
                        t,
                    );
                }
                case I.bm.SOUNDMOJI:
                    return;
            }
        },
        eu = (e) =>
            (0, r.jsx)("ul", {
                ...L(P),
                className: a()(v.ND, { [v.HO]: ea, [v.X$]: eo }),
                ref: es,
                children: e.map(el),
            });
    if (G === S.R2.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: v.ND,
            ref: es,
            children: (0, r.jsx)(E.A, { channelId: V, onSelectSoundmoji: O }),
        });
    if (G !== S.s.TOP_GUILD_EMOJI) return eu(t);
    let ec = t.filter(
            (e) =>
                e.subCategory === S.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === S.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === f.i.GUILD &&
                    !p.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        ed = t.filter(
            (e) =>
                e.subCategory === S.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === f.i.GUILD &&
                p.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === ed.length
        ? eu(t)
        : (0, r.jsxs)("div", {
              className: v.Ng,
              children: [
                  (0, r.jsx)("div", { className: a()(v.V6, { [v.$3]: 0 === ec.length }), children: eu(ec) }),
                  (0, r.jsxs)("div", {
                      className: v.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: a()(v.eE, { [v.eM]: 1 === ed.length, [v.Wk]: ec.length > 0 }),
                              children: eu(ed),
                          }),
                          (0, r.jsxs)("div", {
                              className: a()(v.lD, { [v.EI]: ea, [v.qU]: eo, [v.Wk]: ec.length > 0 }),
                              children: [
                                  (0, r.jsx)(g.A, { foreground: v.rI }),
                                  (0, r.jsx)(u.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: N.intl.string(N.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
