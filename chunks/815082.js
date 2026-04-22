"use strict";
n.d(t, { Y: () => j });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(462887),
    a = n(834730),
    o = n(775602),
    c = n(508675),
    u = n(770335),
    d = n(598770),
    h = n(451731),
    m = n(850992),
    p = n(338464),
    f = n(544028),
    g = n(253932),
    _ = n(71393),
    x = n(531685),
    A = n(486020),
    C = n(690521),
    E = n(822123),
    I = n(316884),
    v = n(724511),
    y = n(484333),
    S = n(732139),
    b = n(985018),
    N = n(854469);
function T(e) {
    return null != e && "animated" in e;
}
let j = l.memo(function (e) {
    let t,
        j,
        R,
        { className: w, emojiGrid: L, guildId: M, pickerIntention: k, channel: O } = e,
        P = m.Om.useStore((e) => e.inspectedExpressionPosition),
        D = l.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = P;
            return L[e]?.[t];
        }, [L, P]);
    switch (D?.type) {
        case y.bm.EMOJI:
            t = D?.emoji;
            break;
        case y.bm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: D?.guildId, allNamesString: D?.name };
            break;
        case y.bm.SOUNDMOJI:
        default:
            t = null;
    }
    let U = (0, s.bG)([_.A], () => (null !== t && t.type === u.i.GUILD ? _.A.getGuild(t.guildId) : null), [t]),
        V = (0, s.bG)([x.A], () => x.A.isFocused()),
        G = (0, s.bG)([o.A], () => o.A.useReducedMotion, []),
        F = g.Sf.useSetting(),
        B = (0, E.O7)(M, T(t) ? t : null),
        H = (0, s.bG)([c.Ay], () => c.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: W } = (0, I.A)(M, k),
        K = D?.type === y.bm.EMOJI ? D.subCategory : S.tm.NONE;
    if (
        (l.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    T(t) &&
                    K !== S.tm.NONE &&
                    (K === S.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === u.i.GUILD &&
                        (0, h.mz)(t.guildId, W[0].id),
                    null != P.source &&
                        (0, E.yB)({
                            emoji: t,
                            subCategory: K,
                            position: D.columnIndex + 1,
                            newlyAddedHighlight: K === S.tm.NEWLY_ADDED_EMOJI && d.A.isNewerThanLastSeen(M, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let z = f.A.theme;
    if (T(t)) {
        let e = null != t.id ? A.Ay.getEmojiURL({ id: t.id, animated: F && t.animated, size: 28 }) : t.url;
        j =
            "" === e
                ? (0, i.jsx)(a.E, {
                      variant: "text-md/normal",
                      className: N.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, i.jsx)("img", { alt: (0, C.N)(t) ?? "", src: e, className: N.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            l = n(404828),
            s = n(600003),
            a = n(318121);
        j = H.has(t.guildId)
            ? (0, i.jsx)("img", { className: N.Kk, src: (0, r.M)(z) ? s : a, alt: "" })
            : (0, i.jsx)("img", { className: N.Kk, src: (0, r.M)(z) ? e : l, alt: "" });
    }
    let Z = null != U ? (0, i.jsx)(v.A, { className: N.__invalid_guildIcon, guild: U, shouldAnimate: !G && V }) : null;
    R =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? H.has(t.guildId)
                ? b.intl.string(b.t["/K2RDH"])
                : b.intl.string(b.t.NZI2Zk)
            : (0, C.N)(t);
    let q = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = T(t);
        return null != n && i ? b.intl.format(b.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: O, guildId: M, intention: k, guild: U });
    return (0, i.jsx)(p.A, {
        className: w,
        graphicPrimary: j,
        graphicSecondary: Z,
        titlePrimary: R,
        titleSecondary: q,
        isFavorite: B,
        emojiSubCategory: K,
    });
});
