n.d(t, { A: () => b }), n(747238);
var r = n(284009),
    l = n.n(r),
    i = n(698441),
    a = n(71393),
    s = n(994500),
    o = n(287809),
    c = n(240248),
    u = n(427262),
    d = n(322387),
    f = n(652215),
    p = n(985018);
function h(e) {
    let { username: t, applicationId: n, renderApplication: r, withApplication: l, withDefault: i } = e;
    return null != n
        ? p.intl.format(l, {
              username: t,
              applicationName: () => r(n),
          })
        : p.intl.format(i, { username: t });
}
function b(e) {
    var t, n, r, b, g, m, A, y, O, j, v, x, E, _, C;
    let { item: S, renderApplication: I } = e,
        N = null != (t = null == (r = S.other_user) ? void 0 : r.id) ? t : f.dJq,
        T = u.Ay.getName(o.default.getUser(null == (b = S.other_user) ? void 0 : b.id)),
        P = S.applicationId;
    switch (S.type) {
        case d.Uo.FRIEND_REQUESTS_GROUPED:
            let w = u.Ay.getName(o.default.getUser(null == (A = S.other_users) || null == (m = A[0]) ? void 0 : m.id)),
                R = u.Ay.getName(o.default.getUser(null == (O = S.other_users) || null == (y = O[1]) ? void 0 : y.id)),
                D = Math.max((null != (g = null == (j = S.other_users) ? void 0 : j.length) ? g : 0) - 2, 0);
            return p.intl.format(p.t.g5xyIC, {
                user: w,
                user2: R,
                count: D,
            });
        case d.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let M = null != (v = null == (x = S.local_id) ? void 0 : x.split("_").pop()) ? v : "unknown";
            return "Update to build ".concat(M, " available!");
        case d.hW.FRIEND_SUGGESTION_CREATED:
            return s.A.getRelationshipType(N), f.eA$.PENDING_OUTGOING, null != (E = S.body) ? E : "";
        case d.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let L = S.guild_scheduled_event_id,
                G = null != L ? i.Ay.getGuildScheduledEvent(L) : null,
                k = null == G ? void 0 : G.name,
                U = null == (C = a.A.getGuild(null == G ? void 0 : G.guild_id)) ? void 0 : C.name,
                V = (0, i.AZ)(null != G ? G : void 0);
            return (0, c.uJ)(U) || (0, c.uJ)(k) || !V
                ? null != (_ = S.body)
                    ? _
                    : ""
                : p.intl.format(p.t.AyvfXR, {
                      event_name: k,
                      guild_name: U,
                  });
        case d.Uo.INCOMING_FRIEND_REQUESTS:
            return h({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: p.t["9Dgf1L"],
                withDefault: p.t.uIomXw,
            });
        case d.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return h({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: p.t.nnC1q9,
                withDefault: p.t["5Uzkdp"],
            });
        case d.hW.FRIEND_REQUEST_ACCEPTED:
            return h({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: p.t.jXlYiF,
                withDefault: p.t.McYRBk,
            });
        case d.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return (
                l()(null != P, "Expected application id for ".concat(S.type)),
                p.intl.format(p.t["BB/0vn"], {
                    username: T,
                    applicationName: () => I(P),
                })
            );
        case d.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return (
                l()(null != P, "Expected application id for ".concat(S.type)),
                p.intl.format(p.t["7cqOLI"], {
                    username: T,
                    applicationName: () => I(P),
                })
            );
        case d.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == P) return S.body;
            return p.intl.format(p.t.Wi64vN, {
                username: T,
                applicationName: () => I(P),
            });
    }
    return null != (n = S.body) ? n : "";
}
