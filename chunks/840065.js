"use strict";
n.r(t), n.d(t, { USER_SETTINGS_MODAL_KEY: () => c, openUserSettings: () => d });
var r = n(627968),
    i = n(397927),
    s = n(73153),
    a = n(790284),
    o = n(272053),
    l = n(995377),
    u = n(355097);
let c = "USER_SETTINGS_MODAL_MODAL_KEY";
async function d(e) {
    let {
            path: t,
            stackingBehavior: d = "replaceAll",
            ..._
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        f = arguments.length > 2 ? arguments[2] : void 0;
    if (
        (null != t && t === u.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS && a.A.setState({ subsection: u.nR }),
        s.h.dispatch({ type: "USER_SETTINGS_MODAL_OPEN", ..._ }),
        (0, l.f)())
    ) {
        if (null == e) return;
        o.A.navigate(e);
    } else
        await (0, i.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("41927"),
                    n.e("38939"),
                    n.e("81469"),
                    n.e("3795"),
                    n.e("14138"),
                    n.e("8555"),
                    n.e("49924"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("42006"),
                    n.e("37372"),
                    n.e("89783"),
                    n.e("91139"),
                    n.e("3183"),
                    n.e("5709"),
                    n.e("97283"),
                    n.e("62175"),
                    n.e("12437"),
                    n.e("99328"),
                    n.e("41606"),
                    n.e("7562"),
                    n.e("39501"),
                    n.e("30453"),
                    n.e("74352"),
                    n.e("30425"),
                    n.e("49164"),
                    n.e("64190"),
                    n.e("62733"),
                    n.e("14033"),
                    n.e("83518"),
                    n.e("52410"),
                    n.e("78982"),
                    n.e("34749"),
                    n.e("70144"),
                    n.e("44667"),
                    n.e("95782"),
                    n.e("7803"),
                    n.e("84704"),
                    n.e("22777"),
                    n.e("67646"),
                    n.e("8880"),
                    n.e("98153"),
                    n.e("79665"),
                ]).then(n.bind(n, 796150));
                return (n) => (0, r.jsx)(t, { ...n, target: e });
            },
            { modalKey: c, stackingBehavior: d, stackNextByDefault: !0, contextKey: i.SYi },
        );
    f?.();
}
