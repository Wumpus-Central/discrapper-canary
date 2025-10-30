n.d(t, { Z: () => o });
var r = n(654323),
    i = n(334633);
let a = RegExp("(?:\\(|\\\uFF08)(?<weekday>" + Object.keys(r.GR).join("|") + ")(?:\\)|\\\uFF09)", "i");
class o {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = t.groups.weekday,
            a = r.GR[n];
        return void 0 === a ? null : (0, i.Rv)(e.reference, a);
    }
}
