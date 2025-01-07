r.d(n, {
    i: function () {
        return _;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(399606),
    o = r(430824),
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
    _ = (e) => {
        let { emojiId: n, refreshPositionKey: r } = e,
            { joinedEmojiSourceGuildRecord: i, emoji: u } = (0, s.cj)([l.ZP, o.Z], () => f(l.ZP, o.Z, n)),
            _ = null != i,
            h = null != i && i.hasFeature(d.oNc.DISCOVERABLE),
            p = (!_ || h) && null != n,
            [m, g] = a.useState(p),
            [E, v] = a.useState(null),
            I = null != i ? c.JO.createFromGuildRecord(i) : null,
            [T, b] = a.useState(I),
            [y, S] = a.useState(null),
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
                                b(r.guild);
                        }
                    g(!1), null === (e = A.current) || void 0 === e || e.call(A);
                };
                if (p) {
                    i();
                    return;
                }
                null === (r = A.current) || void 0 === r || r.call(A);
            }, [n, p]),
            {
                expressionSourceGuild: T,
                expressionSourceApplication: y,
                sourceType: E,
                joinedEmojiSourceGuildRecord: i,
                hasJoinedEmojiSourceGuild: _,
                emoji: u,
                isFetching: m
            }
        );
    };
