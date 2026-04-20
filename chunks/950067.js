let i;
n.d(t, { A: () => L });
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(73153),
    s = n(272355),
    o = n(323073),
    d = n(315982),
    c = n(202384),
    u = n(709977),
    A = n(14509),
    h = n(894778),
    _ = n(225315),
    m = n(684407),
    g = n(919638),
    p = n(71393),
    E = n(967198),
    I = n(287809),
    f = n(403362),
    C = n(723702),
    T = n(942614),
    N = n(426620),
    S = n(771016),
    x = n(994277),
    b = n(652215);
n(436317);
var v = n(315290);
function y() {
    null != i && (0, a.OoC)(i);
}
class O extends s.A {
    _initialize() {
        r.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), r.h.subscribe("LOGOUT", y);
    }
    _terminate() {
        r.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), r.h.unsubscribe("LOGOUT", y);
    }
    handleConnectionOpen() {
        var e;
        let t,
            r = N.A.getType();
        if (null == r) return;
        switch (r) {
            case S.zY.INVITE_UNCLAIMED:
                h.A.flowStart(v.do.INVITE, v.ju.NUF_STARTED);
                break;
            case S.zY.ORGANIC_REGISTERED:
                h.A.flowStart(v.do.ORGANIC, v.ju.NUF_STARTED);
                break;
            case S.zY.MARKETING_UNCLAIMED:
                h.A.flowStart(v.do.ORGANIC_MARKETING, v.ju.NUF_STARTED);
        }
        let s = !1,
            y = E.A.getGuildId();
        if (r === S.zY.INVITE_UNCLAIMED) {
            let e = p.A.getGuild(y);
            null != e && (0, u.Qd)(e) && ((s = !0), (0, _.Fy)(e.id));
        }
        let O = () => 0 === g.A.totalGuilds && !C.isPlatformEmbedded,
            L = o.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        i = await (0, a.mMO)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("86746"), n.e("97050"), n.e("74659")]).then(
                                    n.bind(n, 955382),
                                );
                                return (t) => (0, l.jsx)(e, { ...t });
                            },
                            { onCloseRequest: b.tEg, onCloseCallback: e, modalKey: i },
                        );
                        return;
                    }
                    let r = (e) => {
                        switch (e) {
                            case x.i.AGE_GATE:
                                h.A.flowStep(v.do.ANY, v.ju.AGE_GATE);
                                break;
                            case x.i.CHOOSE_TEMPLATE:
                                h.A.flowStep(v.do.ANY, v.jC.GUILD_TEMPLATES);
                                break;
                            case x.i.CUSTOMIZE_GUILD:
                                h.A.flowStep(v.do.ANY, v.jC.GUILD_CREATE);
                                break;
                            case x.i.CHANNEL_PROMPT:
                                h.A.flowStep(v.do.ANY, v.jC.CHANNEL_PROMPT);
                                break;
                            case x.i.JOIN_GUILD:
                                h.A.flowStep(v.do.ANY, v.jC.JOIN_GUILD);
                                break;
                            case x.i.CREATION_INTENT:
                                h.A.flowStep(v.do.ANY, v.jC.CREATION_INTENT);
                                break;
                            case x.i.COMPLETE:
                                h.A.flowStep(v.do.ANY, v.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                f.xb(e);
                        }
                    };
                    i = await (0, a.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("86746"), n.e("66402")]).then(
                                n.bind(n, 218318),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, onSlideChange: r });
                        },
                        { onCloseRequest: b.tEg, onCloseCallback: e, modalKey: i },
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
                open: (e) => (0, c.Ze)(y, e ?? void 0),
                predicate: () => s && !I.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, a.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: y });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != y && null != m.A.get(y) && m.A.get(y) !== m.E,
            },
        ]),
            (t = () => {
                T.D(), h.A.flowStep(v.do.ANY, v.ju.NUF_COMPLETE, !0);
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
