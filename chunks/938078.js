r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(933557),
    a = r(592125),
    o = r(699516),
    s = r(594174),
    l = r(727785),
    u = r(981631);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
        d = n.getChannel(e);
    if (null == d) return null;
    let f = (0, i.F6)(d, r, c);
    switch (d.type) {
        case u.d4z.DM: {
            let e = r.getUser(d.getRecipientId());
            if (null == e) return null;
            return {
                type: l.h8.USER,
                record: e,
                score: 0,
                comparator: f
            };
        }
        case u.d4z.GROUP_DM:
            return {
                type: l.h8.GROUP_DM,
                record: d,
                score: 0,
                comparator: f
            };
        case u.d4z.GUILD_VOICE:
        case u.d4z.GUILD_STAGE_VOICE:
            return {
                type: l.h8.VOICE_CHANNEL,
                record: d,
                score: 0,
                comparator: f
            };
        default:
            return {
                type: l.h8.TEXT_CHANNEL,
                record: d,
                score: 0,
                comparator: f
            };
    }
}
