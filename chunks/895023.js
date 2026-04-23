a.d(l, { _: () => n });
var t = a(627968);
a(64700);
var o = a(417098);
let n = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: l, message: a } = e,
                    n = {
                        BRAND: o.Hv.BRAND,
                        INFO: o.Hv.INFO,
                        WARNING: o.Hv.WARNING,
                        DANGER: o.Hv.DANGER,
                        DEFAULT: o.Hv.DEFAULT,
                        NEUTRAL: o.Hv.NEUTRAL,
                    };
                return (0, t.jsx)(o.$T, { color: n[l], children: a });
            },
            controls: {
                color: {
                    type: "select",
                    label: "Color",
                    defaultValue: "BRAND",
                    options: [
                        { label: "Brand", value: "BRAND" },
                        { label: "Info", value: "INFO" },
                        { label: "Warning", value: "WARNING" },
                        { label: "Danger", value: "DANGER" },
                        { label: "Default", value: "DEFAULT" },
                        { label: "Neutral", value: "NEUTRAL" },
                    ],
                },
                message: {
                    type: "text",
                    label: "Message",
                    defaultValue: "This is a notice message with important information.",
                },
            },
        },
    ],
};
