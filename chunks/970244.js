"use strict";
n.d(t, {
    CI: () => L,
    V0: () => m,
    XM: () => N,
    c_: () => T,
    e0: () => R,
    kb: () => g,
    s: () => O,
    tu: () => C,
    xP: () => S,
}),
    n(938796),
    n(321073);
var i = n(477900),
    r = n(989349),
    a = n.n(r),
    s = n(97483),
    l = n(691540),
    o = n(857250),
    d = n(477782),
    c = n(192308),
    u = n(465532),
    _ = n(626584),
    E = n(113367),
    A = n(195880),
    h = n(151282),
    I = n(896455),
    f = n(23395),
    p = n(375708);
function T(e) {
    let t = p.intl.formatToPlainString(p.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, E.Dc)({ message: t, icon: s.Ck.CLOCK });
}
function m(e) {
    (0, l.P0)((0, o.o)(p.intl.formatToPlainString(p.t.PsJmUe, { error: e }), s.Ck.FAILURE));
}
function g() {
    (0, E.Dc)({ message: p.intl.string(p.t.MXsMRk), icon: s.Ck.CLOCK });
}
function S(e) {
    (0, l.P0)((0, o.o)(p.intl.formatToPlainString(p.t.slM6In, { error: e }), s.Ck.FAILURE));
}
async function N(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, h.Eg)({ scheduledMessageId: t, content: n, flags: i }), g();
    } catch (e) {
        S(e.message);
    }
}
async function C(e) {
    try {
        await (0, h.mk)(e), (0, E.Dc)({ message: p.intl.string(p.t["JF/LWn"]), icon: s.Ck.CLOCK });
    } catch (e) {
        var t;
        (t = e.message), (0, l.P0)((0, o.o)(p.intl.formatToPlainString(p.t.sUvyW3, { error: t }), s.Ck.FAILURE));
    }
}
function O(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        s = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        l = [
            { display: p.intl.string(p.t.tjIn9i), value: n },
            { display: p.intl.string(p.t.EMRZyS), value: r },
            { display: p.intl.string(p.t["+P5MmK"]), value: s },
        ].map((e) =>
            (0, i.jsx)(
                d.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => u.A.changeScheduledMessage(t.id, { scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        l.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.bX, {}),
                    (0, i.jsx)(
                        d.Dr,
                        { id: "custom-time", label: p.intl.string(p.t.stHooC), action: () => R({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        l
    );
}
function R(e) {
    let { channel: t, defaultValue: r = a()().startOf("hour").add(1, "hour"), content: s } = e,
        l =
            null != s
                ? (e) =>
                      (function (e) {
                          let { channel: t, content: n, scheduledTimestamp: i } = e;
                          (0, h.pr)({
                              channelId: t.id,
                              scheduledTimestamp: i,
                              messageSendData: { channelId: t.id, content: n, nonce: (0, A.m)(), tts: !1 },
                          })
                              .then(() => {
                                  T(i);
                              })
                              .catch((e) => {
                                  m(e.message);
                              });
                      })({ channel: t, content: s, scheduledTimestamp: e })
                : void 0;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: l });
        },
        { modalKey: I.t },
    );
}
function L(e) {
    let { scheduledMessage: t } = e;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: f.B },
    );
}
new _.A("Scheduled Messages");
