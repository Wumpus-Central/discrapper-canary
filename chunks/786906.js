n.d(t, { Z: () => j }), n(388685);
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
    f = n(131704),
    g = n(523746),
    m = n(592125),
    y = n(430824),
    O = n(699516),
    v = n(944486),
    _ = n(707878),
    b = n(518084),
    E = n(388032),
    S = n(846602);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
            { channel: n, channelHasActiveCall: r, userIsInChannelCall: o, isBlocked: l } = this.props;
        if (!(0, f.hv)(n.type)) return null;
        let s = a.Csw,
            c = !1;
        return (
            r
                ? o
                    ? ((e = E.intl.string(E.t["4ry6ys"])), (s = a.gkL))
                    : (e = E.intl.string(E.t["0D/6R0"]))
                : l
                  ? ((e = E.intl.string(E.t.PHzjvb)), (t = a.ua7.Colors.RED), (c = !0))
                  : (e = E.intl.string(E.t.focH1t)),
            (0, i.jsx)(h.Z.Icon, {
                icon: s,
                tooltip: e,
                onClick: this.handleClickCall,
                tooltipColor: t,
                disabled: c,
            })
        );
    }
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: n,
                channel: r,
                channelName: o,
                guild: s,
                onMouseDown: c,
                onContextMenu: d,
                isPreviewingInGame: u,
                disableDragIndicator: f,
            } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(b.ZP.Bar, {
                  className: S.opacityHeader,
                  children: [
                      (0, i.jsx)(_.Z, {}),
                      (0, i.jsx)(h.Z.Icon, {
                          icon: a.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: E.intl.string(E.t.cpT0Cg),
                      }),
                  ],
              })
            : (0, i.jsx)(b.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)("div", {
                      className: l()(e, t, S.headerContainer),
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
                                        size: "custom",
                                        color: "currentColor",
                                        className: l()(S.dragIcon, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, p.ud)({
                                  channel: r,
                                  channelName: o,
                              }),
                              n ? null : (0, p.v0)(r, s),
                          ],
                      }),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", { showOpacitySlider: !1 }),
            x(this, "handleClickCall", (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            x(this, "handleOpenOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            x(this, "handleCloseOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            x(this, "handleMouseDown", (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            x(this, "renderWidgetButtons", () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    o = n ? E.intl.string(E.t.cSu80t) : E.intl.string(E.t.cM8Vnp);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.Z.Icon, {
                                        icon: a._S3,
                                        tooltip: E.intl.string(E.t.OVovCQ),
                                        onClick: this.handleOpenOpacitySettings,
                                    })
                                  : null,
                              (0, i.jsx)(h.Z.Icon, {
                                  icon: n ? a.QVc : a.k5M,
                                  tooltip: o,
                                  selected: n,
                                  onClick: t,
                              }),
                          ],
                      });
            });
    }
}
function j(e) {
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
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["channel"]);
    let r = (0, s.e7)([v.Z, m.Z], () => {
            let e = v.Z.getVoiceChannelId();
            return m.Z.getChannel(e);
        }),
        o = (0, s.e7)([y.Z], () => y.Z.getGuild(t.guild_id)),
        l = (0, s.e7)([g.Z], () => g.Z.isCallActive(t.id)),
        a = (0, u.ZP)(t),
        c = (0, s.e7)([O.Z], () => !!t.isDM() && null != t.getRecipientId() && O.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(
        C,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        x(e, t, n[t]);
                    });
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
            },
            n,
        ),
    );
}
