"use strict";
n.d(t, { A: () => N });
var r = n(110259),
    i = n(349941),
    s = n(562465),
    a = n(73153),
    o = n(398590),
    l = n(626584),
    u = n(646269),
    c = n(568185),
    d = n(529942),
    _ = n(164956),
    f = n(857071),
    p = n(976860),
    h = n(138298),
    m = n(961350),
    E = n(696451),
    g = n(71393),
    A = n(499785),
    I = n(555337),
    T = n(652215),
    S = n(985018);
let y = new l.A("GuildSettingsActionCreators"),
    v = {
        init(e, t, n, r) {
            a.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: r, location: n });
        },
        async open(e, t, r, i) {
            await Promise.all([
                n.e("49681"),
                n.e("10614"),
                n.e("3795"),
                n.e("14138"),
                n.e("8555"),
                n.e("49924"),
                n.e("28936"),
                n.e("68859"),
                n.e("40396"),
                n.e("13088"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("48840"),
                n.e("49559"),
                n.e("43600"),
                n.e("42006"),
                n.e("37372"),
                n.e("68587"),
                n.e("89783"),
                n.e("28136"),
                n.e("91139"),
                n.e("3183"),
                n.e("5709"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("8018"),
                n.e("96760"),
                n.e("35894"),
                n.e("50796"),
                n.e("99328"),
                n.e("24202"),
                n.e("41606"),
                n.e("8458"),
                n.e("11810"),
                n.e("52848"),
                n.e("7562"),
                n.e("39501"),
                n.e("30453"),
                n.e("17537"),
                n.e("49862"),
                n.e("71750"),
                n.e("56475"),
                n.e("59541"),
                n.e("6454"),
            ]).then(n.bind(n, 422559)),
                g.A.getGuild(e)?.features.has(T.GuildFeatures.COMMUNITY) &&
                    (t === T.BEX.GUILD_AUTOMOD && ((t = T.BEX.SAFETY), (i = T.nd0.SAFETY_AUTOMOD)),
                    t === T.BEX.MEMBER_VERIFICATION && ((t = T.BEX.SAFETY), (i = T.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                v.init(e, t, r, i),
                h.A.closeGuildSidebar(e),
                (0, o.id)(T.zgK.GUILD_SETTINGS);
        },
        close() {
            a.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            a.h.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state: e });
        },
        setSection(e, t) {
            let n = I.A.getGuildId();
            null != n &&
                (g.A.getGuild(n)?.features.has(T.GuildFeatures.COMMUNITY) &&
                    (e === T.BEX.GUILD_AUTOMOD && ((e = T.BEX.SAFETY), (t = T.nd0.SAFETY_AUTOMOD)),
                    e === T.BEX.MEMBER_VERIFICATION && ((e = T.BEX.SAFETY), (t = T.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                a.h.dispatch({ type: "GUILD_SETTINGS_SET_SECTION", section: e, subsection: t }));
        },
        setSearchQuery(e) {
            a.h.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery: e });
        },
        selectRole: (e, t) => a.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: e, searchQuery: t }),
        updateEmbed: (e, t, n) =>
            s.Bo.patch({
                url: T.Rsh.GUILD_WIDGET(e),
                body: { enabled: t, channel_id: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((t) => {
                a.h.dispatch({
                    type: "GUILD_SETTINGS_SET_WIDGET",
                    guildId: e,
                    enabled: t.body.enabled,
                    channelId: t.body.channel_id,
                });
            }),
        updateMFALevel(e) {
            let { guildId: t, level: n } = e;
            return s.Bo.post({
                url: T.Rsh.GUILD_MFA(t),
                body: { level: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => a.h.dispatch({ type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: e.body.level }));
        },
        updateIcon(e, t) {
            s.Bo.patch({ url: T.Rsh.GUILD(e), body: { icon: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
                () => {
                    a.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }), c.A.checkGuildTemplateDirty(e);
                },
                (e) => a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
            );
        },
        cancelChanges(e) {
            a.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n, ...r } = e,
                i = { ...r };
            null != n && (i.profile = { ...(i.profile ?? {}), ...n }),
                null != I.A.getGuildId() && null != t && (i.safetyAlertsChannelId = t),
                a.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...i });
        },
        updateGuildProfile(e, t) {
            a.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
        },
        saveGuild(e, t) {
            let {
                    name: n,
                    description: r,
                    icon: i,
                    splash: o,
                    banner: l,
                    homeHeader: d,
                    afkChannelId: _,
                    afkTimeout: f,
                    systemChannelId: p,
                    verificationLevel: h,
                    defaultMessageNotifications: m,
                    explicitContentFilter: E,
                    features: g,
                    systemChannelFlags: A,
                    preferredLocale: I,
                    rulesChannelId: S,
                    safetyAlertsChannelId: v,
                    ownerConfiguredContentLevel: N,
                    discoverySplash: C,
                    publicUpdatesChannelId: R,
                    premiumProgressBarEnabled: O,
                    profile: b,
                    moderatorReportingEnabled: D,
                } = t,
                L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                w = {
                    name: n,
                    description: r,
                    icon: i,
                    splash: o,
                    banner: l,
                    home_header: d,
                    features: g,
                    preferred_locale: I,
                    afk_channel_id: _,
                    afk_timeout: f,
                    system_channel_id: p,
                    verification_level: h,
                    default_message_notifications: m,
                    explicit_content_filter: E,
                    system_channel_flags: A,
                    rules_channel_id: S,
                    owner_configured_content_level: N,
                    discovery_splash: C,
                    public_updates_channel_id: R,
                    safety_alerts_channel_id: v,
                    ...(null != O ? { premium_progress_bar_enabled: O } : null),
                    profile: null != b ? (0, u.N)(b) : b,
                    moderator_reporting_enabled: D,
                };
            return (
                a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                s.Bo.patch({
                    url: T.Rsh.GUILD(e),
                    query: { for_discovery: L.isForDiscovery },
                    body: w,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: t.body }),
                            c.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
                            y.error("Failed to save guild settings", { errors: e.body }),
                            L.throwErr)
                        )
                            throw e.body;
                    },
                )
            );
        },
        updateGuildModeration: (e, t) =>
            s.Bo.patch({
                url: T.Rsh.GUILD(e),
                body: { verification_level: t.verificationLevel, explicit_content_filter: t.explicitContentFilter },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => (c.A.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return A.A.patch({
                url: T.Rsh.GUILD(e),
                body: { owner_id: t, code: i },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                    properties: { guild_id: e, verification_type: n },
                },
                rejectWithError: !1,
            });
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return A.A.put({
                url: T.Rsh.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: { guild_id: e, is_resend: t },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            s.Bo.post({ url: T.Rsh.GUILD_DELETE(e), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                v.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = f.A.isLurking(e);
            await s.Bo.del({
                url: T.Rsh.GUILD_LEAVE(e),
                body: { lurking: n || E.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                i.OR.announce(S.intl.string(S.t["7iPyVW"]));
            }),
                v.close(),
                t && n && (0, p.pX)(T.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, i) {
            _.A.isFullServerPreview(e) && t === m.default.getId()
                ? (0, d.ID)(e, n)
                : (await s.Bo.patch({
                      url: T.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: n },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  r.forEach((n) => a.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: n, userId: t })),
                  i.forEach((n) =>
                      a.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: n, userId: t }),
                  ));
        },
        bulkAddMemberRoles: (e, t, n) =>
            s.Bo.patch({ url: T.Rsh.GUILD_ROLE_MEMBERS(e, t), body: { member_ids: n }, rejectWithError: !1 }).then(
                (n) => {
                    a.h.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: e, roleId: t, added: n.body });
                },
            ),
        enableIntegration: (e, t, n) =>
            s.Bo.post({
                url: T.Rsh.GUILD_INTEGRATIONS(e),
                body: { type: t, id: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            s.Bo.del({ url: T.Rsh.GUILD_INTEGRATION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
        updateIntegration(e, t, n, r, i) {
            let a = { expire_behavior: n, expire_grace_period: r, enable_emoticons: i };
            return s.Bo.patch({ url: T.Rsh.GUILD_INTEGRATION(e, t), body: a, oldFormErrors: !0, rejectWithError: !1 });
        },
        syncIntegration(e, t) {
            s.Bo.post({ url: T.Rsh.GUILD_INTEGRATION_SYNC(e, t), oldFormErrors: !0, rejectWithError: !1 });
        },
        async migratePinPermission(e) {
            await s.Bo.post({ url: T.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e), rejectWithError: !0 }).then(() =>
                a.h.dispatch({ type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migrateSlowmodePermission(e) {
            await s.Bo.post({ url: T.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e), rejectWithError: !0 }).then(() =>
                a.h.dispatch({ type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await v.migratePinPermission(e)), r && (await v.migrateSlowmodePermission(e));
        },
    },
    N = v;
