r.d(t, { A: () => f });
var n = r(110259),
    l = r(765178),
    i = r(562465),
    o = r(73153),
    E = r(398590),
    s = r(626584),
    a = r(646269),
    u = r(568185),
    _ = r(529942),
    I = r(164956),
    d = r(857071),
    T = r(976860),
    c = r(138298),
    S = r(961350),
    h = r(696451),
    D = r(71393),
    G = r(499785),
    A = r(555337),
    L = r(652215),
    p = r(985018);
let U = new s.A("GuildSettingsActionCreators"),
    N = {
        init(e, t, r, n) {
            o.h.dispatch({ type: "GUILD_SETTINGS_INIT", guildId: e, section: t, subsection: n, location: r });
        },
        async open(e, t, n, l) {
            await Promise.all([
                r.e("24199"),
                r.e("57036"),
                r.e("70474"),
                r.e("61943"),
                r.e("49681"),
                r.e("96382"),
                r.e("10614"),
                r.e("20044"),
                r.e("76640"),
                r.e("7175"),
                r.e("55202"),
                r.e("23353"),
                r.e("73667"),
                r.e("11250"),
                r.e("14138"),
                r.e("3442"),
                r.e("70994"),
                r.e("17239"),
                r.e("24267"),
                r.e("51793"),
                r.e("81645"),
                r.e("36682"),
                r.e("63070"),
                r.e("25370"),
                r.e("28367"),
                r.e("96313"),
                r.e("27411"),
                r.e("49318"),
                r.e("92493"),
                r.e("12721"),
                r.e("58283"),
                r.e("17601"),
                r.e("8087"),
                r.e("55057"),
                r.e("60471"),
                r.e("42257"),
                r.e("48563"),
                r.e("27355"),
                r.e("67876"),
                r.e("28136"),
                r.e("25412"),
                r.e("97278"),
                r.e("374"),
                r.e("8555"),
                r.e("82486"),
                r.e("40396"),
                r.e("28936"),
                r.e("64243"),
                r.e("43600"),
                r.e("97386"),
                r.e("47742"),
                r.e("48330"),
                r.e("77602"),
                r.e("92414"),
                r.e("94857"),
                r.e("16419"),
                r.e("68587"),
                r.e("82561"),
                r.e("45253"),
                r.e("86546"),
                r.e("37372"),
                r.e("15373"),
                r.e("95752"),
                r.e("9648"),
                r.e("63379"),
                r.e("56026"),
                r.e("16301"),
                r.e("22191"),
                r.e("56403"),
                r.e("13334"),
                r.e("25961"),
                r.e("2736"),
                r.e("84560"),
                r.e("13848"),
                r.e("47810"),
                r.e("93764"),
                r.e("31667"),
                r.e("54828"),
                r.e("94683"),
                r.e("50796"),
                r.e("8458"),
                r.e("26730"),
                r.e("18496"),
                r.e("94253"),
                r.e("11810"),
                r.e("77302"),
                r.e("72756"),
                r.e("21908"),
                r.e("79668"),
                r.e("82666"),
                r.e("49862"),
                r.e("30131"),
                r.e("17965"),
                r.e("68454"),
                r.e("53817"),
            ]).then(r.bind(r, 422559)),
                D.A.getGuild(e)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (t === L.BEX.GUILD_AUTOMOD && ((t = L.BEX.SAFETY), (l = L.nd0.SAFETY_AUTOMOD)),
                    t === L.BEX.MEMBER_VERIFICATION && ((t = L.BEX.SAFETY), (l = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                N.init(e, t, n, l),
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
            let r = A.A.getGuildId();
            null != r &&
                (D.A.getGuild(r)?.features.has(L.GuildFeatures.COMMUNITY) &&
                    (e === L.BEX.GUILD_AUTOMOD && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_AUTOMOD)),
                    e === L.BEX.MEMBER_VERIFICATION && ((e = L.BEX.SAFETY), (t = L.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                o.h.dispatch({ type: "GUILD_SETTINGS_SET_SECTION", section: e, subsection: t }));
        },
        setSearchQuery(e) {
            o.h.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery: e });
        },
        selectRole: (e, t) => o.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: e, searchQuery: t }),
        updateEmbed: (e, t, r) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_WIDGET(e),
                body: { enabled: t, channel_id: r },
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
            let { guildId: t, level: r } = e;
            return i.Bo.post({
                url: L.Rsh.GUILD_MFA(t),
                body: { level: r },
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
            let { safetyAlertsChannelId: t, profile: r, ...n } = e,
                l = { ...n };
            null != r && (l.profile = { ...(l.profile ?? {}), ...r }),
                null != A.A.getGuildId() && null != t && (l.safetyAlertsChannelId = t),
                o.h.dispatch({ type: "GUILD_SETTINGS_UPDATE", ...l });
        },
        updateGuildProfile(e, t) {
            o.h.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId: e, ...t });
        },
        saveGuild(e, t) {
            let {
                    name: r,
                    description: n,
                    icon: l,
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
                    systemChannelFlags: G,
                    preferredLocale: A,
                    rulesChannelId: p,
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
                    name: r,
                    description: n,
                    icon: l,
                    splash: E,
                    banner: s,
                    home_header: _,
                    features: D,
                    preferred_locale: A,
                    afk_channel_id: I,
                    afk_timeout: d,
                    system_channel_id: T,
                    verification_level: c,
                    default_message_notifications: S,
                    explicit_content_filter: h,
                    system_channel_flags: G,
                    rules_channel_id: p,
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
                o.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                i.Bo.patch({
                    url: L.Rsh.GUILD(e),
                    query: { for_discovery: P.isForDiscovery },
                    body: M,
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
                            U.error("Failed to save guild settings", { errors: e.body }),
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
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return G.A.patch({
                url: L.Rsh.GUILD(e),
                body: { owner_id: t, code: l },
                oldFormErrors: !0,
                trackedActionData: {
                    event: n.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                    properties: { guild_id: e, verification_type: r },
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
                r = d.A.isLurking(e);
            await i.Bo.del({
                url: L.Rsh.GUILD_LEAVE(e),
                body: { lurking: r || h.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                l.O.announce(p.intl.string(p.t["7iPyVW"]));
            }),
                N.close(),
                t && r && (0, T.pX)(L.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, r, n, l) {
            I.A.isFullServerPreview(e) && t === S.default.getId()
                ? (0, _.ID)(e, r)
                : (await i.Bo.patch({
                      url: L.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: r },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  n.forEach((r) => o.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: r, userId: t })),
                  l.forEach((r) =>
                      o.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: r, userId: t }),
                  ));
        },
        bulkAddMemberRoles: (e, t, r) =>
            i.Bo.patch({ url: L.Rsh.GUILD_ROLE_MEMBERS(e, t), body: { member_ids: r }, rejectWithError: !1 }).then(
                (r) => {
                    o.h.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: e, roleId: t, added: r.body });
                },
            ),
        enableIntegration: (e, t, r) =>
            i.Bo.post({
                url: L.Rsh.GUILD_INTEGRATIONS(e),
                body: { type: t, id: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            i.Bo.del({ url: L.Rsh.GUILD_INTEGRATION(e, t), oldFormErrors: !0, rejectWithError: !1 }),
        updateIntegration: (e, t, r, n, l) =>
            i.Bo.patch({
                url: L.Rsh.GUILD_INTEGRATION(e, t),
                body: { expire_behavior: r, expire_grace_period: n, enable_emoticons: l },
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
            let { migratePin: r, migrateSlowmode: n } = t;
            r && (await N.migratePinPermission(e)), n && (await N.migrateSlowmodePermission(e));
        },
    },
    f = N;
