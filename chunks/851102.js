r.d(t, { A: () => i });
var n = r(501459),
    s = r(1673);
let a = RegExp("(?:\\(|\\（)(?<weekday>" + Object.keys(n.tS).join("|") + ")(?:\\)|\\）)", "i");
class i {
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = t.groups.weekday,
            a = n.tS[r];
        return void 0 === a ? null : (0, s.Y5)(e.reference, a);
    }
}
