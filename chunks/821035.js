n.d(t, { P: () => x }), n(290780);
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    l = n(168107),
    a = n(480916),
    o = n(247206),
    c = n(656577),
    d = n(294602),
    u = n(880257),
    m = n(63063),
    g = n(838436),
    p = n(526761),
    h = n(726985),
    f = n(981631),
    b = n(388032),
    _ = n(298136);
function x() {
    var e;
    let t = null == (e = (0, u.Z)()) || e,
        { explicitContentGuilds: n, explicitContentFriendDm: x, explicitContentNonFriendDm: E } = (0, d.B)(),
        C = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void l.Z.showAgeVerificationGetStartedModal(a.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.zj)(e);
        },
        j = [
            {
                value: r.Q4.BLUR,
                label: b.intl.string(b.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: b.intl.string(b.t['D/157e'])
            }
        ],
        O = [
            {
                value: r.Q4.BLUR,
                label: b.intl.string(b.t.S49UaW)
            }
        ],
        S = {
            value: r.Q4.SHOW,
            label: b.intl.string(b.t['5k5OFh'])
        };
    return (
        t && (j.unshift(S), O.unshift(S)),
        (0, i.jsxs)(g.U, {
            setting: h.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: p.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, i.jsx)(g.H, {
                    header: b.intl.string(b.t['c/UOwM']),
                    description: b.intl.format(b.t.ZUvrwM, { learnMoreLink: m.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, i.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: b.intl.string(b.t['6k0AgI']),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(s.q4e, {
                        options: j,
                        value: x,
                        onChange: (e) => C({ explicitContentFriendDm: e })
                    })
                }),
                (0, i.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: b.intl.string(b.t.D2EGSk),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(s.q4e, {
                        options: j,
                        value: E,
                        onChange: (e) => C({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, i.jsx)(s.xJW, {
                        tag: s.RB0.H3,
                        title: b.intl.string(b.t['FP+a4+']),
                        titleClassName: _.selectItemTitle,
                        children: (0, i.jsx)(s.q4e, {
                            options: O,
                            value: n,
                            onChange: (e) => C({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
