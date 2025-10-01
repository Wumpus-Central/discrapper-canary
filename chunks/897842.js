n.d(t, {
    A: () => i,
    default: () => l,
});
var a = n(951288);
n(647438);
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
