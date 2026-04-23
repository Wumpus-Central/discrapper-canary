"use strict";
n.d(t, { Y: () => b });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(462887),
    o = n(834730),
    l = n(775602),
    u = n(508675),
    c = n(770335),
    d = n(598770),
    _ = n(451731),
    f = n(850992),
    p = n(338464),
    h = n(544028),
    E = n(253932),
    m = n(71393),
    g = n(531685),
    A = n(486020),
    I = n(690521),
    T = n(822123),
    S = n(316884),
    y = n(724511),
    N = n(484333),
    v = n(732139),
    C = n(985018),
    O = n(854469);
function R(e) {
    return null != e && "animated" in e;
}
let b = i.memo(function (e) {
    let t,
        b,
        D,
        { className: L, emojiGrid: w, guildId: M, pickerIntention: P, channel: x } = e,
        k = f.Om.useStore((e) => e.inspectedExpressionPosition),
        U = i.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = k;
            return w[e]?.[t];
        }, [w, k]);
    switch (U?.type) {
        case N.bm.EMOJI:
            t = U?.emoji;
            break;
        case N.bm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: U?.guildId, allNamesString: U?.name };
            break;
        case N.bm.SOUNDMOJI:
        default:
            t = null;
    }
    let G = (0, s.bG)([m.A], () => (null !== t && t.type === c.i.GUILD ? m.A.getGuild(t.guildId) : null), [t]),
        F = (0, s.bG)([g.A], () => g.A.isFocused()),
        V = (0, s.bG)([l.A], () => l.A.useReducedMotion, []),
        B = E.Sf.useSetting(),
        H = (0, T.O7)(M, R(t) ? t : null),
        j = (0, s.bG)([u.Ay], () => u.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: Y } = (0, S.A)(M, P),
        W = U?.type === N.bm.EMOJI ? U.subCategory : v.tm.NONE;
    if (
        (i.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    R(t) &&
                    W !== v.tm.NONE &&
                    (W === v.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === c.i.GUILD &&
                        (0, _.mz)(t.guildId, Y[0].id),
                    null != k.source &&
                        (0, T.yB)({
                            emoji: t,
                            subCategory: W,
                            position: U.columnIndex + 1,
                            newlyAddedHighlight: W === v.tm.NEWLY_ADDED_EMOJI && d.A.isNewerThanLastSeen(M, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let K = h.A.theme;
    if (R(t)) {
        let e = null != t.id ? A.Ay.getEmojiURL({ id: t.id, animated: B && t.animated, size: 28 }) : t.url;
        b =
            "" === e
                ? (0, r.jsx)(o.E, {
                      variant: "text-md/normal",
                      className: O.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, r.jsx)("img", { alt: (0, I.N)(t) ?? "", src: e, className: O.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            i = n(404828),
            s = n(600003),
            o = n(318121);
        b = j.has(t.guildId)
            ? (0, r.jsx)("img", { className: O.Kk, src: (0, a.M)(K) ? s : o, alt: "" })
            : (0, r.jsx)("img", { className: O.Kk, src: (0, a.M)(K) ? e : i, alt: "" });
    }
    let $ = null != G ? (0, r.jsx)(y.A, { className: O.__invalid_guildIcon, guild: G, shouldAnimate: !V && F }) : null;
    D =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? j.has(t.guildId)
                ? C.intl.string(C.t["/K2RDH"])
                : C.intl.string(C.t.NZI2Zk)
            : (0, I.N)(t);
    let z = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = R(t);
        return null != n && r ? C.intl.format(C.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: x, guildId: M, intention: P, guild: G });
    return (0, r.jsx)(p.A, {
        className: L,
        graphicPrimary: b,
        graphicSecondary: $,
        titlePrimary: D,
        titleSecondary: z,
        isFavorite: H,
        emojiSubCategory: W,
    });
});
