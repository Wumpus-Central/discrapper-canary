n.d(t, { i: () => d }), n(47120);
var i = n(192379),
    r = n(399606),
    a = n(430824),
    s = n(339085),
    o = n(906411),
    l = n(231053),
    u = n(981631);
let c = (e, t, n) => {
        let i = null != n ? e.getCustomEmojiById(n) : null;
        return (null == i ? void 0 : i.type) === o.B.GUILD
            ? {
                  emoji: i,
                  joinedEmojiSourceGuildRecord: t.getGuild(null == i ? void 0 : i.guildId)
              }
            : {
                  emoji: null,
                  joinedEmojiSourceGuildRecord: null
              };
    },
    d = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: o, emoji: d } = (0, r.cj)([s.ZP, a.Z], () => c(s.ZP, a.Z, t)),
            f = null != o,
            _ = null != o && o.hasFeature(u.oNc.DISCOVERABLE),
            p = (!f || _) && null != t,
            [h, m] = i.useState(p),
            [g, E] = i.useState(null),
            v = null != o ? l.JO.createFromGuildRecord(o) : null,
            [y, I] = i.useState(v),
            [T, b] = i.useState(null),
            S = i.useRef(n);
        return (
            i.useEffect(() => {
                S.current = n;
            }),
            i.useEffect(() => {
                var e, n;
                null === (e = S.current) || void 0 === e || e.call(S);
                let i = async () => {
                    var e;
                    let n = null != t ? await (0, l.Fi)(t) : null;
                    if (null != n)
                        switch ((E(n.type), n.type)) {
                            case l.w6.APPLICATION:
                                b(n.application);
                                break;
                            case l.w6.GUILD:
                                I(n.guild);
                        }
                    m(!1), null === (e = S.current) || void 0 === e || e.call(S);
                };
                if (p) {
                    i();
                    return;
                }
                null === (n = S.current) || void 0 === n || n.call(S);
            }, [t, p]),
            {
                expressionSourceGuild: y,
                expressionSourceApplication: T,
                sourceType: g,
                joinedEmojiSourceGuildRecord: o,
                hasJoinedEmojiSourceGuild: f,
                emoji: d,
                isFetching: h
            }
        );
    };
