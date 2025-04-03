n.d(t, { Z: () => y }), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
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
        { invite: n, author: a, currentUserId: y, onTransitionToInviteChannel: E, onAcceptInstantInvite: v } = e,
        O = y === a.id,
        N = n.state === _.r2o.ACCEPTING,
        j = (0, o.e7)([m.Z], () => (null != n.channel ? m.Z.getChannel(n.channel.id) : null), [n]);
    l()(null == j || j.isPrivate(), 'must be a private channel');
    let { analyticsLocations: C } = (0, u.ZP)(c.Z.INVITE_EMBED),
        I = null != j,
        S = i.useCallback(() => {
            let e = 'noop';
            I ? (E(), (e = 'transition')) : (v(), (e = 'accept')), (0, s.r$)(n, e, C);
        }, [n, C, I, E, v]);
    if (null == j) {
        if (null == n.channel) return (0, r.jsx)(g.Z, {});
        (j = (0, p.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = j.recipients.reduce((e, t) => {
            let n = f.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = f.default.getCurrentUser();
        I && null != e && t.push(e);
    }
    let T = j.name;
    (null == T || '' === T) &&
        (T =
            t.length > 0
                ? t
                      .filter(h.lm)
                      .map((e) => e.username)
                      .join(', ')
                : b.NW.string(b.t.LJpTRE));
    let P = b.NW.string(b.t.XpeFYm),
        A = d.Z.Button.Colors.GREEN;
    I && ((P = b.NW.string(b.t.cEnaW1)), (A = d.Z.Button.Colors.PRIMARY));
    let w = b.NW.string(b.t['3p3/BA']);
    return (
        O && (w = b.NW.string(b.t.qmtuXF)),
        (0, r.jsxs)(d.Z, {
            children: [
                (0, r.jsx)(d.Z.Header, { text: w }),
                (0, r.jsxs)(d.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.headerLine,
                            children: [
                                (0, r.jsx)(d.Z.Icon, {
                                    channel: j,
                                    onClick: I ? S : void 0
                                }),
                                (0, r.jsx)(d.Z.Info, {
                                    title: T,
                                    onClick: I ? S : void 0,
                                    children: (0, r.jsx)(d.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(d.Z.Button, {
                            onClick: S,
                            submitting: N,
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
