i.d(t, { default: () => eB }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(735438),
    r = i.n(s),
    a = i(989349),
    d = i.n(a),
    o = i(452027),
    c = i(189213),
    u = i(17928),
    h = i(661531),
    g = i(194667),
    m = i(444550),
    x = i(990078),
    j = i(331322),
    N = i(243721),
    A = i(691885),
    S = i(404778),
    v = i(773812),
    p = i(611677),
    b = i(349288),
    E = i(834730),
    f = i(602853),
    _ = i(534514),
    C = i(832712),
    G = i(544743),
    M = i(999903),
    L = i(47167),
    y = i(713654),
    O = i(585510),
    I = i(610136),
    T = i(594061),
    k = i(95701),
    R = i(734057),
    w = i(769765),
    D = i(498642),
    U = i(71393),
    P = i(994500),
    Y = i(543465),
    H = i(287809),
    V = i(403362),
    W = i(975571),
    B = i(477427),
    z = i(769591),
    F = i(150934),
    Z = i(359778),
    J = i(414079),
    Q = i(235986),
    q = i(652215),
    K = i(375708),
    X = i(964952);
class $ extends l.PureComponent {
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
    setMessageNotification(e, t, i) {
        let { channel: n } = this.props,
            l = n.getGuildId();
        null != l && C.A.updateChannelOverrideSettings(l, n.id, { message_notifications: e, muted: t ?? !1 }, i);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, B.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? q.orn.NULL, e, B.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        this.setMessageNotification(q.orn.NULL, !1, B.fd.OverrideDeleted), null != e && e(t.id);
    };
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: i, guildMessageNotifications: l } = this.props,
            s = t === e;
        return (
            (null == t || t === q.orn.NULL) && e === l && (s = !0),
            (0, n.jsx)(F.S, {
                checked: !i && s,
                label: "",
                disabled: i,
                onChange: this.handleRadioChange.bind(this, e),
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: i } = this.props;
        null != i.parent_id && (e = R.A.getChannel(i.parent_id));
        let l = (0, y.gU)(i);
        if (i.type === q.rbe.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
            let e = w.A.getCategories(i.guild_id);
            t = K.intl.formatToPlainString(K.t["2KzH89"], { num: null != e[i.id] ? e[i.id].length : 0 });
        } else
            t =
                null != e
                    ? K.intl.formatToPlainString(K.t.L1zJgb, { categoryName: (0, L.m1)(e, H.default, P.A) })
                    : K.intl.string(K.t.uIzfCE);
        return (0, n.jsxs)(Q.A, {
            grow: 1,
            className: X.VW,
            role: "cell",
            children: [
                null != l ? (0, n.jsx)(l, { className: X.Kk }) : null,
                (0, n.jsxs)("div", {
                    className: X.aT,
                    children: [
                        (0, n.jsx)(E.E, {
                            variant: "text-md/semibold",
                            className: X.HA,
                            children: (0, L.m1)(i, H.default, P.A),
                        }),
                        (0, n.jsx)(E.E, { variant: "text-xs/normal", className: X.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, n.jsxs)(Q.A, {
            grow: 0,
            shrink: 0,
            role: "presentation",
            className: X.Pm,
            justify: Q.A.Justify.AROUND,
            align: Q.A.Align.CENTER,
            children: [
                (0, n.jsx)(Q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? X.mH : X.HI,
                    children: this.renderMessageNotificationsRadioOption(q.orn.ALL_MESSAGES),
                }),
                (0, n.jsx)(Q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? X.mH : X.HI,
                    children: this.renderMessageNotificationsRadioOption(q.orn.ONLY_MENTIONS),
                }),
                (0, n.jsx)(Q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? X.mH : X.HI,
                    children: this.renderMessageNotificationsRadioOption(q.orn.NO_MESSAGES),
                }),
                (0, n.jsx)(Q.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: X.dy,
                    children: (0, n.jsx)(F.S, { checked: e, label: "", onChange: this.handleMute }),
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, n.jsxs)(Z.Z, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            role: "row",
            className: e ? X.J$ : X.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, n.jsx)("div", {
                    role: "cell",
                    children: (0, n.jsx)(J.A, { className: X.ZY, onClick: this.handleDelete }),
                }),
            ],
        });
    }
}
var ee = i(503698),
    et = i.n(ee);
function ei(e) {
    let { guildId: t } = e,
        i = (0, u.cf)([Y.Ay], () => ({
            highligths: Y.Ay.getNotifyHighlights(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
        })),
        l = C.A.updateGuildNotificationSettings;
    return (0, n.jsxs)(j.B, {
        gap: 24,
        children: [
            (0, n.jsx)(N.d, {
                checked: i.suppressEveryone,
                label: K.intl.format(K.t.OWiWAp, {}),
                onChange: (e) => l(t, { suppress_everyone: e }, B.G_.suppressEveryone(e)),
            }),
            (0, n.jsx)(N.d, {
                checked: i.suppressRoles,
                label: K.intl.string(K.t["O/QdoD"]),
                onChange: (e) => l(t, { suppress_roles: e }, B.G_.suppressRoles(e)),
            }),
            (0, n.jsx)(N.d, {
                label: K.intl.string(K.t.gPuteJ),
                description: K.intl.string(K.t["Vw/Xn8"]),
                checked: i.highligths === q.guM.ENABLED,
                onChange: (e) => l(t, { notify_highlights: e ? q.guM.ENABLED : q.guM.DISABLED }, B.G_.highlights(e)),
            }),
            (0, n.jsx)(N.d, {
                checked: i.muteScheduledEvents,
                label: K.intl.string(K.t.ONG3Yz),
                onChange: (e) => l(t, { mute_scheduled_events: e }, B.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(N.d, {
                checked: i.mobilePush,
                label: K.intl.string(K.t.h1DL66),
                onChange: (e) => l(t, { mobile_push: e }, B.G_.mobilePush(e)),
            }),
        ],
    });
}
var en = i(980707),
    el = i(442433),
    es = i(661504),
    er = i(887560),
    ea = i(393432),
    ed = i(24873);
let eo = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, k.tr)(t) || t === q.rbe.GUILD_CATEGORY;
};
function ec(e) {
    let { guildId: t, onSelected: i } = e,
        { channels: l, categories: s } = (0, u.cf)([w.A], () => {
            let e = w.A.getCategories(t);
            return { channels: (0, M.A)(e._categories, e, eo), categories: e };
        }),
        a = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== q.rbe.GUILD_CATEGORY || (null != s[t.id] && s[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, L.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, n.jsx)(m.p, {
        description: K.intl.string(K.t["2Y9ZfA"]),
        value: q.dJq,
        onChange: i,
        options: a,
        renderOptionLabel: (e) => {
            let t = R.A.getChannel(e.value);
            if (null == t) return e.label;
            let i = R.A.getChannel(t.parent_id),
                l = null != i ? i.name : null;
            return (0, n.jsx)(g.X, { icon: (0, y.gU)(t), title: e.label, subtitle: l });
        },
        placeholder: K.intl.string(K.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
var eu = i(682545);
let eh = l.forwardRef(function (e, t) {
    let { guildId: i } = e,
        [s, r] = l.useState(null),
        a = (0, u.yK)([R.A, Y.Ay], () =>
            (0, z.ct)(Y.Ay.getChannelOverrides(i), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => R.A.getChannel(e))
                .filter(V.Vq),
        ),
        d = (0, u.bG)([w.A], () => w.A.getCategories(i)),
        o = a.map((e, t) =>
            (0, n.jsxs)(
                l.Fragment,
                {
                    children: [
                        (0, n.jsx)(eg, { channel: e, categories: d, autoFocus: s === e.id }),
                        t < a.length - 1 && (0, n.jsx)("div", { className: eu.me, role: "presentation" }),
                    ],
                },
                e.id,
            ),
        );
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsx)(ec, {
                guildId: i,
                onSelected: (e) => {
                    if (null != a.find((t) => t.id === e)) return;
                    let t = R.A.getChannel(e);
                    null != t &&
                        (C.A.updateChannelOverrideSettings(
                            i,
                            e,
                            {
                                muted: !1,
                                message_notifications: Y.Ay.resolvedMessageNotifications(t),
                                flags: (0, ea.mD)(
                                    Y.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    Y.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            B.fd.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            o.length > 0 &&
                (0, n.jsxs)("div", {
                    className: eu.tp,
                    role: "table",
                    "aria-label": K.intl.string(K.t.O4TIvi),
                    children: [
                        (0, n.jsxs)("div", {
                            className: eu.nM,
                            role: "row",
                            children: [
                                (0, n.jsx)("div", {
                                    className: eu._k,
                                    role: "columnheader",
                                    children: (0, n.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.uShwWv),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: eu.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.hZrr6k),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: eu.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.y59NJm),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: eu.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: K.intl.string(K.t["pGn/bJ"]),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: eu.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(E.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: K.intl.string(K.t["32yow9"]),
                                    }),
                                }),
                            ],
                        }),
                        o.length > 0 && (0, n.jsx)("div", { className: eu.BM, role: "rowgroup", children: o }),
                    ],
                }),
        ],
    });
});
function eg(e) {
    let { channel: t, categories: i, autoFocus: s } = e,
        r = (0, u.bG)([R.A], () => R.A.getChannel(t?.parent_id)),
        a = (0, er.bH)(t),
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
    let g = K.intl.string(K.t.uIzfCE),
        m = (0, y.gU)(t);
    t.type === q.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (g = K.intl.formatToPlainString(K.t["2KzH89"], { num: null != i[t.id] ? i[t.id].length : 0 }))
        : null != r && (g = K.intl.formatToPlainString(K.t.L1zJgb, { categoryName: (0, L.m1)(r, H.default, P.A) }));
    let x = c ? ed.N9.CUSTOM : a.preset;
    return (0, n.jsxs)("div", {
        ref: d,
        className: et()(eu.nM, eu.Ix, eu.WG),
        role: "row",
        children: [
            (0, n.jsxs)("div", {
                className: et()(eu._k, eu.cU),
                role: "cell",
                children: [
                    null != m
                        ? (0, n.jsx)(m, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                              className: eu.Kk,
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(E.E, {
                                variant: "text-md/semibold",
                                className: eu.cU,
                                children: (0, L.m1)(t, H.default, P.A),
                            }),
                            (0, n.jsx)(E.E, { variant: "text-xs/medium", className: eu.cU, children: g }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: eu.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(F.S, {
                        checked: x === ed.N9.ALL_MESSAGES,
                        label: "",
                        onChange: () => {
                            (0, er.gN)(t.guild_id, t.id, ed.N9.ALL_MESSAGES), h(!1);
                        },
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: eu.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(F.S, {
                        checked: x === ed.N9.MENTIONS,
                        label: "",
                        onChange: () => {
                            (0, er.gN)(t.guild_id, t.id, ed.N9.MENTIONS), h(!1);
                        },
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: eu.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(F.S, {
                        checked: x === ed.N9.NOTHING,
                        label: "",
                        onChange: () => {
                            (0, er.gN)(t.guild_id, t.id, ed.N9.NOTHING), h(!1);
                        },
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: eu.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                        ref: o,
                        style: { display: "inline-flex" },
                        children: (0, n.jsx)(F.S, {
                            checked: x === ed.N9.CUSTOM,
                            label: "",
                            onChange: () => {
                                h(!0);
                                let e = o.current;
                                null != e &&
                                    (0, el.jA)(
                                        {
                                            stopPropagation: () => {},
                                            preventDefault: () => {},
                                            currentTarget: e,
                                            target: e,
                                        },
                                        () =>
                                            (0, n.jsx)(en.W, {
                                                "data-menu-migrated-auto": !0,
                                                navId: "ChannelNotificationCustomSettingsItems",
                                                "aria-label": K.intl.string(K.t.kMdneQ),
                                                onClose: () => {},
                                                onSelect: () => {},
                                                children: (0, es.d_)(t, () => h(!1)),
                                            }),
                                    );
                            },
                        }),
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                role: "cell",
                children: (0, n.jsx)(J.A, { onClick: () => (0, er.Au)(t.guild_id, t.id), className: eu.DT }),
            }),
        ],
    });
}
function em(e) {
    let { guildId: t } = e,
        i = (0, u.bG)([I.A], () => I.A.getGuildAlertSettings()[t]);
    return (0, n.jsxs)(j.B, {
        gap: 24,
        children: [
            (0, n.jsx)(N.d, {
                checked: !i?.disableRaidAlertNag,
                label: K.intl.string(K.t.u6dc5B),
                description: K.intl.string(K.t.z8Td48),
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
                checked: !i?.disableRaidAlertPush,
                label: K.intl.string(K.t.P8MG6q),
                description: K.intl.string(K.t.PyxXs8),
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
var ex = i(702841),
    ej = i(270003),
    eN = i(355097);
function eA(e) {
    var t;
    let { guildId: i } = e,
        l = (0, ex.bG)([U.A], () => U.A.getGuild(i)),
        s = (0, ex.bG)([Y.Ay], () => Y.Ay.isMuted(i)),
        r = (0, ex.bG)([Y.Ay], () => Y.Ay.getMuteConfig(i));
    return null == l
        ? null
        : (0, n.jsxs)(ej.n, {
              children: [
                  (0, n.jsx)(N.d, {
                      label: K.intl.format(K.t["J+7D9E"], { name: l.name }),
                      description: K.intl.string(K.t.IngcUv),
                      checked: s,
                      onChange: (e) => {
                          C.A.updateGuildNotificationSettings(i, { muted: e }, B.G_.muted(e));
                      },
                  }),
                  s &&
                      (0, n.jsx)(A.l, {
                          label: K.intl.string(K.t.Ztu2Yo),
                          description:
                              null == (t = r) || null == t.end_time
                                  ? null
                                  : K.intl.formatToPlainString(K.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(K.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: (e) => {
                              let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                              C.A.updateGuildNotificationSettings(
                                  i,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  B.fd.Muted,
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
i(938796);
var eS = i(843282),
    ev = i(629584),
    ep = i(428678),
    eb = i(885574),
    eE = i(276293),
    ef = i(777666),
    e_ = i(910323),
    eC = i(790782),
    eG = i(629357);
function eM(e) {
    let t,
        { guildId: i } = e,
        s = (0, ex.bG)([Y.Ay], () => Y.Ay.getGuildFlags(i)),
        r = (0, ex.bG)([Y.Ay], () => {
            let e = Y.Ay.getGuildUnreadSetting(i),
                t = Y.Ay.getMessageNotifications(i);
            return e === eC.e.UNSET ? (t === q.orn.ALL_MESSAGES ? eC.e.ALL_MESSAGES : eC.e.ONLY_MENTIONS) : e;
        }),
        a = (0, ex.bG)([Y.Ay], () => Y.Ay.getMessageNotifications(i)),
        [d, o] = (0, l.useState)(!1),
        c = d ? ed.N9.CUSTOM : (0, ed.jU)(r, a);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)("div", {
                className: eG.Gk,
                children: (0, n.jsx)(ev.I, {
                    value: c,
                    options: [
                        { value: ed.N9.ALL_MESSAGES, name: K.intl.string(K.t.hZrr6k) },
                        { value: ed.N9.MENTIONS, name: K.intl.string(K.t.y59NJm) },
                        { value: ed.N9.NOTHING, name: K.intl.string(K.t["pGn/bJ"]) },
                        { value: ed.N9.CUSTOM, name: K.intl.string(K.t["32yow9"]) },
                    ],
                    onChange: (e) => {
                        let { value: t } = e;
                        t === ed.N9.CUSTOM ? o(!0) : (o(!1), (0, e_.i)(i, t));
                    },
                    className: eG.q0,
                    look: "pill",
                }),
            }),
            (0, n.jsx)("div", { className: eG.zV }),
            (0, n.jsxs)("div", {
                className: eG.xE,
                children: [
                    (0, n.jsxs)("div", {
                        className: eG.Vg,
                        children: [(0, n.jsx)(eL, { unreadSetting: r }), (0, n.jsx)(ey, { notificationSetting: a })],
                    }),
                    (0, n.jsxs)("div", {
                        className: eG.Vg,
                        children: [
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(E.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: K.intl.string(K.t.Tqd1Af),
                                    }),
                                    (0, n.jsx)(E.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: K.intl.string(K.t.RpQgm5),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(E.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: K.intl.string(K.t["1m22ZB"]),
                                    }),
                                    (0, n.jsx)(E.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: K.intl.string(K.t["4bP2ZZ"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eG.Vg,
                        children: [
                            (0, n.jsx)(eS.Te, {
                                value: r,
                                className: eG.hF,
                                onChange: (e) => {
                                    o(!1),
                                        C.A.updateGuildNotificationSettings(
                                            i,
                                            {
                                                flags: (0, ea.md)(
                                                    s,
                                                    e === eC.e.ALL_MESSAGES
                                                        ? eN.n3.UNREADS_ALL_MESSAGES
                                                        : eN.n3.UNREADS_ONLY_MENTIONS,
                                                ),
                                            },
                                            B.G_.unreads(e),
                                        );
                                },
                                options:
                                    ((t = { notificationSetting: a }),
                                    [
                                        { label: K.intl.string(K.t["HVah/3"]), value: eC.e.ALL_MESSAGES },
                                        {
                                            value: eC.e.ONLY_MENTIONS,
                                            label: K.intl.string(K.t["tu+ZWJ"]),
                                            disabled: t?.notificationSetting === q.orn.ALL_MESSAGES,
                                        },
                                    ]),
                                renderOptionLabel: (e) => {
                                    let t = e.disabled && e.value === eC.e.ONLY_MENTIONS && r !== eC.e.ONLY_MENTIONS;
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("div", {
                                                children: (0, n.jsx)(E.E, {
                                                    variant: "text-md/normal",
                                                    color: e.disabled ? "text-muted" : void 0,
                                                    children: e.label,
                                                }),
                                            }),
                                            t &&
                                                (0, n.jsx)(x.m, {
                                                    text: K.intl.string(K.t.eP8yWU),
                                                    children: (0, n.jsx)(ep.K, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: eG.SU,
                                                    }),
                                                }),
                                        ],
                                    });
                                },
                                "data-migration-pending": !0,
                            }),
                            (0, n.jsx)(eS.Te, {
                                className: eG.hF,
                                value: a,
                                onChange: (e) => {
                                    o(!1);
                                    let t = { message_notifications: e };
                                    e === q.orn.ALL_MESSAGES &&
                                        r !== eC.e.ALL_MESSAGES &&
                                        (t.flags = (0, ea.md)(Y.Ay.getGuildFlags(i), eN.n3.UNREADS_ALL_MESSAGES)),
                                        C.A.updateGuildNotificationSettings(i, t, B.G_.notifications(e));
                                },
                                options: [
                                    { label: K.intl.string(K.t["HVah/3"]), value: q.orn.ALL_MESSAGES },
                                    { label: K.intl.string(K.t["tu+ZWJ"]), value: q.orn.ONLY_MENTIONS },
                                    { label: K.intl.string(K.t.X4wWUi), value: q.orn.NO_MESSAGES },
                                ],
                                renderOptionLabel: (e) => {
                                    let t =
                                        e.value === q.orn.ALL_MESSAGES &&
                                        r !== eC.e.ALL_MESSAGES &&
                                        a !== q.orn.ALL_MESSAGES;
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(E.E, { variant: "text-md/normal", children: e.label }),
                                            t &&
                                                (0, n.jsx)(x.m, {
                                                    text: K.intl.string(K.t.idXSbI),
                                                    children: (0, n.jsx)(eb.m, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        className: eG.SU,
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
function eL(e) {
    let { unreadSetting: t } = e,
        i = [
            { badged: !0, unread: !0, muted: !1, name: K.intl.string(K.t.EjLobP) },
            { badged: !1, unread: !0, muted: !0, name: K.intl.string(K.t.Wgpwpp) },
            { badged: !1, unread: !1, muted: !0, name: K.intl.string(K.t.g9VImh) },
        ];
    return (
        t === eC.e.ALL_MESSAGES && (i[1].muted = !1),
        (0, n.jsx)("div", {
            className: eG.Qn,
            children: i.map((e) =>
                (0, n.jsxs)(
                    "div",
                    {
                        className: eG.h5,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eG.A3,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: et()(eG.gy, { [eG.R]: !e.unread, [eG.BM]: e.muted }),
                                    }),
                                    (0, n.jsx)(eE.N, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: et()(eG.Uk, { [eG.SU]: e.muted }),
                                    }),
                                    (0, n.jsx)(E.E, {
                                        variant: "text-xs/normal",
                                        color: e.muted ? "text-muted" : void 0,
                                        children: e.name,
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: et()(eG.qS, { [eG.R]: !e.badged }),
                                children: (0, n.jsx)(ef.hV, { count: 1 }),
                            }),
                        ],
                    },
                    e.name,
                ),
            ),
        })
    );
}
function ey(e) {
    return (0, n.jsxs)("div", {
        className: eG.G5,
        children: [
            e.notificationSetting === q.orn.NO_MESSAGES && (0, n.jsx)("div", { className: eG._N }),
            (0, n.jsx)("div", {
                children: (0, n.jsx)("img", { className: eG.p3, src: "/assets/011da80ab82e472d.png", alt: "" }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(E.E, { variant: "text-xs/medium", children: K.intl.string(K.t.qSq0tD) }),
                    e.notificationSetting === q.orn.ALL_MESSAGES &&
                        (0, n.jsx)(E.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: K.intl.string(K.t.WYyzI5),
                        }),
                    e.notificationSetting !== q.orn.ALL_MESSAGES &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "text-link",
                                    tag: "span",
                                    children: ["@Roka", " "],
                                }),
                                (0, n.jsx)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    tag: "span",
                                    children: K.intl.string(K.t.WYyzI5),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eO = i(476347);
function eI(e) {
    return (0, n.jsx)("div", {
        className: eO.bV,
        children: (0, n.jsx)(_.D, {
            variant: "text-xs/bold",
            className: eO.l_,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function eT(e) {
    return (0, n.jsx)("div", {
        className: eO.yV,
        children: (0, n.jsx)(E.E, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function ek(e) {
    return (0, n.jsxs)("div", {
        children: [
            null != e.title && (0, n.jsx)(eI, { title: e.title }),
            (0, n.jsx)("div", {
                className: et()(eO.f5, { [eO.ou]: !0 !== e.noPadding, [eO._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function eR(e) {
    let { guildId: t, ...i } = e,
        l = (0, O._g)(t);
    return (0, n.jsxs)(c.Modal, {
        ...i,
        title: K.intl.string(K.t.h850Ss),
        actions: [{ text: K.intl.string(K.t.i4jeWR), onClick: i.onClose }],
        children: [
            (0, n.jsx)(ek, { noPadding: !0, noContainer: !0, children: (0, n.jsx)(eA, { guildId: t }) }),
            (0, n.jsx)(ek, {
                title: K.intl.string(K.t.R9Ej96),
                noPadding: !0,
                children: (0, n.jsx)(eM, { guildId: t }),
            }),
            (0, n.jsx)(ek, { title: K.intl.string(K.t["31DySj"]), children: (0, n.jsx)(ei, { guildId: t }) }),
            l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(eI, { title: K.intl.string(K.t.D9yVAH) }),
                        (0, n.jsx)(eT, { description: K.intl.string(K.t["0PhAOH"]) }),
                        (0, n.jsx)(ek, { children: (0, n.jsx)(em, { guildId: t }) }),
                    ],
                }),
            (0, n.jsx)(eI, { title: K.intl.string(K.t.JrySi3) }),
            (0, n.jsx)(eh, { guildId: t }),
        ],
    });
}
function ew(e) {
    let { label: t, channelId: i } = e,
        [l, s] = (0, u.yK)([R.A], () => {
            let e = R.A.getChannel(i);
            return [e, e?.parent_id != null ? R.A.getChannel(e.parent_id) : null];
        });
    return null == l ? t : (0, n.jsx)(g.X, { icon: (0, y.gU)(l), title: t, subtitle: s?.name });
}
function eD(e) {
    let { muteConfig: t, muted: i, guild: l, handleCheckboxChange: s } = e,
        r = t?.selected_time_window ?? eN.Xx.ALWAYS;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: X.bj,
              children: [
                  (0, n.jsxs)(j.B, {
                      gap: 20,
                      children: [
                          (0, n.jsx)(N.d, {
                              label: K.intl.formatToPlainString(K.t["J+7D9E"], { name: l.name }),
                              description: K.intl.string(K.t["8wbTQ6"]),
                              checked: i,
                              onChange: (e) => s("muted", e, B.G_.muted(e)),
                          }),
                          i
                              ? (0, n.jsx)(A.l, {
                                    label: K.intl.string(K.t.Ztu2Yo),
                                    options: (0, z.b8)(),
                                    value: r,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        C.A.updateGuildNotificationSettings(
                                            l.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            B.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, n.jsx)(S.c, { gap: 20 }),
              ],
          });
}
function eU(e) {
    let { muted: t, messageNotifications: i, memberCount: l, handleRadioChange: s } = e;
    return (0, n.jsxs)("div", {
        className: X.YK,
        children: [
            (0, n.jsx)("div", {
                className: X.bj,
                children: (0, n.jsx)(v.z, {
                    label: K.intl.string(K.t.lprV7V),
                    disabled: t,
                    value: i,
                    onChange: (e) => s("message_notifications", e, B.G_.notifications(e)),
                    options: [
                        {
                            name: K.intl.string(K.t["n/bTaY"]),
                            value: q.orn.ALL_MESSAGES,
                            desc: null != l && l >= q._4N ? K.intl.string(K.t.Dh5p5j) : null,
                        },
                        { name: K.intl.format(K.t.L2hmYy, {}), value: q.orn.ONLY_MENTIONS },
                        { name: K.intl.string(K.t.CtVGyQ), value: q.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, n.jsx)(S.c, {}),
        ],
    });
}
function eP(e) {
    let { guildId: t } = e,
        i = (0, O._g)(t),
        l = (0, u.bG)([I.A], () => I.A.getGuildAlertSettings()[t]);
    if (i)
        return (0, n.jsxs)("div", {
            className: X.YK,
            children: [
                (0, n.jsx)(p.l, {
                    className: X.bj,
                    children: (0, n.jsxs)(o.D, {
                        label: K.intl.string(K.t.D9yVAH),
                        description: K.intl.string(K.t["0PhAOH"]),
                        children: [
                            (0, n.jsx)(N.d, {
                                label: K.intl.string(K.t.u6dc5B),
                                description: K.intl.string(K.t.z8Td48),
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
                                label: K.intl.string(K.t.P8MG6q),
                                description: K.intl.string(K.t.PyxXs8),
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
                (0, n.jsx)(S.c, {}),
            ],
        });
}
function eY(e) {
    let {
        suppressEveryone: t,
        suppressRoles: i,
        handleCheckboxChange: l,
        notifyHighlights: s,
        muteEvents: r,
        mobilePush: a,
        muted: d,
        guildId: o,
    } = e;
    return (0, n.jsxs)(j.B, {
        className: X.bj,
        gap: 16,
        children: [
            (0, n.jsx)(N.d, {
                label: K.intl.format(K.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, B.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, n.jsx)(S.c, {}),
            (0, n.jsx)(N.d, {
                label: K.intl.string(K.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, B.G_.suppressRoles(e)),
                checked: i,
            }),
            (0, n.jsx)(S.c, {}),
            (0, n.jsxs)(j.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(N.d, {
                        label: K.intl.string(K.t.gPuteJ),
                        onChange: (e) => {
                            C.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? q.guM.DISABLED : q.guM.ENABLED },
                                B.G_.highlights(!e),
                            );
                        },
                        checked: d || s === q.guM.DISABLED,
                        disabled: d,
                        description: K.intl.string(K.t["Vw/Xn8"]),
                    }),
                    (0, n.jsx)(b.Anchor, {
                        href: W.A.getArticleURL(q.MVz.HIGHLIGHTS),
                        children: (0, n.jsx)(E.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: K.intl.string(K.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(S.c, {}),
            (0, n.jsx)(N.d, {
                label: K.intl.string(K.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, B.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(S.c, {}),
            (0, n.jsx)(N.d, {
                label: K.intl.string(K.t.h1DL66),
                checked: !d && a,
                disabled: d,
                onChange: (e) => l("mobile_push", e, B.G_.mobilePush(e)),
            }),
        ],
    });
}
function eH(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: i, setLatestOverrideId: l, channels: s, categories: a } = e,
        d = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== q.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, L.m1)(t, H.default, P.A) };
            })
            .value();
    return (0, n.jsx)("div", {
        className: X.bj,
        children: (0, n.jsx)(m.p, {
            label: K.intl.string(K.t["Z+oF8h"]),
            description: K.intl.string(K.t["2Y9ZfA"]),
            value: q.dJq,
            placeholder: K.intl.string(K.t["Z+oF8h"]),
            renderOptionLabel: (e) => (0, n.jsx)(ew, { label: e.label, channelId: e.value }),
            options: d,
            onChange: (e) => {
                if (null == e) return;
                let n = new Set(i);
                n.add(e), t(n), l(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function eV(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: i,
            channels: s,
            categories: r,
            muted: a,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        u = l.useMemo(() => new Set([...t, ...(0, z.ct)(i)]), [i, t]),
        g = (0, f.r)(h.A.unsafe_rawColors.GREEN_360).hex(),
        m = (e) => {
            let i = new Set(t);
            i.delete(e), d(i);
        },
        j = s
            .map((e) => {
                let { channel: t } = e;
                if (!u.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let l = i[t.id];
                return (0, n.jsx)(
                    $,
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
            .filter(V.Vq);
    return (
        (0 === u.size || 0 === j.length) &&
            j.push(
                (0, n.jsx)(
                    "div",
                    {
                        className: X.uZ,
                        role: "row",
                        children: (0, n.jsx)("div", {
                            role: "cell",
                            children: (0, n.jsx)(E.E, {
                                className: X.sr,
                                variant: "text-sm/semibold",
                                children: K.intl.string(K.t["2Y9ZfA"]),
                            }),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, n.jsxs)("div", {
            role: "table",
            "aria-label": K.intl.string(K.t.O4TIvi),
            children: [
                (0, n.jsxs)("div", {
                    className: X.n_,
                    role: "row",
                    children: [
                        (0, n.jsx)("div", {
                            className: X.$m,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: X.Bv,
                                children: K.intl.string(K.t.uShwWv),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: X.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: X.BO,
                                children: K.intl.string(K.t.e29Z12),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: X.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: X.BO,
                                children: K.intl.string(K.t.DD6gNd),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: X.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: X.BO,
                                children: K.intl.string(K.t.CtVGyQ),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: X.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: X.BO,
                                children: (0, n.jsx)(x.m, {
                                    text: K.intl.string(K.t["8wbTQ6"]),
                                    position: "bottom",
                                    children: (0, n.jsx)("span", { children: K.intl.string(K.t.sWmtI6) }),
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
    let { guildId: t, onClose: i, transitionState: s } = e,
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
            channelOverrides: A,
            notifyHighlights: S,
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
                (0, M.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, k.tr)(t) || t === q.rbe.GUILD_CATEGORY;
                }),
            [r],
        ),
        _ = (e, i, n) => {
            C.A.updateGuildNotificationSettings(t, { [e]: i }, n);
        };
    return (0, n.jsxs)(c.Modal, {
        title: K.intl.string(K.t.h850Ss),
        actions: [{ text: K.intl.string(K.t.i4jeWR), onClick: i }],
        onClose: i,
        transitionState: s,
        children: [
            (0, n.jsx)(eD, { muteConfig: j, muted: x, guild: a, handleCheckboxChange: _ }),
            (0, n.jsx)(eU, {
                muted: x,
                messageNotifications: N,
                memberCount: d,
                handleRadioChange: (e, i, n) => {
                    C.A.updateGuildNotificationSettings(t, { [e]: i }, n);
                },
            }),
            (0, n.jsx)(eP, { guildId: t }),
            (0, n.jsx)(eY, {
                suppressEveryone: o,
                suppressRoles: h,
                handleCheckboxChange: _,
                notifyHighlights: S,
                muteEvents: g,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, n.jsx)(eH, {
                setNewChannelOverrides: p,
                newChannelOverrides: v,
                setLatestOverrideId: E,
                channels: f,
                categories: r,
            }),
            (0, n.jsx)(eV, {
                newChannelOverrides: v,
                channelOverrides: A,
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
function eB(e) {
    let { ...t } = e;
    return (0, z.os)("NotificationSettingsModal") ? (0, n.jsx)(eR, { ...t }) : (0, n.jsx)(eW, { ...t });
}
