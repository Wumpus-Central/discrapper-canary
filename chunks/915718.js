(n.d(t, { Z: () => L }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(26151),
    c = n(287734),
    d = n(40851),
    u = n(607070),
    h = n(451576),
    p = n(358221),
    f = n(266454),
    g = n(243778),
    m = n(590293),
    b = n(970731),
    _ = n(560688),
    y = n(173507),
    j = n(523746),
    O = n(819640),
    x = n(131951),
    v = n(699516),
    C = n(594174),
    E = n(979651),
    Z = n(585483),
    I = n(63063),
    S = n(665149),
    P = n(981631),
    T = n(921944),
    N = n(65154),
    w = n(388032),
    R = n(389539);
function A(e, t, n) {
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
class D extends i.PureComponent {
    componentDidMount() {
        Z.S.subscribe(P.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        Z.S.unsubscribe(P.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            t,
            { inCall: n, callActive: i, callUnavailable: l, isBlocked: a, channel: o, mode: c, isProvisional: d } = this.props;
        if (n || (i && c === P.WtW.VOICE)) return null;
        let u = o.isManaged(),
            h = null,
            p = !1;
        return (
            d ? ((p = !0), (h = w.intl.string(w.t.izMR7u)), (e = s.ua7.Colors.RED)) : x.Z.supports(N.AN.VIDEO) ? (a ? ((h = w.intl.string(w.t.PHzjvb)), (e = s.ua7.Colors.RED), (p = !0)) : i && c === P.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (h = u ? w.intl.string(w.t.S0W8Z2) : w.intl.string(w.t.W68MhI))) : ((t = this.handleStartVideoCall), (h = u ? w.intl.string(w.t.S0W8Z2) : w.intl.string(w.t.oCqlGB)))) : ((p = !0), (t = this.handleBrowserNotSupported), (h = w.intl.string(w.t.UVpg3d))),
            (0, r.jsx)(S.ZP.Icon, {
                icon: s.Odl,
                onClick: t,
                disabled: p || l,
                tooltip: h,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            t,
            { inCall: n, canShowTooltip: i, callActive: l, callUnavailable: o, isBlocked: c, channel: d, canShowActivityGdmTooltip: u, dismissibleContentTypes: h, isProvisional: p } = this.props;
        if (n) return null;
        let f = d.isManaged(),
            m = !1;
        p ? ((m = !0), (e = w.intl.string(w.t.izMR7u)), (t = s.ua7.Colors.RED)) : o ? ((e = f ? w.intl.string(w.t.LW2Gho) : w.intl.string(w.t.rF7lNz)), (t = s.ua7.Colors.RED), (m = !0)) : c ? ((e = w.intl.string(w.t.PHzjvb)), (t = s.ua7.Colors.RED), (m = !0)) : (e = l ? (f ? w.intl.string(w.t.S0W8Z2) : w.intl.string(w.t.fdEeb2)) : f ? w.intl.string(w.t.S0W8Z2) : w.intl.string(w.t.focH1t));
        let _ = (0, r.jsx)(S.ZP.Icon, {
            ref: this.iconRef,
            icon: s.Csw,
            onClick: this.handleVoiceClick,
            disabled: m,
            tooltip: e,
            tooltipColor: t
        });
        return (0, r.jsx)(g.ZP, {
            contentTypes: h,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: l } = e;
                return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP
                    ? (0, r.jsx)(s.yRy, {
                          targetElementRef: this.iconRef,
                          position: 'bottom',
                          align: 'center',
                          animation: s.yRy.Animation.TRANSLATE,
                          shouldShow: i && u && !n,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(b.ZP, {
                                  header: (0, r.jsx)(s.X6q, {
                                      variant: 'heading-md/bold',
                                      color: 'always-white',
                                      children: w.intl.string(w.t.HOPqzc)
                                  }),
                                  content: (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'always-white',
                                              children: w.intl.string(w.t.xAW71d)
                                          }),
                                          (0, r.jsx)(s.eee, {
                                              href: I.Z.getArticleURL(P.BhN.ACTIVITIES),
                                              children: w.intl.string(w.t.hvVgAQ)
                                          })
                                      ]
                                  }),
                                  buttonCTA: w.intl.string(w.t['NX+WJC']),
                                  onClick: () => {
                                      (t(), l(T.L.UNKNOWN));
                                  },
                                  className: R.tooltip
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
        (super(...e),
            A(this, 'iconRef', i.createRef()),
            A(this, 'handleStartCall', (e, t) => {
                let { channel: n, notFriend: r, appContext: i } = this.props,
                    l = r ? n.getRecipientId() : null,
                    a = () => o.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), l);
                t ? (0, y.Z)(a, i) : a();
            }),
            A(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            A(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: r } = this.props;
                if ((r && (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: T.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            A(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            A(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, y.Z)(() => this.handleJoinCall(!0), e);
            }),
            A(this, 'handleBrowserNotSupported', () => {
                (0, _.Z)();
            }));
    }
}
function L(e) {
    var t;
    let { channel: n } = e,
        s = (0, m.Z)(),
        o = (0, l.e7)([p.Z], () => p.Z.getMode(n.id)),
        c = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)),
        f = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: g, callUnavailable: b } = (0, l.cj)([j.Z], () => ({
            callActive: j.Z.isCallActive(n.id),
            callUnavailable: j.Z.isCallUnavailable(n.id)
        })),
        _ = n.getRecipientId(),
        { notFriend: y, isBlocked: x } = (0, l.cj)([v.Z], () => ({
            notFriend: n.type === P.d4z.DM && null != _ && !v.Z.isFriend(_),
            isBlocked: n.type === P.d4z.DM && null != _ && v.Z.isBlocked(_)
        })),
        Z = (0, l.e7)([C.default], () => C.default.getUser(_)),
        I = (0, d.bp)(),
        S = [],
        T = (0, h.Z)(n.id),
        N = (0, l.e7)([O.Z], () => O.Z.hasLayers());
    T && !N && S.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [w, R] = i.useState(!1);
    return (i.useEffect(() => {
        let e = setTimeout(() => {
            R(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    s || (null == Z ? void 0 : Z.bot))
        ? null
        : (0, r.jsx)(D, {
              channel: n,
              mode: o,
              inCall: c,
              callActive: g,
              isProvisional: null != (t = null == Z ? void 0 : Z.isProvisional) && t,
              callUnavailable: b,
              notFriend: y,
              isBlocked: x,
              appContext: I,
              canShowTooltip: w,
              canShowActivityGdmTooltip: T,
              dismissibleContentTypes: S,
              useReducedMotion: f
          });
}
