"use strict";
n.d(t, { A: () => b });
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
    h = n(850992),
    p = n(860371),
    g = n(594061),
    E = n(771104),
    A = n(954571),
    I = n(484333),
    T = n(189628),
    y = n(732139),
    S = n(652215),
    v = n(985018),
    C = n(351341);
let b = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: a,
            onSelect: b,
            onSelectSoundmoji: N,
            onInspect: R,
            surrogateCodePoint: O,
            getEmojiItemProps: D,
            getEmojiRowProps: L,
            isScrolling: w,
            isUsingKeyboardNavigation: x,
            rowIndex: P,
            allowAnimatedEmoji: M,
            showEmojiFavoriteTooltip: k,
            channelGuildId: U,
            category: G,
            selectedItemClassName: F,
            channelId: V,
            messageId: B,
            isBurstReaction: j,
            inNitroLockedSection: H,
            handleScrollUpOnSectionCollapse: Y,
        } = e,
        W = n(619508),
        K = n(404828),
        $ = n(600003),
        z = n(318121),
        q = n(443336),
        X = n(258901),
        Z = n(135974),
        Q = n(8013),
        J = (0, c.Ay)(),
        ee = h.Om.getState(),
        [et, en] = i.useState(ee.inspectedExpressionPosition),
        [er, ei] = (0, u.A)(null, 300),
        ea = i.useRef(null);
    i.useEffect(
        () =>
            h.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => en(e),
            ),
        [],
    ),
        i.useEffect(() => {
            g.bW.loadIfNecessary();
        }, []);
    let es = a === y.as.LARGE,
        eo = a === y.as.MEDIUM,
        el = (e) => {
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
                        { ref: h, tabIndex: p, onFocus: g, ...E } = D(f, P) ?? {},
                        A = et.rowIndex === _ && et.columnIndex === f,
                        I = () => {
                            w.current || x.current || R(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        { ...E, key: t },
                        (0, r.jsx)(l.vN3, {
                            children: (0, r.jsx)("button", {
                                "aria-label": c,
                                ref: h,
                                className: s()(C._X, {
                                    [C.lG]: es,
                                    [C.Lh]: eo,
                                    [C.Bx]: A && !d,
                                    [F ?? ""]: A,
                                    [C.TV]: er === t,
                                }),
                                onFocus: g ?? I,
                                onMouseOver: I,
                                onMouseEnter: n,
                                onMouseLeave: a,
                                onClick: o,
                                tabIndex: p,
                                children: u,
                            }),
                        }),
                    );
                };
            switch (e.type) {
                case I.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = et.rowIndex === t && et.columnIndex === i,
                        s = (t) => {
                            t.stopPropagation(),
                                w.current ||
                                    x.current ||
                                    (b(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, d.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || Y(),
                                    A.default.track(S.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, o.Mw)(J)
                                    ? X
                                    : Q
                                : (0, o.Mw)(J)
                                  ? W
                                  : K
                            : a
                              ? (0, o.Mw)(J)
                                  ? q
                                  : Z
                              : (0, o.Mw)(J)
                                ? $
                                : z,
                        u = v.intl.string(e.sectionCollapsedToThreeRows ? v.t.NZI2Zk : v.t["/K2RDH"]);
                    return n({
                        handleSelect: s,
                        icon: (0, r.jsx)("img", { className: C.Kk, src: l, alt: "" }),
                        ariaLabel: u,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case I.bm.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = et.rowIndex === i && et.columnIndex === n;
                    return (0, r.jsx)(
                        T.A,
                        {
                            rowIndex: P,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: w,
                            isUsingKeyboardNavigation: x,
                            surrogateCodePoint: O,
                            allowAnimatedEmoji: M,
                            selectedItemClassName: F,
                            onSelect: b,
                            onInspect: R,
                            channelGuildId: U,
                            getEmojiItemProps: D,
                            isMediumSize: eo,
                            isLargeSize: es,
                            pulseItemKey: er,
                            setPulseItemKey: ei,
                            showEmojiFavoriteTooltip: k,
                            messageId: B,
                            isBurstReaction: j,
                            rowPosition: ea?.current?.getBoundingClientRect(),
                            inNitroLockedSection: H,
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
                className: s()(C.ND, { [C.HO]: es, [C.X$]: eo }),
                ref: ea,
                children: e.map(el),
            });
    if (G === y.R2.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: C.ND,
            ref: ea,
            children: (0, r.jsx)(p.A, { channelId: V, onSelectSoundmoji: N }),
        });
    if (G !== y.s.TOP_GUILD_EMOJI) return eu(t);
    let ec = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === y.tm.TOP_GUILD_EMOJI ||
                (t.subCategory === y.tm.NEWLY_ADDED_EMOJI &&
                    t.emoji.type === _.i.GUILD &&
                    !f.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id))
            );
        }),
        ed = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === y.tm.NEWLY_ADDED_EMOJI &&
                t.emoji.type === _.i.GUILD &&
                f.A.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
            );
        });
    return 0 === ed.length
        ? eu(t)
        : (0, r.jsxs)("div", {
              className: C.Ng,
              children: [
                  (0, r.jsx)("div", { className: s()(C.V6, { [C.$3]: 0 === ec.length }), children: eu(ec) }),
                  (0, r.jsxs)("div", {
                      className: C.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: s()(C.eE, { [C.eM]: 1 === ed.length, [C.Wk]: ec.length > 0 }),
                              children: eu(ed),
                          }),
                          (0, r.jsxs)("div", {
                              className: s()(C.lD, { [C.EI]: es, [C.qU]: eo, [C.Wk]: ec.length > 0 }),
                              children: [
                                  (0, r.jsx)(E.A, { foreground: C.rI }),
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
