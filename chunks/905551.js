n.d(t, {
    EY: () => _,
    NE: () => j,
    UM: () => g,
    WX: () => S,
    WY: () => b,
    _k: () => C,
    ce: () => h,
    hz: () => v,
    iX: () => f,
    mF: () => x,
    s9: () => y,
}),
    n(642613);
var a = n(544891),
    r = n(570140),
    l = n(594174),
    i = n(626135),
    o = n(73346),
    s = n(602831),
    c = n(351721),
    d = n(651667),
    u = n(893605),
    m = n(619733),
    p = n(981631);
function h(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (a)
        return void setTimeout(() => {
            r.Z.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: s.j.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5000);
    let i = null != (n = null == (t = l.default.getCurrentUser()) ? void 0 : t.isStaff()) && n;
    return (0, o.Kb)({
        url: p.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(m.SW),
        query: {
            guild_id: e,
            include_unpublished_products: i,
            include_unpublished_collection: i,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, d.m)(t);
            return (e[n.id] = n), e;
        }, {});
        r.Z.dispatch({
            type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? (setTimeout(() => {
              r.Z.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: s.K.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5000),
          Promise.resolve())
        : a.tn
              .get({
                  url: p.ANM.GAME_SERVERS(e),
                  rejectWithError: !0,
                  retries: 2,
              })
              .then((t) => {
                  if (null != t.body) {
                      let n = t.body.reduce((e, t) => ((e[t.id] = (0, c.Z)(t)), e), {});
                      r.Z.dispatch({
                          type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                          guildId: e,
                          instances: n,
                      });
                  }
              });
}
function f(e, t) {
    return a.tn
        .get({
            url: p.ANM.PRODUCT_FOR_SKU(t),
            rejectWithError: !0,
            retries: 3,
        })
        .then((n) => {
            if (null != n.body) {
                var a, l, i, o;
                let s =
                    null !=
                    (o =
                        null == (i = n.body.tenant_metadata) ||
                        null == (l = i.guild_monetization) ||
                        null == (a = l.game_server)
                            ? void 0
                            : a.instructions.pc)
                        ? o
                        : [];
                r.Z.dispatch({
                    type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                    guildId: e,
                    skuId: t,
                    instructions: s,
                });
            }
        });
}
function b(e, t) {
    if (e) {
        var n;
        i.default.track(p.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
            provider: t,
        });
    }
}
function g() {
    r.Z.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function v(e, t) {
    r.Z.dispatch({
        type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function j(e, t, n, r) {
    return a.tn.post({
        url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: r,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function _(e, t, n, r) {
    return a.tn.patch({
        url: p.ANM.GUILD_POWERUP_UPDATE(e, t),
        body: {
            game_server_name: r,
            sku_id: n,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function y(e, t, n) {
    return a.tn.del({
        url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function C(e) {
    return a.tn
        .get({
            url: p.ANM.GAME_SERVER_REGIONS(e),
            rejectWithError: !0,
            oldFormErrors: !0,
            retries: 3,
        })
        .then((e) => {
            r.Z.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(u.Z).sort((e, t) => e.name.localeCompare(t.name)),
            });
        });
}
function S(e, t) {
    return a.tn
        .post({
            url: p.ANM.GAME_SERVER_WAKE(e, t),
            rejectWithError: !0,
        })
        .then((t) => {
            r.Z.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: (0, c.Z)(t.body),
            });
        });
}
