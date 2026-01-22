let r;
n.d(t, { A: () => w }), n(896048), n(264879);
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(323073),
    c = n(315982),
    u = n(202384),
    d = n(709977),
    p = n(14509),
    f = n(894778),
    h = n(447696),
    A = n(684407),
    g = n(919638),
    m = n(71393),
    b = n(967198),
    _ = n(287809),
    E = n(403362),
    O = n(723702),
    y = n(942614),
    I = n(426620),
    v = n(771016),
    S = n(994277),
    C = n(652215);
n(436317);
var N = n(315290);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x() {
    null != r && (0, l.OoC)(r);
}
class P extends s.A {
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.h.subscribe("LOGOUT", x);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.h.unsubscribe("LOGOUT", x);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = I.A.getType();
        if (null == a) return;
        switch (a) {
            case v.zY.INVITE_UNCLAIMED:
                f.A.flowStart(N.do.INVITE, N.ju.NUF_STARTED);
                break;
            case v.zY.ORGANIC_REGISTERED:
                f.A.flowStart(N.do.ORGANIC, N.ju.NUF_STARTED);
                break;
            case v.zY.MARKETING_UNCLAIMED:
                f.A.flowStart(N.do.ORGANIC_MARKETING, N.ju.NUF_STARTED);
        }
        let s = !1,
            x = b.A.getGuildId();
        if (a === v.zY.INVITE_UNCLAIMED) {
            let e = m.A.getGuild(x);
            null != e && (0, d.Qd)(e) && ((s = !0), (0, h.Fy)(e.id));
        }
        let P = () => 0 === g.A.totalGuilds && !O.isPlatformEmbedded,
            w = o.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let t = (e) => {
                        switch (e) {
                            case S.i.AGE_GATE:
                                f.A.flowStep(N.do.ANY, N.ju.AGE_GATE);
                                break;
                            case S.i.CHOOSE_TEMPLATE:
                                f.A.flowStep(N.do.ANY, N.jC.GUILD_TEMPLATES);
                                break;
                            case S.i.CUSTOMIZE_GUILD:
                                f.A.flowStep(N.do.ANY, N.jC.GUILD_CREATE);
                                break;
                            case S.i.CHANNEL_PROMPT:
                                f.A.flowStep(N.do.ANY, N.jC.CHANNEL_PROMPT);
                                break;
                            case S.i.JOIN_GUILD:
                                f.A.flowStep(N.do.ANY, N.jC.JOIN_GUILD);
                                break;
                            case S.i.CREATION_INTENT:
                                f.A.flowStep(N.do.ANY, N.jC.CREATION_INTENT);
                                break;
                            case S.i.COMPLETE:
                                f.A.flowStep(N.do.ANY, N.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                E.xb(e);
                        }
                    };
                    r = await (0, l.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("86746"), n.e("81890")]).then(
                                n.bind(n, 218318),
                            );
                            return (n) => (0, i.jsx)(e, j(T({}, n), { onSlideChange: t }));
                        },
                        {
                            onCloseRequest: C.tEg,
                            onCloseCallback: e,
                            modalKey: r,
                        },
                    );
                },
                predicate: () => P() && !0,
            },
            {
                key: "New User Age Gate",
                open: c.v,
                predicate: () => w && !P() && !0,
            },
            {
                key: "Claim Account Modal",
                open: (e) => c.R(O.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return (
                        !s &&
                        null != _.default.getCurrentUser() &&
                        !(null == (e = _.default.getCurrentUser()) ? void 0 : e.isClaimed()) &&
                        !(0, p._9)()
                    );
                },
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, u.Ze)(x, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return s && !(null == (e = _.default.getCurrentUser()) ? void 0 : e.isClaimed()) && !0;
                },
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, l.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (t) => (0, i.jsx)(e, j(T({}, t), { guildId: x }));
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != x && null != A.A.get(x) && A.A.get(x) !== A.E,
            },
        ]),
            (t = () => {
                y.D(), f.A.flowStep(N.do.ANY, N.ju.NUF_COMPLETE, !0);
            }),
            [...e].reverse().forEach((e) => {
                let n = t;
                t = () => {
                    e.predicate() ? e.open(n) : n();
                };
            }),
            t();
    }
}
let w = new P();
