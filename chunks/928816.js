n.d(t, { Z: () => a });
var r = n(19467),
    i = n(483605);
class a extends r.V {
    shouldMergeResults(e, t, n) {
        return (
            ((t.start.isOnlyDate() && n.start.isOnlyTime()) || (n.start.isOnlyDate() && t.start.isOnlyTime())) &&
            null != e.match(this.patternBetween())
        );
    }
    mergeResults(e, t, n) {
        let r = t.start.isOnlyDate() ? (0, i.i)(t, n) : (0, i.i)(n, t);
        return (r.index = t.index), (r.text = t.text + e + n.text), r;
    }
}
