var i = s(403581),
    r = s(572079);
s.d(
    e,
    {},
    {
        B: function (t) {
            let { iconOverride: e, variantOverride: s, ...c } = t,
                { buttonText: n, disabled: p } = (0, r.A)(c);
            return {
                subscribeButtonProps: { text: n, disabled: p, icon: e ?? i.NitroWheelIcon, variant: s ?? "expressive" },
            };
        },
    },
);
