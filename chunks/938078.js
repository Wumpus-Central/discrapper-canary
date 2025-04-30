n.d(t, { Z: () => c });
var r = n(933557),
    i = n(592125),
    o = n(699516),
    a = n(594174),
    s = n(727785),
    l = n(981631);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
        u = t.getChannel(e);
    if (null == u) return null;
    let d = (0, r.F6)(u, n, c);
    switch (u.type) {
        case l.d4z.DM: {
            let e = n.getUser(u.getRecipientId());
            if (null == e) return null;
            return {
                type: s.h8.USER,
                record: e,
                score: 0,
                comparator: d
            };
        }
        case l.d4z.GROUP_DM:
            return {
                type: s.h8.GROUP_DM,
                record: u,
                score: 0,
                comparator: d
            };
        case l.d4z.GUILD_VOICE:
        case l.d4z.GUILD_STAGE_VOICE:
            return {
                type: s.h8.VOICE_CHANNEL,
                record: u,
                score: 0,
                comparator: d
            };
        default:
            return {
                type: s.h8.TEXT_CHANNEL,
                record: u,
                score: 0,
                comparator: d
            };
    }
}
