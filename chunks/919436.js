n.d(t, { Z: () => k }), n(415506), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(877164),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    p = n(43267),
    f = n(933557),
    h = n(266076),
    g = n(199902),
    m = n(19780),
    b = n(306680),
    y = n(944486),
    v = n(594174),
    O = n(938475),
    j = n(451478),
    x = n(37411),
    C = n(276952),
    E = n(455172),
    S = n(682662),
    _ = n(662146),
    I = n(674552),
    P = n(981631),
    Z = n(388032),
    N = n(729074);
function T(e, t, n) {
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
function A(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
            return A({ duration: 150 }, R);
        case "scale":
            return A({}, R);
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
            t = e.type === P.d4z.DM ? v.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, p.x)(e);
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
                treeItemProps: p,
                statusIndicatorsEnabled: f,
            } = this.props,
            { hovered: g, animating: m } = this.state,
            b = e.isMultiUserDM() && null == e.icon,
            y = () =>
                (0, i.jsx)(
                    c.LYs,
                    A(
                        {
                            to: P.Z5c.CHANNEL(P.ME, e.id),
                            onMouseEnter: () => this.setState({ hovered: !0 }),
                            onMouseLeave: () => this.setState({ hovered: !1 }),
                            selected: n || g,
                            ariaLabel:
                                null != t
                                    ? Z.intl.formatToPlainString(Z.t.hKarnZ, {
                                          mentions: r,
                                          name: t,
                                      })
                                    : "",
                            onContextMenu: this.handleContextMenu,
                            icon: b ? void 0 : this.getChannelIcon(),
                            backgroundStyle: b ? "on-hover" : "always",
                            children: b
                                ? (0, i.jsx)(h.Z, {
                                      channel: e,
                                      size: c.EFr.SIZE_40,
                                      facepileSizeOverride: c.EFr.SIZE_32,
                                      "aria-hidden": !0,
                                  })
                                : void 0,
                        },
                        p,
                    ),
                ),
            v = (0, i.jsx)(c.aRk, {
                rounded: !0,
                selected: !1,
                lowerBadge: r > 0 ? (0, I.Ne)(r, void 0, !0) : null,
                upperBadge: (0, I.Or)({
                    audio: l,
                    video: o,
                    screenshare: s,
                    isCurrentUserConnected: u,
                }),
                lowerBadgeSize: { width: (0, c.OVM)(r) },
                children: y(),
            }),
            O = f
                ? (0, i.jsx)(E.Z, {
                      channel: e,
                      children: v,
                  })
                : (0, i.jsx)(_.Z, {
                      text: null != t ? t : "",
                      selected: n,
                      children: v,
                  });
        return (0, i.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(S.H, {
                children: [
                    (0, i.jsx)(C.Z, {
                        hovered: !m && g,
                        selected: !m && n,
                        unread: !m && d,
                        className: N.pill,
                    }),
                    O,
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "state", {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: D,
                }),
            }),
            T(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    r = t.type === P.d4z.DM ? v.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("79695"),
                              n.e("4040"),
                              n.e("56826"),
                              n.e("93896"),
                          ]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  w(A({}, n), {
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
                                  w(A({}, n), {
                                      channel: t,
                                      selected: !1,
                                  }),
                              );
                      });
            });
    }
}
T(M, "defaultProps", {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1,
});
let k = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, f.ZP)(e.channel),
        l = (0, o.Ie)(n, 2),
        a = (0, s.e7)([m.Z], () => m.Z.getChannelId(), []),
        u = (0, s.e7)([d.Z], () => d.Z.getMode(n), [n]),
        p = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
        h = (0, s.e7)([O.ZP], () => O.ZP.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        v = (0, s.e7)([y.Z], () => y.Z.getChannelId(), []),
        j = (0, s.e7)([b.ZP], () => b.ZP.getMentionCount(n), [n]),
        { enabled: C } = (0, x.p)({ location: "DirectMessage" }),
        E = a === n,
        S = !1,
        _ = !1;
    (E || (C && h)) && ((S = u === P.WtW.VOICE), (_ = u === P.WtW.VIDEO));
    let I = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(
        M,
        w(A({}, e), {
            ref: t,
            channelName: r,
            unread: j > 0,
            selected: v === n,
            badge: j,
            audio: S,
            video: _,
            stream: p,
            isCurrentUserInThisDMCall: E,
            size: I,
            treeItemProps: l,
            statusIndicatorsEnabled: C,
        }),
    );
});
