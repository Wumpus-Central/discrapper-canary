n.d(t, {
    JU: () => u,
    fh: () => l,
    pu: () => d,
    wE: () => c,
    wR: () => f,
}),
    n(747238);
var r = n(988665),
    i = n(822382),
    a = n(771650),
    s = n(652215),
    o = n(985018);
function l(e) {
    return (0, i._o)(e).map((e, t, n) =>
        s.l90.test(e.type) || (0, i.Zh)(e, n[t + 1]) ? e : new r.ou(e.getFullMatch(), r.dL),
    );
}
function c(e, t) {
    return {
        type: e,
        data: t,
    };
}
function u(e) {
    switch (e) {
        case s.x2k.HISTORY:
            return o.intl.string(o.t.tSZd5c);
        case s.LWr.FILTER_FROM:
            return o.intl.string(o.t.catERA);
        case s.LWr.FILTER_MENTIONS:
            return o.intl.string(o.t["l3K4B/"]);
        case s.LWr.FILTER_IN:
            return o.intl.string(o.t.vHyCgl);
        case s.LWr.FILTER_HAS:
            return o.intl.string(o.t.IC7gHM);
        default:
            return "";
    }
}
function d(e) {
    let { modeType: t, result: n, group: r } = e,
        { text: o, channel: l, group: c } = n,
        u = o;
    null != l && (u = (0, i.TZ)(u));
    let d = null != c ? c : r;
    if (t === s.o$q.FILTER_ALL) {
        let e = a.Ay[d];
        (null == e ? void 0 : e.key) != null &&
            (null == e ? void 0 : e.key) !== "" &&
            (u = "".concat(e.key, " ").concat(u));
    }
    return u;
}
function f(e) {
    let { navId: t, index: n, selected: r } = e;
    return {
        id: "".concat(t, "-").concat(n),
        role: "option",
        tabIndex: -1,
        "aria-selected": r,
    };
}
