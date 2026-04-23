"use strict";
n.d(t, { A: () => a });
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
        loopDelay: e.loopDelay,
        position: e.position,
        zIndex: e.zIndex,
        randomizedSources: e.randomizedSources?.map((e) => {
            let { src: t } = e;
            return { src: t };
        }),
    };
}
function a(e) {
    if (null != e)
        return {
            socialLayer: (function (e) {
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
            })(e.social_layer),
            collectibles: (function (e) {
                if (null != e)
                    return {
                        type: e.type,
                        item: (function (e) {
                            if (null != e) {
                                if (e.type === r.R.AVATAR_DECORATION)
                                    return {
                                        id: e.id,
                                        type: e.type,
                                        asset: e.asset,
                                        assets: i(e.assets),
                                        label: e.label,
                                    };
                                if (e.type === r.R.NAMEPLATE)
                                    return {
                                        id: e.id,
                                        type: e.type,
                                        asset: e.asset,
                                        assets: i(e.assets),
                                        label: e.label,
                                        palette: e.palette,
                                    };
                                if (e.type === r.R.PROFILE_EFFECT)
                                    return {
                                        id: e.id,
                                        type: e.type,
                                        title: e.title,
                                        description: e.description,
                                        accessibilityLabel: e.accessibilityLabel,
                                        animationType: e.animationType,
                                        staticFrameSrc: e.staticFrameSrc,
                                        thumbnailPreviewSrc: e.thumbnailPreviewSrc,
                                        reducedMotionSrc: e.reducedMotionSrc,
                                        effects: e.effects?.map(s),
                                    };
                                if (e.type === r.R.PROFILE_FRAME)
                                    return { id: e.id, type: e.type, label: e.label, layers: e.layers };
                            }
                        })(e.item),
                        categorySkuId: e.category_sku_id,
                        premiumType: e.premium_type,
                        expiresSecondsAfterClaim: e.expires_seconds_after_claim,
                        expiresAt: null != e.expires_at ? new Date(1e3 * e.expires_at) : void 0,
                        variant: (function (e) {
                            if (null != e)
                                return {
                                    role: e.role,
                                    baseVariantSkuId: e.base_variant_sku_id,
                                    baseVariantName: e.base_variant_name,
                                    value: e.value,
                                    label: e.label,
                                    collapseUnder: e.collapse_under,
                                };
                        })(e.variant),
                        optionSelectorDisplayValue: e.option_selector_display_value,
                    };
            })(e.collectibles),
        };
}
