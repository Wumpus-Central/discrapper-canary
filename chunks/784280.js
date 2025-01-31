a.d(t, { default: () => g }), a(47120);
var n = a(200651),
    r = a(192379),
    o = a(442837),
    i = a(481060),
    l = a(881052),
    s = a(607070),
    d = a(745510),
    c = a(600164),
    m = a(781792),
    u = a(430824),
    f = a(645792),
    b = a(981631),
    h = a(388032),
    x = a(850961);
function g(e) {
    let { guildId: t } = e,
        a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        [g, _] = r.useState(null),
        [k, p] = r.useState(''),
        { createMultipleConfettiAt: C } = r.useContext(d.h),
        v = (0, o.e7)([s.Z], () => s.Z.useReducedMotion, []),
        H = async (t) => {
            let { onClose: a, guildId: n } = e;
            t.preventDefault(), _(null);
            try {
                await (0, m.e)(n, { nick: k }), null == a || a();
            } catch (e) {
                _(new l.Hx(e));
            }
        },
        { transitionState: N } = e,
        j = Object.values(u.Z.getGuilds()).filter((e) => e.id !== t && e.hasFeature(b.oNc.HUB)).length > 0,
        S = !v && !j && (null == a ? void 0 : a.hasFeature(b.oNc.HUB)) && (0, f.b)();
    return (
        r.useEffect(() => {
            S && C(window.innerWidth / 2, window.innerHeight / 2);
        }, [C, S]),
        (0, n.jsxs)(i.Y0X, {
            className: x.__invalid_modalRoot,
            transitionState: N,
            'aria-label': h.intl.formatToPlainString(h.t['d+6kzs'], { guildName: null == a ? void 0 : a.name }),
            children: [
                (0, n.jsxs)(i.xBx, {
                    separator: !1,
                    className: x.formHeaderContainer,
                    direction: c.Z.Direction.VERTICAL,
                    children: [
                        (0, n.jsx)('div', { className: x.formImage }),
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: x.formHeader,
                            children: h.intl.format(h.t['d+6kzs'], { guildName: null == a ? void 0 : a.name })
                        }),
                        (0, n.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: x.formSubHeader,
                            children: h.intl.string(h.t.b3L8y8)
                        })
                    ]
                }),
                (0, n.jsxs)('form', {
                    className: x.formContent,
                    onSubmit: H,
                    children: [
                        (0, n.jsx)(i.hzk, {
                            children: (0, n.jsx)(i.xJW, {
                                title: h.intl.string(h.t.ilDlmZ),
                                children: (0, n.jsx)(i.oil, {
                                    placeholder: h.intl.string(h.t.RfWvWF),
                                    onChange: (e) => {
                                        p(e);
                                    },
                                    error: null == g ? void 0 : g.getFirstFieldErrorMessage('name'),
                                    value: k
                                })
                            })
                        }),
                        (0, n.jsx)(i.mzw, {
                            className: x.formFooter,
                            direction: c.Z.Direction.VERTICAL,
                            children: (0, n.jsx)(i.zxk, {
                                type: 'submit',
                                size: i.zxk.Sizes.LARGE,
                                color: i.zxk.Colors.BRAND,
                                children: h.intl.string(h.t.Np4yXV)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
