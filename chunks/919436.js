n.d(t, { Z: () => L }), n(415506), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(620792),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    f = n(43267),
    h = n(933557),
    p = n(266076),
    g = n(199902),
    b = n(19780),
    m = n(306680),
    y = n(944486),
    O = n(594174),
    v = n(938475),
    j = n(451478),
    C = n(37411),
    x = n(276952),
    E = n(455172),
    S = n(682662),
    I = n(662146),
    _ = n(674552),
    P = n(981631),
    N = n(388032),
    Z = n(729074);
function w(e, t, n) {
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
function T(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
let R = {
    friction: 28,
    tension: 600,
};
function D(e) {
    switch (e) {
        case "height":
        case "opacity":
            return T({ duration: 150 }, R);
        case "scale":
            return T({}, R);
        default:
            throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)));
    }
}
class M extends (r = l.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !j.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: D,
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
            config: D,
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !j.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: D,
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
            t = e.type === P.d4z.DM ? O.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, f.x)(e);
    }
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: r,
                audio: l,
                video: o,
                stream: s,
                isCurrentUserInThisDMCall: u,
                unread: d,
                treeItemProps: f,
                statusIndicatorsEnabled: h,
            } = this.props,
            { hovered: g, animating: b } = this.state,
            m = e.isMultiUserDM() && null == e.icon,
            y = () =>
                (0, i.jsx)(
                    c.LYs,
                    T(
                        {
                            to: P.Z5c.CHANNEL(P.ME, e.id),
                            onMouseEnter: () => this.setState({ hovered: !0 }),
                            onMouseLeave: () => this.setState({ hovered: !1 }),
                            selected: n || g,
                            ariaLabel:
                                null != t
                                    ? N.intl.formatToPlainString(N.t.hKarnZ, {
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
                ),
            O = (0, i.jsx)(c.aRk, {
                rounded: !0,
                selected: !1,
                lowerBadge: r > 0 ? (0, _.Ne)(r, void 0, !0) : null,
                upperBadge: (0, _.Or)({
                    audio: l,
                    video: o,
                    screenshare: s,
                    isCurrentUserConnected: u,
                }),
                lowerBadgeSize: { width: (0, c.OVM)(r) },
                children: y(),
            }),
            v = h
                ? (0, i.jsx)(E.Z, {
                      channel: e,
                      children: O,
                  })
                : (0, i.jsx)(I.Z, {
                      text: null != t ? t : "",
                      selected: n,
                      children: O,
                  });
        return (0, i.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(S.H, {
                children: [
                    (0, i.jsx)(x.Z, {
                        hovered: !b && g,
                        selected: !b && n,
                        unread: !b && d,
                        className: Z.pill,
                    }),
                    v,
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            w(this, "state", {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: D,
                }),
            }),
            w(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    r = t.type === P.d4z.DM ? O.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("79695"),
                              n.e("66165"),
                              n.e("56826"),
                              n.e("93896"),
                          ]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  A(T({}, n), {
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
                                  A(T({}, n), {
                                      channel: t,
                                      selected: !1,
                                  }),
                              );
                      });
            });
    }
}
w(M, "defaultProps", {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1,
});
let L = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, h.ZP)(e.channel),
        l = (0, o.Ie)(n, 2),
        a = (0, s.e7)([b.Z], () => b.Z.getChannelId(), []),
        u = (0, s.e7)([d.Z], () => d.Z.getMode(n), [n]),
        f = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
        p = (0, s.e7)([v.ZP], () => v.ZP.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        O = (0, s.e7)([y.Z], () => y.Z.getChannelId(), []),
        j = (0, s.e7)([m.ZP], () => m.ZP.getMentionCount(n), [n]),
        { enabled: x } = (0, C.p)({ location: "DirectMessage" }),
        E = a === n,
        S = !1,
        I = !1;
    (E || (x && p)) && ((S = u === P.WtW.VOICE), (I = u === P.WtW.VIDEO));
    let _ = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(
        M,
        A(T({}, e), {
            ref: t,
            channelName: r,
            unread: j > 0,
            selected: O === n,
            badge: j,
            audio: S,
            video: I,
            stream: f,
            isCurrentUserInThisDMCall: E,
            size: _,
            treeItemProps: l,
            statusIndicatorsEnabled: x,
        }),
    );
});
