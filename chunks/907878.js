"use strict";
n.d(t, {
    Ai: () => I,
    ET: () => T,
    Jh: () => h,
    SX: () => _,
    ed: () => f,
    f7: () => p,
    ft: () => u,
    gU: () => g,
    oT: () => A,
    pK: () => m,
    tR: () => E,
    wN: () => c,
});
var i = n(582128),
    r = n(390544),
    a = n(17928),
    s = n(363487),
    l = n(174459),
    o = n(475669),
    d = n(652215);
function c(e, t, n) {
    i.useEffect(() => {
        l.default.track(d.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function u(e, t) {
    i.useEffect(() => {
        l.default.track(d.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function _(e, t, n) {
    i.useEffect(() => {
        l.default.track(d.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function E(e) {
    let t = (0, s.A)(e),
        n = (0, a.bG)([o.A], () => o.A.getStateForGuild(e)),
        c = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            a = Object.values(n.instances).filter((e) => e.status === r.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            l.default.track(d.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: a,
                num_game_servers_offline: i - a,
            }));
    }, [e, t, n?.instances]);
}
function A(e, t, n, i) {
    l.default.track(d.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function h(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: r,
        planName: a,
        planCost: s,
        previousPlanCost: o,
        region: c,
        type: u,
    } = e;
    l.default.track(d.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: r,
        plan_name: a,
        plan_cost: s,
        previous_plan_cost: o,
        region: c,
        type: u,
    });
}
function I(e, t, n, i) {
    l.default.track(d.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function f(e, t, n) {
    l.default.track(d.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function p(e, t) {
    l.default.track(d.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function T(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    l.default.track(d.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function m(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    l.default.track(d.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function g(e) {
    let { guildId: t, gameApplicationId: n } = e;
    l.default.track(d.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
