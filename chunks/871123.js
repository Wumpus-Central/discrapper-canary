n.d(t, {
    Cv: () => O,
    M$: () => b,
    OY: () => S,
    Q6: () => I,
    Xg: () => _,
    Ye: () => T,
    bF: () => h,
    fq: () => A,
    jz: () => g,
    pV: () => p,
    sq: () => E,
    ty: () => y,
    xf: () => v,
    zf: () => m,
}),
    n(228524),
    n(446912),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(611010),
    s = n(731935),
    o = n(71393),
    l = n(371794),
    c = n(998218),
    u = n(916023),
    d = n(188275),
    f = n(652215);
let p = l.QB ? "webp" : "jpg";

function _(e) {
    return null != e && d.Pc.has(e.id);
}

function h(e) {
    return null != e && e.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM;
}

function m() {
    let e = o.A.getGuild(d.v8);
    return null != e && e.features.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? e.id : d.Kf;
}

function g(e) {
    var t, n;
    return (
        e.id === m() ||
        (null != (t = null == (n = e.features) ? void 0 : n.has(f.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) && t)
    );
}

function E(e) {
    return {
        applicationId: e.application_id,
        title: e.title,
        logoAssetId: e.logo_asset_id,
        lightThemeLogoAssetId: e.light_theme_logo_asset_id,
        pages: e.pages.map((e) => ({
            title: e.title,
            leaderboard:
                null != e.leaderboard
                    ? {
                          title: e.leaderboard.title,
                          description: e.leaderboard.description,
                          backgroundImageAssetId: e.leaderboard.background_image_asset_id,
                      }
                    : void 0,
            skuIds: e.sku_ids,
            sections:
                null != e.sections
                    ? e.sections.map((e) => ({
                          title: e.title,
                          skuIds: e.sku_ids,
                      }))
                    : void 0,
        })),
        assets: i().keyBy(e.assets, "id"),
        application: null != e.application ? a.Ay.createFromServer(e.application) : void 0,
    };
}

function b(e) {
    if (null != e)
        return {
            carouselItems: e.carousel_items.map((e) => ({
                thumbnailAssetId: e.thumbnail_asset_id,
                assetId: e.asset_id,
                backgroundAssetId: e.background_asset_id,
                youtubeVideoId: e.youtube_video_id,
                label: e.label,
                labelIconAssetId: e.label_icon_asset_id,
            })),
            label: e.label,
            expiresAt: null != e.expires_at ? new Date(e.expires_at) : void 0,
            cardImageAssetId: e.card_image_asset_id,
            cardBackgroundImageAssetId: e.card_background_image_asset_id,
        };
}

function y(e) {
    return {
        skus: e.skus.map((e) => s.A.createFromServer(e)),
        skusToRecommendationReasons: Object.fromEntries(
            Object.entries(e.skus_to_user_ids).map((e) => {
                let [t, n] = e;
                return [
                    t,
                    n.map((e) => ({
                        userId: e.user_id,
                        reason: e.reason,
                    })),
                ];
            }),
        ),
        application: a.Ay.createFromServer(e.application),
    };
}

function O(e, t) {
    var n, r, i;
    if (
        null == t ||
        (null == e || null == (i = e.tenantMetadata) || null == (r = i.socialLayer) ? void 0 : r.carouselItems) ==
            null ||
        0 === e.tenantMetadata.socialLayer.carouselItems.length
    )
        return {
            primaryIconAsset: void 0,
            primaryIconLabel: void 0,
        };
    let a = e.tenantMetadata.socialLayer.carouselItems[0];
    return null == a.labelIconAssetId
        ? {
              primaryIconAsset: void 0,
              primaryIconLabel: void 0,
          }
        : {
              primaryIconAsset: null != (n = c.A.toURLSafe((0, l.YE)(t, a.labelIconAssetId, 512, "webp"))) ? n : void 0,
              primaryIconLabel: a.label,
          };
}

function A(e) {
    var t, n, r;
    let i = null == e ? void 0 : e.applicationId,
        a =
            null !=
            (t =
                null == e || null == (r = e.tenantMetadata) || null == (n = r.socialLayer)
                    ? void 0
                    : n.cardImageAssetId)
                ? t
                : null == e
                  ? void 0
                  : e.thumbnailAssetId;
    if (null != a && null != i) return c.A.toURLSafe((0, l.YE)(i, a, 512, "webp"));
}

function v(e) {
    var t, n;
    if (
        (null == e || null == (n = e.tenantMetadata) || null == (t = n.socialLayer)
            ? void 0
            : t.cardBackgroundImageAssetId) != null &&
        (null == e ? void 0 : e.applicationId) != null
    )
        return c.A.toURLSafe(
            (0, l.YE)(e.applicationId, e.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, p),
        );
}

function S(e, t) {
    return ""
        .concat(location.protocol)
        .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT)
        .concat(f.BVt.GAME_SHOP(e, t.id, t.slug));
}

function I(e, t) {
    return "".concat(S(e, t), "\n\n");
}

function T(e, t) {
    let n = o.A.getGuild(e);
    return (
        null != n &&
        g(n) &&
        (0, u.xD)({
            location: t,
        })
    );
}
