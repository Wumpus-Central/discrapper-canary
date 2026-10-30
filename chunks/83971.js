n.d(t, { CU: () => u, F3: () => c, SU: () => A, fp: () => _, nU: () => h, qb: () => E });
var i = n(350835),
    r = n(205327),
    a = n(541806),
    s = n(20805),
    l = n(583846),
    o = n(539170),
    d = n(272984);
function c(e) {
    return (0, s.Tq)(e)
        ? e.extra.entries[0]?.media?.provider === r.X.SPOTIFY
        : !!(0, s.p6)(e) && e.extra.media.provider === r.X.SPOTIFY;
}
function u(e) {
    return !!(0, s.Lf)(e) && e.extra.application_id === o.ex;
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
    return !!((0, a.A)(t) && u(e)) && e.extra.media_title === t.details;
}
function h(e, t) {
    let n = e.filter(l.JM);
    return t.type === i.$.PLAYING
        ? n.filter(s.zD).find((e) => _(e, t))
        : t.type === i.$.LISTENING
          ? n.filter(s.Tq).find((e) => E(e, t))
          : t.type === i.$.WATCHING
            ? e.filter(s.Lf).find((e) => A(e, t))
            : void 0;
}
