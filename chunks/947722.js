(i.d(t, { default: () => em }), i(321073));
var n = i(477900),
    l = i(582128),
    s = i(435558),
    r = i.n(s),
    a = i(536637),
    o = i.n(a),
    d = i(17928),
    h = i(661531),
    c = i(194667),
    u = i(444550),
    g = i(189213),
    m = i(331322),
    N = i(193249),
    p = i(691885),
    A = i(404778),
    f = i(144228),
    S = i(611677),
    x = i(452027),
    b = i(28863),
    j = i(834730),
    v = i(602853),
    _ = i(297264),
    E = i(866665),
    L = i(832712),
    C = i(544743),
    O = i(999903),
    G = i(47167),
    M = i(713654),
    y = i(585510),
    w = i(610136),
    T = i(594061),
    I = i(95701),
    D = i(734057),
    R = i(769765),
    U = i(498642),
    k = i(71393),
    P = i(994500),
    Y = i(543465),
    H = i(287809),
    B = i(403362),
    F = i(975571),
    V = i(477427),
    Z = i(769591),
    W = i(77692),
    z = i(568385),
    J = i(993077),
    Q = i(414079),
    K = i(235986),
    $ = i(393432),
    q = i(652215),
    X = i(790782),
    ee = i(355097),
    et = i(105292),
    ei = i(858177);
function en(e, t, i) {
    let n = Y.Ay.getChannelIdFlags(e.getGuildId(), e.id);
    return t === q.orn.NULL
        ? (0, $.PW)(n)
        : (0, $.mD)(n, i || t === q.orn.ALL_MESSAGES ? ee.vv.UNREADS_ALL_MESSAGES : ee.vv.UNREADS_ONLY_MENTIONS);
}
class el extends l.PureComponent {
    _timeout;
    contentDomRef = l.createRef();
    state = { highlight: !1 };
    highlight() {
        this.setState({ highlight: !0 }, () => {
            (null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1e3)));
        });
    }
    unhighlight = () => {
        this.setState({ highlight: !1 });
    };
    componentDidMount() {
        this.props.autoFocus && (this.contentDomRef.current?.scrollIntoView({ behavior: "smooth" }), this.highlight());
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, t, i, n) {
        let { channel: l } = this.props,
            s = l.getGuildId();
        null != s &&
            L.A.updateChannelOverrideSettings({
                guildId: s,
                channelId: l.id,
                settings: { message_notifications: e, muted: t ?? !1, ...(null != n ? { flags: n } : {}) },
                label: i,
            });
    }
    getUnreadFlags(e, t) {
        let { channel: i, showHybridOption: n } = this.props;
        return n ? en(i, e, t) : void 0;
    }
    handleRadioChange(e, t) {
        this.setMessageNotification(e, void 0, V.G_.notifications(e), this.getUnreadFlags(e, t));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? q.orn.NULL, e, V.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t, useNewNotifications: i } = this.props;
        (this.setMessageNotification(q.orn.NULL, !1, V.fd.OverrideDeleted, i ? en(t, q.orn.NULL, !1) : void 0),
            null != e && e(t.id));
    };
    getChannelNameForLabel() {
        return (0, G.m1)(this.props.channel, H.default, P.A);
    }
    getOverrideLabelId(e) {
        return `channel-override-${this.props.channel.id}-${e}`;
    }
    renderMessageNotificationsRadioOption(e) {
        let t,
            i,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                messageNotifications: s,
                guildMuted: r,
                guildMessageNotifications: a,
                showHybridOption: o,
                unreadSetting: d,
            } = this.props,
            h = s === e;
        ((null == s || s === q.orn.NULL) && e === a && (h = !0),
            o && e === q.orn.ONLY_MENTIONS && (h = h && (d === X.e.ALL_MESSAGES) === l));
        let c = this.getChannelNameForLabel();
        l
            ? ((t = et.intl.formatToPlainString(et.t["VGLEq/"], { channelName: c })), (i = "hybrid"))
            : e === q.orn.ALL_MESSAGES
              ? ((t = et.intl.formatToPlainString(et.t.TjtVTh, { channelName: c })), (i = "all"))
              : e === q.orn.ONLY_MENTIONS
                ? ((t = et.intl.formatToPlainString(et.t["3oPQOG"], { channelName: c })), (i = "mentions"))
                : ((t = et.intl.formatToPlainString(et.t.BvQ24S, { channelName: c })), (i = "nothing"));
        let u = this.getOverrideLabelId(i);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(W.s, { id: u, children: t }),
                (0, n.jsx)(z.J, {
                    checked: !r && h,
                    disabled: r,
                    labeledBy: u,
                    onChange: this.handleRadioChange.bind(this, e, l),
                }),
            ],
        });
    }
    renderName() {
        let e,
            t,
            { channel: i } = this.props;
        null != i.parent_id && (e = D.A.getChannel(i.parent_id));
        let l = (0, M.gU)(i);
        if (i.type === q.rbe.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
            let e = R.A.getCategories(i.guild_id);
            t = et.intl.formatToPlainString(et.t["2KzH89"], { num: null != e[i.id] ? e[i.id].length : 0 });
        } else
            t =
                null != e
                    ? et.intl.formatToPlainString(et.t.L1zJgb, { categoryName: (0, G.m1)(e, H.default, P.A) })
                    : et.intl.string(et.t.uIzfCE);
        return (0, n.jsxs)(K.A, {
            grow: 1,
            className: ei.VW,
            role: "cell",
            children: [
                null != l ? (0, n.jsx)(l, { className: ei.Kk }) : null,
                (0, n.jsxs)("div", {
                    className: ei.aT,
                    children: [
                        (0, n.jsx)(j.E, {
                            variant: "text-md/semibold",
                            className: ei.HA,
                            children: (0, G.m1)(i, H.default, P.A),
                        }),
                        (0, n.jsx)(j.E, { variant: "text-xs/normal", className: ei.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t, useNewNotifications: i, showHybridOption: l } = this.props;
        return (0, n.jsxs)(K.A, {
            grow: 0,
            shrink: 0,
            role: "presentation",
            className: ei.Pm,
            justify: K.A.Justify.AROUND,
            align: K.A.Align.CENTER,
            children: [
                (0, n.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? ei.mH : ei.HI,
                    children: this.renderMessageNotificationsRadioOption(q.orn.ALL_MESSAGES),
                }),
                i
                    ? (0, n.jsx)(K.A.Child, {
                          wrap: !0,
                          grow: 0,
                          shrink: 0,
                          role: "cell",
                          className: t ? ei.mH : ei.HI,
                          children: l ? this.renderMessageNotificationsRadioOption(q.orn.ONLY_MENTIONS, !0) : null,
                      })
                    : null,
                (0, n.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? ei.mH : ei.HI,
                    children: this.renderMessageNotificationsRadioOption(q.orn.ONLY_MENTIONS),
                }),
                i
                    ? null
                    : (0, n.jsx)(K.A.Child, {
                          wrap: !0,
                          grow: 0,
                          shrink: 0,
                          role: "cell",
                          className: t ? ei.mH : ei.HI,
                          children: this.renderMessageNotificationsRadioOption(q.orn.NO_MESSAGES),
                      }),
                (0, n.jsxs)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: ei.dy,
                    children: [
                        (0, n.jsx)(W.s, {
                            id: this.getOverrideLabelId("mute"),
                            children: et.intl.formatToPlainString(et.t.UovZPr, {
                                channelName: this.getChannelNameForLabel(),
                            }),
                        }),
                        (0, n.jsx)(z.J, {
                            checked: e,
                            labeledBy: this.getOverrideLabelId("mute"),
                            onChange: this.handleMute,
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state,
            { channel: t } = this.props;
        return (0, n.jsxs)(J.Z, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            role: "row",
            className: e ? ei.J$ : ei.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, n.jsx)("div", {
                    role: "cell",
                    children: (0, n.jsx)(Q.A, {
                        "aria-label": et.intl.formatToPlainString(et.t.Gd4bTU, { name: (0, G.m1)(t, H.default, P.A) }),
                        className: ei.ZY,
                        onClick: this.handleDelete,
                    }),
                }),
            ],
        });
    }
}
let es = "hybrid",
    er = { ignoreMute: !1, ignoreUnreadSetting: !1, ignoreNotificationSetting: !1 };
function ea(e) {
    let { label: t, channelId: i } = e,
        [l, s] = (0, d.yK)([D.A], () => {
            let e = D.A.getChannel(i);
            return [e, e?.parent_id != null ? D.A.getChannel(e.parent_id) : null];
        });
    return null == l ? t : (0, n.jsx)(c.X, { icon: (0, M.gU)(l), title: t, subtitle: s?.name });
}
function eo(e) {
    let { muteConfig: t, muted: i, guild: l, handleCheckboxChange: s } = e,
        r = t?.selected_time_window ?? ee.Xx.ALWAYS;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: ei.bj,
              children: [
                  (0, n.jsxs)(m.B, {
                      gap: 20,
                      children: [
                          (0, n.jsx)(N.d, {
                              label: et.intl.formatToPlainString(et.t["J+7D9E"], { name: l.name }),
                              description: et.intl.string(et.t["8wbTQ6"]),
                              checked: i,
                              onChange: (e) => s("muted", e, V.G_.muted(e)),
                          }),
                          i
                              ? (0, n.jsx)(p.l, {
                                    label: et.intl.string(et.t.Ztu2Yo),
                                    options: (0, Z.b8)(),
                                    value: r,
                                    onSelectionChange: function (e) {
                                        if (null == l) return;
                                        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
                                        L.A.updateGuildNotificationSettings(
                                            l.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            V.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, n.jsx)(A.c, { gap: 20 }),
              ],
          });
}
function ed(e) {
    let {
            muted: t,
            messageNotifications: i,
            unreadSetting: l,
            memberCount: s,
            useNewNotifications: r,
            onChange: a,
        } = e,
        o = r && i === q.orn.ONLY_MENTIONS && l === X.e.ALL_MESSAGES ? es : i;
    return (0, n.jsxs)("div", {
        className: ei.YK,
        children: [
            (0, n.jsx)("div", {
                className: ei.bj,
                children: (0, n.jsx)(f.z, {
                    label: et.intl.string(et.t.lprV7V),
                    disabled: t,
                    value: o,
                    onChange: a,
                    options: [
                        {
                            name: et.intl.string(et.t["n/bTaY"]),
                            value: q.orn.ALL_MESSAGES,
                            desc: null != s && s >= q._4N ? et.intl.string(et.t.Dh5p5j) : null,
                        },
                        ...(r ? [{ name: et.intl.string(et.t.JzbSEY), value: es }] : []),
                        { name: et.intl.format(et.t.L2hmYy, {}), value: q.orn.ONLY_MENTIONS },
                        { name: et.intl.string(et.t.CtVGyQ), value: q.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, n.jsx)(A.c, {}),
        ],
    });
}
function eh(e) {
    let { guildId: t } = e,
        i = (0, y._g)(t),
        l = (0, d.bG)([w.A], () => w.A.getGuildAlertSettings()[t]);
    if (i)
        return (0, n.jsxs)("div", {
            className: ei.YK,
            children: [
                (0, n.jsx)(S.l, {
                    className: ei.bj,
                    children: (0, n.jsxs)(x.D, {
                        label: et.intl.string(et.t.D9yVAH),
                        description: et.intl.string(et.t["0PhAOH"]),
                        children: [
                            (0, n.jsx)(N.d, {
                                label: et.intl.string(et.t.u6dc5B),
                                description: et.intl.string(et.t.z8Td48),
                                checked: !l?.disableRaidAlertNag,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, n.jsx)(N.d, {
                                label: et.intl.string(et.t.P8MG6q),
                                description: et.intl.string(et.t.PyxXs8),
                                checked: !l?.disableRaidAlertPush,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(A.c, {}),
            ],
        });
}
function ec(e) {
    let {
        suppressEveryone: t,
        suppressRoles: i,
        handleCheckboxChange: l,
        notifyHighlights: s,
        muteEvents: r,
        mobilePush: a,
        muted: o,
        guildId: d,
    } = e;
    return (0, n.jsxs)(m.B, {
        className: ei.bj,
        gap: 16,
        children: [
            (0, n.jsx)(N.d, {
                label: et.intl.format(et.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, V.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, n.jsx)(A.c, {}),
            (0, n.jsx)(N.d, {
                label: et.intl.string(et.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, V.G_.suppressRoles(e)),
                checked: i,
            }),
            (0, n.jsx)(A.c, {}),
            (0, n.jsxs)(m.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(N.d, {
                        label: et.intl.string(et.t.gPuteJ),
                        onChange: (e) => {
                            L.A.updateGuildNotificationSettings(
                                d,
                                { notify_highlights: e ? q.guM.DISABLED : q.guM.ENABLED },
                                V.G_.highlights(!e),
                            );
                        },
                        checked: o || s === q.guM.DISABLED,
                        disabled: o,
                        description: et.intl.string(et.t["Vw/Xn8"]),
                    }),
                    (0, n.jsx)(b.Anchor, {
                        href: F.A.getArticleURL(q.MVz.HIGHLIGHTS),
                        children: (0, n.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: et.intl.string(et.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(A.c, {}),
            (0, n.jsx)(N.d, {
                label: et.intl.string(et.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, V.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(A.c, {}),
            (0, n.jsx)(N.d, {
                label: et.intl.string(et.t.h1DL66),
                checked: !o && a,
                disabled: o,
                onChange: (e) => l("mobile_push", e, V.G_.mobilePush(e)),
            }),
        ],
    });
}
function eu(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: i, setLatestOverrideId: l, channels: s, categories: a } = e,
        o = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== q.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, G.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, n.jsx)("div", {
        className: ei.bj,
        children: (0, n.jsx)(u.p, {
            label: et.intl.string(et.t["Z+oF8h"]),
            description: et.intl.string(et.t["2Y9ZfA"]),
            value: q.dJq,
            placeholder: et.intl.string(et.t["Z+oF8h"]),
            renderOptionLabel: function (e) {
                return (0, n.jsx)(ea, { label: e.label, channelId: e.value });
            },
            options: o,
            onChange: function (e) {
                if (null == e) return;
                let n = new Set(i);
                (n.add(e), t(n), l(e));
            },
            "data-migration-pending": !0,
        }),
    });
}
function eg(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: i,
            channels: s,
            categories: r,
            muted: a,
            setNewChannelOverrides: o,
            latestOverrideId: c,
            messageNotifications: u,
            useNewNotifications: g,
        } = e,
        m = l.useMemo(() => new Set([...t, ...(0, Z.ct)(i, g ? er : void 0)]), [i, t, g]),
        N = (0, d.cf)(
            [Y.Ay],
            () => {
                let e = {};
                if (g) for (let { channel: t } of s) m.has(t.id) && (e[t.id] = Y.Ay.resolveUnreadSetting(t));
                return e;
            },
            [g, s, m],
        ),
        p = (0, v.r)(h.A.unsafe_rawColors.GREEN_360).hex();
    function A(e) {
        let i = new Set(t);
        (i.delete(e), o(i));
    }
    let f = s
        .map((e) => {
            let { channel: t } = e;
            if (!m.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
            let l = i[t.id];
            return (0, n.jsx)(
                el,
                {
                    channel: t,
                    guildMuted: a,
                    muted: null != l && (0, C.tG)(l),
                    messageNotifications: null != l ? l.message_notifications : null,
                    guildMessageNotifications: u,
                    useNewNotifications: g,
                    showHybridOption: g && I.B4.has(t.type),
                    unreadSetting: N[t.id] ?? X.e.UNSET,
                    onDelete: A,
                    checkboxColor: p,
                    autoFocus: t.id === c,
                },
                t.id,
            );
        })
        .filter(B.Vq);
    return (
        (0 === m.size || 0 === f.length) &&
            f.push(
                (0, n.jsx)(
                    "div",
                    {
                        className: ei.uZ,
                        role: "row",
                        children: (0, n.jsx)("div", {
                            role: "cell",
                            children: (0, n.jsx)(j.E, {
                                className: ei.sr,
                                variant: "text-sm/semibold",
                                children: et.intl.string(et.t["2Y9ZfA"]),
                            }),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, n.jsxs)("div", {
            role: "table",
            "aria-label": et.intl.string(et.t.O4TIvi),
            children: [
                (0, n.jsxs)("div", {
                    className: ei.n_,
                    role: "row",
                    children: [
                        (0, n.jsx)("div", {
                            className: ei.$m,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: ei.Bv,
                                children: et.intl.string(et.t.uShwWv),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: ei.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: ei.BO,
                                children: et.intl.string(et.t.e29Z12),
                            }),
                        }),
                        g
                            ? (0, n.jsx)("div", {
                                  className: ei.Lv,
                                  role: "columnheader",
                                  children: (0, n.jsx)(_.D, {
                                      variant: "eyebrow",
                                      className: ei.BO,
                                      children: et.intl.string(et.t.SCAPTL),
                                  }),
                              })
                            : null,
                        (0, n.jsx)("div", {
                            className: ei.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: ei.BO,
                                children: et.intl.string(et.t.DD6gNd),
                            }),
                        }),
                        g
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ei.Lv,
                                  role: "columnheader",
                                  children: (0, n.jsx)(_.D, {
                                      variant: "eyebrow",
                                      className: ei.BO,
                                      children: et.intl.string(et.t.CtVGyQ),
                                  }),
                              }),
                        (0, n.jsx)("div", {
                            className: ei.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: ei.BO,
                                children: (0, n.jsx)(E.m, {
                                    text: et.intl.string(et.t["8wbTQ6"]),
                                    position: "bottom",
                                    children: (0, n.jsx)("span", { children: et.intl.string(et.t.sWmtI6) }),
                                }),
                            }),
                        }),
                    ],
                }),
                f,
            ],
        })
    );
}
function em(e) {
    let { guildId: t, onClose: i, transitionState: s } = e,
        r = (0, d.bG)([R.A], () => R.A.getCategories(t)),
        a = (0, d.bG)([k.A], () => k.A.getGuild(t)),
        o = (0, d.bG)([U.A], () => U.A.getMemberCount(t)),
        h = (0, Z.os)("NotificationSettingsModal"),
        {
            suppressEveryone: c,
            suppressRoles: u,
            muteEvents: m,
            mobilePush: N,
            muted: p,
            muteConfig: A,
            messageNotifications: f,
            unreadSetting: S,
            channelOverrides: x,
            notifyHighlights: b,
        } = (0, d.cf)([Y.Ay], () => ({
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            muteEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            muted: Y.Ay.isMuted(t),
            muteConfig: Y.Ay.getMuteConfig(t),
            messageNotifications: Y.Ay.getMessageNotifications(t),
            unreadSetting: Y.Ay.getGuildUnreadSetting(t),
            channelOverrides: Y.Ay.getChannelOverrides(t),
            notifyHighlights: Y.Ay.getNotifyHighlights(t),
        })),
        [j, v] = l.useState(new Set()),
        [_, E] = l.useState(null),
        C = l.useMemo(
            () =>
                (0, O.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, I.tr)(t) || t === q.rbe.GUILD_CATEGORY;
                }),
            [r],
        );
    function G(e, i, n) {
        L.A.updateGuildNotificationSettings(t, { [e]: i }, n);
    }
    return (0, n.jsxs)(g.a, {
        title: et.intl.string(et.t.h850Ss),
        actions: [{ text: et.intl.string(et.t.i4jeWR), onClick: i }],
        onClose: i,
        transitionState: s,
        children: [
            (0, n.jsx)(eo, { muteConfig: A, muted: p, guild: a, handleCheckboxChange: G }),
            (0, n.jsx)(ed, {
                muted: p,
                messageNotifications: f,
                unreadSetting: S,
                memberCount: o,
                useNewNotifications: h,
                onChange: function (e) {
                    let i = e === es ? q.orn.ONLY_MENTIONS : e,
                        n = V.G_.notifications(i);
                    if (!h) return void L.A.updateGuildNotificationSettings(t, { message_notifications: i }, n);
                    let l =
                        e === es || i === q.orn.ALL_MESSAGES ? ee.n3.UNREADS_ALL_MESSAGES : ee.n3.UNREADS_ONLY_MENTIONS;
                    L.A.updateGuildNotificationSettings(
                        t,
                        { message_notifications: i, flags: (0, $.md)(Y.Ay.getGuildFlags(t), l) },
                        n,
                    );
                },
            }),
            (0, n.jsx)(eh, { guildId: t }),
            (0, n.jsx)(ec, {
                suppressEveryone: c,
                suppressRoles: u,
                handleCheckboxChange: G,
                notifyHighlights: b,
                muteEvents: m,
                mobilePush: N,
                muted: p,
                guildId: t,
            }),
            (0, n.jsx)(eu, {
                setNewChannelOverrides: v,
                newChannelOverrides: j,
                setLatestOverrideId: E,
                channels: C,
                categories: r,
            }),
            (0, n.jsx)(eg, {
                newChannelOverrides: j,
                channelOverrides: x,
                channels: C,
                categories: r,
                muted: p,
                setNewChannelOverrides: v,
                latestOverrideId: _,
                messageNotifications: f,
                useNewNotifications: h,
            }),
        ],
    });
}
