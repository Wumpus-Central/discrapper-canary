n.d(r, { p: () => c });
var a = n(33851),
    t = n.n(a),
    l = n(228366),
    i = n(685073),
    o = n(696451),
    s = n(287809),
    u = n(841595);
function c(e) {
    let { guildId: r, ...n } = e,
        a = s.default.getCurrentUser();
    if (null == a) return;
    let c = u.A.getUserProfile(a.id),
        p = null == r ? c : u.A.getGuildMemberProfile(a.id, r),
        d = null != r ? o.Ay.getMember(r, a.id) : null,
        f = {};
    if (
        ("globalName" in n &&
            (n.globalName === a.globalName || ("" === n.globalName && null === a.globalName)
                ? (f.pendingGlobalName = void 0)
                : (f.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === d?.nick || ("" === n.nickname && d?.nick === null)
                ? (f.pendingNickname = void 0)
                : (f.pendingNickname = n.nickname)),
        "displayNameStyles" in n)
    ) {
        let e = n.displayNameStyles,
            l = null != r ? d?.displayNameStyles : a.displayNameStyles;
        t()(e ?? null, l ?? null) ? (f.pendingDisplayNameStyles = void 0) : (f.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in n &&
            (n.pronouns === p?.pronouns ? (f.pendingPronouns = void 0) : (f.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != r && n.avatar?.imageUri === d?.avatar) || (null == r && n.avatar?.imageUri === a.avatar)
                ? (f.pendingAvatar = void 0)
                : (f.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != r && n.avatarDecoration?.skuId === d?.avatarDecoration?.skuId) ||
            (null == r && n.avatarDecoration?.skuId === a.avatarDecoration?.skuId)
                ? (f.pendingAvatarDecoration = void 0)
                : (f.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != r && n.nameplate?.skuId === d?.collectibles?.nameplate?.skuId) ||
            (null == r && n.nameplate?.skuId === a.collectibles?.nameplate?.skuId)
                ? (f.pendingNameplate = void 0)
                : (f.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === p?.profileEffect?.skuId
                ? (f.pendingProfileEffect = void 0)
                : (f.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === p?.profileFrame?.skuId
                ? (f.pendingProfileFrame = void 0)
                : (f.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((n.banner ?? null) === (null != r ? (p?.banner ?? null) : (a.banner ?? null))
                ? ((f.pendingBanner = void 0), (f.pendingBannerOriginalMd5 = void 0))
                : ((f.pendingBanner = n.banner), (f.pendingBannerOriginalMd5 = n.bannerOriginalMd5 ?? null))),
        "accentColor" in n)
    ) {
        let e = n.accentColor ?? null;
        e === (p?.accentColor ?? null) ? (f.pendingAccentColor = void 0) : (f.pendingAccentColor = e);
    }
    if ("themeColors" in n) {
        let e =
                null != r && null != n.themeColors && null == n.themeColors[0] && null == n.themeColors[1]
                    ? null
                    : (n.themeColors ?? null),
            a = p?.themeColors ?? null;
        t()(e, a) ? (f.pendingThemeColors = void 0) : (f.pendingThemeColors = n.themeColors);
    }
    if (("bio" in n && (n.bio === p?.bio ? (f.pendingBio = void 0) : (f.pendingBio = n.bio)), "primaryGuildId" in n)) {
        let e = (0, i.Zo)(a.primaryGuild).guildId ?? null;
        n.primaryGuildId === e ? (f.pendingPrimaryGuildId = void 0) : (f.pendingPrimaryGuildId = n.primaryGuildId);
    }
    "legacyUsernameDisabled" in n && (f.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: r, ...f });
}
