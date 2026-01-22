n.d(t, {
    Bj: () => h,
    C4: () => A,
    b5: () => _,
    et: () => f,
    h_: () => x,
    z2: () => E,
}),
    n(747238),
    n(812715),
    n(896048),
    n(801541);
var r = n(989349),
    i = n.n(r),
    s = n(889137),
    l = n(486020),
    a = n(661191),
    o = n(240248),
    c = n(963334),
    u = n(789622),
    d = n(985018);

function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.Ay.getUserAvatarURL(
        {
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000",
        },
        t,
        80,
    );
}

function f(e) {
    let t = (0, o.sS)(e.username).replace(u.uA, "").replace(u.SY, ".").toLowerCase();
    return "".concat(t).concat(e.discriminator).substring(0, 32);
}
let p = ["@", "#", ":"],
    g = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
    m = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function A(e) {
    var t;
    let n = e.username.toLowerCase();
    if (
        ((t = u.RS),
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

function x(e) {
    return e.toLowerCase().replace(/\s/g, "").replace("@", "");
}

function _(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format("MMM DD, YYYY");
    } catch (e) {}
    return null;
}

function E(e) {
    return (0, s.YW)(e)
        .with(
            {
                rateLimited: !0,
            },
            () => ({
                type: c.q.RATE_LIMIT,
                message: d.intl.string(d.t.T15lqn),
            }),
        )
        .with(
            {
                error: s.P.not(s.P.nullish),
            },
            (e) => {
                let { error: t } = e;
                return {
                    type: c.q.ERROR,
                    message: t,
                };
            },
        )
        .with(
            {
                taken: !1,
            },
            () => ({
                type: c.q.AVAILABLE,
                message: d.intl.string(d.t.PgfBSx),
            }),
        )
        .with(
            {
                taken: !0,
            },
            () => ({
                type: c.q.ERROR,
                message: d.intl.string(d.t.mCrAUb),
            }),
        )
        .with(
            {
                error: s.P.nullish,
            },
            () => ({
                type: c.q.INTERNAL_ERROR,
                message: "",
            }),
        )
        .otherwise(() => void 0);
}
