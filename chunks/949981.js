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
    _ = n(131704),
    p = n(592125),
    h = n(594174),
    m = n(823379),
    g = n(358595),
    E = n(981631),
    b = n(388032),
    y = n(739236);
function O(e) {
    let t,
        { invite: n, message: a, currentUserId: O, onTransitionToInviteChannel: v, onAcceptInstantInvite: I } = e,
        T = O === a.author.id,
        S = n.state === E.r2o.ACCEPTING,
        A = (0, l.e7)([p.Z], () => (null != n.channel ? p.Z.getChannel(n.channel.id) : null), [n]);
    o()(null == A || A.isPrivate(), "must be a private channel");
    let { analyticsLocations: C } = (0, d.ZP)(u.Z.INVITE_EMBED),
        N = null != A,
        R = i.useCallback(() => {
            let e = "noop";
            N ? (v(), (e = "transition")) : (I(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                    },
                    C,
                );
        }, [n, a, C, N, v, I]);
    if (null == A) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        (A = (0, _.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = A.recipients.reduce((e, t) => {
            let n = h.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = h.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let P = A.name;
    (null == P || "" === P) &&
        (P =
            t.length > 0
                ? t
                      .filter(m.lm)
                      .map((e) => e.username)
                      .join(", ")
                : b.intl.string(b.t.LJpTRF));
    let D = b.intl.string(b.t.XpeFYr),
        w = "active";
    N && ((D = b.intl.string(b.t.cEnaWx)), (w = "secondary"));
    let L = b.intl.string(b.t["3p3/BK"]);
    return (
        T && (L = b.intl.string(b.t.qmtuXE)),
        (0, r.jsxs)(f.Z, {
            children: [
                (0, r.jsx)(f.Z.Header, { text: L }),
                (0, r.jsxs)(f.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(f.Z.Icon, {
                                    channel: A,
                                    onClick: N ? R : void 0,
                                }),
                                (0, r.jsx)(f.Z.Info, {
                                    title: P,
                                    onClick: N ? R : void 0,
                                    children: (0, r.jsx)(f.Z.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.zxk, {
                            onClick: R,
                            loading: S,
                            disabled: N,
                            variant: w,
                            text: D,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        })
    );
}
