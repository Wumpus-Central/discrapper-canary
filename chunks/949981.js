n.d(t, { Z: () => g }), n(653041);
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    l = n(955415),
    s = n(131704),
    c = n(592125),
    d = n(594174),
    u = n(823379),
    p = n(358595),
    m = n(981631),
    f = n(388032),
    h = n(217480);
function g(e) {
    let t,
        { invite: n, author: i, currentUserId: g, onTransitionToInviteChannel: _, onAcceptInstantInvite: b } = e,
        v = g === i.id,
        y = n.state === m.r2o.ACCEPTING,
        x = (0, o.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    a()(null == x || x.isPrivate(), 'must be a private channel');
    let O = null != x;
    if (null == x) {
        if (null == n.channel) return (0, r.jsx)(p.Z, {});
        (x = (0, s.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = x.recipients.reduce((e, t) => {
            let n = d.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = d.default.getCurrentUser();
        O && null != e && t.push(e);
    }
    let E = x.name;
    (null == E || '' === E) &&
        (E =
            t.length > 0
                ? t
                      .filter(u.lm)
                      .map((e) => e.username)
                      .join(', ')
                : f.NW.string(f.t.LJpTRE));
    let j = O ? _ : b,
        N = f.NW.string(f.t.XpeFYm),
        C = l.Z.Button.Colors.GREEN;
    O && ((N = f.NW.string(f.t.cEnaW1)), (C = l.Z.Button.Colors.PRIMARY));
    let I = f.NW.string(f.t['3p3/BA']);
    return (
        v && (I = f.NW.string(f.t.qmtuXF)),
        (0, r.jsxs)(l.Z, {
            children: [
                (0, r.jsx)(l.Z.Header, { text: I }),
                (0, r.jsxs)(l.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.headerLine,
                            children: [
                                (0, r.jsx)(l.Z.Icon, {
                                    channel: x,
                                    onClick: O ? j : void 0
                                }),
                                (0, r.jsx)(l.Z.Info, {
                                    title: E,
                                    onClick: O ? j : void 0,
                                    children: (0, r.jsx)(l.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, r.jsx)(l.Z.Button, {
                            onClick: j,
                            submitting: y,
                            isDisabled: O,
                            color: C,
                            children: N
                        })
                    ]
                })
            ]
        })
    );
}
