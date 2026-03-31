"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(985018);
function o(e) {
    let {
            distributorCTAConfigs: t,
            gameName: n,
            buttonVariant: o = "secondary",
            fullWidth: l = !0,
            stopPropagation: u = !1,
            onAction: c,
            onClose: d,
        } = e,
        _ = i.useRef(null),
        [f, p] = i.useState(!1);
    if (0 === t.length) return null;
    let h = (e, t) => {
        c?.({ action: t }), d?.(), window.open(e, "_blank", "noopener,noreferrer");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: n } = t[0];
        return (0, r.jsx)(s.Button, {
            variant: o,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: l,
            onClick: (t) => {
                u && t.stopPropagation(), h(e.getStoreUrl(n), e.analyticsAction);
            },
        });
    }
    let m = t.flatMap((e, t) => {
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
                        action: () => h(n.getStoreUrl(i), n.analyticsAction),
                    },
                    n.distributor,
                ),
            ),
            a
        );
    });
    return (0, r.jsx)(s.YNO, {
        targetElementRef: _,
        position: "bottom",
        onRequestOpen: () => p(!0),
        onRequestClose: () => p(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: _.current?.offsetWidth },
                children: (0, r.jsx)(s.W1t, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": a.intl.string(a.t["3XhYOS"]),
                    children: (0, r.jsx)(s.rXV, { children: m }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(s.Button, {
                buttonRef: _,
                variant: o,
                size: "sm",
                icon: f ? s.tN5 : s.abt,
                iconPosition: "end",
                text: a.intl.formatToPlainString(a.t.ZDZEJN, { name: n }),
                fullWidth: l,
                ...e,
                onClick: (t) => {
                    u && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
