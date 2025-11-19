n.d(t, {
    A: () => i,
    default: () => r,
});
var a = n(54381);
n(473749);
var l = n(793030);
let i = "UPLOAD_ERROR_MODAL_KEY",
    r = (e) => {
        let { title: t, help: n, transitionState: i, onClose: r } = e;
        return (0, a.jsx)(l.Modal, {
            title: t,
            subtitle: n,
            transitionState: i,
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
