t.d(a, { default: () => g }), t(47120);
var r = t(200651),
    o = t(192379),
    n = t(442837),
    i = t(481060),
    l = t(881052),
    s = t(607070),
    d = t(745510),
    c = t(600164),
    m = t(781792),
    u = t(430824),
    f = t(645792),
    b = t(981631),
    h = t(388032),
    x = t(539813);
function g(e) {
    let { guildId: a } = e,
        t = (0, n.e7)([u.Z], () => u.Z.getGuild(a)),
        [g, _] = o.useState(null),
        [N, k] = o.useState(''),
        { createMultipleConfettiAt: p } = o.useContext(d.h),
        C = (0, n.e7)([s.Z], () => s.Z.useReducedMotion, []),
        v = async (a) => {
            let { onClose: t, guildId: r } = e;
            a.preventDefault(), _(null);
            try {
                await (0, m.e)(r, { nick: N }), null == t || t();
            } catch (e) {
                _(new l.Hx(e));
            }
        },
        { transitionState: H } = e,
        j = Object.values(u.Z.getGuilds()).filter((e) => e.id !== a && e.hasFeature(b.oNc.HUB)).length > 0,
        S = !C && !j && (null == t ? void 0 : t.hasFeature(b.oNc.HUB)) && (0, f.b)();
    return (
        o.useEffect(() => {
            S && p(window.innerWidth / 2, window.innerHeight / 2);
        }, [p, S]),
        (0, r.jsxs)(i.Y0X, {
            className: x.__invalid_modalRoot,
            transitionState: H,
            'aria-label': h.NW.formatToPlainString(h.t['d+6kzs'], { guildName: null == t ? void 0 : t.name }),
            children: [
                (0, r.jsxs)(i.xBx, {
                    separator: !1,
                    className: x.formHeaderContainer,
                    direction: c.Z.Direction.VERTICAL,
                    children: [
                        (0, r.jsx)('div', { className: x.formImage }),
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: x.formHeader,
                            children: h.NW.format(h.t['d+6kzs'], { guildName: null == t ? void 0 : t.name })
                        }),
                        (0, r.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: x.formSubHeader,
                            children: h.NW.string(h.t.b3L8y8)
                        })
                    ]
                }),
                (0, r.jsxs)('form', {
                    className: x.formContent,
                    onSubmit: v,
                    children: [
                        (0, r.jsx)(i.hzk, {
                            children: (0, r.jsx)(i.xJW, {
                                title: h.NW.string(h.t.ilDlmZ),
                                children: (0, r.jsx)(i.oil, {
                                    placeholder: h.NW.string(h.t.RfWvWF),
                                    onChange: (e) => {
                                        k(e);
                                    },
                                    error: null == g ? void 0 : g.getFirstFieldErrorMessage('name'),
                                    value: N
                                })
                            })
                        }),
                        (0, r.jsx)(i.mzw, {
                            className: x.formFooter,
                            direction: c.Z.Direction.VERTICAL,
                            children: (0, r.jsx)(i.zxk, {
                                type: 'submit',
                                size: i.zxk.Sizes.LARGE,
                                color: i.zxk.Colors.BRAND,
                                children: h.NW.string(h.t.Np4yXV)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
