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
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(787014),
    f = n(924301),
    h = n(159300),
    p = n(152376),
    g = n(427679),
    b = n(155409),
    m = n(131704),
    y = n(199902),
    O = n(430824),
    v = n(496675),
    j = n(914010),
    C = n(281029),
    x = n(981631),
    E = n(388032),
    S = n(642915);
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
function _(e) {
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
function P(e, t, n) {
    return null != t && !!t && !(0, C.ig)(n, e.type);
}
function N(e, t) {
    return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore;
}
function Z(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: a = !1 } = e;
    return (0, s.e7)(
        [v.Z, j.Z],
        () =>
            n ||
            j.Z.getGuildId() === x.I_8 ||
            (!v.Z.can(x.Plq.MANAGE_CHANNELS, t) &&
                !v.Z.can(x.Plq.MANAGE_ROLES, t) &&
                !v.Z.can(x.Plq.MANAGE_WEBHOOKS, t)) ||
            ((0, m.r8)(t.type) && !v.Z.can(x.Plq.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !v.Z.can(x.Plq.CONNECT, t)) ||
            !m.dF.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, i.jsx)(c.u, {
              asContainer: !0,
              text: E.intl.string(E.t["3gUsJb"]),
              children: (0, i.jsx)(u.P3F, {
                  className: o()(
                      S.iconItem,
                      l ? S.alwaysShown : void 0,
                      a ? S.iconWithChannelInfo : S.iconNoChannelInfo,
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
function w(e) {
    let {
            channel: t,
            isDefaultChannel: r = !1,
            locked: a,
            tabIndex: d,
            forceShowButtons: p,
            hasChannelInfo: m = !1,
        } = e,
        j = (0, s.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())),
        C = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        I = (0, s.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [t.id]),
        P = (0, s.e7)([v.Z], () => (0, h.b)(v.Z, j, t, C)),
        N = (0, s.e7)([], () =>
            (null == t ? void 0 : t.type) === x.d4z.GUILD_VOICE
                ? E.intl.string(E.t["EE+P0H"])
                : E.intl.string(E.t["0jeAXt"]),
        ),
        Z = l.useRef(null);
    if (a || !P || t.isModeratorReportChannel()) return null;
    let w = (0, i.jsx)(u.oLu, {
        size: "xs",
        className: S.actionIcon,
        "aria-hidden": !0,
        color: "currentColor",
    });
    return (
        r &&
            (w = (0, i.jsx)(b.Z, {
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
                className: o()(S.iconItem, p ? S.alwaysShown : void 0, m ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: function () {
                    if (null != j) {
                        let e = y.Z.getAllActiveStreams().filter(
                            (e) => e.state !== x.jm8.ENDED && e.channelId === t.id,
                        );
                        (0, u.ZDy)(async () => {
                            let { default: r } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
                            return (n) => {
                                var l, a;
                                return (0, i.jsx)(
                                    r,
                                    ((l = _({}, n)),
                                    (a = a =
                                        {
                                            guild: j,
                                            channel: t,
                                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                                            source: x.t4x.GUILD_CHANNELS,
                                            guildScheduledEvent: I,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
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
        text: E.intl.string(E.t["ROh4T+"]),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, p._U)(t.guild_id, t.id);
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
function A(e) {
    let { channel: t } = e;
    return (0, i.jsx)(c.u, {
        asContainer: !0,
        text: E.intl.string(E.t["N2c/Un"]),
        children: (0, i.jsx)(u.P3F, {
            className: S.iconItem,
            onClick: () => {
                (0, p.dM)(t.guild_id, t.id, !0, { section: x.jXE.CHANNEL_LIST });
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
class R extends (r = l.PureComponent) {
    renderEditButton() {
        return (0, i.jsx)(Z, _({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(w, _({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(T, _({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(A, _({}, this.props));
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
I(R, "defaultProps", { isDefaultChannel: !1 });
