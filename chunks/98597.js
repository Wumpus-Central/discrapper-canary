n.d(t, {
    CN: () => N,
    ZP: () => D,
    eP: () => T,
    hR: () => w,
    jo: () => Z,
});
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(787014),
    p = n(924301),
    h = n(340541),
    f = n(159300),
    g = n(152376),
    m = n(427679),
    b = n(155409),
    _ = n(131704),
    y = n(199902),
    O = n(430824),
    v = n(496675),
    j = n(914010),
    C = n(281029),
    x = n(981631),
    E = n(388032),
    S = n(55940);
function I(e, t, n) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t, n) {
    return null != t && !!t && !(0, C.ig)(n, e.type);
}
function Z(e, t) {
    return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore;
}
function w(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    return (0, s.e7)(
        [v.Z, j.Z],
        () =>
            n ||
            j.Z.getGuildId() === x.I_8 ||
            (!v.Z.can(x.Plq.MANAGE_CHANNELS, t) &&
                !v.Z.can(x.Plq.MANAGE_ROLES, t) &&
                !v.Z.can(x.Plq.MANAGE_WEBHOOKS, t)) ||
            ((0, _.r8)(t.type) && !v.Z.can(x.Plq.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !v.Z.can(x.Plq.CONNECT, t)) ||
            !_.dF.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(c.u, {
              asContainer: !0,
              text: E.intl.string(E.t["3gUsJb"]),
              children: (0, i.jsx)(u.P3F, {
                  className: a()(
                      S.iconItem,
                      l ? S.alwaysShown : void 0,
                      o ? S.iconWithChannelInfo : S.iconNoChannelInfo,
                  ),
                  onClick: function () {
                      d.ZP.open(t.id);
                  },
                  tabIndex: r,
                  "aria-label": E.intl.string(E.t["3gUsJb"]),
                  children: (0, i.jsx)(u.ewm, {
                      size: "xs",
                      color: "currentColor",
                      className: S.actionIcon,
                  }),
              }),
          });
}
function T(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: o,
            tabIndex: d,
            forceShowButtons: g,
            hasChannelInfo: _ = !1,
        } = e,
        j = (0, h._k)({ location: "channel_base" }),
        C = (0, s.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())),
        I = (0, s.e7)([m.Z], () => m.Z.getStageInstanceByChannel(t.id), [t.id]),
        N = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]),
        Z = (0, s.e7)([v.Z], () => (0, f.b)(v.Z, C, t, I)),
        w = (0, s.e7)([v.Z], () =>
            (null == t ? void 0 : t.type) === x.d4z.GUILD_VOICE && j.isVoiceChannelEntrypointEnabled
                ? E.intl.string(E.t["EE+P0H"])
                : j.isTextChannelEntrypointEnabled
                  ? E.intl.string(E.t["0jeAXt"])
                  : v.Z.can(x.Plq.CREATE_INSTANT_INVITE, t)
                    ? E.intl.string(E.t.zJrgTG)
                    : E.intl.string(E.t.Sd8Ixw),
        ),
        T = l.useRef(null);
    if (o || !Z || t.isModeratorReportChannel()) return null;
    let A = [j.isVoiceChannelEntrypointEnabled, j.isTextChannelEntrypointEnabled].some(Boolean) ? u.oLu : u.ejJ,
        R = (0, i.jsx)(A, {
            size: "xs",
            className: S.actionIcon,
            "aria-hidden": !0,
            color: "currentColor",
        });
    return (
        r &&
            (R = (0, i.jsx)(b.Z, {
                childRef: T,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", {
                    ref: T,
                    children: R,
                }),
            })),
        (0, i.jsx)(c.u, {
            asContainer: !0,
            text: w,
            children: (0, i.jsx)(u.P3F, {
                className: a()(S.iconItem, g ? S.alwaysShown : void 0, _ ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: function () {
                    if (null != C) {
                        let e = y.Z.getAllActiveStreams().filter(
                            (e) => e.state !== x.jm8.ENDED && e.channelId === t.id,
                        );
                        (0, u.ZDy)(async () => {
                            let { default: r } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
                            return (n) => {
                                var l, o;
                                return (0, i.jsx)(
                                    r,
                                    ((l = P({}, n)),
                                    (o = o =
                                        {
                                            guild: C,
                                            channel: t,
                                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                                            source: x.t4x.GUILD_CHANNELS,
                                            guildScheduledEvent: N,
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
                "aria-label": w,
                children: R,
            }),
        })
    );
}
function A(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t["ROh4T+"]),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, g._U)(t.guild_id, t.id);
            },
            "aria-label": E.intl.string(E.t["ROh4T+"]),
            children: (0, i.jsx)(u.Dio, {
                size: "xs",
                color: "currentColor",
                className: S.actionIcon,
            }),
        }),
    });
}
function R(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t["N2c/Un"]),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, g.dM)(t.guild_id, t.id, !0, { section: x.jXE.CHANNEL_LIST });
            },
            "aria-label": E.intl.string(E.t["N2c/Un"]),
            children: (0, i.jsx)(u.dz2, {
                size: "xs",
                color: "currentColor",
                className: S.actionIcon,
            }),
        }),
    });
}
class D extends (r = l.PureComponent) {
    renderEditButton() {
        return (0, i.jsx)(w, P({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(T, P({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(A, P({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(R, P({}, this.props));
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
I(D, "defaultProps", { isDefaultChannel: !1 });
