t.d(n, { j: () => o });
var a = t(28640),
    i = t(17928),
    l = t(540999);
let r = a.w4.ALL & ~a.w4.DEV_LINKS,
    d = a.w4.ALL,
    u = a.w4.QUOTES;
function o(e) {
    let { formatInline: n } = e,
        t = (0, i.bG)([l.A], () => l.A.isDeveloper, []) ? d : r;
    return n ? t & ~u : t;
}
