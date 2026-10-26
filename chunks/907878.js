n.d(e, {
    Ai: () => h,
    ET: () => T,
    Jh: () => g,
    SX: () => E,
    ed: () => f,
    f7: () => p,
    ft: () => c,
    gU: () => m,
    oT: () => C,
    pK: () => A,
    tR: () => _,
    wN: () => d,
});
var i = n(582128),
    a = n(390544),
    l = n(17928),
    s = n(363487),
    r = n(174459),
    o = n(475669),
    u = n(652215);
function d(t, e, n) {
    i.useEffect(() => {
        r.default.track(u.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: t,
            location: n,
            location_stack: e,
        });
    }, [t, e, n]);
}
function c(t, e) {
    i.useEffect(() => {
        r.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: t, type: e });
    }, [t, e]);
}
function E(t, e, n) {
    i.useEffect(() => {
        r.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: t, game_server_id: e, type: n });
    }, [t, e, n]);
}
function _(t) {
    let e = (0, s.A)(t),
        n = (0, l.bG)([o.A], () => o.A.getStateForGuild(t)),
        d = i.useRef(!1);
    i.useEffect(() => {
        if (n?.instances == null) return;
        let i = Object.values(n.instances).length,
            l = Object.values(n.instances).filter((t) => t.status === a.M.ONLINE).length;
        d.current ||
            ((d.current = !0),
            r.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                guild_id: t,
                is_admin: e,
                num_game_servers: i,
                num_game_servers_online: l,
                num_game_servers_offline: i - l,
            }));
    }, [t, e, n?.instances]);
}
function C(t, e, n, i) {
    r.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, { guild_id: t, product_id: e, product_name: n, location: i });
}
function g(t) {
    let {
        guildId: e,
        productId: n,
        productName: i,
        skuId: a,
        planName: l,
        planCost: s,
        previousPlanCost: o,
        region: d,
        type: c,
    } = t;
    r.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: e,
        product_id: n,
        product_name: i,
        sku_id: a,
        plan_name: l,
        plan_cost: s,
        previous_plan_cost: o,
        region: d,
        type: c,
    });
}
function h(t, e, n, i) {
    r.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, { guild_id: t, game_id: e, game_name: n, game_server_id: i });
}
function f(t, e, n) {
    r.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: t, game_server_id: e, location: n });
}
function p(t, e) {
    r.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: t, game_server_id: e });
}
function T(t) {
    let { gameApplicationId: e, buttonVariant: n } = t;
    r.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
        game_application_id: e ?? null,
        button_variant: n,
    });
}
function A(t) {
    let { gameApplicationId: e, buttonVariant: n } = t;
    r.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, { game_application_id: e ?? null, button_variant: n });
}
function m(t) {
    let { guildId: e, gameApplicationId: n } = t;
    r.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED, { guild_id: e, game_application_id: n ?? null });
}
