r.d(t, { JU: () => c, fh: () => o, pu: () => h, wE: () => u, wR: () => d });
var n = r(988665),
    s = r(822382),
    l = r(771650),
    a = r(652215),
    i = r(985018);
function o(e) {
    return (0, s._o)(e).map((e, t, r) =>
        a.l90.test(e.type) || (0, s.Zh)(e, r[t + 1]) ? e : new n.ou(e.getFullMatch(), n.dL),
    );
}
function u(e, t) {
    return { type: e, data: t };
}
function c(e) {
    switch (e) {
        case a.x2k.HISTORY:
            return i.intl.string(i.t.tSZd5c);
        case a.LWr.FILTER_FROM:
            return i.intl.string(i.t.catERA);
        case a.LWr.FILTER_MENTIONS:
            return i.intl.string(i.t["l3K4B/"]);
        case a.LWr.FILTER_IN:
            return i.intl.string(i.t.vHyCgl);
        case a.LWr.FILTER_HAS:
            return i.intl.string(i.t.IC7gHM);
        default:
            return "";
    }
}
function h(e) {
    let { modeType: t, result: r, group: n } = e,
        { text: i, channel: o, group: u } = r,
        c = i;
    if ((null != o && (c = (0, s.TZ)(c)), t === a.o$q.FILTER_ALL)) {
        let e = l.Ay[u ?? n];
        e?.key != null && e?.key !== "" && (c = `${e.key} ${c}`);
    }
    return c;
}
function d(e) {
    let { navId: t, index: r, selected: n } = e;
    return { id: `${t}-${r}`, role: "option", tabIndex: -1, "aria-selected": n };
}
