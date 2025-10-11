n.d(t, {
    CN: () => Z,
    ZP: () => M,
    eP: () => R,
    hR: () => A,
    jo: () => w,
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
    x = n(281029),
    C = n(981631),
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
function N(e, t) {
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
function Z(e, t, n) {
    return null != t && !!t && !(0, x.ig)(n, e.type);
}
function w(e, t) {
    return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore;
}
function T(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t.OBr7Cw),
        children: (0, i.jsx)(u.P3F, {
            className: a()(S.iconItem, n ? S.alwaysShown : void 0, r ? S.iconWithChannelInfo : S.iconNoChannelInfo),
            onClick: l,
            tabIndex: t,
            "aria-label": E.intl.string(E.t.OBr7Cw),
            children: (0, i.jsx)(u.xhG, {
                size: "xs",
                color: "currentColor",
                className: S.actionIcon,
            }),
        }),
    });
}
function A(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    return (0, s.e7)(
        [v.Z, j.Z],
        () =>
            n ||
            j.Z.getGuildId() === C.I_8 ||
            (!v.Z.can(C.Plq.MANAGE_CHANNELS, t) &&
                !v.Z.can(C.Plq.MANAGE_ROLES, t) &&
                !v.Z.can(C.Plq.MANAGE_WEBHOOKS, t)) ||
            ((0, _.r8)(t.type) && !v.Z.can(C.Plq.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !v.Z.can(C.Plq.CONNECT, t)) ||
            !_.dF.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(c.u, {
              asContainer: !0,
              text: E.intl.string(E.t["3gUsJS"]),
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
                  "aria-label": E.intl.string(E.t["3gUsJS"]),
                  children: (0, i.jsx)(u.ewm, {
                      size: "xs",
                      color: "currentColor",
                      className: S.actionIcon,
                  }),
              }),
          });
}
function R(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: o,
            tabIndex: d,
            forceShowButtons: g,
            hasChannelInfo: _ = !1,
        } = e,
        j = (0, h._k)({ location: "channel_base" }),
        x = (0, s.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())),
        I = (0, s.e7)([m.Z], () => m.Z.getStageInstanceByChannel(t.id), [t.id]),
        Z = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]),
        w = (0, s.e7)([v.Z], () => (0, f.b)(v.Z, x, t, I)),
        T = (0, s.e7)([v.Z], () =>
            (null == t ? void 0 : t.type) === C.d4z.GUILD_VOICE && j.isVoiceChannelEntrypointEnabled
                ? E.intl.string(E.t["EE+P0N"])
                : j.isTextChannelEntrypointEnabled
                  ? E.intl.string(E.t["0jeAXl"])
                  : v.Z.can(C.Plq.CREATE_INSTANT_INVITE, t)
                    ? E.intl.string(E.t.zJrgTE)
                    : E.intl.string(E.t.Sd8Ix8),
        ),
        A = l.useRef(null);
    if (o || !w || t.isModeratorReportChannel()) return null;
    let R = [j.isVoiceChannelEntrypointEnabled, j.isTextChannelEntrypointEnabled].some(Boolean) ? u.oLu : u.ejJ,
        D = (0, i.jsx)(R, {
            size: "xs",
            className: S.actionIcon,
            "aria-hidden": !0,
            color: "currentColor",
        });
    return (
        r &&
            (D = (0, i.jsx)(b.Z, {
                childRef: A,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, i.jsx)("div", {
                    ref: A,
                    children: D,
                }),
            })),
        (0, i.jsx)(c.u, {
            asContainer: !0,
            text: T,
            children: (0, i.jsx)(u.P3F, {
                className: a()(S.iconItem, g ? S.alwaysShown : void 0, _ ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: function () {
                    if (null != x) {
                        let e = y.Z.getAllActiveStreams().filter(
                            (e) => e.state !== C.jm8.ENDED && e.channelId === t.id,
                        );
                        (0, u.ZDy)(async () => {
                            let { default: r } = await Promise.all([n.e("74318"), n.e("7654"), n.e("54833")]).then(
                                n.bind(n, 560114),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    r,
                                    N(P({}, n), {
                                        guild: x,
                                        channel: t,
                                        streamUserId: 1 === e.length ? e[0].ownerId : null,
                                        source: C.InstantInviteSources.GUILD_CHANNELS,
                                        guildScheduledEvent: Z,
                                    }),
                                );
                        });
                    }
                },
                tabIndex: d,
                "aria-label": T,
                children: D,
            }),
        })
    );
}
function D(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t.ROh4T0),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, g._U)(t.guild_id, t.id);
            },
            "aria-label": E.intl.string(E.t.ROh4T0),
            children: (0, i.jsx)(u.Dio, {
                size: "xs",
                color: "currentColor",
                className: S.actionIcon,
            }),
        }),
    });
}
function L(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t["N2c/Ul"]),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, g.dM)(t.guild_id, t.id, !0, { section: C.jXE.CHANNEL_LIST });
            },
            "aria-label": E.intl.string(E.t["N2c/Ul"]),
            children: (0, i.jsx)(u.dz2, {
                size: "xs",
                color: "currentColor",
                className: S.actionIcon,
            }),
        }),
    });
}
class M extends (r = l.PureComponent) {
    renderOptionsButton(e) {
        let { onContextMenu: t } = e;
        return (0, i.jsx)(T, N(P({}, this.props), { onContextMenu: t }));
    }
    renderEditButton() {
        return (0, i.jsx)(A, P({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(R, P({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(D, P({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(L, P({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return w(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return Z(e, t, n);
    }
}
I(M, "defaultProps", { isDefaultChannel: !1 });
