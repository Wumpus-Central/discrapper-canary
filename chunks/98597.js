n.d(t, {
    CN: () => N,
    ZP: () => M,
    eP: () => A,
    hR: () => T,
    jo: () => Z,
});
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(787014),
    d = n(924301),
    p = n(340541),
    h = n(159300),
    f = n(152376),
    g = n(427679),
    m = n(155409),
    b = n(131704),
    O = n(199902),
    y = n(430824),
    _ = n(496675),
    v = n(914010),
    j = n(281029),
    x = n(981631),
    C = n(388032),
    E = n(55940);
function S(e, t, n) {
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
function P(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t, n) {
    return null != t && !!t && !(0, j.ig)(n, e.type);
}
function Z(e, t) {
    return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore;
}
function w(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.ua7, {
        text: C.intl.string(C.t.OBr7Cw),
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: s, onFocus: u, onBlur: d } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(E.iconItem, n ? E.alwaysShown : void 0, r ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: l,
                tabIndex: t,
                "aria-label": C.intl.string(C.t.OBr7Cw),
                onMouseEnter: o,
                onMouseLeave: s,
                onFocus: u,
                onBlur: d,
                children: (0, i.jsx)(c.xhG, {
                    size: "xs",
                    color: "currentColor",
                    className: E.actionIcon,
                }),
            });
        },
    });
}
function T(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    if (
        (0, s.e7)(
            [_.Z, v.Z],
            () =>
                n ||
                v.Z.getGuildId() === x.I_8 ||
                (!_.Z.can(x.Plq.MANAGE_CHANNELS, t) &&
                    !_.Z.can(x.Plq.MANAGE_ROLES, t) &&
                    !_.Z.can(x.Plq.MANAGE_WEBHOOKS, t)) ||
                ((0, b.r8)(t.type) && !_.Z.can(x.Plq.VIEW_CHANNEL, t)) ||
                (t.isGuildVocal() && !_.Z.can(x.Plq.CONNECT, t)) ||
                !b.dF.has(t.type) ||
                t.isModeratorReportChannel(),
        )
    )
        return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: C.intl.string(C.t["3gUsJS"]),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(E.iconItem, l ? E.alwaysShown : void 0, o ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: d,
                tabIndex: r,
                "aria-label": C.intl.string(C.t["3gUsJS"]),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
                onBlur: u,
                children: (0, i.jsx)(c.ewm, {
                    size: "xs",
                    color: "currentColor",
                    className: E.actionIcon,
                }),
            });
        },
    });
}
function A(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: o,
            tabIndex: u,
            forceShowButtons: f,
            hasChannelInfo: b = !1,
        } = e,
        v = (0, p._k)({ location: "channel_base" }),
        j = (0, s.e7)([y.Z], () => y.Z.getGuild(t.getGuildId())),
        S = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        N = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        Z = (0, s.e7)([_.Z], () => (0, h.b)(_.Z, j, t, S)),
        w = (0, s.e7)([_.Z], () =>
            (null == t ? void 0 : t.type) === x.d4z.GUILD_VOICE && v.isVoiceChannelEntrypointEnabled
                ? C.intl.string(C.t["EE+P0N"])
                : v.isTextChannelEntrypointEnabled
                  ? C.intl.string(C.t["0jeAXl"])
                  : _.Z.can(x.Plq.CREATE_INSTANT_INVITE, t)
                    ? C.intl.string(C.t.zJrgTE)
                    : C.intl.string(C.t.Sd8Ix8),
        ),
        T = l.useRef(null);
    if (o || !Z || t.isModeratorReportChannel()) return null;
    function A() {
        if (null != j) {
            let e = O.Z.getAllActiveStreams().filter((e) => e.state !== x.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        I(P({}, n), {
                            guild: j,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: x.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: N,
                        }),
                    );
            });
        }
    }
    let R = [v.isVoiceChannelEntrypointEnabled, v.isTextChannelEntrypointEnabled].some(Boolean) ? c.oLu : c.ejJ,
        D = (0, i.jsx)(R, {
            size: "xs",
            className: E.actionIcon,
            "aria-hidden": !0,
            color: "currentColor",
        });
    return (
        r &&
            (D = (0, i.jsx)(m.Z, {
                childRef: T,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", {
                    ref: T,
                    children: D,
                }),
            })),
        (0, i.jsx)(c.ua7, {
            text: w,
            children: (e) =>
                (0, i.jsx)(
                    c.P3F,
                    I(
                        P(
                            {
                                className: a()(
                                    E.iconItem,
                                    f ? E.alwaysShown : void 0,
                                    b ? E.iconWithChannelInfo : E.iconNoChannelInfo,
                                ),
                            },
                            e,
                        ),
                        {
                            onClick: A,
                            tabIndex: u,
                            "aria-label": w,
                            children: D,
                        },
                    ),
                ),
        })
    );
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, f._U)(t.guild_id, t.id);
        };
    return (0, i.jsx)(c.ua7, {
        text: C.intl.string(C.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                I(P({ className: E.iconItem }, e), {
                    onClick: n,
                    "aria-label": C.intl.string(C.t.ROh4T0),
                    children: (0, i.jsx)(c.Dio, {
                        size: "xs",
                        color: "currentColor",
                        className: E.actionIcon,
                    }),
                }),
            ),
    });
}
function D(e) {
    let { channel: t } = e,
        n = () => {
            (0, f.dM)(t.guild_id, t.id, !0, { section: x.jXE.CHANNEL_LIST });
        };
    return (0, i.jsx)(c.ua7, {
        text: C.intl.string(C.t["N2c/Ul"]),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                I(P({ className: E.iconItem }, e), {
                    onClick: n,
                    "aria-label": C.intl.string(C.t["N2c/Ul"]),
                    children: (0, i.jsx)(c.dz2, {
                        size: "xs",
                        color: "currentColor",
                        className: E.actionIcon,
                    }),
                }),
            ),
    });
}
class M extends (r = l.PureComponent) {
    renderOptionsButton(e) {
        let { onContextMenu: t } = e;
        return (0, i.jsx)(w, I(P({}, this.props), { onContextMenu: t }));
    }
    renderEditButton() {
        return (0, i.jsx)(T, P({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(A, P({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(R, P({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(D, P({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return Z(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return N(e, t, n);
    }
}
S(M, "defaultProps", { isDefaultChannel: !1 });
