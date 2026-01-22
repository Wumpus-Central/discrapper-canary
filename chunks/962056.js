n.d(t, {
    T: () => l,
}),
    n(896048),
    n(457529);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(723666);
let o = {
        id: "playground",
        children: [
            {
                block: "ContainedHero",
                bannerSrc:
                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                backgroundColor: "red",
                children: [
                    {
                        block: "InteractiveHScroll",
                        children: [
                            {
                                block: "Text",
                                variant: "text-md/normal",
                                content: "We've been trying to reach you about your car's extended warranty.",
                            },
                            {
                                block: "Text",
                                variant: "text-md/normal",
                                content: "We've been trying to reach you about your car's extended warranty.",
                            },
                            {
                                block: "Text",
                                variant: "text-md/normal",
                                content: "We've been trying to reach you about your car's extended warranty.",
                            },
                            {
                                block: "Text",
                                variant: "text-md/normal",
                                content: "We've been trying to reach you about your car's extended warranty.",
                            },
                            {
                                block: "Text",
                                variant: "text-md/normal",
                                content: "We've been trying to reach you about your car's extended warranty.",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    l = {
        title: "Template Builder",
        stories: [
            {
                name: "Template Builder",
                id: "template-builder",
                component: () => {
                    let [e, t] = i.useState(JSON.stringify(o));
                    return (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.A, {
                                template: JSON.parse(e),
                            }),
                            (0, r.jsx)("hr", {}),
                            (0, r.jsx)(a.fs1, {
                                value: e,
                                onChange: (e) => t(e),
                            }),
                        ],
                    });
                },
                controls: {},
            },
        ],
    };
