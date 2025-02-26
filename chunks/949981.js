n.d(t, { Z: () => y }), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(442837),
    s = n(447543),
    c = n(100527),
    d = n(906732),
    u = n(955415),
    p = n(131704),
    m = n(592125),
    f = n(594174),
    h = n(823379),
    g = n(358595),
    _ = n(981631),
    b = n(388032),
    v = n(217480);
function y(e) {
    let t,
        { invite: n, author: a, currentUserId: y, onTransitionToInviteChannel: x, onAcceptInstantInvite: E } = e,
        O = y === a.id,
        j = n.state === _.r2o.ACCEPTING,
        N = (0, l.e7)([m.Z], () => (null != n.channel ? m.Z.getChannel(n.channel.id) : null), [n]);
    o()(null == N || N.isPrivate(), 'must be a private channel');
    let { analyticsLocations: C } = (0, d.ZP)(c.Z.INVITE_EMBED),
        I = null != N,
        S = i.useCallback(() => {
            let e = 'noop';
            I ? (x(), (e = 'transition')) : (E(), (e = 'accept')), (0, s.r$)(n, e, C);
        }, [n, C, I, x, E]);
    if (null == N) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        (N = (0, p.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = N.recipients.reduce((e, t) => {
            let n = f.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = f.default.getCurrentUser();
        I && null != e && t.push(e);
    }
    let P = N.name;
    (null == P || '' === P) &&
        (P =
            t.length > 0
                ? t
                      .filter(h.lm)
                      .map((e) => e.username)
                      .join(', ')
                : b.NW.string(b.t.LJpTRE));
    let T = b.NW.string(b.t.XpeFYm),
        A = u.Z.Button.Colors.GREEN;
    I && ((T = b.NW.string(b.t.cEnaW1)), (A = u.Z.Button.Colors.PRIMARY));
    let w = b.NW.string(b.t['3p3/BA']);
    return (
        O && (w = b.NW.string(b.t.qmtuXF)),
        (0, r.jsxs)(u.Z, {
            children: [
                (0, r.jsx)(u.Z.Header, { text: w }),
                (0, r.jsxs)(u.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.headerLine,
                            children: [
                                (0, r.jsx)(u.Z.Icon, {
                                    channel: N,
                                    onClick: I ? S : void 0
                                }),
                                (0, r.jsx)(u.Z.Info, {
                                    title: P,
                                    onClick: I ? S : void 0,
                                    children: (0, r.jsx)(u.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.Z.Button, {
                            onClick: S,
                            submitting: j,
                            isDisabled: I,
                            color: A,
                            children: T
                        })
                    ]
                })
            ]
        })
    );
}
