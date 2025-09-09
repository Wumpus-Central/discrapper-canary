t.d(a, { default: () => _ }), t(388685);
var n = t(951288),
    r = t(647438),
    o = t(442837),
    i = t(755721),
    l = t(481060),
    s = t(881052),
    d = t(607070),
    c = t(745510),
    m = t(600164),
    u = t(781792),
    f = t(430824),
    b = t(645792),
    h = t(981631),
    x = t(388032),
    g = t(687212);
function _(e) {
    let { guildId: a } = e,
        t = (0, o.e7)([f.Z], () => f.Z.getGuild(a)),
        [_, p] = r.useState(null),
        [C, H] = r.useState(""),
        { createMultipleConfettiAt: N } = r.useContext(c.h),
        k = (0, o.e7)([d.Z], () => d.Z.useReducedMotion, []),
        v = async (a) => {
            let { onClose: t, guildId: n } = e;
            a.preventDefault(), p(null);
            try {
                await (0, u.e)(n, { nick: C }), null == t || t();
            } catch (e) {
                p(new s.Hx(e));
            }
        },
        { transitionState: S } = e,
        j = f.Z.getGuildsArray().filter((e) => e.id !== a && e.features.has(h.oNc.HUB)).length > 0,
        w = !k && !j && (null == t ? void 0 : t.features.has(h.oNc.HUB)) && (0, b.b)();
    return (
        r.useEffect(() => {
            w && N(window.innerWidth / 2, window.innerHeight / 2);
        }, [N, w]),
        (0, n.jsxs)(l.Y0X, {
            className: g.__invalid_modalRoot,
            transitionState: S,
            "aria-label": x.intl.formatToPlainString(x.t["d+6kzs"], { guildName: null == t ? void 0 : t.name }),
            parentComponent: "HubRealNameModal",
            children: [
                (0, n.jsxs)(l.xBx, {
                    separator: !1,
                    className: g.formHeaderContainer,
                    direction: m.Z.Direction.VERTICAL,
                    children: [
                        (0, n.jsx)("div", { className: g.formImage }),
                        (0, n.jsx)(l.X6q, {
                            variant: "heading-xl/semibold",
                            className: g.formHeader,
                            children: x.intl.format(x.t["d+6kzs"], { guildName: null == t ? void 0 : t.name }),
                        }),
                        (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: g.formSubHeader,
                            children: x.intl.string(x.t.b3L8y8),
                        }),
                    ],
                }),
                (0, n.jsxs)("form", {
                    className: g.formContent,
                    onSubmit: v,
                    children: [
                        (0, n.jsx)(l.hzk, {
                            children: (0, n.jsx)(l.oil, {
                                label: x.intl.string(x.t.ilDlmZ),
                                placeholder: x.intl.string(x.t.RfWvWF),
                                onChange: (e) => {
                                    H(e);
                                },
                                error: null == _ ? void 0 : _.getFirstFieldErrorMessage("name"),
                                value: C,
                            }),
                        }),
                        (0, n.jsx)(l.mzw, {
                            className: g.formFooter,
                            direction: m.Z.Direction.VERTICAL,
                            children: (0, n.jsx)(i.zx, {
                                type: "submit",
                                size: i.zx.Sizes.LARGE,
                                color: i.zx.Colors.BRAND,
                                children: x.intl.string(x.t.Np4yXV),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
