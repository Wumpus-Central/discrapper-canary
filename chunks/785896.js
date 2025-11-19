n.d(t, { i: () => d }), n(388685);
var r = n(473749),
    i = n(399606),
    a = n(430824),
    o = n(339085),
    s = n(906411),
    l = n(231053),
    c = n(981631);
let u = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        return (null == r ? void 0 : r.type) === s.B.GUILD
            ? {
                  emoji: r,
                  joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId),
              }
            : {
                  emoji: null,
                  joinedEmojiSourceGuildRecord: null,
              };
    },
    d = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: s, emoji: d } = (0, i.cj)([o.ZP, a.Z], () => u(o.ZP, a.Z, t)),
            f = null != s,
            _ = null != s && s.features.has(c.GuildFeatures.DISCOVERABLE),
            p = (!f || _) && null != t,
            [h, m] = r.useState(p),
            [g, E] = r.useState(null),
            b = null != s ? l.JO.createFromGuildRecord(s) : null,
            [y, O] = r.useState(b),
            [v, I] = r.useState(null),
            T = r.useRef(n);
        return (
            r.useEffect(() => {
                T.current = n;
            }),
            r.useEffect(() => {
                var e, n;
                null == (e = T.current) || e.call(T);
                let r = async () => {
                    var e;
                    let n = null != t ? await (0, l.Fi)(t) : null;
                    if (null != n)
                        switch ((E(n.type), n.type)) {
                            case l.w6.APPLICATION:
                                I(n.application);
                                break;
                            case l.w6.GUILD:
                                O(n.guild);
                        }
                    m(!1), null == (e = T.current) || e.call(T);
                };
                if (p) return void r();
                null == (n = T.current) || n.call(T);
            }, [t, p]),
            {
                expressionSourceGuild: y,
                expressionSourceApplication: v,
                sourceType: g,
                joinedEmojiSourceGuildRecord: s,
                hasJoinedEmojiSourceGuild: f,
                emoji: d,
                isFetching: h,
            }
        );
    };
