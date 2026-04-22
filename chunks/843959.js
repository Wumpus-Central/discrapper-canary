r.d(t, { A: () => a });
var n = r(355418);
let s = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class a extends n.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = parseInt(t[2]),
            n = parseInt(t[1]);
        return e.createParsingComponents().imply("day", 1).assign("month", n).assign("year", r);
    }
}
