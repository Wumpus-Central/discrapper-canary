(n.d(t, { Z: () => y }), n(539854));
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    f = n(131704),
    _ = n(592125),
    p = n(594174),
    h = n(823379),
    m = n(358595),
    g = n(981631),
    E = n(388032),
    b = n(273254);
function y(e) {
    let t,
        { invite: n, message: o, currentUserId: y, onTransitionToInviteChannel: O, onAcceptInstantInvite: v } = e,
        I = y === o.author.id,
        T = n.state === g.r2o.ACCEPTING,
        S = (0, s.e7)([_.Z], () => (null != n.channel ? _.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == S || S.isPrivate(), 'must be a private channel');
    let { analyticsLocations: A } = (0, u.ZP)(c.Z.INVITE_EMBED),
        N = null != S,
        C = i.useCallback(() => {
            let e = 'noop';
            (N ? (O(), (e = 'transition')) : (v(), (e = 'accept')),
                (0, l.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: o.author.id,
                        invite_message_id: o.id
                    },
                    A
                ));
        }, [n, o, A, N, O, v]);
    if (null == S) {
        if (null == n.channel) return (0, r.jsx)(m.Z, {});
        ((S = (0, f.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []));
    } else {
        t = S.recipients.reduce((e, t) => {
            let n = p.default.getUser(t);
            return (null != n && e.push(n), e);
        }, []);
        let e = p.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let R = S.name;
    (null == R || '' === R) &&
        (R =
            t.length > 0
                ? t
                      .filter(h.lm)
                      .map((e) => e.username)
                      .join(', ')
                : E.intl.string(E.t.LJpTRE));
    let P = E.intl.string(E.t.XpeFYm),
        w = d.Z.Button.Colors.GREEN;
    N && ((P = E.intl.string(E.t.cEnaW1)), (w = d.Z.Button.Colors.PRIMARY));
    let D = E.intl.string(E.t['3p3/BA']);
    return (
        I && (D = E.intl.string(E.t.qmtuXF)),
        (0, r.jsxs)(d.Z, {
            children: [
                (0, r.jsx)(d.Z.Header, { text: D }),
                (0, r.jsxs)(d.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.headerLine,
                            children: [
                                (0, r.jsx)(d.Z.Icon, {
                                    channel: S,
                                    onClick: N ? C : void 0
                                }),
                                (0, r.jsx)(d.Z.Info, {
                                    title: R,
                                    onClick: N ? C : void 0,
                                    children: (0, r.jsx)(d.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(d.Z.Button, {
                            onClick: C,
                            submitting: T,
                            isDisabled: N,
                            color: w,
                            children: P
                        })
                    ]
                })
            ]
        })
    );
}
