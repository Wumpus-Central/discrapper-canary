n.d(t, { Z: () => R }), n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(642128),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(358221),
    h = n(43267),
    p = n(933557),
    g = n(540059),
    m = n(93687),
    f = n(266076),
    _ = n(199902),
    v = n(19780),
    C = n(306680),
    x = n(944486),
    Z = n(594174),
    I = n(451478),
    b = n(276952),
    S = n(682662),
    N = n(662146),
    E = n(674552),
    j = n(981631),
    y = n(646819);
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
let T = {
    friction: 28,
    tension: 600
};
function A(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return {
                duration: 150,
                ...T
            };
        case 'scale':
            return { ...T };
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class w extends (i = r.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !I.Z.isFocused(),
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
                    immediate: !I.Z.isFocused(),
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
            { opacity: n, height: i, scale: l } = t.springs;
        return {
            opacity: n,
            height: i.to([0, 1], [0, e]),
            transform: l.to([0, 1], [0.5, 1]).to((e) => 'scale('.concat(e, ')'))
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === j.d4z.DM ? Z.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: i, audio: r, video: s, stream: d, isCurrentUserInThisDMCall: u, unread: h, isGDMFacepileEnabled: p } = this.props,
            { hovered: g, animating: m } = this.state,
            _ = e.isMultiUserDM() && null == e.icon && p;
        return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(S.H, {
                children: [
                    (0, l.jsx)(b.Z, {
                        hovered: !m && g,
                        selected: !m && n,
                        unread: !m && h,
                        className: y.pill
                    }),
                    (0, l.jsx)(N.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, l.jsx)(c.aRk, {
                            selected: n || g,
                            lowerBadge: i > 0 ? (0, E.Ne)(i) : null,
                            upperBadge: (0, E.Or)({
                                audio: r,
                                video: s,
                                screenshare: d,
                                isCurrentUserConnected: u
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(i) },
                            children: (0, l.jsx)(o.mh, {
                                id: e.id,
                                children: (i) =>
                                    (0, l.jsx)(c.LYs, {
                                        to: j.Z5c.CHANNEL(j.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || g,
                                        ariaLabel: null != t ? t : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: _ ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: _ ? 'on-hover' : 'always',
                                        children: _
                                            ? (0, l.jsx)(f.Z, {
                                                  channel: e,
                                                  size: c.EFr.SIZE_48,
                                                  facepileSizeOverride: c.EFr.SIZE_32,
                                                  experimentLocation: 'unread_gdm',
                                                  'aria-hidden': !0
                                              })
                                            : void 0,
                                        ...i
                                    })
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
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: A
                })
            }),
            P(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = t.type === j.d4z.DM ? Z.default.getUser(t.getRecipientId()) : null;
                null != i
                    ? (0, d.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  user: i
                              });
                      })
                    : (0, d.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('95491')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  selected: !1
                              });
                      });
            });
    }
}
P(w, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let R = r.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, p.ZP)(e.channel),
        r = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
        a = (0, s.e7)([u.Z], () => (null != r ? u.Z.getMode(r) : j.WtW.VOICE), [r]),
        o = (0, s.e7)([_.Z], () => _.Z.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, s.e7)([x.Z], () => x.Z.getChannelId(), []),
        h = (0, s.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: f } = m.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        Z = r === n,
        I = !1,
        b = !1;
    Z && ((I = a === j.WtW.VOICE), (b = a === j.WtW.VIDEO));
    let S = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE),
        N = (0, g.Q3)('DirectMessage');
    return (0, l.jsx)(w, {
        ...e,
        ref: t,
        channelName: i,
        unread: h > 0,
        selected: d === n,
        badge: h,
        audio: I,
        video: b,
        stream: o,
        isCurrentUserInThisDMCall: Z,
        isGDMFacepileEnabled: f,
        size: N ? S : 56
    });
});
