n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    a = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    h = n(984370),
    p = n(910611),
    g = n(131704),
    f = n(523746),
    m = n(592125),
    y = n(430824),
    O = n(699516),
    v = n(944486),
    S = n(707878),
    b = n(518084),
    x = n(388032),
    Z = n(673463);
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
class E extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e, t;
        let { channel: n, channelHasActiveCall: r, userIsInChannelCall: s, isBlocked: o } = this.props;
        if (!(0, g.hv)(n.type)) return null;
        let l = a.Csw,
            c = !1;
        return (
            r ? (s ? ((e = x.NW.string(x.t['4ry6ys'])), (l = a.gkL)) : (e = x.NW.string(x.t['0D/6R0']))) : o ? ((e = x.NW.string(x.t.PHzjvb)), (t = a.ua7.Colors.RED), (c = !0)) : (e = x.NW.string(x.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: l,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c
            })
        );
    }
    render() {
        let { className: e, draggableClassName: t, locked: n, channel: r, channelName: s, guild: l, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: g } = this.props,
            { showOpacitySlider: f } = this.state;
        return f && !n
            ? (0, i.jsxs)(b.ZP.Bar, {
                  className: Z.opacityHeader,
                  children: [
                      (0, i.jsx)(S.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: a.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: x.NW.string(x.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(b.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: o()(e, t, Z.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.Z, {
                          guildId: r.guild_id,
                          channelId: r.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || g
                                  ? null
                                  : (0, i.jsx)(a.Vni, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: o()(Z.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: r,
                                  channelName: s
                              }),
                              n ? null : (0, p.v0)(r, l)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', { showOpacitySlider: !1 }),
            j(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            j(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            j(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            j(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            j(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    s = n ? x.NW.string(x.t.cSu80t) : x.NW.string(x.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: a._S3,
                                        tooltip: x.NW.string(x.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? a.QVc : a.k5M,
                                  tooltip: s,
                                  selected: n,
                                  onClick: t
                              })
                          ]
                      });
            });
    }
}
function N(e) {
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
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['channel']);
    let r = (0, l.e7)([v.Z, m.Z], () => {
            let e = v.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        s = (0, l.e7)([y.Z], () => y.Z.getGuild(t.guild_id)),
        o = (0, l.e7)([f.Z], () => f.Z.isCallActive(t.id)),
        a = (0, u.ZP)(t),
        c = (0, l.e7)([O.Z], () => !!t.isDM() && null != t.getRecipientId() && O.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(
        E,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        j(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                channel: t,
                channelName: a,
                guild: s,
                channelHasActiveCall: o,
                userIsInChannelCall: null != r && r.id === t.id,
                isBlocked: c
            },
            n
        )
    );
}
