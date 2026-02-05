"use strict";
n.d(t, { CU: () => d, F3: () => c, SU: () => p, fp: () => _, nU: () => h, qb: () => f });
var r = n(205327),
    i = n(541806),
    a = n(20805),
    s = n(583846),
    o = n(652215),
    l = n(272984),
    u = n(278086);
function c(e) {
    return (0, a.Tq)(e)
        ? e.extra.entries[0]?.media?.provider === r.X.SPOTIFY
        : !!(0, a.p6)(e) && e.extra.media.provider === r.X.SPOTIFY;
}
function d(e) {
    return !!(0, a.Lf)(e) && e.extra.application_id === u.ex;
}
function _(e, t) {
    let n = e.extra;
    return (
        null != n &&
        (("application_id" in t && t.application_id === n.application_id) ||
            ("game_name" in n ? t.name === n.game_name : "activity_name" in n && t.name === n.activity_name))
    );
}
function f(e, t) {
    return !!c(e) && (0, l.pH)(t.party?.id);
}
function p(e, t) {
    return !!((0, i.A)(t) && d(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(s.JM);
    return t.type === o.$pd.PLAYING
        ? n.filter(a.zD).find((e) => _(e, t))
        : t.type === o.$pd.LISTENING
          ? n.filter(a.Tq).find((e) => f(e, t))
          : t.type === o.$pd.WATCHING
            ? e.filter(a.Lf).find((e) => p(e, t))
            : void 0;
}
