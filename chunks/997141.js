t.d(n, { j: () => o });
var a = t(849324),
    i = t(17928),
    r = t(540999);
let l = a.w.ALL & ~a.w.DEV_LINKS,
    u = a.w.ALL,
    d = a.w.QUOTES;
function o(e) {
    let { formatInline: n } = e,
        t = (0, i.bG)([r.A], () => r.A.isDeveloper, []) ? u : l;
    return n ? t & ~d : t;
}
