"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(985018);
function o(e) {
    let {
            distributorCTAConfigs: t,
            buttonVariant: n = "secondary",
            fullWidth: o = !0,
            stopPropagation: l = !1,
            onAction: u,
            onClose: c,
        } = e,
        d = i.useRef(null),
        [_, f] = i.useState(!1);
    if (0 === t.length) return null;
    let p = (e, t) => {
        u?.({ action: t }), c?.(), window.open(e, "_blank", "noopener,noreferrer");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: i } = t[0];
        return (0, r.jsx)(s.Button, {
            variant: n,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: o,
            onClick: (t) => {
                l && t.stopPropagation(), p(e.getStoreUrl(i), e.analyticsAction);
            },
        });
    }
    let h = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: i } = e,
            a = [];
        return (
            t > 0 && a.push((0, r.jsx)(s.bXX, {}, `sep-${n.distributor}`)),
            a.push(
                (0, r.jsx)(
                    s.Drp,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => p(n.getStoreUrl(i), n.analyticsAction),
                    },
                    n.distributor,
                ),
            ),
            a
        );
    });
    return (0, r.jsx)(s.YNO, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: d.current?.offsetWidth },
                children: (0, r.jsx)(s.W1t, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": a.intl.string(a.t["3XhYOS"]),
                    children: (0, r.jsx)(s.rXV, { children: h }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(s.Button, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: _ ? s.tN5 : s.abt,
                iconPosition: "end",
                text: a.intl.string(a.t.nSHoxC),
                fullWidth: o,
                ...e,
                onClick: (t) => {
                    l && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
