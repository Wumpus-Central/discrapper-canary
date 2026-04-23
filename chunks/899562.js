r.d(t, { A: () => a });
var n = r(355418),
    s = r(725198);
class a extends n.c {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(s.uk).join("") +
                "]{4}|[" +
                Object.keys(s.uk).join("") +
                "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[" +
                Object.keys(s.uk).join("") +
                "]{1,2})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(s.uk).join("") +
                "]{1,2})?(?:\\s*)(?:日|號)?",
        );
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[2]);
        if ((isNaN(n) && (n = (0, s.CT)(t[2])), r.start.assign("month", n), t[3])) {
            let e = parseInt(t[3]);
            isNaN(e) && (e = (0, s.CT)(t[3])), r.start.assign("day", e);
        } else r.start.imply("day", e.refDate.getDate());
        if (t[1]) {
            let e = parseInt(t[1]);
            isNaN(e) && (e = (0, s.M0)(t[1])), r.start.assign("year", e);
        } else r.start.imply("year", e.refDate.getFullYear());
        return r;
    }
}
