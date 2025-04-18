n.d(t, { Z: () => o });
var r = n(668781),
    i = n(624138),
    a = n(388032);
function o(e, t, n, o) {
    var s;
    r.Z.show({
        title: a.NW.string(a.t.XkIWkp),
        cancelText: a.NW.string(a.t['ETE/oK']),
        confirmText: a.NW.string(a.t['cY+Ooa']),
        onConfirm: n,
        onCancel: o,
        body: a.NW.format(a.t['5/Xorq'], {
            currentApplicationName: null != (s = null == e ? void 0 : e.name) ? s : a.NW.string(a.t.G99XFh),
            currentApplicationChannelName: (0, i.Ew)(null == t ? void 0 : t.name) ? a.NW.string(a.t.OGUjmp) : null == t ? void 0 : t.name
        })
    });
}
