n.d(t, { A: () => f });
var r = n(110259),
    l = n(765178),
    i = n(636537),
    E = n(228366),
    o = n(398590),
    s = n(626584),
    a = n(646269),
    u = n(568185),
    _ = n(529942),
    I = n(164956),
    d = n(857071),
    T = n(976860),
    S = n(138298),
    c = n(495544),
    h = n(696451),
    D = n(71393),
    G = n(499785),
    A = n(555337),
    L = n(652215),
    U = n(985018);
let p = new s.A("GuildSettingsActionCreators"),
    N = {
        init(e, t, n, r) {
            E.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: r, location: n });
        },
        async open(e, t, r, l) {
            await Promise.all([
                n.e("32292"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("49681"),
                n.e("96382"),
                n.e("34786"),
                n.e("20044"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("87963"),
                n.e("37266"),
                n.e("55057"),
                n.e("76021"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("80527"),
                n.e("88342"),
                n.e("58710"),
                n.e("8555"),
                n.e("31825"),
                n.e("23353"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("40142"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("66950"),
                n.e("60161"),
                n.e("38229"),
                n.e("20861"),
                n.e("36682"),
                n.e("98765"),
                n.e("45723"),
                n.e("65437"),
                n.e("56871"),
                n.e("34983"),
                n.e("69601"),
                n.e("47511"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("53142"),
                n.e("51444"),
                n.e("62290"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("48900"),
                n.e("31538"),
                n.e("21453"),
                n.e("80973"),
                n.e("98954"),
                n.e("82731"),
                n.e("20735"),
                n.e("227"),
                n.e("27846"),
                n.e("8306"),
                n.e("10567"),
                n.e("62718"),
                n.e("43436"),
                n.e("24170"),
                n.e("22802"),
                n.e("54865"),
                n.e("29594"),
                n.e("8018"),
                n.e("7637"),
                n.e("28136"),
                n.e("3025"),
                n.e("49862"),
                n.e("44575"),
                n.e("80093"),
                n.e("22547"),
                n.e("34268"),
                n.e("60989"),
                n.e("82486"),
                n.e("77602"),
                n.e("68587"),
                n.e("62092"),
                n.e("3441"),
                n.e("86546"),
                n.e("15373"),
                n.e("98970"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("99789"),
                n.e("46411"),
                n.e("25961"),
                n.e("44935"),
                n.e("26663"),
                n.e("91139"),
                n.e("13848"),
                n.e("47568"),
                n.e("91749"),
                n.e("29491"),
                n.e("62890"),
                n.e("46291"),
                n.e("41068"),
                n.e("26297"),
                n.e("32347"),
                n.e("8458"),
                n.e("15666"),
                n.e("22646"),
                n.e("11810"),
                n.e("95765"),
                n.e("31742"),
                n.e("56686"),
                n.e("40962"),
                n.e("99346"),
            ]).then(n.bind(n, 422559)),
                D.A.getGuild(e)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (t === L.BEX.GUILD_AUTOMOD && ((t = L.BEX.SAFETY), (l = L.nd0.SAFETY_AUTOMOD)),
                    t === L.BEX.MEMBER_VERIFICATION && ((t = L.BEX.SAFETY), (l = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                N.init(e, t, r, l),
                S.A.closeGuildSidebar(e),
                (0, o.id)(L.zgK.GUILD_SETTINGS);
        },
        close() {
            E.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            E.h.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state: e });
        },
        setSection(e, t) {
            let n = A.A.getGuildId();
            null != n &&
                (D.A.getGuild(n)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (e === L.BEX.GUILD_AUTOMOD && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_AUTOMOD)),
                    e === L.BEX.MEMBER_VERIFICATION && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                E.h.dispatch({ type: "GUILD_SETTINGS_SET_SECTION", section: e, subsection: t }));
        },
        setSearchQuery(e) {
            E.h.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery: e });
        },
        selectRole: (e, t) => E.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: e, searchQuery: t }),
        updateEmbed: (e, t, n) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_WIDGET(e),
                body: { enabled: t, channel_id: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((t) => {
                E.h.dispatch({
                    type: "GUILD_SETTINGS_SET_WIDGET",
                    guildId: e,
                    enabled: t.body.enabled,
                    channelId: t.body.channel_id,
                });
            }),
        updateMFALevel(e) {
            let { guildId: t, level: n } = e;
            return i.Bo.post({
                url: L.Rsh.GUILD_MFA(t),
                body: { level: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => E.h.dispatch({ type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: e.body.level }));
        },
        updateIcon(e, t) {
            i.Bo.patch({ url: L.Rsh.GUILD(e), body: { icon: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
                () => {
                    E.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon: t }), u.A.checkGuildTemplateDirty(e);
                },
                (e) => E.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
            );
        },
        cancelChanges(e) {
            E.h.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: e });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n, ...r } = e,
                l = { ...r };
            null != n && (l.profile = { ...(l.profile ?? {}), ...n }),
                null != A.A.getGuildId() && null != t && (l.safetyAlertsChannelId = t),
                E.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...l });
        },
        updateGuildProfile(e, t) {
            E.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
        },
        saveGuild(e, t) {
            let {
                    name: n,
                    description: r,
                    icon: l,
                    splash: o,
                    banner: s,
                    homeHeader: _,
                    afkChannelId: I,
                    afkTimeout: d,
                    systemChannelId: T,
                    verificationLevel: S,
                    defaultMessageNotifications: c,
                    explicitContentFilter: h,
                    features: D,
                    systemChannelFlags: G,
                    preferredLocale: A,
                    rulesChannelId: U,
                    safetyAlertsChannelId: N,
                    ownerConfiguredContentLevel: f,
                    discoverySplash: R,
                    publicUpdatesChannelId: C,
                    premiumProgressBarEnabled: g,
                    profile: y,
                    moderatorReportingEnabled: O,
                    officialMessageColor: m,
                    verificationRoleId: F,
                } = t,
                P = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                M = {
                    name: n,
                    description: r,
                    icon: l,
                    splash: o,
                    banner: s,
                    home_header: _,
                    features: D,
                    preferred_locale: A,
                    afk_channel_id: I,
                    afk_timeout: d,
                    system_channel_id: T,
                    verification_level: S,
                    default_message_notifications: c,
                    explicit_content_filter: h,
                    system_channel_flags: G,
                    rules_channel_id: U,
                    owner_configured_content_level: f,
                    discovery_splash: R,
                    public_updates_channel_id: C,
                    safety_alerts_channel_id: N,
                    ...(null != g ? { premium_progress_bar_enabled: g } : null),
                    profile: null != y ? (0, a.N)(y) : y,
                    moderator_reporting_enabled: O,
                    official_message_color: m,
                    verification_role_id: F,
                };
            return (
                E.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                i.Bo.patch({
                    url: L.Rsh.GUILD(e),
                    query: { for_discovery: P.isForDiscovery },
                    body: M,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        E.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: t.body }),
                            u.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (E.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: e.body }),
                            p.error("Failed to save guild settings", { errors: e.body }),
                            P.throwErr)
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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return G.A.patch({
                url: L.Rsh.GUILD(e),
                body: { owner_id: t, code: l },
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
            return G.A.put({
                url: L.Rsh.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
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
                n = d.A.isLurking(e);
            await i.Bo.del({
                url: L.Rsh.GUILD_LEAVE(e),
                body: { lurking: n || h.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                l.O.announce(U.intl.string(U.t["7iPyVW"]));
            }),
                N.close(),
                t && n && (0, T.pX)(L.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, l) {
            I.A.isFullServerPreview(e) && t === c.default.getId()
                ? (0, _.ID)(e, n)
                : (await i.Bo.patch({
                      url: L.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: n },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  r.forEach((n) => E.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: n, userId: t })),
                  l.forEach((n) =>
                      E.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: n, userId: t }),
                  ));
        },
        bulkAddMemberRoles: (e, t, n) =>
            i.Bo.patch({ url: L.Rsh.GUILD_ROLE_MEMBERS(e, t), body: { member_ids: n }, rejectWithError: !1 }).then(
                (n) => {
                    E.h.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: e, roleId: t, added: n.body });
                },
            ),
        enableIntegration: (e, t, n) =>
            i.Bo.post({
                url: L.Rsh.GUILD_INTEGRATIONS(e),
                body: { type: t, id: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            i.Bo.del({ url: L.Rsh.GUILD_INTEGRATION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
        updateIntegration: (e, t, n, r, l) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_INTEGRATION(e, t),
                body: { expire_behavior: n, expire_grace_period: r, enable_emoticons: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        syncIntegration(e, t) {
            i.Bo.post({ url: L.Rsh.GUILD_INTEGRATION_SYNC(e, t), oldFormErrors: !0, rejectWithError: !1 });
        },
        async migratePinPermission(e) {
            await i.Bo.post({ url: L.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e), rejectWithError: !0 }).then(() =>
                E.h.dispatch({ type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migrateSlowmodePermission(e) {
            await i.Bo.post({ url: L.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e), rejectWithError: !0 }).then(() =>
                E.h.dispatch({ type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId: e }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await N.migratePinPermission(e)), r && (await N.migrateSlowmodePermission(e));
        },
    },
    f = N;
