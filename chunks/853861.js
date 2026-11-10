i.d(e, { default: () => T });
var t,
    _ = i(477900);
i(582128);
var S =
        (((t = {}).ANIMATED_EMOJIS = "animatedEmojis"),
        (t.EMOJIS_EVERYWHERE = "emojisEverywhere"),
        (t.STICKERS_EVERYWHERE = "stickersEverywhere"),
        (t.SOUNDBOARD_EVERYWHERE = "soundboardEverywhere"),
        (t.ANIMATED_AVATAR = "animatedAvatar"),
        (t.CUSTOM_DISCRIMINATOR = "customDiscriminator"),
        (t.PREMIUM_GUILD_MEMBER_PROFILE = "premiumGuildMemberProfile"),
        (t.PROFILE_PREMIUM_FEATURES = "profilePremiumFeatures"),
        (t.STREAM_MID_QUALITY = "streamMidQuality"),
        (t.STREAM_HIGH_QUALITY = "streamHighQuality"),
        (t.VIDEO_FILTER_ASSETS = "videoFilterAssets"),
        (t.INCREASED_FILE_UPLOAD_SIZE = "increasedFileUploadSize"),
        (t.INCREASED_GUILD_LIMIT = "increasedGuildLimit"),
        (t.INCREASED_MESSAGE_LENGTH = "increasedMessageLength"),
        (t.NITRO_REACTION_TOGGLE = "nitroReactionToggle"),
        (t.CLIENT_THEMES = "clientThemes"),
        (t.PREMIUM_COLLECTIBLES = "premiumCollectibles"),
        (t.CUSTOM_CALL_SOUNDS = "customCallSounds"),
        (t.CUSTOM_NOTIFICATION_SOUNDS = "customNotificationSounds"),
        (t.SAVED_MESSAGES = "savedMessages"),
        (t.SCHEDULED_MESSAGES = "scheduledMessages"),
        (t.PREMIUM_VOICE_FILTERS = "premiumVoiceFilters"),
        (t.APP_ICONS = "appIcons"),
        (t.CHAT_WALLPAPERS = "chatWallpapers"),
        (t.QUEST_ORB_MULTIPLIER = "questOrbMultiplier"),
        (t.SHOP_MEMBER_PRICING = "shopMemberPricing"),
        t),
    a = i(964486),
    s = i(793574),
    I = i(688810),
    M = i(976860),
    r = i(129230),
    o = i(448645),
    c = i(739053),
    A = i(82498),
    n = i(831318),
    L = i(682901),
    l = i(652215);
i(853297);
var R = i(792996);
function T(E) {
    let { onClose: e, analyticsLocations: i = [], ...t } = E,
        { analyticsLocations: T } = (0, I.Ay)(i, s.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, a.Ay)(() => {
            (r.default.track(l.HAw.PREMIUM_UPSELL_VIEWED, {
                type: S.SCHEDULED_MESSAGES,
                location_section: l.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                location_stack: T,
                sku_id: (0, o.mH)(L.pe.TIER_2),
            }),
                (0, c.sq)(l.U7l.PREMIUM_UPSELL_VIEWED, T, () => (0, A.uq)(S.SCHEDULED_MESSAGES)));
        }),
        (0, _.jsx)(I.f5, {
            value: T,
            children: (0, _.jsx)(n.A, {
                title: R.intl.formatToPlainString(R.t.GNoaxo, { premiumMax: 25 }),
                subtitle: R.intl.formatToPlainString(R.t.YnsakI, { premiumMax: 25 }),
                graphic: {
                    src: "https://cdn.discordapp.com/assets/content/b8a8fb7e259ff2d910efca1e5ad38dd31166db4c3670c93bcb481eec74d99fc4.svg",
                    type: "image",
                },
                badgeType: "beta",
                secondaryCTA: R.intl.string(R.t.PcTCB7),
                onSecondaryClick: function () {
                    (r.default.track(l.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: l.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                        location_object: l.ZSU.NAVIGATION_LINK,
                    }),
                        e(),
                        (0, M.pX)(l.BVt.APPLICATION_STORE));
                },
                onClose: e,
                ...t,
            }),
        })
    );
}
