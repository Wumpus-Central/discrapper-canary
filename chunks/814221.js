n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(192308),
    s = n(939249),
    r = n(307301),
    o = n(834730),
    c = n(183555),
    d = n(985018),
    u = n(106878);
function _() {
    let { trackUserProfileEditAction: e } = (0, c.NJ)(),
        t = a.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, l.openModalLazy)(
                    async () => {
                        let { default: t } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(t, { ...n, trackUserProfileEditAction: e });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [e]);
    return (0, i.jsxs)(s.D, {
        className: u.E,
        onClick: t,
        children: [
            (0, i.jsx)(r.j, { size: "sm", color: "currentColor" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: d.intl.string(d.t["lBG2s/"]),
            }),
        ],
    });
}
