n.d(t, { Z: () => k }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(26151),
    c = n(287734),
    u = n(40851),
    d = n(607070),
    h = n(451576),
    p = n(358221),
    f = n(266454),
    g = n(243778),
    m = n(590293),
    b = n(970731),
    y = n(560688),
    x = n(173507),
    j = n(523746),
    _ = n(819640),
    O = n(131951),
    v = n(699516),
    C = n(594174),
    E = n(979651),
    S = n(585483),
    I = n(63063),
    Z = n(665149),
    P = n(981631),
    T = n(921944),
    N = n(65154),
    R = n(388032),
    w = n(765476);
function A(e, t, n) {
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
class D extends i.PureComponent {
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
            h = null,
            p = !1;
        return (
            u
                ? ((p = !0), (h = R.intl.string(R.t.izMR7u)), (e = s.ua7.Colors.RED))
                : O.Z.supports(N.AN.VIDEO)
                  ? a
                      ? ((h = R.intl.string(R.t.PHzjvb)), (e = s.ua7.Colors.RED), (p = !0))
                      : i && c === P.WtW.VIDEO
                        ? ((t = this.handleJoinVideoCall),
                          (h = d ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.W68MhI)))
                        : ((t = this.handleStartVideoCall),
                          (h = d ? R.intl.string(R.t.S0W8Z2) : R.intl.string(R.t.oCqlGB)))
                  : ((p = !0), (t = this.handleBrowserNotSupported), (h = R.intl.string(R.t.UVpg3d))),
            (0, r.jsx)(Z.ZP.Icon, {
                icon: s.Odl,
                onClick: t,
                disabled: p || l,
                tooltip: h,
                tooltipColor: e,
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            t,
            {
                inCall: n,
                canShowTooltip: i,
                callActive: l,
                callUnavailable: o,
                isBlocked: c,
                channel: u,
                canShowActivityGdmTooltip: d,
                dismissibleContentTypes: h,
                isProvisional: p,
            } = this.props;
        if (n) return null;
        let f = u.isManaged(),
            m = !1;
        p
            ? ((m = !0), (e = R.intl.string(R.t.izMR7u)), (t = s.ua7.Colors.RED))
            : o
              ? ((e = f ? R.intl.string(R.t.LW2Gho) : R.intl.string(R.t.rF7lNz)), (t = s.ua7.Colors.RED), (m = !0))
              : c
                ? ((e = R.intl.string(R.t.PHzjvb)), (t = s.ua7.Colors.RED), (m = !0))
                : (e = l
                      ? f
                          ? R.intl.string(R.t.S0W8Z2)
                          : R.intl.string(R.t.fdEeb2)
                      : f
                        ? R.intl.string(R.t.S0W8Z2)
                        : R.intl.string(R.t.focH1t));
        let y = (0, r.jsx)(Z.ZP.Icon, {
            ref: this.iconRef,
            icon: s.Csw,
            onClick: this.handleVoiceClick,
            disabled: m,
            tooltip: e,
            tooltipColor: t,
        });
        return (0, r.jsx)(g.ZP, {
            contentTypes: h,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: l } = e;
                return t === a.z.ACTIVITY_GDM_CALL_TOOLTIP
                    ? (0, r.jsx)(s.yRy, {
                          targetElementRef: this.iconRef,
                          position: "bottom",
                          align: "center",
                          animation: s.yRy.Animation.TRANSLATE,
                          shouldShow: i && d && !n,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(b.ZP, {
                                  header: (0, r.jsx)(s.X6q, {
                                      variant: "heading-md/bold",
                                      color: "always-white",
                                      children: R.intl.string(R.t.HOPqzc),
                                  }),
                                  content: (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              color: "always-white",
                                              children: R.intl.string(R.t.xAW71d),
                                          }),
                                          (0, r.jsx)(s.eee, {
                                              href: I.Z.getArticleURL(P.BhN.ACTIVITIES),
                                              children: R.intl.string(R.t.hvVgAQ),
                                          }),
                                      ],
                                  }),
                                  buttonCTA: R.intl.string(R.t["NX+WJC"]),
                                  onClick: () => {
                                      t(), l(T.L.UNKNOWN);
                                  },
                                  className: w.tooltip,
                              });
                          },
                          children: () => y,
                      })
                    : y;
            },
        });
    }
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()],
        });
    }
    constructor(...e) {
        super(...e),
            A(this, "iconRef", i.createRef()),
            A(this, "handleStartCall", (e, t) => {
                let { channel: n, notFriend: r, appContext: i } = this.props,
                    l = r ? n.getRecipientId() : null,
                    a = () => o.Z.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), l);
                t ? (0, x.Z)(a, i) : a();
            }),
            A(this, "handleJoinCall", (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            A(this, "handleVoiceClick", (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: r } = this.props;
                if ((r && (0, f.Q3)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: T.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            A(this, "handleStartVideoCall", (e) => {
                this.handleStartCall(e, !0);
            }),
            A(this, "handleJoinVideoCall", () => {
                let { appContext: e } = this.props,
                    t = () => this.handleJoinCall(!0);
                (0, x.Z)(t, e);
            }),
            A(this, "handleBrowserNotSupported", () => {
                (0, y.Z)();
            });
    }
}
function k(e) {
    var t;
    let { channel: n } = e,
        s = (0, m.Z)(),
        o = (0, l.e7)([p.Z], () => p.Z.getMode(n.id)),
        c = (0, l.e7)([E.Z], () => E.Z.isInChannel(n.id)),
        f = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        { callActive: g, callUnavailable: b } = (0, l.cj)([j.Z], () => ({
            callActive: j.Z.isCallActive(n.id),
            callUnavailable: j.Z.isCallUnavailable(n.id),
        })),
        y = n.getRecipientId(),
        { notFriend: x, isBlocked: O } = (0, l.cj)([v.Z], () => ({
            notFriend: n.type === P.d4z.DM && null != y && !v.Z.isFriend(y),
            isBlocked: n.type === P.d4z.DM && null != y && v.Z.isBlocked(y),
        })),
        S = (0, l.e7)([C.default], () => C.default.getUser(y)),
        I = (0, u.bp)(),
        Z = [],
        T = (0, h.Z)(n.id),
        N = (0, l.e7)([_.Z], () => _.Z.hasLayers());
    T && !N && Z.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [R, w] = i.useState(!1);
    return (i.useEffect(() => {
        let e = setTimeout(() => {
            w(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    s || (null == S ? void 0 : S.bot))
        ? null
        : (0, r.jsx)(D, {
              channel: n,
              mode: o,
              inCall: c,
              callActive: g,
              isProvisional: null != (t = null == S ? void 0 : S.isProvisional) && t,
              callUnavailable: b,
              notFriend: x,
              isBlocked: O,
              appContext: I,
              canShowTooltip: R,
              canShowActivityGdmTooltip: T,
              dismissibleContentTypes: Z,
              useReducedMotion: f,
          });
}
