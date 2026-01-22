n.d(t, {
    A: () => o,
});
var r = n(355418);
let i = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"),
    a = 1,
    s = 2;
class o extends r.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let n = parseInt(t[s]),
            r = parseInt(t[a]);
        return e.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n);
    }
}
