n.d(t, { P: () => b }), n(733860);
var r = n(200651);
n(192379);
var i = n(524437),
    s = n(481060),
    a = n(704454),
    l = n(247206),
    o = n(294602),
    c = n(880257),
    d = n(63063),
    u = n(838436),
    m = n(526761),
    g = n(726985),
    p = n(981631),
    h = n(388032),
    f = n(833344);
function b() {
    var e;
    let t = null === (e = (0, c.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: b, explicitContentNonFriendDm: N } = (0, o.B)(),
        x = (e) => {
            !(0, a.G7)('explicit_media_redaction_settings') && (0, l.zj)(e);
        },
        _ = [
            {
                value: i.Q4.BLUR,
                label: h.NW.string(h.t.S49UaW)
            },
            {
                value: i.Q4.BLOCK,
                label: h.NW.string(h.t['D/157e'])
            }
        ],
        E = [
            {
                value: i.Q4.BLUR,
                label: h.NW.string(h.t.S49UaW)
            }
        ],
        j = {
            value: i.Q4.SHOW,
            label: h.NW.string(h.t['5k5OFh'])
        };
    return (
        t && (_.unshift(j), E.unshift(j)),
        (0, r.jsxs)(u.U, {
            setting: g.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: m.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, r.jsx)(u.H, {
                    header: h.NW.string(h.t['c/UOwM']),
                    description: h.NW.format(h.t.ZUvrwM, { learnMoreLink: d.Z.getArticleURL(p.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, r.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: h.NW.string(h.t['6k0AgI']),
                    titleClassName: f.selectItemTitle,
                    children: (0, r.jsx)(s.q4e, {
                        options: _,
                        value: b,
                        onChange: (e) => x({ explicitContentFriendDm: e })
                    })
                }),
                (0, r.jsx)(s.xJW, {
                    tag: s.RB0.H3,
                    title: h.NW.string(h.t.D2EGSk),
                    titleClassName: f.selectItemTitle,
                    children: (0, r.jsx)(s.q4e, {
                        options: _,
                        value: N,
                        onChange: (e) => x({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, r.jsx)(s.xJW, {
                        tag: s.RB0.H3,
                        title: h.NW.string(h.t['FP+a4+']),
                        titleClassName: f.selectItemTitle,
                        children: (0, r.jsx)(s.q4e, {
                            options: E,
                            value: n,
                            onChange: (e) => x({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
