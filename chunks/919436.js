n.d(t, { Z: () => D }), n(415506), n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(200100),
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
    v = n(944486),
    O = n(594174),
    C = n(451478),
    S = n(276952),
    j = n(682662),
    E = n(662146),
    x = n(674552),
    N = n(981631),
    I = n(223203);
function P(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        e(),
            t
                .update({
                    immediate: !C.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: A
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
                    immediate: !C.Z.isFocused(),
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
            t = e.type === N.d4z.DM ? O.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: r, audio: l, video: a, stream: u, isCurrentUserInThisDMCall: d, unread: h, isGDMFacepileEnabled: p, isVisualRefreshEnabled: f } = this.props,
            { hovered: g, animating: b } = this.state,
            y = e.isMultiUserDM() && null == e.icon && p;
        return (0, i.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(j.H, {
                children: [
                    (0, i.jsx)(S.Z, {
                        hovered: !b && g,
                        selected: !b && n,
                        unread: !b && h,
                        className: I.pill
                    }),
                    (0, i.jsx)(E.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, i.jsx)(c.aRk, {
                            rounded: f,
                            selected: !f && (n || g),
                            lowerBadge: r > 0 ? (0, x.Ne)(r) : null,
                            upperBadge: (0, x.Or)({
                                audio: l,
                                video: a,
                                screenshare: u,
                                isCurrentUserConnected: d
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(r) },
                            children: (0, i.jsx)(s.mh, {
                                id: e.id,
                                children: (r) =>
                                    (0, i.jsx)(
                                        c.LYs,
                                        w(
                                            {
                                                to: N.Z5c.CHANNEL(N.ME, e.id),
                                                onMouseEnter: () => this.setState({ hovered: !0 }),
                                                onMouseLeave: () => this.setState({ hovered: !1 }),
                                                selected: n || g,
                                                ariaLabel: null != t ? t : '',
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
                                            r
                                        )
                                    )
                            })
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new o.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: A
                })
            }),
            P(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    r = t.type === N.d4z.DM ? O.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('4040'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
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
            });
    }
}
P(R, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let D = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, p.ZP)(e.channel),
        l = (0, a.e7)([y.Z], () => y.Z.getChannelId(), []),
        o = (0, a.e7)([d.Z], () => (null != l ? d.Z.getMode(l) : N.WtW.VOICE), [l]),
        s = (0, a.e7)([b.Z], () => b.Z.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, a.e7)([v.Z], () => v.Z.getChannelId(), []),
        h = (0, a.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: m } = g.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        O = l === n,
        C = !1,
        S = !1;
    O && ((C = o === N.WtW.VOICE), (S = o === N.WtW.VIDEO));
    let j = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, f.Q3)('DirectMessage');
    return (0, i.jsx)(
        R,
        Z(w({}, e), {
            ref: t,
            channelName: r,
            unread: h > 0,
            selected: u === n,
            badge: h,
            audio: C,
            video: S,
            stream: s,
            isCurrentUserInThisDMCall: O,
            isGDMFacepileEnabled: m,
            size: E ? j : 56,
            isVisualRefreshEnabled: E
        })
    );
});
