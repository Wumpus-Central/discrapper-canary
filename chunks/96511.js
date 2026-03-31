n.d(t, { A: () => m });
var i = n(284009),
    l = n.n(i),
    s = n(698441),
    a = n(71393),
    r = n(994500),
    o = n(287809),
    c = n(240248),
    d = n(427262),
    u = n(322387),
    h = n(652215),
    A = n(985018);
function _(e) {
    let { username: t, applicationId: n, renderApplication: i, withApplication: l, withDefault: s } = e;
    return null != n
        ? A.intl.format(l, { username: t, applicationName: () => i(n) })
        : A.intl.format(s, { username: t });
}
function m(e) {
    let { item: t, renderApplication: n } = e,
        i = t.other_user?.id ?? h.dJq,
        m = d.Ay.getName(o.default.getUser(t.other_user?.id)),
        g = t.applicationId;
    switch (t.type) {
        case u.Uo.FRIEND_REQUESTS_GROUPED:
            let p = d.Ay.getName(o.default.getUser(t.other_users?.[0]?.id)),
                f = d.Ay.getName(o.default.getUser(t.other_users?.[1]?.id)),
                x = Math.max((t.other_users?.length ?? 0) - 2, 0);
            return A.intl.format(A.t.g5xyIC, { user: p, user2: f, count: x });
        case u.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let E = t.local_id?.split("_").pop() ?? "unknown";
            return `Update to build ${E} available!`;
        case u.hW.FRIEND_SUGGESTION_CREATED:
            r.A.getRelationshipType(i), h.eA$.PENDING_OUTGOING;
            break;
        case u.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let I = t.guild_scheduled_event_id,
                C = null != I ? s.Ay.getGuildScheduledEvent(I) : null,
                N = C?.name,
                T = a.A.getGuild(C?.guild_id)?.name,
                S = (0, s.AZ)(C ?? void 0);
            return (0, c.uJ)(T) || (0, c.uJ)(N) || !S
                ? (t.body ?? "")
                : A.intl.format(A.t.AyvfXR, { event_name: N, guild_name: T });
        case u.Uo.INCOMING_FRIEND_REQUESTS:
            return _({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t["9Dgf1L"],
                withDefault: A.t.uIomXw,
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return _({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t.nnC1q9,
                withDefault: A.t["5Uzkdp"],
            });
        case u.hW.FRIEND_REQUEST_ACCEPTED:
            return _({
                username: m,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t.jXlYiF,
                withDefault: A.t.McYRBk,
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                l()(null != g, `Expected application id for ${t.type}`),
                A.intl.format(A.t["BB/0vn"], { username: m, applicationName: () => n(g) })
            );
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                l()(null != g, `Expected application id for ${t.type}`),
                A.intl.format(A.t["7cqOLI"], { username: m, applicationName: () => n(g) })
            );
        case u.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == g) return t.body;
            return A.intl.format(A.t.Wi64vN, { username: m, applicationName: () => n(g) });
    }
    return t.body ?? "";
}
