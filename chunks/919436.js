n.d(t, { Z: () => R }), n(415506), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    o = n(666917),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    f = n(43267),
    h = n(933557),
    p = n(266076),
    g = n(199902),
    m = n(19780),
    b = n(306680),
    _ = n(944486),
    y = n(594174),
    O = n(451478),
    v = n(276952),
    j = n(682662),
    x = n(662146),
    C = n(674552),
    E = n(981631),
    S = n(388032),
    I = n(514483);
function P(e, t, n) {
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
function N(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
let w = {
    friction: 28,
    tension: 600,
};
function T(e) {
    switch (e) {
        case "height":
        case "opacity":
            return N({ duration: 150 }, w);
        case "scale":
            return N({}, w);
        default:
            throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)));
    }
}
class A extends (r = l.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !O.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: T,
                })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: T,
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !O.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: T,
                })
                .start()
                .then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: r, scale: i } = t.springs;
        return {
            opacity: n,
            height: r.to([0, 1], [0, e]),
            transform: i.to([0, 1], [0.5, 1]).to((e) => "scale(".concat(e, ")")),
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === E.d4z.DM ? y.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, f.x)(e);
    }
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: r,
                audio: l,
                video: a,
                stream: s,
                isCurrentUserInThisDMCall: u,
                unread: d,
                treeItemProps: f,
            } = this.props,
            { hovered: h, animating: g } = this.state,
            m = e.isMultiUserDM() && null == e.icon,
            b = () =>
                (0, i.jsx)(
                    c.LYs,
                    N(
                        {
                            to: E.Z5c.CHANNEL(E.ME, e.id),
                            onMouseEnter: () => this.setState({ hovered: !0 }),
                            onMouseLeave: () => this.setState({ hovered: !1 }),
                            selected: n || h,
                            ariaLabel:
                                null != t
                                    ? S.intl.formatToPlainString(S.t.hKarnZ, {
                                          mentions: r,
                                          name: t,
                                      })
                                    : "",
                            onContextMenu: this.handleContextMenu,
                            icon: m ? void 0 : this.getChannelIcon(),
                            backgroundStyle: m ? "on-hover" : "always",
                            children: m
                                ? (0, i.jsx)(p.Z, {
                                      channel: e,
                                      size: c.EFr.SIZE_40,
                                      facepileSizeOverride: c.EFr.SIZE_32,
                                      "aria-hidden": !0,
                                  })
                                : void 0,
                        },
                        f,
                    ),
                );
        return (0, i.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(j.H, {
                children: [
                    (0, i.jsx)(v.Z, {
                        hovered: !g && h,
                        selected: !g && n,
                        unread: !g && d,
                        className: I.pill,
                    }),
                    (0, i.jsx)(x.Z, {
                        text: null != t ? t : "",
                        selected: n,
                        children: (0, i.jsx)(c.aRk, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, C.Ne)(r, void 0, !0) : null,
                            upperBadge: (0, C.Or)({
                                audio: l,
                                video: a,
                                screenshare: s,
                                isCurrentUserConnected: u,
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(r) },
                            children: b(),
                        }),
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "state", {
                hovered: !1,
                animating: !0,
                controller: new o.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: T,
                }),
            }),
            P(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    r = t.type === E.d4z.DM ? y.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("79695"),
                              n.e("66165"),
                              n.e("56826"),
                              n.e("31899"),
                          ]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  Z(N({}, n), {
                                      channel: t,
                                      user: r,
                                  }),
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  Z(N({}, n), {
                                      channel: t,
                                      selected: !1,
                                  }),
                              );
                      });
            });
    }
}
P(A, "defaultProps", {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1,
});
let R = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, h.ZP)(e.channel),
        l = (0, a.Ie)(n, 2),
        o = (0, s.e7)([m.Z], () => m.Z.getChannelId(), []),
        u = (0, s.e7)([d.Z], () => (null != o ? d.Z.getMode(o) : E.WtW.VOICE), [o]),
        f = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
        p = (0, s.e7)([_.Z], () => _.Z.getChannelId(), []),
        y = (0, s.e7)([b.ZP], () => b.ZP.getMentionCount(n), [n]),
        O = o === n,
        v = !1,
        j = !1;
    O && ((v = u === E.WtW.VOICE), (j = u === E.WtW.VIDEO));
    let x = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(
        A,
        Z(N({}, e), {
            ref: t,
            channelName: r,
            unread: y > 0,
            selected: p === n,
            badge: y,
            audio: v,
            video: j,
            stream: f,
            isCurrentUserInThisDMCall: O,
            size: x,
            treeItemProps: l,
        }),
    );
});
