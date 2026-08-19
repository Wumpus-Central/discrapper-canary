"use strict";
n.d(t, { MU: () => c, oO: () => u, ow: () => d, wr: () => o }), n(516773);
var i = n(236285),
    r = n(7584),
    a = n(403362),
    s = n(348943);
let l = { label: "" };
function o(e) {
    var t, n;
    return {
        id: e.id,
        name: e.name,
        description: e.description ?? "",
        icon: e.icon_hash,
        customBanner: e.custom_banner_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: null == (t = e.brand_color_primary) || "" === t ? null : t,
        visibility: e.visibility,
        traits: (function (e, t) {
            let n = [, , , , ,].fill(l);
            for (let a of t)
                a.position < 0 ||
                    a.position >= 5 ||
                    (n[a.position] = {
                        label: a.label,
                        emoji:
                            (function (e) {
                                let { guildId: t, emojiId: n, emojiName: a } = e,
                                    s = i.o2.get(t);
                                if (null == n && null == a) return null;
                                if (null != n)
                                    if (null != s) return s.getById(n);
                                    else return null;
                                return null != a ? r.Ay.getByName(a) : null;
                            })({ guildId: e, emojiId: a.emoji_id, emojiName: a.emoji_name }) ?? void 0,
                    });
            return n;
        })(e.id, e.traits ?? []),
        gameApplicationIds: e.game_application_ids ?? [],
        gameActivity:
            null == (n = e.game_activity)
                ? {}
                : Object.entries(n).reduce((e, t) => {
                      let [n, i] = t;
                      return (e[n] = { level: i.activity_level, score: i.activity_score }), e;
                  }, {}),
        games: e.games,
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
function d(e) {
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
function c(e) {
    return e.reduce(
        (e, t) => ((e[t.game_application_id] = { level: t.activity_level, score: t.activity_score }), e),
        {},
    );
}
function u(e) {
    let { guild: t, profile: n } = e,
        i = null != n ? o(n) : null;
    return null != i
        ? i
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
