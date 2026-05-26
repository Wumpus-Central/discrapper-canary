n.d(t, { default: () => eZ }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(989349),
    d = n.n(a),
    o = n(452027),
    c = n(189213),
    u = n(17928),
    h = n(661531),
    g = n(194667),
    m = n(444550),
    x = n(990078),
    j = n(331322),
    N = n(243721),
    S = n(691885),
    A = n(404778),
    v = n(773812),
    p = n(611677),
    b = n(349288),
    E = n(834730),
    f = n(602853),
    _ = n(534514),
    C = n(832712),
    G = n(544743),
    L = n(999903),
    M = n(47167),
    O = n(713654),
    y = n(585510),
    T = n(610136),
    I = n(594061),
    k = n(95701),
    R = n(734057),
    w = n(769765),
    D = n(498642),
    U = n(71393),
    P = n(994500),
    Y = n(543465),
    H = n(287809),
    B = n(403362),
    V = n(975571),
    F = n(477427),
    W = n(769591),
    Z = n(126031),
    z = n(568385),
    J = n(359778),
    Q = n(414079),
    q = n(235986),
    K = n(652215),
    X = n(375708),
    $ = n(964952);
class ee extends l.PureComponent {
    _timeout;
    contentDomRef = l.createRef();
    state = { highlight: !1 };
    highlight() {
        this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1e3));
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
        this.setMessageNotification(e, void 0, F.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? K.orn.NULL, e, F.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        this.setMessageNotification(K.orn.NULL, !1, F.fd.OverrideDeleted), null != e && e(t.id);
    };
    getChannelNameForLabel() {
        return (0, M.m1)(this.props.channel, H.default, P.A);
    }
    getOverrideLabelId(e) {
        return `channel-override-${this.props.channel.id}-${e}`;
    }
    renderMessageNotificationsRadioOption(e) {
        let t,
            n,
            { messageNotifications: l, guildMuted: s, guildMessageNotifications: r } = this.props,
            a = l === e;
        (null == l || l === K.orn.NULL) && e === r && (a = !0);
        let d = this.getChannelNameForLabel();
        e === K.orn.ALL_MESSAGES
            ? ((t = X.intl.formatToPlainString(X.t.TjtVTh, { channelName: d })), (n = "all"))
            : e === K.orn.ONLY_MENTIONS
              ? ((t = X.intl.formatToPlainString(X.t["3oPQOG"], { channelName: d })), (n = "mentions"))
              : ((t = X.intl.formatToPlainString(X.t.BvQ24S, { channelName: d })), (n = "nothing"));
        let o = this.getOverrideLabelId(n);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(Z.s, { id: o, children: t }),
                (0, i.jsx)(z.J, {
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
        let l = (0, O.gU)(n);
        if (n.type === K.rbe.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = w.A.getCategories(n.guild_id);
            t = X.intl.formatToPlainString(X.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? X.intl.formatToPlainString(X.t.L1zJgb, { categoryName: (0, M.m1)(e, H.default, P.A) })
                    : X.intl.string(X.t.uIzfCE);
        return (0, i.jsxs)(q.A, {
            grow: 1,
            className: $.VW,
            role: "cell",
            children: [
                null != l ? (0, i.jsx)(l, { className: $.Kk }) : null,
                (0, i.jsxs)("div", {
                    className: $.aT,
                    children: [
                        (0, i.jsx)(E.E, {
                            variant: "text-md/semibold",
                            className: $.HA,
                            children: (0, M.m1)(n, H.default, P.A),
                        }),
                        (0, i.jsx)(E.E, { variant: "text-xs/normal", className: $.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(q.A, {
            grow: 0,
            shrink: 0,
            role: "presentation",
            className: $.Pm,
            justify: q.A.Justify.AROUND,
            align: q.A.Align.CENTER,
            children: [
                (0, i.jsx)(q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(K.orn.ALL_MESSAGES),
                }),
                (0, i.jsx)(q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(K.orn.ONLY_MENTIONS),
                }),
                (0, i.jsx)(q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(K.orn.NO_MESSAGES),
                }),
                (0, i.jsxs)(q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: $.dy,
                    children: [
                        (0, i.jsx)(Z.s, {
                            id: this.getOverrideLabelId("mute"),
                            children: X.intl.formatToPlainString(X.t.UovZPr, {
                                channelName: this.getChannelNameForLabel(),
                            }),
                        }),
                        (0, i.jsx)(z.J, {
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
        return (0, i.jsxs)(J.Z, {
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
                        "aria-label": X.intl.formatToPlainString(X.t.Gd4bTU, { name: (0, M.m1)(t, H.default, P.A) }),
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
    return (0, i.jsxs)(j.B, {
        gap: 24,
        children: [
            (0, i.jsx)(N.d, {
                checked: n.suppressEveryone,
                label: X.intl.format(X.t.OWiWAp, {}),
                onChange: (e) => l(t, { suppress_everyone: e }, F.G_.suppressEveryone(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.suppressRoles,
                label: X.intl.string(X.t["O/QdoD"]),
                onChange: (e) => l(t, { suppress_roles: e }, F.G_.suppressRoles(e)),
            }),
            (0, i.jsx)(N.d, {
                label: X.intl.string(X.t.gPuteJ),
                description: X.intl.string(X.t["Vw/Xn8"]),
                checked: n.highligths === K.guM.ENABLED,
                onChange: (e) => l(t, { notify_highlights: e ? K.guM.ENABLED : K.guM.DISABLED }, F.G_.highlights(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.muteScheduledEvents,
                label: X.intl.string(X.t.ONG3Yz),
                onChange: (e) => l(t, { mute_scheduled_events: e }, F.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(N.d, {
                checked: n.mobilePush,
                label: X.intl.string(X.t.h1DL66),
                onChange: (e) => l(t, { mobile_push: e }, F.G_.mobilePush(e)),
            }),
        ],
    });
}
var el = n(150934),
    es = n(980707),
    er = n(442433),
    ea = n(661504),
    ed = n(887560),
    eo = n(393432),
    ec = n(24873);
let eu = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, k.tr)(t) || t === K.rbe.GUILD_CATEGORY;
};
function eh(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: l, categories: s } = (0, u.cf)([w.A], () => {
            let e = w.A.getCategories(t);
            return { channels: (0, L.A)(e._categories, e, eu), categories: e };
        }),
        a = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== K.rbe.GUILD_CATEGORY || (null != s[t.id] && s[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, M.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, i.jsx)(m.p, {
        description: X.intl.string(X.t["2Y9ZfA"]),
        value: K.dJq,
        onChange: n,
        options: a,
        renderOptionLabel: (e) => {
            let t = R.A.getChannel(e.value);
            if (null == t) return e.label;
            let n = R.A.getChannel(t.parent_id),
                l = null != n ? n.name : null;
            return (0, i.jsx)(g.X, { icon: (0, O.gU)(t), title: e.label, subtitle: l });
        },
        placeholder: X.intl.string(X.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
var eg = n(682545);
let em = l.forwardRef(function (e, t) {
    let { guildId: n } = e,
        [s, r] = l.useState(null),
        a = (0, u.yK)([R.A, Y.Ay], () =>
            (0, W.ct)(Y.Ay.getChannelOverrides(n), {
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
                        (0, i.jsx)(ex, { channel: e, categories: d, autoFocus: s === e.id }),
                        t < a.length - 1 && (0, i.jsx)("div", { className: eg.me, role: "presentation" }),
                    ],
                },
                e.id,
            ),
        );
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsx)(eh, {
                guildId: n,
                onSelected: (e) => {
                    if (null != a.find((t) => t.id === e)) return;
                    let t = R.A.getChannel(e);
                    null != t &&
                        (C.A.updateChannelOverrideSettings(
                            n,
                            e,
                            {
                                muted: !1,
                                message_notifications: Y.Ay.resolvedMessageNotifications(t),
                                flags: (0, eo.mD)(
                                    Y.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    Y.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            F.fd.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            o.length > 0 &&
                (0, i.jsxs)("div", {
                    className: eg.tp,
                    role: "table",
                    "aria-label": X.intl.string(X.t.O4TIvi),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eg.nM,
                            role: "row",
                            children: [
                                (0, i.jsx)("div", {
                                    className: eg._k,
                                    role: "columnheader",
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: X.intl.string(X.t.uShwWv),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: eg.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: X.intl.string(X.t.hZrr6k),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: eg.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: X.intl.string(X.t.y59NJm),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: eg.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: X.intl.string(X.t["pGn/bJ"]),
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: eg.km,
                                    role: "columnheader",
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: X.intl.string(X.t["32yow9"]),
                                    }),
                                }),
                            ],
                        }),
                        o.length > 0 && (0, i.jsx)("div", { className: eg.BM, role: "rowgroup", children: o }),
                    ],
                }),
        ],
    });
});
function ex(e) {
    let { channel: t, categories: n, autoFocus: s } = e,
        r = (0, u.bG)([R.A], () => R.A.getChannel(t?.parent_id)),
        a = (0, ed.bH)(t),
        d = l.useRef(null),
        o = l.useRef(null),
        [c, h] = l.useState(!1);
    if (
        (l.useEffect(() => {
            s && d.current?.scrollIntoView({ behavior: "smooth" });
        }, []),
        null == t)
    )
        return null;
    let g = X.intl.string(X.t.uIzfCE),
        m = (0, O.gU)(t);
    t.type === K.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (g = X.intl.formatToPlainString(X.t["2KzH89"], { num: null != n[t.id] ? n[t.id].length : 0 }))
        : null != r && (g = X.intl.formatToPlainString(X.t.L1zJgb, { categoryName: (0, M.m1)(r, H.default, P.A) }));
    let x = c ? ec.N9.CUSTOM : a.preset;
    return (0, i.jsxs)("div", {
        ref: d,
        className: en()(eg.nM, eg.Ix, eg.WG),
        role: "row",
        children: [
            (0, i.jsxs)("div", {
                className: en()(eg._k, eg.cU),
                role: "cell",
                children: [
                    null != m
                        ? (0, i.jsx)(m, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                              className: eg.Kk,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(E.E, {
                                variant: "text-md/semibold",
                                className: eg.cU,
                                children: (0, M.m1)(t, H.default, P.A),
                            }),
                            (0, i.jsx)(E.E, { variant: "text-xs/medium", className: eg.cU, children: g }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eg.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: x === ec.N9.ALL_MESSAGES,
                        label: "",
                        onChange: () => {
                            (0, ed.gN)(t.guild_id, t.id, ec.N9.ALL_MESSAGES), h(!1);
                        },
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: eg.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: x === ec.N9.MENTIONS,
                        label: "",
                        onChange: () => {
                            (0, ed.gN)(t.guild_id, t.id, ec.N9.MENTIONS), h(!1);
                        },
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: eg.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(el.S, {
                        checked: x === ec.N9.NOTHING,
                        label: "",
                        onChange: () => {
                            (0, ed.gN)(t.guild_id, t.id, ec.N9.NOTHING), h(!1);
                        },
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: eg.km,
                role: "cell",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)("span", {
                        ref: o,
                        style: { display: "inline-flex" },
                        children: (0, i.jsx)(el.S, {
                            checked: x === ec.N9.CUSTOM,
                            label: "",
                            onChange: () => {
                                h(!0);
                                let e = o.current;
                                null != e &&
                                    (0, er.jA)(
                                        {
                                            stopPropagation: () => {},
                                            preventDefault: () => {},
                                            currentTarget: e,
                                            target: e,
                                        },
                                        () =>
                                            (0, i.jsx)(es.W, {
                                                "data-menu-migrated-auto": !0,
                                                navId: "ChannelNotificationCustomSettingsItems",
                                                "aria-label": X.intl.string(X.t.kMdneQ),
                                                onClose: () => {},
                                                onSelect: () => {},
                                                children: (0, ea.d_)(t, () => h(!1)),
                                            }),
                                    );
                            },
                        }),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                role: "cell",
                children: (0, i.jsx)(Q.A, {
                    "aria-label": X.intl.formatToPlainString(X.t.Gd4bTU, { name: (0, M.m1)(t, H.default, P.A) }),
                    onClick: () => (0, ed.Au)(t.guild_id, t.id),
                    className: eg.DT,
                }),
            }),
        ],
    });
}
function ej(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([T.A], () => T.A.getGuildAlertSettings()[t]);
    return (0, i.jsxs)(j.B, {
        gap: 24,
        children: [
            (0, i.jsx)(N.d, {
                checked: !n?.disableRaidAlertNag,
                label: X.intl.string(X.t.u6dc5B),
                description: X.intl.string(X.t.z8Td48),
                onChange: (e) =>
                    (0, I.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        I.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, i.jsx)(N.d, {
                checked: !n?.disableRaidAlertPush,
                label: X.intl.string(X.t.P8MG6q),
                description: X.intl.string(X.t.PyxXs8),
                onChange: (e) =>
                    (0, I.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        I.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
var eN = n(702841),
    eS = n(270003),
    eA = n(355097);
function ev(e) {
    var t;
    let { guildId: n } = e,
        l = (0, eN.bG)([U.A], () => U.A.getGuild(n)),
        s = (0, eN.bG)([Y.Ay], () => Y.Ay.isMuted(n)),
        r = (0, eN.bG)([Y.Ay], () => Y.Ay.getMuteConfig(n));
    return null == l
        ? null
        : (0, i.jsxs)(eS.n, {
              children: [
                  (0, i.jsx)(N.d, {
                      label: X.intl.format(X.t["J+7D9E"], { name: l.name }),
                      description: X.intl.string(X.t.IngcUv),
                      checked: s,
                      onChange: (e) => {
                          C.A.updateGuildNotificationSettings(n, { muted: e }, F.G_.muted(e));
                      },
                  }),
                  s &&
                      (0, i.jsx)(S.l, {
                          label: X.intl.string(X.t.Ztu2Yo),
                          description:
                              null == (t = r) || null == t.end_time
                                  ? null
                                  : X.intl.formatToPlainString(X.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(X.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: (e) => {
                              let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                              C.A.updateGuildNotificationSettings(
                                  n,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  F.fd.Muted,
                              );
                          },
                          options: (0, W.b8)(),
                          value: r?.selected_time_window ?? eA.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
n(938796);
var ep = n(843282),
    eb = n(629584),
    eE = n(428678),
    ef = n(885574),
    e_ = n(276293),
    eC = n(777666),
    eG = n(910323),
    eL = n(790782),
    eM = n(629357);
function eO(e) {
    let t,
        { guildId: n } = e,
        s = (0, eN.bG)([Y.Ay], () => Y.Ay.getGuildFlags(n)),
        r = (0, eN.bG)([Y.Ay], () => {
            let e = Y.Ay.getGuildUnreadSetting(n),
                t = Y.Ay.getMessageNotifications(n);
            return e === eL.e.UNSET ? (t === K.orn.ALL_MESSAGES ? eL.e.ALL_MESSAGES : eL.e.ONLY_MENTIONS) : e;
        }),
        a = (0, eN.bG)([Y.Ay], () => Y.Ay.getMessageNotifications(n)),
        [d, o] = (0, l.useState)(!1),
        c = d ? ec.N9.CUSTOM : (0, ec.jU)(r, a);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: eM.Gk,
                children: (0, i.jsx)(eb.I, {
                    value: c,
                    options: [
                        { value: ec.N9.ALL_MESSAGES, name: X.intl.string(X.t.hZrr6k) },
                        { value: ec.N9.MENTIONS, name: X.intl.string(X.t.y59NJm) },
                        { value: ec.N9.NOTHING, name: X.intl.string(X.t["pGn/bJ"]) },
                        { value: ec.N9.CUSTOM, name: X.intl.string(X.t["32yow9"]) },
                    ],
                    onChange: (e) => {
                        let { value: t } = e;
                        t === ec.N9.CUSTOM ? o(!0) : (o(!1), (0, eG.i)(n, t));
                    },
                    className: eM.q0,
                    look: "pill",
                }),
            }),
            (0, i.jsx)("div", { className: eM.zV }),
            (0, i.jsxs)("div", {
                className: eM.xE,
                children: [
                    (0, i.jsxs)("div", {
                        className: eM.Vg,
                        children: [(0, i.jsx)(ey, { unreadSetting: r }), (0, i.jsx)(eT, { notificationSetting: a })],
                    }),
                    (0, i.jsxs)("div", {
                        className: eM.Vg,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(E.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t.Tqd1Af),
                                    }),
                                    (0, i.jsx)(E.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: X.intl.string(X.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(E.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t["1m22ZB"]),
                                    }),
                                    (0, i.jsx)(E.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: X.intl.string(X.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eM.Vg,
                        children: [
                            (0, i.jsx)(ep.Te, {
                                value: r,
                                className: eM.hF,
                                onChange: (e) => {
                                    o(!1),
                                        C.A.updateGuildNotificationSettings(
                                            n,
                                            {
                                                flags: (0, eo.md)(
                                                    s,
                                                    e === eL.e.ALL_MESSAGES
                                                        ? eA.n3.UNREADS_ALL_MESSAGES
                                                        : eA.n3.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            F.G_.unreads(e),
                                        );
                                },
                                options:
                                    ((t = { notificationSetting: a }),
                                    [
                                        { label: X.intl.string(X.t["HVah/3"]), value: eL.e.ALL_MESSAGES },
                                        {
                                            value: eL.e.ONLY_MENTIONS,
                                            label: X.intl.string(X.t["tu+ZWJ"]),
                                            disabled: t?.notificationSetting === K.orn.ALL_MESSAGES,
                                        },
                                    ]),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === eL.e.ONLY_MENTIONS && r !== eL.e.ONLY_MENTIONS;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", {
                                                children: (0, i.jsx)(E.E, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, i.jsx)(x.m, {
                                                    text: X.intl.string(X.t.eP8yWU),
                                                    children: (0, i.jsx)(eE.K, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: eM.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                            (0, i.jsx)(ep.Te, {
                                className: eM.hF,
                                value: a,
                                onChange: (e) => {
                                    o(!1);
                                    let t = { message_notifications: e };
                                    e === K.orn.ALL_MESSAGES &&
                                        r !== eL.e.ALL_MESSAGES &&
                                        (t.flags = (0, eo.md)(Y.Ay.getGuildFlags(n), eA.n3.UNREADS_ALL_MESSAGES)),
                                        C.A.updateGuildNotificationSettings(n, t, F.G_.notifications(e));
                                },
                                options: [
                                    { label: X.intl.string(X.t["HVah/3"]), value: K.orn.ALL_MESSAGES },
                                    { label: X.intl.string(X.t["tu+ZWJ"]), value: K.orn.ONLY_MENTIONS },
                                    { label: X.intl.string(X.t.X4wWUi), value: K.orn.NO_MESSAGES },
                                ],
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === K.orn.ALL_MESSAGES &&
                                        r !== eL.e.ALL_MESSAGES &&
                                        a !== K.orn.ALL_MESSAGES;
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(E.E, { variant: "text-md/normal", children: e.label }),
                                            t &&
                                                (0, i.jsx)(x.m, {
                                                    text: X.intl.string(X.t.idXSbI),
                                                    children: (0, i.jsx)(ef.m, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: eM.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ey(e) {
    let { unreadSetting: t } = e,
        n = [
            { badged: !0, unread: !0, muted: !1, name: X.intl.string(X.t.EjLobP) },
            { badged: !1, unread: !0, muted: !0, name: X.intl.string(X.t.Wgpwpp) },
            { badged: !1, unread: !1, muted: !0, name: X.intl.string(X.t.g9VImh) },
        ];
    return (
        t === eL.e.ALL_MESSAGES && (n[1].muted = !1),
        (0, i.jsx)("div", {
            className: eM.Qn,
            children: n.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: eM.h5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eM.A3,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: en()(eM.gy, { [eM.R]: !e.unread, [eM.BM]: e.muted }),
                                    }),
                                    (0, i.jsx)(e_.N, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: en()(eM.Uk, { [eM.SU]: e.muted }),
                                    }),
                                    (0, i.jsx)(E.E, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: en()(eM.qS, { [eM.R]: !e.badged }),
                                children: (0, i.jsx)(eC.hV, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function eT(e) {
    return (0, i.jsxs)("div", {
        className: eM.G5,
        children: [
            e.notificationSetting === K.orn.NO_MESSAGES && (0, i.jsx)("div", { className: eM._N }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)("img", { className: eM.p3, src: "/assets/011da80ab82e472d.png", alt: "" }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(E.E, { variant: "text-xs/medium", children: X.intl.string(X.t.qSq0tD) }),
                    e.notificationSetting === K.orn.ALL_MESSAGES &&
                        (0, i.jsx)(E.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: X.intl.string(X.t.WYyzI5),
                        }),
                    e.notificationSetting !== K.orn.ALL_MESSAGES &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, i.jsx)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: X.intl.string(X.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eI = n(476347);
function ek(e) {
    return (0, i.jsx)("div", {
        className: eI.bV,
        children: (0, i.jsx)(_.D, {
            variant: "text-xs/bold",
            className: eI.l_,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function eR(e) {
    return (0, i.jsx)("div", {
        className: eI.yV,
        children: (0, i.jsx)(E.E, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function ew(e) {
    return (0, i.jsxs)("div", {
        children: [
            null != e.title && (0, i.jsx)(ek, { title: e.title }),
            (0, i.jsx)("div", {
                className: en()(eI.f5, { [eI.ou]: !0 !== e.noPadding, [eI._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function eD(e) {
    let { guildId: t, ...n } = e,
        l = (0, y._g)(t);
    return (0, i.jsxs)(c.Modal, {
        ...n,
        title: X.intl.string(X.t.h850Ss),
        actions: [{ text: X.intl.string(X.t.i4jeWR), onClick: n.onClose }],
        children: [
            (0, i.jsx)(ew, { noPadding: !0, noContainer: !0, children: (0, i.jsx)(ev, { guildId: t }) }),
            (0, i.jsx)(ew, {
                title: X.intl.string(X.t.R9Ej96),
                noPadding: !0,
                children: (0, i.jsx)(eO, { guildId: t }),
            }),
            (0, i.jsx)(ew, { title: X.intl.string(X.t["31DySj"]), children: (0, i.jsx)(ei, { guildId: t }) }),
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ek, { title: X.intl.string(X.t.D9yVAH) }),
                        (0, i.jsx)(eR, { description: X.intl.string(X.t["0PhAOH"]) }),
                        (0, i.jsx)(ew, { children: (0, i.jsx)(ej, { guildId: t }) }),
                    ],
                }),
            (0, i.jsx)(ek, { title: X.intl.string(X.t.JrySi3) }),
            (0, i.jsx)(em, { guildId: t }),
        ],
    });
}
function eU(e) {
    let { label: t, channelId: n } = e,
        [l, s] = (0, u.yK)([R.A], () => {
            let e = R.A.getChannel(n);
            return [e, e?.parent_id != null ? R.A.getChannel(e.parent_id) : null];
        });
    return null == l ? t : (0, i.jsx)(g.X, { icon: (0, O.gU)(l), title: t, subtitle: s?.name });
}
function eP(e) {
    let { muteConfig: t, muted: n, guild: l, handleCheckboxChange: s } = e,
        r = t?.selected_time_window ?? eA.Xx.ALWAYS;
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: $.bj,
              children: [
                  (0, i.jsxs)(j.B, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(N.d, {
                              label: X.intl.formatToPlainString(X.t["J+7D9E"], { name: l.name }),
                              description: X.intl.string(X.t["8wbTQ6"]),
                              checked: n,
                              onChange: (e) => s("muted", e, F.G_.muted(e)),
                          }),
                          n
                              ? (0, i.jsx)(S.l, {
                                    label: X.intl.string(X.t.Ztu2Yo),
                                    options: (0, W.b8)(),
                                    value: r,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        C.A.updateGuildNotificationSettings(
                                            l.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            F.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(A.c, { gap: 20 }),
              ],
          });
}
function eY(e) {
    let { muted: t, messageNotifications: n, memberCount: l, handleRadioChange: s } = e;
    return (0, i.jsxs)("div", {
        className: $.YK,
        children: [
            (0, i.jsx)("div", {
                className: $.bj,
                children: (0, i.jsx)(v.z, {
                    label: X.intl.string(X.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => s("message_notifications", e, F.G_.notifications(e)),
                    options: [
                        {
                            name: X.intl.string(X.t["n/bTaY"]),
                            value: K.orn.ALL_MESSAGES,
                            desc: null != l && l >= K._4N ? X.intl.string(X.t.Dh5p5j) : null,
                        },
                        { name: X.intl.format(X.t.L2hmYy, {}), value: K.orn.ONLY_MENTIONS },
                        { name: X.intl.string(X.t.CtVGyQ), value: K.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, i.jsx)(A.c, {}),
        ],
    });
}
function eH(e) {
    let { guildId: t } = e,
        n = (0, y._g)(t),
        l = (0, u.bG)([T.A], () => T.A.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: $.YK,
            children: [
                (0, i.jsx)(p.l, {
                    className: $.bj,
                    children: (0, i.jsxs)(o.D, {
                        label: X.intl.string(X.t.D9yVAH),
                        description: X.intl.string(X.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(N.d, {
                                label: X.intl.string(X.t.u6dc5B),
                                description: X.intl.string(X.t.z8Td48),
                                checked: !l?.disableRaidAlertNag,
                                onChange: (e) =>
                                    (0, I.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        I.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, i.jsx)(N.d, {
                                label: X.intl.string(X.t.P8MG6q),
                                description: X.intl.string(X.t.PyxXs8),
                                checked: !l?.disableRaidAlertPush,
                                onChange: (e) =>
                                    (0, I.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        I.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(A.c, {}),
            ],
        });
}
function eB(e) {
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
    return (0, i.jsxs)(j.B, {
        className: $.bj,
        gap: 16,
        children: [
            (0, i.jsx)(N.d, {
                label: X.intl.format(X.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, F.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(A.c, {}),
            (0, i.jsx)(N.d, {
                label: X.intl.string(X.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, F.G_.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(A.c, {}),
            (0, i.jsxs)(j.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(N.d, {
                        label: X.intl.string(X.t.gPuteJ),
                        onChange: (e) => {
                            C.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? K.guM.DISABLED : K.guM.ENABLED },
                                F.G_.highlights(!e),
                            );
                        },
                        checked: d || s === K.guM.DISABLED,
                        disabled: d,
                        description: X.intl.string(X.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(b.Anchor, {
                        href: V.A.getArticleURL(K.MVz.HIGHLIGHTS),
                        children: (0, i.jsx)(E.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: X.intl.string(X.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(A.c, {}),
            (0, i.jsx)(N.d, {
                label: X.intl.string(X.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, F.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(A.c, {}),
            (0, i.jsx)(N.d, {
                label: X.intl.string(X.t.h1DL66),
                checked: !d && a,
                disabled: d,
                onChange: (e) => l("mobile_push", e, F.G_.mobilePush(e)),
            }),
        ],
    });
}
function eV(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: l, channels: s, categories: a } = e,
        d = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== K.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, M.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, i.jsx)("div", {
        className: $.bj,
        children: (0, i.jsx)(m.p, {
            label: X.intl.string(X.t["Z+oF8h"]),
            description: X.intl.string(X.t["2Y9ZfA"]),
            value: K.dJq,
            placeholder: X.intl.string(X.t["Z+oF8h"]),
            renderOptionLabel: (e) => (0, i.jsx)(eU, { label: e.label, channelId: e.value }),
            options: d,
            onChange: (e) => {
                if (null == e) return;
                let i = new Set(n);
                i.add(e), t(i), l(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function eF(e) {
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
        u = l.useMemo(() => new Set([...t, ...(0, W.ct)(n)]), [n, t]),
        g = (0, f.r)(h.A.unsafe_rawColors.GREEN_360).hex(),
        m = (e) => {
            let n = new Set(t);
            n.delete(e), d(n);
        },
        j = s
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
        (0 === u.size || 0 === j.length) &&
            j.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: $.uZ,
                        role: "row",
                        children: (0, i.jsx)("div", {
                            role: "cell",
                            children: (0, i.jsx)(E.E, {
                                className: $.sr,
                                variant: "text-sm/semibold",
                                children: X.intl.string(X.t["2Y9ZfA"]),
                            }),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)("div", {
            role: "table",
            "aria-label": X.intl.string(X.t.O4TIvi),
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
                                children: X.intl.string(X.t.uShwWv),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: X.intl.string(X.t.e29Z12),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: X.intl.string(X.t.DD6gNd),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: X.intl.string(X.t.CtVGyQ),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, i.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: (0, i.jsx)(x.m, {
                                    text: X.intl.string(X.t["8wbTQ6"]),
                                    position: "bottom",
                                    children: (0, i.jsx)("span", { children: X.intl.string(X.t.sWmtI6) }),
                                }),
                            }),
                        }),
                    ],
                }),
                j,
            ],
        })
    );
}
function eW(e) {
    let { guildId: t, onClose: n, transitionState: s } = e,
        r = (0, u.bG)([w.A], () => w.A.getCategories(t)),
        a = (0, u.bG)([U.A], () => U.A.getGuild(t)),
        d = (0, u.bG)([D.A], () => D.A.getMemberCount(t)),
        {
            suppressEveryone: o,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: x,
            muteConfig: j,
            messageNotifications: N,
            channelOverrides: S,
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
        [v, p] = l.useState(new Set()),
        [b, E] = l.useState(null),
        f = l.useMemo(
            () =>
                (0, L.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, k.tr)(t) || t === K.rbe.GUILD_CATEGORY;
                }),
            [r],
        ),
        _ = (e, n, i) => {
            C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(c.Modal, {
        title: X.intl.string(X.t.h850Ss),
        actions: [{ text: X.intl.string(X.t.i4jeWR), onClick: n }],
        onClose: n,
        transitionState: s,
        children: [
            (0, i.jsx)(eP, { muteConfig: j, muted: x, guild: a, handleCheckboxChange: _ }),
            (0, i.jsx)(eY, {
                muted: x,
                messageNotifications: N,
                memberCount: d,
                handleRadioChange: (e, n, i) => {
                    C.A.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(eH, { guildId: t }),
            (0, i.jsx)(eB, {
                suppressEveryone: o,
                suppressRoles: h,
                handleCheckboxChange: _,
                notifyHighlights: A,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(eV, {
                setNewChannelOverrides: p,
                newChannelOverrides: v,
                setLatestOverrideId: E,
                channels: f,
                categories: r,
            }),
            (0, i.jsx)(eF, {
                newChannelOverrides: v,
                channelOverrides: S,
                channels: f,
                categories: r,
                muted: x,
                setNewChannelOverrides: p,
                latestOverrideId: b,
                messageNotifications: N,
            }),
        ],
    });
}
function eZ(e) {
    let { ...t } = e;
    return (0, W.os)("NotificationSettingsModal") ? (0, i.jsx)(eD, { ...t }) : (0, i.jsx)(eW, { ...t });
}
