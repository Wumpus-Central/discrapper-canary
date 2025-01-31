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
    h = n(981631),
    _ = n(388032),
    p = n(658412);
function g(e) {
    let t,
        { invite: n, author: l, currentUserId: g, onTransitionToInviteChannel: f, onAcceptInstantInvite: x } = e,
        E = g === l.id,
        C = n.state === h.r2o.ACCEPTING,
        v = (0, r.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == v || v.isPrivate(), 'must be a private channel');
    let I = null != v;
    if (null == v) {
        if (null == n.channel) return (0, i.jsx)(m.Z, {});
        (v = (0, o.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = v.recipients.reduce((e, t) => {
            let n = d.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = d.default.getCurrentUser();
        I && null != e && t.push(e);
    }
    let N = v.name;
    (null == N || '' === N) &&
        (N =
            t.length > 0
                ? t
                      .filter(u.lm)
                      .map((e) => e.username)
                      .join(', ')
                : _.intl.string(_.t.LJpTRE));
    let S = I ? f : x,
        T = _.intl.string(_.t.XpeFYm),
        b = s.Z.Button.Colors.GREEN;
    I && ((T = _.intl.string(_.t.cEnaW1)), (b = s.Z.Button.Colors.PRIMARY));
    let A = _.intl.string(_.t['3p3/BA']);
    return (
        E && (A = _.intl.string(_.t.qmtuXF)),
        (0, i.jsxs)(s.Z, {
            children: [
                (0, i.jsx)(s.Z.Header, { text: A }),
                (0, i.jsxs)(s.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.headerLine,
                            children: [
                                (0, i.jsx)(s.Z.Icon, {
                                    channel: v,
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
                            submitting: C,
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
