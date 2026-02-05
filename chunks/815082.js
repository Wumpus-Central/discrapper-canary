"use strict";
n.d(t, { Y: () => L });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    l = n(775602),
    u = n(508675),
    c = n(770335),
    d = n(598770),
    _ = n(451731),
    f = n(850992),
    p = n(338464),
    h = n(544028),
    m = n(253932),
    g = n(71393),
    E = n(531685),
    A = n(486020),
    I = n(690521),
    T = n(822123),
    y = n(316884),
    S = n(724511),
    v = n(484333),
    C = n(732139),
    b = n(985018),
    N = n(702888);
let R = 250;
function O(e) {
    return null != e && "animated" in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = O(t);
        return null != n && r ? b.intl.format(b.t.KFW2aY, { guildName: n.name }) : null;
    },
    L = i.memo(function (e) {
        let t,
            L,
            w,
            { className: x, emojiGrid: P, guildId: M, pickerIntention: k, channel: U } = e,
            G = f.Om.useStore((e) => e.inspectedExpressionPosition),
            V = i.useMemo(() => {
                let { rowIndex: e, columnIndex: t } = G;
                return P[e]?.[t];
            }, [P, G]);
        switch (V?.type) {
            case v.bm.EMOJI:
                t = V?.emoji;
                break;
            case v.bm.EXPAND_OR_COLLAPSE_EMOJIS:
                t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: V?.guildId, allNamesString: V?.name };
                break;
            case v.bm.SOUNDMOJI:
            default:
                t = null;
        }
        let F = (0, a.bG)([g.A], () => (null !== t && t.type === c.i.GUILD ? g.A.getGuild(t.guildId) : null), [t]),
            B = (0, a.bG)([E.A], () => E.A.isFocused()),
            j = (0, a.bG)([l.A], () => l.A.useReducedMotion, []),
            H = m.Sf.useSetting(),
            Y = (0, T.O7)(M, O(t) ? t : null),
            W = (0, a.bG)([u.Ay], () => u.Ay.expandedSectionsByGuildIds),
            { newlyAddedEmojis: K } = (0, y.A)(M, k),
            z = V?.type === v.bm.EMOJI ? V.subCategory : C.tm.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= R &&
                        O(t) &&
                        z !== C.tm.NONE &&
                        (z === C.tm.NEWLY_ADDED_EMOJI &&
                            null !== t &&
                            t.type === c.i.GUILD &&
                            (0, _.mz)(t.guildId, K[0].id),
                        null != G.source &&
                            (0, T.yB)({
                                emoji: t,
                                subCategory: z,
                                position: V.columnIndex + 1,
                                newlyAddedHighlight: z === C.tm.NEWLY_ADDED_EMOJI && d.A.isNewerThanLastSeen(M, t.id),
                            }));
                };
            }),
            null == t)
        )
            return null;
        let $ = h.A.theme;
        if (O(t)) {
            let e = null != t.id ? A.Ay.getEmojiURL({ id: t.id, animated: H && t.animated, size: 28 }) : t.url;
            L =
                "" === e
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-md/normal",
                          className: N.J_,
                          children: "surrogates" in t ? t.surrogates : null,
                      })
                    : (0, r.jsx)("img", { alt: (0, I.N)(t) ?? "", src: e, className: N.Zg });
        } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
            let e = n(619508),
                i = n(404828),
                a = n(600003),
                o = n(318121);
            L = W.has(t.guildId)
                ? (0, r.jsx)("img", { className: N.Kk, src: (0, s.Mw)($) ? a : o, alt: "" })
                : (0, r.jsx)("img", { className: N.Kk, src: (0, s.Mw)($) ? e : i, alt: "" });
        }
        let q =
            null != F ? (0, r.jsx)(S.A, { className: N.__invalid_guildIcon, guild: F, shouldAnimate: !j && B }) : null;
        w =
            "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                ? W.has(t.guildId)
                    ? b.intl.string(b.t["/K2RDH"])
                    : b.intl.string(b.t.NZI2Zk)
                : (0, I.N)(t);
        let Z = D({ inspectedEmoji: t, channel: U, guildId: M, intention: k, guild: F });
        return (0, r.jsx)(p.A, {
            className: x,
            graphicPrimary: L,
            graphicSecondary: q,
            titlePrimary: w,
            titleSecondary: Z,
            isFavorite: Y,
            emojiSubCategory: z,
        });
    });
