n.d(t, {
    Y: () => P,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    l = n(775602),
    c = n(508675),
    u = n(770335),
    d = n(598770),
    f = n(451731),
    p = n(850992),
    _ = n(338464),
    h = n(544028),
    m = n(253932),
    g = n(71393),
    E = n(531685),
    b = n(486020),
    y = n(690521),
    O = n(822123),
    A = n(316884),
    v = n(724511),
    S = n(484333),
    I = n(732139),
    T = n(985018),
    C = n(702888);
let N = 250;

function R(e) {
    return null != e && "animated" in e;
}
let w = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = R(t);
        return null != n && r
            ? T.intl.format(T.t.KFW2aY, {
                  guildName: n.name,
              })
            : null;
    },
    P = i.memo(function (e) {
        let t,
            P,
            D,
            { className: x, emojiGrid: L, guildId: j, pickerIntention: M, channel: k } = e,
            U = p.Om.useStore((e) => e.inspectedExpressionPosition),
            G = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = U;
                return null == (e = L[t]) ? void 0 : e[n];
            }, [L, U]);
        switch (null == G ? void 0 : G.type) {
            case S.bm.EMOJI:
                t = null == G ? void 0 : G.emoji;
                break;
            case S.bm.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: "EXPAND_OR_COLLAPSE_EMOJI",
                    guildId: null == G ? void 0 : G.guildId,
                    allNamesString: null == G ? void 0 : G.name,
                };
                break;
            case S.bm.SOUNDMOJI:
            default:
                t = null;
        }
        let V = (0, a.bG)([g.A], () => (null !== t && t.type === u.i.GUILD ? g.A.getGuild(t.guildId) : null), [t]),
            F = (0, a.bG)([E.A], () => E.A.isFocused()),
            B = (0, a.bG)([l.A], () => l.A.useReducedMotion, []),
            H = m.Sf.useSetting(),
            Y = (0, O.O7)(j, R(t) ? t : null),
            W = (0, a.bG)([c.Ay], () => c.Ay.expandedSectionsByGuildIds),
            { newlyAddedEmojis: K } = (0, A.A)(j, M),
            z = (null == G ? void 0 : G.type) === S.bm.EMOJI ? G.subCategory : I.tm.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= N &&
                        R(t) &&
                        z !== I.tm.NONE &&
                        (z === I.tm.NEWLY_ADDED_EMOJI &&
                            null !== t &&
                            t.type === u.i.GUILD &&
                            (0, f.mz)(t.guildId, K[0].id),
                        null != U.source &&
                            (0, O.yB)({
                                emoji: t,
                                subCategory: z,
                                position: G.columnIndex + 1,
                                newlyAddedHighlight: z === I.tm.NEWLY_ADDED_EMOJI && d.A.isNewerThanLastSeen(j, t.id),
                            }));
                };
            }),
            null == t)
        )
            return null;
        let q = h.A.theme;
        if (R(t)) {
            var X;
            let e =
                null != t.id
                    ? b.Ay.getEmojiURL({
                          id: t.id,
                          animated: H && t.animated,
                          size: 28,
                      })
                    : t.url;
            P =
                "" === e
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-md/normal",
                          className: C.J_,
                          children: "surrogates" in t ? t.surrogates : null,
                      })
                    : (0, r.jsx)("img", {
                          alt: null != (X = (0, y.N)(t)) ? X : "",
                          src: e,
                          className: C.Zg,
                      });
        } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
            let e = n(619508),
                i = n(404828),
                a = n(600003),
                o = n(318121);
            P = W.has(t.guildId)
                ? (0, r.jsx)("img", {
                      className: C.Kk,
                      src: (0, s.Mw)(q) ? a : o,
                      alt: "",
                  })
                : (0, r.jsx)("img", {
                      className: C.Kk,
                      src: (0, s.Mw)(q) ? e : i,
                      alt: "",
                  });
        }
        let Z =
            null != V
                ? (0, r.jsx)(v.A, {
                      className: C.__invalid_guildIcon,
                      guild: V,
                      shouldAnimate: !B && F,
                  })
                : null;
        D =
            "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                ? W.has(t.guildId)
                    ? T.intl.string(T.t["/K2RDH"])
                    : T.intl.string(T.t.NZI2Zk)
                : (0, y.N)(t);
        let Q = w({
            inspectedEmoji: t,
            channel: k,
            guildId: j,
            intention: M,
            guild: V,
        });
        return (0, r.jsx)(_.A, {
            className: x,
            graphicPrimary: P,
            graphicSecondary: Z,
            titlePrimary: D,
            titleSecondary: Q,
            isFavorite: Y,
            emojiSubCategory: z,
        });
    });
