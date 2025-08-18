n.d(t, { default: () => H }), n(388685), n(539854);
var i = n(951288),
    s = n(647438),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(442837),
    c = n(692547),
    u = n(82659),
    h = n(481060),
    g = n(87051),
    m = n(798140),
    x = n(740504),
    p = n(933557),
    v = n(471445),
    j = n(11352),
    N = n(610617),
    S = n(777861),
    f = n(131704),
    b = n(592125),
    O = n(324067),
    E = n(650774),
    C = n(430824),
    Z = n(699516),
    _ = n(9156),
    y = n(594174),
    L = n(823379),
    T = n(63063),
    P = n(621600),
    M = n(423589),
    w = n(444899),
    I = n(74888),
    A = n(981631),
    G = n(969943),
    R = n(388032),
    U = n(385888);
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
function W(e) {
    let { label: t, channelId: n } = e,
        [s, l] = (0, d.Wu)([b.Z], () => {
            let e = b.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? b.Z.getChannel(e.parent_id) : null];
        });
    return null == s
        ? t
        : (0, i.jsx)(h.ZZ$, {
              icon: (0, v.KS)(s),
              title: t,
              subtitle: null == l ? void 0 : l.name,
          });
}
function V(e) {
    var t;
    let { muteConfig: n, muted: s, guild: l, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : G.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)(h.xJW, {
              className: U.largeSpacing,
              children: [
                  (0, i.jsx)(h.j7V, {
                      hideBorder: !0,
                      value: s,
                      onChange: (e) => r("muted", e, P.UE.muted(e)),
                      note: R.intl.string(R.t["8wbTQ0"]),
                      children: R.intl.format(R.t["J+7D9P"], { name: l.name }),
                  }),
                  s
                      ? (0, i.jsxs)("div", {
                            className: U.mutedContainer,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(h.vwX, {
                                            tag: "h3",
                                            className: U.muteUntilTitle,
                                            children: R.intl.string(R.t.Ztu2Ym),
                                        }),
                                        (0, i.jsx)(S.Z, {
                                            className: U.muteUntilText,
                                            muteConfig: n,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(h.q4e, {
                                    className: U.muteTimeSelector,
                                    options: (0, M.W9)(),
                                    value: a,
                                    onChange: (e) => {
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        g.Z.updateGuildNotificationSettings(
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
                  (0, i.jsx)(h.$i$, {}),
              ],
          });
}
function X(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: U.spacing,
        children: [
            (0, i.jsx)(h.xJW, {
                title: R.intl.string(R.t.lprV7e),
                className: U.largeSpacing,
                children: (0, i.jsx)(h.FXm, {
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, P.UE.notifications(e.value)),
                    options: [
                        {
                            name: R.intl.string(R.t["n/bTaW"]),
                            value: A.bL.ALL_MESSAGES,
                            desc: null != s && s >= A.qWG ? R.intl.string(R.t.Dh5p5u) : null,
                        },
                        {
                            name: R.intl.format(R.t.L2hmY2, {}),
                            value: A.bL.ONLY_MENTIONS,
                        },
                        {
                            name: R.intl.string(R.t.CtVGyc),
                            value: A.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(h.$i$, {}),
        ],
    });
}
function J(e) {
    let { guildId: t, onClose: n } = e;
    return j.Y.useExperiment({ location: "connected_notification_settings" }, { autoTrackExposure: !0 }).enabled
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(N.Z, {
                      guildId: t,
                      onClose: n,
                  }),
                  (0, i.jsx)(h.$i$, { className: U.customNotificationSoundsDivider }),
              ],
          })
        : null;
}
function Y(e) {
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
    return (0, i.jsxs)(h.xJW, {
        className: U.largeSpacing,
        children: [
            (0, i.jsx)(h.j7V, {
                onChange: (e) => s("suppress_everyone", e, P.UE.suppressEveryone(e)),
                value: t,
                children: R.intl.format(R.t.OWiWAg, {}),
            }),
            (0, i.jsx)(h.j7V, {
                onChange: (e) => s("suppress_roles", e, P.UE.suppressRoles(e)),
                value: n,
                children: R.intl.string(R.t["O/QdoK"]),
            }),
            (0, i.jsx)(h.j7V, {
                onChange: (e) => {
                    g.Z.updateGuildNotificationSettings(
                        d,
                        { notify_highlights: e ? A.gLR.DISABLED : A.gLR.ENABLED },
                        P.UE.highlights(!e),
                    );
                },
                value: o || l === A.gLR.DISABLED,
                disabled: o,
                note: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            children: R.intl.string(R.t["Vw/Xn5"]),
                        }),
                        (0, i.jsx)("div", {
                            className: U.highlightsLink,
                            children: (0, i.jsx)(h.eee, {
                                href: T.Z.getArticleURL(A.BhN.HIGHLIGHTS),
                                children: R.intl.string(R.t.PRBn9P),
                            }),
                        }),
                    ],
                }),
                children: (0, i.jsx)(i.Fragment, { children: R.intl.string(R.t.gPuteH) }),
            }),
            (0, i.jsx)(h.j7V, {
                value: r,
                onChange: (e) => s("mute_scheduled_events", e, P.UE.mutedEvents(e)),
                children: R.intl.string(R.t.ONG3Y2),
            }),
            (0, i.jsx)(h.j7V, {
                value: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, P.UE.mobilePush(e)),
                children: R.intl.string(R.t["h1DL6+"]),
            }),
        ],
    });
}
function B(e) {
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
                    label: (0, p.F6)(t, y.default, Z.Z),
                };
            })
            .value();
    return (0, i.jsxs)(h.xJW, {
        title: R.intl.string(R.t.O4TIvr),
        className: U.largeSpacing,
        children: [
            (0, i.jsx)(h.R94, {
                type: h.R94.Types.DESCRIPTION,
                className: U.smallSpacing,
                children: R.intl.string(R.t["2Y9ZfH"]),
            }),
            (0, i.jsx)(h.VcW, {
                value: A.lds,
                placeholder: R.intl.string(R.t["Z+oF8v"]),
                renderOptionLabel: (e) =>
                    (0, i.jsx)(W, {
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
function F(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: n,
            channels: l,
            categories: r,
            muted: a,
            setNewChannelOverrides: o,
            latestOverrideId: d,
            messageNotifications: u,
        } = e,
        g = s.useMemo(() => new Set([...t, ...(0, M.OD)(n)]), [n, t]),
        x = (0, h.dQu)(c.Z.unsafe_rawColors.GREEN_360).hex(),
        p = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        v = l
            .map((e) => {
                let { channel: t } = e;
                if (!g.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    w.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, m.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: u,
                        onDelete: p,
                        checkboxColor: x,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(L.lm);
    return (
        (0 === g.size || 0 === v.length) &&
            v.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: U.overridePlaceholder,
                        children: (0, i.jsx)(h.Text, {
                            className: U.overrideHeader,
                            variant: "text-sm/semibold",
                            children: R.intl.string(R.t["2Y9ZfH"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: U.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(h.X6q, {
                            variant: "eyebrow",
                            className: U.headerName,
                            children: R.intl.string(R.t.uShwWl),
                        }),
                        (0, i.jsx)(h.X6q, {
                            variant: "eyebrow",
                            className: U.headerOption,
                            children: R.intl.string(R.t.e29Z19),
                        }),
                        (0, i.jsx)(h.X6q, {
                            variant: "eyebrow",
                            className: U.headerOption,
                            children: R.intl.string(R.t.DD6gNT),
                        }),
                        (0, i.jsx)(h.X6q, {
                            variant: "eyebrow",
                            className: U.headerOption,
                            children: R.intl.string(R.t.CtVGyc),
                        }),
                        (0, i.jsx)(h.X6q, {
                            variant: "eyebrow",
                            className: U.headerOption,
                            children: (0, i.jsx)(h.ua7, {
                                text: R.intl.string(R.t["8wbTQ0"]),
                                position: "bottom",
                                children: (e) => {
                                    var t, n;
                                    return (0, i.jsx)(
                                        "span",
                                        ((t = k({}, e)),
                                        (n = n = { children: R.intl.string(R.t.sWmtIy) }),
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
                v,
            ],
        })
    );
}
function z(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, d.e7)([O.Z], () => O.Z.getCategories(t)),
        a = (0, d.e7)([C.Z], () => C.Z.getGuild(t)),
        o = (0, d.e7)([E.Z], () => E.Z.getMemberCount(t)),
        {
            suppressEveryone: c,
            suppressRoles: h,
            muteEvents: m,
            mobilePush: p,
            muted: v,
            muteConfig: j,
            messageNotifications: N,
            channelOverrides: S,
            notifyHighlights: b,
        } = (0, d.cj)([_.ZP], () => ({
            suppressEveryone: _.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: _.ZP.isSuppressRolesEnabled(t),
            muteEvents: _.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: _.ZP.isMobilePushEnabled(t),
            muted: _.ZP.isMuted(t),
            muteConfig: _.ZP.getMuteConfig(t),
            messageNotifications: _.ZP.getMessageNotifications(t),
            channelOverrides: _.ZP.getChannelOverrides(t),
            notifyHighlights: _.ZP.getNotifyHighlights(t),
        })),
        [Z, y] = s.useState(new Set()),
        [L, T] = s.useState(null),
        P = s.useMemo(
            () =>
                (0, x.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, f.r8)(t) || t === A.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        M = (e, n, i) => {
            g.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(u.Modal, {
        title: R.intl.string(R.t.h850Sk),
        actions: [
            {
                text: R.intl.string(R.t.i4jeWV),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: l,
        children: [
            (0, i.jsx)(V, {
                muteConfig: j,
                muted: v,
                guild: a,
                handleCheckboxChange: M,
            }),
            (0, i.jsx)(X, {
                muted: v,
                messageNotifications: N,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    g.Z.updateGuildNotificationSettings(t, { [e]: n.value }, i);
                },
            }),
            (0, i.jsx)(J, {
                guildId: t,
                onClose: n,
            }),
            (0, i.jsx)(Y, {
                suppressEveryone: c,
                suppressRoles: h,
                handleCheckboxChange: M,
                notifyHighlights: b,
                muteEvents: m,
                mobilePush: p,
                muted: v,
                guildId: t,
            }),
            (0, i.jsx)(B, {
                setNewChannelOverrides: y,
                newChannelOverrides: Z,
                setLatestOverrideId: T,
                channels: P,
                categories: r,
            }),
            (0, i.jsx)(F, {
                newChannelOverrides: Z,
                channelOverrides: S,
                channels: P,
                categories: r,
                muted: v,
                setNewChannelOverrides: y,
                latestOverrideId: L,
                messageNotifications: N,
            }),
        ],
    });
}
function H(e) {
    var t = D(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, M.Mn)("NotificationSettingsModal") ? (0, i.jsx)(I.Z, k({}, t)) : (0, i.jsx)(z, k({}, t));
}
