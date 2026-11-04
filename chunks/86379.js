var l = n(945810),
    i = n(477421);
let r = (0, l.mj)({
    name: "2026-03-block-purchases",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        Hp: function () {
            let { enabled: e } = r.useConfig({ location: "c519a9_1" }),
                { defaultBillingCountryCode: t } = (0, i.A)();
            return e || "RU" === t;
        },
        dw: function () {
            let { enabled: e } = r.useConfig({ location: "dc120b_3" });
            return e;
        },
    },
);
