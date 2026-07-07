"use strict";
n.d(t, { A: () => u });
var i = n(155718),
    r = n(315069),
    s = n(395671),
    a = n(486020),
    o = n(403362),
    l = n(744700);
class u extends r.A {
    id;
    name;
    description;
    aliases;
    executables;
    overlay;
    overlayWarn;
    overlayCompatibilityHook;
    hook;
    supportsOutOfProcessOverlay;
    thirdPartySkus;
    themes;
    linkedApplications;
    genres;
    platforms;
    websites;
    companies;
    screenshotHashes;
    screenshotUrls;
    trailers;
    l30Rank;
    summaryLocalized;
    media;
    firstReleaseDate;
    shopCollectionIds;
    steamReleaseStatus;
    reviews;
    opencriticUrl;
    gameFlags;
    contentClassification;
    get applicationId() {
        return this.id;
    }
    getOfficialApplicationId() {
        return this.linkedApplications?.find((e) => e.type === i.Mh.OFFICIAL)?.id;
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.aliases = e.aliases ?? []),
            (this.executables = (e.executables ?? []).map(s.lg)),
            (this.overlay = e.overlay ?? !1),
            (this.overlayWarn = e.overlay_warn ?? !1),
            (this.overlayCompatibilityHook = e.overlay_compatibility_hook ?? !1),
            (this.hook = e.hook ?? !0),
            (this.supportsOutOfProcessOverlay = s.Ay.supportsOutOfProcessOverlay(e.overlay_methods)),
            (this.thirdPartySkus = e.third_party_skus ?? []),
            (this.themes = e.themes ?? []),
            (this.linkedApplications = e.linked_applications),
            (this.genres = e.genres ?? []),
            (this.platforms = e.platforms ?? []),
            (this.websites = e.websites ?? []),
            (this.companies = e.companies),
            (this.screenshotHashes = e.screenshot_hashes),
            (this.screenshotUrls = e.screenshot_urls),
            (this.trailers = e.trailers),
            (this.l30Rank = e.l30_rank),
            (this.summaryLocalized = e.summary_localized),
            (this.media = e.media),
            (this.firstReleaseDate = e.first_release_date),
            (this.shopCollectionIds = e.shop_collection_ids),
            (this.steamReleaseStatus = e.steam_release_status),
            (this.reviews = (function (e) {
                if (e?.steam != null || e?.opencritic != null)
                    return {
                        steam:
                            null != e.steam
                                ? {
                                      rating: e.steam.rating,
                                      ratingCount: e.steam.rating_count,
                                      recentRating: e.steam.recent_rating,
                                      recentRatingCount: e.steam.recent_rating_count,
                                      localizedRating: e.steam.localized_rating,
                                      localizedRatingCount: e.steam.localized_rating_count,
                                  }
                                : void 0,
                        opencritic:
                            null != e.opencritic
                                ? {
                                      topCriticRating: e.opencritic.top_critic_rating,
                                      topCriticRatingCount: e.opencritic.top_critic_rating_count,
                                      tier: e.opencritic.tier,
                                  }
                                : void 0,
                    };
            })(e.reviews)),
            (this.opencriticUrl = e.opencritic_url),
            (this.gameFlags = e.game_flags ?? 0),
            (this.contentClassification = e.content_classification);
    }
    getIconURL(e, t) {
        return (0, l.A)(this.id, this.media?.icon, { size: e, format: t });
    }
    getBannerURL(e) {
        return (0, l.A)(this.id, this.media?.banner, { keepAspectRatio: !0, size: e });
    }
    getCoverURL(e) {
        return (0, l.A)(this.id, this.media?.cover, { keepAspectRatio: !0, format: a.QB ? "webp" : "png", size: e });
    }
    getArtworkURLs() {
        return (this.media?.artwork ?? []).map((e) => (0, l.A)(this.id, e, { keepAspectRatio: !0 })).filter(o.Vq);
    }
    getCompanyByRole(e) {
        return this.companies?.filter((t) => t.roles.includes(e)) ?? [];
    }
}
