n.d(t, { P: () => x }), n(733860);
var i = n(200651);
n(192379);
var s = n(524437),
    r = n(481060),
    l = n(247206),
    a = n(294602),
    o = n(880257),
    c = n(63063),
    d = n(838436),
    u = n(526761),
    m = n(726985),
    h = n(981631),
    g = n(388032),
    _ = n(835552);
function x() {
    var e;
    let t = null === (e = (0, o.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: x, explicitContentNonFriendDm: p } = (0, a.B)(),
        E = [
            {
                value: s.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW)
            },
            {
                value: s.Q4.BLOCK,
                label: g.intl.string(g.t['D/157e'])
            }
        ],
        C = [
            {
                value: s.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW)
            }
        ],
        f = {
            value: s.Q4.SHOW,
            label: g.intl.string(g.t['5k5OFh'])
        };
    return (
        t && (E.unshift(f), C.unshift(f)),
        (0, i.jsxs)(d.U, {
            setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: u.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, i.jsx)(d.H, {
                    header: g.intl.string(g.t['c/UOwM']),
                    description: g.intl.format(g.t.ZUvrwM, { learnMoreLink: c.Z.getArticleURL(h.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, i.jsx)(r.xJW, {
                    tag: r.RB0.H3,
                    title: g.intl.string(g.t['6k0AgI']),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(r.q4e, {
                        options: E,
                        value: x,
                        onChange: (e) => (0, l.zj)({ explicitContentFriendDm: e })
                    })
                }),
                (0, i.jsx)(r.xJW, {
                    tag: r.RB0.H3,
                    title: g.intl.string(g.t.D2EGSk),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(r.q4e, {
                        options: E,
                        value: p,
                        onChange: (e) => (0, l.zj)({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, i.jsx)(r.xJW, {
                        tag: r.RB0.H3,
                        title: g.intl.string(g.t['FP+a4+']),
                        titleClassName: _.selectItemTitle,
                        children: (0, i.jsx)(r.q4e, {
                            options: C,
                            value: n,
                            onChange: (e) => (0, l.zj)({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
