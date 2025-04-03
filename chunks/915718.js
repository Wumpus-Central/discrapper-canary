n.d(t, { Z: () => k }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(26151),
    c = n(287734),
    u = n(40851),
    d = n(607070),
    p = n(451576),
    h = n(358221),
    f = n(605236),
    m = n(243778),
    g = n(590293),
    b = n(970731),
    _ = n(560688),
    C = n(173507),
    y = n(523746),
    x = n(819640),
    v = n(131951),
    j = n(699516),
    O = n(594174),
    E = n(979651),
    N = n(585483),
    I = n(63063),
    P = n(665149),
    S = n(981631),
    Z = n(921944),
    T = n(65154),
    A = n(388032),
    w = n(389539);
function R(e, t, n) {
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
class M extends i.PureComponent {
    componentDidMount() {
        N.S.subscribe(S.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        N.S.unsubscribe(S.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            t,
            { inCall: n, callActive: i, callUnavailable: l, isBlocked: o, channel: s, mode: c, isProvisional: u } = this.props;
        if (n || (i && c === S.WtW.VOICE)) return null;
        let d = s.isManaged(),
            p = null,
            h = !1;
        return (
            u ? ((h = !0), (p = A.NW.string(A.t.izMR7u)), (e = a.ua7.Colors.RED)) : v.Z.supports(T.AN.VIDEO) ? (o ? ((p = A.NW.string(A.t.PHzjvb)), (e = a.ua7.Colors.RED), (h = !0)) : i && c === S.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (p = d ? A.NW.string(A.t.S0W8Z2) : A.NW.string(A.t.W68MhI))) : ((t = this.handleStartVideoCall), (p = d ? A.NW.string(A.t.S0W8Z2) : A.NW.string(A.t.oCqlGB)))) : ((h = !0), (t = this.handleBrowserNotSupported), (p = A.NW.string(A.t.UVpg3d))),
            (0, r.jsx)(P.ZP.Icon, {
                icon: a.Odl,
                onClick: t,
                disabled: h || l,
                tooltip: p,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            t,
            { inCall: n, canShowTooltip: i, callActive: l, callUnavailable: s, isBlocked: c, channel: u, canShowActivityGdmTooltip: d, dismissibleContentTypes: p, isProvisional: h } = this.props;
        if (n) return null;
        let f = u.isManaged(),
            g = !1;
        h ? ((g = !0), (e = A.NW.string(A.t.izMR7u)), (t = a.ua7.Colors.RED)) : s ? ((e = f ? A.NW.string(A.t.LW2Gho) : A.NW.string(A.t.rF7lNz)), (t = a.ua7.Colors.RED), (g = !0)) : c ? ((e = A.NW.string(A.t.PHzjvb)), (t = a.ua7.Colors.RED), (g = !0)) : (e = l ? (f ? A.NW.string(A.t.S0W8Z2) : A.NW.string(A.t.fdEeb2)) : f ? A.NW.string(A.t.S0W8Z2) : A.NW.string(A.t.focH1t));
        let _ = (0, r.jsx)(P.ZP.Icon, {
            icon: a.Csw,
            onClick: this.handleVoiceClick,
            disabled: g,
            tooltip: e,
            tooltipColor: t
        });
        return (0, r.jsx)(m.ZP, {
            contentTypes: p,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: l } = e;
                return t === o.z.ACTIVITY_GDM_CALL_TOOLTIP
                    ? (0, r.jsx)(a.yRy, {
                          position: 'bottom',
                          align: 'center',
                          animation: a.yRy.Animation.TRANSLATE,
                          shouldShow: i && d && !n,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(b.ZP, {
                                  header: (0, r.jsx)(a.X6q, {
                                      variant: 'heading-md/bold',
                                      color: 'always-white',
                                      children: A.NW.string(A.t.HOPqzc)
                                  }),
                                  content: (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'always-white',
                                              children: A.NW.string(A.t.xAW71d)
                                          }),
                                          (0, r.jsx)(a.eee, {
                                              href: I.Z.getArticleURL(S.BhN.ACTIVITIES),
                                              children: A.NW.string(A.t.hvVgAQ)
                                          })
                                      ]
                                  }),
                                  buttonCTA: A.NW.string(A.t['NX+WJC']),
                                  onClick: () => {
                                      t(), l(Z.L.UNKNOWN);
                                  },
                                  className: w.tooltip
                              });
                          },
                          children: () => _
                      })
                    : _;
            }
        });
    }
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleStartCall', (e, t) => {
                let { channel: n, notFriend: r, appContext: i } = this.props,
                    l = r ? n.getRecipientId() : null,
                    o = () => s.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), l);
                t ? (0, C.Z)(o, i) : o();
            }),
            R(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            R(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: r } = this.props;
                if ((r && (0, f.EW)(o.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: Z.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            R(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            R(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, C.Z)(() => this.handleJoinCall(!0), e);
            }),
            R(this, 'handleBrowserNotSupported', () => {
                (0, _.Z)();
            });
    }
}
function k(e) {
    var t;
    let { channel: n } = e,
        a = (0, g.Z)(),
        s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)),
        c = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)),
        f = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        { callActive: m, callUnavailable: b } = (0, l.cj)([y.Z], () => ({
            callActive: y.Z.isCallActive(n.id),
            callUnavailable: y.Z.isCallUnavailable(n.id)
        })),
        _ = n.getRecipientId(),
        { notFriend: C, isBlocked: v } = (0, l.cj)([j.Z], () => ({
            notFriend: n.type === S.d4z.DM && null != _ && !j.Z.isFriend(_),
            isBlocked: n.type === S.d4z.DM && null != _ && j.Z.isBlocked(_)
        })),
        N = (0, l.e7)([O.default], () => O.default.getUser(_)),
        I = (0, u.bp)(),
        P = [],
        Z = (0, p.Z)(n.id),
        T = (0, l.e7)([x.Z], () => x.Z.hasLayers());
    Z && !T && P.push(o.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [A, w] = i.useState(!1);
    return (i.useEffect(() => {
        let e = setTimeout(() => {
            w(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    a || (null == N ? void 0 : N.bot))
        ? null
        : (0, r.jsx)(M, {
              channel: n,
              mode: s,
              inCall: c,
              callActive: m,
              isProvisional: null != (t = null == N ? void 0 : N.isProvisional) && t,
              callUnavailable: b,
              notFriend: C,
              isBlocked: v,
              appContext: I,
              canShowTooltip: A,
              canShowActivityGdmTooltip: Z,
              dismissibleContentTypes: P,
              useReducedMotion: f
          });
}
