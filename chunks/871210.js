"use strict";
n.d(t, { Bj: () => h, C4: () => f, b5: () => E, et: () => _, h_: () => A, z2: () => x }), n(801541);
var i = n(989349),
    s = n.n(i),
    r = n(889137),
    l = n(486020),
    a = n(661191),
    o = n(240248),
    c = n(963334),
    d = n(789622),
    u = n(985018);
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" }, t, 80);
}
function _(e) {
    let t = (0, o.sS)(e.username).replace(d.uA, "").replace(d.SY, ".").toLowerCase();
    return `${t}${e.discriminator}`.substring(0, 32);
}
let p = ["@", "#", ":"],
    g = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
    m = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];
function f(e) {
    var t;
    let n = e.username.toLowerCase();
    if (
        ((t = d.RS),
        n
            .split("")
            .filter((e) => !t.includes(e.charCodeAt(0)))
            .join("")).length < 2
    )
        return !0;
    for (let e of p) if (n.includes(e)) return !0;
    for (let e of m) if (n === e.toLowerCase()) return !0;
    for (let e of g) if (n.includes(e.toLowerCase())) return !0;
    return !1;
}
function A(e) {
    return e.toLowerCase().replace(/\s/g, "").replace("@", "");
}
function E(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return s()(new Date(t)).format("MMM DD, YYYY");
    } catch (e) {}
    return null;
}
function x(e) {
    return (0, r.YW)(e)
        .with({ rateLimited: !0 }, () => ({ type: c.q.RATE_LIMIT, message: u.intl.string(u.t.T15lqn) }))
        .with({ error: r.P.not(r.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: c.q.ERROR, message: t };
        })
        .with({ taken: !1 }, () => ({ type: c.q.AVAILABLE, message: u.intl.string(u.t.PgfBSx) }))
        .with({ taken: !0 }, () => ({ type: c.q.ERROR, message: u.intl.string(u.t.mCrAUb) }))
        .with({ error: r.P.nullish }, () => ({ type: c.q.INTERNAL_ERROR, message: "" }))
        .otherwise(() => void 0);
}
