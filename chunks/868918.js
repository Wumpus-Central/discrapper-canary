(n.d(t, { default: () => ek }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(536637),
    d = n.n(a),
    o = n(452027),
    c = n(189213),
    u = n(17928),
    h = n(661531),
    g = n(194667),
    m = n(444550),
    x = n(331322),
    N = n(193249),
    j = n(691885),
    p = n(404778),
    A = n(144228),
    b = n(611677),
    f = n(28863),
    v = n(834730),
    S = n(602853),
    _ = n(297264),
    E = n(866665),
    C = n(832712),
    G = n(544743),
    y = n(999903),
    O = n(47167),
    M = n(713654),
    I = n(585510),
    L = n(610136),
    T = n(594061),
    k = n(95701),
    R = n(734057),
    w = n(769765),
    D = n(498642),
    P = n(71393),
    U = n(994500),
    Y = n(543465),
    H = n(287809),
    B = n(403362),
    J = n(975571),
    V = n(477427),
    z = n(769591),
    F = n(467324),
    W = n(568385),
    Z = n(993077),
    Q = n(414079),
    K = n(235986),
    X = n(652215),
    q = n(375708),
    $ = n(858177);
class ee extends l.PureComponent {
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
    setMessageNotification(e, t, n) {
        let { channel: i } = this.props,
            l = i.getGuildId();
        null != l && C.A.updateChannelOverrideSettings(l, i.id, { message_notifications: e, muted: t ?? !1 }, n);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, V.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? X.orn.NULL, e, V.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        (this.setMessageNotification(X.orn.NULL, !1, V.fd.OverrideDeleted), null != e && e(t.id));
    };
    getChannelNameForLabel() {
        return (0, O.m1)(this.props.channel, H.default, U.A);
    }
    getOverrideLabelId(e) {
        return `channel-override-${this.props.channel.id}-${e}`;
    }
    renderMessageNotificationsRadioOption(e) {
        let t,
            n,
            { messageNotifications: l, guildMuted: s, guildMessageNotifications: r } = this.props,
            a = l === e;
        (null == l || l === X.orn.NULL) && e === r && (a = !0);
        let d = this.getChannelNameForLabel();
        e === X.orn.ALL_MESSAGES
            ? ((t = q.intl.formatToPlainString(q.t.TjtVTh, { channelName: d })), (n = "all"))
            : e === X.orn.ONLY_MENTIONS
              ? ((t = q.intl.formatToPlainString(q.t["3oPQOG"], { channelName: d })), (n = "mentions"))
              : ((t = q.intl.formatToPlainString(q.t.BvQ24S, { channelName: d })), (n = "nothing"));
        let o = this.getOverrideLabelId(n);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(F.s, { id: o, children: t }),
                (0, i.jsx)(W.J, {
                    checked: !s && a,
                    disabled: s,
                    labeledBy: o,
                    onChange: this.handleRadioChange.bind(this, e),
                }),
            ],
        });
    }
    renderName() {
        let e,
            t,
            { channel: n } = this.props;
        null != n.parent_id && (e = R.A.getChannel(n.parent_id));
        let l = (0, M.gU)(n);
        if (n.type === X.rbe.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = w.A.getCategories(n.guild_id);
            t = q.intl.formatToPlainString(q.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? q.intl.formatToPlainString(q.t.L1zJgb, { categoryName: (0, O.m1)(e, H.default, U.A) })
                    : q.intl.string(q.t.uIzfCE);
        return (0, i.jsxs)(K.A, {
            grow: 1,
            className: $.VW,
            role: "cell",
            children: [
                null != l ? (0, i.jsx)(l, { className: $.Kk }) : null,
                (0, i.jsxs)("div", {
                    className: $.aT,
                    children: [
                        (0, i.jsx)(v.E, {
                            variant: "text-md/semibold",
                            className: $.HA,
                            children: (0, O.m1)(n, H.default, U.A),
                        }),
                        (0, i.jsx)(v.E, { variant: "text-xs/normal", className: $.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(K.A, {
            grow: 0,
            shrink: 0,
            role: "presentation",
            className: $.Pm,
            justify: K.A.Justify.AROUND,
            align: K.A.Align.CENTER,
            children: [
                (0, i.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.ALL_MESSAGES),
                }),
                (0, i.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.ONLY_MENTIONS),
                }),
                (0, i.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.NO_MESSAGES),
                }),
                (0, i.jsxs)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: $.dy,
                    children: [
                        (0, i.jsx)(F.s, {
                            id: this.getOverrideLabelId("mute"),
                            children: q.intl.formatToPlainString(q.t.UovZPr, {
                                channelName: this.getChannelNameForLabel(),
                            }),
                        }),
                        (0, i.jsx)(W.J, {
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
        return (0, i.jsxs)(Z.Z, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            role: "row",
            className: e ? $.J$ : $.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)("div", {
                    role: "cell",
                    children: (0, i.jsx)(Q.A, {
                        "aria-label": q.intl.formatToPlainString(q.t.Gd4bTU, { name: (0, O.m1)(t, H.default, U.A) }),
                        className: $.ZY,
                        onClick: this.handleDelete,
                    }),
                }),
            ],
        });
    }
}
var et = n(503698),
    en = n.n(et);
function ei(e) {
    let { guildId: t } = e,
        n = (0, u.cf)([Y.Ay], () => ({
            highligths: Y.Ay.getNotifyHighlights(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
        })),
        l = C.A.updateGuildNotificationSettings;
    return (0, i.jsxs)(x.B, {
        gap: 24,
        children: [
            (0, i.jsx)(N.d, {
                checked: n.suppressEveryone,
                label: q.intl.format(q.t.OWiWAp, {}),
                onChange: (e) => l(t, { suppress_everyone: e }, V.G_.suppressEveryone(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.suppressRoles,
                label: q.intl.string(q.t["O/QdoD"]),
                onChange: (e) => l(t, { suppress_roles: e }, V.G_.suppressRoles(e)),
            }),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t.gPuteJ),
                description: q.intl.string(q.t["Vw/Xn8"]),
                checked: n.highligths === X.guM.ENABLED,
                onChange: (e) => l(t, { notify_highlights: e ? X.guM.ENABLED : X.guM.DISABLED }, V.G_.highlights(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.muteScheduledEvents,
                label: q.intl.string(q.t.ONG3Yz),
                onChange: (e) => l(t, { mute_scheduled_events: e }, V.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.mobilePush,
                label: q.intl.string(q.t.h1DL66),
                onChange: (e) => l(t, { mobile_push: e }, V.G_.mobilePush(e)),
            }),
        ],
    });
}
var el = n(150934),
    es = n(887560),
    er = n(393432),
    ea = n(24873);
function ed(e) {
    let {
        channel: { type: t },
    } = e;
    return (0, k.tr)(t) || t === X.rbe.GUILD_CATEGORY;
}
function eo(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: l, categories: s } = (0, u.cf)([w.A], () => {
            let e = w.A.getCategories(t);
            return { channels: (0, y.A)(e._categories, e, ed), categories: e };
        }),
        a = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== X.rbe.GUILD_CATEGORY || (null != s[t.id] && s[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, O.m1)(t, H.default, U.A) };
            })
            .value();
    return (0, i.jsx)(m.p, {
        description: q.intl.string(q.t["2Y9ZfA"]),
        value: X.dJq,
        onChange: n,
        options: a,
        renderOptionLabel: function (e) {
            let t = R.A.getChannel(e.value);
            if (null == t) return e.label;
            let n = R.A.getChannel(t.parent_id),
                l = null != n ? n.name : null;
            return (0, i.jsx)(g.X, { icon: (0, M.gU)(t), title: e.label, subtitle: l });
        },
        placeholder: q.intl.string(q.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
var ec = n(632422);
let eu = l.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [s, r] = l.useState(null),
        a = (0, u.yK)([R.A, Y.Ay], () =>
            (0, z.ct)(Y.Ay.getChannelOverrides(n), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => R.A.getChannel(e))
                .filter(B.Vq),
        ),
        d = (0, u.bG)([w.A], () => w.A.getCategories(n)),
        o = a.map((e, t) =>
            (0, i.jsxs)(
                l.Fragment,
                {
                    children: [
                        (0, i.jsx)(eh, { channel: e, categories: d, autoFocus: s === e.id }),
                        t < a.length - 1 && (0, i.jsx)("div", { className: ec.me, role: "presentation" }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(eo, {
                guildId: n,
                onSelected: function (e) {
                    if (null != a.find((t) => t.id === e)) return;
                    let t = R.A.getChannel(e);
                    null != t &&
                        (C.A.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: Y.Ay.resolvedMessageNotifications(t),
                                flags: (0, er.mD)(
                                    Y.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    Y.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            V.fd.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            o.length > 0 &&
                (0, i.jsxs)("div", {
                    className: ec.tp,
                    role: "table",
                    "aria-label": q.intl.string(q.t.O4TIvi),
                    children: [
                        (0, i.jsxs)("div", {
                            className: ec.nM,
                            role: "row",
                            children: [
                                (0, i.jsx)("div", {
                                    className: ec._k,
                                    role: "columnheader",
                                    children: (0, i.jsx)(v.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.uShwWv),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(v.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.hZrr6k),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(v.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.JzbSEY),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(v.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.y59NJm),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(v.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t["pGn/bJ"]),
                                    }),
                                }),
                            ],
                        }),
                        o.length > 0 && (0, i.jsx)("div", { className: ec.BM, role: "rowgroup", children: o }),
                    ],
                }),
        ],
    });
});
function eh(e) {
    let { channel: t, categories: n, autoFocus: s } = e,
        r = (0, u.bG)([R.A], () => R.A.getChannel(t?.parent_id)),
        a = (0, es.bH)(t),
        d = l.useRef(null);
    if (
        (l.useEffect(() => {
            s && d.current?.scrollIntoView({ behavior: "smooth" });
        }, []),
        null == t)
    )
        return null;
    let o = q.intl.string(q.t.uIzfCE),
        c = (0, M.gU)(t);
    t.type === X.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (o = q.intl.formatToPlainString(q.t["2KzH89"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != r && (o = q.intl.formatToPlainString(q.t.L1zJgb, { categoryName: (0, O.m1)(r, H.default, U.A) }));
    let h = (0, ea.hJ)(a.unread, a.notification);
    return (0, i.jsxs)("div", {
        ref: d,
        className: en()(ec.nM, ec.Ix, ec.WG),
        role: "row",
        children: [
            (0, i.jsxs)("div", {
                className: en()(ec._k, ec.cU),
                role: "cell",
                children: [
                    null != c
                        ? (0, i.jsx)(c, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                              className: ec.Kk,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "text-md/semibold",
                                className: ec.cU,
                                children: (0, O.m1)(t, H.default, U.A),
                            }),
                            (0, i.jsx)(v.E, { variant: "text-xs/medium", className: ec.cU, children: o }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: h === ea.N9.ALL_MESSAGES,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.ALL_MESSAGES),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: h === ea.N9.HYBRID,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.HYBRID),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: h === ea.N9.MENTIONS,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.MENTIONS),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: h === ea.N9.NOTHING,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.NOTHING),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                role: "cell",
                children: (0, i.jsx)(Q.A, {
                    "aria-label": q.intl.formatToPlainString(q.t.Gd4bTU, { name: (0, O.m1)(t, H.default, U.A) }),
                    onClick: () => (0, es.Au)(t.guild_id, t.id),
                    className: ec.DT,
                }),
            }),
        ],
    });
}
function eg(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([L.A], () => L.A.getGuildAlertSettings()[t]);
    return (0, i.jsxs)(x.B, {
        gap: 24,
        children: [
            (0, i.jsx)(N.d, {
                checked: !n?.disableRaidAlertNag,
                label: q.intl.string(q.t.u6dc5B),
                description: q.intl.string(q.t.z8Td48),
                onChange: (e) =>
                    (0, T.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        T.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, i.jsx)(N.d, {
                checked: !n?.disableRaidAlertPush,
                label: q.intl.string(q.t.P8MG6q),
                description: q.intl.string(q.t.PyxXs8),
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
    });
}
var em = n(702841),
    ex = n(270003),
    eN = n(355097);
function ej(e) {
    var t;
    let { guildId: n } = e,
        l = (0, em.bG)([P.A], () => P.A.getGuild(n)),
        s = (0, em.bG)([Y.Ay], () => Y.Ay.isMuted(n)),
        r = (0, em.bG)([Y.Ay], () => Y.Ay.getMuteConfig(n));
    return null == l
        ? null
        : (0, i.jsxs)(ex.n, {
              children: [
                  (0, i.jsx)(N.d, {
                      label: q.intl.format(q.t["J+7D9E"], { name: l.name }),
                      description: q.intl.string(q.t.IngcUv),
                      checked: s,
                      onChange: function (e) {
                          C.A.updateGuildNotificationSettings(n, { muted: e }, V.G_.muted(e));
                      },
                  }),
                  s &&
                      (0, i.jsx)(j.l, {
                          label: q.intl.string(q.t.Ztu2Yo),
                          description:
                              null == (t = r) || null == t.end_time
                                  ? null
                                  : q.intl.formatToPlainString(q.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(q.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: function (e) {
                              let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                              C.A.updateGuildNotificationSettings(
                                  n,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  V.fd.Muted,
                              );
                          },
                          options: (0, z.b8)(),
                          value: r?.selected_time_window ?? eN.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
var ep = n(910323),
    eA = n(790782);
function eb(e) {
    let { guildId: t } = e,
        n = (0, em.bG)([Y.Ay], () => {
            let e = Y.Ay.getGuildUnreadSetting(t),
                n = Y.Ay.getMessageNotifications(t);
            return e === eA.e.UNSET ? (n === X.orn.ALL_MESSAGES ? eA.e.ALL_MESSAGES : eA.e.ONLY_MENTIONS) : e;
        }),
        l = (0, em.bG)([Y.Ay], () => Y.Ay.getMessageNotifications(t)),
        s = (0, ea.hJ)(n, l);
    return (0, i.jsx)(A.z, {
        label: q.intl.string(q.t.lprV7V),
        value: s,
        options: [
            { name: q.intl.string(q.t.hZrr6k), value: ea.N9.ALL_MESSAGES },
            { name: q.intl.string(q.t.JzbSEY), value: ea.N9.HYBRID },
            { name: q.intl.string(q.t.y59NJm), value: ea.N9.MENTIONS },
            { name: q.intl.string(q.t["pGn/bJ"]), value: ea.N9.NOTHING },
        ],
        onChange: (e) => (0, ep.i)(t, e),
    });
}
var ef = n(35258);
function ev(e) {
    return (0, i.jsx)("div", {
        className: ef.bV,
        children: (0, i.jsx)(_.D, {
            variant: "text-xs/bold",
            className: ef.l_,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function eS(e) {
    return (0, i.jsx)("div", {
        className: ef.yV,
        children: (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function e_(e) {
    return (0, i.jsxs)("div", {
        children: [
            null != e.title && (0, i.jsx)(ev, { title: e.title }),
            (0, i.jsx)("div", {
                className: en()(ef.f5, { [ef.ou]: !0 !== e.noPadding, [ef._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function eE(e) {
    let { guildId: t, ...n } = e,
        l = (0, I._g)(t);
    return (0, i.jsxs)(c.Modal, {
        ...n,
        title: q.intl.string(q.t.h850Ss),
        actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: n.onClose }],
        children: [
            (0, i.jsx)(e_, { noPadding: !0, noContainer: !0, children: (0, i.jsx)(ej, { guildId: t }) }),
            (0, i.jsx)(e_, { children: (0, i.jsx)(eb, { guildId: t }) }),
            (0, i.jsx)(e_, { title: q.intl.string(q.t["31DySj"]), children: (0, i.jsx)(ei, { guildId: t }) }),
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ev, { title: q.intl.string(q.t.D9yVAH) }),
                        (0, i.jsx)(eS, { description: q.intl.string(q.t["0PhAOH"]) }),
                        (0, i.jsx)(e_, { children: (0, i.jsx)(eg, { guildId: t }) }),
                    ],
                }),
            (0, i.jsx)(ev, { title: q.intl.string(q.t.JrySi3) }),
            (0, i.jsx)(eu, { guildId: t }),
        ],
    });
}
function eC(e) {
    let { label: t, channelId: n } = e,
        [l, s] = (0, u.yK)([R.A], () => {
            let e = R.A.getChannel(n);
            return [e, e?.parent_id != null ? R.A.getChannel(e.parent_id) : null];
        });
    return null == l ? t : (0, i.jsx)(g.X, { icon: (0, M.gU)(l), title: t, subtitle: s?.name });
}
function eG(e) {
    let { muteConfig: t, muted: n, guild: l, handleCheckboxChange: s } = e,
        r = t?.selected_time_window ?? eN.Xx.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: $.bj,
              children: [
                  (0, i.jsxs)(x.B, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(N.d, {
                              label: q.intl.formatToPlainString(q.t["J+7D9E"], { name: l.name }),
                              description: q.intl.string(q.t["8wbTQ6"]),
                              checked: n,
                              onChange: (e) => s("muted", e, V.G_.muted(e)),
                          }),
                          n
                              ? (0, i.jsx)(j.l, {
                                    label: q.intl.string(q.t.Ztu2Yo),
                                    options: (0, z.b8)(),
                                    value: r,
                                    onSelectionChange: function (e) {
                                        if (null == l) return;
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        C.A.updateGuildNotificationSettings(
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
                  (0, i.jsx)(p.c, { gap: 20 }),
              ],
          });
}
function ey(e) {
    let { muted: t, messageNotifications: n, memberCount: l, handleRadioChange: s } = e;
    return (0, i.jsxs)("div", {
        className: $.YK,
        children: [
            (0, i.jsx)("div", {
                className: $.bj,
                children: (0, i.jsx)(A.z, {
                    label: q.intl.string(q.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => s("message_notifications", e, V.G_.notifications(e)),
                    options: [
                        {
                            name: q.intl.string(q.t["n/bTaY"]),
                            value: X.orn.ALL_MESSAGES,
                            desc: null != l && l >= X._4N ? q.intl.string(q.t.Dh5p5j) : null,
                        },
                        { name: q.intl.format(q.t.L2hmYy, {}), value: X.orn.ONLY_MENTIONS },
                        { name: q.intl.string(q.t.CtVGyQ), value: X.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, i.jsx)(p.c, {}),
        ],
    });
}
function eO(e) {
    let { guildId: t } = e,
        n = (0, I._g)(t),
        l = (0, u.bG)([L.A], () => L.A.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: $.YK,
            children: [
                (0, i.jsx)(b.l, {
                    className: $.bj,
                    children: (0, i.jsxs)(o.D, {
                        label: q.intl.string(q.t.D9yVAH),
                        description: q.intl.string(q.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(N.d, {
                                label: q.intl.string(q.t.u6dc5B),
                                description: q.intl.string(q.t.z8Td48),
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
                            (0, i.jsx)(N.d, {
                                label: q.intl.string(q.t.P8MG6q),
                                description: q.intl.string(q.t.PyxXs8),
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
                (0, i.jsx)(p.c, {}),
            ],
        });
}
function eM(e) {
    let {
        suppressEveryone: t,
        suppressRoles: n,
        handleCheckboxChange: l,
        notifyHighlights: s,
        muteEvents: r,
        mobilePush: a,
        muted: d,
        guildId: o,
    } = e;
    return (0, i.jsxs)(x.B, {
        className: $.bj,
        gap: 16,
        children: [
            (0, i.jsx)(N.d, {
                label: q.intl.format(q.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, V.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(p.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, V.G_.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(p.c, {}),
            (0, i.jsxs)(x.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(N.d, {
                        label: q.intl.string(q.t.gPuteJ),
                        onChange: (e) => {
                            C.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? X.guM.DISABLED : X.guM.ENABLED },
                                V.G_.highlights(!e),
                            );
                        },
                        checked: d || s === X.guM.DISABLED,
                        disabled: d,
                        description: q.intl.string(q.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(f.Anchor, {
                        href: J.A.getArticleURL(X.MVz.HIGHLIGHTS),
                        children: (0, i.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: q.intl.string(q.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(p.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, V.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(p.c, {}),
            (0, i.jsx)(N.d, {
                label: q.intl.string(q.t.h1DL66),
                checked: !d && a,
                disabled: d,
                onChange: (e) => l("mobile_push", e, V.G_.mobilePush(e)),
            }),
        ],
    });
}
function eI(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: l, channels: s, categories: a } = e,
        d = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== X.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, O.m1)(t, H.default, U.A) };
            })
            .value();
    return (0, i.jsx)("div", {
        className: $.bj,
        children: (0, i.jsx)(m.p, {
            label: q.intl.string(q.t["Z+oF8h"]),
            description: q.intl.string(q.t["2Y9ZfA"]),
            value: X.dJq,
            placeholder: q.intl.string(q.t["Z+oF8h"]),
            renderOptionLabel: function (e) {
                return (0, i.jsx)(eC, { label: e.label, channelId: e.value });
            },
            options: d,
            onChange: function (e) {
                if (null == e) return;
                let i = new Set(n);
                (i.add(e), t(i), l(e));
            },
            "data-migration-pending": !0,
        }),
    });
}
function eL(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: n,
            channels: s,
            categories: r,
            muted: a,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        u = l.useMemo(() => new Set([...t, ...(0, z.ct)(n)]), [n, t]),
        g = (0, S.r)(h.A.unsafe_rawColors.GREEN_360).hex();
    function m(e) {
        let n = new Set(t);
        (n.delete(e), d(n));
    }
    let x = s
        .map((e) => {
            let { channel: t } = e;
            if (!u.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
            let l = n[t.id];
            return (0, i.jsx)(
                ee,
                {
                    channel: t,
                    guildMuted: a,
                    muted: null != l && (0, G.tG)(l),
                    messageNotifications: null != l ? l.message_notifications : null,
                    guildMessageNotifications: c,
                    onDelete: m,
                    checkboxColor: g,
                    autoFocus: t.id === o,
                },
                t.id,
            );
        })
        .filter(B.Vq);
    return (
        (0 === u.size || 0 === x.length) &&
            x.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: $.uZ,
                        role: "row",
                        children: (0, i.jsx)("div", {
                            role: "cell",
                            children: (0, i.jsx)(v.E, {
                                className: $.sr,
                                variant: "text-sm/semibold",
                                children: q.intl.string(q.t["2Y9ZfA"]),
                            }),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)("div", {
            role: "table",
            "aria-label": q.intl.string(q.t.O4TIvi),
            children: [
                (0, i.jsxs)("div", {
                    className: $.n_,
                    role: "row",
                    children: [
                        (0, i.jsx)("div", {
                            className: $.$m,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.Bv,
                                children: q.intl.string(q.t.uShwWv),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.e29Z12),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.DD6gNd),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.CtVGyQ),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: (0, i.jsx)(E.m, {
                                    text: q.intl.string(q.t["8wbTQ6"]),
                                    position: "bottom",
                                    children: (0, i.jsx)("span", { children: q.intl.string(q.t.sWmtI6) }),
                                }),
                            }),
                        }),
                    ],
                }),
                x,
            ],
        })
    );
}
function eT(e) {
    let { guildId: t, onClose: n, transitionState: s } = e,
        r = (0, u.bG)([w.A], () => w.A.getCategories(t)),
        a = (0, u.bG)([P.A], () => P.A.getGuild(t)),
        d = (0, u.bG)([D.A], () => D.A.getMemberCount(t)),
        {
            suppressEveryone: o,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: x,
            muteConfig: N,
            messageNotifications: j,
            channelOverrides: p,
            notifyHighlights: A,
        } = (0, u.cf)([Y.Ay], () => ({
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            muteEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            muted: Y.Ay.isMuted(t),
            muteConfig: Y.Ay.getMuteConfig(t),
            messageNotifications: Y.Ay.getMessageNotifications(t),
            channelOverrides: Y.Ay.getChannelOverrides(t),
            notifyHighlights: Y.Ay.getNotifyHighlights(t),
        })),
        [b, f] = l.useState(new Set()),
        [v, S] = l.useState(null),
        _ = l.useMemo(
            () =>
                (0, y.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, k.tr)(t) || t === X.rbe.GUILD_CATEGORY;
                }),
            [r],
        );
    function E(e, n, i) {
        C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
    }
    return (0, i.jsxs)(c.Modal, {
        title: q.intl.string(q.t.h850Ss),
        actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: n }],
        onClose: n,
        transitionState: s,
        children: [
            (0, i.jsx)(eG, { muteConfig: N, muted: x, guild: a, handleCheckboxChange: E }),
            (0, i.jsx)(ey, {
                muted: x,
                messageNotifications: j,
                memberCount: d,
                handleRadioChange: function (e, n, i) {
                    C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(eO, { guildId: t }),
            (0, i.jsx)(eM, {
                suppressEveryone: o,
                suppressRoles: h,
                handleCheckboxChange: E,
                notifyHighlights: A,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(eI, {
                setNewChannelOverrides: f,
                newChannelOverrides: b,
                setLatestOverrideId: S,
                channels: _,
                categories: r,
            }),
            (0, i.jsx)(eL, {
                newChannelOverrides: b,
                channelOverrides: p,
                channels: _,
                categories: r,
                muted: x,
                setNewChannelOverrides: f,
                latestOverrideId: v,
                messageNotifications: j,
            }),
        ],
    });
}
function ek(e) {
    let { ...t } = e;
    return (0, z.os)("NotificationSettingsModal") ? (0, i.jsx)(eE, { ...t }) : (0, i.jsx)(eT, { ...t });
}
