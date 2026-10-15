n.d(e, {
    Ai: () => g,
    ET: () => f,
    Jh: () => T,
    SX: () => E,
    ed: () => p,
    f7: () => h,
    ft: () => c,
    gU: () => m,
    oT: () => C,
    pK: () => A,
    tR: () => _,
    wN: () => d,
});
var i = n(582128),
    s = n(390544),
    a = n(17928),
    l = n(363487),
    o = n(174459),
    r = n(475669),
    u = n(652215);
function d(t, e, n) {
    i.useEffect(() => {
        o.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: t,
            location: n,
            location_stack: e,
        });
    }, [t, e, n]);
}
function c(t, e) {
    i.useEffect(() => {
        o.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: t, type: e });
    }, [t, e]);
}
function E(t, e, n) {
    i.useEffect(() => {
        o.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: t, game_server_id: e, type: n });
    }, [t, e, n]);
}
function _(t) {
    let e = (0, l.A)(t),
        n = (0, a.bG)([r.A], () => r.A.getStateForGuild(t)),
        d = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            a = Object.values(n.instances).filter((t) => t.status === s.M.ONLINE).length;
        d.current ||
            ((d.current = !0),
            o.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: t,
                is_admin: e,
                num_game_servers: i,
                num_game_servers_online: a,
                num_game_servers_offline: i - a,
            }));
    }, [t, e, n?.instances]);
}
function C(t, e, n, i) {
    o.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: t, product_id: e, product_name: n, location: i });
}
function T(t) {
    let {
        guildId: e,
        productId: n,
        productName: i,
        skuId: s,
        planName: a,
        planCost: l,
        previousPlanCost: r,
        region: d,
        type: c,
    } = t;
    o.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: e,
        product_id: n,
        product_name: i,
        sku_id: s,
        plan_name: a,
        plan_cost: l,
        previous_plan_cost: r,
        region: d,
        type: c,
    });
}
function g(t, e, n, i) {
    o.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: t, game_id: e, game_name: n, game_server_id: i });
}
function p(t, e, n) {
    o.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: t, game_server_id: e, location: n });
}
function h(t, e) {
    o.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: t, game_server_id: e });
}
function f(t) {
    let { gameApplicationId: e, buttonVariant: n } = t;
    o.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: e ?? null,
        button_variant: n,
    });
}
function A(t) {
    let { gameApplicationId: e, buttonVariant: n } = t;
    o.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: e ?? null, button_variant: n });
}
function m(t) {
    let { guildId: e, gameApplicationId: n } = t;
    o.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: e, game_application_id: n ?? null });
}
