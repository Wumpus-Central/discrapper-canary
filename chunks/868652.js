"use strict";
n.d(t, { qM: () => A, Xd: () => I, Qh: () => f, AK: () => h, Zm: () => E, pz: () => p }), n(321073);
var i = n(636537),
    r = n(228366),
    a = n(403362),
    s = n(371794),
    l = n(568065);
let o = [
        {
            type: l.o9.LEVEL,
            skuId: "1",
            title: "Lorem ipsum",
            cost: 1,
            dependencies: [],
            features: {
                additional_emoji_slots: 50,
                additional_sound_slots: 50,
                additional_sticker_slots: 50,
                total_emoji_slots: 50,
                total_sound_slots: 50,
                total_sticker_slots: 50,
                features: [],
            },
        },
        {
            type: l.o9.LEVEL,
            skuId: "2",
            title: "Lorem ipsum",
            cost: 1,
            dependencies: ["1"],
            features: {
                additional_emoji_slots: 50,
                additional_sound_slots: 50,
                additional_sticker_slots: 50,
                total_emoji_slots: 50,
                total_sound_slots: 50,
                total_sticker_slots: 50,
                features: [],
            },
        },
        {
            type: l.o9.LEVEL,
            skuId: "3",
            title: "Lorem ipsum",
            cost: 1,
            dependencies: ["2"],
            features: {
                additional_emoji_slots: 50,
                additional_sound_slots: 50,
                additional_sticker_slots: 50,
                total_emoji_slots: 50,
                total_sound_slots: 50,
                total_sticker_slots: 50,
                features: [],
            },
        },
    ],
    d = [
        {
            type: l.o9.PERK,
            skuId: "4",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
            cost: 1,
            dependencies: [],
        },
        {
            type: l.o9.PERK,
            skuId: "5",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
            cost: 1,
            dependencies: [],
        },
        {
            type: l.o9.PERK,
            skuId: "6",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
            cost: 1,
            dependencies: [],
        },
        {
            type: l.o9.PERK,
            skuId: "7",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao",
            cost: 1,
            dependencies: [],
        },
    ];
var c = n(202541),
    u = n(307731),
    _ = n(652215);
function E(e) {
    r.h.dispatch({ type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: e });
}
function A() {
    r.h.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
}
function h(e, t) {
    if (!0 === t) {
        let t = o.concat(d),
            n = {};
        (n[l.o9.LEVEL] = o),
            (n[l.o9.PERK] = d),
            r.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: t
                    .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
                    .reduce((e, t) => ((e[t.skuId] = t), e), {}),
                powerupCatalog: n,
            });
        return;
    }
    let n = { application_id: l.Wb, guild_id: e };
    return (0, s.aP)({
        url: _.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    }).then((t) => {
        let { allPowerups: n, powerupCatalog: i } = t.body
            .map((e) =>
                (function (e, t) {
                    let n = t.powerup_metadata?.category_type;
                    if (null == n) return;
                    let i = t.sku?.powerup_metadata;
                    if (null == i) return;
                    let r = {
                        title: t.summary,
                        skuId: t.sku.id,
                        cost: i.boost_price,
                        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
                        animatedImageUrl: t.powerup_metadata?.animated_image_url ?? i.animated_image_url,
                        staticImageUrl: t.powerup_metadata?.static_image_url ?? i.static_image_url,
                        storeRemovalDate: t.powerup_metadata?.store_removal_date,
                        deactivationCooldownPeriodDays: t.powerup_metadata?.deactivation_cooldown_period_days,
                    };
                    switch (n) {
                        case l.o9.LEVEL: {
                            let n = t.sku.powerup_metadata?.guild_features;
                            if (null == n) return;
                            let i = u.DEFAULT_EMOJI_SLOTS + n.additional_emoji_slots,
                                a = c.OW + n.additional_sound_slots,
                                s = c.GI + n.additional_sticker_slots,
                                o = t.sku.dependent_sku_id;
                            for (; null != o; ) {
                                let t = e.find((e) => o === e.sku.id);
                                (i += t?.sku?.powerup_metadata?.guild_features?.additional_emoji_slots ?? 0),
                                    (a += t?.sku?.powerup_metadata?.guild_features?.additional_sound_slots ?? 0),
                                    (s += t?.sku?.powerup_metadata?.guild_features?.additional_sticker_slots ?? 0),
                                    (o = t?.sku.dependent_sku_id);
                            }
                            return {
                                type: l.o9.LEVEL,
                                features: { ...n, total_emoji_slots: i, total_sound_slots: a, total_sticker_slots: s },
                                ...r,
                            };
                        }
                        case l.o9.PERK:
                            return { type: l.o9.PERK, description: t.description ?? "", ...r };
                    }
                })(t.body, e),
            )
            .filter(a.Vq)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    let { allPowerups: n, powerupCatalog: i } = e;
                    return (n[t.skuId] = t), null == i[t.type] && (i[t.type] = []), i[t.type]?.push?.(t), e;
                },
                { allPowerups: {}, powerupCatalog: {} },
            );
        return (
            r.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: n,
                powerupCatalog: i,
            }),
            t.body
        );
    });
}
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.aP)({
        url: _.Rsh.GUILD_POWERUPS(e),
        query: { include_ends_at: t },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    }).then((t) => {
        let n = {},
            i = {};
        t.body.forEach((e) => {
            e.sku?.tenant_metadata?.guild_monetization?.powerup != null || e?.sku?.powerup_metadata != null
                ? (n[e.sku_id] = e)
                : e.sku?.tenant_metadata?.guild_monetization?.game_server != null && (i[e.id] = e);
        }),
            r.h.dispatch({
                type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
                guildId: e,
                unlockedPowerups: n,
                unlockedGameServers: i,
            });
    });
}
function f(e, t) {
    return i.Bo.post({ url: _.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
function p(e, t) {
    return i.Bo.del({ url: _.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
