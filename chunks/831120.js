i.d(n, { default: () => l });
var a = i(627968);
i(64700);
var e = i(158954),
    r = i(985018);
function l(t) {
    let { onConfirmUninstall: n, game: i, ...l } = t;
    return (0, a.jsx)(e.ConfirmModal, {
        title: r.intl.formatToPlainString(r.t["f/BAbC"], { gameName: i.name }),
        subtitle: r.intl.format(r.t["FP+NKV"], { gameName: i.name }),
        confirmText: r.intl.string(r.t.RVy6Vl),
        cancelText: r.intl.string(r.t["96dwMR"]),
        onConfirm: n,
        ...l,
    });
}
