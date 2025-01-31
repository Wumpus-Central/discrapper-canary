n.d(t, { Z: () => u });
var i = n(933557),
    r = n(592125),
    a = n(699516),
    s = n(594174),
    o = n(727785),
    l = n(981631);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
        c = t.getChannel(e);
    if (null == c) return null;
    let d = (0, i.F6)(c, n, u);
    switch (c.type) {
        case l.d4z.DM: {
            let e = n.getUser(c.getRecipientId());
            if (null == e) return null;
            return {
                type: o.h8.USER,
                record: e,
                score: 0,
                comparator: d
            };
        }
        case l.d4z.GROUP_DM:
            return {
                type: o.h8.GROUP_DM,
                record: c,
                score: 0,
                comparator: d
            };
        case l.d4z.GUILD_VOICE:
        case l.d4z.GUILD_STAGE_VOICE:
            return {
                type: o.h8.VOICE_CHANNEL,
                record: c,
                score: 0,
                comparator: d
            };
        default:
            return {
                type: o.h8.TEXT_CHANNEL,
                record: c,
                score: 0,
                comparator: d
            };
    }
}
