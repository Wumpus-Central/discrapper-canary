n.d(i, { default: () => l });
var s = n(951288);
n(647438);
var r = n(793030),
    e = n(388032);
function l(t) {
    let { onClose: i, transitionState: n, kind: l } = t;
    return (0, s.jsx)(r.Modal, {
        title: e.intl.string(e.t.r0DLNj),
        subtitle: "user" === l ? e.intl.string(e.t.Fqqbho) : e.intl.string(e.t["6Y0JlJ"]),
        actions: [
            {
                text: e.intl.string(e.t.BddRzc),
                onClick: i,
            },
        ],
        onClose: i,
        transitionState: n,
    });
}
