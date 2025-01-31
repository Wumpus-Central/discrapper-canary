n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    d = n(13245),
    c = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    g = n(131704),
    f = n(523746),
    m = n(592125),
    x = n(430824),
    v = n(699516),
    Z = n(944486),
    S = n(707878),
    E = n(518084),
    C = n(388032),
    I = n(970772);
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
class y extends s.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: s, userIsInChannelCall: l, isBlocked: r } = this.props;
        if (!(0, g.hv)(n.type)) return null;
        let o = a.Csw,
            d = !1;
        return (
            s ? (l ? ((e = C.intl.string(C.t['4ry6ys'])), (o = a.gkL)) : (e = C.intl.string(C.t['0D/6R0']))) : r ? ((e = C.intl.string(C.t.PHzjvb)), (t = a.ua7.Colors.RED), (d = !0)) : (e = C.intl.string(C.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: o,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: d
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: s, channelName: l, guild: o, onMouseDown: d, onContextMenu: c, isPreviewingInGame: u, disableDragIndicator: g } = this.props,
            { showOpacitySlider: f } = this.state;
        return f && !n
            ? (0, i.jsxs)(E.ZP.Bar, {
                  className: I.opacityHeader,
                  children: [
                      (0, i.jsx)(S.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: a.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: C.intl.string(C.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(E.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: r()(e, t, I.headerContainer),
                      onMouseDown: d,
                      onContextMenu: c,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || g
                                  ? null
                                  : (0, i.jsx)(a.Vni, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: r()(I.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: s,
                                  channelName: l
                              }),
                              n ? null : (0, p.v0)(s, o)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', { showOpacitySlider: !1 }),
            N(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? c.default.selectVoiceChannel(null) : d.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    d.Z.callPrivateChannel(t.id, n);
                }
            }),
            N(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && d.Z.setPreviewInGameMode(!0);
            }),
            N(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && d.Z.setPreviewInGameMode(!1);
            }),
            N(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            N(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    l = n ? C.intl.string(C.t.cSu80t) : C.intl.string(C.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: a._S3,
                                        tooltip: C.intl.string(C.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? a.QVc : a.k5M,
                                  tooltip: l,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            });
    }
}
function _(e) {
    let { channel: t, ...n } = e,
        s = (0, o.e7)([Z.Z, m.Z], () => {
            let e = Z.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        l = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id)),
        r = (0, o.e7)([f.Z], () => f.Z.isCallActive(t.id)),
        a = (0, u.ZP)(t),
        d = (0, o.e7)([v.Z], () => !!t.isDM() && null != t.getRecipientId() && v.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(y, {
        channel: t,
        channelName: a,
        guild: l,
        channelHasActiveCall: r,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...n
    });
}
