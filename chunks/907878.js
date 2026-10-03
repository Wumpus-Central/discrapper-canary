n.d(t, {
    Ai: () => A,
    ET: () => g,
    Jh: () => h,
    SX: () => E,
    ed: () => T,
    f7: () => p,
    ft: () => d,
    gU: () => f,
    oT: () => C,
    pK: () => I,
    tR: () => _,
    wN: () => c,
});
var s = n(582128),
    i = n(390544),
    l = n(17928),
    a = n(363487),
    o = n(174459),
    u = n(475669),
    r = n(652215);
function c(e, t, n) {
    s.useEffect(() => {
        o.default.track(r.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function d(e, t) {
    s.useEffect(() => {
        o.default.track(r.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function E(e, t, n) {
    s.useEffect(() => {
        o.default.track(r.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function _(e) {
    let t = (0, a.A)(e),
        n = (0, l.bG)([u.A], () => u.A.getStateForGuild(e)),
        c = s.useRef(!1);
    s.useEffect(() => {
        if (n?.instances == null) return;
        let s = Object.values(n.instances).length,
            l = Object.values(n.instances).filter((e) => e.status === i.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            o.default.track(r.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: s,
                num_game_servers_online: l,
                num_game_servers_offline: s - l,
            }));
    }, [e, t, n?.instances]);
}
function C(e, t, n, s) {
    o.default.track(r.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: s });
}
function h(e) {
    let {
        guildId: t,
        productId: n,
        productName: s,
        skuId: i,
        planName: l,
        planCost: a,
        previousPlanCost: u,
        region: c,
        type: d,
    } = e;
    o.default.track(r.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: s,
        sku_id: i,
        plan_name: l,
        plan_cost: a,
        previous_plan_cost: u,
        region: c,
        type: d,
    });
}
function A(e, t, n, s) {
    o.default.track(r.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: s });
}
function T(e, t, n) {
    o.default.track(r.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function p(e, t) {
    o.default.track(r.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function g(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    o.default.track(r.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function I(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    o.default.track(r.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function f(e) {
    let { guildId: t, gameApplicationId: n } = e;
    o.default.track(r.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
