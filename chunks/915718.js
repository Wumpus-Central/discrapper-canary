n.d(t, { Z: () => O }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
    s = n(481060),
    o = n(26151),
    c = n(287734),
    d = n(40851),
    u = n(607070),
    h = n(451576),
    p = n(358221),
    m = n(605236),
    f = n(243778),
    g = n(590293),
    _ = n(970731),
    C = n(560688),
    x = n(173507),
    v = n(523746),
    E = n(819640),
    I = n(131951),
    b = n(699516),
    Z = n(594174),
    N = n(979651),
    T = n(585483),
    S = n(63063),
    j = n(665149),
    y = n(981631),
    A = n(921944),
    P = n(65154),
    R = n(388032),
    M = n(257894);
function L(e, t, n) {
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
class k extends l.PureComponent {
    componentDidMount() {
        T.S.subscribe(y.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        T.S.unsubscribe(y.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e, t;
        let { inCall: n, callActive: l, callUnavailable: a, isBlocked: r, channel: o, mode: c, isProvisional: d } = this.props;
        if (n || (l && c === y.WtW.VOICE)) return null;
        let u = o.isManaged(),
            h = null,
            p = !1;
        return (
            d ? ((p = !0), (h = R.intl.string(R.t.izMR7u)), (e = s.ua7.Colors.RED)) : I.Z.supports(P.AN.VIDEO) ? (r ? ((h = R.intl.string(R.t.PHzjvb)), (e = s.ua7.Colors.RED), (p = !0)) : l && c === y.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (h = u ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.W68MhI))) : ((t = this.handleStartVideoCall), (h = u ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.oCqlGB)))) : ((p = !0), (t = this.handleBrowserNotSupported), (h = R.intl.string(R.t.UVpg3d))),
            (0, i.jsx)(j.ZP.Icon, {
                icon: s.Odl,
                onClick: t,
                disabled: p || a,
                tooltip: h,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e, t;
        let { inCall: n, canShowTooltip: l, callActive: a, callUnavailable: o, isBlocked: c, channel: d, canShowActivityGdmTooltip: u, dismissibleContentTypes: h, isProvisional: p } = this.props;
        if (n) return null;
        let m = d.isManaged(),
            g = !1;
        p ? ((g = !0), (e = R.intl.string(R.t.izMR7u)), (t = s.ua7.Colors.RED)) : o ? ((e = m ? R.intl.string(R.t.LW2Gho) : R.intl.string(R.t.rF7lNz)), (t = s.ua7.Colors.RED), (g = !0)) : c ? ((e = R.intl.string(R.t.PHzjvb)), (t = s.ua7.Colors.RED), (g = !0)) : (e = a ? (m ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.fdEeb2)) : m ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.focH1t));
        let C = (0, i.jsx)(j.ZP.Icon, {
            icon: s.Csw,
            onClick: this.handleVoiceClick,
            disabled: g,
            tooltip: e,
            tooltipColor: t
        });
        return (0, i.jsx)(f.ZP, {
            contentTypes: h,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: a } = e;
                return t === r.z.ACTIVITY_GDM_CALL_TOOLTIP
                    ? (0, i.jsx)(s.yRy, {
                          position: 'bottom',
                          align: 'center',
                          animation: s.yRy.Animation.TRANSLATE,
                          shouldShow: l && u && !n,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsx)(_.ZP, {
                                  header: (0, i.jsx)(s.X6q, {
                                      variant: 'heading-md/bold',
                                      color: 'always-white',
                                      children: R.intl.string(R.t.HOPqzc)
                                  }),
                                  content: (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'always-white',
                                              children: R.intl.string(R.t.xAW71d)
                                          }),
                                          (0, i.jsx)(s.eee, {
                                              href: S.Z.getArticleURL(y.BhN.ACTIVITIES),
                                              children: R.intl.string(R.t.hvVgAQ)
                                          })
                                      ]
                                  }),
                                  buttonCTA: R.intl.string(R.t['NX+WJC']),
                                  onClick: () => {
                                      t(), a(A.L.UNKNOWN);
                                  },
                                  className: M.tooltip
                              });
                          },
                          children: () => C
                      })
                    : C;
            }
        });
    }
    render() {
        return (0, i.jsxs)(l.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'handleStartCall', (e, t) => {
                let { channel: n, notFriend: i, appContext: l } = this.props,
                    a = i ? n.getRecipientId() : null,
                    r = () => o.Z.call(n.id, t, !i && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), a);
                t ? (0, x.Z)(r, l) : r();
            }),
            L(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            L(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: i } = this.props;
                if ((i && (0, m.EW)(r.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: A.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            L(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            L(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, x.Z)(() => this.handleJoinCall(!0), e);
            }),
            L(this, 'handleBrowserNotSupported', () => {
                (0, C.Z)();
            });
    }
}
function O(e) {
    var t;
    let { channel: n } = e,
        s = (0, g.Z)(),
        o = (0, a.e7)([p.Z], () => p.Z.getMode(n.id)),
        c = (0, a.e7)([N.Z], () => N.Z.isInChannel(n.id)),
        m = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: f, callUnavailable: _ } = (0, a.cj)([v.Z], () => ({
            callActive: v.Z.isCallActive(n.id),
            callUnavailable: v.Z.isCallUnavailable(n.id)
        })),
        C = n.getRecipientId(),
        { notFriend: x, isBlocked: I } = (0, a.cj)([b.Z], () => ({
            notFriend: n.type === y.d4z.DM && null != C && !b.Z.isFriend(C),
            isBlocked: n.type === y.d4z.DM && null != C && b.Z.isBlocked(C)
        })),
        T = (0, a.e7)([Z.default], () => Z.default.getUser(C)),
        S = (0, d.bp)(),
        j = [],
        A = (0, h.Z)(n.id),
        P = (0, a.e7)([E.Z], () => E.Z.hasLayers());
    A && !P && j.push(r.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [R, M] = l.useState(!1);
    return (l.useEffect(() => {
        let e = setTimeout(() => {
            M(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    s || (null == T ? void 0 : T.bot))
        ? null
        : (0, i.jsx)(k, {
              channel: n,
              mode: o,
              inCall: c,
              callActive: f,
              isProvisional: null !== (t = null == T ? void 0 : T.isProvisional) && void 0 !== t && t,
              callUnavailable: _,
              notFriend: x,
              isBlocked: I,
              appContext: S,
              canShowTooltip: R,
              canShowActivityGdmTooltip: A,
              dismissibleContentTypes: j,
              useReducedMotion: m
          });
}
