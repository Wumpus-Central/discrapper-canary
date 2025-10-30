n.d(t, { Z: () => l });
var r = n(727916),
    i = n(627459);
let a = 1,
    o = 2,
    s = 3;
class l extends r.Z {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(i.Wu).join("") +
                "]{4}|[" +
                Object.keys(i.Wu).join("") +
                "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|\uFF0C]*)(\\d{1,2}|[" +
                Object.keys(i.Wu).join("") +
                "]{1,3})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(i.Wu).join("") +
                "]{1,3})?(?:\\s*)(?:日|号)?",
        );
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = parseInt(t[o]);
        if ((isNaN(r) && (r = (0, i.zU)(t[o])), n.start.assign("month", r), t[s])) {
            let e = parseInt(t[s]);
            isNaN(e) && (e = (0, i.zU)(t[s])), n.start.assign("day", e);
        } else n.start.imply("day", e.refDate.getDate());
        if (t[a]) {
            let e = parseInt(t[a]);
            isNaN(e) && (e = (0, i.NL)(t[a])), n.start.assign("year", e);
        } else n.start.imply("year", e.refDate.getFullYear());
        return n;
    }
}
