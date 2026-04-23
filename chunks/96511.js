n.d(t, { A: () => m });
var s = n(284009),
    a = n.n(s),
    l = n(698441),
    i = n(71393),
    r = n(994500),
    o = n(287809),
    d = n(240248),
    c = n(427262),
    u = n(322387),
    h = n(652215),
    _ = n(985018);
function A(e) {
    let { username: t, applicationId: n, renderApplication: s, withApplication: a, withDefault: l } = e;
    return null != n
        ? _.intl.format(a, { username: t, applicationName: () => s(n) })
        : _.intl.format(l, { username: t });
}
function m(e) {
    let { item: t, renderApplication: n } = e,
        s = t.other_user?.id ?? h.dJq,
        m = c.Ay.getName(o.default.getUser(t.other_user?.id)),
        g = t.applicationId;
    switch (t.type) {
        case u.Uo.FRIEND_REQUESTS_GROUPED:
            let f = c.Ay.getName(o.default.getUser(t.other_users?.[0]?.id)),
                E = c.Ay.getName(o.default.getUser(t.other_users?.[1]?.id)),
                N = Math.max((t.other_users?.length ?? 0) - 2, 0);
            return _.intl.format(_.t.g5xyIC, { user: f, user2: E, count: N });
        case u.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let p = t.local_id?.split("_").pop() ?? "unknown";
            return `Update to build ${p} available!`;
        case u.hW.FRIEND_SUGGESTION_CREATED:
            r.A.getRelationshipType(s), h.eA$.PENDING_OUTGOING;
            break;
        case u.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let I = t.guild_scheduled_event_id,
                C = null != I ? l.Ay.getGuildScheduledEvent(I) : null,
                S = C?.name,
                x = i.A.getGuild(C?.guild_id)?.name,
                R = (0, l.AZ)(C ?? void 0);
            return (0, d.uJ)(x) || (0, d.uJ)(S) || !R
                ? (t.body ?? "")
                : _.intl.format(_.t.AyvfXR, { event_name: S, guild_name: x });
        case u.Uo.INCOMING_FRIEND_REQUESTS:
            return A({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: _.t["9Dgf1L"],
                withDefault: _.t.uIomXw,
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return A({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: _.t.nnC1q9,
                withDefault: _.t["5Uzkdp"],
            });
        case u.hW.FRIEND_REQUEST_ACCEPTED:
            return A({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: _.t.jXlYiF,
                withDefault: _.t.McYRBk,
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                a()(null != g, `Expected application id for ${t.type}`),
                _.intl.format(_.t["BB/0vn"], { username: m, applicationName: () => n(g) })
            );
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                a()(null != g, `Expected application id for ${t.type}`),
                _.intl.format(_.t["7cqOLI"], { username: m, applicationName: () => n(g) })
            );
        case u.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == g) return t.body;
            return _.intl.format(_.t.Wi64vN, { username: m, applicationName: () => n(g) });
    }
    return t.body ?? "";
}
