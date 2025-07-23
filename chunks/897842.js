a.d(t, {
    A: () => l,
    default: () => i
});
var n = a(255367);
a(73800);
var r = a(82659);
let l = 'UPLOAD_ERROR_MODAL_KEY',
    i = (e) => {
        let { title: t, help: a, transitionState: l, onClose: i } = e;
        return (0, n.jsx)(r.Modal, {
            title: t,
            subtitle: a,
            transitionState: l,
            actions: [
                {
                    variant: 'critical-secondary',
                    text: 'Close',
                    onClick: i
                }
            ],
            onClose: i
        });
    };
