var n = i(855986),
    l = i(73153),
    r = i(951217);
let a = {},
    d = {},
    o = {},
    u = {},
    A = {};
function g(e) {
    ((o[e.id] = e), (u[e.guildId] = e), delete d[e.guildId], delete a[e.guildId]);
}
function I(e) {
    (delete o[e.id], delete u[e.guildId], delete A[e.guildId], delete d[e.guildId], delete a[e.guildId]);
}
class _ extends n.Ay.Store {
    static displayName = "GameOrganizationStore";
    getGameOrganization(e) {
        return o[e];
    }
    getGameOrganizationByGuildId(e) {
        return null == e ? null : (u[e] ?? null);
    }
    getDisplayNounByGuildId(e) {
        return null == e ? null : (A[e] ?? null);
    }
    isLoadingForGuild(e) {
        return null != e && (a[e] ?? !1);
    }
    getErrorForGuild(e) {
        return null == e ? null : (d[e] ?? null);
    }
}
let c = new _(l.h, {
    GAME_ORGANIZATION_FETCH_START: function (e) {
        let { guildId: t } = e;
        a[t] = !0;
    },
    GAME_ORGANIZATION_FETCH_SUCCESS: function (e) {
        let { gameOrganization: t, displayNoun: i } = e;
        (g(t), (A[t.guildId] = i));
    },
    GAME_ORGANIZATION_FETCH_FAILURE: function (e) {
        let { guildId: t, error: i } = e;
        (delete a[t], (d[t] = i));
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let {
                invite: { game_organization: t, application_config: i },
            } = e,
            n = (0, r.p)(t);
        (g(n), null != i && (A[n.guildId] = i.display_noun), delete d[n.guildId]);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            i = u[t.id];
        return (
            null != i &&
            (t.linked_game_organization?.application_id !== i.applicationId ||
                t.linked_game_organization?.game_organization_id !== i?.id) &&
            (I(i), !0)
        );
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            i = u[t.id];
        return null != i && (I(i), !0);
    },
});
i.d(t, {}, { A: c });
