n.d(t, { Z: () => a });
var r = n(668781),
    i = n(624138),
    o = n(388032);
function a(e, t, n, a) {
    var s;
    r.Z.show({
        title: o.NW.string(o.t.XkIWkp),
        cancelText: o.NW.string(o.t['ETE/oK']),
        confirmText: o.NW.string(o.t['cY+Ooa']),
        onConfirm: n,
        onCancel: a,
        body: o.NW.format(o.t['5/Xorq'], {
            currentApplicationName: null != (s = null == e ? void 0 : e.name) ? s : o.NW.string(o.t.G99XFh),
            currentApplicationChannelName: (0, i.Ew)(null == t ? void 0 : t.name) ? o.NW.string(o.t.OGUjmp) : null == t ? void 0 : t.name
        })
    });
}
