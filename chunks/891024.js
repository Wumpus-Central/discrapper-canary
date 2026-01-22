n.d(t, { A: () => a });
var r = n(311907),
    i = n(320501),
    l = n(287809);
let a = (e) =>
    (0, r.bG)([i.A, l.default], () => {
        if (null == e) return !1;
        let t = l.default.getCurrentUser();
        return null != i.A.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    });
