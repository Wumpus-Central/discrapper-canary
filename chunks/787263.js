n.d(e, { w: () => l });
var i = n(200651);
n(192379);
var a = n(481060);
function l(t, e) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await n.e('79521').then(n.bind(n, 207540));
        return (n) =>
            (0, i.jsx)(a, {
                ...n,
                onConfirm: () => {
                    n.onClose(), e();
                },
                channel: t
            });
    });
}
