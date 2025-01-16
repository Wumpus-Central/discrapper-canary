n.d(t, {
    P: function () {
        return x;
    }
}),
    n(733860);
var i = n(200651);
n(192379);
var r = n(524437),
    s = n(481060),
    a = n(247206),
    l = n(294602),
    o = n(880257),
    c = n(63063),
    d = n(838436),
    u = n(526761),
    m = n(726985),
    g = n(981631),
    h = n(388032),
    p = n(835552);
function x() {
    var e;
    let t = null === (e = (0, o.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: x, explicitContentNonFriendDm: f } = (0, l.B)(),
        _ = [
            {
                value: r.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: h.intl.string(h.t['D/157e'])
            }
        ],
        E = [
            {
                value: r.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW)
            }
        ],
        C = {
            value: r.Q4.SHOW,
            label: h.intl.string(h.t['5k5OFh'])
        };
    return (
        t && (_.unshift(C), E.unshift(C)),
        (0, i.jsxs)(d.U, {
            setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: u.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, i.jsx)(d.H, {
                    header: h.intl.string(h.t['c/UOwM']),
                    description: h.intl.format(h.t.ZUvrwM, { learnMoreLink: c.Z.getArticleURL(g.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, i.jsx)(s.FormItem, {
                    tag: s.FormTitleTags.H3,
                    title: h.intl.string(h.t['6k0AgI']),
                    titleClassName: p.selectItemTitle,
                    children: (0, i.jsx)(s.SingleSelect, {
                        options: _,
                        value: x,
                        onChange: (e) => (0, a.zj)({ explicitContentFriendDm: e })
                    })
                }),
                (0, i.jsx)(s.FormItem, {
                    tag: s.FormTitleTags.H3,
                    title: h.intl.string(h.t.D2EGSk),
                    titleClassName: p.selectItemTitle,
                    children: (0, i.jsx)(s.SingleSelect, {
                        options: _,
                        value: f,
                        onChange: (e) => (0, a.zj)({ explicitContentNonFriendDm: e })
                    })
                }),
                t &&
                    (0, i.jsx)(s.FormItem, {
                        tag: s.FormTitleTags.H3,
                        title: h.intl.string(h.t['FP+a4+']),
                        titleClassName: p.selectItemTitle,
                        children: (0, i.jsx)(s.SingleSelect, {
                            options: E,
                            value: n,
                            onChange: (e) => (0, a.zj)({ explicitContentGuilds: e })
                        })
                    })
            ]
        })
    );
}
