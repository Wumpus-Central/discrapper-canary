"use strict";
n.d(t, { A: () => a });
var r = n(315069),
    i = n(611010);
function s(e) {
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
class a extends r.A {
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
    supplementalData;
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
            (this.reviews = s(e.reviews)),
            (this.opencriticUrl = e.opencritic_url);
        const t = e.supplemental_game_data;
        null != t &&
            (this.supplementalData = {
                applicationId: e.id,
                name: t.name,
                summary: t.summary,
                summaryLocalized: t.summary_localized,
                websites: t.websites,
                themes: t.themes,
                genres: t.genres,
                platforms: t.platforms,
                artwork: t.artwork_urls,
                screenshots: t.screenshot_urls,
                iconHash: t.icon_hash,
                coverImageUrl: t.cover_image_url,
                firstReleaseDate: t.first_release_date,
                publishers: t.publisher_names ?? [],
                developers: t.developer_names ?? [],
                trailers: e.trailers,
                shopCollectionIds: e.shop_collection_ids,
                steamReleaseStatus: t.steam_release_status,
                reviews: s(t.reviews),
                opencriticUrl: t.opencritic_url,
                steam_id: t.steam_id,
                announcementsChannelId: t.announcements_channel_id,
                l30Rank: t.l30_rank,
            });
    }
}
