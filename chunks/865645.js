"use strict";
n.d(t, { A: () => i });
var r = n(444746);
function i(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, r.Ng)(n)) {
        var i = t;
        do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
        } while (i);
    }
    return !1;
}
