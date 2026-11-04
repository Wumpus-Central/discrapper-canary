var a = i(73153);
let s = Date.now();
i.d(
    n,
    {},
    {
        Gk: function (t) {
            a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_UPDATE", transform: t });
        },
        Is: function (t) {
            a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_DELETE", id: t });
        },
        Sy: function (t, n) {
            let i = { id: String(s++), name: t, prompt: n };
            return (a.h.dispatch({ type: "CUSTOM_TEXT_TRANSFORM_ADD", transform: i }), i);
        },
    },
);
