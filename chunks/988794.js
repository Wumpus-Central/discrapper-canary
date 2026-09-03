n.d(t, {
    BV: () => h,
    C1: () => L,
    GW: () => O,
    IJ: () => E,
    Oz: () => D,
    Ps: () => T,
    Qi: () => M,
    Tn: () => S,
    XG: () => f,
    aj: () => y,
    al: () => R,
    b8: () => m,
    dD: () => g,
    lV: () => p,
    nN: () => v,
    o_: () => C,
    om: () => N,
    t_: () => _,
    tq: () => I,
    vj: () => A,
    w0: () => b,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(927813),
    u = n(652215);
let _ = 100,
    E = 1e3,
    A = 100,
    h = "Guild Events Modal",
    I = "-1";
var f =
    (((i = {})[(i.SCHEDULED = 1)] = "SCHEDULED"),
    (i[(i.ACTIVE = 2)] = "ACTIVE"),
    (i[(i.COMPLETED = 3)] = "COMPLETED"),
    (i[(i.CANCELED = 4)] = "CANCELED"),
    i);
let p = new Set([3, 4]);
var T =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.STAGE_INSTANCE = 1)] = "STAGE_INSTANCE"),
        (r[(r.VOICE = 2)] = "VOICE"),
        (r[(r.EXTERNAL = 3)] = "EXTERNAL"),
        (r[(r.PRIME_TIME = 4)] = "PRIME_TIME"),
        r),
    m = (((a = {})[(a.EVENT_START = 1)] = "EVENT_START"), a),
    g = (((s = {})[(s.PUBLIC = 1)] = "PUBLIC"), (s[(s.GUILD_ONLY = 2)] = "GUILD_ONLY"), s);
let S = new Set([1, 4]),
    N = { 1: u.rbe.GUILD_STAGE_VOICE, 2: u.rbe.GUILD_VOICE },
    C = new Set([3]),
    O = new Set([1, 2]);
var R = (((l = {})[(l.EVENT_INFO = 0)] = "EVENT_INFO"), (l[(l.RSVP_LIST = 1)] = "RSVP_LIST"), l);
let L = 100,
    y = 2 * c.A.Millis.DAY,
    D = 12 * c.A.Millis.HOUR,
    v = 4;
var b = (((o = {}).NEW_EVENT = "Upcoming Event Notice"), (o.EVENT_STARTING_SOON = "Event Starting Soon Notice"), o),
    M = (((d = {})[(d.UNINTERESTED = 0)] = "UNINTERESTED"), (d[(d.INTERESTED = 1)] = "INTERESTED"), d);
