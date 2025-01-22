n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(724458),
    n(653041);
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(955415),
    s = n(131704),
    c = n(592125),
    u = n(594174),
    d = n(823379),
    m = n(358595),
    h = n(981631),
    f = n(388032),
    p = n(658412);
function _(e) {
    let t,
        { invite: n, author: r, currentUserId: _, onTransitionToInviteChannel: g, onAcceptInstantInvite: E } = e,
        C = _ === r.id,
        I = n.state === h.r2o.ACCEPTING,
        x = (0, a.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    l()(null == x || x.isPrivate(), 'must be a private channel');
    let N = null != x;
    if (null == x) {
        if (null == n.channel) return (0, i.jsx)(m.Z, {});
        (x = (0, s.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = x.recipients.reduce((e, t) => {
            let n = u.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = u.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let v = x.name;
    (null == v || '' === v) &&
        (v =
            t.length > 0
                ? t
                      .filter(d.lm)
                      .map((e) => e.username)
                      .join(', ')
                : f.intl.string(f.t.LJpTRE));
    let T = N ? g : E,
        S = f.intl.string(f.t.XpeFYm),
        A = o.Z.Button.Colors.GREEN;
    N && ((S = f.intl.string(f.t.cEnaW1)), (A = o.Z.Button.Colors.PRIMARY));
    let b = f.intl.string(f.t['3p3/BA']);
    return (
        C && (b = f.intl.string(f.t.qmtuXF)),
        (0, i.jsxs)(o.Z, {
            children: [
                (0, i.jsx)(o.Z.Header, { text: b }),
                (0, i.jsxs)(o.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.headerLine,
                            children: [
                                (0, i.jsx)(o.Z.Icon, {
                                    channel: x,
                                    onClick: N ? T : void 0
                                }),
                                (0, i.jsx)(o.Z.Info, {
                                    title: v,
                                    onClick: N ? T : void 0,
                                    children: (0, i.jsx)(o.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Z.Button, {
                            onClick: T,
                            submitting: I,
                            isDisabled: N,
                            color: A,
                            children: S
                        })
                    ]
                })
            ]
        })
    );
}
