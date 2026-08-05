n.d(t, {
    Ai: () => I,
    ET: () => S,
    Jh: () => d,
    SX: () => _,
    ed: () => N,
    f7: () => R,
    ft: () => u,
    gU: () => C,
    oT: () => T,
    pK: () => O,
    tR: () => A,
    wN: () => c,
});
var i = n(582128),
    l = n(390544),
    r = n(17928),
    s = n(363487),
    a = n(174459),
    E = n(475669),
    o = n(652215);
function c(e, t, n) {
    i.useEffect(() => {
        a.default.track(o.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t,
        });
    }, [e, t, n]);
}
function u(e, t) {
    i.useEffect(() => {
        a.default.track(o.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
    }, [e, t]);
}
function _(e, t, n) {
    i.useEffect(() => {
        a.default.track(o.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
    }, [e, t, n]);
}
function A(e) {
    let t = (0, s.A)(e),
        n = (0, r.bG)([E.A], () => E.A.getStateForGuild(e)),
        c = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            r = Object.values(n.instances).filter((e) => e.status === l.M.ONLINE).length;
        c.current ||
            ((c.current = !0),
            a.default.track(o.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: e,
                is_admin: t,
                num_game_servers: i,
                num_game_servers_online: r,
                num_game_servers_offline: i - r,
            }));
    }, [e, t, n?.instances]);
}
function T(e, t, n, i) {
    a.default.track(o.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: e, product_id: t, product_name: n, location: i });
}
function d(e) {
    let {
        guildId: t,
        productId: n,
        productName: i,
        skuId: l,
        planName: r,
        planCost: s,
        previousPlanCost: E,
        region: c,
        type: u,
    } = e;
    a.default.track(o.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: i,
        sku_id: l,
        plan_name: r,
        plan_cost: s,
        previous_plan_cost: E,
        region: c,
        type: u,
    });
}
function I(e, t, n, i) {
    a.default.track(o.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: e, game_id: t, game_name: n, game_server_id: i });
}
function N(e, t, n) {
    a.default.track(o.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
}
function R(e, t) {
    a.default.track(o.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
}
function S(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(o.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: t ?? null,
        button_variant: n,
    });
}
function O(e) {
    let { gameApplicationId: t, buttonVariant: n } = e;
    a.default.track(o.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: t ?? null, button_variant: n });
}
function C(e) {
    let { guildId: t, gameApplicationId: n } = e;
    a.default.track(o.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: t, game_application_id: n ?? null });
}
