let i;
n.d(t, { A: () => L });
var r = n(627968);
n(64700);
var a = n(397927),
    l = n(73153),
    s = n(272355),
    o = n(323073),
    d = n(315982),
    c = n(202384),
    u = n(709977),
    A = n(14509),
    h = n(894778),
    _ = n(447696),
    m = n(684407),
    p = n(919638),
    g = n(71393),
    E = n(967198),
    I = n(287809),
    f = n(403362),
    C = n(723702),
    T = n(942614),
    N = n(426620),
    S = n(771016),
    v = n(994277),
    x = n(652215);
n(436317);
var y = n(315290);
function b() {
    null != i && (0, a.OoC)(i);
}
class O extends s.A {
    _initialize() {
        l.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.subscribe("LOGOUT", b);
    }
    _terminate() {
        l.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.unsubscribe("LOGOUT", b);
    }
    handleConnectionOpen() {
        var e;
        let t,
            l = N.A.getType();
        if (null == l) return;
        switch (l) {
            case S.zY.INVITE_UNCLAIMED:
                h.A.flowStart(y.do.INVITE, y.ju.NUF_STARTED);
                break;
            case S.zY.ORGANIC_REGISTERED:
                h.A.flowStart(y.do.ORGANIC, y.ju.NUF_STARTED);
                break;
            case S.zY.MARKETING_UNCLAIMED:
                h.A.flowStart(y.do.ORGANIC_MARKETING, y.ju.NUF_STARTED);
        }
        let s = !1,
            b = E.A.getGuildId();
        if (l === S.zY.INVITE_UNCLAIMED) {
            let e = g.A.getGuild(b);
            null != e && (0, u.Qd)(e) && ((s = !0), (0, _.Fy)(e.id));
        }
        let O = () => 0 === p.A.totalGuilds && !C.isPlatformEmbedded,
            L = o.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let t = (e) => {
                        switch (e) {
                            case v.i.AGE_GATE:
                                h.A.flowStep(y.do.ANY, y.ju.AGE_GATE);
                                break;
                            case v.i.CHOOSE_TEMPLATE:
                                h.A.flowStep(y.do.ANY, y.jC.GUILD_TEMPLATES);
                                break;
                            case v.i.CUSTOMIZE_GUILD:
                                h.A.flowStep(y.do.ANY, y.jC.GUILD_CREATE);
                                break;
                            case v.i.CHANNEL_PROMPT:
                                h.A.flowStep(y.do.ANY, y.jC.CHANNEL_PROMPT);
                                break;
                            case v.i.JOIN_GUILD:
                                h.A.flowStep(y.do.ANY, y.jC.JOIN_GUILD);
                                break;
                            case v.i.CREATION_INTENT:
                                h.A.flowStep(y.do.ANY, y.jC.CREATION_INTENT);
                                break;
                            case v.i.COMPLETE:
                                h.A.flowStep(y.do.ANY, y.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                f.xb(e);
                        }
                    };
                    i = await (0, a.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("86746"), n.e("72074")]).then(
                                n.bind(n, 218318),
                            );
                            return (n) => (0, r.jsx)(e, { ...n, onSlideChange: t });
                        },
                        { onCloseRequest: x.tEg, onCloseCallback: e, modalKey: i },
                    );
                },
                predicate: () => O() && !0,
            },
            { key: "New User Age Gate", open: d.v, predicate: () => L && !O() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => d.R(C.isPlatformEmbedded, e),
                predicate: () =>
                    !s &&
                    null != I.default.getCurrentUser() &&
                    !I.default.getCurrentUser()?.isClaimed() &&
                    !(0, A._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, c.Ze)(b, e ?? void 0),
                predicate: () => s && !I.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, a.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (t) => (0, r.jsx)(e, { ...t, guildId: b });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != b && null != m.A.get(b) && m.A.get(b) !== m.E,
            },
        ]),
            (t = () => {
                T.D(), h.A.flowStep(y.do.ANY, y.ju.NUF_COMPLETE, !0);
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
let L = new O();
