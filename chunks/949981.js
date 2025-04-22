n.d(t, { Z: () => y }), n(539854);
var r = n(200651),
    i = n(192379),
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
    h = n(823379),
    g = n(358595),
    _ = n(981631),
    b = n(388032),
    x = n(273254);
function y(e) {
    let t,
        { invite: n, message: l, currentUserId: y, onTransitionToInviteChannel: E, onAcceptInstantInvite: v } = e,
        O = y === l.author.id,
        j = n.state === _.r2o.ACCEPTING,
        C = (0, o.e7)([m.Z], () => (null != n.channel ? m.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == C || C.isPrivate(), 'must be a private channel');
    let { analyticsLocations: S } = (0, u.ZP)(c.Z.INVITE_EMBED),
        I = null != C,
        N = i.useCallback(() => {
            let e = 'noop';
            I ? (E(), (e = 'transition')) : (v(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id
                    },
                    S
                );
        }, [n, l, S, I, E, v]);
    if (null == C) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        (C = (0, p.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = C.recipients.reduce((e, t) => {
            let n = f.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = f.default.getCurrentUser();
        I && null != e && t.push(e);
    }
    let T = C.name;
    (null == T || '' === T) &&
        (T =
            t.length > 0
                ? t
                      .filter(h.lm)
                      .map((e) => e.username)
                      .join(', ')
                : b.intl.string(b.t.LJpTRE));
    let P = b.intl.string(b.t.XpeFYm),
        A = d.Z.Button.Colors.GREEN;
    I && ((P = b.intl.string(b.t.cEnaW1)), (A = d.Z.Button.Colors.PRIMARY));
    let w = b.intl.string(b.t['3p3/BA']);
    return (
        O && (w = b.intl.string(b.t.qmtuXF)),
        (0, r.jsxs)(d.Z, {
            children: [
                (0, r.jsx)(d.Z.Header, { text: w }),
                (0, r.jsxs)(d.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.headerLine,
                            children: [
                                (0, r.jsx)(d.Z.Icon, {
                                    channel: C,
                                    onClick: I ? N : void 0
                                }),
                                (0, r.jsx)(d.Z.Info, {
                                    title: T,
                                    onClick: I ? N : void 0,
                                    children: (0, r.jsx)(d.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(d.Z.Button, {
                            onClick: N,
                            submitting: j,
                            isDisabled: I,
                            color: A,
                            children: P
                        })
                    ]
                })
            ]
        })
    );
}
