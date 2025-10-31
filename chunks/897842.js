n.d(t, {
    A: () => l,
    default: () => r,
});
var a = n(951288);
n(647438);
var i = n(793030);
let l = "UPLOAD_ERROR_MODAL_KEY",
    r = (e) => {
        let { title: t, help: n, transitionState: l, onClose: r } = e;
        return (0, a.jsx)(i.Modal, {
            title: t,
            subtitle: n,
            transitionState: l,
            actions: [
                {
                    variant: "critical-secondary",
                    text: "Close",
                    onClick: r,
                },
            ],
            onClose: r,
        });
    };
