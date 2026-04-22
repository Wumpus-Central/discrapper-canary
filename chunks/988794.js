"use strict";
n.d(t, {
    BV: () => h,
    C1: () => v,
    GW: () => O,
    IJ: () => f,
    Oz: () => b,
    Ps: () => A,
    Qi: () => w,
    Tn: () => S,
    XG: () => m,
    aj: () => C,
    al: () => R,
    b8: () => I,
    dD: () => T,
    lV: () => g,
    nN: () => D,
    o_: () => N,
    om: () => y,
    t_: () => _,
    tq: () => p,
    vj: () => E,
    w0: () => L,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d = n(927813),
    c = n(652215);
let _ = 100,
    f = 1e3,
    E = 100,
    h = "Guild Events Modal",
    p = "-1";
var m =
    (((r = {})[(r.SCHEDULED = 1)] = "SCHEDULED"),
    (r[(r.ACTIVE = 2)] = "ACTIVE"),
    (r[(r.COMPLETED = 3)] = "COMPLETED"),
    (r[(r.CANCELED = 4)] = "CANCELED"),
    r);
let g = new Set([3, 4]);
var A =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.STAGE_INSTANCE = 1)] = "STAGE_INSTANCE"),
        (i[(i.VOICE = 2)] = "VOICE"),
        (i[(i.EXTERNAL = 3)] = "EXTERNAL"),
        (i[(i.PRIME_TIME = 4)] = "PRIME_TIME"),
        i),
    I = (((s = {})[(s.EVENT_START = 1)] = "EVENT_START"), s),
    T = (((a = {})[(a.PUBLIC = 1)] = "PUBLIC"), (a[(a.GUILD_ONLY = 2)] = "GUILD_ONLY"), a);
let S = new Set([1, 4]),
    y = { 1: c.rbe.GUILD_STAGE_VOICE, 2: c.rbe.GUILD_VOICE },
    N = new Set([3]),
    O = new Set([1, 2]);
var R = (((o = {})[(o.EVENT_INFO = 0)] = "EVENT_INFO"), (o[(o.RSVP_LIST = 1)] = "RSVP_LIST"), o);
let v = 100,
    C = 2 * d.A.Millis.DAY,
    b = 12 * d.A.Millis.HOUR,
    D = 4;
var L = (((l = {}).NEW_EVENT = "Upcoming Event Notice"), (l.EVENT_STARTING_SOON = "Event Starting Soon Notice"), l),
    w = (((u = {})[(u.UNINTERESTED = 0)] = "UNINTERESTED"), (u[(u.INTERESTED = 1)] = "INTERESTED"), u);
