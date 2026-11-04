var i = n(73153);
n.d(
    t,
    {},
    {
        A: {
            show(e, t, n, r, a) {
                i.h.dispatch({
                    type: "NOTICE_SHOW",
                    notice: { id: a, type: e, message: t, buttonText: n, callback: r },
                });
            },
            dismiss(e) {
                i.h.dispatch({ type: "NOTICE_DISMISS", ...e });
            },
        },
    },
);
