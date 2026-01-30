n.d(t, {
    A: () => P,
}),
    n(228524);
var r = n(110259),
    i = n(349941),
    a = n(562465),
    o = n(73153),
    s = n(398590),
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
    y = n(499785),
    b = n(555337),
    O = n(652215),
    v = n(985018);

function A(e, t, n) {
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

function I(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
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
let w = new l.A("GuildSettingsActionCreators"),
    R = {
        init(e, t, n, r) {
            o.h.dispatch({
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
                n.e("3795"),
                n.e("43600"),
                n.e("28136"),
                n.e("68587"),
                n.e("28936"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("40396"),
                n.e("13088"),
                n.e("25961"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("7034"),
                n.e("49559"),
                n.e("37372"),
                n.e("67923"),
                n.e("8018"),
                n.e("3183"),
                n.e("64935"),
                n.e("21968"),
                n.e("35894"),
                n.e("50796"),
                n.e("11810"),
                n.e("8458"),
                n.e("5152"),
                n.e("39048"),
                n.e("3911"),
                n.e("49862"),
                n.e("60989"),
                n.e("24202"),
                n.e("38985"),
                n.e("36290"),
                n.e("59541"),
                n.e("16865"),
                n.e("89455"),
            ]).then(n.bind(n, 422559)),
                (null == (a = E.A.getGuild(e)) ? void 0 : a.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (t === O.BEX.GUILD_AUTOMOD && ((t = O.BEX.SAFETY), (i = O.nd0.SAFETY_AUTOMOD)),
                    t === O.BEX.MEMBER_VERIFICATION && ((t = O.BEX.SAFETY), (i = O.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                R.init(e, t, r, i),
                h.A.closeGuildSidebar(e),
                (0, s.id)(O.zgK.GUILD_SETTINGS);
        },
        close() {
            o.h.dispatch({
                type: "GUILD_SETTINGS_CLOSE",
            });
        },
        saveRouteStack(e) {
            o.h.dispatch({
                type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                state: e,
            });
        },
        setSection(e, t) {
            var n;
            let r = b.A.getGuildId();
            null != r &&
                ((null == (n = E.A.getGuild(r)) ? void 0 : n.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (e === O.BEX.GUILD_AUTOMOD && ((e = O.BEX.SAFETY), (t = O.nd0.SAFETY_AUTOMOD)),
                    e === O.BEX.MEMBER_VERIFICATION && ((e = O.BEX.SAFETY), (t = O.nd0.SAFETY_DM_AND_SPAM_PROTECTION))),
                o.h.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t,
                }));
        },
        setSearchQuery(e) {
            o.h.dispatch({
                type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                searchQuery: e,
            });
        },
        selectRole: (e, t) =>
            o.h.dispatch({
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
                o.h.dispatch({
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
                body: {
                    level: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) =>
                o.h.dispatch({
                    type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                    level: e.body.level,
                }),
            );
        },
        updateIcon(e, t) {
            a.Bo.patch({
                url: O.Rsh.GUILD(e),
                body: {
                    icon: t,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                () => {
                    o.h.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t,
                    }),
                        u.A.checkGuildTemplateDirty(e);
                },
                (e) =>
                    o.h.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
            );
        },
        cancelChanges(e) {
            o.h.dispatch({
                type: "GUILD_SETTINGS_CANCEL_CHANGES",
                guildId: e,
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n } = e,
                r = I({}, C(e, ["safetyAlertsChannelId", "profile"]));
            if (null != n) {
                var i;
                r.profile = I({}, null != (i = r.profile) ? i : {}, n);
            }
            null != b.A.getGuildId() && null != t && (r.safetyAlertsChannelId = t),
                o.h.dispatch(
                    I(
                        {
                            type: "GUILD_SETTINGS_UPDATE",
                        },
                        r,
                    ),
                );
        },
        updateGuildProfile(e, t) {
            o.h.dispatch(
                I(
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
                    splash: s,
                    banner: l,
                    homeHeader: d,
                    afkChannelId: f,
                    afkTimeout: p,
                    systemChannelId: _,
                    verificationLevel: h,
                    defaultMessageNotifications: m,
                    explicitContentFilter: g,
                    features: E,
                    systemChannelFlags: y,
                    preferredLocale: b,
                    rulesChannelId: v,
                    safetyAlertsChannelId: A,
                    ownerConfiguredContentLevel: S,
                    discoverySplash: C,
                    publicUpdatesChannelId: N,
                    premiumProgressBarEnabled: R,
                    profile: P,
                    moderatorReportingEnabled: D,
                } = t,
                L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                x = T(
                    I(
                        {
                            name: n,
                            description: r,
                            icon: i,
                            splash: s,
                            banner: l,
                            home_header: d,
                            features: E,
                            preferred_locale: b,
                            afk_channel_id: f,
                            afk_timeout: p,
                            system_channel_id: _,
                            verification_level: h,
                            default_message_notifications: m,
                            explicit_content_filter: g,
                            system_channel_flags: y,
                            rules_channel_id: v,
                            owner_configured_content_level: S,
                            discovery_splash: C,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: A,
                        },
                        null != R
                            ? {
                                  premium_progress_bar_enabled: R,
                              }
                            : null,
                    ),
                    {
                        profile: null != P ? (0, c.N)(P) : P,
                        moderator_reporting_enabled: D,
                    },
                );
            return (
                o.h.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT",
                }),
                a.Bo.patch({
                    url: O.Rsh.GUILD(e),
                    query: {
                        for_discovery: L.isForDiscovery,
                    },
                    body: x,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (t) => {
                        o.h.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                            guild: t.body,
                        }),
                            u.A.checkGuildTemplateDirty(e);
                    },
                    (e) => {
                        if (
                            (o.h.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                errors: e.body,
                            }),
                            w.error("Failed to save guild settings", {
                                errors: e.body,
                            }),
                            L.throwErr)
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
            return y.A.patch({
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
            return y.A.put({
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
                R.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = p.A.isLurking(e);
            await a.Bo.del({
                url: O.Rsh.GUILD_LEAVE(e),
                body: {
                    lurking: n || g.Ay.isCurrentUserGuest(e),
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(() => {
                i.OR.announce(v.intl.string(v.t["7iPyVW"]));
            }),
                R.close(),
                t && n && (0, _.pX)(O.BVt.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, i) {
            f.A.isFullServerPreview(e) && t === m.default.getId()
                ? (0, d.ID)(e, n)
                : (await a.Bo.patch({
                      url: O.Rsh.GUILD_MEMBER(e, t),
                      body: {
                          roles: n,
                      },
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }),
                  r.forEach((n) =>
                      o.h.dispatch({
                          type: "GUILD_ROLE_MEMBER_ADD",
                          guildId: e,
                          roleId: n,
                          userId: t,
                      }),
                  ),
                  i.forEach((n) =>
                      o.h.dispatch({
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
                body: {
                    member_ids: n,
                },
                rejectWithError: !1,
            }).then((n) => {
                o.h.dispatch({
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
            let o = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: i,
            };
            return a.Bo.patch({
                url: O.Rsh.GUILD_INTEGRATION(e, t),
                body: o,
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
                o.h.dispatch({
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
                o.h.dispatch({
                    type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED",
                    guildId: e,
                }),
            );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await R.migratePinPermission(e)), r && (await R.migrateSlowmodePermission(e));
        },
    },
    P = R;
