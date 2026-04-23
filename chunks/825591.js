"use strict";
n.d(t, { A: () => u });
var r = n(157559),
    i = n(47167),
    s = n(994500),
    a = n(287809),
    o = n(240248),
    l = n(985018);
function u(e, t, n, u) {
    let c = null != t ? (0, i.m1)(t, a.default, s.A) : "";
    r.A.show({
        title: l.intl.string(l.t.XkIWkk),
        cancelText: l.intl.string(l.t["ETE/oC"]),
        confirmText: l.intl.string(l.t["cY+Oob"]),
        onConfirm: n,
        onCancel: u,
        body: l.intl.format(l.t["5/Xort"], {
            currentApplicationName: e?.name ?? l.intl.string(l.t.G99XFs),
            currentApplicationChannelName: (0, o.uJ)(c) ? l.intl.string(l.t.OGUjmt) : c,
        }),
    });
}
