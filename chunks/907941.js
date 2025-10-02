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
    g = n(481060),
    m = n(87051),
    x = n(798140),
    p = n(740504),
    j = n(933557),
    v = n(471445),
    f = n(777861),
    b = n(131704),
    N = n(592125),
    S = n(324067),
    O = n(650774),
    E = n(430824),
    y = n(699516),
    Z = n(9156),
    C = n(594174),
    L = n(823379),
    _ = n(63063),
    P = n(621600),
    w = n(423589),
    M = n(444899),
    T = n(74888),
    A = n(981631),
    G = n(969943),
    D = n(388032),
    I = n(681296);
function R() {
    return (R =
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
        [s, l] = (0, c.Wu)([N.Z], () => {
            let e = N.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? N.Z.getChannel(e.parent_id) : null];
        });
    return null == s
        ? t
        : (0, i.jsx)(g.ZZ$, {
              icon: (0, v.KS)(s),
              title: t,
              subtitle: null == l ? void 0 : l.name,
          });
}
function W(e) {
    var t;
    let { muteConfig: n, muted: s, guild: l, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : G.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: I.largeSpacing,
              children: [
                  (0, i.jsx)(g.rsf, {
                      label: D.intl.formatToPlainString(D.t["J+7D9P"], { name: l.name }),
                      description: D.intl.string(D.t["8wbTQ0"]),
                      checked: s,
                      onChange: (e) => r("muted", e, P.UE.muted(e)),
                  }),
                  s
                      ? (0, i.jsxs)("div", {
                            className: I.mutedContainer,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(g.vwX, {
                                            tag: "h3",
                                            className: I.muteUntilTitle,
                                            children: D.intl.string(D.t.Ztu2Ym),
                                        }),
                                        (0, i.jsx)(f.Z, {
                                            className: I.muteUntilText,
                                            muteConfig: n,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.q4e, {
                                    className: I.muteTimeSelector,
                                    options: (0, w.W9)(),
                                    value: a,
                                    onChange: (e) => {
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        m.Z.updateGuildNotificationSettings(
                                            l.id,
                                            {
                                                muted: !0,
                                                mute_config: {
                                                    selected_time_window: e,
                                                    end_time: t,
                                                },
                                            },
                                            P.ZB.Muted,
                                        );
                                    },
                                }),
                            ],
                        })
                      : null,
                  (0, i.jsx)(g.izJ, {}),
              ],
          });
}
function z(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: I.spacing,
        children: [
            (0, i.jsx)(g.xJW, {
                title: D.intl.string(D.t.lprV7e),
                className: I.largeSpacing,
                children: (0, i.jsx)(h.E, {
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, P.UE.notifications(e)),
                    options: [
                        {
                            name: D.intl.string(D.t["n/bTaW"]),
                            value: A.bL.ALL_MESSAGES,
                            desc: null != s && s >= A.qWG ? D.intl.string(D.t.Dh5p5u) : null,
                        },
                        {
                            name: D.intl.format(D.t.L2hmY2, {}),
                            value: A.bL.ONLY_MENTIONS,
                        },
                        {
                            name: D.intl.string(D.t.CtVGyc),
                            value: A.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(g.izJ, {}),
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
    return (0, i.jsxs)(g.Kqy, {
        className: I.largeSpacing,
        gap: 16,
        children: [
            (0, i.jsx)(g.rsf, {
                label: D.intl.format(D.t.OWiWAg, {}),
                onChange: (e) => s("suppress_everyone", e, P.UE.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(g.izJ, {}),
            (0, i.jsx)(g.rsf, {
                label: D.intl.string(D.t["O/QdoK"]),
                onChange: (e) => s("suppress_roles", e, P.UE.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(g.izJ, {}),
            (0, i.jsxs)(g.Kqy, {
                gap: 4,
                children: [
                    (0, i.jsx)(g.rsf, {
                        label: D.intl.string(D.t.gPuteH),
                        onChange: (e) => {
                            m.Z.updateGuildNotificationSettings(
                                d,
                                { notify_highlights: e ? A.gLR.DISABLED : A.gLR.ENABLED },
                                P.UE.highlights(!e),
                            );
                        },
                        checked: o || l === A.gLR.DISABLED,
                        disabled: o,
                        description: D.intl.string(D.t["Vw/Xn5"]),
                    }),
                    (0, i.jsx)(g.eee, {
                        href: _.Z.getArticleURL(A.BhN.HIGHLIGHTS),
                        children: (0, i.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: D.intl.string(D.t.PRBn9P),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(g.izJ, {}),
            (0, i.jsx)(g.rsf, {
                label: D.intl.string(D.t.ONG3Y2),
                checked: r,
                onChange: (e) => s("mute_scheduled_events", e, P.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(g.izJ, {}),
            (0, i.jsx)(g.rsf, {
                label: D.intl.string(D.t["h1DL6+"]),
                checked: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, P.UE.mobilePush(e)),
            }),
        ],
    });
}
function Y(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: a } = e,
        o = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== A.d4z.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, j.F6)(t, C.default, y.Z),
                };
            })
            .value();
    return (0, i.jsxs)(g.xJW, {
        title: D.intl.string(D.t.O4TIvr),
        className: I.largeSpacing,
        children: [
            (0, i.jsx)(g.R94, {
                type: g.R94.Types.DESCRIPTION,
                className: I.smallSpacing,
                children: D.intl.string(D.t["2Y9ZfH"]),
            }),
            (0, i.jsx)(g.VcW, {
                value: A.lds,
                placeholder: D.intl.string(D.t["Z+oF8v"]),
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
        ],
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
        h = s.useMemo(() => new Set([...t, ...(0, w.OD)(n)]), [n, t]),
        m = (0, g.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(),
        p = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        j = l
            .map((e) => {
                let { channel: t } = e;
                if (!h.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    M.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, x.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: p,
                        checkboxColor: m,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(L.lm);
    return (
        (0 === h.size || 0 === j.length) &&
            j.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: I.overridePlaceholder,
                        children: (0, i.jsx)(g.Text, {
                            className: I.overrideHeader,
                            variant: "text-sm/semibold",
                            children: D.intl.string(D.t["2Y9ZfH"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: I.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: I.headerName,
                            children: D.intl.string(D.t.uShwWl),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: I.headerOption,
                            children: D.intl.string(D.t.e29Z19),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: I.headerOption,
                            children: D.intl.string(D.t.DD6gNT),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: I.headerOption,
                            children: D.intl.string(D.t.CtVGyc),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: I.headerOption,
                            children: (0, i.jsx)(g.ua7, {
                                text: D.intl.string(D.t["8wbTQ0"]),
                                position: "bottom",
                                children: (e) => {
                                    var t, n;
                                    return (0, i.jsx)(
                                        "span",
                                        ((t = k({}, e)),
                                        (n = n = { children: D.intl.string(D.t.sWmtIy) }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t),
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                j,
            ],
        })
    );
}
function H(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, c.e7)([S.Z], () => S.Z.getCategories(t)),
        a = (0, c.e7)([E.Z], () => E.Z.getGuild(t)),
        o = (0, c.e7)([O.Z], () => O.Z.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: x,
            muted: j,
            muteConfig: v,
            messageNotifications: f,
            channelOverrides: N,
            notifyHighlights: y,
        } = (0, c.cj)([Z.ZP], () => ({
            suppressEveryone: Z.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: Z.ZP.isSuppressRolesEnabled(t),
            muteEvents: Z.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: Z.ZP.isMobilePushEnabled(t),
            muted: Z.ZP.isMuted(t),
            muteConfig: Z.ZP.getMuteConfig(t),
            messageNotifications: Z.ZP.getMessageNotifications(t),
            channelOverrides: Z.ZP.getChannelOverrides(t),
            notifyHighlights: Z.ZP.getNotifyHighlights(t),
        })),
        [C, L] = s.useState(new Set()),
        [_, P] = s.useState(null),
        w = s.useMemo(
            () =>
                (0, p.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, b.r8)(t) || t === A.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        M = (e, n, i) => {
            m.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(d.Modal, {
        title: D.intl.string(D.t.h850Sk),
        actions: [
            {
                text: D.intl.string(D.t.i4jeWV),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)(W, {
                muteConfig: v,
                muted: j,
                guild: a,
                handleCheckboxChange: M,
            }),
            (0, i.jsx)(z, {
                muted: j,
                messageNotifications: f,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    m.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(V, {
                suppressEveryone: u,
                suppressRoles: h,
                handleCheckboxChange: M,
                notifyHighlights: y,
                muteEvents: g,
                mobilePush: x,
                muted: j,
                guildId: t,
            }),
            (0, i.jsx)(Y, {
                setNewChannelOverrides: L,
                newChannelOverrides: C,
                setLatestOverrideId: P,
                channels: w,
                categories: r,
            }),
            (0, i.jsx)(q, {
                newChannelOverrides: C,
                channelOverrides: N,
                channels: w,
                categories: r,
                muted: j,
                setNewChannelOverrides: L,
                latestOverrideId: _,
                messageNotifications: f,
            }),
        ],
    });
}
function F(e) {
    var t = R(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, w.Mn)("NotificationSettingsModal") ? (0, i.jsx)(T.Z, k({}, t)) : (0, i.jsx)(H, k({}, t));
}
