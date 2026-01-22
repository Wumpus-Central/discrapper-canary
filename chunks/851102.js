n.d(t, { A: () => s });
var r = n(501459),
    i = n(1673);
let a = RegExp("(?:\\(|\\\uFF08)(?<weekday>" + Object.keys(r.tS).join("|") + ")(?:\\)|\\\uFF09)", "i");
class s {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = t.groups.weekday,
            a = r.tS[n];
        return void 0 === a ? null : (0, i.Y5)(e.reference, a);
    }
}
