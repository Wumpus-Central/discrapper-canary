var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(927813),
    u = n(652215),
    _ =
        (((i = {})[(i.SCHEDULED = 1)] = "SCHEDULED"),
        (i[(i.ACTIVE = 2)] = "ACTIVE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        i);
let E = new Set([3, 4]);
var A =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.STAGE_INSTANCE = 1)] = "STAGE_INSTANCE"),
        (r[(r.VOICE = 2)] = "VOICE"),
        (r[(r.EXTERNAL = 3)] = "EXTERNAL"),
        (r[(r.PRIME_TIME = 4)] = "PRIME_TIME"),
        r),
    h = (((a = {})[(a.EVENT_START = 1)] = "EVENT_START"), a),
    f = (((s = {})[(s.PUBLIC = 1)] = "PUBLIC"), (s[(s.GUILD_ONLY = 2)] = "GUILD_ONLY"), s);
let I = new Set([1, 4]),
    p = { 1: u.rbe.GUILD_STAGE_VOICE, 2: u.rbe.GUILD_VOICE },
    m = new Set([3]),
    g = new Set([1, 2]);
var T = (((l = {})[(l.EVENT_INFO = 0)] = "EVENT_INFO"), (l[(l.RSVP_LIST = 1)] = "RSVP_LIST"), l);
let S = 2 * c.A.Millis.DAY,
    N = 12 * c.A.Millis.HOUR;
var C = (((o = {}).NEW_EVENT = "Upcoming Event Notice"), (o.EVENT_STARTING_SOON = "Event Starting Soon Notice"), o),
    O = (((d = {})[(d.UNINTERESTED = 0)] = "UNINTERESTED"), (d[(d.INTERESTED = 1)] = "INTERESTED"), d);
n.d(
    t,
    {},
    {
        BV: "Guild Events Modal",
        GW: g,
        Oz: N,
        Ps: A,
        Qi: O,
        Tn: I,
        XG: _,
        aj: S,
        al: T,
        b8: h,
        dD: f,
        lV: E,
        o_: m,
        om: p,
        w0: C,
    },
);
