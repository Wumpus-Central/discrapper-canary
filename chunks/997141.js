a.d(n, { j: () => u });
var t = a(849324),
    l = a(17928),
    i = a(540999);
let r = t.w.ALL & ~t.w.DEV_LINKS,
    d = t.w.ALL,
    o = t.w.QUOTES;
function u(e) {
    let { formatInline: n } = e,
        a = (0, l.bG)([i.A], () => i.A.isDeveloper, []) ? d : r;
    return n ? a & ~o : a;
}
