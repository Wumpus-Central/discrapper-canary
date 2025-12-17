n.d(t, {
    A: () => l,
    default: () => i,
});
var a = n(54381);
n(473749);
var r = n(793030);
let l = "UPLOAD_ERROR_MODAL_KEY",
    i = (e) => {
        let { title: t, help: n, transitionState: l, onClose: i } = e;
        return (0, a.jsx)(r.Modal, {
            title: t,
            subtitle: n,
            transitionState: l,
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
