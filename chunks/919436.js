n.d(t, { Z: () => w }), n(411104), n(47120);
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
    m = n(93687),
    g = n(266076),
    f = n(199902),
    _ = n(19780),
    v = n(306680),
    x = n(944486),
    C = n(594174),
    Z = n(451478),
    I = n(276952),
    b = n(682662),
    S = n(662146),
    N = n(674552),
    E = n(981631),
    j = n(646819);
function y(e, t, n) {
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
let P = {
    friction: 28,
    tension: 600
};
function A(e) {
    switch (e) {
        case 'height':
        case 'opacity':
            return {
                duration: 150,
                ...P
            };
        case 'scale':
            return { ...P };
        default:
            throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
    }
}
class T extends (i = r.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !Z.Z.isFocused(),
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
                    immediate: !Z.Z.isFocused(),
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
            t = e.type === E.d4z.DM ? C.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
    }
    render() {
        let { channel: e, channelName: t, selected: n, badge: i, audio: r, video: s, stream: d, isCurrentUserInThisDMCall: u, unread: h, isGDMFacepileEnabled: p } = this.props,
            { hovered: m, animating: f } = this.state,
            _ = e.isMultiUserDM() && null == e.icon && p;
        return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(b.H, {
                children: [
                    (0, l.jsx)(I.Z, {
                        hovered: !f && m,
                        selected: !f && n,
                        unread: !f && h,
                        className: j.pill
                    }),
                    (0, l.jsx)(S.Z, {
                        text: null != t ? t : '',
                        selected: n,
                        children: (0, l.jsx)(c.aRk, {
                            selected: n || m,
                            lowerBadge: i > 0 ? (0, N.Ne)(i) : null,
                            upperBadge: (0, N.Or)({
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
                                        to: E.Z5c.CHANNEL(E.ME, e.id),
                                        onMouseEnter: () => this.setState({ hovered: !0 }),
                                        onMouseLeave: () => this.setState({ hovered: !1 }),
                                        selected: n || m,
                                        ariaLabel: null != t ? t : '',
                                        onContextMenu: this.handleContextMenu,
                                        icon: _ ? void 0 : this.getChannelIcon(),
                                        backgroundStyle: _ ? 'on-hover' : 'always',
                                        children: _
                                            ? (0, l.jsx)(g.Z, {
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
            y(this, 'state', {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: A
                })
            }),
            y(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = t.type === E.d4z.DM ? C.default.getUser(t.getRecipientId()) : null;
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
y(T, 'defaultProps', {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1
});
let w = r.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, p.ZP)(e.channel),
        r = (0, s.e7)([_.Z], () => _.Z.getChannelId(), []),
        a = (0, s.e7)([u.Z], () => (null != r ? u.Z.getMode(r) : E.WtW.VOICE), [r]),
        o = (0, s.e7)([f.Z], () => f.Z.getAllApplicationStreamsForChannel(n).length > 0),
        c = (0, s.e7)([x.Z], () => x.Z.getChannelId(), []),
        d = (0, s.e7)([v.ZP], () => v.ZP.getMentionCount(n), [n]),
        { isFacepileEnabled: h } = m.Z.useExperiment({ location: 'unread_direct_message' }, { autoTrackExposure: !1 }),
        g = r === n,
        C = !1,
        Z = !1;
    return (
        g && ((C = a === E.WtW.VOICE), (Z = a === E.WtW.VIDEO)),
        (0, l.jsx)(T, {
            ...e,
            ref: t,
            channelName: i,
            unread: d > 0,
            selected: c === n,
            badge: d,
            audio: C,
            video: Z,
            stream: o,
            isCurrentUserInThisDMCall: g,
            isGDMFacepileEnabled: h
        })
    );
});
