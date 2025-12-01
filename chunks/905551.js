n.d(t, {
    EY: () => O,
    NE: () => y,
    UM: () => E,
    WX: () => I,
    WY: () => g,
    _k: () => S,
    ce: () => _,
    hz: () => b,
    iX: () => h,
    mF: () => m,
    s9: () => v,
}),
    n(642613);
var r = n(544891),
    i = n(570140),
    a = n(594174),
    o = n(626135),
    s = n(73346),
    l = n(602831),
    c = n(351721),
    u = n(651667),
    d = n(893605),
    f = n(619733),
    p = n(981631);
function _(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (r)
        return void setTimeout(() => {
            i.Z.dispatch({
                type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
                guildId: e,
                catalog: l.j.reduce((e, t) => ((e[t.id] = t), e), {}),
            });
        }, 5000);
    let o = null != (n = null == (t = a.default.getCurrentUser()) ? void 0 : t.isStaff()) && n;
    return (0, s.Kb)({
        url: p.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(f.SW),
        query: {
            guild_id: e,
            include_unpublished_products: o,
            include_unpublished_collection: o,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
        retries: 2,
    }).then((t) => {
        let n = t.body.products.reduce((e, t) => {
            let n = (0, u.m)(t);
            return (e[n.id] = n), e;
        }, {});
        i.Z.dispatch({
            type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: n,
        });
    });
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return t
        ? (setTimeout(() => {
              i.Z.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: l.K.reduce((e, t) => ((e[t.id] = t), e), {}),
              });
          }, 5000),
          Promise.resolve())
        : r.tn
              .get({
                  url: p.ANM.GAME_SERVERS(e),
                  rejectWithError: !0,
                  retries: 2,
                  signal: n,
              })
              .then((t) => {
                  if (null != t.body) {
                      let n = t.body.reduce((e, t) => ((e[t.id] = (0, c.Z)(t)), e), {});
                      i.Z.dispatch({
                          type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                          guildId: e,
                          instances: n,
                      });
                  }
              });
}
function h(e, t) {
    return r.tn
        .get({
            url: p.ANM.PRODUCT_FOR_SKU(t),
            rejectWithError: !0,
            retries: 3,
        })
        .then((n) => {
            if (null != n.body) {
                var r, a, o, s;
                let l =
                    null !=
                    (s =
                        null == (o = n.body.tenant_metadata) ||
                        null == (a = o.guild_monetization) ||
                        null == (r = a.game_server)
                            ? void 0
                            : r.instructions.pc)
                        ? s
                        : [];
                i.Z.dispatch({
                    type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
                    guildId: e,
                    skuId: t,
                    instructions: l,
                });
            }
        });
}
function g(e, t) {
    if (e) {
        var n;
        o.default.track(p.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
            user_id: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
            provider: t,
        });
    }
}
function E() {
    i.Z.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
}
function b(e, t) {
    i.Z.dispatch({
        type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
function y(e, t, n, i) {
    return r.tn.post({
        url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
        body: {
            game_server_name: n,
            game_server_region: i,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function O(e, t, n, i) {
    return r.tn.patch({
        url: p.ANM.GUILD_POWERUP_UPDATE(e, t),
        body: {
            game_server_name: i,
            sku_id: n,
        },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function v(e, t, n) {
    return r.tn.del({
        url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
        query: { entitlement_id: n },
        rejectWithError: !0,
        oldFormErrors: !0,
    });
}
function S(e) {
    return r.tn
        .get({
            url: p.ANM.GAME_SERVER_REGIONS(e),
            rejectWithError: !0,
            oldFormErrors: !0,
            retries: 3,
        })
        .then((e) => {
            i.Z.dispatch({
                type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
                regions: e.body.map(d.Z).sort((e, t) => e.name.localeCompare(t.name)),
            });
        });
}
function I(e, t) {
    return r.tn
        .post({
            url: p.ANM.GAME_SERVER_WAKE(e, t),
            rejectWithError: !0,
        })
        .then((t) => {
            i.Z.dispatch({
                type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                guildId: e,
                instance: (0, c.Z)(t.body),
            });
        });
}
