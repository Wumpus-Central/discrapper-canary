n.d(t, {
    CU: () => d,
    F3: () => u,
    SU: () => _,
    fp: () => f,
    nU: () => h,
    qb: () => p,
}),
    n(896048);
var r = n(205327),
    i = n(541806),
    a = n(20805),
    s = n(583846),
    o = n(652215),
    l = n(272984),
    c = n(278086);
function u(e) {
    if ((0, a.Tq)(e)) {
        var t, n;
        return (null == (n = e.extra.entries[0]) || null == (t = n.media) ? void 0 : t.provider) === r.X.SPOTIFY;
    }
    return !!(0, a.p6)(e) && e.extra.media.provider === r.X.SPOTIFY;
}
function d(e) {
    return !!(0, a.Lf)(e) && e.extra.application_id === c.ex;
}
function f(e, t) {
    let n = e.extra;
    return (
        null != n &&
        (("application_id" in t && t.application_id === n.application_id) ||
            ("game_name" in n ? t.name === n.game_name : "activity_name" in n && t.name === n.activity_name))
    );
}
function p(e, t) {
    if (u(e)) {
        var n;
        return (0, l.pH)(null == (n = t.party) ? void 0 : n.id);
    }
    return !1;
}
function _(e, t) {
    return !!((0, i.A)(t) && d(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(s.JM);
    return t.type === o.$pd.PLAYING
        ? n.filter(a.zD).find((e) => f(e, t))
        : t.type === o.$pd.LISTENING
          ? n.filter(a.Tq).find((e) => p(e, t))
          : t.type === o.$pd.WATCHING
            ? e.filter(a.Lf).find((e) => _(e, t))
            : void 0;
}
