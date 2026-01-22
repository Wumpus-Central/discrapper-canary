n.d(t, {
    V: () => c,
});
var r = n(627968),
    i = n(732955),
    a = n(652165),
    s = n(749226);
let o = (e) => {
        (0, a.B4)({
            skuId: e,
            onCheckoutSuccess: (e) => {
                let { skuId: t, entitlements: n } = e;
                console.log("Orb Checkout Success for SKU: ".concat(t, ". Entitlement(s): "), n, Date.now());
            },
            onCloseCallback: () => {
                console.log("Orb Checkout Closed");
            },
        });
    },
    l = "1271174907081789524",
    c = {
        title: "Orb Checkout",
        stories: [
            {
                name: "Orb Checkout Modals",
                id: "orb-checkout-modal",
                component: (e) => {
                    let { skuId: t } = e;
                    return (0, r.jsx)("div", {
                        className: s.YG,
                        children: (0, r.jsx)(i.$nd, {
                            onClick: () => {
                                o(t);
                            },
                            text: "Open Orb Checkout for Custom SKU: ".concat(t),
                        }),
                    });
                },
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            {
                                skuId: "1342211853484429445",
                                skuName: "Orb Profile Badge",
                            },
                            {
                                skuId: "1427463138634109026",
                                skuName: "Magic Mists (Deco)",
                            },
                            {
                                skuId: "1332505467980873728",
                                skuName: "Pondering Portal (Deco)",
                            },
                            {
                                skuId: l,
                                skuName: "Oni's Curse (Deco)",
                            },
                        ].map((e) => {
                            let { skuId: t, skuName: n } = e;
                            return {
                                label: n,
                                value: t,
                            };
                        }),
                        defaultValue: l,
                    },
                },
            },
        ],
    };
