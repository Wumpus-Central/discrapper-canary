n.d(t, { default: () => F }), n(388685), n(539854);
var i = n(951288),
    s = n(647438),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(793030),
    c = n(442837),
    u = n(692547),
    h = n(538534),
    g = n(28664),
    m = n(481060),
    x = n(87051),
    p = n(798140),
    v = n(740504),
    j = n(933557),
    f = n(471445),
    N = n(131704),
    S = n(592125),
    b = n(324067),
    E = n(650774),
    O = n(430824),
    Z = n(699516),
    C = n(9156),
    L = n(594174),
    _ = n(823379),
    y = n(63063),
    M = n(621600),
    w = n(423589),
    P = n(444899),
    A = n(74888),
    T = n(981631),
    G = n(969943),
    I = n(388032),
    R = n(385888);
function D() {
    return (D =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function k(e) {
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
function U(e) {
    let { label: t, channelId: n } = e,
        [s, l] = (0, c.Wu)([S.Z], () => {
            let e = S.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? S.Z.getChannel(e.parent_id) : null];
        });
    return null == s
        ? t
        : (0, i.jsx)(m.ZZ$, {
              icon: (0, f.KS)(s),
              title: t,
              subtitle: null == l ? void 0 : l.name,
          });
}
function z(e) {
    var t;
    let { muteConfig: n, muted: s, guild: l, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : G.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: R.largeSpacing,
              children: [
                  (0, i.jsxs)(m.Kqy, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(m.rsf, {
                              label: I.intl.formatToPlainString(I.t["J+7D9P"], { name: l.name }),
                              description: I.intl.string(I.t["8wbTQ0"]),
                              checked: s,
                              onChange: (e) => r("muted", e, M.UE.muted(e)),
                          }),
                          s
                              ? (0, i.jsx)(m.q4e, {
                                    label: I.intl.string(I.t.Ztu2Ym),
                                    options: (0, w.W9)(),
                                    value: a,
                                    onChange: (e) => {
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        x.Z.updateGuildNotificationSettings(
                                            l.id,
                                            {
                                                muted: !0,
                                                mute_config: {
                                                    selected_time_window: e,
                                                    end_time: t,
                                                },
                                            },
                                            M.ZB.Muted,
                                        );
                                    },
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(m.izJ, { gap: 20 }),
              ],
          });
}
function H(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: R.spacing,
        children: [
            (0, i.jsx)("div", {
                className: R.largeSpacing,
                children: (0, i.jsx)(h.E, {
                    label: I.intl.string(I.t.lprV7e),
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, M.UE.notifications(e)),
                    options: [
                        {
                            name: I.intl.string(I.t["n/bTaW"]),
                            value: T.bL.ALL_MESSAGES,
                            desc: null != s && s >= T.qWG ? I.intl.string(I.t.Dh5p5u) : null,
                        },
                        {
                            name: I.intl.format(I.t.L2hmY2, {}),
                            value: T.bL.ONLY_MENTIONS,
                        },
                        {
                            name: I.intl.string(I.t.CtVGyc),
                            value: T.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(m.izJ, {}),
        ],
    });
}
function V(e) {
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
    return (0, i.jsxs)(m.Kqy, {
        className: R.largeSpacing,
        gap: 16,
        children: [
            (0, i.jsx)(m.rsf, {
                label: I.intl.format(I.t.OWiWAg, {}),
                onChange: (e) => s("suppress_everyone", e, M.UE.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(m.izJ, {}),
            (0, i.jsx)(m.rsf, {
                label: I.intl.string(I.t["O/QdoK"]),
                onChange: (e) => s("suppress_roles", e, M.UE.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(m.izJ, {}),
            (0, i.jsxs)(m.Kqy, {
                gap: 4,
                children: [
                    (0, i.jsx)(m.rsf, {
                        label: I.intl.string(I.t.gPuteH),
                        onChange: (e) => {
                            x.Z.updateGuildNotificationSettings(
                                d,
                                { notify_highlights: e ? T.gLR.DISABLED : T.gLR.ENABLED },
                                M.UE.highlights(!e),
                            );
                        },
                        checked: o || l === T.gLR.DISABLED,
                        disabled: o,
                        description: I.intl.string(I.t["Vw/Xn5"]),
                    }),
                    (0, i.jsx)(m.Anchor, {
                        href: y.Z.getArticleURL(T.BhN.HIGHLIGHTS),
                        children: (0, i.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: I.intl.string(I.t.PRBn9P),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(m.izJ, {}),
            (0, i.jsx)(m.rsf, {
                label: I.intl.string(I.t.ONG3Y2),
                checked: r,
                onChange: (e) => s("mute_scheduled_events", e, M.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(m.izJ, {}),
            (0, i.jsx)(m.rsf, {
                label: I.intl.string(I.t["h1DL6+"]),
                checked: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, M.UE.mobilePush(e)),
            }),
        ],
    });
}
function Y(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: a } = e,
        o = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== T.d4z.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, j.F6)(t, L.default, Z.Z),
                };
            })
            .value();
    return (0, i.jsx)("div", {
        className: R.largeSpacing,
        children: (0, i.jsx)(m.VcW, {
            label: I.intl.string(I.t["Z+oF8v"]),
            description: I.intl.string(I.t["2Y9ZfH"]),
            value: T.lds,
            placeholder: I.intl.string(I.t["Z+oF8v"]),
            renderOptionLabel: (e) =>
                (0, i.jsx)(U, {
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
function W(e) {
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
        h = s.useMemo(() => new Set([...t, ...(0, w.OD)(n)]), [n, t]),
        x = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(),
        v = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        j = l
            .map((e) => {
                let { channel: t } = e;
                if (!h.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    P.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, p.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: v,
                        checkboxColor: x,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(_.lm);
    return (
        (0 === h.size || 0 === j.length) &&
            j.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: R.overridePlaceholder,
                        children: (0, i.jsx)(m.Text, {
                            className: R.overrideHeader,
                            variant: "text-sm/semibold",
                            children: I.intl.string(I.t["2Y9ZfH"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: R.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: R.headerName,
                            children: I.intl.string(I.t.uShwWl),
                        }),
                        (0, i.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: R.headerOption,
                            children: I.intl.string(I.t.e29Z19),
                        }),
                        (0, i.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: R.headerOption,
                            children: I.intl.string(I.t.DD6gNT),
                        }),
                        (0, i.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: R.headerOption,
                            children: I.intl.string(I.t.CtVGyc),
                        }),
                        (0, i.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: R.headerOption,
                            children: (0, i.jsx)(g.u, {
                                text: I.intl.string(I.t["8wbTQ0"]),
                                position: "bottom",
                                children: (0, i.jsx)("span", { children: I.intl.string(I.t.sWmtIy) }),
                            }),
                        }),
                    ],
                }),
                j,
            ],
        })
    );
}
function q(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, c.e7)([b.Z], () => b.Z.getCategories(t)),
        a = (0, c.e7)([O.Z], () => O.Z.getGuild(t)),
        o = (0, c.e7)([E.Z], () => E.Z.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: p,
            muteConfig: j,
            messageNotifications: f,
            channelOverrides: S,
            notifyHighlights: Z,
        } = (0, c.cj)([C.ZP], () => ({
            suppressEveryone: C.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: C.ZP.isSuppressRolesEnabled(t),
            muteEvents: C.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: C.ZP.isMobilePushEnabled(t),
            muted: C.ZP.isMuted(t),
            muteConfig: C.ZP.getMuteConfig(t),
            messageNotifications: C.ZP.getMessageNotifications(t),
            channelOverrides: C.ZP.getChannelOverrides(t),
            notifyHighlights: C.ZP.getNotifyHighlights(t),
        })),
        [L, _] = s.useState(new Set()),
        [y, M] = s.useState(null),
        w = s.useMemo(
            () =>
                (0, v.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, N.r8)(t) || t === T.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        P = (e, n, i) => {
            x.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(d.Modal, {
        title: I.intl.string(I.t.h850Sk),
        actions: [
            {
                text: I.intl.string(I.t.i4jeWV),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)(z, {
                muteConfig: j,
                muted: p,
                guild: a,
                handleCheckboxChange: P,
            }),
            (0, i.jsx)(H, {
                muted: p,
                messageNotifications: f,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    x.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(V, {
                suppressEveryone: u,
                suppressRoles: h,
                handleCheckboxChange: P,
                notifyHighlights: Z,
                muteEvents: g,
                mobilePush: m,
                muted: p,
                guildId: t,
            }),
            (0, i.jsx)(Y, {
                setNewChannelOverrides: _,
                newChannelOverrides: L,
                setLatestOverrideId: M,
                channels: w,
                categories: r,
            }),
            (0, i.jsx)(W, {
                newChannelOverrides: L,
                channelOverrides: S,
                channels: w,
                categories: r,
                muted: p,
                setNewChannelOverrides: _,
                latestOverrideId: y,
                messageNotifications: f,
            }),
        ],
    });
}
function F(e) {
    var t = D(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, w.Mn)("NotificationSettingsModal") ? (0, i.jsx)(A.Z, k({}, t)) : (0, i.jsx)(q, k({}, t));
}
