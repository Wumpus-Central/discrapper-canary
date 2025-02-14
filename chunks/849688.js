n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(442837),
    d = n(547280),
    c = n(678513),
    u = n(981631),
    h = n(388032),
    m = n(940841);
let p = function (e) {
    let { guild: t } = e,
        r = (0, o.e7)([c.Z], () => c.Z.getActiveGuildSignUp(t.id)),
        p = l.useCallback(() => {
            null != r &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('22862'), n.e('79587')]).then(n.bind(n, 646202));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            target: r,
                            guildId: t.id
                        });
                });
        }, [r, t.id]),
        g = l.useCallback(() => {
            null != r && (0, d.b)(r.key, r.dismissibleContent);
        }, [r]);
    if (null == r) return null;
    let _ = 'url('.concat(r.backgroundAssetUrl, ') black top / cover no-repeat');
    return (0, i.jsx)(s.f6W, {
        theme: u.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: a()(m.container, e),
                children: (0, i.jsxs)('div', {
                    className: m.card,
                    style: { background: _ },
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.eyebrow,
                            children: [
                                (0, i.jsx)(s._XJ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'none',
                                    children: h.intl.string(h.t.hhKpxs)
                                })
                            ]
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-sm/medium',
                            children: r.noticeHeader
                        }),
                        (0, i.jsx)(s.zxk, {
                            className: m.button,
                            color: 'none',
                            onClick: p,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'none',
                                children: h.intl.string(h.t.vv0Nsb)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: m.dismiss,
                            children: (0, i.jsx)(s.P3F, {
                                onClick: g,
                                'aria-label': h.intl.string(h.t.cpT0Cg),
                                children: (0, i.jsx)(s.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                })
            })
    });
};
