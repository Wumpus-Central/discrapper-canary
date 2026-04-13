"use strict";
n.d(t, { A: () => l });
var r = n(315069),
    i = n(611010),
    s = n(486020),
    a = n(898736);
function o(e) {
    if (e?.steam != null || e?.opencritic != null)
        return {
            steam: null != e.steam ? { rating: e.steam.rating, ratingCount: e.steam.rating_count } : void 0,
            opencritic:
                null != e.opencritic
                    ? {
                          topCriticRating: e.opencritic.top_critic_rating,
                          topCriticRatingCount: e.opencritic.top_critic_rating_count,
                          tier: e.opencritic.tier,
                      }
                    : void 0,
        };
}
class l extends r.A {
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
    iconHash;
    coverImageHash;
    bannerHash;
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
    get applicationId() {
        return this.id;
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.description = e.description),
            (this.aliases = e.aliases ?? []),
            (this.executables = (e.executables ?? []).map(i.lg)),
            (this.overlay = e.overlay ?? !1),
            (this.overlayWarn = e.overlay_warn ?? !1),
            (this.overlayCompatibilityHook = e.overlay_compatibility_hook ?? !1),
            (this.hook = e.hook ?? !0),
            (this.supportsOutOfProcessOverlay = i.Ay.supportsOutOfProcessOverlay(e.overlay_methods)),
            (this.thirdPartySkus = e.third_party_skus ?? []),
            (this.themes = e.themes ?? []),
            (this.linkedApplications = e.linked_applications),
            (this.genres = e.genres ?? []),
            (this.platforms = e.platforms ?? []),
            (this.websites = e.websites ?? []),
            (this.companies = e.companies),
            (this.iconHash = e.icon_hash),
            (this.coverImageHash = e.cover_image_hash),
            (this.bannerHash = e.banner_hash),
            (this.screenshotHashes = e.screenshot_hashes),
            (this.screenshotUrls = e.screenshot_urls),
            (this.trailers = e.trailers),
            (this.l30Rank = e.l30_rank),
            (this.summaryLocalized = e.summary_localized),
            (this.media = e.media),
            (this.firstReleaseDate = e.first_release_date),
            (this.shopCollectionIds = e.shop_collection_ids),
            (this.steamReleaseStatus = e.steam_release_status),
            (this.reviews = o(e.reviews)),
            (this.opencriticUrl = e.opencritic_url),
            (this.gameFlags = e.game_flags ?? 0);
    }
    getCoverURL(e) {
        return null == this.media
            ? null
            : null != this.media.cover_hash
              ? (s.Ay.getGameAssetURL({
                    id: this.id,
                    hash: this.media.cover_hash,
                    keepAspectRatio: !0,
                    format: s.QB ? "webp" : "png",
                    size: e,
                }) ?? null)
              : (this.media.cover_url ?? null);
    }
    getArtworkURLs() {
        return null == this.media ? [] : (0, a.L)(this.id, this.media.artwork_hashes, this.media.artwork_urls);
    }
    getCompanyByRole(e) {
        return this.companies?.filter((t) => t.roles.includes(e)) ?? [];
    }
}
