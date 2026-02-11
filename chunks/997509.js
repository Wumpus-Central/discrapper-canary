"use strict";
n.d(t, { A: () => b });
var r = n(110259),
    i = n(349941),
    a = n(562465),
    s = n(73153),
    o = n(398590),
    l = n(626584),
    u = n(646269),
    c = n(568185),
    d = n(529942),
    _ = n(164956),
    f = n(857071),
    h = n(976860),
    p = n(138298),
    g = n(961350),
    E = n(696451),
    A = n(71393),
    I = n(499785),
    T = n(555337),
    y = n(652215),
    S = n(985018);
let v = new l.A("GuildSettingsActionCreators"),
    C = {
        init(e, t, n, r) {
            s.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: r, location: n });
        },
        async open(e, t, r, i) {
            await Promise.all([
                n.e("10614"),
                n.e("49681"),
                n.e("3795"),
                n.e("43600"),
                n.e("28936"),
                n.e("68587"),
                n.e("40396"),
                n.e("48330"),
                n.e("13088"),
                n.e("92414"),
                n.e("94857"),
                n.e("28136"),
                n.e("7034"),
                n.e("63379"),
                n.e("56026"),
                n.e("49559"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("37372"),
                n.e("8018"),
                n.e("3183"),
                n.e("9753"),
                n.e("21968"),
                n.e("35894"),
                n.e("67231"),
                n.e("50796"),
                n.e("24202"),
                n.e("8458"),
                n.e("11810"),
                n.e("39048"),
                n.e("69946"),
                n.e("17537"),
                n.e("49862"),
                n.e("33105"),
                n.e("34348"),
                n.e("36290"),
                n.e("59541"),
                n.e("43546"),
            ]).then(n.bind(n, 422559)),
                A.A.getGuild(e)?.features.has(y.GuildFeatures.COMMUNITY) &&
                    (t === y.BEX.GUILD_AUTOMOD && ((t = y.BEX.SAFETY), (i = y.nd0.SAFETY_AUTOMOD)),
                    t === y.BEX.MEMBER_VERIFICATION && ((t = y.BEX.SAFETY), (i = y.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                C.init(e, t, r, i),
                p.A.closeGuildSidebar(e),
                (0, o.id)(y.zgK.GUILD_SETTINGS);
        },
        close() {
            s.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            s.h.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state: e });
        },
        setSection(e, t) {
            let n = T.A.getGuildId();
            null != n &&
                (A.A.getGuild(n)?.features.has(y.GuildFeatures.COMMUNITY) &&
                    (e === y.BEX.GUILD_AUTOMOD && ((e = y.BEX.SAFETY), (t = y.nd0.SAFETY_AUTOMOD)),
                    e === y.BEX.MEMBER_VERIFICATION && ((e = y.BEX.SAFETY), (t = y.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                s.h.dispatch({ type: "GUILD_SETTINGS_SET_SECTION", section: e, subsection: t }));
        },
        setSearchQuery(e) {
            s.h.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery: e });
        },
        selectRole: (e, t) => s.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: e, searchQuery: t }),
        updateEmbed: (e, t, n) =>
            a.Bo.patch({
                url: y.Rsh.GUILD_WIDGET(e),
                body: { enabled: t, channel_id: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((t) => {
                s.h.dispatch({
                    type: "GUILD_SETTINGS_SET_WIDGET",
                    guildId: e,
                    enabled: t.body.enabled,
                    channelId: t.body.channel_id,
                });
            }),
        updateMFALevel(e) {
            let { guildId: t, level: n } = e;
            return a.Bo.post({
                url: y.Rsh.GUILD_MFA(t),
                body: { level: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => s.h.dispatch({ type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: e.body.level }));
        },
        updateIcon(e, t) {
            a.Bo.patch({ url: y.Rsh.GUILD(e), body: { icon: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
                () => {
                    s.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }), c.A.checkGuildTemplateDirty(e);
                },
                (e) => s.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
            );
        },
        cancelChanges(e) {
            s.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n, ...r } = e,
                i = { ...r };
            null != n && (i.profile = { ...(i.profile ?? {}), ...n }),
                null != T.A.getGuildId() && null != t && (i.safetyAlertsChannelId = t),
                s.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...i });
        },
        updateGuildProfile(e, t) {
            s.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
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
                    systemChannelId: h,
                    verificationLevel: p,
                    defaultMessageNotifications: g,
                    explicitContentFilter: E,
                    features: A,
                    systemChannelFlags: I,
                    preferredLocale: T,
                    rulesChannelId: S,
                    safetyAlertsChannelId: C,
                    ownerConfiguredContentLevel: b,
                    discoverySplash: N,
                    publicUpdatesChannelId: R,
                    premiumProgressBarEnabled: O,
                    profile: D,
                    moderatorReportingEnabled: L,
                } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                x = {
                    name: n,
                    description: r,
                    icon: i,
                    splash: o,
                    banner: l,
                    home_header: d,
                    features: A,
                    preferred_locale: T,
                    afk_channel_id: _,
                    afk_timeout: f,
                    system_channel_id: h,
                    verification_level: p,
                    default_message_notifications: g,
                    explicit_content_filter: E,
                    system_channel_flags: I,
                    rules_channel_id: S,
                    owner_configured_content_level: b,
                    discovery_splash: N,
                    public_updates_channel_id: R,
                    safety_alerts_channel_id: C,
                    ...(null != O ? { premium_progress_bar_enabled: O } : null),
                    profile: null != D ? (0, u.N)(D) : D,
                    moderator_reporting_enabled: L,
                };
            return (
                s.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                a.Bo.patch({
                    url: y.Rsh.GUILD(e),
                    query: { for_discovery: w.isForDiscovery },
                    body: x,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        s.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: t.body }),
                            c.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (s.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
                            v.error("Failed to save guild settings", { errors: e.body }),
                            w.throwErr)
                        )
                            throw e.body;
                    },
                )
            );
        },
        updateGuildModeration: (e, t) =>
            a.Bo.patch({
                url: y.Rsh.GUILD(e),
                body: { verification_level: t.verificationLevel, explicit_content_filter: t.explicitContentFilter },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => (c.A.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return I.A.patch({
                url: y.Rsh.GUILD(e),
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
            return I.A.put({
                url: y.Rsh.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: { guild_id: e, is_resend: t },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            a.Bo.post({ url: y.Rsh.GUILD_DELETE(e), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                C.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = f.A.isLurking(e);
            await a.Bo.del({
                url: y.Rsh.GUILD_LEAVE(e),
                body: { lurking: n || E.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                i.OR.announce(S.intl.string(S.t["7iPyVW"]));
            }),
                C.close(),
                t && n && (0, h.pX)(y.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, i) {
            _.A.isFullServerPreview(e) && t === g.default.getId()
                ? (0, d.ID)(e, n)
                : (await a.Bo.patch({
                      url: y.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: n },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  r.forEach((n) => s.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: n, userId: t })),
                  i.forEach((n) =>
                      s.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: n, userId: t }),
                  ));
        },
        bulkAddMemberRoles: (e, t, n) =>
            a.Bo.patch({ url: y.Rsh.GUILD_ROLE_MEMBERS(e, t), body: { member_ids: n }, rejectWithError: !1 }).then(
                (n) => {
                    s.h.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: e, roleId: t, added: n.body });
                },
            ),
        enableIntegration: (e, t, n) =>
            a.Bo.post({
                url: y.Rsh.GUILD_INTEGRATIONS(e),
                body: { type: t, id: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            a.Bo.del({ url: y.Rsh.GUILD_INTEGRATION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
        updateIntegration(e, t, n, r, i) {
            let s = { expire_behavior: n, expire_grace_period: r, enable_emoticons: i };
            return a.Bo.patch({ url: y.Rsh.GUILD_INTEGRATION(e, t), body: s, oldFormErrors: !0, rejectWithError: !1 });
        },
        syncIntegration(e, t) {
            a.Bo.post({ url: y.Rsh.GUILD_INTEGRATION_SYNC(e, t), oldFormErrors: !0, rejectWithError: !1 });
        },
        async migratePinPermission(e) {
            await a.Bo.post({ url: y.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e), rejectWithError: !0 }).then(() =>
                s.h.dispatch({ type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migrateSlowmodePermission(e) {
            await a.Bo.post({ url: y.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e), rejectWithError: !0 }).then(() =>
                s.h.dispatch({ type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await C.migratePinPermission(e)), r && (await C.migrateSlowmodePermission(e));
        },
    },
    b = C;
