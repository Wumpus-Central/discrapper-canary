n.d(i, { default: () => l });
var s = n(54381);
n(473749);
var r = n(793030),
    e = n(388032);
function l(t) {
    let { onClose: i, transitionState: n, kind: l } = t;
    return (0, s.jsx)(r.Modal, {
        title: e.intl.string(e.t.r0DLNm),
        subtitle: "user" === l ? e.intl.string(e.t.Fqqbhg) : e.intl.string(e.t["6Y0JlN"]),
        actions: [
            {
                text: e.intl.string(e.t.BddRzS),
                onClick: i,
            },
        ],
        onClose: i,
        transitionState: n,
    });
}
