(n.d(t, { Z: () => Z }), n(388685));
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    s = n(442837),
    a = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    f = n(77880),
    g = n(131704),
    m = n(523746),
    y = n(592125),
    O = n(430824),
    v = n(699516),
    _ = n(944486),
    b = n(707878),
    E = n(518084),
    S = n(388032),
    x = n(901939);
function C(e, t, n) {
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
class j extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e,
            t,
            { channel: n, channelHasActiveCall: r, userIsInChannelCall: o, isBlocked: l, changeLeaveCallAndActivityIcons: s } = this.props;
        if (!(0, g.hv)(n.type)) return null;
        let c = a.Csw,
            d = !1;
        return (
            r ? (o ? ((e = S.intl.string(S.t['4ry6ys'])), (c = s ? a.PBZ : a.gkL)) : (e = S.intl.string(S.t['0D/6R0']))) : l ? ((e = S.intl.string(S.t.PHzjvb)), (t = a.ua7.Colors.RED), (d = !0)) : (e = S.intl.string(S.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: c,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: d
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: r, channelName: o, guild: s, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(E.ZP.Bar, {
                  className: x.opacityHeader,
                  children: [
                      (0, i.jsx)(b.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: a.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: S.intl.string(S.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(E.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: l()(e, t, x.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: r.guild_id,
                          channelId: r.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || f
                                  ? null
                                  : (0, i.jsx)(a.Vni, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: l()(x.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: r,
                                  channelName: o
                              }),
                              n ? null : (0, p.v0)(r, s)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        (super(...e),
            C(this, 'state', { showOpacitySlider: !1 }),
            C(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            C(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                (this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0));
            }),
            C(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                (this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1));
            }),
            C(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            C(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    o = n ? S.intl.string(S.t.cSu80t) : S.intl.string(S.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: a._S3,
                                        tooltip: S.intl.string(S.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? a.QVc : a.k5M,
                                  tooltip: o,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            }));
    }
}
function Z(e) {
    var { channel: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) ((n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++) ((n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['channel']);
    let r = (0, s.e7)([_.Z, y.Z], () => {
            let e = _.Z.getVoiceChannelId();
            return y.Z.getChannel(e);
        }),
        o = (0, s.e7)([O.Z], () => O.Z.getGuild(t.guild_id)),
        l = (0, s.e7)([m.Z], () => m.Z.isCallActive(t.id)),
        a = (0, u.ZP)(t),
        c = (0, s.e7)([v.Z], () => !!t.isDM() && null != t.getRecipientId() && v.Z.isBlocked(t.getRecipientId())),
        { changeLeaveCallAndActivityIcons: d } = (0, f.A)({ location: 'TextWidgetHeader' });
    return (0, i.jsx)(
        j,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        C(e, t, n[t]);
                    }));
            }
            return e;
        })(
            {
                channel: t,
                channelName: a,
                guild: o,
                channelHasActiveCall: l,
                userIsInChannelCall: null != r && r.id === t.id,
                isBlocked: c,
                changeLeaveCallAndActivityIcons: d
            },
            n
        )
    );
}
