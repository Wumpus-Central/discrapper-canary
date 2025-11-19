n.d(t, {
    EY: () => _,
    NE: () => j,
    UM: () => b,
    WX: () => S,
    WY: () => f,
    _k: () => C,
    ce: () => h,
    hz: () => v,
    iX: () => g,
    mF: () => x,
    s9: () => y,
}),
    n(642613);
var a = n(544891),
    l = n(570140),
    r = n(594174),
    i = n(626135),
    s = n(73346),
    o = n(602831),
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
            l.Z.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: o.j.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5000);
    let i = null != (n = null == (t = r.default.getCurrentUser()) ? void 0 : t.isStaff()) && n;
    return (0, s.Kb)({
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
        l.Z.dispatch({
            type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              l.Z.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: o.K.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5000),
          Promise.resolve())
        : a.tn
              .get({
                  url: p.ANM.GAME_SERVERS(e),
                  rejectWithError: !0,
                  retries: 2,
                  signal: n,
              })
              .then((t) => {
                  if (null != t.body) {
                      let n = t.body.reduce((e, t) => ((e[t.id] = (0, c.Z)(t)), e), {});
                      l.Z.dispatch({
                          type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                          guildId: e,
                          instances: n,
                      });
                  }
              });
}
function g(e, t) {
    return a.tn
        .get({
            url: p.ANM.PRODUCT_FOR_SKU(t),
            rejectWithError: !0,
            retries: 3,
        })
        .then((n) => {
            if (null != n.body) {
                var a, r, i, s;
                let o =
                    null !=
                    (s =
                        null == (i = n.body.tenant_metadata) ||
                        null == (r = i.guild_monetization) ||
                        null == (a = r.game_server)
                            ? void 0
                            : a.instructions.pc)
                        ? s
                        : [];
                l.Z.dispatch({
                    type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                    guildId: e,
                    skuId: t,
                    instructions: o,
                });
            }
        });
}
function f(e, t) {
    if (e) {
        var n;
        i.default.track(p.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: null == (n = r.default.getCurrentUser()) ? void 0 : n.id,
            provider: t,
        });
    }
}
function b() {
    l.Z.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function v(e, t) {
    l.Z.dispatch({
        type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function j(e, t, n, l) {
    return a.tn.post({
        url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: l,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function _(e, t, n, l) {
    return a.tn.patch({
        url: p.ANM.GUILD_POWERUP_UPDATE(e, t),
        body: {
            game_server_name: l,
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
            l.Z.dispatch({
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
            l.Z.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: (0, c.Z)(t.body),
            });
        });
}
