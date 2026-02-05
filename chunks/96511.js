n.d(t, { A: () => m });
var i = n(284009),
    l = n.n(i),
    s = n(698441),
    a = n(71393),
    r = n(994500),
    o = n(287809),
    d = n(240248),
    c = n(427262),
    u = n(322387),
    h = n(652215),
    A = n(985018);
function g(e) {
    let { username: t, applicationId: n, renderApplication: i, withApplication: l, withDefault: s } = e;
    return null != n
        ? A.intl.format(l, { username: t, applicationName: () => i(n) })
        : A.intl.format(s, { username: t });
}
function m(e) {
    let { item: t, renderApplication: n } = e,
        i = t.other_user?.id ?? h.dJq,
        m = c.Ay.getName(o.default.getUser(t.other_user?.id)),
        p = t.applicationId;
    switch (t.type) {
        case u.Uo.FRIEND_REQUESTS_GROUPED:
            let _ = c.Ay.getName(o.default.getUser(t.other_users?.[0]?.id)),
                x = c.Ay.getName(o.default.getUser(t.other_users?.[1]?.id)),
                f = Math.max((t.other_users?.length ?? 0) - 2, 0);
            return A.intl.format(A.t.g5xyIC, { user: _, user2: x, count: f });
        case u.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let E = t.local_id?.split("_").pop() ?? "unknown";
            return `Update to build ${E} available!`;
        case u.hW.FRIEND_SUGGESTION_CREATED:
            r.A.getRelationshipType(i), h.eA$.PENDING_OUTGOING;
            break;
        case u.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let C = t.guild_scheduled_event_id,
                I = null != C ? s.Ay.getGuildScheduledEvent(C) : null,
                S = I?.name,
                b = a.A.getGuild(I?.guild_id)?.name,
                N = (0, s.AZ)(I ?? void 0);
            return (0, d.uJ)(b) || (0, d.uJ)(S) || !N
                ? (t.body ?? "")
                : A.intl.format(A.t.AyvfXR, { event_name: S, guild_name: b });
        case u.Uo.INCOMING_FRIEND_REQUESTS:
            return g({
                username: m,
                applicationId: p,
                renderApplication: n,
                withApplication: A.t["9Dgf1L"],
                withDefault: A.t.uIomXw,
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return g({
                username: m,
                applicationId: p,
                renderApplication: n,
                withApplication: A.t.nnC1q9,
                withDefault: A.t["5Uzkdp"],
            });
        case u.hW.FRIEND_REQUEST_ACCEPTED:
            return g({
                username: m,
                applicationId: p,
                renderApplication: n,
                withApplication: A.t.jXlYiF,
                withDefault: A.t.McYRBk,
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                l()(null != p, `Expected application id for ${t.type}`),
                A.intl.format(A.t["BB/0vn"], { username: m, applicationName: () => n(p) })
            );
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                l()(null != p, `Expected application id for ${t.type}`),
                A.intl.format(A.t["7cqOLI"], { username: m, applicationName: () => n(p) })
            );
        case u.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == p) return t.body;
            return A.intl.format(A.t.Wi64vN, { username: m, applicationName: () => n(p) });
    }
    return t.body ?? "";
}
