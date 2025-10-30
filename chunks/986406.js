n.d(t, { Z: () => i });
var r = n(19467);
class i extends r.V {
    mergeResults(e, t, n) {
        let r = t.clone();
        return (
            (r.text = t.text + e + n.text),
            r.start.assign("weekday", n.start.get("weekday")),
            r.end && r.end.assign("weekday", n.start.get("weekday")),
            r
        );
    }
    shouldMergeResults(e, t, n) {
        return (
            t.start.isCertain("day") &&
            n.start.isOnlyWeekdayComponent() &&
            !n.start.isCertain("hour") &&
            null !== e.match(/^[,、の]?\s*$/)
        );
    }
}
