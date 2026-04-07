"use strict";
n.r(t), n.d(t, { USER_SETTINGS_MODAL_KEY: () => _, openUserSettings: () => f });
var r = n(627968),
    i = n(397927),
    s = n(73153),
    a = n(790284),
    o = n(272053),
    l = n(961350),
    u = n(175665),
    c = n(904481),
    d = n(355097);
let _ = "USER_SETTINGS_MODAL_MODAL_KEY";
async function f(e) {
    let {
            path: t,
            stackingBehavior: f = "replaceAll",
            ...p
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        h = arguments.length > 2 ? arguments[2] : void 0;
    if (l.default.isAuthenticated()) {
        if (
            (null != t && t === d.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS && a.A.setState({ subsection: d.nR }),
            u.A.setState({ source: p.searchParams?.source }),
            s.h.dispatch({ type: "USER_SETTINGS_MODAL_OPEN", ...p }),
            (0, c.f)())
        ) {
            if (null == e) return;
            o.A.navigate(e);
        } else
            await (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("57174"),
                        n.e("41927"),
                        n.e("38939"),
                        n.e("81469"),
                        n.e("91757"),
                        n.e("49924"),
                        n.e("8555"),
                        n.e("91652"),
                        n.e("40396"),
                        n.e("90365"),
                        n.e("28936"),
                        n.e("68859"),
                        n.e("48330"),
                        n.e("92414"),
                        n.e("94857"),
                        n.e("48840"),
                        n.e("49559"),
                        n.e("18976"),
                        n.e("35139"),
                        n.e("37372"),
                        n.e("59135"),
                        n.e("97283"),
                        n.e("91139"),
                        n.e("76122"),
                        n.e("62175"),
                        n.e("94212"),
                        n.e("53662"),
                        n.e("41606"),
                        n.e("68890"),
                        n.e("30453"),
                        n.e("37901"),
                        n.e("89348"),
                        n.e("38213"),
                        n.e("62733"),
                        n.e("83518"),
                        n.e("55249"),
                        n.e("9729"),
                        n.e("34749"),
                        n.e("70144"),
                        n.e("95782"),
                        n.e("44667"),
                        n.e("53609"),
                        n.e("7803"),
                        n.e("84704"),
                        n.e("67646"),
                        n.e("11387"),
                        n.e("2557"),
                        n.e("83339"),
                        n.e("89300"),
                    ]).then(n.bind(n, 55622));
                    return (n) => (0, r.jsx)(t, { ...n, target: e });
                },
                {
                    modalKey: _,
                    stackingBehavior: f,
                    stackNextByDefault: !0,
                    contextKey: i.SYi,
                    onCloseRequest: () => {
                        null != o.A.closeWithValidation ? o.A.closeWithValidation() : (0, i.OoC)(_, i.SYi);
                    },
                },
            );
        h?.();
    }
}
