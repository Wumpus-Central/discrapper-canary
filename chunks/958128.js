(n.d(t, { A: () => x }), n(574332));
var i = n(439372),
    r = n(372058),
    a = n(377840),
    s = n(855986),
    l = n(927813),
    o = n(664947),
    d = n(580583),
    c = n(489452),
    u = n(673383),
    _ = n(652215);
let E = (0, s.UT)(d.A, {
    getQueryId: _.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * l.A.Seconds.MINUTE,
    failureStaleAfter: 5 * l.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: c.A },
    get: (e) => {
        let t = d.A.getInvite(e);
        return t?.state === u.Zb.RESOLVED ? t : null;
    },
    load: async (e) => {
        await o.A.resolveGameOrganizationInvite(e);
    },
});
n(503406);
var A = n(292572),
    f = n(122906),
    h = n(128391),
    I = n(73153),
    p = n(167189),
    m = n(254160),
    g = n(67480),
    T = n(733391),
    S = n(945810);
((0, S.mj)({
    name: "2026-08-social-layer-storefront-mobile-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    (0, S.mj)({
        name: "2026-10-social-layer-storefront-mobile-multi-sku-embed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }));
var N = n(637893),
    C = n(227327);
let O = new Set();
function R(e, t) {
    O.has(e) ||
        (O.add(e),
        (0, m.f)(async () => {
            try {
                await t();
            } finally {
                O.delete(e);
            }
        }));
}
var L = n(734057),
    y = n(168543);
let D = (0, S.mj)({
    name: "2026-11-profile-embed-rendering-mobile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b = n(917445);
let v = "MessageCodedLinkManager";
n(299091);
var P = n(486889),
    M = n(818348);
function U(e, t) {
    let n = (0, P.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case p.I.INVITE:
                    break;
                case p.I.TEMPLATE:
                    (0, m.f)(async () => {
                        null == f.A.getGuildTemplate(i) && (await A.A.resolveGuildTemplate(i));
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
                case p.I.CONJURE_PROJECT:
                case p.I.USER_WISHLIST:
                    break;
                case p.I.USER_PROFILE:
                    !(function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (
                            !(n
                                ? (function (e) {
                                      let { enabled: t } = D.getConfig({ location: e });
                                      return t;
                                  })(v)
                                : (0, y.l)(v))
                        )
                            return;
                        let i = null == t ? void 0 : (L.A.getChannel(t)?.guild_id ?? void 0);
                        (0, m.f)(async () => {
                            try {
                                await (0, b.A)(e, void 0, { guildId: i, withMutualGuilds: !0, withMutualFriends: !0 });
                            } catch {}
                        });
                    })(i, t);
                    break;
                case p.I.GAME_ORGANIZATION_INVITE:
                    (0, r.bz)("MessageCodedLinkManager") &&
                        (0, m.f)(async () => {
                            (await E.fetchMany([i]), (0, a.A)(i).catch(M.tE));
                        });
                    break;
                case p.I.SOCIAL_LAYER_STOREFRONT:
                case p.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, C.rg)(t);
                        if (null == n) return;
                        let i =
                            e === p.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, N.x)("resolveStorefrontCodedLink")) return;
                            R(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, T.ap)(i.applicationId, { eager: !1 })
                                    : await (0, T.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != g.A.get(r) ||
                            g.A.isFetching(r) ||
                            g.A.didFetchingSkuFail(r) ||
                            (I.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            R((0, C.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, T.Pp)(i.applicationId, r, e)
                                    : await (0, T.qf)(i.guildId, r, e);
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
function w(e) {
    (U(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return U(n.content, e.channel_id);
        }));
}
class G extends i.A {
    constructor() {
        (super(), (0, h.A)(this, w));
    }
}
let x = new G();
