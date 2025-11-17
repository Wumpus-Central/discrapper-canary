n.d(t, {
    A: () => r,
    default: () => i,
});
var a = n(54381);
n(473749);
var l = n(793030);
let r = "UPLOAD_ERROR_MODAL_KEY",
    i = (e) => {
        let { title: t, help: n, transitionState: r, onClose: i } = e;
        return (0, a.jsx)(l.Modal, {
            title: t,
            subtitle: n,
            transitionState: r,
            actions: [
                {
                    variant: "critical-secondary",
                    text: "Close",
                    onClick: i,
                },
            ],
            onClose: i,
        });
    };
