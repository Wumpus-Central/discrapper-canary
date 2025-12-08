n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    s = n(907862),
    o = n(481060),
    c = n(26151),
    d = n(287734),
    u = n(607070),
    p = n(451576),
    h = n(358221),
    f = n(266454),
    g = n(243778),
    m = n(590293),
    b = n(728285),
    _ = n(560688),
    y = n(173507),
    O = n(523746),
    x = n(819640),
    j = n(131951),
    v = n(699516),
    C = n(594174),
    I = n(979651),
    S = n(585483),
    E = n(665149),
    Z = n(981631),
    P = n(701488),
    T = n(921944),
    N = n(65154),
    R = n(388032);
function w(e, t, n) {
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
class A extends i.PureComponent {
    componentDidMount() {
        S.S.subscribe(Z.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        S.S.unsubscribe(Z.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            t,
            {
                inCall: n,
                callActive: i,
                callUnavailable: l,
                isBlocked: a,
                channel: s,
                mode: c,
                isProvisional: d,
            } = this.props;
        if (n || (i && c === Z.WtW.VOICE)) return null;
        let u = s.isManaged(),
            p = null,
            h = !1;
        return (
            d
                ? ((h = !0), (p = R.intl.string(R.t.izMR7o)), (e = o.aML.Colors.RED))
                : j.Z.supports(N.AN.VIDEO)
                  ? a
                      ? ((p = R.intl.string(R.t.PHzjvX)), (e = o.aML.Colors.RED), (h = !0))
                      : i && c === Z.WtW.VIDEO
                        ? ((t = this.handleJoinVideoCall),
                          (p = u ? R.intl.string(R.t.S0W8Z5) : R.intl.string(R.t.W68MhH)))
                        : ((t = this.handleStartVideoCall),
                          (p = u ? R.intl.string(R.t.S0W8Z5) : R.intl.string(R.t.oCqlGG)))
                  : ((h = !0), (t = this.handleBrowserNotSupported), (p = R.intl.string(R.t.UVpg3U))),
            (0, r.jsx)(E.ZP.Icon, {
                icon: o.Odl,
                onClick: t,
                disabled: h || l,
                tooltip: p,
                tooltipColor: e,
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            t,
            {
                inCall: n,
                callActive: i,
                callUnavailable: l,
                isBlocked: c,
                channel: d,
                dismissibleContentTypes: u,
                isProvisional: p,
            } = this.props;
        if (n) return null;
        let h = d.isManaged(),
            f = !1;
        p
            ? ((f = !0), (e = R.intl.string(R.t.izMR7o)), (t = o.aML.Colors.RED))
            : l
              ? ((e = h ? R.intl.string(R.t.LW2Ghr) : R.intl.string(R.t.rF7lN5)), (t = o.aML.Colors.RED), (f = !0))
              : c
                ? ((e = R.intl.string(R.t.PHzjvX)), (t = o.aML.Colors.RED), (f = !0))
                : (e = i
                      ? h
                          ? R.intl.string(R.t.S0W8Z5)
                          : R.intl.string(R.t.fdEeb5)
                      : h
                        ? R.intl.string(R.t.S0W8Z5)
                        : R.intl.string(R.t.focH1t));
        let m = (0, r.jsx)(E.ZP.Icon, {
            ref: this.iconRef,
            icon: o.Csw,
            onClick: this.handleVoiceClick,
            disabled: f,
            tooltip: e,
            tooltipColor: t,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                m,
                (0, r.jsx)(g.ZP, {
                    contentTypes: u,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, r.jsx)(s.J2, {
                                  targetElementRef: this.iconRef,
                                  title: R.intl.string(R.t.HOPqzR),
                                  body: R.intl.format(R.t.xAW71b, { helpdeskUrl: P.sI }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(T.L.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()],
        });
    }
    constructor(...e) {
        super(...e),
            w(this, "iconRef", i.createRef()),
            w(this, "handleStartCall", (e, t) => {
                let { channel: n, notFriend: r, appContext: i } = this.props,
                    l = r ? n.getRecipientId() : null,
                    a = () => c.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), l);
                t ? (0, y.Z)(a, i) : a();
            }),
            w(this, "handleJoinCall", (e) => {
                d.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            w(this, "handleVoiceClick", (e) => {
                let { callUnavailable: t, callActive: n, dismissibleContentTypes: r } = this.props;
                if (
                    (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) &&
                        (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: T.L.AUTO }),
                    t)
                );
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            w(this, "handleStartVideoCall", (e) => {
                this.handleStartCall(e, !0);
            }),
            w(this, "handleJoinVideoCall", () => {
                let { appContext: e } = this.props,
                    t = () => this.handleJoinCall(!0);
                (0, y.Z)(t, e);
            }),
            w(this, "handleBrowserNotSupported", () => {
                (0, _.Z)();
            });
    }
}
function D(e) {
    var t;
    let { channel: n } = e,
        i = (0, m.Z)(),
        s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)),
        o = (0, l.e7)([I.Z], () => I.Z.isInChannel(n.id)),
        c = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: d, callUnavailable: f } = (0, l.cj)([O.Z], () => ({
            callActive: O.Z.isCallActive(n.id),
            callUnavailable: O.Z.isCallUnavailable(n.id),
        })),
        g = n.getRecipientId(),
        { notFriend: _, isBlocked: y } = (0, l.cj)([v.Z], () => ({
            notFriend: n.type === Z.d4z.DM && null != g && !v.Z.isFriend(g),
            isBlocked: n.type === Z.d4z.DM && null != g && v.Z.isBlocked(g),
        })),
        j = (0, l.e7)([C.default], () => C.default.getUser(g)),
        S = (0, b.bp)(),
        E = [],
        P = (0, p.Z)(n.id),
        T = (0, l.e7)([x.Z], () => x.Z.hasLayers());
    return (P && !T && E.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == j ? void 0 : j.bot))
        ? null
        : (0, r.jsx)(A, {
              channel: n,
              mode: s,
              inCall: o,
              callActive: d,
              isProvisional: null != (t = null == j ? void 0 : j.isProvisional) && t,
              callUnavailable: f,
              notFriend: _,
              isBlocked: y,
              appContext: S,
              dismissibleContentTypes: E,
              useReducedMotion: c,
          });
}
