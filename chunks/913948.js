"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(989441),
    a = n(821609),
    o = n(477782),
    l = n(922016),
    u = n(980707),
    c = n(900797),
    d = n(847374),
    _ = n(37948),
    f = n(375708);
function h(e) {
    let {
            distributorCTAConfigs: t,
            buttonVariant: n = "secondary",
            fullWidth: h = !0,
            stopPropagation: p = !1,
            onAction: E,
            onClose: m,
        } = e,
        g = (0, _.A)(),
        A = r.useRef(null),
        [I, T] = r.useState(!1);
    if (0 === t.length) return null;
    let S = (e, t, n) => {
        E?.({ action: n }), m?.(), t === s.D.STEAM ? g(e) : window.open(e, "_blank", "noreferrer noopener");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: r } = t[0];
        return (0, i.jsx)(a.$, {
            variant: n,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: h,
            onClick: (t) => {
                p && t.stopPropagation(), S(e.getStoreUrl(r), e.distributor, e.analyticsAction);
            },
        });
    }
    let N = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: r } = e,
            s = [];
        return (
            t > 0 && s.push((0, i.jsx)(o.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, i.jsx)(
                    o.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => S(n.getStoreUrl(r), n.distributor, n.analyticsAction),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, i.jsx)(l.Y, {
        targetElementRef: A,
        position: "bottom",
        onRequestOpen: () => T(!0),
        onRequestClose: () => T(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: A.current?.offsetWidth },
                children: (0, i.jsx)(u.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": f.intl.string(f.t["3XhYOS"]),
                    children: (0, i.jsx)(o.rX, { children: N }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(a.$, {
                buttonRef: A,
                variant: n,
                size: "sm",
                icon: I ? c.t : d.a,
                iconPosition: "end",
                text: f.intl.string(f.t.nSHoxC),
                fullWidth: h,
                ...e,
                onClick: (t) => {
                    p && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
