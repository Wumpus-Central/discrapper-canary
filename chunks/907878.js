n.d(t, {
    Ai: () => g,
    ET: () => A,
    Jh: () => f,
    SX: () => E,
    ed: () => T,
    f7: () => p,
    ft: () => d,
    gU: () => m,
    oT: () => C,
    pK: () => h,
    tR: () => _,
    wN: () => c,
});
var i = n(582128),
    a = n(390544),
    s = n(17928),
    l = n(363487),
    r = n(174459),
    o = n(475669),
    u = n(652215);
function c(e, t, n) {
    i.useEffect(() => {
        r.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function d(e, t) {
    i.useEffect(() => {
        r.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function E(e, t, n) {
    i.useEffect(() => {
        r.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function _(e) {
    let t = (0, l.A)(e),
        n = (0, s.bG)([o.A], () => o.A.getStateForGuild(e)),
        c = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            s = Object.values(n.instances).filter((e) => e.status === a.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            r.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: s,
                num_game_servers_offline: i - s,
            }));
    }, [e, t, n?.instances]);
}
function C(e, t, n, i) {
    r.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function f(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: a,
        planName: s,
        planCost: l,
        previousPlanCost: o,
        region: c,
        type: d,
    } = e;
    r.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: a,
        plan_name: s,
        plan_cost: l,
        previous_plan_cost: o,
        region: c,
        type: d,
    });
}
function g(e, t, n, i) {
    r.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function T(e, t, n) {
    r.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function p(e, t) {
    r.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function A(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    r.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function h(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    r.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function m(e) {
    let { guildId: t, gameApplicationId: n } = e;
    r.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
