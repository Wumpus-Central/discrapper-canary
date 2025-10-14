n.d(t, { n: () => o });
var r = n(951288),
    i = n(793030),
    a = n(525605);
let o = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: t } = e;
                return (0, r.jsx)(i.Kqy, {
                    gap: 16,
                    children: Object.values(a.Q).map((e) =>
                        (0, r.jsx)(
                            i.gNt,
                            {
                                label: e,
                                children: (0, r.jsx)(
                                    a.W,
                                    {
                                        messageType: e,
                                        children: t,
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
