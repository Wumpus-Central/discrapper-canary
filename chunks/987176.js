i.d(n, { default: () => o });
var a = i(627968),
    s = i(64700),
    c = i(189213),
    e = i(375708);
function o(t) {
    let { transitionState: n, onConfirm: i, onClose: o, onDismiss: r } = t,
        [l, u] = s.useState(!1);
    async function d() {
        if (!l) {
            u(!0);
            try {
                await i();
            } catch (t) {
            } finally {
                u(!1);
            }
            o();
        }
    }
    function k() {
        return r(), o();
    }
    return (0, a.jsx)(c.Modal, {
        transitionState: n,
        onClose: k,
        title: e.intl.string(e.t["66tnno"]),
        subtitle: e.intl.string(e.t["c/k4SW"]),
        actions: [
            { text: e.intl.string(e.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: e.intl.string(e.t["cY+Oob"]), onClick: d, loading: l },
        ],
    });
}
