n.d(t, { Z: () => o });
var r = n(668781),
    i = n(624138),
    a = n(388032);
function o(e, t, n, o) {
    var s;
    r.Z.show({
        title: a.intl.string(a.t.XkIWkk),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        onConfirm: n,
        onCancel: o,
        body: a.intl.format(a.t["5/Xort"], {
            currentApplicationName: null != (s = null == e ? void 0 : e.name) ? s : a.intl.string(a.t.G99XFs),
            currentApplicationChannelName: (0, i.Ew)(null == t ? void 0 : t.name)
                ? a.intl.string(a.t.OGUjmt)
                : null == t
                  ? void 0
                  : t.name,
        }),
    });
}
