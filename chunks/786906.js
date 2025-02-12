n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(442837),
    o = n(481060),
    d = n(13245),
    c = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    g = n(131704),
    f = n(523746),
    m = n(592125),
    _ = n(430824),
    v = n(699516),
    x = n(944486),
    S = n(707878),
    Z = n(518084),
    E = n(388032),
    C = n(437834);
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
class y extends s.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: s, userIsInChannelCall: l, isBlocked: a } = this.props;
        if (!(0, g.hv)(n.type)) return null;
        let r = o.Csw,
            d = !1;
        return (
            s ? (l ? ((e = E.intl.string(E.t['4ry6ys'])), (r = o.gkL)) : (e = E.intl.string(E.t['0D/6R0']))) : a ? ((e = E.intl.string(E.t.PHzjvb)), (t = o.ua7.Colors.RED), (d = !0)) : (e = E.intl.string(E.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: r,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: d
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: s, channelName: l, guild: r, onMouseDown: d, onContextMenu: c, isPreviewingInGame: u, disableDragIndicator: g } = this.props,
            { showOpacitySlider: f } = this.state;
        return f && !n
            ? (0, i.jsxs)(Z.ZP.Bar, {
                  className: C.opacityHeader,
                  children: [
                      (0, i.jsx)(S.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: o.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: E.intl.string(E.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(Z.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: a()(e, t, C.headerContainer),
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
                                  : (0, i.jsx)(o.Vni, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: a()(C.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: s,
                                  channelName: l
                              }),
                              n ? null : (0, p.v0)(s, r)
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
                if (i) n ? c.default.selectVoiceChannel(null) : d.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    d.Z.callPrivateChannel(t.id, n);
                }
            }),
            I(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && d.Z.setPreviewInGameMode(!0);
            }),
            I(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && d.Z.setPreviewInGameMode(!1);
            }),
            I(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            I(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    l = n ? E.intl.string(E.t.cSu80t) : E.intl.string(E.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: o._S3,
                                        tooltip: E.intl.string(E.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? o.QVc : o.k5M,
                                  tooltip: l,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            });
    }
}
function N(e) {
    let { channel: t, ...n } = e,
        s = (0, r.e7)([x.Z, m.Z], () => {
            let e = x.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        l = (0, r.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        a = (0, r.e7)([f.Z], () => f.Z.isCallActive(t.id)),
        o = (0, u.ZP)(t),
        d = (0, r.e7)([v.Z], () => !!t.isDM() && null != t.getRecipientId() && v.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(y, {
        channel: t,
        channelName: o,
        guild: l,
        channelHasActiveCall: a,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...n
    });
}
