n.d(t, { i: () => d }), n(47120);
var r = n(192379),
    i = n(399606),
    o = n(430824),
    a = n(339085),
    s = n(906411),
    l = n(231053),
    c = n(981631);
let u = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        return (null == r ? void 0 : r.type) === s.B.GUILD
            ? {
                  emoji: r,
                  joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId)
              }
            : {
                  emoji: null,
                  joinedEmojiSourceGuildRecord: null
              };
    },
    d = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: s, emoji: d } = (0, i.cj)([a.ZP, o.Z], () => u(a.ZP, o.Z, t)),
            f = null != s,
            _ = null != s && s.hasFeature(c.oNc.DISCOVERABLE),
            p = (!f || _) && null != t,
            [h, m] = r.useState(p),
            [g, E] = r.useState(null),
            b = null != s ? l.JO.createFromGuildRecord(s) : null,
            [y, v] = r.useState(b),
            [O, I] = r.useState(null),
            S = r.useRef(n);
        return (
            r.useEffect(() => {
                S.current = n;
            }),
            r.useEffect(() => {
                var e, n;
                null == (e = S.current) || e.call(S);
                let r = async () => {
                    var e;
                    let n = null != t ? await (0, l.Fi)(t) : null;
                    if (null != n)
                        switch ((E(n.type), n.type)) {
                            case l.w6.APPLICATION:
                                I(n.application);
                                break;
                            case l.w6.GUILD:
                                v(n.guild);
                        }
                    m(!1), null == (e = S.current) || e.call(S);
                };
                if (p) return void r();
                null == (n = S.current) || n.call(S);
            }, [t, p]),
            {
                expressionSourceGuild: y,
                expressionSourceApplication: O,
                sourceType: g,
                joinedEmojiSourceGuildRecord: s,
                hasJoinedEmojiSourceGuild: f,
                emoji: d,
                isFetching: h
            }
        );
    };
