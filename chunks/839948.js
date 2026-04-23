"use strict";
r.d(t, { A: () => u });
var n = r(88807),
    o = r(126867),
    a = r(181746),
    i = r(920870),
    l = r(811422);
function s(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
(s.prototype.clear = n.A),
    (s.prototype.delete = o.A),
    (s.prototype.get = a.A),
    (s.prototype.has = i.A),
    (s.prototype.set = l.A);
let u = s;
