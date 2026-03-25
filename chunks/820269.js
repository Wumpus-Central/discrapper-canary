"use strict";
n.d(t, { A: () => c });
var r = n(575593);
function i(e) {
    if (null != e)
        return {
            staticImagePath: e.static_image_path,
            animatedImagePath: e.animated_image_path,
            videoPath: e.video_path,
        };
}
function s(e) {
    return {
        src: e.src,
        loop: e.loop,
        height: e.height,
        width: e.width,
        duration: e.duration ?? 0,
        start: e.start ?? 0,
        loopDelay: e.loop_delay,
        position: e.position,
        zIndex: e.z_index,
        randomizedSources: e.randomized_sources?.map((e) => ({ src: e.src })),
    };
}
function a(e) {
    if (null != e) {
        if (e.type === r.R.AVATAR_DECORATION)
            return {
                id: e.id,
                type: e.type,
                asset: e.asset,
                assets: i(e.assets),
                label: e.label,
                labelLocalized: e.label_localized,
            };
        if (e.type === r.R.NAMEPLATE)
            return {
                id: e.id,
                type: e.type,
                asset: e.asset,
                assets: i(e.assets),
                label: e.label,
                labelLocalized: e.label_localized,
                palette: e.palette,
            };
        if (e.type === r.R.PROFILE_EFFECT)
            return {
                id: e.id,
                type: e.type,
                title: e.title,
                titleLocalized: e.title_localized,
                description: e.description,
                descriptionLocalized: e.description_localized,
                accessibilityLabel: e.accessibility_label,
                accessibilityLabelLocalized: e.accessibility_label_localized,
                animationType: e.animation_type,
                staticFrameSrc: e.static_frame_src,
                thumbnailPreviewSrc: e.thumbnail_preview_src,
                reducedMotionSrc: e.reduced_motion_src,
                effects: e.effects?.map(s),
            };
        if (e.type === r.R.PROFILE_FRAME) return { id: e.id, type: e.type, label: e.label, layers: e.layers };
    }
}
function o(e) {
    if (null != e)
        return {
            role: e.role,
            baseVariantSkuId: e.base_variant_sku_id,
            baseVariantName: e.base_variant_name,
            value: e.value,
            label: e.label,
            collapseUnder: e.collapse_under,
        };
}
function l(e) {
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
function u(e) {
    if (null != e)
        return {
            type: e.type,
            item: a(e.item),
            categorySkuId: e.category_sku_id,
            premiumType: e.premium_type,
            expiresSecondsAfterClaim: e.expires_seconds_after_claim,
            expiresAt: null != e.expires_at ? new Date(1e3 * e.expires_at) : void 0,
            variant: o(e.variant),
            optionSelectorDisplayValue: e.option_selector_display_value,
        };
}
function c(e) {
    if (null != e) return { socialLayer: l(e.social_layer), collectibles: u(e.collectibles) };
}
