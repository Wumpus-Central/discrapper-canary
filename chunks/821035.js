n.d(t, { P: () => p }), n(733860);
var i = n(200651);
n(192379);
var s = n(524437),
    r = n(481060),
    l = n(704454),
    a = n(247206),
    o = n(294602),
    c = n(880257),
    d = n(63063),
    u = n(838436),
    m = n(526761),
    g = n(726985),
    h = n(981631),
    x = n(388032),
    _ = n(834040);
function p() {
    var e;
    let t = null === (e = (0, c.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: p, explicitContentNonFriendDm: E } = (0, o.B)(),
        C = (e) => {
            !(0, l.G7)('explicit_media_redaction_settings') && (0, a.zj)(e);
        },
        f = [
            {
                value: s.Q4.BLUR,
                label: x.intl.string(x.t.S49UaW)
            },
            {
                value: s.Q4.BLOCK,
                label: x.intl.string(x.t['D/157e'])
            }
        ],
        T = [
            {
                value: s.Q4.BLUR,
                label: x.intl.string(x.t.S49UaW)
            }
        ],
        N = {
            value: s.Q4.SHOW,
            label: x.intl.string(x.t['5k5OFh'])
        };
    return (
        t && (f.unshift(N), T.unshift(N)),
        (0, i.jsxs)(u.U, {
            setting: g.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: m.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, i.jsx)(u.H, {
                    header: x.intl.string(x.t['c/UOwM']),
                    description: x.intl.format(x.t.ZUvrwM, { learnMoreLink: d.Z.getArticleURL(h.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, i.jsx)(r.xJW, {
                    tag: r.RB0.H3,
                    title: x.intl.string(x.t['6k0AgI']),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(r.q4e, {
                        options: f,
                        value: p,
                        onChange: (e) => C({ explicitContentFriendDm: e })
                    })
                }),
                (0, i.jsx)(r.xJW, {
                    tag: r.RB0.H3,
                    title: x.intl.string(x.t.D2EGSk),
                    titleClassName: _.selectItemTitle,
                    children: (0, i.jsx)(r.q4e, {
                        options: f,
                        value: E,
                        onChange: (e) => C({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, i.jsx)(r.xJW, {
                        tag: r.RB0.H3,
                        title: x.intl.string(x.t['FP+a4+']),
                        titleClassName: _.selectItemTitle,
                        children: (0, i.jsx)(r.q4e, {
                            options: T,
                            value: n,
                            onChange: (e) => C({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
