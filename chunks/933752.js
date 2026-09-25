n.d(i, { default: () => o });
var r = n(477900);
n(582128);
var a = n(732159),
    s = n(816662),
    e = n(375708);
function o(t) {
    let { guildId: i, channelId: n, ...o } = t;
    return (0, r.jsx)(a.u, {
        ...o,
        title: e.intl.string(e.t["7r7op8"]),
        subtitle: e.intl.format(e.t.K82phZ, {}),
        confirmText: e.intl.string(e.t.H8ZQbo),
        cancelText: e.intl.string(e.t["ETE/oC"]),
        onConfirm: function () {
            (0, s.jA)(i, n, !1);
        },
        variant: "primary",
    });
}
