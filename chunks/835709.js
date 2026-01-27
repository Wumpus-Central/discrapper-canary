n.d(t, {
    A: () => er,
}),
    n(321073),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(873298),
    c = n(506774),
    d = n(397927),
    u = n(264686),
    g = n(832712),
    h = n(100767),
    x = n(600975),
    A = n(474774),
    p = n(568444),
    m = n(610136),
    j = n(552122),
    b = n(706047),
    O = n(970931),
    S = n(422891),
    E = n(81335),
    f = n(691451),
    v = n(524136),
    T = n(815807),
    C = n(195043),
    y = n(400492),
    N = n(902416),
    I = n(71393),
    _ = n(803224),
    P = n(543465),
    G = n(287809),
    R = n(954571),
    D = n(449314),
    L = n(661191),
    k = n(113677),
    w = n(253932),
    V = n(594061),
    M = n(790174),
    U = n(301524),
    H = n(531525),
    Y = n(652215),
    B = n(406535),
    F = n(790782),
    z = n(985018),
    W = n(79220);

function K(e, t, n) {
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

function J(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}

function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function X(e) {
    let { label: t, enabled: n, disabled: s, onPreview: l, onChange: r } = e;
    return (0, i.jsx)(d.dOG, {
        label: t,
        checked: n,
        onChange: r,
        disabled: s,
        description: z.intl.format(z.t.OOiGCM, {
            onClick: l,
        }),
    });
}

function q(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: l } = e,
        r = s.useRef(null),
        a = (0, O.kB)(),
        o = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != r.current && r.current.stop(), (r.current = (0, y.Ak)(e));
        }, []),
        c = s.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                n || i.push(e), u.default.setDisabledSounds(i);
            },
            [t],
        );
    s.useEffect(() => () => {
        var e;
        null == (e = r.current) || e.stop();
    });
    let g = [
            {
                label: z.intl.string(z.t.pz71xC),
                sound: "message1",
                focusModeDisabled: a,
            },
            {
                label: z.intl.string(z.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: z.intl.string(z.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: z.intl.string(z.t.w4m945),
                sound: "mute",
            },
            {
                label: z.intl.string(z.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: z.intl.string(z.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: z.intl.string(z.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: z.intl.string(z.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: z.intl.string(z.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: z.intl.string(z.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: z.intl.string(z.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: z.intl.string(z.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: z.intl.string(z.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: z.intl.string(z.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: z.intl.string(z.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: z.intl.string(z.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: z.intl.string(z.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: z.intl.string(z.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: z.intl.string(z.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: z.intl.string(z.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: z.intl.string(z.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: z.intl.string(z.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: z.intl.string(z.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: z.intl.string(z.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        h = null != j.A.useHolidaySoundpack();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsx)("div", {
            children: (0, i.jsxs)(d.nVY, {
                label: z.intl.string(z.t.MKWyKc),
                children: [
                    h ? (0, i.jsx)(b.A, {}) : null,
                    (0, i.jsx)(d.dOG, {
                        label: z.intl.string(z.t.lF5GGe),
                        description: z.intl.string(z.t["7oXUim"]),
                        checked: l && !n,
                        onChange: u.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, i.jsx)(d.dOG, {
                        label: z.intl.string(z.t["2ZhCOd"]),
                        description: z.intl.string(z.t["+B0XLE"]),
                        checked: n,
                        onChange: u.default.toggleDisableAllSounds,
                    }),
                    g.map((e, s) => {
                        let { label: l, sound: r, focusModeDisabled: a } = e;
                        return (0, i.jsxs)(
                            d.BJc,
                            {
                                children: [
                                    s > 0 &&
                                        (0, i.jsx)(d.cGx, {
                                            gap: 8,
                                        }),
                                    (0, i.jsx)(
                                        X,
                                        {
                                            label: l,
                                            disabled: n || !0 === a,
                                            onChange: (e) => c(r, e),
                                            onPreview: (e) => o(r, e),
                                            enabled: !n && !t.includes(r) && !0 !== a,
                                        },
                                        r,
                                    ),
                                    a
                                        ? (0, i.jsx)(d.po8, {
                                              messageType: d.YCn.WARNING,
                                              children: z.intl.string(z.t.cIRG0s),
                                          })
                                        : null,
                                ],
                            },
                            r,
                        );
                    }),
                ],
            }),
        }),
    });
}

function Z() {
    let e = (0, a.bG)([m.A], () => m.A.getGuildAlertSettings()),
        [t, n] = s.useState(null),
        l = L.default.keys(e).map((t) => {
            let n = e[t];
            return {
                id: n.guildId,
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsx)(C.x, {
              setting: H.H.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, i.jsxs)(d.nVY, {
                  label: z.intl.string(z.t.D9yVAH),
                  description: z.intl.string(z.t["0PhAOH"]),
                  children: [
                      (0, i.jsx)(d.l6P, {
                          label: z.intl.string(z.t.Q0PsXX),
                          value: t,
                          onSelectionChange: n,
                          options: l,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      null != t
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(C.x, {
                                        setting: H.H.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, i.jsx)(d.dOG, {
                                            label: z.intl.string(z.t.u6dc5B),
                                            description: z.intl.string(z.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, V.TG)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    V.Sb.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(C.x, {
                                        setting: H.H.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, i.jsx)(d.dOG, {
                                            label: z.intl.string(z.t.P8MG6q),
                                            description: z.intl.string(z.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, V.TG)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    V.Sb.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          });
}
class $ extends s.PureComponent {
    handleDesktopChange(e) {
        let t = e ? Y.nRU.ALL : Y.nRU.NEVER;
        if (t !== Y.nRU.NEVER)
            D.A.requestPermission((e) => {
                let t = e ? Y.kCE.ENABLED : Y.kCE.BLOCKED;
                u.default.setPermissionsState(t, "UserSettingsModal");
            });
        else u.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        u.default.setTTSType(e);
    }
    render() {
        let {
                desktopType: e,
                afkTimeout: t,
                disableUnreadBadge: n,
                taskbarFlash: s,
                disabledSounds: l,
                disableAllSounds: a,
                notifyMessagesInSelectedChannel: o,
                focusMode: c,
            } = this.props,
            u = k.A.getCurrentConfig({
                location: "Messages",
            }).enabled,
            g = r()
                .range(u || 0 === t ? 0 : 1, 11)
                .map((e) => ({
                    id: "".concat(e, "min"),
                    value: 60 * e,
                    label:
                        0 === e
                            ? z.intl.string(z.t["0QN7cZ"])
                            : z.intl.formatToPlainString(z.t.iXLF9W, {
                                  minutes: e,
                              }),
                }));
        return (0, i.jsx)(M.A, {
            title: z.intl.string(z.t.HcoRu0),
            children: (0, i.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, i.jsx)(C.x, {
                        setting: H.H.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, i.jsx)(d.dOG, {
                            label: z.intl.string(z.t["/0WCll"]),
                            checked: e !== Y.nRU.NEVER && !c,
                            description: c ? z.intl.string(z.t.cIRG0s) : z.intl.string(z.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, i.jsx)(et, {}),
                    (0, i.jsx)(C.x, {
                        setting: H.H.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, i.jsx)(d.dOG, {
                            label: z.intl.string(z.t.VH8AIJ),
                            description: z.intl.string(z.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, i.jsx)(C.x, {
                        setting: H.H.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, i.jsx)(d.dOG, {
                            label: z.intl.string(z.t.xSmFQG),
                            description: z.intl.string(z.t.bd4j4x),
                            checked: s,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, i.jsx)(en, {}),
                    (0, i.jsx)(eo, {}),
                    (0, i.jsx)(ec, {}),
                    (0, i.jsx)(ed, {}),
                    (0, i.jsx)(eh, {}),
                    (0, i.jsx)(eu, {}),
                    (0, i.jsx)(eg, {}),
                    (0, i.jsx)(ea, {}),
                    (0, i.jsxs)(C.x, {
                        setting: H.H.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, i.jsx)(d.l6P, {
                                label: z.intl.string(z.t.TTvjd9),
                                description: z.intl.string(z.t.Xytv9C),
                                value: t,
                                onSelectionChange: w.cU.updateSetting,
                                options: g,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, i.jsx)(d.cGx, {
                                gap: 16,
                            }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, i.jsx)(Z, {}),
                    (0, i.jsx)(d.cGx, {
                        gap: 24,
                    }),
                    (0, i.jsx)(q, {
                        disabledSounds: l,
                        disableAllSounds: a,
                        notifyMessagesInSelectedChannel: o,
                    }),
                    (0, i.jsx)(U.A, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "handleToggleShowUnreadBadge", () => {
                u.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            K(this, "handleToggleShowFlash", () => {
                u.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            K(this, "renderTTS", () => {
                if (!h.$j) return null;
                let e = [
                    {
                        name: z.intl.string(z.t.B1AGeJ),
                        value: Y.aVn.ALL_CHANNELS,
                    },
                    {
                        name: z.intl.string(z.t.uM2rNr),
                        value: Y.aVn.SELECTED_CHANNEL,
                    },
                    {
                        name: z.intl.string(z.t.DYO5Oi),
                        value: Y.aVn.NEVER,
                    },
                ];
                return (0, i.jsxs)(C.x, {
                    setting: H.H.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsx)(d.z6M, {
                            label: z.intl.string(z.t.VIm5MO),
                            description: z.intl.string(z.t["+4dnA5"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, i.jsx)(d.cGx, {
                            gap: 16,
                        }),
                    ],
                });
            });
    }
}
let ee = (0, x.C)({
    kind: "user",
    id: "2024-01_mention_on_all_messages",
    label: "Mention on all messages",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Increment mention count when receiving a message in a channel set to all messages",
            config: {
                enabled: !0,
            },
        },
    ],
});

function et() {
    let e = ee.useExperiment(
            {
                location: "settings",
            },
            {
                autoTrackExposure: !1,
            },
        ).enabled,
        t = (0, a.bG)([P.Ay], () => P.Ay.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(C.x, {
              setting: H.H.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(d.dOG, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      g.A.setAccountFlag(B.i.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}

function en() {
    let [e, t] = s.useState(!1),
        n = (0, a.bG)([G.default], () => {
            var e;
            return null == (e = G.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        l = (0, a.bG)([P.Ay], () => P.Ay.useNewNotifications);
    return l || n
        ? (0, i.jsx)(C.x, {
              setting: H.H.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, i.jsx)(d.dOG, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: l,
                  disabled: e,
                  onChange: () => (l ? es(t) : ei(t)),
              }),
          })
        : null;
}
async function ei(e) {
    e(!0), await g.A.setAccountFlag(B.i.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function es(e) {
    e(!0),
        c.w.set("turnedOffNewNotifications", !0),
        R.default.track(Y.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: I.A.getGuildsArray().filter(
                (e) => P.Ay.resolveGuildUnreadSetting(e) === F.e.ONLY_MENTIONS,
            ).length,
        }),
        await g.A.setAccountFlag(B.i.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}

function el(e) {
    let t = (0, O.kB)();
    return (0, i.jsx)(
        $,
        Q(J({}, e), {
            focusMode: t,
        }),
    );
}

function er() {
    let e = (0, a.cf)([_.A], () => ({
        disableUnreadBadge: _.A.getDisableUnreadBadge(),
        taskbarFlash: _.A.taskbarFlash,
        disabledSounds: _.A.getDisabledSounds(),
        disableAllSounds: _.A.getDisableAllSounds(),
        desktopType: _.A.getDesktopType(),
        ttsType: _.A.getTTSType(),
        notifyMessagesInSelectedChannel: _.A.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, i.jsx)(
        el,
        Q(J({}, e), {
            afkTimeout: w.cU.useSetting(),
        }),
    );
}

function ea() {
    let e = w.Zp.useSetting(),
        t = [
            {
                name: z.intl.string(z.t["9x/RtT"]),
                value: o.Tz.NOTIFICATIONS_ENABLED,
            },
            {
                name: z.intl.string(z.t.fJAbQd),
                value: o.Tz.ONLY_DMS,
            },
            {
                name: z.intl.string(z.t["xu+UDU"]),
                value: o.Tz.NOTIFICATIONS_DISABLED,
            },
        ];
    return (0, i.jsxs)(C.x, {
        setting: H.H.NOTIFICATIONS_REACTIONS,
        children: [
            (0, i.jsx)(d.z6M, {
                label: z.intl.string(z.t.Rq0NFs),
                description: z.intl.string(z.t.oWF6eQ),
                options: t,
                onChange: (t) => {
                    var n;
                    return (
                        (n = {
                            value: t,
                        }),
                        void (0, T.n4)(n.value, e)
                    );
                },
                value: e,
            }),
            (0, i.jsx)(d.cGx, {
                gap: 16,
            }),
        ],
    });
}

function eo() {
    let e = w.Bh.useSetting(),
        t = w.Yh.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.x, {
                setting: H.H.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.wtk08S),
                    description: z.intl.string(z.t.rngMNx),
                    checked: e,
                    onChange: N.r,
                }),
            }),
            (0, i.jsx)(C.x, {
                setting: H.H.NOTIFICATIONS_GO_LIVE,
                children: (0, i.jsx)(d.dOG, {
                    label: z.intl.string(z.t.pW4TMp),
                    description: z.intl.string(z.t["H+WYqZ"]),
                    checked: t,
                    onChange: p.E,
                }),
            }),
        ],
    });
}

function ec() {
    let e = w.oz.useSetting();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, i.jsx)(d.dOG, {
            label: z.intl.string(z.t.hi4dSk),
            description: z.intl.string(z.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: v.O,
        }),
    });
}

function ed() {
    let e = w.NR.useSetting();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, i.jsx)(d.dOG, {
            label: z.intl.string(z.t["uvIi/4"]),
            description: z.intl.string(z.t.E6O06k),
            checked: e,
            onChange: S.h,
        }),
    });
}

function eu() {
    let e = w.JV.useSetting();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_GAME_UPDATE,
        children: (0, i.jsx)(d.dOG, {
            label: z.intl.string(W.default["3TO4/r"]),
            description: z.intl.string(W.default.diGDe0),
            checked: e,
            onChange: A.l,
        }),
    });
}

function eg() {
    let e = w.T3.useSetting();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_PROFILE_UPDATES,
        children: (0, i.jsx)(d.dOG, {
            label: z.intl.string(z.t.VxBO2F),
            description: z.intl.string(z.t.F4VeBe),
            checked: e,
            onChange: E.T,
        }),
    });
}

function eh() {
    let e = w.Qr.useSetting();
    return (0, i.jsx)(C.x, {
        setting: H.H.NOTIFICATIONS_SERVER_TRENDING,
        children: (0, i.jsx)(d.dOG, {
            label: z.intl.string(z.t.Q3VWjI),
            description: z.intl.string(z.t.Wc1RcU),
            checked: e,
            onChange: f.k,
        }),
    });
}
