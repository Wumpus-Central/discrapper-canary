n.d(t, {
    CN: () => P,
    ZP: () => R,
    eP: () => w,
    hR: () => Z,
    jo: () => N,
});
var r,
    i = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(787014),
    f = n(924301),
    h = n(159300),
    p = n(152376),
    g = n(427679),
    m = n(155409),
    b = n(131704),
    _ = n(199902),
    y = n(430824),
    O = n(496675),
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
function P(e, t, n) {
    return null != t && !!t && !(0, j.ig)(n, e.type);
}
function N(e, t) {
    return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore;
}
function Z(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    return (0, s.e7)(
        [O.Z, v.Z],
        () =>
            n ||
            v.Z.getGuildId() === x.I_8 ||
            (!O.Z.can(x.Plq.MANAGE_CHANNELS, t) &&
                !O.Z.can(x.Plq.MANAGE_ROLES, t) &&
                !O.Z.can(x.Plq.MANAGE_WEBHOOKS, t)) ||
            ((0, b.r8)(t.type) && !O.Z.can(x.Plq.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.Z.can(x.Plq.CONNECT, t)) ||
            !b.dF.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(c.u, {
              asContainer: !0,
              text: C.intl.string(C.t["3gUsJb"]),
              children: (0, i.jsx)(u.P3F, {
                  className: a()(
                      E.iconItem,
                      l ? E.alwaysShown : void 0,
                      o ? E.iconWithChannelInfo : E.iconNoChannelInfo,
                  ),
                  onClick: function () {
                      d.ZP.open(t.id);
                  },
                  tabIndex: r,
                  "aria-label": C.intl.string(C.t["3gUsJb"]),
                  children: (0, i.jsx)(u.ewm, {
                      size: "xs",
                      color: "currentColor",
                      className: E.actionIcon,
                  }),
              }),
          });
}
function w(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: o,
            tabIndex: d,
            forceShowButtons: p,
            hasChannelInfo: b = !1,
        } = e,
        v = (0, s.e7)([y.Z], () => y.Z.getGuild(t.getGuildId())),
        j = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        S = (0, s.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [t.id]),
        P = (0, s.e7)([O.Z], () => (0, h.b)(O.Z, v, t, j)),
        N = (0, s.e7)([], () =>
            (null == t ? void 0 : t.type) === x.d4z.GUILD_VOICE
                ? C.intl.string(C.t["EE+P0H"])
                : C.intl.string(C.t["0jeAXt"]),
        ),
        Z = l.useRef(null);
    if (o || !P || t.isModeratorReportChannel()) return null;
    let w = (0, i.jsx)(u.oLu, {
        size: "xs",
        className: E.actionIcon,
        "aria-hidden": !0,
        color: "currentColor",
    });
    return (
        r &&
            (w = (0, i.jsx)(m.Z, {
                childRef: Z,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", {
                    ref: Z,
                    children: w,
                }),
            })),
        (0, i.jsx)(c.u, {
            asContainer: !0,
            text: N,
            children: (0, i.jsx)(u.P3F, {
                className: a()(E.iconItem, p ? E.alwaysShown : void 0, b ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: function () {
                    if (null != v) {
                        let e = _.Z.getAllActiveStreams().filter(
                            (e) => e.state !== x.jm8.ENDED && e.channelId === t.id,
                        );
                        (0, u.ZDy)(async () => {
                            let { default: r } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
                            return (n) => {
                                var l, o;
                                return (0, i.jsx)(
                                    r,
                                    ((l = I({}, n)),
                                    (o = o =
                                        {
                                            guild: v,
                                            channel: t,
                                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                                            source: x.t4x.GUILD_CHANNELS,
                                            guildScheduledEvent: S,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(o)).forEach(function (e) {
                                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                          }),
                                    l),
                                );
                            };
                        });
                    }
                },
                tabIndex: d,
                "aria-label": N,
                children: w,
            }),
        })
    );
}
function T(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: C.intl.string(C.t["ROh4T+"]),
        children: (0, i.jsx)(u.P3F, {
            className: E.iconItem,
            onClick: () => {
                (0, p._U)(t.guild_id, t.id);
            },
            "aria-label": C.intl.string(C.t["ROh4T+"]),
            children: (0, i.jsx)(u.Dio, {
                size: "xs",
                color: "currentColor",
                className: E.actionIcon,
            }),
        }),
    });
}
function A(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: C.intl.string(C.t["N2c/Un"]),
        children: (0, i.jsx)(u.P3F, {
            className: E.iconItem,
            onClick: () => {
                (0, p.dM)(t.guild_id, t.id, !0, { section: x.jXE.CHANNEL_LIST });
            },
            "aria-label": C.intl.string(C.t["N2c/Un"]),
            children: (0, i.jsx)(u.dz2, {
                size: "xs",
                color: "currentColor",
                className: E.actionIcon,
            }),
        }),
    });
}
class R extends (r = l.PureComponent) {
    renderEditButton() {
        return (0, i.jsx)(Z, I({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(w, I({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(T, I({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(A, I({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return N(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return P(e, t, n);
    }
}
S(R, "defaultProps", { isDefaultChannel: !1 });
