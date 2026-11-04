var i = e(403581),
    r = e(245383);
e.d(
    s,
    {},
    {
        B: function (t) {
            let { iconOverride: s, variantOverride: e, ...p } = t,
                { buttonText: c, disabled: n } = (0, r.A)(p);
            return { subscribeButtonProps: { text: c, disabled: n, icon: s ?? i.t, variant: e ?? "expressive" } };
        },
    },
);
