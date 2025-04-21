n.d(t, { P: () => _ }), n(290780);
var i = n(200651);
n(192379);
var r = n(524437),
    s = n(481060),
    l = n(168107),
    a = n(480916),
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
function _() {
    var e;
    let t = null == (e = (0, d.Z)()) || e,
        { explicitContentGuilds: n, explicitContentFriendDm: _, explicitContentNonFriendDm: x } = (0, c.B)(),
        E = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void l.Z.showAgeVerificationGetStartedModal(a.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, o.zj)(e);
        },
        j = [
            {
                value: r.Q4.BLUR,
                label: f.intl.string(f.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: f.intl.string(f.t['D/157e'])
            }
        ],
        C = [
            {
                value: r.Q4.BLUR,
                label: f.intl.string(f.t.S49UaW)
            }
        ],
        O = {
            value: r.Q4.SHOW,
            label: f.intl.string(f.t['5k5OFh'])
        };
    return (
        t && (j.unshift(O), C.unshift(O)),
        (0, i.jsxs)(m.U, {
            setting: p.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: g.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, i.jsx)(m.H, {
                    header: f.intl.string(f.t['c/UOwM']),
                    description: f.intl.format(f.t.ZUvrwM, { learnMoreLink: u.Z.getArticleURL(h.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, i.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: f.intl.string(f.t['6k0AgI']),
                    titleClassName: b.selectItemTitle,
                    children: (0, i.jsx)(s.q4e, {
                        options: j,
                        value: _,
                        onChange: (e) => E({ explicitContentFriendDm: e })
                    })
                }),
                (0, i.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: f.intl.string(f.t.D2EGSk),
                    titleClassName: b.selectItemTitle,
                    children: (0, i.jsx)(s.q4e, {
                        options: j,
                        value: x,
                        onChange: (e) => E({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, i.jsx)(s.xJW, {
                        tag: s.RB0.H3,
                        title: f.intl.string(f.t['FP+a4+']),
                        titleClassName: b.selectItemTitle,
                        children: (0, i.jsx)(s.q4e, {
                            options: C,
                            value: n,
                            onChange: (e) => E({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
