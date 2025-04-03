i.d(e, { default: () => p });
var n = i(200651);
i(192379);
var a = i(481060),
    s = i(230711),
    o = i(600164),
    l = i(313201),
    r = i(695346),
    c = i(626135),
    d = i(981631),
    x = i(526761),
    u = i(388032),
    h = i(247481),
    k = i(38880);
function p(t) {
    let { onClose: e, transitionState: i } = t,
        p = (0, l.Dt)();
    function C() {
        e(), s.Z.open(d.oAB.ACCESSIBILITY, null, { scrollPosition: x.rP.LEGACY_CHAT_INPUT });
    }
    return (0, n.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-labelledby': p,
        children: [
            (0, n.jsx)('img', {
                className: h.art,
                src: k,
                alt: ''
            }),
            (0, n.jsx)(a.hzk, {
                children: (0, n.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    justify: o.Z.Justify.CENTER,
                    children: [
                        (0, n.jsx)(a.X6q, {
                            id: p,
                            variant: 'heading-lg/semibold',
                            className: h.title,
                            children: u.NW.string(u.t.G9HG5O)
                        }),
                        (0, n.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: h.body,
                            children: u.NW.format(u.t.ZtUieH, {
                                openSettingsHook: (t, e) =>
                                    (0, n.jsx)(
                                        a.eee,
                                        {
                                            onClick: C,
                                            children: t
                                        },
                                        e
                                    )
                            })
                        })
                    ]
                })
            }),
            (0, n.jsxs)(a.mzw, {
                children: [
                    (0, n.jsx)(a.zxk, {
                        type: 'button',
                        onClick: function () {
                            c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: !1,
                                location: 'LegacyChatInputExplanationModal'
                            }),
                                r.dN.updateSetting(!1),
                                e();
                        },
                        children: u.NW.string(u.t.VdzwlJ)
                    }),
                    (0, n.jsx)(a.zxk, {
                        type: 'button',
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.MEDIUM,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: e,
                        children: u.NW.string(u.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
