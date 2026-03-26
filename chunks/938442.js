"use strict";
n.d(t, { A: () => c }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(939496),
    o = n(993401),
    l = n(996988),
    u = n(985018);
function c(e) {
    let { distributorCTAConfigs: t, gameName: n, onAction: c, onClose: d } = e,
        _ = i.useRef(null),
        [f, p] = i.useState(!1),
        { themeType: h } = (0, a.E)(),
        m = i.useMemo(
            () =>
                t.flatMap((e, t) => {
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
                                    action: () => {
                                        c?.({ action: n.analyticsAction }),
                                            d?.(),
                                            window.open(n.getStoreUrl(i), "_blank", "noopener,noreferrer");
                                    },
                                },
                                n.distributor,
                            ),
                        ),
                        a
                    );
                }),
            [t, c, d],
        );
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
                    navId: "distributor-store-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": u.intl.string(u.t["3XhYOS"]),
                    children: (0, r.jsx)(s.rXV, { children: m }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(o.FD, {
                buttonRef: _,
                icon: f ? s.tN5 : s.abt,
                iconPosition: "end",
                text: u.intl.formatToPlainString(u.t.ZDZEJN, { name: n }),
                fullWidth: h !== l.d.MODAL_V2,
                ...e,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
