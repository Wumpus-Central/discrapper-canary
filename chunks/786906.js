n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    f = n(131704),
    g = n(523746),
    m = n(592125),
    v = n(430824),
    x = n(699516),
    S = n(944486),
    Z = n(707878),
    _ = n(518084),
    E = n(388032),
    C = n(970772);
function I(e, t, n) {
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
class N extends s.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: s, userIsInChannelCall: r, isBlocked: o } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let a = l.PhoneCallIcon,
            c = !1;
        return (
            s ? (r ? ((e = E.intl.string(E.t['4ry6ys'])), (a = l.PhoneHangUpIcon)) : (e = E.intl.string(E.t['0D/6R0']))) : o ? ((e = E.intl.string(E.t.PHzjvb)), (t = l.Tooltip.Colors.RED), (c = !0)) : (e = E.intl.string(E.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: a,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: s, channelName: r, guild: a, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(_.ZP.Bar, {
                  className: C.opacityHeader,
                  children: [
                      (0, i.jsx)(Z.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: l.XSmallIcon,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: E.intl.string(E.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(_.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: o()(e, t, C.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || f
                                  ? null
                                  : (0, i.jsx)(l.DragIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: o()(C.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: s,
                                  channelName: r
                              }),
                              n ? null : (0, p.v0)(s, a)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { showOpacitySlider: !1 }),
            I(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            I(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            I(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            I(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            I(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    r = n ? E.intl.string(E.t.cSu80t) : E.intl.string(E.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: l.BrowserCheckeredIcon,
                                        tooltip: E.intl.string(E.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? l.PinUprightSlashIcon : l.PinUprightIcon,
                                  tooltip: r,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            });
    }
}
function y(e) {
    let { channel: t, ...n } = e,
        s = (0, a.e7)([S.Z, m.Z], () => {
            let e = S.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        r = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        o = (0, a.e7)([g.Z], () => g.Z.isCallActive(t.id)),
        l = (0, u.ZP)(t),
        c = (0, a.e7)([x.Z], () => !!t.isDM() && null != t.getRecipientId() && x.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(N, {
        channel: t,
        channelName: l,
        guild: r,
        channelHasActiveCall: o,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: c,
        ...n
    });
}
