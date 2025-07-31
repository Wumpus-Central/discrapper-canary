(n.d(t, { Z: () => C }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    p = n(131704),
    m = n(592125),
    f = n(594174),
    _ = n(823379),
    g = n(358595),
    h = n(981631),
    b = n(388032),
    E = n(273254);
function C(e) {
    let t,
        { invite: n, message: l, currentUserId: C, onTransitionToInviteChannel: O, onAcceptInstantInvite: v } = e,
        y = C === l.author.id,
        x = n.state === h.r2o.ACCEPTING,
        I = (0, o.e7)([m.Z], () => (null != n.channel ? m.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == I || I.isPrivate(), 'must be a private channel');
    let { analyticsLocations: j } = (0, u.ZP)(c.Z.INVITE_EMBED),
        S = null != I,
        T = i.useCallback(() => {
            let e = 'noop';
            (S ? (O(), (e = 'transition')) : (v(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id
                    },
                    j
                ));
        }, [n, l, j, S, O, v]);
    if (null == I) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        ((I = (0, p.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []));
    } else {
        t = I.recipients.reduce((e, t) => {
            let n = f.default.getUser(t);
            return (null != n && e.push(n), e);
        }, []);
        let e = f.default.getCurrentUser();
        S && null != e && t.push(e);
    }
    let N = I.name;
    (null == N || '' === N) &&
        (N =
            t.length > 0
                ? t
                      .filter(_.lm)
                      .map((e) => e.username)
                      .join(', ')
                : b.intl.string(b.t.LJpTRE));
    let P = b.intl.string(b.t.XpeFYm),
        A = d.Z.Button.Colors.GREEN;
    S && ((P = b.intl.string(b.t.cEnaW1)), (A = d.Z.Button.Colors.PRIMARY));
    let w = b.intl.string(b.t['3p3/BA']);
    return (
        y && (w = b.intl.string(b.t.qmtuXF)),
        (0, r.jsxs)(d.Z, {
            children: [
                (0, r.jsx)(d.Z.Header, { text: w }),
                (0, r.jsxs)(d.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.headerLine,
                            children: [
                                (0, r.jsx)(d.Z.Icon, {
                                    channel: I,
                                    onClick: S ? T : void 0
                                }),
                                (0, r.jsx)(d.Z.Info, {
                                    title: N,
                                    onClick: S ? T : void 0,
                                    children: (0, r.jsx)(d.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(d.Z.Button, {
                            onClick: T,
                            submitting: x,
                            isDisabled: S,
                            color: A,
                            children: P
                        })
                    ]
                })
            ]
        })
    );
}
