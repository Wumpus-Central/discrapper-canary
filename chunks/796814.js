n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(80932),
    a = n(110924),
    s = n(471613),
    o = n(889564);
let c = [];
function d(e) {
    let { revision: t, emojis: n } = (0, r.cj)([s.Z], () => ({
            revision: s.Z.getEmojiRevision(e),
            emojis: s.Z.getEmojis(e)
        })),
        d = (0, a.Z)(t);
    return (
        i.useEffect(() => {
            (0, l.OQ)(e);
        }, [e]),
        i.useEffect(() => {
            null != d && d < t && (0, l.OQ)(e);
        }, [t, d, e]),
        i.useMemo(() => (null == n ? c : n.filter((t) => (0, o.Kt)(t, e))), [n, e])
    );
}
