n.d(t, { CI: () => I, Re: () => E, c_: () => p, e0: () => S, kM: () => C, kb: () => _, s: () => x, xP: () => f }),
    n(321073);
var i = n(627968),
    l = n(989349),
    a = n.n(l),
    s = n(691540),
    r = n(857250),
    o = n(97483),
    c = n(477782),
    d = n(192308),
    u = n(626584),
    h = n(151282),
    m = n(896455),
    A = n(23395),
    g = n(985018);
function p(e) {
    let t = g.intl.formatToPlainString(g.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, s.P0)((0, r.o)(t, o.Ck.SUCCESS));
}
function _() {
    (0, s.P0)((0, r.o)(g.intl.string(g.t.MXsMRk), o.Ck.SUCCESS));
}
function f(e) {
    (0, s.P0)((0, r.o)(g.intl.formatToPlainString(g.t.slM6In, { error: e }), o.Ck.FAILURE));
}
function E() {
    (0, s.P0)((0, r.o)(g.intl.string(g.t["JF/LWn"]), o.Ck.SUCCESS));
}
function C(e) {
    (0, s.P0)((0, r.o)(g.intl.formatToPlainString(g.t.sUvyW3, { error: e }), o.Ck.FAILURE));
}
function x(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        l = a()().add(1, "day").startOf("day").set("hours", 13),
        s = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        r = [
            { display: g.intl.string(g.t.tjIn9i), value: n },
            { display: g.intl.string(g.t.EMRZyS), value: l },
            { display: g.intl.string(g.t["+P5MmK"]), value: s },
        ].map((e) =>
            (0, i.jsx)(
                c.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => (0, h.yF)({ channelId: t.id, scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        r.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.bX, {}),
                    (0, i.jsx)(
                        c.Dr,
                        { id: "custom-time", label: g.intl.string(g.t.stHooC), action: () => S({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        r
    );
}
function S(e) {
    let { channel: t, defaultValue: l = a()().startOf("hour").add(1, "hour") } = e;
    (0, d.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: l });
        },
        { modalKey: m.t },
    );
}
function I(e) {
    let { scheduledMessage: t } = e;
    (0, d.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: A.B },
    );
}
new u.A("Scheduled Messages");
