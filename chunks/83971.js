n.d(t, { CU: () => u, F3: () => c, SU: () => A, fp: () => _, nU: () => h, qb: () => E });
var i = n(205327),
    r = n(541806),
    a = n(20805),
    s = n(583846),
    l = n(652215),
    o = n(539170),
    d = n(272984);
function c(e) {
    return (0, a.Tq)(e)
        ? e.extra.entries[0]?.media?.provider === i.X.SPOTIFY
        : !!(0, a.p6)(e) && e.extra.media.provider === i.X.SPOTIFY;
}
function u(e) {
    return !!(0, a.Lf)(e) && e.extra.application_id === o.ex;
}
function _(e, t) {
    let n = e.extra;
    return (
        null != n &&
        (("application_id" in t && t.application_id === n.application_id) ||
            ("game_name" in n ? t.name === n.game_name : "activity_name" in n && t.name === n.activity_name))
    );
}
function E(e, t) {
    return !!c(e) && (0, d.pH)(t.party?.id);
}
function A(e, t) {
    return !!((0, r.A)(t) && u(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(s.JM);
    return t.type === l.$pd.PLAYING
        ? n.filter(a.zD).find((e) => _(e, t))
        : t.type === l.$pd.LISTENING
          ? n.filter(a.Tq).find((e) => E(e, t))
          : t.type === l.$pd.WATCHING
            ? e.filter(a.Lf).find((e) => A(e, t))
            : void 0;
}
