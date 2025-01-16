n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
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
    C = n(970731),
    x = n(560688),
    v = n(173507),
    _ = n(523746),
    I = n(819640),
    E = n(131951),
    b = n(699516),
    Z = n(594174),
    N = n(979651),
    S = n(585483),
    T = n(63063),
    j = n(665149),
    A = n(981631),
    y = n(921944),
    P = n(65154),
    M = n(388032),
    R = n(93677);
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
        S.S.subscribe(A.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        S.S.unsubscribe(A.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e, t;
        let { inCall: n, callActive: l, callUnavailable: r, isBlocked: a, channel: o, mode: c, isProvisional: d } = this.props;
        if (n || (l && c === A.WtW.VOICE)) return null;
        let u = o.isManaged(),
            h = null,
            p = !1;
        return (
            d ? ((p = !0), (h = M.intl.string(M.t.MfZlcX)), (e = s.Tooltip.Colors.RED)) : E.Z.supports(P.AN.VIDEO) ? (a ? ((h = M.intl.string(M.t.PHzjvb)), (e = s.Tooltip.Colors.RED), (p = !0)) : l && c === A.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (h = u ? M.intl.string(M.t.S0W8Z2) : M.intl.string(M.t.W68MhI))) : ((t = this.handleStartVideoCall), (h = u ? M.intl.string(M.t.S0W8Z2) : M.intl.string(M.t.oCqlGB)))) : ((p = !0), (t = this.handleBrowserNotSupported), (h = M.intl.string(M.t.UVpg3d))),
            (0, i.jsx)(j.ZP.Icon, {
                icon: s.VideoIcon,
                onClick: t,
                disabled: p || r,
                tooltip: h,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e, t;
        let { inCall: n, canShowTooltip: l, callActive: r, callUnavailable: o, isBlocked: c, channel: d, canShowActivityGdmTooltip: u, dismissibleContentTypes: h, isProvisional: p } = this.props;
        if (n) return null;
        let m = d.isManaged(),
            g = !1;
        p ? ((g = !0), (e = M.intl.string(M.t.MfZlcX)), (t = s.Tooltip.Colors.RED)) : o ? ((e = m ? M.intl.string(M.t.LW2Gho) : M.intl.string(M.t.rF7lNz)), (t = s.Tooltip.Colors.RED), (g = !0)) : c ? ((e = M.intl.string(M.t.PHzjvb)), (t = s.Tooltip.Colors.RED), (g = !0)) : (e = r ? (m ? M.intl.string(M.t.S0W8Z2) : M.intl.string(M.t.fdEeb2)) : m ? M.intl.string(M.t.S0W8Z2) : M.intl.string(M.t.focH1t));
        let x = (0, i.jsx)(j.ZP.Icon, {
            icon: s.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: g,
            tooltip: e,
            tooltipColor: t
        });
        return (0, i.jsx)(f.ZP, {
            contentTypes: h,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: r } = e;
                if (t === a.z.ACTIVITY_GDM_CALL_TOOLTIP)
                    return (0, i.jsx)(s.Popout, {
                        position: 'bottom',
                        align: 'center',
                        animation: s.Popout.Animation.TRANSLATE,
                        shouldShow: l && u && !n,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(C.ZP, {
                                header: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/bold',
                                    color: 'always-white',
                                    children: M.intl.string(M.t.HOPqzc)
                                }),
                                content: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'always-white',
                                            children: M.intl.string(M.t.xAW71d)
                                        }),
                                        (0, i.jsx)(s.Anchor, {
                                            href: T.Z.getArticleURL(A.BhN.ACTIVITIES),
                                            children: M.intl.string(M.t.hvVgAQ)
                                        })
                                    ]
                                }),
                                buttonCTA: M.intl.string(M.t['NX+WJC']),
                                onClick: () => {
                                    t(), r(y.L.UNKNOWN);
                                },
                                className: R.tooltip
                            });
                        },
                        children: () => x
                    });
                return x;
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
                    r = i ? n.getRecipientId() : null,
                    a = () => o.Z.call(n.id, t, !i && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), r);
                t ? (0, v.Z)(a, l) : a();
            }),
            L(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            L(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: i } = this.props;
                if ((i && (0, m.EW)(a.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: y.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            L(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            L(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, v.Z)(() => this.handleJoinCall(!0), e);
            }),
            L(this, 'handleBrowserNotSupported', () => {
                (0, x.Z)();
            });
    }
}
function O(e) {
    var t;
    let { channel: n } = e,
        s = (0, g.Z)(),
        o = (0, r.e7)([p.Z], () => p.Z.getMode(n.id)),
        c = (0, r.e7)([N.Z], () => N.Z.isInChannel(n.id)),
        m = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
        { callActive: f, callUnavailable: C } = (0, r.cj)([_.Z], () => ({
            callActive: _.Z.isCallActive(n.id),
            callUnavailable: _.Z.isCallUnavailable(n.id)
        })),
        x = n.getRecipientId(),
        { notFriend: v, isBlocked: E } = (0, r.cj)([b.Z], () => ({
            notFriend: n.type === A.d4z.DM && null != x && !b.Z.isFriend(x),
            isBlocked: n.type === A.d4z.DM && null != x && b.Z.isBlocked(x)
        })),
        S = (0, r.e7)([Z.default], () => Z.default.getUser(x)),
        T = (0, d.bp)(),
        j = [],
        y = (0, h.Z)(n.id),
        P = (0, r.e7)([I.Z], () => I.Z.hasLayers());
    y && !P && j.push(a.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [M, R] = l.useState(!1);
    return (l.useEffect(() => {
        let e = setTimeout(() => {
            R(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    s || (null == S ? void 0 : S.bot))
        ? null
        : (0, i.jsx)(k, {
              channel: n,
              mode: o,
              inCall: c,
              callActive: f,
              isProvisional: null !== (t = null == S ? void 0 : S.isProvisional) && void 0 !== t && t,
              callUnavailable: C,
              notFriend: v,
              isBlocked: E,
              appContext: T,
              canShowTooltip: M,
              canShowActivityGdmTooltip: y,
              dismissibleContentTypes: j,
              useReducedMotion: m
          });
}
