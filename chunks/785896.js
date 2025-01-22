r.d(n, {
    i: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(399606),
    s = r(430824),
    l = r(339085),
    u = r(906411),
    c = r(231053),
    d = r(981631);
let f = (e, n, r) => {
        let i = null != r ? e.getCustomEmojiById(r) : null;
        if ((null == i ? void 0 : i.type) === u.B.GUILD)
            return {
                emoji: i,
                joinedEmojiSourceGuildRecord: n.getGuild(null == i ? void 0 : i.guildId)
            };
        return {
            emoji: null,
            joinedEmojiSourceGuildRecord: null
        };
    },
    p = (e) => {
        let { emojiId: n, refreshPositionKey: r } = e,
            { joinedEmojiSourceGuildRecord: i, emoji: u } = (0, o.cj)([l.ZP, s.Z], () => f(l.ZP, s.Z, n)),
            p = null != i,
            h = null != i && i.hasFeature(d.oNc.DISCOVERABLE),
            _ = (!p || h) && null != n,
            [m, g] = a.useState(_),
            [E, v] = a.useState(null),
            y = null != i ? c.JO.createFromGuildRecord(i) : null,
            [b, I] = a.useState(y),
            [T, S] = a.useState(null),
            A = a.useRef(r);
        return (
            a.useEffect(() => {
                A.current = r;
            }),
            a.useEffect(() => {
                var e, r;
                null === (e = A.current) || void 0 === e || e.call(A);
                let i = async () => {
                    var e;
                    let r = null != n ? await (0, c.Fi)(n) : null;
                    if (null != r)
                        switch ((v(r.type), r.type)) {
                            case c.w6.APPLICATION:
                                S(r.application);
                                break;
                            case c.w6.GUILD:
                                I(r.guild);
                        }
                    g(!1), null === (e = A.current) || void 0 === e || e.call(A);
                };
                if (_) {
                    i();
                    return;
                }
                null === (r = A.current) || void 0 === r || r.call(A);
            }, [n, _]),
            {
                expressionSourceGuild: b,
                expressionSourceApplication: T,
                sourceType: E,
                joinedEmojiSourceGuildRecord: i,
                hasJoinedEmojiSourceGuild: p,
                emoji: u,
                isFetching: m
            }
        );
    };
