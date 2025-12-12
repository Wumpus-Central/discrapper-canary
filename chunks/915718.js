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
    y = n(560688),
    O = n(173507),
    x = n(523746),
    j = n(819640),
    v = n(131951),
    C = n(699516),
    I = n(594174),
    _ = n(979651),
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
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: l,
                channel: a,
                mode: s,
                isProvisional: c,
            } = this.props;
        if (t || (n && s === Z.WtW.VOICE)) return null;
        let d = a.isManaged(),
            u = null,
            p = !1;
        return (
            c
                ? ((p = !0), (u = R.intl.string(R.t.izMR7o)))
                : v.Z.supports(N.AN.VIDEO)
                  ? l
                      ? ((u = R.intl.string(R.t.PHzjvX)), (p = !0))
                      : n && s === Z.WtW.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (u = d ? R.intl.string(R.t.S0W8Z5) : R.intl.string(R.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (u = d ? R.intl.string(R.t.S0W8Z5) : R.intl.string(R.t.oCqlGG)))
                  : ((p = !0), (e = this.handleBrowserNotSupported), (u = R.intl.string(R.t.UVpg3U))),
            (0, r.jsx)(E.ZP.Icon, {
                icon: o.Odl,
                onClick: e,
                disabled: p || i,
                tooltip: u,
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: l,
                channel: c,
                dismissibleContentTypes: d,
                isProvisional: u,
            } = this.props;
        if (t) return null;
        let p = c.isManaged(),
            h = !1;
        u
            ? ((h = !0), (e = R.intl.string(R.t.izMR7o)))
            : i
              ? ((e = p ? R.intl.string(R.t.LW2Ghr) : R.intl.string(R.t.rF7lN5)), (h = !0))
              : l
                ? ((e = R.intl.string(R.t.PHzjvX)), (h = !0))
                : (e = n
                      ? p
                          ? R.intl.string(R.t.S0W8Z5)
                          : R.intl.string(R.t.fdEeb5)
                      : p
                        ? R.intl.string(R.t.S0W8Z5)
                        : R.intl.string(R.t.focH1t));
        let f = (0, r.jsx)(E.ZP.Icon, {
            ref: this.iconRef,
            icon: o.Csw,
            onClick: this.handleVoiceClick,
            disabled: h,
            tooltip: e,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f,
                (0, r.jsx)(g.ZP, {
                    contentTypes: d,
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
                t ? (0, O.Z)(a, i) : a();
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
                (0, O.Z)(t, e);
            }),
            w(this, "handleBrowserNotSupported", () => {
                (0, y.Z)();
            });
    }
}
function D(e) {
    var t;
    let { channel: n } = e,
        i = (0, m.Z)(),
        s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)),
        o = (0, l.e7)([_.Z], () => _.Z.isInChannel(n.id)),
        c = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: d, callUnavailable: f } = (0, l.cj)([x.Z], () => ({
            callActive: x.Z.isCallActive(n.id),
            callUnavailable: x.Z.isCallUnavailable(n.id),
        })),
        g = n.getRecipientId(),
        { notFriend: y, isBlocked: O } = (0, l.cj)([C.Z], () => ({
            notFriend: n.type === Z.d4z.DM && null != g && !C.Z.isFriend(g),
            isBlocked: n.type === Z.d4z.DM && null != g && C.Z.isBlocked(g),
        })),
        v = (0, l.e7)([I.default], () => I.default.getUser(g)),
        S = (0, b.bp)(),
        E = [],
        P = (0, p.Z)(n.id),
        T = (0, l.e7)([j.Z], () => j.Z.hasLayers());
    return (P && !T && E.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == v ? void 0 : v.bot))
        ? null
        : (0, r.jsx)(A, {
              channel: n,
              mode: s,
              inCall: o,
              callActive: d,
              isProvisional: null != (t = null == v ? void 0 : v.isProvisional) && t,
              callUnavailable: f,
              notFriend: y,
              isBlocked: O,
              appContext: S,
              dismissibleContentTypes: E,
              useReducedMotion: c,
          });
}
