n.d(i, { default: () => p });
var e = n(255367);
n(73800);
var a = n(481060),
    s = n(230711),
    l = n(600164),
    o = n(313201),
    r = n(695346),
    c = n(626135),
    d = n(981631),
    x = n(526761),
    u = n(388032),
    h = n(247481),
    k = n(38880);
function p(t) {
    let { onClose: i, transitionState: n } = t,
        p = (0, o.Dt)();
    function C() {
        i(), s.Z.open(d.oAB.ACCESSIBILITY, null, { scrollPosition: x.rP.LEGACY_CHAT_INPUT });
    }
    return (0, e.jsxs)(a.Y0X, {
        transitionState: n,
        'aria-labelledby': p,
        children: [
            (0, e.jsx)('img', {
                className: h.art,
                src: k,
                alt: ''
            }),
            (0, e.jsx)(a.hzk, {
                children: (0, e.jsxs)(l.Z, {
                    direction: l.Z.Direction.VERTICAL,
                    justify: l.Z.Justify.CENTER,
                    children: [
                        (0, e.jsx)(a.X6q, {
                            id: p,
                            variant: 'heading-lg/semibold',
                            className: h.title,
                            children: u.intl.string(u.t.G9HG5O)
                        }),
                        (0, e.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: h.body,
                            children: u.intl.format(u.t.ZtUieH, {
                                openSettingsHook: (t, i) =>
                                    (0, e.jsx)(
                                        a.eee,
                                        {
                                            onClick: C,
                                            children: t
                                        },
                                        i
                                    )
                            })
                        })
                    ]
                })
            }),
            (0, e.jsxs)(a.mzw, {
                children: [
                    (0, e.jsx)(a.zxk, {
                        type: 'button',
                        onClick: function () {
                            c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: !1,
                                location: 'LegacyChatInputExplanationModal'
                            }),
                                r.dN.updateSetting(!1),
                                i();
                        },
                        children: u.intl.string(u.t.VdzwlJ)
                    }),
                    (0, e.jsx)(a.zxk, {
                        type: 'button',
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.MEDIUM,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: u.intl.string(u.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
