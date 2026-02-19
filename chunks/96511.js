"use strict";
n.d(t, { A: () => g });
var i = n(284009),
    s = n.n(i),
    l = n(698441),
    r = n(71393),
    a = n(994500),
    o = n(287809),
    c = n(240248),
    d = n(427262),
    u = n(322387),
    h = n(652215),
    A = n(985018);
function p(e) {
    let { username: t, applicationId: n, renderApplication: i, withApplication: s, withDefault: l } = e;
    return null != n
        ? A.intl.format(s, { username: t, applicationName: () => i(n) })
        : A.intl.format(l, { username: t });
}
function g(e) {
    let { item: t, renderApplication: n } = e,
        i = t.other_user?.id ?? h.dJq,
        g = d.Ay.getName(o.default.getUser(t.other_user?.id)),
        m = t.applicationId;
    switch (t.type) {
        case u.Uo.FRIEND_REQUESTS_GROUPED:
            let _ = d.Ay.getName(o.default.getUser(t.other_users?.[0]?.id)),
                f = d.Ay.getName(o.default.getUser(t.other_users?.[1]?.id)),
                x = Math.max((t.other_users?.length ?? 0) - 2, 0);
            return A.intl.format(A.t.g5xyIC, { user: _, user2: f, count: x });
        case u.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let C = t.local_id?.split("_").pop() ?? "unknown";
            return `Update to build ${C} available!`;
        case u.hW.FRIEND_SUGGESTION_CREATED:
            a.A.getRelationshipType(i), h.eA$.PENDING_OUTGOING;
            break;
        case u.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let E = t.guild_scheduled_event_id,
                I = null != E ? l.Ay.getGuildScheduledEvent(E) : null,
                b = I?.name,
                N = r.A.getGuild(I?.guild_id)?.name,
                S = (0, l.AZ)(I ?? void 0);
            return (0, c.uJ)(N) || (0, c.uJ)(b) || !S
                ? (t.body ?? "")
                : A.intl.format(A.t.AyvfXR, { event_name: b, guild_name: N });
        case u.Uo.INCOMING_FRIEND_REQUESTS:
            return p({
                username: g,
                applicationId: m,
                renderApplication: n,
                withApplication: A.t["9Dgf1L"],
                withDefault: A.t.uIomXw,
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return p({
                username: g,
                applicationId: m,
                renderApplication: n,
                withApplication: A.t.nnC1q9,
                withDefault: A.t["5Uzkdp"],
            });
        case u.hW.FRIEND_REQUEST_ACCEPTED:
            return p({
                username: g,
                applicationId: m,
                renderApplication: n,
                withApplication: A.t.jXlYiF,
                withDefault: A.t.McYRBk,
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                s()(null != m, `Expected application id for ${t.type}`),
                A.intl.format(A.t["BB/0vn"], { username: g, applicationName: () => n(m) })
            );
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                s()(null != m, `Expected application id for ${t.type}`),
                A.intl.format(A.t["7cqOLI"], { username: g, applicationName: () => n(m) })
            );
        case u.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == m) return t.body;
            return A.intl.format(A.t.Wi64vN, { username: g, applicationName: () => n(m) });
    }
    return t.body ?? "";
}
