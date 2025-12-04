n.d(t, { default: () => $ }), n(388685), n(539854);
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
    m = n(199849),
    x = n(28664),
    p = n(481060),
    j = n(87051),
    v = n(798140),
    f = n(740504),
    N = n(933557),
    b = n(471445),
    S = n(528011),
    E = n(487419),
    O = n(675478),
    C = n(131704),
    Z = n(592125),
    L = n(324067),
    _ = n(650774),
    y = n(430824),
    A = n(699516),
    M = n(9156),
    P = n(594174),
    T = n(823379),
    w = n(63063),
    R = n(621600),
    G = n(423589),
    I = n(444899),
    D = n(74888),
    U = n(981631),
    k = n(969943),
    z = n(388032),
    H = n(385888);
function Y() {
    return (Y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function V(e) {
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
        [s, l] = (0, c.Wu)([Z.Z], () => {
            let e = Z.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? Z.Z.getChannel(e.parent_id) : null];
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
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : k.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: H.largeSpacing,
              children: [
                  (0, i.jsxs)(p.Kqy, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(p.rsf, {
                              label: z.intl.formatToPlainString(z.t["J+7D9E"], { name: l.name }),
                              description: z.intl.string(z.t["8wbTQ6"]),
                              checked: s,
                              onChange: (e) => r("muted", e, R.UE.muted(e)),
                          }),
                          s
                              ? (0, i.jsx)(m.y6, {
                                    label: z.intl.string(z.t.Ztu2Yo),
                                    options: (0, G.W9)(),
                                    value: a,
                                    onChange: (e) => {
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        j.Z.updateGuildNotificationSettings(
                                            l.id,
                                            {
                                                muted: !0,
                                                mute_config: {
                                                    selected_time_window: e,
                                                    end_time: t,
                                                },
                                            },
                                            R.ZB.Muted,
                                        );
                                    },
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(p.izJ, { gap: 20 }),
              ],
          });
}
function J(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: H.spacing,
        children: [
            (0, i.jsx)("div", {
                className: H.largeSpacing,
                children: (0, i.jsx)(p.FXm, {
                    label: z.intl.string(z.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, R.UE.notifications(e)),
                    options: [
                        {
                            name: z.intl.string(z.t["n/bTaY"]),
                            value: U.bL.ALL_MESSAGES,
                            desc: null != s && s >= U.qWG ? z.intl.string(z.t.Dh5p5j) : null,
                        },
                        {
                            name: z.intl.format(z.t.L2hmYy, {}),
                            value: U.bL.ONLY_MENTIONS,
                        },
                        {
                            name: z.intl.string(z.t.CtVGyQ),
                            value: U.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(p.izJ, {}),
        ],
    });
}
function q(e) {
    let { guildId: t } = e,
        n = (0, S.Tz)(t),
        s = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: H.spacing,
            children: [
                (0, i.jsx)(p.l09, {
                    className: H.largeSpacing,
                    children: (0, i.jsxs)(d.gNt, {
                        label: z.intl.string(z.t.D9yVAH),
                        description: z.intl.string(z.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(p.rsf, {
                                label: z.intl.string(z.t.u6dc5B),
                                description: z.intl.string(z.t.z8Td48),
                                checked: !(null == s ? void 0 : s.disableRaidAlertNag),
                                onChange: (e) =>
                                    (0, O.PS)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        O.fy.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, i.jsx)(p.rsf, {
                                label: z.intl.string(z.t.P8MG6q),
                                description: z.intl.string(z.t.PyxXs8),
                                checked: !(null == s ? void 0 : s.disableRaidAlertPush),
                                onChange: (e) =>
                                    (0, O.PS)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        O.fy.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(p.izJ, {}),
            ],
        });
}
function B(e) {
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
    return (0, i.jsxs)(p.Kqy, {
        className: H.largeSpacing,
        gap: 16,
        children: [
            (0, i.jsx)(p.rsf, {
                label: z.intl.format(z.t.OWiWAp, {}),
                onChange: (e) => s("suppress_everyone", e, R.UE.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(p.izJ, {}),
            (0, i.jsx)(p.rsf, {
                label: z.intl.string(z.t["O/QdoD"]),
                onChange: (e) => s("suppress_roles", e, R.UE.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(p.izJ, {}),
            (0, i.jsxs)(p.Kqy, {
                gap: 4,
                children: [
                    (0, i.jsx)(p.rsf, {
                        label: z.intl.string(z.t.gPuteJ),
                        onChange: (e) => {
                            j.Z.updateGuildNotificationSettings(
                                d,
                                { notify_highlights: e ? U.gLR.DISABLED : U.gLR.ENABLED },
                                R.UE.highlights(!e),
                            );
                        },
                        checked: o || l === U.gLR.DISABLED,
                        disabled: o,
                        description: z.intl.string(z.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(p.Anchor, {
                        href: w.Z.getArticleURL(U.BhN.HIGHLIGHTS),
                        children: (0, i.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: z.intl.string(z.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(p.izJ, {}),
            (0, i.jsx)(p.rsf, {
                label: z.intl.string(z.t.ONG3Yz),
                checked: r,
                onChange: (e) => s("mute_scheduled_events", e, R.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(p.izJ, {}),
            (0, i.jsx)(p.rsf, {
                label: z.intl.string(z.t.h1DL66),
                checked: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, R.UE.mobilePush(e)),
            }),
        ],
    });
}
function Q(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: a } = e,
        o = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== U.d4z.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, N.F6)(t, P.default, A.Z),
                };
            })
            .value();
    return (0, i.jsx)("div", {
        className: H.largeSpacing,
        children: (0, i.jsx)(g.d, {
            label: z.intl.string(z.t["Z+oF8h"]),
            description: z.intl.string(z.t["2Y9ZfA"]),
            value: U.lds,
            placeholder: z.intl.string(z.t["Z+oF8h"]),
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
        }),
    });
}
function K(e) {
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
        g = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(),
        m = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        j = l
            .map((e) => {
                let { channel: t } = e;
                if (!h.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    I.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, v.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: m,
                        checkboxColor: g,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(T.lm);
    return (
        (0 === h.size || 0 === j.length) &&
            j.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: H.overridePlaceholder,
                        children: (0, i.jsx)(p.Text, {
                            className: H.overrideHeader,
                            variant: "text-sm/semibold",
                            children: z.intl.string(z.t["2Y9ZfA"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: H.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: H.headerName,
                            children: z.intl.string(z.t.uShwWv),
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: H.headerOption,
                            children: z.intl.string(z.t.e29Z12),
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: H.headerOption,
                            children: z.intl.string(z.t.DD6gNd),
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: H.headerOption,
                            children: z.intl.string(z.t.CtVGyQ),
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: H.headerOption,
                            children: (0, i.jsx)(x.u, {
                                text: z.intl.string(z.t["8wbTQ6"]),
                                position: "bottom",
                                children: (0, i.jsx)("span", { children: z.intl.string(z.t.sWmtI6) }),
                            }),
                        }),
                    ],
                }),
                j,
            ],
        })
    );
}
function X(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, c.e7)([L.Z], () => L.Z.getCategories(t)),
        a = (0, c.e7)([y.Z], () => y.Z.getGuild(t)),
        o = (0, c.e7)([_.Z], () => _.Z.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: x,
            muteConfig: p,
            messageNotifications: v,
            channelOverrides: N,
            notifyHighlights: b,
        } = (0, c.cj)([M.ZP], () => ({
            suppressEveryone: M.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: M.ZP.isSuppressRolesEnabled(t),
            muteEvents: M.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: M.ZP.isMobilePushEnabled(t),
            muted: M.ZP.isMuted(t),
            muteConfig: M.ZP.getMuteConfig(t),
            messageNotifications: M.ZP.getMessageNotifications(t),
            channelOverrides: M.ZP.getChannelOverrides(t),
            notifyHighlights: M.ZP.getNotifyHighlights(t),
        })),
        [S, E] = s.useState(new Set()),
        [O, Z] = s.useState(null),
        A = s.useMemo(
            () =>
                (0, f.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, C.r8)(t) || t === U.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        P = (e, n, i) => {
            j.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(d.Modal, {
        title: z.intl.string(z.t.h850Ss),
        actions: [
            {
                text: z.intl.string(z.t.i4jeWR),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)(W, {
                muteConfig: p,
                muted: x,
                guild: a,
                handleCheckboxChange: P,
            }),
            (0, i.jsx)(J, {
                muted: x,
                messageNotifications: v,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    j.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(q, { guildId: t }),
            (0, i.jsx)(B, {
                suppressEveryone: u,
                suppressRoles: h,
                handleCheckboxChange: P,
                notifyHighlights: b,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(Q, {
                setNewChannelOverrides: E,
                newChannelOverrides: S,
                setLatestOverrideId: Z,
                channels: A,
                categories: r,
            }),
            (0, i.jsx)(K, {
                newChannelOverrides: S,
                channelOverrides: N,
                channels: A,
                categories: r,
                muted: x,
                setNewChannelOverrides: E,
                latestOverrideId: O,
                messageNotifications: v,
            }),
        ],
    });
}
function $(e) {
    var t = Y(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, G.Mn)("NotificationSettingsModal") ? (0, i.jsx)(D.Z, V({}, t)) : (0, i.jsx)(X, V({}, t));
}
