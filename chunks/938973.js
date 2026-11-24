var i = n(403581),
    r = n(572079);
n.d(
    t,
    {},
    {
        B: function (e) {
            let { iconOverride: t, variantOverride: n, ...a } = e,
                { buttonText: s, disabled: l } = (0, r.A)(a);
            return {
                subscribeButtonProps: { text: s, disabled: l, icon: t ?? i.NitroWheelIcon, variant: n ?? "expressive" },
            };
        },
    },
);
