(a.d(t, { default: () => _ }), a(388685));
var n = a(255367),
    r = a(73800),
    o = a(442837),
    i = a(755721),
    l = a(481060),
    s = a(881052),
    d = a(607070),
    c = a(745510),
    m = a(600164),
    u = a(781792),
    f = a(430824),
    b = a(645792),
    h = a(981631),
    x = a(388032),
    g = a(539813);
function _(e) {
    let { guildId: t } = e,
        a = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        [_, p] = r.useState(null),
        [C, v] = r.useState(''),
        { createMultipleConfettiAt: H } = r.useContext(c.h),
        N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion, []),
        k = async (t) => {
            let { onClose: a, guildId: n } = e;
            (t.preventDefault(), p(null));
            try {
                (await (0, u.e)(n, { nick: C }), null == a || a());
            } catch (e) {
                p(new s.Hx(e));
            }
        },
        { transitionState: j } = e,
        S = f.Z.getGuildsArray().filter((e) => e.id !== t && e.features.has(h.oNc.HUB)).length > 0,
        w = !N && !S && (null == a ? void 0 : a.features.has(h.oNc.HUB)) && (0, b.b)();
    return (
        r.useEffect(() => {
            w && H(window.innerWidth / 2, window.innerHeight / 2);
        }, [H, w]),
        (0, n.jsxs)(l.Y0X, {
            className: g.__invalid_modalRoot,
            transitionState: j,
            'aria-label': x.intl.formatToPlainString(x.t['d+6kzs'], { guildName: null == a ? void 0 : a.name }),
            parentComponent: 'HubRealNameModal',
            children: [
                (0, n.jsxs)(l.xBx, {
                    separator: !1,
                    className: g.formHeaderContainer,
                    direction: m.Z.Direction.VERTICAL,
                    children: [
                        (0, n.jsx)('div', { className: g.formImage }),
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            className: g.formHeader,
                            children: x.intl.format(x.t['d+6kzs'], { guildName: null == a ? void 0 : a.name })
                        }),
                        (0, n.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: g.formSubHeader,
                            children: x.intl.string(x.t.b3L8y8)
                        })
                    ]
                }),
                (0, n.jsxs)('form', {
                    className: g.formContent,
                    onSubmit: k,
                    children: [
                        (0, n.jsx)(l.hzk, {
                            children: (0, n.jsx)(l.xJW, {
                                title: x.intl.string(x.t.ilDlmZ),
                                children: (0, n.jsx)(l.oil, {
                                    placeholder: x.intl.string(x.t.RfWvWF),
                                    onChange: (e) => {
                                        v(e);
                                    },
                                    error: null == _ ? void 0 : _.getFirstFieldErrorMessage('name'),
                                    value: C
                                })
                            })
                        }),
                        (0, n.jsx)(l.mzw, {
                            className: g.formFooter,
                            direction: m.Z.Direction.VERTICAL,
                            children: (0, n.jsx)(i.zx, {
                                type: 'submit',
                                size: i.zx.Sizes.LARGE,
                                color: i.zx.Colors.BRAND,
                                children: x.intl.string(x.t.Np4yXV)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
