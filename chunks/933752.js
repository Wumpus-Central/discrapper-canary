n.d(i, { default: () => e });
var r = n(627968);
n(64700);
var a = n(732159),
    o = n(816662),
    s = n(375708);
function e(t) {
    let { guildId: i, channelId: n, ...e } = t;
    return (0, r.jsx)(a.ConfirmModal, {
        ...e,
        title: s.intl.string(s.t["7r7op8"]),
        subtitle: s.intl.format(s.t.K82phZ, {}),
        confirmText: s.intl.string(s.t.H8ZQbo),
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onConfirm: function () {
            (0, o.jA)(i, n, !1);
        },
        variant: "primary",
    });
}
