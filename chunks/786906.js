n.d(t, { Z: () => N }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
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
    y = n(430824),
    v = n(699516),
    _ = n(944486),
    O = n(707878),
    b = n(518084),
    x = n(388032),
    E = n(706498);
function S(e, t, n) {
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
class C extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e,
            t,
            { channel: n, channelHasActiveCall: r, userIsInChannelCall: s, isBlocked: o } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let a = l.Csw,
            c = !1;
        return (
            r ? (s ? ((e = x.NW.string(x.t['4ry6ys'])), (a = l.gkL)) : (e = x.NW.string(x.t['0D/6R0']))) : o ? ((e = x.NW.string(x.t.PHzjvb)), (t = l.ua7.Colors.RED), (c = !0)) : (e = x.NW.string(x.t.focH1t)),
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
        let { className: e, draggableClassName: t, locked: n, channel: r, channelName: s, guild: a, onMouseDown: c, onContextMenu: d, isPreviewingInGame: u, disableDragIndicator: f } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(b.ZP.Bar, {
                  className: E.opacityHeader,
                  children: [
                      (0, i.jsx)(O.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: l.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: x.NW.string(x.t.cpT0Cg)
                      })
                  ]
              })
            : (0, i.jsx)(b.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)('div', {
                      className: o()(e, t, E.headerContainer),
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
                                  : (0, i.jsx)(l.Vni, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: o()(E.dragIcon, t),
                                        width: 20,
                                        height: 20
                                    }),
                              (0, p.ud)({
                                  channel: r,
                                  channelName: s
                              }),
                              n ? null : (0, p.v0)(r, a)
                          ]
                      })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { showOpacitySlider: !1 }),
            S(this, 'handleClickCall', (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            S(this, 'handleOpenOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            S(this, 'handleCloseOpacitySettings', () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            S(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            S(this, 'renderWidgetButtons', () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    s = n ? x.NW.string(x.t.cSu80t) : x.NW.string(x.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: l._S3,
                                        tooltip: x.NW.string(x.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? l.QVc : l.k5M,
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
    let r = (0, a.e7)([_.Z, m.Z], () => {
            let e = _.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        s = (0, a.e7)([y.Z], () => y.Z.getGuild(t.guild_id)),
        o = (0, a.e7)([g.Z], () => g.Z.isCallActive(t.id)),
        l = (0, u.ZP)(t),
        c = (0, a.e7)([v.Z], () => !!t.isDM() && null != t.getRecipientId() && v.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(
        C,
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
                        S(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                channel: t,
                channelName: l,
                guild: s,
                channelHasActiveCall: o,
                userIsInChannelCall: null != r && r.id === t.id,
                isBlocked: c
            },
            n
        )
    );
}
