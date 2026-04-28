"use strict";
n.d(t, { A: () => h }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(821609),
    a = n(477782),
    r = n(922016),
    o = n(550079),
    c = n(900797),
    u = n(847374),
    d = n(985018);
function h(e) {
    let {
            distributorCTAConfigs: t,
            buttonVariant: n = "secondary",
            fullWidth: h = !0,
            stopPropagation: m = !1,
            onAction: p,
            onClose: f,
        } = e,
        g = i.useRef(null),
        [_, x] = i.useState(!1);
    if (0 === t.length) return null;
    let C = (e, t) => {
        p?.({ action: t }), f?.(), window.open(e, "_blank", "noopener,noreferrer");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: i } = t[0];
        return (0, l.jsx)(s.$, {
            variant: n,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: h,
            onClick: (t) => {
                m && t.stopPropagation(), C(e.getStoreUrl(i), e.analyticsAction);
            },
        });
    }
    let A = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: i } = e,
            s = [];
        return (
            t > 0 && s.push((0, l.jsx)(a.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, l.jsx)(
                    a.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => C(n.getStoreUrl(i), n.analyticsAction),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, l.jsx)(r.Y, {
        targetElementRef: g,
        position: "bottom",
        onRequestOpen: () => x(!0),
        onRequestClose: () => x(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: g.current?.offsetWidth },
                children: (0, l.jsx)(o.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": d.intl.string(d.t["3XhYOS"]),
                    children: (0, l.jsx)(a.rX, { children: A }),
                }),
            });
        },
        children: (e) =>
            (0, l.jsx)(s.$, {
                buttonRef: g,
                variant: n,
                size: "sm",
                icon: _ ? c.t : u.a,
                iconPosition: "end",
                text: d.intl.string(d.t.nSHoxC),
                fullWidth: h,
                ...e,
                onClick: (t) => {
                    m && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
