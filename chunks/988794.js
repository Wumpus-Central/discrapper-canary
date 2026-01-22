n.d(t, {
    BV: () => l,
    C1: () => y,
    GW: () => E,
    IJ: () => s,
    Oz: () => A,
    Ps: () => f,
    Qi: () => I,
    Tn: () => h,
    XG: () => u,
    aj: () => O,
    al: () => b,
    b8: () => p,
    dD: () => _,
    lV: () => d,
    nN: () => v,
    o_: () => g,
    om: () => m,
    t_: () => a,
    tq: () => c,
    vj: () => o,
    w0: () => S,
}),
    n(896048);
var r = n(927813),
    i = n(652215);
let a = 100,
    s = 1e3,
    o = 100,
    l = "Guild Events Modal",
    c = "-1";
var u = (function (e) {
    return (
        (e[(e.SCHEDULED = 1)] = "SCHEDULED"),
        (e[(e.ACTIVE = 2)] = "ACTIVE"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CANCELED = 4)] = "CANCELED"),
        e
    );
})({});
let d = new Set([3, 4]);
var f = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.STAGE_INSTANCE = 1)] = "STAGE_INSTANCE"),
            (e[(e.VOICE = 2)] = "VOICE"),
            (e[(e.EXTERNAL = 3)] = "EXTERNAL"),
            (e[(e.PRIME_TIME = 4)] = "PRIME_TIME"),
            e
        );
    })({}),
    p = (function (e) {
        return (e[(e.EVENT_START = 1)] = "EVENT_START"), e;
    })({}),
    _ = (function (e) {
        return (e[(e.PUBLIC = 1)] = "PUBLIC"), (e[(e.GUILD_ONLY = 2)] = "GUILD_ONLY"), e;
    })({});
let h = new Set([1, 4]),
    m = {
        1: i.rbe.GUILD_STAGE_VOICE,
        2: i.rbe.GUILD_VOICE,
    },
    g = new Set([3]),
    E = new Set([1, 2]);
var b = (function (e) {
    return (e[(e.EVENT_INFO = 0)] = "EVENT_INFO"), (e[(e.RSVP_LIST = 1)] = "RSVP_LIST"), e;
})({});
let y = 100,
    O = 2 * r.A.Millis.DAY,
    A = 12 * r.A.Millis.HOUR,
    v = 4;
var S = (function (e) {
        return (e.NEW_EVENT = "Upcoming Event Notice"), (e.EVENT_STARTING_SOON = "Event Starting Soon Notice"), e;
    })({}),
    I = (function (e) {
        return (e[(e.UNINTERESTED = 0)] = "UNINTERESTED"), (e[(e.INTERESTED = 1)] = "INTERESTED"), e;
    })({});
