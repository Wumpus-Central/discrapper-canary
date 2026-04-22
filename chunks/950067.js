let i;
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var a = n(192308),
    l = n(73153),
    s = n(272355),
    o = n(323073),
    d = n(315982),
    u = n(202384),
    c = n(709977),
    A = n(14509),
    h = n(894778),
    _ = n(225315),
    E = n(684407),
    p = n(919638),
    m = n(71393),
    g = n(967198),
    I = n(287809),
    C = n(403362),
    f = n(723702),
    T = n(942614),
    S = n(426620),
    N = n(771016),
    O = n(994277),
    L = n(652215);
n(436317);
var y = n(315290);
function v() {
    null != i && (0, a.closeModal)(i);
}
class b extends s.A {
    _initialize() {
        l.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.subscribe("LOGOUT", v);
    }
    _terminate() {
        l.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.h.unsubscribe("LOGOUT", v);
    }
    handleConnectionOpen() {
        var e;
        let t,
            l = S.A.getType();
        if (null == l) return;
        switch (l) {
            case N.zY.INVITE_UNCLAIMED:
                h.A.flowStart(y.do.INVITE, y.ju.NUF_STARTED);
                break;
            case N.zY.ORGANIC_REGISTERED:
                h.A.flowStart(y.do.ORGANIC, y.ju.NUF_STARTED);
                break;
            case N.zY.MARKETING_UNCLAIMED:
                h.A.flowStart(y.do.ORGANIC_MARKETING, y.ju.NUF_STARTED);
        }
        let s = !1,
            v = g.A.getGuildId();
        if (l === N.zY.INVITE_UNCLAIMED) {
            let e = m.A.getGuild(v);
            null != e && (0, c.Qd)(e) && ((s = !0), (0, _.Fy)(e.id));
        }
        let b = () => 0 === p.A.totalGuilds && !f.isPlatformEmbedded,
            D = o.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        i = await (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("86746"), n.e("97050"), n.e("51647")]).then(
                                    n.bind(n, 955382),
                                );
                                return (t) => (0, r.jsx)(e, { ...t });
                            },
                            { onCloseRequest: L.tEg, onCloseCallback: e, modalKey: i },
                        );
                        return;
                    }
                    let l = (e) => {
                        switch (e) {
                            case O.i.AGE_GATE:
                                h.A.flowStep(y.do.ANY, y.ju.AGE_GATE);
                                break;
                            case O.i.CHOOSE_TEMPLATE:
                                h.A.flowStep(y.do.ANY, y.jC.GUILD_TEMPLATES);
                                break;
                            case O.i.CUSTOMIZE_GUILD:
                                h.A.flowStep(y.do.ANY, y.jC.GUILD_CREATE);
                                break;
                            case O.i.CHANNEL_PROMPT:
                                h.A.flowStep(y.do.ANY, y.jC.CHANNEL_PROMPT);
                                break;
                            case O.i.JOIN_GUILD:
                                h.A.flowStep(y.do.ANY, y.jC.JOIN_GUILD);
                                break;
                            case O.i.CREATION_INTENT:
                                h.A.flowStep(y.do.ANY, y.jC.CREATION_INTENT);
                                break;
                            case O.i.COMPLETE:
                                h.A.flowStep(y.do.ANY, y.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                C.xb(e);
                        }
                    };
                    i = await (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("86746"), n.e("66402")]).then(
                                n.bind(n, 218318),
                            );
                            return (t) => (0, r.jsx)(e, { ...t, onSlideChange: l });
                        },
                        { onCloseRequest: L.tEg, onCloseCallback: e, modalKey: i },
                    );
                },
                predicate: () => b() && !0,
            },
            { key: "New User Age Gate", open: d.v, predicate: () => D && !b() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => d.R(f.isPlatformEmbedded, e),
                predicate: () =>
                    !s &&
                    null != I.default.getCurrentUser() &&
                    !I.default.getCurrentUser()?.isClaimed() &&
                    !(0, A._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, u.Ze)(v, e ?? void 0),
                predicate: () => s && !I.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (t) => (0, r.jsx)(e, { ...t, guildId: v });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != v && null != E.A.get(v) && E.A.get(v) !== E.E,
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
let D = new b();
