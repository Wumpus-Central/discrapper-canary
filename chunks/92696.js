n.d(i, { default: () => a });
var r = n(627968);
n(64700);
var s = n(158954),
    e = n(985018);
function a(t) {
    let { ruleName: i, keyword: n, ...a } = t,
        l = i ?? e.intl.string(e.t.ffR2cM);
    return (0, r.jsx)(s.ConfirmModal, {
        ...a,
        title: e.intl.string(e.t["zib/xJ"]),
        subtitle: e.intl.format(e.t.AxSYKB, { ruleName: l, keyword: n }),
        confirmText: e.intl.string(e.t["cY+Oob"]),
    });
}
