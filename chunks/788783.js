var i = d(269882);
function e(l, t) {
    (0, i.g)({
        code: "onCaptureCallbackError",
        module: t,
        payload: { message: l instanceof Error ? l.message : String(l) },
    });
}
d.d(
    t,
    {},
    {
        t: function (l, t, d) {
            try {
                let i = l(t);
                i &&
                    "function" == typeof i.then &&
                    i.catch((l) => {
                        e(l, d);
                    });
            } catch (l) {
                e(l, d);
            }
        },
    },
);
