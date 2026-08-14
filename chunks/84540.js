l.d(n, { p: () => u });
var a = l(811315),
    i = l.n(a),
    o = l(228366),
    r = l(685073),
    d = l(696451),
    t = l(287809),
    p = l(321191);
function u(e) {
    let { guildId: n, ...l } = e,
        a = t.default.getCurrentUser();
    if (null == a) return;
    let u = p.A.getUserProfile(a.id),
        m = null == n ? u : p.A.getGuildMemberProfile(a.id, n),
        s = null != n ? d.Ay.getMember(n, a.id) : null,
        c = {};
    if (
        ("globalName" in l &&
            (l.globalName === a.globalName || ("" === l.globalName && null === a.globalName)
                ? (c.pendingGlobalName = void 0)
                : (c.pendingGlobalName = l.globalName)),
        "nickname" in l &&
            (l.nickname === s?.nick || ("" === l.nickname && s?.nick === null)
                ? (c.pendingNickname = void 0)
                : (c.pendingNickname = l.nickname)),
        "displayNameStyles" in l)
    ) {
        let e = l.displayNameStyles,
            o = null != n ? s?.displayNameStyles : a.displayNameStyles;
        i()(e ?? null, o ?? null) ? (c.pendingDisplayNameStyles = void 0) : (c.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in l &&
            (l.pronouns === m?.pronouns ? (c.pendingPronouns = void 0) : (c.pendingPronouns = l.pronouns)),
        "avatar" in l &&
            ((null != n && l.avatar?.imageUri === s?.avatar) || (null == n && l.avatar?.imageUri === a.avatar)
                ? (c.pendingAvatar = void 0)
                : (c.pendingAvatar = l.avatar)),
        "avatarDecoration" in l &&
            ((null != n && l.avatarDecoration?.skuId === s?.avatarDecoration?.skuId) ||
            (null == n && l.avatarDecoration?.skuId === a.avatarDecoration?.skuId)
                ? (c.pendingAvatarDecoration = void 0)
                : (c.pendingAvatarDecoration = l.avatarDecoration)),
        "nameplate" in l &&
            ((null != n && l.nameplate?.skuId === s?.collectibles?.nameplate?.skuId) ||
            (null == n && l.nameplate?.skuId === a.collectibles?.nameplate?.skuId)
                ? (c.pendingNameplate = void 0)
                : (c.pendingNameplate = l.nameplate)),
        "profileEffect" in l &&
            (l.profileEffect?.skuId === m?.profileEffect?.skuId
                ? (c.pendingProfileEffect = void 0)
                : (c.pendingProfileEffect = l.profileEffect)),
        "profileFrame" in l &&
            (l.profileFrame?.skuId === m?.profileFrame?.skuId
                ? (c.pendingProfileFrame = void 0)
                : (c.pendingProfileFrame = l.profileFrame)),
        "banner" in l &&
            ((l.banner?.imageUri ?? null) === (null != n ? (m?.banner ?? null) : (a.banner ?? null))
                ? (c.pendingBanner = void 0)
                : (c.pendingBanner = l.banner)),
        "accentColor" in l)
    ) {
        let e = l.accentColor ?? null;
        e === (m?.accentColor ?? null) ? (c.pendingAccentColor = void 0) : (c.pendingAccentColor = e);
    }
    if ("themeColors" in l) {
        let e =
                null != n && null != l.themeColors && null == l.themeColors[0] && null == l.themeColors[1]
                    ? null
                    : (l.themeColors ?? null),
            a = m?.themeColors ?? null;
        i()(e, a) ? (c.pendingThemeColors = void 0) : (c.pendingThemeColors = l.themeColors);
    }
    if (("bio" in l && (l.bio === m?.bio ? (c.pendingBio = void 0) : (c.pendingBio = l.bio)), "primaryGuildId" in l)) {
        let e = (0, r.Zo)(a.primaryGuild).guildId ?? null;
        l.primaryGuildId === e ? (c.pendingPrimaryGuildId = void 0) : (c.pendingPrimaryGuildId = l.primaryGuildId);
    }
    "legacyUsernameDisabled" in l && (c.pendingLegacyUsernameDisabled = l.legacyUsernameDisabled),
        o.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: n, ...c });
}
