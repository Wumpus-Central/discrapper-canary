"use strict";
n.d(t, {
    BV: () => l,
    C1: () => I,
    GW: () => E,
    IJ: () => s,
    Oz: () => y,
    Ps: () => _,
    Qi: () => C,
    Tn: () => h,
    XG: () => c,
    aj: () => T,
    al: () => A,
    b8: () => f,
    dD: () => p,
    lV: () => d,
    nN: () => S,
    o_: () => g,
    om: () => m,
    t_: () => a,
    tq: () => u,
    vj: () => o,
    w0: () => v,
});
var r = n(927813),
    i = n(652215);
let a = 100,
    s = 1e3,
    o = 100,
    l = "Guild Events Modal",
    u = "-1";
var c = (function (e) {
    return (
        (e[(e.SCHEDULED = 1)] = "SCHEDULED"),
        (e[(e.ACTIVE = 2)] = "ACTIVE"),
        (e[(e.COMPLETED = 3)] = "COMPLETED"),
        (e[(e.CANCELED = 4)] = "CANCELED"),
        e
    );
})({});
let d = new Set([3, 4]);
var _ = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.STAGE_INSTANCE = 1)] = "STAGE_INSTANCE"),
            (e[(e.VOICE = 2)] = "VOICE"),
            (e[(e.EXTERNAL = 3)] = "EXTERNAL"),
            (e[(e.PRIME_TIME = 4)] = "PRIME_TIME"),
            e
        );
    })({}),
    f = (function (e) {
        return (e[(e.EVENT_START = 1)] = "EVENT_START"), e;
    })({}),
    p = (function (e) {
        return (e[(e.PUBLIC = 1)] = "PUBLIC"), (e[(e.GUILD_ONLY = 2)] = "GUILD_ONLY"), e;
    })({});
let h = new Set([1, 4]),
    m = { 1: i.rbe.GUILD_STAGE_VOICE, 2: i.rbe.GUILD_VOICE },
    g = new Set([3]),
    E = new Set([1, 2]);
var A = (function (e) {
    return (e[(e.EVENT_INFO = 0)] = "EVENT_INFO"), (e[(e.RSVP_LIST = 1)] = "RSVP_LIST"), e;
})({});
let I = 100,
    T = 2 * r.A.Millis.DAY,
    y = 12 * r.A.Millis.HOUR,
    S = 4;
var v = (function (e) {
        return (e.NEW_EVENT = "Upcoming Event Notice"), (e.EVENT_STARTING_SOON = "Event Starting Soon Notice"), e;
    })({}),
    C = (function (e) {
        return (e[(e.UNINTERESTED = 0)] = "UNINTERESTED"), (e[(e.INTERESTED = 1)] = "INTERESTED"), e;
    })({});
