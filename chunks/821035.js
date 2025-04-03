n.d(t, { P: () => N }), n(733860);
var r = n(200651);
n(192379);
var i = n(524437),
    s = n(481060),
    a = n(168107),
    l = n(480916),
    o = n(247206),
    c = n(294602),
    d = n(880257),
    u = n(63063),
    m = n(838436),
    g = n(526761),
    p = n(726985),
    h = n(981631),
    f = n(388032),
    b = n(298136);
function N() {
    var e;
    let t = null == (e = (0, d.Z)()) || e,
        { explicitContentGuilds: n, explicitContentFriendDm: N, explicitContentNonFriendDm: x } = (0, c.B)(),
        _ = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(i.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal(l.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, o.zj)(e);
        },
        E = [
            {
                value: i.Q4.BLUR,
                label: f.NW.string(f.t.S49UaW)
            },
            {
                value: i.Q4.BLOCK,
                label: f.NW.string(f.t['D/157e'])
            }
        ],
        j = [
            {
                value: i.Q4.BLUR,
                label: f.NW.string(f.t.S49UaW)
            }
        ],
        O = {
            value: i.Q4.SHOW,
            label: f.NW.string(f.t['5k5OFh'])
        };
    return (
        t && (E.unshift(O), j.unshift(O)),
        (0, r.jsxs)(m.U, {
            setting: p.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: g.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, r.jsx)(m.H, {
                    header: f.NW.string(f.t['c/UOwM']),
                    description: f.NW.format(f.t.ZUvrwM, { learnMoreLink: u.Z.getArticleURL(h.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, r.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: f.NW.string(f.t['6k0AgI']),
                    titleClassName: b.selectItemTitle,
                    children: (0, r.jsx)(s.q4e, {
                        options: E,
                        value: N,
                        onChange: (e) => _({ explicitContentFriendDm: e })
                    })
                }),
                (0, r.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: f.NW.string(f.t.D2EGSk),
                    titleClassName: b.selectItemTitle,
                    children: (0, r.jsx)(s.q4e, {
                        options: E,
                        value: x,
                        onChange: (e) => _({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, r.jsx)(s.xJW, {
                        tag: s.RB0.H3,
                        title: f.NW.string(f.t['FP+a4+']),
                        titleClassName: b.selectItemTitle,
                        children: (0, r.jsx)(s.q4e, {
                            options: j,
                            value: n,
                            onChange: (e) => _({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
