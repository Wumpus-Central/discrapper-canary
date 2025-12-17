n.d(t, { Z: () => O }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(447543),
    u = n(100527),
    d = n(906732),
    f = n(955415),
    p = n(131704),
    _ = n(592125),
    m = n(594174),
    h = n(823379),
    g = n(358595),
    E = n(981631),
    b = n(388032),
    y = n(222922);
function O(e) {
    let t,
        { invite: n, message: a, currentUserId: O, onTransitionToInviteChannel: v, onAcceptInstantInvite: S } = e,
        I = O === a.author.id,
        T = n.state === E.r2o.ACCEPTING,
        C = (0, l.e7)([_.Z], () => (null != n.channel ? _.Z.getChannel(n.channel.id) : null), [n]);
    o()(null == C || C.isPrivate(), "must be a private channel");
    let { analyticsLocations: A } = (0, d.ZP)(u.Z.INVITE_EMBED),
        N = null != C,
        P = i.useCallback(() => {
            let e = "noop";
            N ? (v(), (e = "transition")) : (S(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                    },
                    A,
                );
        }, [n, a, A, N, v, S]);
    if (null == C) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        (C = (0, p.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = C.recipients.reduce((e, t) => {
            let n = m.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = m.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let R = C.name;
    (null == R || "" === R) &&
        (R =
            t.length > 0
                ? t
                      .filter(h.lm)
                      .map((e) => e.username)
                      .join(", ")
                : b.intl.string(b.t.LJpTRF));
    let w = b.intl.string(b.t.XpeFYr),
        D = "active";
    N && ((w = b.intl.string(b.t.cEnaWx)), (D = "secondary"));
    let x = b.intl.string(b.t["3p3/BK"]);
    return (
        I && (x = b.intl.string(b.t.qmtuXE)),
        (0, r.jsxs)(f.Z, {
            children: [
                (0, r.jsx)(f.Z.Header, { text: x }),
                (0, r.jsxs)(f.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(f.Z.Icon, {
                                    channel: C,
                                    onClick: N ? P : void 0,
                                }),
                                (0, r.jsx)(f.Z.Info, {
                                    title: R,
                                    onClick: N ? P : void 0,
                                    children: (0, r.jsx)(f.Z.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.zxk, {
                            onClick: P,
                            loading: T,
                            disabled: N,
                            variant: D,
                            text: w,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        })
    );
}
