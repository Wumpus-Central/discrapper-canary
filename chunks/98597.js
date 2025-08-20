n.d(t, {
    CN: () => N,
    ZP: () => M,
    eP: () => A,
    hR: () => T,
    jo: () => w,
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
    f = n(159300),
    h = n(152376),
    g = n(427679),
    m = n(155409),
    b = n(131704),
    O = n(199902),
    _ = n(430824),
    y = n(496675),
    v = n(914010),
    j = n(281029),
    C = n(981631),
    x = n(388032),
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
function I(e) {
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
function P(e, t) {
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
function w(e, t) {
    return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore;
}
function Z(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.ua7, {
        text: x.intl.string(x.t.OBr7Cw),
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: s, onFocus: u, onBlur: d } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(E.iconItem, n ? E.alwaysShown : void 0, r ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: l,
                tabIndex: t,
                "aria-label": x.intl.string(x.t.OBr7Cw),
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
            [y.Z, v.Z],
            () =>
                n ||
                v.Z.getGuildId() === C.I_8 ||
                (!y.Z.can(C.Plq.MANAGE_CHANNELS, t) &&
                    !y.Z.can(C.Plq.MANAGE_ROLES, t) &&
                    !y.Z.can(C.Plq.MANAGE_WEBHOOKS, t)) ||
                ((0, b.r8)(t.type) && !y.Z.can(C.Plq.VIEW_CHANNEL, t)) ||
                (t.isGuildVocal() && !y.Z.can(C.Plq.CONNECT, t)) ||
                !b.dF.has(t.type) ||
                t.isModeratorReportChannel(),
        )
    )
        return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: x.intl.string(x.t["3gUsJS"]),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(E.iconItem, l ? E.alwaysShown : void 0, o ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: d,
                tabIndex: r,
                "aria-label": x.intl.string(x.t["3gUsJS"]),
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
            forceShowButtons: h,
            hasChannelInfo: b = !1,
        } = e,
        { entrypoints: v } = (0, p._k)({ location: "channel_base" }),
        j = (0, s.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())),
        S = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        N = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        w = (0, s.e7)([y.Z], () => (0, f.b)(y.Z, j, t, S)),
        Z = (0, s.e7)([y.Z], () =>
            y.Z.can(C.Plq.CREATE_INSTANT_INVITE, t) ? x.intl.string(x.t.zJrgTE) : x.intl.string(x.t.Sd8Ix8),
        ),
        T = v ? x.intl.string(x.t["EE+P0N"]) : Z,
        A = l.useRef(null);
    if (o || !w || t.isModeratorReportChannel()) return null;
    function R() {
        if (null != j) {
            let e = O.Z.getAllActiveStreams().filter((e) => e.state !== C.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("7654"), n.e("62292")]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        P(I({}, n), {
                            guild: j,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: C.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: N,
                        }),
                    );
            });
        }
    }
    let D = v ? c.oLu : c.ejJ,
        M = (0, i.jsx)(D, {
            size: "xs",
            className: E.actionIcon,
            "aria-hidden": !0,
            color: "currentColor",
        });
    return (
        r &&
            (M = (0, i.jsx)(m.Z, {
                childRef: A,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", {
                    ref: A,
                    children: M,
                }),
            })),
        (0, i.jsx)(c.ua7, {
            text: T,
            children: (e) =>
                (0, i.jsx)(
                    c.P3F,
                    P(
                        I(
                            {
                                className: a()(
                                    E.iconItem,
                                    h ? E.alwaysShown : void 0,
                                    b ? E.iconWithChannelInfo : E.iconNoChannelInfo,
                                ),
                            },
                            e,
                        ),
                        {
                            onClick: R,
                            tabIndex: u,
                            "aria-label": T,
                            children: M,
                        },
                    ),
                ),
        })
    );
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, h._U)(t.guild_id, t.id);
        };
    return (0, i.jsx)(c.ua7, {
        text: x.intl.string(x.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: E.iconItem }, e), {
                    onClick: n,
                    "aria-label": x.intl.string(x.t.ROh4T0),
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
            (0, h.dM)(t.guild_id, t.id, !0, { section: C.jXE.CHANNEL_LIST });
        };
    return (0, i.jsx)(c.ua7, {
        text: x.intl.string(x.t["N2c/Ul"]),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: E.iconItem }, e), {
                    onClick: n,
                    "aria-label": x.intl.string(x.t["N2c/Ul"]),
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
        return (0, i.jsx)(Z, P(I({}, this.props), { onContextMenu: t }));
    }
    renderEditButton() {
        return (0, i.jsx)(T, I({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(A, I({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(R, I({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(D, I({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return w(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return N(e, t, n);
    }
}
S(M, "defaultProps", { isDefaultChannel: !1 });
