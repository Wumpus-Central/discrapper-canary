t.d(l, { n: () => i });
var a = t(951288),
    n = t(793030),
    o = t(525605);
let i = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: l } = e;
                return (0, a.jsx)(n.Kqy, {
                    gap: 16,
                    children: Object.values(o.Q).map((e) =>
                        (0, a.jsx)(
                            n.gNt,
                            {
                                label: e,
                                children: (0, a.jsx)(
                                    o.W,
                                    {
                                        messageType: e,
                                        children: l,
                                    },
                                    e,
                                ),
                            },
                            e,
                        ),
                    ),
                });
            },
            controls: {
                text: {
                    label: "Text",
                    type: "text",
                    defaultValue: "This is a help message",
                },
            },
        },
    ],
};
