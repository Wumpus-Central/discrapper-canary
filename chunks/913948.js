"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(821609),
    r = n(477782),
    a = n(265872),
    o = n(861672),
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
        g = l.useRef(null),
        [_, x] = l.useState(!1);
    if (0 === t.length) return null;
    let A = (e, t) => {
        p?.({ action: t }), f?.(), window.open(e, "_blank", "noopener,noreferrer");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: l } = t[0];
        return (0, i.jsx)(s.$, {
            variant: n,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: h,
            onClick: (t) => {
                m && t.stopPropagation(), A(e.getStoreUrl(l), e.analyticsAction);
            },
        });
    }
    let C = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: l } = e,
            s = [];
        return (
            t > 0 && s.push((0, i.jsx)(r.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, i.jsx)(
                    r.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => A(n.getStoreUrl(l), n.analyticsAction),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, i.jsx)(a.Y, {
        targetElementRef: g,
        position: "bottom",
        onRequestOpen: () => x(!0),
        onRequestClose: () => x(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: g.current?.offsetWidth },
                children: (0, i.jsx)(o.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": d.intl.string(d.t["3XhYOS"]),
                    children: (0, i.jsx)(r.rX, { children: C }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(s.$, {
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
