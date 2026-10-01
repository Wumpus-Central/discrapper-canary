n.d(t, {
    Ai: () => h,
    ET: () => p,
    Jh: () => T,
    SX: () => E,
    ed: () => A,
    f7: () => g,
    ft: () => d,
    gU: () => I,
    oT: () => C,
    pK: () => f,
    tR: () => _,
    wN: () => c,
});
var s = n(582128),
    i = n(390544),
    a = n(17928),
    l = n(363487),
    o = n(174459),
    r = n(475669),
    u = n(652215);
function c(e, t, n) {
    s.useEffect(() => {
        o.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function d(e, t) {
    s.useEffect(() => {
        o.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function E(e, t, n) {
    s.useEffect(() => {
        o.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function _(e) {
    let t = (0, l.A)(e),
        n = (0, a.bG)([r.A], () => r.A.getStateForGuild(e)),
        c = s.useRef(!1);
    s.useEffect(() => {
        if (n?.instances == null) return;
        let s = Object.values(n.instances).length,
            a = Object.values(n.instances).filter((e) => e.status === i.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            o.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: s,
                num_game_servers_online: a,
                num_game_servers_offline: s - a,
            }));
    }, [e, t, n?.instances]);
}
function C(e, t, n, s) {
    o.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: s });
}
function T(e) {
    let {
        guildId: t,
        productId: n,
        productName: s,
        skuId: i,
        planName: a,
        planCost: l,
        previousPlanCost: r,
        region: c,
        type: d,
    } = e;
    o.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: s,
        sku_id: i,
        plan_name: a,
        plan_cost: l,
        previous_plan_cost: r,
        region: c,
        type: d,
    });
}
function h(e, t, n, s) {
    o.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: s });
}
function A(e, t, n) {
    o.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function g(e, t) {
    o.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function p(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    o.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function f(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    o.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function I(e) {
    let { guildId: t, gameApplicationId: n } = e;
    o.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
