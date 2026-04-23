n.d(t, { A: () => i });
var s = n(311907),
    l = n(320501),
    a = n(287809);
let i = (e) =>
    (0, s.bG)([l.A, a.default], () => {
        if (null == e) return !1;
        let t = a.default.getCurrentUser();
        return null != l.A.getMessages(e).findNewest((e) => e.author.id === t?.id);
    });
