"use strict";
n.d(t, { CI: () => g, XM: () => f, e0: () => m, s: () => T, tu: () => p }), n(938796), n(321073);
var i = n(477900),
    r = n(536637),
    a = n.n(r),
    s = n(477782),
    l = n(192308),
    o = n(465532),
    d = n(626584),
    c = n(195880),
    u = n(151282),
    _ = n(859403),
    E = n(674470),
    A = n(896455),
    h = n(23395),
    I = n(375708);
async function f(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, u.Eg)({ scheduledMessageId: t, content: n, flags: i }), (0, _.kb)();
    } catch (e) {
        (0, _.xP)(e.message);
    }
}
async function p(e) {
    try {
        await (0, u.mk)(e), (0, _.Re)();
    } catch (e) {
        (0, _.kM)(e.message);
    }
}
function T(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        l = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        d = [
            { display: I.intl.string(I.t.tjIn9i), value: n },
            { display: I.intl.string(I.t.EMRZyS), value: r },
            { display: I.intl.string(I.t["+P5MmK"]), value: l },
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
                        { id: "custom-time", label: I.intl.string(I.t.stHooC), action: () => m({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        d
    );
}
function m(e) {
    let { channel: t, defaultValue: r = (0, E.US)(), content: a } = e,
        s =
            null != a
                ? (e) =>
                      (function (e) {
                          let { channel: t, content: n, scheduledTimestamp: i } = e;
                          (0, u.pr)({
                              channelId: t.id,
                              scheduledTimestamp: i,
                              messageSendData: { channelId: t.id, content: n, nonce: (0, c.m)(), tts: !1 },
                          })
                              .then(() => {
                                  (0, _.c_)(i);
                              })
                              .catch(_.vh);
                      })({ channel: t, content: a, scheduledTimestamp: e })
                : void 0;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: s });
        },
        { modalKey: A.t },
    );
}
function g(e) {
    let { scheduledMessage: t } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: h.B },
    );
}
new d.A("Scheduled Messages");
