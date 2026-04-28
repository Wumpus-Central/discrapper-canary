l.d(t, { A: () => f });
var n = l(110259),
    r = l(765178),
    i = l(636537),
    o = l(228366),
    E = l(398590),
    s = l(626584),
    a = l(646269),
    u = l(568185),
    _ = l(529942),
    I = l(164956),
    d = l(857071),
    T = l(976860),
    c = l(138298),
    S = l(495544),
    h = l(696451),
    D = l(71393),
    A = l(499785),
    G = l(555337),
    L = l(652215),
    U = l(985018);
let p = new s.A("GuildSettingsActionCreators"),
    N = {
        init(e, t, l, n) {
            o.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: n, location: l });
        },
        async open(e, t, n, r) {
            await Promise.all([
                l.e("32292"),
                l.e("24199"),
                l.e("57036"),
                l.e("88394"),
                l.e("49681"),
                l.e("96382"),
                l.e("34786"),
                l.e("20044"),
                l.e("28367"),
                l.e("45174"),
                l.e("85519"),
                l.e("11871"),
                l.e("37266"),
                l.e("55057"),
                l.e("14976"),
                l.e("63229"),
                l.e("31988"),
                l.e("55343"),
                l.e("80527"),
                l.e("21909"),
                l.e("31825"),
                l.e("23353"),
                l.e("7175"),
                l.e("37249"),
                l.e("88342"),
                l.e("14138"),
                l.e("8971"),
                l.e("77404"),
                l.e("1040"),
                l.e("64615"),
                l.e("17239"),
                l.e("7454"),
                l.e("8555"),
                l.e("20861"),
                l.e("36682"),
                l.e("45723"),
                l.e("56871"),
                l.e("69601"),
                l.e("63191"),
                l.e("40142"),
                l.e("60161"),
                l.e("51444"),
                l.e("62290"),
                l.e("98765"),
                l.e("65437"),
                l.e("34983"),
                l.e("80973"),
                l.e("92414"),
                l.e("95208"),
                l.e("72401"),
                l.e("47417"),
                l.e("19558"),
                l.e("58946"),
                l.e("76390"),
                l.e("93312"),
                l.e("95752"),
                l.e("67339"),
                l.e("48900"),
                l.e("31538"),
                l.e("73930"),
                l.e("98954"),
                l.e("20735"),
                l.e("227"),
                l.e("27846"),
                l.e("8306"),
                l.e("10567"),
                l.e("62718"),
                l.e("12542"),
                l.e("24170"),
                l.e("84317"),
                l.e("93858"),
                l.e("29594"),
                l.e("8018"),
                l.e("7637"),
                l.e("28136"),
                l.e("3025"),
                l.e("49862"),
                l.e("20382"),
                l.e("80093"),
                l.e("22547"),
                l.e("34268"),
                l.e("60989"),
                l.e("82486"),
                l.e("77602"),
                l.e("68587"),
                l.e("62092"),
                l.e("96963"),
                l.e("86546"),
                l.e("15373"),
                l.e("98970"),
                l.e("42749"),
                l.e("56026"),
                l.e("16301"),
                l.e("22191"),
                l.e("46411"),
                l.e("72474"),
                l.e("25961"),
                l.e("44935"),
                l.e("26663"),
                l.e("91139"),
                l.e("13848"),
                l.e("47568"),
                l.e("8021"),
                l.e("29491"),
                l.e("62890"),
                l.e("46291"),
                l.e("41068"),
                l.e("26297"),
                l.e("32347"),
                l.e("8458"),
                l.e("90779"),
                l.e("15666"),
                l.e("11810"),
                l.e("95765"),
                l.e("31742"),
                l.e("56686"),
                l.e("60792"),
            ]).then(l.bind(l, 422559)),
                D.A.getGuild(e)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (t === L.BEX.GUILD_AUTOMOD && ((t = L.BEX.SAFETY), (r = L.nd0.SAFETY_AUTOMOD)),
                    t === L.BEX.MEMBER_VERIFICATION && ((t = L.BEX.SAFETY), (r = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                N.init(e, t, n, r),
                c.A.closeGuildSidebar(e),
                (0, E.id)(L.zgK.GUILD_SETTINGS);
        },
        close() {
            o.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state: e });
        },
        setSection(e, t) {
            let l = G.A.getGuildId();
            null != l &&
                (D.A.getGuild(l)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (e === L.BEX.GUILD_AUTOMOD && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_AUTOMOD)),
                    e === L.BEX.MEMBER_VERIFICATION && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                o.h.dispatch({ type: "GUILD_SETTINGS_SET_SECTION", section: e, subsection: t }));
        },
        setSearchQuery(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery: e });
        },
        selectRole: (e, t) => o.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: e, searchQuery: t }),
        updateEmbed: (e, t, l) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_WIDGET(e),
                body: { enabled: t, channel_id: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((t) => {
                o.h.dispatch({
                    type: "GUILD_SETTINGS_SET_WIDGET",
                    guildId: e,
                    enabled: t.body.enabled,
                    channelId: t.body.channel_id,
                });
            }),
        updateMFALevel(e) {
            let { guildId: t, level: l } = e;
            return i.Bo.post({
                url: L.Rsh.GUILD_MFA(t),
                body: { level: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => o.h.dispatch({ type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: e.body.level }));
        },
        updateIcon(e, t) {
            i.Bo.patch({ url: L.Rsh.GUILD(e), body: { icon: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
                () => {
                    o.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }), u.A.checkGuildTemplateDirty(e);
                },
                (e) => o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
            );
        },
        cancelChanges(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: l, ...n } = e,
                r = { ...n };
            null != l && (r.profile = { ...(r.profile ?? {}), ...l }),
                null != G.A.getGuildId() && null != t && (r.safetyAlertsChannelId = t),
                o.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...r });
        },
        updateGuildProfile(e, t) {
            o.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
        },
        saveGuild(e, t) {
            let {
                    name: l,
                    description: n,
                    icon: r,
                    splash: E,
                    banner: s,
                    homeHeader: _,
                    afkChannelId: I,
                    afkTimeout: d,
                    systemChannelId: T,
                    verificationLevel: c,
                    defaultMessageNotifications: S,
                    explicitContentFilter: h,
                    features: D,
                    systemChannelFlags: A,
                    preferredLocale: G,
                    rulesChannelId: U,
                    safetyAlertsChannelId: N,
                    ownerConfiguredContentLevel: f,
                    discoverySplash: C,
                    publicUpdatesChannelId: R,
                    premiumProgressBarEnabled: g,
                    profile: y,
                    moderatorReportingEnabled: O,
                    officialMessageColor: m,
                    verificationRoleId: F,
                } = t,
                M = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                P = {
                    name: l,
                    description: n,
                    icon: r,
                    splash: E,
                    banner: s,
                    home_header: _,
                    features: D,
                    preferred_locale: G,
                    afk_channel_id: I,
                    afk_timeout: d,
                    system_channel_id: T,
                    verification_level: c,
                    default_message_notifications: S,
                    explicit_content_filter: h,
                    system_channel_flags: A,
                    rules_channel_id: U,
                    owner_configured_content_level: f,
                    discovery_splash: C,
                    public_updates_channel_id: R,
                    safety_alerts_channel_id: N,
                    ...(null != g ? { premium_progress_bar_enabled: g } : null),
                    profile: null != y ? (0, a.N)(y) : y,
                    moderator_reporting_enabled: O,
                    official_message_color: m,
                    verification_role_id: F,
                };
            return (
                o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                i.Bo.patch({
                    url: L.Rsh.GUILD(e),
                    query: { for_discovery: M.isForDiscovery },
                    body: P,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: t.body }),
                            u.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
                            p.error("Failed to save guild settings", { errors: e.body }),
                            M.throwErr)
                        )
                            throw e.body;
                    },
                )
            );
        },
        updateGuildModeration: (e, t) =>
            i.Bo.patch({
                url: L.Rsh.GUILD(e),
                body: { verification_level: t.verificationLevel, explicit_content_filter: t.explicitContentFilter },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => (u.A.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return A.A.patch({
                url: L.Rsh.GUILD(e),
                body: { owner_id: t, code: r },
                oldFormErrors: !0,
                trackedActionData: {
                    event: n.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                    properties: { guild_id: e, verification_type: l },
                },
                rejectWithError: !1,
            });
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return A.A.put({
                url: L.Rsh.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: n.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: { guild_id: e, is_resend: t },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            i.Bo.post({ url: L.Rsh.GUILD_DELETE(e), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                N.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = d.A.isLurking(e);
            await i.Bo.del({
                url: L.Rsh.GUILD_LEAVE(e),
                body: { lurking: l || h.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                r.O.announce(U.intl.string(U.t["7iPyVW"]));
            }),
                N.close(),
                t && l && (0, T.pX)(L.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, l, n, r) {
            I.A.isFullServerPreview(e) && t === S.default.getId()
                ? (0, _.ID)(e, l)
                : (await i.Bo.patch({
                      url: L.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: l },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  n.forEach((l) => o.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: l, userId: t })),
                  r.forEach((l) =>
                      o.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: l, userId: t }),
                  ));
        },
        bulkAddMemberRoles: (e, t, l) =>
            i.Bo.patch({ url: L.Rsh.GUILD_ROLE_MEMBERS(e, t), body: { member_ids: l }, rejectWithError: !1 }).then(
                (l) => {
                    o.h.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: e, roleId: t, added: l.body });
                },
            ),
        enableIntegration: (e, t, l) =>
            i.Bo.post({
                url: L.Rsh.GUILD_INTEGRATIONS(e),
                body: { type: t, id: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            i.Bo.del({ url: L.Rsh.GUILD_INTEGRATION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
        updateIntegration: (e, t, l, n, r) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_INTEGRATION(e, t),
                body: { expire_behavior: l, expire_grace_period: n, enable_emoticons: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        syncIntegration(e, t) {
            i.Bo.post({ url: L.Rsh.GUILD_INTEGRATION_SYNC(e, t), oldFormErrors: !0, rejectWithError: !1 });
        },
        async migratePinPermission(e) {
            await i.Bo.post({ url: L.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e), rejectWithError: !0 }).then(() =>
                o.h.dispatch({ type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migrateSlowmodePermission(e) {
            await i.Bo.post({ url: L.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e), rejectWithError: !0 }).then(() =>
                o.h.dispatch({ type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: l, migrateSlowmode: n } = t;
            l && (await N.migratePinPermission(e)), n && (await N.migrateSlowmodePermission(e));
        },
    },
    f = N;
