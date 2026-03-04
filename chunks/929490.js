"use strict";
n.d(t, { A: () => a });
var r = n(315069),
    i = n(611010);
function s(e) {
    if (e?.steam != null) return { steam: { rating: e.steam.rating, ratingCount: e.steam.rating_count } };
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
    coverImageHash;
    bannerHash;
    screenshotHashes;
    screenshotUrls;
    supplementalData;
    get applicationId() {
        return this.id;
    }
    constructor(e) {
        super();
        const t = e.supplemental_game_data;
        (this.id = e.id),
            (this.name = t?.name ?? e.name),
            (this.description = e.description),
            (this.aliases = e.aliases ?? []),
            (this.executables = (e.executables ?? []).map(i.lg)),
            (this.overlay = e.overlay ?? !1),
            (this.overlayWarn = e.overlay_warn ?? !1),
            (this.overlayCompatibilityHook = e.overlay_compatibility_hook ?? !1),
            (this.hook = e.hook ?? !0),
            (this.supportsOutOfProcessOverlay = i.Ay.supportsOutOfProcessOverlay(e.overlay_methods)),
            (this.thirdPartySkus = e.third_party_skus ?? []),
            (this.themes = t?.themes ?? e.themes ?? []),
            (this.linkedApplications = e.linked_applications),
            (this.genres = t?.genres ?? e.genres ?? []),
            (this.platforms = t?.platforms ?? e.platforms ?? []),
            (this.websites = t?.websites ?? e.websites ?? []),
            (this.companies = e.companies),
            (this.coverImageHash = e.cover_image_hash),
            (this.bannerHash = e.banner_hash),
            (this.screenshotHashes = e.screenshot_hashes),
            (this.screenshotUrls = t?.screenshot_urls ?? e.screenshot_urls),
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
                    steamReleaseStatus: t.steam_release_status,
                    reviews: s(t.reviews),
                    steam_id: t.steam_id,
                });
    }
}
