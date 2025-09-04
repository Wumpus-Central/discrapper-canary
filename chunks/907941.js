n.d(t, { default: () => J }), n(388685), n(539854);
var i = n(951288),
    s = n(647438),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(442837),
    c = n(692547),
    u = n(82659),
    h = n(755721),
    g = n(481060),
    m = n(87051),
    x = n(798140),
    v = n(740504),
    p = n(933557),
    j = n(471445),
    N = n(11352),
    S = n(610617),
    f = n(777861),
    b = n(131704),
    O = n(592125),
    E = n(324067),
    C = n(650774),
    Z = n(430824),
    _ = n(699516),
    L = n(9156),
    y = n(594174),
    T = n(823379),
    P = n(63063),
    M = n(621600),
    w = n(423589),
    I = n(444899),
    A = n(74888),
    G = n(981631),
    R = n(969943),
    U = n(388032),
    D = n(385888);
function k() {
    return (k =
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
function W(e) {
    let { label: t, channelId: n } = e,
        [s, l] = (0, d.Wu)([O.Z], () => {
            let e = O.Z.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? O.Z.getChannel(e.parent_id) : null];
        });
    return null == s
        ? t
        : (0, i.jsx)(g.ZZ$, {
              icon: (0, j.KS)(s),
              title: t,
              subtitle: null == l ? void 0 : l.name,
          });
}
function z(e) {
    var t;
    let { muteConfig: n, muted: s, guild: l, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : R.Oe.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)(g.xJW, {
              className: D.largeSpacing,
              children: [
                  (0, i.jsx)(g.j7V, {
                      hideBorder: !0,
                      value: s,
                      onChange: (e) => r("muted", e, M.UE.muted(e)),
                      note: U.intl.string(U.t["8wbTQ0"]),
                      children: U.intl.format(U.t["J+7D9P"], { name: l.name }),
                  }),
                  s
                      ? (0, i.jsxs)("div", {
                            className: D.mutedContainer,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(g.vwX, {
                                            tag: "h3",
                                            className: D.muteUntilTitle,
                                            children: U.intl.string(U.t.Ztu2Ym),
                                        }),
                                        (0, i.jsx)(f.Z, {
                                            className: D.muteUntilText,
                                            muteConfig: n,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.q4e, {
                                    className: D.muteTimeSelector,
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
                                            M.ZB.Muted,
                                        );
                                    },
                                }),
                            ],
                        })
                      : null,
                  (0, i.jsx)(g.$i$, {}),
              ],
          });
}
function Y(e) {
    let { muted: t, messageNotifications: n, memberCount: s, handleRadioChange: l } = e;
    return (0, i.jsxs)("div", {
        className: D.spacing,
        children: [
            (0, i.jsx)(g.xJW, {
                title: U.intl.string(U.t.lprV7e),
                className: D.largeSpacing,
                children: (0, i.jsx)(h.Gu, {
                    disabled: t,
                    value: n,
                    onChange: (e) => l("message_notifications", e, M.UE.notifications(e.value)),
                    options: [
                        {
                            name: U.intl.string(U.t["n/bTaW"]),
                            value: G.bL.ALL_MESSAGES,
                            desc: null != s && s >= G.qWG ? U.intl.string(U.t.Dh5p5u) : null,
                        },
                        {
                            name: U.intl.format(U.t.L2hmY2, {}),
                            value: G.bL.ONLY_MENTIONS,
                        },
                        {
                            name: U.intl.string(U.t.CtVGyc),
                            value: G.bL.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(g.$i$, {}),
        ],
    });
}
function B(e) {
    let { guildId: t, onClose: n } = e;
    return N.Y.useExperiment({ location: "connected_notification_settings" }, { autoTrackExposure: !0 }).enabled
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.Z, {
                      guildId: t,
                      onClose: n,
                  }),
                  (0, i.jsx)(g.$i$, { className: D.customNotificationSoundsDivider }),
              ],
          })
        : null;
}
function F(e) {
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
    return (0, i.jsxs)(g.xJW, {
        className: D.largeSpacing,
        children: [
            (0, i.jsx)(g.j7V, {
                onChange: (e) => s("suppress_everyone", e, M.UE.suppressEveryone(e)),
                value: t,
                children: U.intl.format(U.t.OWiWAg, {}),
            }),
            (0, i.jsx)(g.j7V, {
                onChange: (e) => s("suppress_roles", e, M.UE.suppressRoles(e)),
                value: n,
                children: U.intl.string(U.t["O/QdoK"]),
            }),
            (0, i.jsx)(g.j7V, {
                onChange: (e) => {
                    m.Z.updateGuildNotificationSettings(
                        d,
                        { notify_highlights: e ? G.gLR.DISABLED : G.gLR.ENABLED },
                        M.UE.highlights(!e),
                    );
                },
                value: o || l === G.gLR.DISABLED,
                disabled: o,
                note: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            children: U.intl.string(U.t["Vw/Xn5"]),
                        }),
                        (0, i.jsx)("div", {
                            className: D.highlightsLink,
                            children: (0, i.jsx)(g.eee, {
                                href: P.Z.getArticleURL(G.BhN.HIGHLIGHTS),
                                children: U.intl.string(U.t.PRBn9P),
                            }),
                        }),
                    ],
                }),
                children: (0, i.jsx)(i.Fragment, { children: U.intl.string(U.t.gPuteH) }),
            }),
            (0, i.jsx)(g.j7V, {
                value: r,
                onChange: (e) => s("mute_scheduled_events", e, M.UE.mutedEvents(e)),
                children: U.intl.string(U.t.ONG3Y2),
            }),
            (0, i.jsx)(g.j7V, {
                value: !o && a,
                disabled: o,
                onChange: (e) => s("mobile_push", e, M.UE.mobilePush(e)),
                children: U.intl.string(U.t["h1DL6+"]),
            }),
        ],
    });
}
function q(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: s, channels: l, categories: a } = e,
        o = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== G.d4z.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, p.F6)(t, y.default, _.Z),
                };
            })
            .value();
    return (0, i.jsxs)(g.xJW, {
        title: U.intl.string(U.t.O4TIvr),
        className: D.largeSpacing,
        children: [
            (0, i.jsx)(g.R94, {
                type: g.R94.Types.DESCRIPTION,
                className: D.smallSpacing,
                children: U.intl.string(U.t["2Y9ZfH"]),
            }),
            (0, i.jsx)(g.VcW, {
                value: G.lds,
                placeholder: U.intl.string(U.t["Z+oF8v"]),
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
function H(e) {
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
        h = s.useMemo(() => new Set([...t, ...(0, w.OD)(n)]), [n, t]),
        m = (0, g.dQu)(c.Z.unsafe_rawColors.GREEN_360).hex(),
        v = (e) => {
            let n = new Set(t);
            n.delete(e), o(n);
        },
        p = l
            .map((e) => {
                let { channel: t } = e;
                if (!h.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let s = n[t.id];
                return (0, i.jsx)(
                    I.f,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != s && (0, x.m$)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: u,
                        onDelete: v,
                        checkboxColor: m,
                        autoFocus: t.id === d,
                    },
                    t.id,
                );
            })
            .filter(T.lm);
    return (
        (0 === h.size || 0 === p.length) &&
            p.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: D.overridePlaceholder,
                        children: (0, i.jsx)(g.Text, {
                            className: D.overrideHeader,
                            variant: "text-sm/semibold",
                            children: U.intl.string(U.t["2Y9ZfH"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: D.channelNotificationHeaders,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: D.headerName,
                            children: U.intl.string(U.t.uShwWl),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: D.headerOption,
                            children: U.intl.string(U.t.e29Z19),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: D.headerOption,
                            children: U.intl.string(U.t.DD6gNT),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: D.headerOption,
                            children: U.intl.string(U.t.CtVGyc),
                        }),
                        (0, i.jsx)(g.X6q, {
                            variant: "eyebrow",
                            className: D.headerOption,
                            children: (0, i.jsx)(g.ua7, {
                                text: U.intl.string(U.t["8wbTQ0"]),
                                position: "bottom",
                                children: (e) => {
                                    var t, n;
                                    return (0, i.jsx)(
                                        "span",
                                        ((t = V({}, e)),
                                        (n = n = { children: U.intl.string(U.t.sWmtIy) }),
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
                p,
            ],
        })
    );
}
function X(e) {
    let { guildId: t, onClose: n, transitionState: l } = e,
        r = (0, d.e7)([E.Z], () => E.Z.getCategories(t)),
        a = (0, d.e7)([Z.Z], () => Z.Z.getGuild(t)),
        o = (0, d.e7)([C.Z], () => C.Z.getMemberCount(t)),
        {
            suppressEveryone: c,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: x,
            muted: p,
            muteConfig: j,
            messageNotifications: N,
            channelOverrides: S,
            notifyHighlights: f,
        } = (0, d.cj)([L.ZP], () => ({
            suppressEveryone: L.ZP.isSuppressEveryoneEnabled(t),
            suppressRoles: L.ZP.isSuppressRolesEnabled(t),
            muteEvents: L.ZP.isMuteScheduledEventsEnabled(t),
            mobilePush: L.ZP.isMobilePushEnabled(t),
            muted: L.ZP.isMuted(t),
            muteConfig: L.ZP.getMuteConfig(t),
            messageNotifications: L.ZP.getMessageNotifications(t),
            channelOverrides: L.ZP.getChannelOverrides(t),
            notifyHighlights: L.ZP.getNotifyHighlights(t),
        })),
        [O, _] = s.useState(new Set()),
        [y, T] = s.useState(null),
        P = s.useMemo(
            () =>
                (0, v.Z)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, b.r8)(t) || t === G.d4z.GUILD_CATEGORY;
                }),
            [r],
        ),
        M = (e, n, i) => {
            m.Z.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(u.Modal, {
        title: U.intl.string(U.t.h850Sk),
        actions: [
            {
                text: U.intl.string(U.t.i4jeWV),
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
                handleCheckboxChange: M,
            }),
            (0, i.jsx)(Y, {
                muted: p,
                messageNotifications: N,
                memberCount: o,
                handleRadioChange: (e, n, i) => {
                    m.Z.updateGuildNotificationSettings(t, { [e]: n.value }, i);
                },
            }),
            (0, i.jsx)(B, {
                guildId: t,
                onClose: n,
            }),
            (0, i.jsx)(F, {
                suppressEveryone: c,
                suppressRoles: h,
                handleCheckboxChange: M,
                notifyHighlights: f,
                muteEvents: g,
                mobilePush: x,
                muted: p,
                guildId: t,
            }),
            (0, i.jsx)(q, {
                setNewChannelOverrides: _,
                newChannelOverrides: O,
                setLatestOverrideId: T,
                channels: P,
                categories: r,
            }),
            (0, i.jsx)(H, {
                newChannelOverrides: O,
                channelOverrides: S,
                channels: P,
                categories: r,
                muted: p,
                setNewChannelOverrides: _,
                latestOverrideId: y,
                messageNotifications: N,
            }),
        ],
    });
}
function J(e) {
    var t = k(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, w.Mn)("NotificationSettingsModal") ? (0, i.jsx)(A.Z, V({}, t)) : (0, i.jsx)(X, V({}, t));
}
