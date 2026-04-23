"use strict";
n.d(t, { A: () => _ });
var r = n(691540),
    i = n(857250),
    s = n(97483),
    a = n(192308),
    o = n(976860),
    l = n(240233),
    u = n(573879),
    c = n(652215),
    d = n(985018);
let _ = new l.A({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, o.pX)(c.BVt.ME),
                (0, r.P0)((0, i.o)(d.intl.formatToPlainString(d.t.wx7O3L, { username: e.username }), s.Ck.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, r.P0)((0, i.o)(d.intl.string(d.t.pqvKWA), s.Ck.FAILURE));
    },
    onTokenSet() {
        (0, a.closeModal)(u.ov), (0, a.closeModal)(u.Gl);
    },
});
