Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559),
    a = r(809511);
class i extends n.MergingRefiner {
    shouldMergeResults(e, t, r) {
        return (
            ((t.start.isOnlyDate() && r.start.isOnlyTime()) || (r.start.isOnlyDate() && t.start.isOnlyTime())) &&
            null != e.match(this.patternBetween())
        );
    }
    mergeResults(e, t, r) {
        let n = t.start.isOnlyDate() ? (0, a.mergeDateTimeResult)(t, r) : (0, a.mergeDateTimeResult)(r, t);
        return (n.index = t.index), (n.text = t.text + e + r.text), n;
    }
}
t.default = i;
