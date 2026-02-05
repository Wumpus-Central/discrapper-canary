"use strict";
n.d(t, { MU: () => p, oO: () => h, ow: () => f, wr: () => _ }), n(516773);
var r = n(508675),
    i = n(7584),
    a = n(403362),
    s = n(348943);
function o(e) {
    let { guildId: t, emojiId: n, emojiName: a } = e,
        s = r.o2.get(t);
    if (null == n && null == a) return null;
    if (null != n)
        if (null != s) return s.getById(n);
        else return null;
    return null != a ? i.Ay.getByName(a) : null;
}
let l = { label: "" };
function u(e, t) {
    let n = [, , , , ,].fill(l);
    for (let r of t)
        r.position < 0 ||
            r.position >= 5 ||
            (n[r.position] = {
                label: r.label,
                emoji: o({ guildId: e, emojiId: r.emoji_id, emojiName: r.emoji_name }) ?? void 0,
            });
    return n;
}
function c(e) {
    return null == e
        ? {}
        : Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return (e[n.toString()] = { level: r.activity_level, score: r.activity_score }), e;
          }, {});
}
function d(e) {
    return null == e || "" === e ? null : e;
}
function _(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description ?? "",
        icon: e.icon_hash,
        customBanner: e.custom_banner_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: d(e.brand_color_primary),
        visibility: e.visibility,
        traits: u(e.id, e.traits ?? []),
        gameApplicationIds: e.game_application_ids ?? [],
        gameActivity: c(e.game_activity),
        features: e.features ?? [],
        tag: e.tag,
        badge: e.badge,
        badgeColorPrimary: e.badge_color_primary,
        badgeColorSecondary: e.badge_color_secondary,
        badgeHash: e.badge_hash,
        premiumSubscriberCount: e.premium_subscription_count,
        premiumTier: e.premium_tier,
    };
}
function f(e) {
    let t = {};
    return (
        null != e.name && (t.name = e.name),
        null != e.description && (t.description = e.description),
        void 0 !== e.icon && (t.icon = e.icon),
        void 0 !== e.customBanner && (t.custom_banner = e.customBanner),
        null != e.visibility && (t.visibility = e.visibility),
        void 0 !== e.brandColorPrimary && (t.brand_color_primary = e.brandColorPrimary),
        null != e.traits &&
            (t.traits = e.traits
                .map((e, t) =>
                    e?.label == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: t,
                              emoji_id: e.emoji?.id,
                              emoji_name: e.emoji?.name,
                              emoji_animated: e.emoji?.animated,
                          },
                )
                .filter(a.Vq)),
        null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds),
        void 0 !== e.tag && (t.tag = e.tag),
        void 0 !== e.badge && (t.badge = e.badge),
        void 0 !== e.badgeColorPrimary && (t.badge_color_primary = e.badgeColorPrimary),
        void 0 !== e.badgeColorSecondary && (t.badge_color_secondary = e.badgeColorSecondary),
        t
    );
}
function p(e) {
    return e.reduce(
        (e, t) => ((e[t.game_application_id] = { level: t.activity_level, score: t.activity_score }), e),
        {},
    );
}
function h(e) {
    let { guild: t, profile: n } = e,
        r = null != n ? _(n) : null;
    return null != r
        ? r
        : null == t
          ? null
          : {
                id: t.id,
                name: t.name,
                description: t.description ?? "",
                icon: t.icon,
                customBanner: t.banner,
                onlineCount: t.approximate_presence_count ?? e.approximate_presence_count ?? 0,
                memberCount: t.approximate_member_count ?? e.approximate_member_count ?? 0,
                visibility: s.n.NOT_SPECIFIED,
                traits: [],
                gameApplicationIds: [],
                gameActivity: {},
                features: t.features ?? [],
                brandColorPrimary: null,
                tag: null,
                badge: null,
                badgeHash: null,
                badgeColorPrimary: null,
                badgeColorSecondary: null,
                premiumSubscriberCount: t.premium_subscription_count,
                premiumTier: t.premium_tier,
            };
}
