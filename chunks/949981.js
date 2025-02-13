n.d(t, { Z: () => g }), n(724458), n(653041);
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(442837),
    s = n(955415),
    o = n(131704),
    c = n(592125),
    d = n(594174),
    u = n(823379),
    m = n(358595),
    _ = n(981631),
    h = n(388032),
    p = n(791686);
function g(e) {
    let t,
        { invite: n, author: l, currentUserId: g, onTransitionToInviteChannel: f, onAcceptInstantInvite: x } = e,
        C = g === l.id,
        v = n.state === _.r2o.ACCEPTING,
        E = (0, r.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == E || E.isPrivate(), 'must be a private channel');
    let I = null != E;
    if (null == E) {
        if (null == n.channel) return (0, i.jsx)(m.Z, {});
        (E = (0, o.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = E.recipients.reduce((e, t) => {
            let n = d.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = d.default.getCurrentUser();
        I && null != e && t.push(e);
    }
    let N = E.name;
    (null == N || '' === N) &&
        (N =
            t.length > 0
                ? t
                      .filter(u.lm)
                      .map((e) => e.username)
                      .join(', ')
                : h.intl.string(h.t.LJpTRE));
    let S = I ? f : x,
        T = h.intl.string(h.t.XpeFYm),
        b = s.Z.Button.Colors.GREEN;
    I && ((T = h.intl.string(h.t.cEnaW1)), (b = s.Z.Button.Colors.PRIMARY));
    let A = h.intl.string(h.t['3p3/BA']);
    return (
        C && (A = h.intl.string(h.t.qmtuXF)),
        (0, i.jsxs)(s.Z, {
            children: [
                (0, i.jsx)(s.Z.Header, { text: A }),
                (0, i.jsxs)(s.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.headerLine,
                            children: [
                                (0, i.jsx)(s.Z.Icon, {
                                    channel: E,
                                    onClick: I ? S : void 0
                                }),
                                (0, i.jsx)(s.Z.Info, {
                                    title: N,
                                    onClick: I ? S : void 0,
                                    children: (0, i.jsx)(s.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Z.Button, {
                            onClick: S,
                            submitting: v,
                            isDisabled: I,
                            color: b,
                            children: T
                        })
                    ]
                })
            ]
        })
    );
}
