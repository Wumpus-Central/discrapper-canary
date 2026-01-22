n.d(t, { A: () => P }), n(228524);
var r = n(110259),
    i = n(349941),
    a = n(562465),
    s = n(73153),
    o = n(398590),
    l = n(626584),
    c = n(646269),
    u = n(568185),
    d = n(529942),
    f = n(164956),
    p = n(857071),
    _ = n(976860),
    h = n(138298),
    m = n(961350),
    g = n(696451),
    E = n(71393),
    b = n(499785),
    y = n(555337),
    O = n(652215),
    A = n(985018);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = N(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let R = new l.A("GuildSettingsActionCreators"),
    w = {
        init(e, t, n, r) {
            s.h.dispatch({
                type: "GUILD_SETTINGS_INIT",
                guildId: e,
                section: t,
                subsection: r,
                location: n,
            });
        },
        async open(e, t, r, i) {
            var a;
            await Promise.all([
                n.e("10614"),
                n.e("49681"),
                n.e("68587"),
                n.e("43600"),
                n.e("28136"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("21968"),
                n.e("35894"),
                n.e("50796"),
                n.e("49862"),
                n.e("8458"),
                n.e("8018"),
                n.e("47841"),
                n.e("59541"),
                n.e("60989"),
                n.e("24202"),
                n.e("94503"),
                n.e("14360"),
                n.e("95864"),
            ]).then(n.bind(n, 422559)),
                (null == (a = E.A.getGuild(e)) ? void 0 : a.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (t === O.BEX.GUILD_AUTOMOD && ((t = O.BEX.SAFETY), (i = O.nd0.SAFETY_AUTOMOD)),
                    t === O.BEX.MEMBER_VERIFICATION && ((t = O.BEX.SAFETY), (i = O.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                w.init(e, t, r, i),
                h.A.closeGuildSidebar(e),
                (0, o.id)(O.zgK.GUILD_SETTINGS);
        },
        close() {
            s.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            s.h.dispatch({
                type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                state: e,
            });
        },
        setSection(e, t) {
            var n;
            let r = y.A.getGuildId();
            null != r &&
                ((null == (n = E.A.getGuild(r)) ? void 0 : n.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (e === O.BEX.GUILD_AUTOMOD && ((e = O.BEX.SAFETY), (t = O.nd0.SAFETY_AUTOMOD)),
                    e === O.BEX.MEMBER_VERIFICATION && ((e = O.BEX.SAFETY), (t = O.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                s.h.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t,
                }));
        },
        setSearchQuery(e) {
            s.h.dispatch({
                type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                searchQuery: e,
            });
        },
        selectRole: (e, t) =>
            s.h.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t,
            }),
        updateEmbed: (e, t, n) =>
            a.Bo.patch({
                url: O.Rsh.GUILD_WIDGET(e),
                body: {
                    enabled: t,
                    channel_id: n,
                },
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
                url: O.Rsh.GUILD_MFA(t),
                body: { level: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) =>
                s.h.dispatch({
                    type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                    level: e.body.level,
                }),
            );
        },
        updateIcon(e, t) {
            a.Bo.patch({
                url: O.Rsh.GUILD(e),
                body: { icon: t },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                () => {
                    s.h.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t,
                    }),
                        u.A.checkGuildTemplateDirty(e);
                },
                (e) =>
                    s.h.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
            );
        },
        cancelChanges(e) {
            s.h.dispatch({
                type: "GUILD_SETTINGS_CANCEL_CHANGES",
                guildId: e,
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n } = e,
                r = S({}, C(e, ["safetyAlertsChannelId", "profile"]));
            if (null != n) {
                var i;
                r.profile = S({}, null != (i = r.profile) ? i : {}, n);
            }
            null != y.A.getGuildId() && null != t && (r.safetyAlertsChannelId = t),
                s.h.dispatch(S({ type: "GUILD_SETTINGS_UPDATE" }, r));
        },
        updateGuildProfile(e, t) {
            s.h.dispatch(
                S(
                    {
                        type: "GUILD_SETTINGS_PROFILE_UPDATE",
                        guildId: e,
                    },
                    t,
                ),
            );
        },
        saveGuild(e, t) {
            let {
                    name: n,
                    description: r,
                    icon: i,
                    splash: o,
                    banner: l,
                    homeHeader: d,
                    afkChannelId: f,
                    afkTimeout: p,
                    systemChannelId: _,
                    verificationLevel: h,
                    defaultMessageNotifications: m,
                    explicitContentFilter: g,
                    features: E,
                    systemChannelFlags: b,
                    preferredLocale: y,
                    rulesChannelId: A,
                    safetyAlertsChannelId: v,
                    ownerConfiguredContentLevel: I,
                    discoverySplash: C,
                    publicUpdatesChannelId: N,
                    premiumProgressBarEnabled: w,
                    profile: P,
                    moderatorReportingEnabled: D,
                } = t,
                x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                L = T(
                    S(
                        {
                            name: n,
                            description: r,
                            icon: i,
                            splash: o,
                            banner: l,
                            home_header: d,
                            features: E,
                            preferred_locale: y,
                            afk_channel_id: f,
                            afk_timeout: p,
                            system_channel_id: _,
                            verification_level: h,
                            default_message_notifications: m,
                            explicit_content_filter: g,
                            system_channel_flags: b,
                            rules_channel_id: A,
                            owner_configured_content_level: I,
                            discovery_splash: C,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: v,
                        },
                        null != w ? { premium_progress_bar_enabled: w } : null,
                    ),
                    {
                        profile: null != P ? (0, c.N)(P) : P,
                        moderator_reporting_enabled: D,
                    },
                );
            return (
                s.h.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                a.Bo.patch({
                    url: O.Rsh.GUILD(e),
                    query: { for_discovery: x.isForDiscovery },
                    body: L,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        s.h.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                            guild: t.body,
                        }),
                            u.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (s.h.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                errors: e.body,
                            }),
                            R.error("Failed to save guild settings", { errors: e.body }),
                            x.throwErr)
                        )
                            throw e.body;
                    },
                )
            );
        },
        updateGuildModeration: (e, t) =>
            a.Bo.patch({
                url: O.Rsh.GUILD(e),
                body: {
                    verification_level: t.verificationLevel,
                    explicit_content_filter: t.explicitContentFilter,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => (u.A.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return b.A.patch({
                url: O.Rsh.GUILD(e),
                body: {
                    owner_id: t,
                    code: i,
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                    properties: {
                        guild_id: e,
                        verification_type: n,
                    },
                },
                rejectWithError: !1,
            });
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return b.A.put({
                url: O.Rsh.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: {
                        guild_id: e,
                        is_resend: t,
                    },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            a.Bo.post({
                url: O.Rsh.GUILD_DELETE(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                w.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = p.A.isLurking(e);
            await a.Bo.del({
                url: O.Rsh.GUILD_LEAVE(e),
                body: { lurking: n || g.Ay.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                i.OR.announce(A.intl.string(A.t["7iPyVW"]));
            }),
                w.close(),
                t && n && (0, _.pX)(O.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, i) {
            f.A.isFullServerPreview(e) && t === m.default.getId()
                ? (0, d.ID)(e, n)
                : (await a.Bo.patch({
                      url: O.Rsh.GUILD_MEMBER(e, t),
                      body: { roles: n },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  r.forEach((n) =>
                      s.h.dispatch({
                          type: "GUILD_ROLE_MEMBER_ADD",
                          guildId: e,
                          roleId: n,
                          userId: t,
                      }),
                  ),
                  i.forEach((n) =>
                      s.h.dispatch({
                          type: "GUILD_ROLE_MEMBER_REMOVE",
                          guildId: e,
                          roleId: n,
                          userId: t,
                      }),
                  ));
        },
        bulkAddMemberRoles: (e, t, n) =>
            a.Bo.patch({
                url: O.Rsh.GUILD_ROLE_MEMBERS(e, t),
                body: { member_ids: n },
                rejectWithError: !1,
            }).then((n) => {
                s.h.dispatch({
                    type: "GUILD_ROLE_MEMBER_BULK_ADD",
                    guildId: e,
                    roleId: t,
                    added: n.body,
                });
            }),
        enableIntegration: (e, t, n) =>
            a.Bo.post({
                url: O.Rsh.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            a.Bo.del({
                url: O.Rsh.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        updateIntegration(e, t, n, r, i) {
            let s = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: i,
            };
            return a.Bo.patch({
                url: O.Rsh.GUILD_INTEGRATION(e, t),
                body: s,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        syncIntegration(e, t) {
            a.Bo.post({
                url: O.Rsh.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        async migratePinPermission(e) {
            await a.Bo.post({
                url: O.Rsh.GUILD_MIGRATE_PIN_PERMISSION(e),
                rejectWithError: !0,
            }).then(() =>
                s.h.dispatch({
                    type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED",
                    guildId: e,
                }),
            );
        },
        async migrateSlowmodePermission(e) {
            await a.Bo.post({
                url: O.Rsh.GUILD_MIGRATE_SLOWMODE_PERMISSION(e),
                rejectWithError: !0,
            }).then(() =>
                s.h.dispatch({
                    type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED",
                    guildId: e,
                }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await w.migratePinPermission(e)), r && (await w.migrateSlowmodePermission(e));
        },
    },
    P = w;
