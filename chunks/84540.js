l.d(n, { p: () => u });
var a = l(33851),
    i = l.n(a),
    r = l(228366),
    o = l(685073),
    d = l(696451),
    t = l(287809),
    p = l(841595);
let u = (e) => {
    let { guildId: n, ...l } = e,
        a = t.default.getCurrentUser();
    if (null == a) return;
    let u = p.A.getUserProfile(a.id),
        s = null == n ? u : p.A.getGuildMemberProfile(a.id, n),
        m = null != n ? d.Ay.getMember(n, a.id) : null,
        g = {};
    if (
        ("globalName" in l &&
            (l.globalName === a.globalName || ("" === l.globalName && null === a.globalName)
                ? (g.pendingGlobalName = void 0)
                : (g.pendingGlobalName = l.globalName)),
        "nickname" in l &&
            (l.nickname === m?.nick || ("" === l.nickname && m?.nick === null)
                ? (g.pendingNickname = void 0)
                : (g.pendingNickname = l.nickname)),
        "displayNameStyles" in l)
    ) {
        let e = l.displayNameStyles,
            r = null != n ? m?.displayNameStyles : a.displayNameStyles;
        i()(e ?? null, r ?? null) ? (g.pendingDisplayNameStyles = void 0) : (g.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in l &&
            (l.pronouns === s?.pronouns ? (g.pendingPronouns = void 0) : (g.pendingPronouns = l.pronouns)),
        "avatar" in l &&
            ((null != n && l.avatar?.imageUri === m?.avatar) || (null == n && l.avatar?.imageUri === a.avatar)
                ? (g.pendingAvatar = void 0)
                : (g.pendingAvatar = l.avatar)),
        "avatarDecoration" in l &&
            ((null != n && l.avatarDecoration?.skuId === m?.avatarDecoration?.skuId) ||
            (null == n && l.avatarDecoration?.skuId === a.avatarDecoration?.skuId)
                ? (g.pendingAvatarDecoration = void 0)
                : (g.pendingAvatarDecoration = l.avatarDecoration)),
        "nameplate" in l &&
            ((null != n && l.nameplate?.skuId === m?.collectibles?.nameplate?.skuId) ||
            (null == n && l.nameplate?.skuId === a.collectibles?.nameplate?.skuId)
                ? (g.pendingNameplate = void 0)
                : (g.pendingNameplate = l.nameplate)),
        "profileEffect" in l &&
            (l.profileEffect?.skuId === s?.profileEffect?.skuId
                ? (g.pendingProfileEffect = void 0)
                : (g.pendingProfileEffect = l.profileEffect)),
        "profileFrame" in l &&
            (l.profileFrame?.skuId === s?.profileFrame?.skuId
                ? (g.pendingProfileFrame = void 0)
                : (g.pendingProfileFrame = l.profileFrame)),
        "banner" in l &&
            ((l.banner ?? null) === (null != n ? (s?.banner ?? null) : (a.banner ?? null))
                ? ((g.pendingBanner = void 0), (g.pendingBannerOriginalMd5 = void 0))
                : ((g.pendingBanner = l.banner), (g.pendingBannerOriginalMd5 = l.bannerOriginalMd5 ?? null))),
        "accentColor" in l)
    ) {
        let e = l.accentColor ?? null;
        e === (s?.accentColor ?? null) ? (g.pendingAccentColor = void 0) : (g.pendingAccentColor = e);
    }
    if ("themeColors" in l) {
        let e =
                null != n && null != l.themeColors && null == l.themeColors[0] && null == l.themeColors[1]
                    ? null
                    : (l.themeColors ?? null),
            a = s?.themeColors ?? null;
        i()(e, a) ? (g.pendingThemeColors = void 0) : (g.pendingThemeColors = l.themeColors);
    }
    if (("bio" in l && (l.bio === s?.bio ? (g.pendingBio = void 0) : (g.pendingBio = l.bio)), "primaryGuildId" in l)) {
        let e = (0, o.Zo)(a.primaryGuild).guildId ?? null;
        l.primaryGuildId === e ? (g.pendingPrimaryGuildId = void 0) : (g.pendingPrimaryGuildId = l.primaryGuildId);
    }
    "legacyUsernameDisabled" in l && (g.pendingLegacyUsernameDisabled = l.legacyUsernameDisabled),
        r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: n, ...g });
};
