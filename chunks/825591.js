n.d(t, { A: () => s });
var r = n(157559),
    i = n(240248),
    a = n(985018);
function s(e, t, n, s) {
    var o;
    r.A.show({
        title: a.intl.string(a.t.XkIWkk),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        onConfirm: n,
        onCancel: s,
        body: a.intl.format(a.t["5/Xort"], {
            currentApplicationName: null != (o = null == e ? void 0 : e.name) ? o : a.intl.string(a.t.G99XFs),
            currentApplicationChannelName: (0, i.uJ)(null == t ? void 0 : t.name)
                ? a.intl.string(a.t.OGUjmt)
                : null == t
                  ? void 0
                  : t.name,
        }),
    });
}
