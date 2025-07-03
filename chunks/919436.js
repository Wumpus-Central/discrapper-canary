(n.d(t, { Z: () => D }), n(415506), n(388685));
var r,
    i = n(255367),
    l = n(73800),
    o = n(405499),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    h = n(43267),
    p = n(933557),
    f = n(93687),
    g = n(266076),
    m = n(199902),
    b = n(19780),
    _ = n(306680),
    O = n(944486),
    y = n(594174),
    v = n(451478),
    C = n(276952),
    j = n(682662),
    E = n(662146),
    S = n(674552),
    x = n(981631),
    I = n(388032),
    P = n(223203);
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            }));
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
let T = {
    friction: 28,
    tension: 600
};
function A(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return w({ duration: 150 }, T);
        case 'scale':
            return w({}, T);
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class R extends (r = l.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({
                    immediate: !v.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: A
                })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: A
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !v.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: A
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
            t = e.type === x.d4z.DM ? y.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: r, audio: l, video: s, stream: a, isCurrentUserInThisDMCall: u, unread: d, isGDMFacepileEnabled: h, treeItemProps: p } = this.props,
            { hovered: f, animating: m } = this.state,
            b = e.isMultiUserDM() && null == e.icon && h;
        return (0, i.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(j.H, {
                children: [
                    (0, i.jsx)(C.Z, {
                        hovered: !m && f,
                        selected: !m && n,
                        unread: !m && d,
                        className: P.pill
                    }),
                    (0, i.jsx)(E.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, i.jsx)(c.aRk, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, S.Ne)(r, void 0, !0) : null,
                            upperBadge: (0, S.Or)({
                                audio: l,
                                video: s,
                                screenshare: a,
                                isCurrentUserConnected: u
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(r) },
                            children: (0, i.jsx)(
                                c.LYs,
                                w(
                                    {
                                        to: x.Z5c.CHANNEL(x.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || f,
                                        ariaLabel:
                                            null != t
                                                ? I.intl.formatToPlainString(I.t.hKarnZ, {
                                                      mentions: r,
                                                      name: t
                                                  })
                                                : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: b ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: b ? 'on-hover' : 'always',
                                        children: b
                                            ? (0, i.jsx)(g.Z, {
                                                  channel: e,
                                                  size: c.EFr.SIZE_40,
                                                  facepileSizeOverride: c.EFr.SIZE_32,
                                                  experimentLocation: 'unread_gdm',
                                                  'aria-hidden': !0
                                              })
                                            : void 0
                                    },
                                    p
                                )
                            )
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        (super(...e),
            N(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new o.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: A
                })
            }),
            N(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    r = t.type === x.d4z.DM ? y.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, i.jsx)(
                                  e,
                                  Z(w({}, n), {
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
                                  Z(w({}, n), {
                                      channel: t,
                                      selected: !1
                                  })
                              );
                      });
            }));
    }
}
N(R, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let D = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, p.ZP)(e.channel),
        l = (0, s.Ie)(n, 2),
        o = (0, a.e7)([b.Z], () => b.Z.getChannelId(), []),
        u = (0, a.e7)([d.Z], () => (null != o ? d.Z.getMode(o) : x.WtW.VOICE), [o]),
        h = (0, a.e7)([m.Z], () => m.Z.getAllApplicationStreamsForChannel(n).length > 0),
        g = (0, a.e7)([O.Z], () => O.Z.getChannelId(), []),
        y = (0, a.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: v } = f.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        C = o === n,
        j = !1,
        E = !1;
    C && ((j = u === x.WtW.VOICE), (E = u === x.WtW.VIDEO));
    let S = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(
        R,
        Z(w({}, e), {
            ref: t,
            channelName: r,
            unread: y > 0,
            selected: g === n,
            badge: y,
            audio: j,
            video: E,
            stream: h,
            isCurrentUserInThisDMCall: C,
            isGDMFacepileEnabled: v,
            size: S,
            treeItemProps: l
        })
    );
});
