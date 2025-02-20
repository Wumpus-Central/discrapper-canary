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
            p = null != s && s.hasFeature(c.oNc.DISCOVERABLE),
            _ = (!f || p) && null != t,
            [h, m] = r.useState(_),
            [g, E] = r.useState(null),
            v = null != s ? l.JO.createFromGuildRecord(s) : null,
            [b, y] = r.useState(v),
            [O, S] = r.useState(null),
            I = r.useRef(n);
        return (
            r.useEffect(() => {
                I.current = n;
            }),
            r.useEffect(() => {
                var e, n;
                null === (e = I.current) || void 0 === e || e.call(I);
                let r = async () => {
                    var e;
                    let n = null != t ? await (0, l.Fi)(t) : null;
                    if (null != n)
                        switch ((E(n.type), n.type)) {
                            case l.w6.APPLICATION:
                                S(n.application);
                                break;
                            case l.w6.GUILD:
                                y(n.guild);
                        }
                    m(!1), null === (e = I.current) || void 0 === e || e.call(I);
                };
                if (_) {
                    r();
                    return;
                }
                null === (n = I.current) || void 0 === n || n.call(I);
            }, [t, _]),
            {
                expressionSourceGuild: b,
                expressionSourceApplication: O,
                sourceType: g,
                joinedEmojiSourceGuildRecord: s,
                hasJoinedEmojiSourceGuild: f,
                emoji: d,
                isFetching: h
            }
        );
    };
