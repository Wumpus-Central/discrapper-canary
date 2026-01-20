n.d(t, { default: () => X }), n(388685), n(539854);
var i = n(54381),
    s = n(473749),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(793030),
    c = n(442837),
    u = n(692547),
    h = n(311047),
    g = n(668339),
    m = n(28664),
    x = n(481060),
    p = n(87051),
    j = n(798140),
    f = n(740504),
    v = n(933557),
    b = n(471445),
    S = n(528011),
    N = n(487419),
    E = n(675478),
    C = n(131704),
    O = n(592125),
    Z = n(324067),
    L = n(650774),
    _ = n(430824),
    y = n(699516),
    A = n(9156),
    P = n(594174),
    M = n(823379),
    w = n(63063),
    T = n(621600),
    G = n(423589),
    k = n(444899),
    R = n(74888),
    I = n(981631),
    U = n(969943),
    D = n(388032),
    z = n(99079);
function H() {
    return (H =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function F(e) {
    let { label: t, channelId: n } = e,
        [s, l] = (0, c.Wu)([O.Z], () => {
            let e = O.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? O.Z.getChannel(e.parent_id) : null];
        });
    return null == s
        ? t
        : (0, i.jsx)(h.Z, {
              icon: (0, b.KS)(s),
              title: t,
              subtitle: null == l ? void 0 : l.name,
          });
}
function W(e) {
    var t;
    let { muteConfig: n, muted: s, guild: l, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : U.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: z.largeSpacing,
              children: [
                  (0, i.jsxs)(x.Kqy, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(x.rsf, {
                              label: D.intl.formatToPlainString(D.t["J+7D9E"], { name: l.name }),
                              description: D.intl.string(D.t["8wbTQ6"]),
                              checked: s,
                              onChange: (e) => r("muted", e, T.UE.muted(e)),
                          }),
                          s
                              ? (0, i.jsx)(x.PhF, {
                                    label: D.intl.string(D.t.Ztu2Yo),
                                    options: (0, G.W9)(),
                                    value: a,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        p.Z.updateGuildNotificationSettings(
                                            l.id,
                                            {
                                                muted: !0,
                                                mute_config: {
                                                    selected_time_window: e,
                                                    end_time: t,
                                                },
                                            },
                                            T.ZB.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(x.izJ, { gap: 20 }),
              ],
          });
}
function J(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: z.spacing,
        children: [
            (0, i.jsx)("div", {
                className: z.largeSpacing,
                children: (0, i.jsx)(x.FXm, {
                    label: D.intl.string(D.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, T.UE.notifications(e)),
                    options: [
                        {
                            name: D.intl.string(D.t["n/bTaY"]),
                            value: I.bL.ALL_MESSAGES,
                            desc: null != s && s >= I.qWG ? D.intl.string(D.t.Dh5p5j) : null,
                        },
                        {
                            name: D.intl.format(D.t.L2hmYy, {}),
                            value: I.bL.ONLY_MENTIONS,
                        },
                        {
                            name: D.intl.string(D.t.CtVGyQ),
                            value: I.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(x.izJ, {}),
        ],
    });
}
function B(e) {
    let { guildId: t } = e,
        n = (0, S.Tz)(t),
        s = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: z.spacing,
            children: [
                (0, i.jsx)(x.l09, {
                    className: z.largeSpacing,
                    children: (0, i.jsxs)(d.gNt, {
                        label: D.intl.string(D.t.D9yVAH),
                        description: D.intl.string(D.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(x.rsf, {
                                label: D.intl.string(D.t.u6dc5B),
                                description: D.intl.string(D.t.z8Td48),
                                checked: !(null == s ? void 0 : s.disableRaidAlertNag),
                                onChange: (e) =>
                                    (0, E.PS)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        E.fy.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, i.jsx)(x.rsf, {
                                label: D.intl.string(D.t.P8MG6q),
                                description: D.intl.string(D.t.PyxXs8),
                                checked: !(null == s ? void 0 : s.disableRaidAlertPush),
                                onChange: (e) =>
                                    (0, E.PS)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        E.fy.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(x.izJ, {}),
            ],
        });
}
function Q(e) {
    let {
        suppressEveryone: t,
        suppressRoles: n,
        handleCheckboxChange: s,
        notifyHighlights: l,
        muteEvents: r,
        mobilePush: a,
        muted: o,
        guildId: d,
    } = e;
    return (0, i.jsxs)(x.Kqy, {
        className: z.largeSpacing,
        gap: 16,
        children: [
            (0, i.jsx)(x.rsf, {
                label: D.intl.format(D.t.OWiWAp, {}),
                onChange: (e) => s("suppress_everyone", e, T.UE.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(x.izJ, {}),
            (0, i.jsx)(x.rsf, {
                label: D.intl.string(D.t["O/QdoD"]),
                onChange: (e) => s("suppress_roles", e, T.UE.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(x.izJ, {}),
            (0, i.jsxs)(x.Kqy, {
                gap: 4,
                children: [
                    (0, i.jsx)(x.rsf, {
                        label: D.intl.string(D.t.gPuteJ),
                        onChange: (e) => {
                            p.Z.updateGuildNotificationSettings(
                                d,
                                { notify_highlights: e ? I.gLR.DISABLED : I.gLR.ENABLED },
                                T.UE.highlights(!e),
                            );
                        },
                        checked: o || l === I.gLR.DISABLED,
                        disabled: o,
                        description: D.intl.string(D.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(x.eee, {
                        href: w.Z.getArticleURL(I.BhN.HIGHLIGHTS),
                        children: (0, i.jsx)(x.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: D.intl.string(D.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(x.izJ, {}),
            (0, i.jsx)(x.rsf, {
                label: D.intl.string(D.t.ONG3Yz),
                checked: r,
                onChange: (e) => s("mute_scheduled_events", e, T.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(x.izJ, {}),
            (0, i.jsx)(x.rsf, {
                label: D.intl.string(D.t.h1DL66),
                checked: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, T.UE.mobilePush(e)),
            }),
        ],
    });
}
function V(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: a } = e,
        o = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== I.d4z.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, v.F6)(t, P.default, y.Z),
                };
            })
            .value();
    return (0, i.jsx)("div", {
        className: z.largeSpacing,
        children: (0, i.jsx)(g.d, {
            label: D.intl.string(D.t["Z+oF8h"]),
            description: D.intl.string(D.t["2Y9ZfA"]),
            value: I.lds,
            placeholder: D.intl.string(D.t["Z+oF8h"]),
            renderOptionLabel: (e) =>
                (0, i.jsx)(F, {
                    label: e.label,
                    channelId: e.value,
                }),
            options: o,
            onChange: (e) => {
                if (null == e) return;
                let i = new Set(n);
                i.add(e), t(i), s(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function q(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: n,
            channels: l,
            categories: r,
            muted: a,
            setNewChannelOverrides: o,
            latestOverrideId: d,
            messageNotifications: c,
        } = e,
        h = s.useMemo(() => new Set([...t, ...(0, G.OD)(n)]), [n, t]),
        g = (0, x.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(),
        p = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        f = l
            .map((e) => {
                let { channel: t } = e;
                if (!h.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    k.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, j.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: p,
                        checkboxColor: g,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(M.lm);
    return (
        (0 === h.size || 0 === f.length) &&
            f.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: z.overridePlaceholder,
                        children: (0, i.jsx)(x.Text, {
                            className: z.overrideHeader,
                            variant: "text-sm/semibold",
                            children: D.intl.string(D.t["2Y9ZfA"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: z.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: z.headerName,
                            children: D.intl.string(D.t.uShwWv),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: z.headerOption,
                            children: D.intl.string(D.t.e29Z12),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: z.headerOption,
                            children: D.intl.string(D.t.DD6gNd),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: z.headerOption,
                            children: D.intl.string(D.t.CtVGyQ),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: z.headerOption,
                            children: (0, i.jsx)(m.u, {
                                text: D.intl.string(D.t["8wbTQ6"]),
                                position: "bottom",
                                children: (0, i.jsx)("span", { children: D.intl.string(D.t.sWmtI6) }),
                            }),
                        }),
                    ],
                }),
                f,
            ],
        })
    );
}
function K(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, c.e7)([Z.Z], () => Z.Z.getCategories(t)),
        a = (0, c.e7)([_.Z], () => _.Z.getGuild(t)),
        o = (0, c.e7)([L.Z], () => L.Z.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: x,
            muteConfig: j,
            messageNotifications: v,
            channelOverrides: b,
            notifyHighlights: S,
        } = (0, c.cj)([A.ZP], () => ({
            suppressEveryone: A.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: A.ZP.isSuppressRolesEnabled(t),
            muteEvents: A.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: A.ZP.isMobilePushEnabled(t),
            muted: A.ZP.isMuted(t),
            muteConfig: A.ZP.getMuteConfig(t),
            messageNotifications: A.ZP.getMessageNotifications(t),
            channelOverrides: A.ZP.getChannelOverrides(t),
            notifyHighlights: A.ZP.getNotifyHighlights(t),
        })),
        [N, E] = s.useState(new Set()),
        [O, y] = s.useState(null),
        P = s.useMemo(
            () =>
                (0, f.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, C.r8)(t) || t === I.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        M = (e, n, i) => {
            p.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(d.Modal, {
        title: D.intl.string(D.t.h850Ss),
        actions: [
            {
                text: D.intl.string(D.t.i4jeWR),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)(W, {
                muteConfig: j,
                muted: x,
                guild: a,
                handleCheckboxChange: M,
            }),
            (0, i.jsx)(J, {
                muted: x,
                messageNotifications: v,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    p.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(B, { guildId: t }),
            (0, i.jsx)(Q, {
                suppressEveryone: u,
                suppressRoles: h,
                handleCheckboxChange: M,
                notifyHighlights: S,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(V, {
                setNewChannelOverrides: E,
                newChannelOverrides: N,
                setLatestOverrideId: y,
                channels: P,
                categories: r,
            }),
            (0, i.jsx)(q, {
                newChannelOverrides: N,
                channelOverrides: b,
                channels: P,
                categories: r,
                muted: x,
                setNewChannelOverrides: E,
                latestOverrideId: O,
                messageNotifications: v,
            }),
        ],
    });
}
function X(e) {
    var t = H(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, G.Mn)("NotificationSettingsModal") ? (0, i.jsx)(R.Z, Y({}, t)) : (0, i.jsx)(K, Y({}, t));
}
