"use strict";
n.d(t, {
    CI: () => R,
    Re: () => S,
    V0: () => T,
    c_: () => p,
    e0: () => O,
    kM: () => N,
    kb: () => m,
    s: () => C,
    xP: () => g,
}),
    n(321073);
var i = n(477900),
    r = n(989349),
    a = n.n(r),
    s = n(97483),
    l = n(691540),
    o = n(857250),
    d = n(477782),
    c = n(192308),
    u = n(626584),
    _ = n(113367),
    E = n(195880),
    A = n(151282),
    h = n(896455),
    I = n(23395),
    f = n(375708);
function p(e) {
    let t = f.intl.formatToPlainString(f.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, _.Dc)({ message: t, icon: s.Ck.CLOCK });
}
function T(e) {
    (0, l.P0)((0, o.o)(f.intl.formatToPlainString(f.t.PsJmUe, { error: e }), s.Ck.FAILURE));
}
function m() {
    (0, _.Dc)({ message: f.intl.string(f.t.MXsMRk), icon: s.Ck.CLOCK });
}
function g(e) {
    (0, l.P0)((0, o.o)(f.intl.formatToPlainString(f.t.slM6In, { error: e }), s.Ck.FAILURE));
}
function S() {
    (0, _.Dc)({ message: f.intl.string(f.t["JF/LWn"]), icon: s.Ck.CLOCK });
}
function N(e) {
    (0, l.P0)((0, o.o)(f.intl.formatToPlainString(f.t.sUvyW3, { error: e }), s.Ck.FAILURE));
}
function C(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        s = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        l = [
            { display: f.intl.string(f.t.tjIn9i), value: n },
            { display: f.intl.string(f.t.EMRZyS), value: r },
            { display: f.intl.string(f.t["+P5MmK"]), value: s },
        ].map((e) =>
            (0, i.jsx)(
                d.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => (0, A.yF)({ channelId: t.id, scheduledTimestamp: e.value.toISOString() }),
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
                        { id: "custom-time", label: f.intl.string(f.t.stHooC), action: () => O({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        l
    );
}
function O(e) {
    let { channel: t, defaultValue: r = a()().startOf("hour").add(1, "hour"), content: s } = e,
        l =
            null != s
                ? (e) =>
                      (function (e) {
                          let { channel: t, content: n, scheduledTimestamp: i } = e;
                          (0, A.pr)({
                              channelId: t.id,
                              scheduledTimestamp: i,
                              messageSendData: { channelId: t.id, content: n, nonce: (0, E.m)(), tts: !1 },
                          })
                              .then(() => {
                                  p(i);
                              })
                              .catch((e) => {
                                  T(e.message);
                              });
                      })({ channel: t, content: s, scheduledTimestamp: e })
                : void 0;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: l });
        },
        { modalKey: h.t },
    );
}
function R(e) {
    let { scheduledMessage: t } = e;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: I.B },
    );
}
new u.A("Scheduled Messages");
