n.d(t, {
    CI: () => T,
    Re: () => A,
    V0: () => f,
    c_: () => p,
    e0: () => M,
    kM: () => C,
    kb: () => v,
    s: () => I,
    xP: () => y,
}),
    n(321073);
var a = n(477900),
    i = n(989349),
    s = n.n(i),
    l = n(97483),
    r = n(691540),
    o = n(857250),
    d = n(477782),
    u = n(192308),
    c = n(626584),
    m = n(113367),
    E = n(151282),
    h = n(896455),
    S = n(23395),
    g = n(375708);
function p(e) {
    let t = g.intl.formatToPlainString(g.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, m.Dc)({ message: t, icon: l.Ck.CLOCK });
}
function f(e) {
    (0, r.P0)((0, o.o)(g.intl.formatToPlainString(g.t.PsJmUe, { error: e }), l.Ck.FAILURE));
}
function v() {
    (0, m.Dc)({ message: g.intl.string(g.t.MXsMRk), icon: l.Ck.CLOCK });
}
function y(e) {
    (0, r.P0)((0, o.o)(g.intl.formatToPlainString(g.t.slM6In, { error: e }), l.Ck.FAILURE));
}
function A() {
    (0, m.Dc)({ message: g.intl.string(g.t["JF/LWn"]), icon: l.Ck.CLOCK });
}
function C(e) {
    (0, r.P0)((0, o.o)(g.intl.formatToPlainString(g.t.sUvyW3, { error: e }), l.Ck.FAILURE));
}
function I(e) {
    let { channel: t } = e,
        n = s()().add(1, "day").startOf("day").set("hours", 9),
        i = s()().add(1, "day").startOf("day").set("hours", 13),
        l = s()().startOf("isoWeek").add(1, "week").set("hours", 9),
        r = [
            { display: g.intl.string(g.t.tjIn9i), value: n },
            { display: g.intl.string(g.t.EMRZyS), value: i },
            { display: g.intl.string(g.t["+P5MmK"]), value: l },
        ].map((e) =>
            (0, a.jsx)(
                d.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => (0, E.yF)({ channelId: t.id, scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        r.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(d.bX, {}),
                    (0, a.jsx)(
                        d.Dr,
                        { id: "custom-time", label: g.intl.string(g.t.stHooC), action: () => M({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        r
    );
}
function M(e) {
    let { channel: t, defaultValue: i = s()().startOf("hour").add(1, "hour") } = e;
    (0, u.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, a.jsx)(e, { ...n, channel: t, defaultValue: i });
        },
        { modalKey: h.t },
    );
}
function T(e) {
    let { scheduledMessage: t } = e;
    (0, u.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, a.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: S.B },
    );
}
new c.A("Scheduled Messages");
