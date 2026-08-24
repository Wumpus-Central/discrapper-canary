"use strict";
n.d(t, {
    CI: () => y,
    V0: () => g,
    XM: () => C,
    c_: () => m,
    e0: () => L,
    kb: () => S,
    s: () => R,
    tu: () => O,
    xP: () => N,
}),
    n(938796),
    n(321073);
var i = n(477900),
    r = n(536637),
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
    I = n(566908),
    f = n(896455),
    p = n(23395),
    T = n(375708);
function m(e) {
    let t = T.intl.formatToPlainString(T.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, E.Dc)({ message: t, icon: s.Ck.CLOCK });
}
function g(e) {
    (0, l.P0)((0, o.o)(T.intl.formatToPlainString(T.t.PsJmUe, { error: e }), s.Ck.FAILURE));
}
function S() {
    (0, E.Dc)({ message: T.intl.string(T.t.MXsMRk), icon: s.Ck.CLOCK });
}
function N(e) {
    (0, l.P0)((0, o.o)(T.intl.formatToPlainString(T.t.slM6In, { error: e }), s.Ck.FAILURE));
}
async function C(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, h.Eg)({ scheduledMessageId: t, content: n, flags: i }), S();
    } catch (e) {
        N(e.message);
    }
}
async function O(e) {
    try {
        await (0, h.mk)(e), (0, E.Dc)({ message: T.intl.string(T.t["JF/LWn"]), icon: s.Ck.CLOCK });
    } catch (e) {
        var t;
        (t = e.message), (0, l.P0)((0, o.o)(T.intl.formatToPlainString(T.t.sUvyW3, { error: t }), s.Ck.FAILURE));
    }
}
function R(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        s = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        l = [
            { display: T.intl.string(T.t.tjIn9i), value: n },
            { display: T.intl.string(T.t.EMRZyS), value: r },
            { display: T.intl.string(T.t["+P5MmK"]), value: s },
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
                        { id: "custom-time", label: T.intl.string(T.t.stHooC), action: () => L({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        l
    );
}
function L(e) {
    let { channel: t, defaultValue: r = (0, I.US)(), content: a } = e,
        s =
            null != a
                ? (e) =>
                      (function (e) {
                          let { channel: t, content: n, scheduledTimestamp: i } = e;
                          (0, h.pr)({
                              channelId: t.id,
                              scheduledTimestamp: i,
                              messageSendData: { channelId: t.id, content: n, nonce: (0, A.m)(), tts: !1 },
                          })
                              .then(() => {
                                  m(i);
                              })
                              .catch((e) => {
                                  g(e.message);
                              });
                      })({ channel: t, content: a, scheduledTimestamp: e })
                : void 0;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: s });
        },
        { modalKey: f.t },
    );
}
function y(e) {
    let { scheduledMessage: t } = e;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: p.B },
    );
}
new _.A("Scheduled Messages");
