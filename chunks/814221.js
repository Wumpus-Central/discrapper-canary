n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(183555),
    s = n(985018),
    o = n(352705);
function d() {
    let { trackUserProfileEditAction: e } = (0, r.NJ)(),
        t = l.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, a.mMO)(
                    async () => {
                        let { default: t } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(t, { ...n, trackUserProfileEditAction: e });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [e]);
    return (0, i.jsxs)(a.DUT, {
        className: o.E,
        onClick: t,
        children: [
            (0, i.jsx)(a.j96, { size: "sm", color: "currentColor" }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: s.intl.string(s.t["lBG2s/"]),
            }),
        ],
    });
}
