i.d(n, { default: () => k });
var e = i(255367);
i(73800);
var a = i(481060),
    o = i(230711),
    s = i(600164),
    l = i(313201),
    r = i(695346),
    c = i(626135),
    d = i(981631),
    x = i(526761),
    u = i(388032),
    p = i(247481),
    h = i(38880);
function k(t) {
    let { onClose: n, transitionState: i } = t,
        k = (0, l.Dt)();
    function C() {
        (n(), o.Z.open(d.oAB.ACCESSIBILITY, null, { scrollPosition: x.rP.LEGACY_CHAT_INPUT }));
    }
    return (0, e.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-labelledby': k,
        parentComponent: 'LegacyChatInputExplanationModal',
        children: [
            (0, e.jsx)('img', {
                className: p.art,
                src: h,
                alt: ''
            }),
            (0, e.jsx)(a.hzk, {
                children: (0, e.jsxs)(s.Z, {
                    direction: s.Z.Direction.VERTICAL,
                    justify: s.Z.Justify.CENTER,
                    children: [
                        (0, e.jsx)(a.X6q, {
                            id: k,
                            variant: 'heading-lg/semibold',
                            className: p.title,
                            children: u.intl.string(u.t.G9HG5O)
                        }),
                        (0, e.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: p.body,
                            children: u.intl.format(u.t.ZtUieH, {
                                openSettingsHook: (t, n) =>
                                    (0, e.jsx)(
                                        a.eee,
                                        {
                                            onClick: C,
                                            children: t
                                        },
                                        n
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
                            (c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: !1,
                                location: 'LegacyChatInputExplanationModal'
                            }),
                                r.dN.updateSetting(!1),
                                n());
                        },
                        children: u.intl.string(u.t.VdzwlJ)
                    }),
                    (0, e.jsx)(a.zxk, {
                        type: 'button',
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.MEDIUM,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: u.intl.string(u.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
