n.d(t, {
    MU: () => _,
    oO: () => h,
    ow: () => p,
    wr: () => f,
}),
    n(896048),
    n(228524),
    n(516773);
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
let l = {
    label: "",
};

function c(e, t) {
    let n = [, , , , ,].fill(l);
    for (let i of t) {
        var r;
        i.position < 0 ||
            i.position >= 5 ||
            (n[i.position] = {
                label: i.label,
                emoji:
                    null !=
                    (r = o({
                        guildId: e,
                        emojiId: i.emoji_id,
                        emojiName: i.emoji_name,
                    }))
                        ? r
                        : void 0,
            });
    }
    return n;
}

function u(e) {
    return null == e
        ? {}
        : Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return (
                  (e[n.toString()] = {
                      level: r.activity_level,
                      score: r.activity_score,
                  }),
                  e
              );
          }, {});
}

function d(e) {
    return null == e || "" === e ? null : e;
}

function f(e) {
    var t, n, r, i;
    return {
        id: e.id,
        name: e.name,
        description: null != (t = e.description) ? t : "",
        icon: e.icon_hash,
        customBanner: e.custom_banner_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: d(e.brand_color_primary),
        visibility: e.visibility,
        traits: c(e.id, null != (n = e.traits) ? n : []),
        gameApplicationIds: null != (r = e.game_application_ids) ? r : [],
        gameActivity: u(e.game_activity),
        features: null != (i = e.features) ? i : [],
        tag: e.tag,
        badge: e.badge,
        badgeColorPrimary: e.badge_color_primary,
        badgeColorSecondary: e.badge_color_secondary,
        badgeHash: e.badge_hash,
        premiumSubscriberCount: e.premium_subscription_count,
        premiumTier: e.premium_tier,
    };
}

function p(e) {
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
                .map((e, t) => {
                    var n, r, i;
                    return (null == e ? void 0 : e.label) == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: t,
                              emoji_id: null == (n = e.emoji) ? void 0 : n.id,
                              emoji_name: null == (r = e.emoji) ? void 0 : r.name,
                              emoji_animated: null == (i = e.emoji) ? void 0 : i.animated,
                          };
                })
                .filter(a.Vq)),
        null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds),
        void 0 !== e.tag && (t.tag = e.tag),
        void 0 !== e.badge && (t.badge = e.badge),
        void 0 !== e.badgeColorPrimary && (t.badge_color_primary = e.badgeColorPrimary),
        void 0 !== e.badgeColorSecondary && (t.badge_color_secondary = e.badgeColorSecondary),
        t
    );
}

function _(e) {
    return e.reduce(
        (e, t) => (
            (e[t.game_application_id] = {
                level: t.activity_level,
                score: t.activity_score,
            }),
            e
        ),
        {},
    );
}

function h(e) {
    var t, n, r, i, a, o;
    let { guild: l, profile: c } = e,
        u = null != c ? f(c) : null;
    return null != u
        ? u
        : null == l
          ? null
          : {
                id: l.id,
                name: l.name,
                description: null != (t = l.description) ? t : "",
                icon: l.icon,
                customBanner: l.banner,
                onlineCount:
                    null != (n = null != (r = l.approximate_presence_count) ? r : e.approximate_presence_count) ? n : 0,
                memberCount:
                    null != (i = null != (a = l.approximate_member_count) ? a : e.approximate_member_count) ? i : 0,
                visibility: s.n.NOT_SPECIFIED,
                traits: [],
                gameApplicationIds: [],
                gameActivity: {},
                features: null != (o = l.features) ? o : [],
                brandColorPrimary: null,
                tag: null,
                badge: null,
                badgeHash: null,
                badgeColorPrimary: null,
                badgeColorSecondary: null,
                premiumSubscriberCount: l.premium_subscription_count,
                premiumTier: l.premium_tier,
            };
}
