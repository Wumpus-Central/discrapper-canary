n.d(i, { default: () => l });
var a = n(627968),
    s = n(64700),
    e = n(158954),
    c = n(985018);
function l(t) {
    let { transitionState: i, onConfirm: n, onClose: l, onDismiss: o } = t,
        [r, u] = s.useState(!1),
        d = async () => {
            if (!r) {
                u(!0);
                try {
                    await n();
                } catch (t) {
                } finally {
                    u(!1);
                }
                l();
            }
        },
        k = () => (o(), l());
    return (0, a.jsx)(e.Modal, {
        transitionState: i,
        onClose: k,
        title: c.intl.string(c.t["66tnno"]),
        subtitle: c.intl.string(c.t["c/k4SW"]),
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: c.intl.string(c.t["cY+Oob"]), onClick: d, loading: r },
        ],
    });
}
