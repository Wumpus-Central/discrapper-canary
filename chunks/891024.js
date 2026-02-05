n.d(t, { A: () => l });
var i = n(311907),
    r = n(320501),
    a = n(287809);
let l = (e) =>
    (0, i.bG)([r.A, a.default], () => {
        if (null == e) return !1;
        let t = a.default.getCurrentUser();
        return null != r.A.getMessages(e).findNewest((e) => e.author.id === t?.id);
    });
