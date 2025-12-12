n.d(t, { Z: () => j }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(287734),
    u = n(933557),
    f = n(984370),
    h = n(910611),
    p = n(131704),
    g = n(523746),
    b = n(592125),
    m = n(430824),
    y = n(699516),
    v = n(944486),
    O = n(707878),
    E = n(518084),
    x = n(388032),
    S = n(309617);
function _(e, t, n) {
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
class Z extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: r, isBlocked: a } = this.props;
        if (!(0, p.hv)(t.type)) return null;
        let s = l.Csw,
            o = !1;
        return (
            n
                ? r
                    ? ((e = x.intl.string(x.t["4ry6yi"])), (s = l.gkL))
                    : (e = x.intl.string(x.t["0D/6Rz"]))
                : a
                  ? ((e = x.intl.string(x.t.PHzjvX)), (o = !0))
                  : (e = x.intl.string(x.t.focH1t)),
            (0, i.jsx)(f.Z.Icon, {
                icon: s,
                tooltip: e,
                onClick: this.handleClickCall,
                disabled: o,
            })
        );
    }
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: n,
                channel: r,
                channelName: a,
                guild: o,
                onMouseDown: c,
                onContextMenu: d,
                isPreviewingInGame: u,
                disableDragIndicator: p,
            } = this.props,
            { showOpacitySlider: g } = this.state;
        return g && !n
            ? (0, i.jsxs)(E.ZP.Bar, {
                  className: S.opacityHeader,
                  children: [
                      (0, i.jsx)(O.Z, {}),
                      (0, i.jsx)(f.Z.Icon, {
                          icon: l.Dio,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: x.intl.string(x.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, i.jsx)(E.ZP.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)("div", {
                      className: s()(e, t, S.headerContainer),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(f.Z, {
                          guildId: r.guild_id,
                          channelId: r.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || p
                                  ? null
                                  : (0, i.jsx)(l.Vni, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: s()(S.dragIcon, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, h.ud)({
                                  channel: r,
                                  channelName: a,
                              }),
                              n ? null : (0, h.v0)(r, o),
                          ],
                      }),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", { showOpacitySlider: !1 }),
            _(this, "handleClickCall", (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.Z.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.Z.callPrivateChannel(t.id, n);
                }
            }),
            _(this, "handleOpenOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.Z.setPreviewInGameMode(!0);
            }),
            _(this, "handleCloseOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.Z.setPreviewInGameMode(!1);
            }),
            _(this, "handleMouseDown", (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            _(this, "renderWidgetButtons", () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    a = n ? x.intl.string(x.t.cSu80j) : x.intl.string(x.t.cM8Vnm);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(f.Z.Icon, {
                                        icon: l._S3,
                                        tooltip: x.intl.string(x.t.OVovCb),
                                        onClick: this.handleOpenOpacitySettings,
                                    })
                                  : null,
                              (0, i.jsx)(f.Z.Icon, {
                                  icon: n ? l.QVc : l.k5M,
                                  tooltip: a,
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
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    (n = a[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["channel"]);
    let r = (0, o.e7)([v.Z, b.Z], () => {
            let e = v.Z.getVoiceChannelId();
            return b.Z.getChannel(e);
        }),
        a = (0, o.e7)([m.Z], () => m.Z.getGuild(t.guild_id)),
        s = (0, o.e7)([g.Z], () => g.Z.isCallActive(t.id)),
        l = (0, u.ZP)(t),
        c = (0, o.e7)([y.Z], () => !!t.isDM() && null != t.getRecipientId() && y.Z.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(
        Z,
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
                        _(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                channel: t,
                channelName: l,
                guild: a,
                channelHasActiveCall: s,
                userIsInChannelCall: null != r && r.id === t.id,
                isBlocked: c,
            },
            n,
        ),
    );
}
