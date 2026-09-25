i.d(n, { default: () => r });
var a = i(477900),
    s = i(582128),
    c = i(189213),
    e = i(375708);
function r(t) {
    let { transitionState: n, onConfirm: i, onClose: r, onDismiss: o } = t,
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
            r();
        }
    }
    function k() {
        return (o(), r());
    }
    return (0, a.jsx)(c.a, {
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
