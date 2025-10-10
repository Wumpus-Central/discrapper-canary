n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
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
    _ = n(173507),
    j = n(523746),
    x = n(819640),
    O = n(131951),
    v = n(699516),
    C = n(594174),
    I = n(979651),
    E = n(585483),
    S = n(665149),
    Z = n(981631),
    T = n(701488),
    P = n(921944),
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
        E.S.subscribe(Z.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        E.S.unsubscribe(Z.CkL.CALL_START, this.handleVoiceClick);
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
                ? ((h = !0), (p = R.intl.string(R.t.izMR7u)), (e = o.ua7.Colors.RED))
                : O.Z.supports(N.AN.VIDEO)
                  ? a
                      ? ((p = R.intl.string(R.t.PHzjvb)), (e = o.ua7.Colors.RED), (h = !0))
                      : i && c === Z.WtW.VIDEO
                        ? ((t = this.handleJoinVideoCall),
                          (p = u ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.W68MhI)))
                        : ((t = this.handleStartVideoCall),
                          (p = u ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.oCqlGB)))
                  : ((h = !0), (t = this.handleBrowserNotSupported), (p = R.intl.string(R.t.UVpg3d))),
            (0, r.jsx)(S.ZP.Icon, {
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
            ? ((f = !0), (e = R.intl.string(R.t.izMR7u)), (t = o.ua7.Colors.RED))
            : l
              ? ((e = h ? R.intl.string(R.t.LW2Gho) : R.intl.string(R.t.rF7lNz)), (t = o.ua7.Colors.RED), (f = !0))
              : c
                ? ((e = R.intl.string(R.t.PHzjvb)), (t = o.ua7.Colors.RED), (f = !0))
                : (e = i
                      ? h
                          ? R.intl.string(R.t.S0W8Z2)
                          : R.intl.string(R.t.fdEeb2)
                      : h
                        ? R.intl.string(R.t.S0W8Z2)
                        : R.intl.string(R.t.focH1t));
        let m = (0, r.jsx)(S.ZP.Icon, {
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
                                  title: R.intl.string(R.t.HOPqzc),
                                  body: R.intl.format(R.t.xAW71d, { helpdeskUrl: T.sI }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(P.L.USER_DISMISS),
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
                d.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            w(this, "handleVoiceClick", (e) => {
                let { callUnavailable: t, callActive: n, dismissibleContentTypes: r } = this.props;
                if (
                    (r.includes(a.z.ACTIVITY_GDM_CALL_TOOLTIP) &&
                        (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: P.L.AUTO }),
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
function D(e) {
    var t;
    let { channel: n } = e,
        i = (0, m.Z)(),
        s = (0, l.e7)([h.Z], () => h.Z.getMode(n.id)),
        o = (0, l.e7)([I.Z], () => I.Z.isInChannel(n.id)),
        c = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: d, callUnavailable: f } = (0, l.cj)([j.Z], () => ({
            callActive: j.Z.isCallActive(n.id),
            callUnavailable: j.Z.isCallUnavailable(n.id),
        })),
        g = n.getRecipientId(),
        { notFriend: y, isBlocked: _ } = (0, l.cj)([v.Z], () => ({
            notFriend: n.type === Z.d4z.DM && null != g && !v.Z.isFriend(g),
            isBlocked: n.type === Z.d4z.DM && null != g && v.Z.isBlocked(g),
        })),
        O = (0, l.e7)([C.default], () => C.default.getUser(g)),
        E = (0, b.bp)(),
        S = [],
        T = (0, p.Z)(n.id),
        P = (0, l.e7)([x.Z], () => x.Z.hasLayers());
    return (T && !P && S.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP), i || (null == O ? void 0 : O.bot))
        ? null
        : (0, r.jsx)(A, {
              channel: n,
              mode: s,
              inCall: o,
              callActive: d,
              isProvisional: null != (t = null == O ? void 0 : O.isProvisional) && t,
              callUnavailable: f,
              notFriend: y,
              isBlocked: _,
              appContext: E,
              dismissibleContentTypes: S,
              useReducedMotion: c,
          });
}
