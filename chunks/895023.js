"use strict";
n.d(t, { _: () => a });
var r = n(627968);
n(64700);
var i = n(417098);
let a = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: t, message: n } = e,
                    a = {
                        BRAND: i.Hv.BRAND,
                        INFO: i.Hv.INFO,
                        WARNING: i.Hv.WARNING,
                        DANGER: i.Hv.DANGER,
                        DEFAULT: i.Hv.DEFAULT,
                        NEUTRAL: i.Hv.NEUTRAL,
                    };
                return (0, r.jsx)(i.$T, { color: a[t], children: n });
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
