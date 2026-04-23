"use strict";
n.d(t, { A: () => R });
var i = n(110259),
    r = n(765178),
    s = n(636537),
    a = n(228366),
    o = n(398590),
    l = n(626584),
    d = n(646269),
    _ = n(568185),
    u = n(529942),
    c = n(164956),
    E = n(857071),
    h = n(976860),
    m = n(138298),
    f = n(495544),
    g = n(696451),
    p = n(71393),
    A = n(499785),
    I = n(555337),
    T = n(652215),
    S = n(985018);
let N = new l.A("GuildSettingsActionCreators"),
    C = {
        init(e, t, n, i) {
            a.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: i, location: n });
        },
        async open(e, t, i, r) {
            await Promise.all([
                n.e("49681"),
                n.e("96382"),
                n.e("34786"),
                n.e("20044"),
                n.e("24170"),
                n.e("28136"),
                n.e("44575"),
                n.e("97278"),
                n.e("8555"),
                n.e("49328"),
                n.e("34268"),
                n.e("69295"),
                n.e("82486"),
                n.e("98765"),
                n.e("44236"),
                n.e("97386"),
                n.e("92414"),
                n.e("65437"),
                n.e("84812"),
                n.e("92803"),
                n.e("17637"),
                n.e("43765"),
                n.e("25979"),
                n.e("77602"),
                n.e("33297"),
                n.e("23297"),
                n.e("95752"),
                n.e("92754"),
                n.e("68587"),
                n.e("51440"),
                n.e("62092"),
                n.e("22547"),
                n.e("86546"),
                n.e("15373"),
                n.e("49319"),
                n.e("96045"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("35614"),
                n.e("22191"),
                n.e("30501"),
                n.e("25961"),
                n.e("2736"),
                n.e("93764"),
                n.e("65848"),
                n.e("13848"),
                n.e("47810"),
                n.e("46291"),
                n.e("72564"),
                n.e("41068"),
                n.e("32347"),
                n.e("8458"),
                n.e("67925"),
                n.e("61763"),
                n.e("15666"),
                n.e("11810"),
                n.e("8018"),
                n.e("95765"),
                n.e("51299"),
                n.e("49862"),
                n.e("51873"),
                n.e("2806"),
                n.e("54792"),
                n.e("60467"),
                n.e("17965"),
                n.e("43435"),
            ]).then(n.bind(n, 422559)),
                p.A.getGuild(e)?.features.has(T.GuildFeatures.COMMUNITY) &&
                    (t === T.BEX.GUILD_AUTOMOD && ((t = T.BEX.SAFETY), (r = T.nd0.SAFETY_AUTOMOD)),
                    t === T.BEX.MEMBER_VERIFICATION && ((t = T.BEX.SAFETY), (r = T.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                C.init(e, t, i, r),
                m.A.closeGuildSidebar(e),
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
                (p.A.getGuild(n)?.features.has(T.GuildFeatures.COMMUNITY) &&
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
                    a.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }), _.A.checkGuildTemplateDirty(e);
                },
                (e) => a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
            );
        },
        cancelChanges(e) {
            a.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n, ...i } = e,
                r = { ...i };
            null != n && (r.profile = { ...(r.profile ?? {}), ...n }),
                null != I.A.getGuildId() && null != t && (r.safetyAlertsChannelId = t),
                a.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...r });
        },
        updateGuildProfile(e, t) {
            a.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
        },
        saveGuild(e, t) {
            let {
                    name: n,
                    description: i,
                    icon: r,
                    splash: o,
                    banner: l,
                    homeHeader: u,
                    afkChannelId: c,
                    afkTimeout: E,
                    systemChannelId: h,
                    verificationLevel: m,
                    defaultMessageNotifications: f,
                    explicitContentFilter: g,
                    features: p,
                    systemChannelFlags: A,
                    preferredLocale: I,
                    rulesChannelId: S,
                    safetyAlertsChannelId: C,
                    ownerConfiguredContentLevel: R,
                    discoverySplash: O,
                    publicUpdatesChannelId: y,
                    premiumProgressBarEnabled: v,
                    profile: D,
                    moderatorReportingEnabled: L,
                    officialMessageColor: b,
                    verificationRoleId: w,
                } = t,
                P = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                k = {
                    name: n,
                    description: i,
                    icon: r,
                    splash: o,
                    banner: l,
                    home_header: u,
                    features: p,
                    preferred_locale: I,
                    afk_channel_id: c,
                    afk_timeout: E,
                    system_channel_id: h,
                    verification_level: m,
                    default_message_notifications: f,
                    explicit_content_filter: g,
                    system_channel_flags: A,
                    rules_channel_id: S,
                    owner_configured_content_level: R,
                    discovery_splash: O,
                    public_updates_channel_id: y,
                    safety_alerts_channel_id: C,
                    ...(null != v ? { premium_progress_bar_enabled: v } : null),
                    profile: null != D ? (0, d.N)(D) : D,
                    moderator_reporting_enabled: L,
                    official_message_color: b,
                    verification_role_id: w,
                };
            return (
                a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                s.Bo.patch({
                    url: T.Rsh.GUILD(e),
                    query: { for_discovery: P.isForDiscovery },
                    body: k,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: t.body }),
                            _.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (a.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
                            N.error("Failed to save guild settings", { errors: e.body }),
                            P.throwErr)
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
            }).then((t) => (_.A.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return A.A.patch({
                url: T.Rsh.GUILD(e),
                body: { owner_id: t, code: r },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
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
                    event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: { guild_id: e, is_resend: t },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            s.Bo.post({ url: T.Rsh.GUILD_DELETE(e), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                C.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = E.A.isLurking(e);
            await s.Bo.del({
                url: T.Rsh.GUILD_LEAVE(e),
                body: { lurking: n || g.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                r.O.announce(S.intl.string(S.t["7iPyVW"]));
            }),
                C.close(),
                t && n && (0, h.pX)(T.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, i, r) {
            c.A.isFullServerPreview(e) && t === f.default.getId()
                ? (0, u.ID)(e, n)
                : (await s.Bo.patch({
                      url: T.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: n },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  i.forEach((n) => a.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: n, userId: t })),
                  r.forEach((n) =>
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
        updateIntegration: (e, t, n, i, r) =>
            s.Bo.patch({
                url: T.Rsh.GUILD_INTEGRATION(e, t),
                body: { expire_behavior: n, expire_grace_period: i, enable_emoticons: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
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
            let { migratePin: n, migrateSlowmode: i } = t;
            n && (await C.migratePinPermission(e)), i && (await C.migrateSlowmodePermission(e));
        },
    },
    R = C;
