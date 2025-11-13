n.d(t, {
    A: () => r,
    default: () => l,
});
var a = n(951288);
n(647438);
var i = n(793030);
let r = "UPLOAD_ERROR_MODAL_KEY",
    l = (e) => {
        let { title: t, help: n, transitionState: r, onClose: l } = e;
        return (0, a.jsx)(i.Modal, {
            title: t,
            subtitle: n,
            transitionState: r,
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
