"use strict";
n.d(t, { CI: () => S, XM: () => p, e0: () => g, s: () => m, tu: () => T }), n(938796), n(321073);
var i = n(477900),
    r = n(536637),
    a = n.n(r),
    s = n(477782),
    l = n(192308),
    o = n(465532),
    d = n(148494),
    c = n(626584),
    u = n(151282),
    _ = n(859403),
    E = n(674470),
    A = n(896455),
    h = n(23395),
    I = n(381941),
    f = n(375708);
async function p(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, u.Eg)({ scheduledMessageId: t, content: n, flags: i }), (0, _.kb)();
    } catch (e) {
        (0, _.xP)(e.message);
    }
}
async function T(e) {
    try {
        await (0, u.mk)(e), (0, _.Re)();
    } catch (e) {
        (0, _.kM)(e.message);
    }
}
function m(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        l = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        d = [
            { display: f.intl.string(f.t.tjIn9i), value: n },
            { display: f.intl.string(f.t.EMRZyS), value: r },
            { display: f.intl.string(f.t["+P5MmK"]), value: l },
        ].map((e) =>
            (0, i.jsx)(
                s.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => o.A.changeScheduledMessage(t.id, { scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        d.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.bX, {}),
                    (0, i.jsx)(
                        s.Dr,
                        { id: "custom-time", label: f.intl.string(f.t.stHooC), action: () => g({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        d
    );
}
function g(e) {
    let { channel: t, defaultValue: r = (0, E.US)(), message: a, onSubmit: s, onClear: o } = e,
        c =
            s ??
            (null != a
                ? (e) => {
                      d.A.sendMessage(t.id, a, void 0, { scheduledTimestamp: e, location: I.Hx.APP_COMMAND });
                  }
                : void 0);
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: c, onClear: o });
        },
        { modalKey: A.t },
    );
}
function S(e) {
    let { scheduledMessage: t } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: h.B },
    );
}
new c.A("Scheduled Messages");
