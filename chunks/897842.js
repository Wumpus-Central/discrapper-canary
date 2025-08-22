n.d(t, {
    A: () => l,
    default: () => i,
});
var a = n(951288);
n(647438);
var r = n(82659);
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
