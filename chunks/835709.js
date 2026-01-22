n.d(t, { A: () => el }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(873298),
    c = n(506774),
    u = n(397927),
    d = n(264686),
    f = n(832712),
    p = n(100767),
    _ = n(600975),
    h = n(474774),
    m = n(568444),
    g = n(610136),
    E = n(552122),
    b = n(706047),
    y = n(970931),
    O = n(422891),
    A = n(81335),
    v = n(691451),
    S = n(524136),
    I = n(815807),
    T = n(195043),
    C = n(400492),
    N = n(902416),
    R = n(71393),
    w = n(803224),
    P = n(543465),
    D = n(287809),
    x = n(954571),
    L = n(449314),
    j = n(661191),
    M = n(113677),
    k = n(253932),
    U = n(594061),
    G = n(790174),
    V = n(301524),
    F = n(531525),
    B = n(652215),
    H = n(406535),
    Y = n(790782),
    W = n(985018),
    K = n(79220);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Q(e) {
    L.A.requestPermission((t) => {
        let n = t ? B.kCE.ENABLED : B.kCE.BLOCKED;
        d.default.setPermissionsState(n, e);
    });
}
function $(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: s } = e;
    return (0, r.jsx)(u.dOG, {
        label: t,
        checked: n,
        onChange: s,
        disabled: i,
        description: W.intl.format(W.t.OOiGCM, { onClick: a }),
    });
}
function J(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        s = i.useRef(null),
        o = (0, y.kB)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != s.current && s.current.stop(), (s.current = (0, C.Ak)(e));
        }, []),
        c = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), d.default.setDisabledSounds(r);
            },
            [t],
        );
    i.useEffect(() => () => {
        var e;
        null == (e = s.current) || e.stop();
    });
    let f = [
            {
                label: W.intl.string(W.t.pz71xC),
                sound: "message1",
                focusModeDisabled: o,
            },
            {
                label: W.intl.string(W.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: W.intl.string(W.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: W.intl.string(W.t.w4m945),
                sound: "mute",
            },
            {
                label: W.intl.string(W.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: W.intl.string(W.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: W.intl.string(W.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: W.intl.string(W.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: W.intl.string(W.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: W.intl.string(W.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: W.intl.string(W.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: W.intl.string(W.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: W.intl.string(W.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: W.intl.string(W.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: W.intl.string(W.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: W.intl.string(W.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: W.intl.string(W.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: W.intl.string(W.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: W.intl.string(W.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: W.intl.string(W.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: W.intl.string(W.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: W.intl.string(W.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: W.intl.string(W.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: W.intl.string(W.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != E.A.useHolidaySoundpack();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(u.nVY, {
                label: W.intl.string(W.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(b.A, {}) : null,
                    (0, r.jsx)(u.dOG, {
                        label: W.intl.string(W.t.lF5GGe),
                        description: W.intl.string(W.t["7oXUim"]),
                        checked: a && !n,
                        onChange: d.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(u.dOG, {
                        label: W.intl.string(W.t["2ZhCOd"]),
                        description: W.intl.string(W.t["+B0XLE"]),
                        checked: n,
                        onChange: d.default.toggleDisableAllSounds,
                    }),
                    f.map((e, i) => {
                        let { label: a, sound: s, focusModeDisabled: o } = e;
                        return (0, r.jsxs)(
                            u.BJc,
                            {
                                children: [
                                    i > 0 && (0, r.jsx)(u.cGx, { gap: 8 }),
                                    (0, r.jsx)(
                                        $,
                                        {
                                            label: a,
                                            disabled: n || !0 === o,
                                            onChange: (e) => c(s, e),
                                            onPreview: (e) => l(s, e),
                                            enabled: !n && !t.includes(s) && !0 !== o,
                                        },
                                        s,
                                    ),
                                    o
                                        ? (0, r.jsx)(u.po8, {
                                              messageType: u.YCn.WARNING,
                                              children: W.intl.string(W.t.cIRG0s),
                                          })
                                        : null,
                                ],
                            },
                            s,
                        );
                    }),
                ],
            }),
        }),
    });
}
function ee() {
    let e = (0, o.bG)([g.A], () => g.A.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = j.default.keys(e).map((t) => {
            let n = e[t];
            return {
                id: n.guildId,
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(T.x, {
              setting: F.H.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.nVY, {
                  label: W.intl.string(W.t.D9yVAH),
                  description: W.intl.string(W.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.l6P, {
                          label: W.intl.string(W.t.Q0PsXX),
                          value: t,
                          onSelectionChange: n,
                          options: a,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(T.x, {
                                        setting: F.H.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.dOG, {
                                            label: W.intl.string(W.t.u6dc5B),
                                            description: W.intl.string(W.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, U.TG)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    U.Sb.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(T.x, {
                                        setting: F.H.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.dOG, {
                                            label: W.intl.string(W.t.P8MG6q),
                                            description: W.intl.string(W.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, U.TG)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    U.Sb.INFREQUENT_USER_ACTION,
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
class et extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.nRU.ALL : B.nRU.NEVER;
        t !== B.nRU.NEVER ? Q("UserSettingsModal") : d.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e;
        d.default.setTTSType(t);
    }
    render() {
        let {
                desktopType: e,
                afkTimeout: t,
                disableUnreadBadge: n,
                taskbarFlash: i,
                disabledSounds: a,
                disableAllSounds: o,
                notifyMessagesInSelectedChannel: l,
                focusMode: c,
            } = this.props,
            d = M.A.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = s()
                .range(d, 11)
                .map((e) => ({
                    id: "".concat(e, "min"),
                    value: 60 * e,
                    label:
                        0 === e ? W.intl.string(W.t["0QN7cZ"]) : W.intl.formatToPlainString(W.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(G.A, {
            title: W.intl.string(W.t.HcoRu0),
            children: (0, r.jsxs)(u.BJc, {
                gap: 16,
                children: [
                    (0, r.jsx)(T.x, {
                        setting: F.H.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.dOG, {
                            label: W.intl.string(W.t["/0WCll"]),
                            checked: e !== B.nRU.NEVER && !c,
                            description: c ? W.intl.string(W.t.cIRG0s) : W.intl.string(W.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(er, {}),
                    (0, r.jsx)(T.x, {
                        setting: F.H.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.dOG, {
                            label: W.intl.string(W.t.VH8AIJ),
                            description: W.intl.string(W.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(T.x, {
                        setting: F.H.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.dOG, {
                            label: W.intl.string(W.t.xSmFQG),
                            description: W.intl.string(W.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsx)(eu, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(eh, {}),
                    (0, r.jsx)(ep, {}),
                    (0, r.jsx)(e_, {}),
                    (0, r.jsx)(ec, {}),
                    (0, r.jsxs)(T.x, {
                        setting: F.H.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.l6P, {
                                label: W.intl.string(W.t.TTvjd9),
                                description: W.intl.string(W.t.Xytv9C),
                                value: t,
                                onSelectionChange: k.cU.updateSetting,
                                options: f,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(u.cGx, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(u.cGx, { gap: 24 }),
                    (0, r.jsx)(J, {
                        disabledSounds: a,
                        disableAllSounds: o,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(V.A, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            z(this, "handleToggleShowUnreadBadge", () => {
                d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            z(this, "handleToggleShowFlash", () => {
                d.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            z(this, "renderTTS", () => {
                if (!p.$j) return null;
                let e = [
                    {
                        name: W.intl.string(W.t.B1AGeJ),
                        value: B.aVn.ALL_CHANNELS,
                    },
                    {
                        name: W.intl.string(W.t.uM2rNr),
                        value: B.aVn.SELECTED_CHANNEL,
                    },
                    {
                        name: W.intl.string(W.t.DYO5Oi),
                        value: B.aVn.NEVER,
                    },
                ];
                return (0, r.jsxs)(T.x, {
                    setting: F.H.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(u.z6M, {
                            label: W.intl.string(W.t.VIm5MO),
                            description: W.intl.string(W.t["+4dnA5"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, r.jsx)(u.cGx, { gap: 16 }),
                    ],
                });
            });
    }
}
let en = (0, _.C)({
    kind: "user",
    id: "2024-01_mention_on_all_messages",
    label: "Mention on all messages",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Increment mention count when receiving a message in a channel set to all messages",
            config: { enabled: !0 },
        },
    ],
});
function er() {
    let e = en.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, o.bG)([P.Ay], () => P.Ay.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(T.x, {
              setting: F.H.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.dOG, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      f.A.setAccountFlag(H.i.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function ei() {
    let [e, t] = i.useState(!1),
        n = (0, o.bG)([D.default], () => {
            var e;
            return null == (e = D.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, o.bG)([P.Ay], () => P.Ay.useNewNotifications);
    return a || n
        ? (0, r.jsx)(T.x, {
              setting: F.H.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(u.dOG, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? es(t) : ea(t)),
              }),
          })
        : null;
}
async function ea(e) {
    e(!0), await f.A.setAccountFlag(H.i.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function es(e) {
    e(!0),
        c.w.set("turnedOffNewNotifications", !0),
        x.default.track(B.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: R.A.getGuildsArray().filter(
                (e) => P.Ay.resolveGuildUnreadSetting(e) === Y.e.ONLY_MENTIONS,
            ).length,
        }),
        await f.A.setAccountFlag(H.i.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function eo(e) {
    let t = (0, y.kB)();
    return (0, r.jsx)(et, Z(q({}, e), { focusMode: t }));
}
function el() {
    let e = (0, o.cf)([w.A], () => ({
        disableUnreadBadge: w.A.getDisableUnreadBadge(),
        taskbarFlash: w.A.taskbarFlash,
        disabledSounds: w.A.getDisabledSounds(),
        disableAllSounds: w.A.getDisableAllSounds(),
        desktopType: w.A.getDesktopType(),
        ttsType: w.A.getTTSType(),
        notifyMessagesInSelectedChannel: w.A.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(eo, Z(q({}, e), { afkTimeout: k.cU.useSetting() }));
}
function ec() {
    let e = k.Zp.useSetting(),
        t = [
            {
                name: W.intl.string(W.t["9x/RtT"]),
                value: l.Tz.NOTIFICATIONS_ENABLED,
            },
            {
                name: W.intl.string(W.t.fJAbQd),
                value: l.Tz.ONLY_DMS,
            },
            {
                name: W.intl.string(W.t["xu+UDU"]),
                value: l.Tz.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, I.n4)(t.value, e);
        };
    return (0, r.jsxs)(T.x, {
        setting: F.H.NOTIFICATIONS_REACTIONS,
        children: [
            (0, r.jsx)(u.z6M, {
                label: W.intl.string(W.t.Rq0NFs),
                description: W.intl.string(W.t.oWF6eQ),
                options: t,
                onChange: (e) => n({ value: e }),
                value: e,
            }),
            (0, r.jsx)(u.cGx, { gap: 16 }),
        ],
    });
}
function eu() {
    let e = k.Bh.useSetting(),
        t = k.Yh.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.x, {
                setting: F.H.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.dOG, {
                    label: W.intl.string(W.t.wtk08S),
                    description: W.intl.string(W.t.rngMNx),
                    checked: e,
                    onChange: N.r,
                }),
            }),
            (0, r.jsx)(T.x, {
                setting: F.H.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.dOG, {
                    label: W.intl.string(W.t.pW4TMp),
                    description: W.intl.string(W.t["H+WYqZ"]),
                    checked: t,
                    onChange: m.E,
                }),
            }),
        ],
    });
}
function ed() {
    let e = k.oz.useSetting();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(u.dOG, {
            label: W.intl.string(W.t.hi4dSk),
            description: W.intl.string(W.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: S.O,
        }),
    });
}
function ef() {
    let e = k.NR.useSetting();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(u.dOG, {
            label: W.intl.string(W.t["uvIi/4"]),
            description: W.intl.string(W.t.E6O06k),
            checked: e,
            onChange: O.h,
        }),
    });
}
function ep() {
    let e = k.JV.useSetting();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(u.dOG, {
            label: W.intl.string(K.default["3TO4/r"]),
            description: W.intl.string(K.default.diGDe0),
            checked: e,
            onChange: h.l,
        }),
    });
}
function e_() {
    let e = k.T3.useSetting();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_PROFILE_UPDATES,
        children: (0, r.jsx)(u.dOG, {
            label: W.intl.string(W.t.VxBO2F),
            description: W.intl.string(W.t.F4VeBe),
            checked: e,
            onChange: A.T,
        }),
    });
}
function eh() {
    let e = k.Qr.useSetting();
    return (0, r.jsx)(T.x, {
        setting: F.H.NOTIFICATIONS_SERVER_TRENDING,
        children: (0, r.jsx)(u.dOG, {
            label: W.intl.string(W.t.Q3VWjI),
            description: W.intl.string(W.t.Wc1RcU),
            checked: e,
            onChange: v.k,
        }),
    });
}
