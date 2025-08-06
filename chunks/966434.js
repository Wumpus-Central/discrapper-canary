n.d(t, { Z: () => a });
var r = n(668781),
    i = n(624138),
    o = n(388032);
function a(e, t, n, a) {
    var s;
    r.Z.show({
        title: o.intl.string(o.t.XkIWkp),
        cancelText: o.intl.string(o.t['ETE/oK']),
        confirmText: o.intl.string(o.t['cY+Ooa']),
        onConfirm: n,
        onCancel: a,
        body: o.intl.format(o.t['5/Xorq'], {
            currentApplicationName: null != (s = null == e ? void 0 : e.name) ? s : o.intl.string(o.t.G99XFh),
            currentApplicationChannelName: (0, i.Ew)(null == t ? void 0 : t.name) ? o.intl.string(o.t.OGUjmp) : null == t ? void 0 : t.name
        })
    });
}
