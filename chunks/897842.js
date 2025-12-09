n.d(t, {
    A: () => i,
    default: () => l,
});
var a = n(54381);
n(473749);
var r = n(793030);
let i = "UPLOAD_ERROR_MODAL_KEY",
    l = (e) => {
        let { title: t, help: n, transitionState: i, onClose: l } = e;
        return (0, a.jsx)(r.Modal, {
            title: t,
            subtitle: n,
            transitionState: i,
            actions: [
                {
                    variant: "critical-secondary",
                    text: "Close",
                    onClick: l,
                },
            ],
            onClose: l,
        });
    };
