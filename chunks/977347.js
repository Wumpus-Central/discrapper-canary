n.d(t, {
    D: () => i,
}),
    n(896048);
var r = n(311907),
    l = n(320501);

function i(e, t) {
    return (0, r.bG)([l.A], () => {
        if (null == t) return;
        let n = l.A.getMessages(e),
            r = n.findOldest((e) => e.author.id === t);
        if (null != r) {
            for (let e of n.toArray()) {
                if (e.author.id !== t) break;
                e.content.length > (null == r ? void 0 : r.content.length) && (r = e);
            }
            return r;
        }
    }, [e, t]);
}
