a.d(n, { default: () => C });
var e = a(255367);
a(73800);
var i = a(481060),
    r = a(230711),
    s = a(600164),
    o = a(313201),
    l = a(695346),
    c = a(626135),
    d = a(981631),
    x = a(526761),
    p = a(388032),
    u = a(247481),
    h = a(38880);
function C(t) {
    let { onClose: n, transitionState: a } = t,
        C = (0, o.Dt)();
    function b() {
        (n(), r.Z.open(d.oAB.ACCESSIBILITY, null, { scrollPosition: x.rP.LEGACY_CHAT_INPUT }));
    }
    return (0, e.jsxs)(i.Y0X, {
        transitionState: a,
        'aria-labelledby': C,
        parentComponent: 'LegacyChatInputExplanationModal',
        children: [
            (0, e.jsx)('img', {
                className: u.art,
                src: h,
                alt: ''
            }),
            (0, e.jsx)(i.hzk, {
                children: (0, e.jsxs)(s.Z, {
                    direction: s.Z.Direction.VERTICAL,
                    justify: s.Z.Justify.CENTER,
                    children: [
                        (0, e.jsx)(i.X6q, {
                            id: C,
                            variant: 'heading-lg/semibold',
                            className: u.title,
                            children: p.intl.string(p.t.G9HG5O)
                        }),
                        (0, e.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            className: u.body,
                            children: p.intl.format(p.t.ZtUieH, {
                                openSettingsHook: (t, n) =>
                                    (0, e.jsx)(
                                        i.eee,
                                        {
                                            onClick: b,
                                            children: t
                                        },
                                        n
                                    )
                            })
                        })
                    ]
                })
            }),
            (0, e.jsx)(i.mzw, {
                children: (0, e.jsxs)(i.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, e.jsx)(i.zxk, {
                            variant: 'primary',
                            text: p.intl.string(p.t.VdzwlJ),
                            type: 'button',
                            onClick: function () {
                                (c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: !1,
                                    location: 'LegacyChatInputExplanationModal'
                                }),
                                    l.dN.updateSetting(!1),
                                    n());
                            }
                        }),
                        (0, e.jsx)(i.zxk, {
                            variant: 'secondary',
                            text: p.intl.string(p.t.f3Pet7),
                            type: 'button',
                            onClick: n
                        })
                    ]
                })
            })
        ]
    });
}
