n.d(t, { Z: () => s });
var i = n(668781),
    r = n(624138),
    a = n(388032);
function s(e, t, n, s) {
    var o;
    i.Z.show({
        title: a.intl.string(a.t.XkIWkp),
        cancelText: a.intl.string(a.t['ETE/oK']),
        confirmText: a.intl.string(a.t['cY+Ooa']),
        onConfirm: n,
        onCancel: s,
        body: a.intl.format(a.t['5/Xorq'], {
            currentApplicationName: null !== (o = null == e ? void 0 : e.name) && void 0 !== o ? o : a.intl.string(a.t.G99XFh),
            currentApplicationChannelName: (0, r.Ew)(null == t ? void 0 : t.name) ? a.intl.string(a.t.OGUjmp) : null == t ? void 0 : t.name
        })
    });
}
