n.d(t, { n: () => s });
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(540863),
    o = n(525605);
let s = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: t } = e;
                return (0, r.jsx)(i.Kqy, {
                    gap: 16,
                    children: Object.values(o.Q).map((e) =>
                        (0, r.jsx)(
                            a.x,
                            {
                                title: e,
                                children: (0, r.jsx)(
                                    o.W,
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
