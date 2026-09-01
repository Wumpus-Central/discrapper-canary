Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385),
    a = r(801092);
class i extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(a.NUMBER).join("") +
                "]{4}|[" +
                Object.keys(a.NUMBER).join("") +
                "]{2})?(?:\\s*)(?:\u5E74)?(?:[\\s|,|\uFF0C]*)(\\d{1,2}|[" +
                Object.keys(a.NUMBER).join("") +
                "]{1,3})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(a.NUMBER).join("") +
                "]{1,3})?(?:\\s*)(?:\u65E5|\u53F7)?",
        );
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[2]);
        if ((isNaN(n) && (n = (0, a.zhStringToNumber)(t[2])), r.start.assign("month", n), t[3])) {
            let e = parseInt(t[3]);
            isNaN(e) && (e = (0, a.zhStringToNumber)(t[3])), r.start.assign("day", e);
        } else r.start.imply("day", e.refDate.getDate());
        if (t[1]) {
            let e = parseInt(t[1]);
            isNaN(e) && (e = (0, a.zhStringToYear)(t[1])), r.start.assign("year", e);
        } else r.start.imply("year", e.refDate.getFullYear());
        return r;
    }
}
t.default = i;
