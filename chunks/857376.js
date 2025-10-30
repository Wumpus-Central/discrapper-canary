n.d(t, { Z: () => l });
var r = n(53851),
    i = n(86465),
    a = n(727916);
let o = RegExp(
        `(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${r.km})(?=\\W|$)`,
        "i",
    ),
    s = RegExp(
        `(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${r.km})(?=\\W|$)`,
        "i",
    );
class l extends a.Z {
    innerPattern(e) {
        return e.option.forwardDate ? s : o;
    }
    innerExtract(e, t) {
        let n = (0, r.RA)(t[1]);
        return i.L.createRelativeFromReference(e.reference, n);
    }
}
