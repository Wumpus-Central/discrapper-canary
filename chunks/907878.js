var i = n(582128),
    s = n(390544),
    a = n(855986),
    l = n(363487),
    r = n(129230),
    o = n(475669),
    u = n(652215);
n.d(
    t,
    {},
    {
        Ai: function (e, t, n, i) {
            r.default.track(u.HAw.GAME_SERVER_JOIN_CLICKED, {
                guild_id: e,
                game_id: t,
                game_name: n,
                game_server_id: i,
            });
        },
        ET: function (e) {
            let { gameApplicationId: t, buttonVariant: n } = e;
            r.default.track(u.HAw.IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON, {
                game_application_id: t ?? null,
                button_variant: n,
            });
        },
        Jh: function (e) {
            let {
                guildId: t,
                productId: n,
                productName: i,
                skuId: s,
                planName: a,
                planCost: l,
                previousPlanCost: o,
                region: c,
                type: d,
            } = e;
            r.default.track(u.HAw.GAME_SERVER_SKU_SELECTED, {
                guild_id: t,
                product_id: n,
                product_name: i,
                sku_id: s,
                plan_name: a,
                plan_cost: l,
                previous_plan_cost: o,
                region: c,
                type: d,
            });
        },
        SX: function (e, t, n) {
            i.useEffect(() => {
                r.default.track(u.HAw.GAME_SERVER_SETTINGS_OPENED, { guild_id: e, game_server_id: t, type: n });
            }, [e, t, n]);
        },
        ed: function (e, t, n) {
            r.default.track(u.HAw.GAME_SERVER_COPY_IP_CLICKED, { guild_id: e, game_server_id: t, location: n });
        },
        f7: function (e, t) {
            r.default.track(u.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, { guild_id: e, game_server_id: t });
        },
        ft: function (e, t) {
            i.useEffect(() => {
                r.default.track(u.HAw.GAME_SERVER_GAME_SELECT_OPENED, { guild_id: e, type: t });
            }, [e, t]);
        },
        oT: function (e, t, n, i) {
            r.default.track(u.HAw.GAME_SERVER_GAME_CLICKED, {
                guild_id: e,
                product_id: t,
                product_name: n,
                location: i,
            });
        },
        pK: function (e) {
            let { gameApplicationId: t, buttonVariant: n } = e;
            r.default.track(u.HAw.GAME_SERVER_ACTIVITY_BUTTON_CLICKED, {
                game_application_id: t ?? null,
                button_variant: n,
            });
        },
        tR: function (e) {
            let t = (0, l.A)(e),
                n = (0, a.bG)([o.A], () => o.A.getStateForGuild(e)),
                c = i.useRef(!1);
            i.useEffect(() => {
                if (n?.instances == null) return;
                let i = Object.values(n.instances).length,
                    a = Object.values(n.instances).filter((e) => e.status === s.M.ONLINE).length;
                c.current ||
                    ((c.current = !0),
                    r.default.track(u.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
                        guild_id: e,
                        is_admin: t,
                        num_game_servers: i,
                        num_game_servers_online: a,
                        num_game_servers_offline: i - a,
                    }));
            }, [e, t, n?.instances]);
        },
        wN: function (e, t, n) {
            i.useEffect(() => {
                r.default.track(u.HAw.OPEN_MODAL, {
                    type: "game_servers_perk_clicked",
                    guild_id: e,
                    location: n,
                    location_stack: t,
                });
            }, [e, t, n]);
        },
    },
);
