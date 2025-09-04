n.d(t, { Z: () => M }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    o = n(907862),
    s = n(481060),
    c = n(26151),
    u = n(287734),
    d = n(40851),
    p = n(607070),
    h = n(451576),
    f = n(358221),
    m = n(266454),
    g = n(243778),
    b = n(590293),
    y = n(560688),
    _ = n(173507),
    C = n(523746),
    v = n(819640),
    x = n(131951),
    O = n(699516),
    j = n(594174),
    E = n(979651),
    S = n(585483),
    I = n(665149),
    P = n(981631),
    Z = n(701488),
    T = n(921944),
    N = n(65154),
    A = n(388032);
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
class R extends i.PureComponent {
    componentDidMount() {
        S.S.subscribe(P.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        S.S.unsubscribe(P.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            t,
            {
                inCall: n,
                callActive: i,
                callUnavailable: l,
                isBlocked: a,
                channel: o,
                mode: c,
                isProvisional: u,
            } = this.props;
        if (n || (i && c === P.WtW.VOICE)) return null;
        let d = o.isManaged(),
            p = null,
            h = !1;
        return (
            u
                ? ((h = !0), (p = A.intl.string(A.t.izMR7u)), (e = s.ua7.Colors.RED))
                : x.Z.supports(N.AN.VIDEO)
                  ? a
                      ? ((p = A.intl.string(A.t.PHzjvb)), (e = s.ua7.Colors.RED), (h = !0))
                      : i && c === P.WtW.VIDEO
                        ? ((t = this.handleJoinVideoCall),
                          (p = d ? A.intl.string(A.t.S0W8Z2) : A.intl.string(A.t.W68MhI)))
                        : ((t = this.handleStartVideoCall),
                          (p = d ? A.intl.string(A.t.S0W8Z2) : A.intl.string(A.t.oCqlGB)))
                  : ((h = !0), (t = this.handleBrowserNotSupported), (p = A.intl.string(A.t.UVpg3d))),
            (0, r.jsx)(I.ZP.Icon, {
                icon: s.Odl,
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
                channel: u,
                dismissibleContentTypes: d,
                isProvisional: p,
            } = this.props;
        if (n) return null;
        let h = u.isManaged(),
            f = !1;
        p
            ? ((f = !0), (e = A.intl.string(A.t.izMR7u)), (t = s.ua7.Colors.RED))
            : l
              ? ((e = h ? A.intl.string(A.t.LW2Gho) : A.intl.string(A.t.rF7lNz)), (t = s.ua7.Colors.RED), (f = !0))
              : c
                ? ((e = A.intl.string(A.t.PHzjvb)), (t = s.ua7.Colors.RED), (f = !0))
                : (e = i
                      ? h
                          ? A.intl.string(A.t.S0W8Z2)
                          : A.intl.string(A.t.fdEeb2)
                      : h
                        ? A.intl.string(A.t.S0W8Z2)
                        : A.intl.string(A.t.focH1t));
        let m = (0, r.jsx)(I.ZP.Icon, {
            ref: this.iconRef,
            icon: s.Csw,
            onClick: this.handleVoiceClick,
            disabled: f,
            tooltip: e,
            tooltipColor: t,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                m,
                (0, r.jsx)(g.ZP, {
                    contentTypes: d,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, r.jsx)(o.J2, {
                                  targetElementRef: this.iconRef,
                                  title: A.intl.string(A.t.HOPqzc),
                                  body: A.intl.format(A.t.xAW71d, { helpdeskUrl: Z.sI }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: {
                                      position: "top",
                                      align: "center",
                                  },
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
                t ? (0, _.Z)(a, i) : a();
            }),
            w(this, "handleJoinCall", (e) => {
                u.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            w(this, "handleVoiceClick", (e) => {
                let { callUnavailable: t, callActive: n, dismissibleContentTypes: r } = this.props;
                if (
                    (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) &&
                        (0, m.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: T.L.AUTO }),
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
                (0, _.Z)(t, e);
            }),
            w(this, "handleBrowserNotSupported", () => {
                (0, y.Z)();
            });
    }
}
function M(e) {
    var t;
    let { channel: n } = e,
        i = (0, b.Z)(),
        o = (0, l.e7)([f.Z], () => f.Z.getMode(n.id)),
        s = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)),
        c = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        { callActive: u, callUnavailable: m } = (0, l.cj)([C.Z], () => ({
            callActive: C.Z.isCallActive(n.id),
            callUnavailable: C.Z.isCallUnavailable(n.id),
        })),
        g = n.getRecipientId(),
        { notFriend: y, isBlocked: _ } = (0, l.cj)([O.Z], () => ({
            notFriend: n.type === P.d4z.DM && null != g && !O.Z.isFriend(g),
            isBlocked: n.type === P.d4z.DM && null != g && O.Z.isBlocked(g),
        })),
        x = (0, l.e7)([j.default], () => j.default.getUser(g)),
        S = (0, d.bp)(),
        I = [],
        Z = (0, h.Z)(n.id),
        T = (0, l.e7)([v.Z], () => v.Z.hasLayers());
    return (Z && !T && I.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == x ? void 0 : x.bot))
        ? null
        : (0, r.jsx)(R, {
              channel: n,
              mode: o,
              inCall: s,
              callActive: u,
              isProvisional: null != (t = null == x ? void 0 : x.isProvisional) && t,
              callUnavailable: m,
              notFriend: y,
              isBlocked: _,
              appContext: S,
              dismissibleContentTypes: I,
              useReducedMotion: c,
          });
}
