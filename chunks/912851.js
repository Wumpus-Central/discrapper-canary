n.d(t, { A: () => r });
var i = n(228366);
let r = {
    show(e, t, n, r, a) {
        i.h.dispatch({ type: "NOTICE_SHOW", notice: { id: a, type: e, message: t, buttonText: n, callback: r } });
    },
    dismiss(e) {
        i.h.dispatch({ type: "NOTICE_DISMISS", ...e });
    },
};
