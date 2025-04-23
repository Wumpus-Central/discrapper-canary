n.d(t, { Z: () => L }), n(415506), n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(272573),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    h = n(43267),
    p = n(933557),
    f = n(540059),
    g = n(93687),
    m = n(266076),
    b = n(199902),
    y = n(19780),
    _ = n(306680),
    O = n(944486),
    v = n(594174),
    C = n(451478),
    j = n(276952),
    x = n(682662),
    S = n(662146),
    E = n(674552),
    P = n(981631),
    I = n(388032),
    w = n(223203);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
let A = {
    friction: 28,
    tension: 600
};
function R(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return Z({ duration: 150 }, A);
        case 'scale':
            return Z({}, A);
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class D extends (r = l.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !C.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: R
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
            config: R
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !C.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: R
                })
                .start()
                .then(e)
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
            transform: i.to([0, 1], [0.5, 1]).to((e) => 'scale('.concat(e, ')'))
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === P.d4z.DM ? v.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: r, audio: l, video: s, stream: a, isCurrentUserInThisDMCall: u, unread: d, isGDMFacepileEnabled: h, isVisualRefreshEnabled: p, treeItemProps: f } = this.props,
            { hovered: g, animating: b } = this.state,
            y = e.isMultiUserDM() && null == e.icon && h;
        return (0, i.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(x.H, {
                children: [
                    (0, i.jsx)(j.Z, {
                        hovered: !b && g,
                        selected: !b && n,
                        unread: !b && d,
                        className: w.pill
                    }),
                    (0, i.jsx)(S.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, i.jsx)(c.aRk, {
                            rounded: p,
                            selected: !p && (n || g),
                            lowerBadge: r > 0 ? (0, E.Ne)(r, void 0, !0) : null,
                            upperBadge: (0, E.Or)({
                                audio: l,
                                video: s,
                                screenshare: a,
                                isCurrentUserConnected: u
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(r) },
                            children: (0, i.jsx)(
                                c.LYs,
                                Z(
                                    {
                                        to: P.Z5c.CHANNEL(P.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || g,
                                        ariaLabel:
                                            null != t
                                                ? I.intl.formatToPlainString(I.t.hKarnZ, {
                                                      mentions: r,
                                                      name: t
                                                  })
                                                : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: y ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: y ? 'on-hover' : 'always',
                                        children: y
                                            ? (0, i.jsx)(m.Z, {
                                                  channel: e,
                                                  size: c.EFr.SIZE_40,
                                                  facepileSizeOverride: c.EFr.SIZE_32,
                                                  experimentLocation: 'unread_gdm',
                                                  'aria-hidden': !0
                                              })
                                            : void 0
                                    },
                                    f
                                )
                            )
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new o.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: R
                })
            }),
            N(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    r = t.type === P.d4z.DM ? v.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  T(Z({}, n), {
                                      channel: t,
                                      user: r
                                  })
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  T(Z({}, n), {
                                      channel: t,
                                      selected: !1
                                  })
                              );
                      });
            });
    }
}
N(D, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let L = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, p.ZP)(e.channel),
        l = (0, s.Ie)(n, 2),
        o = (0, a.e7)([y.Z], () => y.Z.getChannelId(), []),
        u = (0, a.e7)([d.Z], () => (null != o ? d.Z.getMode(o) : P.WtW.VOICE), [o]),
        h = (0, a.e7)([b.Z], () => b.Z.getAllApplicationStreamsForChannel(n).length > 0),
        m = (0, a.e7)([O.Z], () => O.Z.getChannelId(), []),
        v = (0, a.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: C } = g.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        j = o === n,
        x = !1,
        S = !1;
    j && ((x = u === P.WtW.VOICE), (S = u === P.WtW.VIDEO));
    let E = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE),
        I = (0, f.Q3)('DirectMessage');
    return (0, i.jsx)(
        D,
        T(Z({}, e), {
            ref: t,
            channelName: r,
            unread: v > 0,
            selected: m === n,
            badge: v,
            audio: x,
            video: S,
            stream: h,
            isCurrentUserInThisDMCall: j,
            isGDMFacepileEnabled: C,
            size: I ? E : 56,
            isVisualRefreshEnabled: I,
            treeItemProps: l
        })
    );
});
