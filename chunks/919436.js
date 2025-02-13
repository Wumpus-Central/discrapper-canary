n.d(t, { Z: () => w }), n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    o = n(642128),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(358221),
    h = n(43267),
    p = n(933557),
    m = n(540059),
    g = n(93687),
    f = n(266076),
    _ = n(199902),
    v = n(19780),
    C = n(306680),
    x = n(944486),
    I = n(594174),
    Z = n(451478),
    b = n(276952),
    S = n(682662),
    N = n(662146),
    E = n(674552),
    j = n(981631),
    y = n(553497);
function T(e, t, n) {
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
let A = {
    friction: 28,
    tension: 600
};
function P(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return {
                duration: 150,
                ...A
            };
        case 'scale':
            return { ...A };
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class R extends (i = r.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !Z.Z.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: P
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
            config: P
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t
                .update({
                    immediate: !Z.Z.isFocused(),
                    height: 0,
                    opacity: 0,
                    scale: 0,
                    config: P
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
            t = e.type === j.d4z.DM ? I.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: i, audio: r, video: s, stream: d, isCurrentUserInThisDMCall: u, unread: h, isGDMFacepileEnabled: p } = this.props,
            { hovered: m, animating: g } = this.state,
            _ = e.isMultiUserDM() && null == e.icon && p;
        return (0, l.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(S.H, {
                children: [
                    (0, l.jsx)(b.Z, {
                        hovered: !g && m,
                        selected: !g && n,
                        unread: !g && h,
                        className: y.pill
                    }),
                    (0, l.jsx)(N.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, l.jsx)(c.aRk, {
                            selected: n || m,
                            lowerBadge: i > 0 ? (0, E.Ne)(i) : null,
                            upperBadge: (0, E.Or)({
                                audio: r,
                                video: s,
                                screenshare: d,
                                isCurrentUserConnected: u
                            }),
                            lowerBadgeSize: { width: (0, c.OVM)(i) },
                            children: (0, l.jsx)(a.mh, {
                                id: e.id,
                                children: (i) =>
                                    (0, l.jsx)(c.LYs, {
                                        to: j.Z5c.CHANNEL(j.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || m,
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
            T(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new o.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: P
                })
            }),
            T(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = t.type === j.d4z.DM ? I.default.getUser(t.getRecipientId()) : null;
                null != i
                    ? (0, d.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('76586')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  user: i
                              });
                      })
                    : (0, d.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('40979')]).then(n.bind(n, 354741));
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
T(R, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let w = r.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, p.ZP)(e.channel),
        r = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
        o = (0, s.e7)([u.Z], () => (null != r ? u.Z.getMode(r) : j.WtW.VOICE), [r]),
        a = (0, s.e7)([_.Z], () => _.Z.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, s.e7)([x.Z], () => x.Z.getChannelId(), []),
        h = (0, s.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: f } = g.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        I = r === n,
        Z = !1,
        b = !1;
    I && ((Z = o === j.WtW.VOICE), (b = o === j.WtW.VIDEO));
    let S = (0, c.dQu)(c.TVs.modules.guildbar.AVATAR_SIZE),
        N = (0, m.Q3)('DirectMessage');
    return (0, l.jsx)(R, {
        ...e,
        ref: t,
        channelName: i,
        unread: h > 0,
        selected: d === n,
        badge: h,
        audio: Z,
        video: b,
        stream: a,
        isCurrentUserInThisDMCall: I,
        isGDMFacepileEnabled: f,
        size: N ? S : 56
    });
});
