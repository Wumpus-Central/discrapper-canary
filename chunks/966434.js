r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(668781),
    a = r(624138),
    o = r(388032);
function s(e, n, r, s) {
    var l;
    i.Z.show({
        title: o.intl.string(o.t.XkIWkp),
        cancelText: o.intl.string(o.t['ETE/oK']),
        confirmText: o.intl.string(o.t['cY+Ooa']),
        onConfirm: r,
        onCancel: s,
        body: o.intl.format(o.t['5/Xorq'], {
            currentApplicationName: null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : o.intl.string(o.t.G99XFh),
            currentApplicationChannelName: (0, a.Ew)(null == n ? void 0 : n.name) ? o.intl.string(o.t.OGUjmp) : null == n ? void 0 : n.name
        })
    });
}
