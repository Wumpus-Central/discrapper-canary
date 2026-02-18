l.d(t, { V: () => o });
var a = l(627968),
    n = l(732955),
    r = l(652165),
    i = l(749226);
let s = "1271174907081789524",
    o = {
        title: "Orb Checkout",
        stories: [
            {
                name: "Orb Checkout Modals",
                id: "orb-checkout-modal",
                component: (e) => {
                    let { skuId: t } = e;
                    return (0, a.jsx)("div", {
                        className: i.YG,
                        children: (0, a.jsx)(n.$nd, {
                            onClick: () => {
                                (0, r.B4)({
                                    skuId: t,
                                    onCheckoutSuccess: (e) => {
                                        let { skuId: t, entitlements: l } = e;
                                        console.log(
                                            `Orb Checkout Success for SKU: ${t}. Entitlement(s): `,
                                            l,
                                            Date.now(),
                                        );
                                    },
                                    onCloseCallback: () => {
                                        console.log("Orb Checkout Closed");
                                    },
                                });
                            },
                            text: `Open Orb Checkout for Custom SKU: ${t}`,
                        }),
                    });
                },
                controls: {
                    skuId: {
                        label: "SKU ID",
                        type: "select",
                        options: [
                            { skuId: "1342211853484429445", skuName: "Orb Profile Badge" },
                            { skuId: "1427463138634109026", skuName: "Magic Mists (Deco)" },
                            { skuId: "1332505467980873728", skuName: "Pondering Portal (Deco)" },
                            { skuId: s, skuName: "Oni's Curse (Deco)" },
                        ].map((e) => {
                            let { skuId: t, skuName: l } = e;
                            return { label: l, value: t };
                        }),
                        defaultValue: s,
                    },
                },
            },
        ],
    };
