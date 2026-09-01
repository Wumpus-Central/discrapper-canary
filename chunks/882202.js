Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(535490),
    a = r(574253),
    i =
        /(?:(?:([\u540c\u4eca\u672c])|((\u662d\u548c|\u5e73\u6210|\u4ee4\u548c)?([0-9\uff10-\uff19]{1,4}|\u5143)))\u5e74\s*)?([0-9\uff10-\uff19]{1,2})\u6708\s*([0-9\uff10-\uff19]{1,2})\u65e5/i;
t.default = class {
    pattern() {
        return i;
    }
    extract(e, t) {
        let r = parseInt((0, n.toHankaku)(t[5])),
            i = parseInt((0, n.toHankaku)(t[6])),
            s = e.createParsingComponents({ day: i, month: r });
        if (
            (t[1] &&
                t[1].match("\u540C|\u4ECA|\u672C") &&
                s.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()),
            t[2])
        ) {
            let e = t[4],
                r = "\u5143" == e ? 1 : parseInt((0, n.toHankaku)(e));
            "\u4EE4\u548C" == t[3]
                ? (r += 2018)
                : "\u5E73\u6210" == t[3]
                  ? (r += 1988)
                  : "\u662D\u548C" == t[3] && (r += 1925),
                s.assign("year", r);
        } else {
            let t = (0, a.findYearClosestToRef)(e.refDate, i, r);
            s.imply("year", t);
        }
        return s;
    }
};
