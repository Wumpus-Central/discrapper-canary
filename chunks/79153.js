(n.d(t, { A: () => P }), n(376728));
var i,
    r = n(439372);
(0, n(945810).mj)({
    kind: "user",
    name: "2026-09-linked-game-org-invites-dev",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var a = n(17928),
    s = n(927813),
    l = n(73153);
async function o(e) {
    return (
        await new Promise((e) => setTimeout(e, 250)),
        {
            code: e,
            game_organization: {
                id: "cinderfang-legion",
                application_id: "1234567890123456789",
                name: "Cinderfang Legion",
                description:
                    "A veteran-run outfit for late-night raids and weekend siege pushes. We run scheduled ops three nights a week, keep a standing scrim roster, and welcome anyone willing to show up on time.",
                icon_url: "https://cdn.discordapp.com/embed/avatars/3.png",
                member_count: 24,
                max_members: 50,
            },
            application: {
                id: "1234567890123456789",
                name: "Fated Colossus",
                icon_url: "https://cdn.discordapp.com/embed/avatars/1.png",
            },
            application_config: { display_noun: "Guild" },
        }
    );
}
let d = {
    async resolveGameOrganizationInvite(e) {
        if (l.h.isDispatching()) return (await Promise.resolve(), d.resolveGameOrganizationInvite(e));
        l.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let t = await o(e);
            l.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (t) {
            throw (
                l.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { message: t instanceof Error ? t.message : void 0 },
                }),
                t
            );
        }
    },
};
var c = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i);
let u = new Map();
class _ extends a.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return u.get(e) ?? null;
    }
    getInvites() {
        return u;
    }
}
let E = new _(l.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (u.get(t)?.state === c.RESOLVED) return !1;
        (u = new Map(u)).set(t, { code: t, state: c.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (u = new Map(u)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i } = e;
                return {
                    code: e.code,
                    state: c.RESOLVED,
                    organization: {
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        iconUrl: t.icon_url,
                        applicationId: t.application_id,
                        memberCount: t.member_count,
                        maxMembers: t.max_members,
                    },
                    application: { id: n.id, name: n.name, iconUrl: n.icon_url },
                    displayNoun: i?.display_noun ?? null,
                };
            })(n),
        );
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        if (u.get(t)?.state === c.RESOLVED) return !1;
        (u = new Map(u)).set(t, { code: t, state: c.ERROR, error: n });
    },
});
var A = n(652215);
((0, a.UT)(E, {
    getQueryId: A.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * s.A.Seconds.MINUTE,
    failureStaleAfter: 5 * s.A.Seconds.MINUTE,
    get: (e) => {
        let t = E.getInvite(e);
        return t?.state === c.RESOLVED ? t : null;
    },
    load: async (e) => {
        await d.resolveGameOrganizationInvite(e);
    },
}),
    n(993748));
var h = n(292572),
    I = n(122906),
    f = n(128391),
    p = n(167189),
    T = n(254160),
    m = n(67480),
    g = n(733391),
    S = n(637893),
    N = n(227327);
let C = new Set();
function O(e, t) {
    C.has(e) ||
        (C.add(e),
        (0, T.f)(async () => {
            try {
                await t();
            } finally {
                C.delete(e);
            }
        }));
}
var R = n(168543),
    L = n(903209),
    y = n(734057);
n(299091);
var D = n(721779);
function v(e, t) {
    let n = (0, D.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case p.I.INVITE:
                    break;
                case p.I.TEMPLATE:
                    (0, T.f)(async () => {
                        null == I.A.getGuildTemplate(i) && (await h.A.resolveGuildTemplate(i));
                    });
                    break;
                case p.I.BUILD_OVERRIDE:
                case p.I.MANUAL_BUILD_OVERRIDE:
                case p.I.EVENT:
                case p.I.CHANNEL_LINK:
                case p.I.ACTIVITY_BOOKMARK:
                case p.I.EMBEDDED_ACTIVITY_INVITE:
                case p.I.GUILD_PRODUCT:
                case p.I.SERVER_SHOP:
                case p.I.QUESTS_EMBED:
                case p.I.APP_DIRECTORY_STOREFRONT:
                case p.I.APP_DIRECTORY_STOREFRONT_SKU:
                case p.I.APP_OAUTH2_LINK:
                case p.I.COLLECTIBLES_SHOP:
                case p.I.EXPERIMENT:
                case p.I.GAME_PROFILE:
                case p.I.GAME_SERVER_SHARE:
                    break;
                case p.I.USER_PROFILE:
                    if ((0, R.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : y.A.getChannel(t);
                        (0, T.f)(async () => {
                            await (0, L.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case p.I.GAME_ORGANIZATION_INVITE:
                    break;
                case p.I.SOCIAL_LAYER_STOREFRONT:
                case p.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, N.rg)(t);
                        if (null == n) return;
                        let i =
                            e === p.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, S.x)("resolveStorefrontCodedLink")) return;
                            O(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, g.ap)(i.applicationId, { eager: !1 })
                                    : await (0, g.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != m.A.get(r) ||
                            m.A.isFetching(r) ||
                            m.A.didFetchingSkuFail(r) ||
                            (l.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            O((0, N.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, g.Pp)(i.applicationId, r, e)
                                    : await (0, g.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case p.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function b(e) {
    (v(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return v(n.content, e.channel_id);
        }));
}
class M extends r.A {
    constructor() {
        (super(), (0, f.A)(this, b));
    }
}
let P = new M();
