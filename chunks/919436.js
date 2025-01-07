n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(752877),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(358221),
    h = n(43267),
    p = n(933557),
    f = n(93687),
    m = n(266076),
    g = n(199902),
    v = n(19780),
    C = n(306680),
    x = n(944486),
    I = n(594174),
    _ = n(451478),
    Z = n(276952),
    b = n(682662),
    S = n(662146),
    N = n(674552),
    E = n(981631),
    y = n(646819);
function j(e, t, n) {
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
function P(e) {
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
class A extends (i = r.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !_.Z.isFocused(),
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
                    immediate: !_.Z.isFocused(),
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
        let { controller: e } = this.state,
            { opacity: t, height: n, scale: i } = e.springs;
        return {
            opacity: t,
            height: n.to([0, 1], [0, 56]),
            transform: i.to([0, 1], [0.5, 1]).to((e) => 'scale('.concat(e, ')'))
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === E.d4z.DM ? I.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: i, audio: r, video: s, stream: u, isCurrentUserInThisDMCall: d, unread: h, isGDMFacepileEnabled: p } = this.props,
            { hovered: f, animating: g } = this.state,
            v = e.isMultiUserDM() && null == e.icon && p;
        return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(b.H, {
                children: [
                    (0, l.jsx)(Z.Z, {
                        hovered: !g && f,
                        selected: !g && n,
                        unread: !g && h,
                        className: y.pill
                    }),
                    (0, l.jsx)(S.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, l.jsx)(c.BlobMask, {
                            selected: n || f,
                            lowerBadge: i > 0 ? (0, N.Ne)(i) : null,
                            upperBadge: (0, N.Or)({
                                audio: r,
                                video: s,
                                screenshare: u,
                                isCurrentUserConnected: d
                            }),
                            lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(i) },
                            children: (0, l.jsx)(o.mh, {
                                id: e.id,
                                children: (i) =>
                                    (0, l.jsx)(c.NavItem, {
                                        to: E.Z5c.CHANNEL(E.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || f,
                                        ariaLabel: null != t ? t : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: v ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: v ? 'on-hover' : 'always',
                                        children: v
                                            ? (0, l.jsx)(m.Z, {
                                                  channel: e,
                                                  size: c.AvatarSizes.SIZE_48,
                                                  facepileSizeOverride: c.AvatarSizes.SIZE_32,
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
            j(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: P
                })
            }),
            j(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = t.type === E.d4z.DM ? I.default.getUser(t.getRecipientId()) : null;
                null != i
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  user: i
                              });
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
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
j(A, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
}),
    (t.Z = r.forwardRef(function (e, t) {
        let n = e.channel.id,
            i = (0, p.ZP)(e.channel),
            r = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
            a = (0, s.e7)([d.Z], () => (null != r ? d.Z.getMode(r) : E.WtW.VOICE), [r]),
            o = (0, s.e7)([g.Z], () => g.Z.getAllApplicationStreamsForChannel(n).length > 0),
            c = (0, s.e7)([x.Z], () => x.Z.getChannelId(), []),
            u = (0, s.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
            { isFacepileEnabled: h } = f.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
            m = r === n,
            I = !1,
            _ = !1;
        return (
            m && ((I = a === E.WtW.VOICE), (_ = a === E.WtW.VIDEO)),
            (0, l.jsx)(A, {
                ...e,
                ref: t,
                channelName: i,
                unread: u > 0,
                selected: c === n,
                badge: u,
                audio: I,
                video: _,
                stream: o,
                isCurrentUserInThisDMCall: m,
                isGDMFacepileEnabled: h
            })
        );
    }));
