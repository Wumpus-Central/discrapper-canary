"use strict";
n.d(t, {
    CI: () => P,
    XM: () => D,
    c_: () => O,
    e0: () => M,
    kb: () => L,
    s: () => b,
    tu: () => v,
    vh: () => R,
    xP: () => y,
}),
    n(938796),
    n(321073);
var i = n(477900),
    r = n(536637),
    a = n.n(r),
    s = n(873298),
    l = n(97483),
    o = n(691540),
    d = n(857250),
    c = n(192308),
    u = n(477782),
    _ = n(157559),
    E = n(465532),
    A = n(793574),
    h = n(626584),
    I = n(113367),
    f = n(195880),
    p = n(625494),
    T = n(151282),
    m = n(674470),
    g = n(896455),
    S = n(23395),
    N = n(652215),
    C = n(375708);
function O(e) {
    let t = C.intl.formatToPlainString(C.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, I.Dc)({ message: t, icon: l.Ck.CLOCK });
}
function R(e) {
    if (e.body?.code !== N.t02.TOO_MANY_SCHEDULED_MESSAGES) {
        var t;
        return void ((t = e.body?.message ?? e.message),
        (0, o.P0)((0, d.o)(C.intl.formatToPlainString(C.t.PsJmUe, { error: t }), l.Ck.FAILURE)));
    }
    let { limit: r, isUpgradable: a } = (0, m.ZG)("ScheduledMessagesCreateRoadblock");
    a
        ? (0, c.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("454048"), n.e("300699"), n.e("571432"), n.e("13248")]).then(
                  n.bind(n, 689219),
              );
              return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: [A.A.SCHEDULED_MESSAGES_ROADBLOCK] });
          })
        : _.A.show({
              title: C.intl.string(C.t.RLdUVh),
              body: C.intl.formatToPlainString(C.t["3AMt7r"], { max: r }),
              cancelText: C.intl.string(C.t.BddRzS),
              confirmText: C.intl.string(C.t.lv6bDa),
              onConfirm: () => p._.dispatch(N.jej.TOGGLE_INBOX, s.Y2.SCHEDULED),
          });
}
function L() {
    (0, I.Dc)({ message: C.intl.string(C.t.MXsMRk), icon: l.Ck.CLOCK });
}
function y(e) {
    (0, o.P0)((0, d.o)(C.intl.formatToPlainString(C.t.slM6In, { error: e }), l.Ck.FAILURE));
}
async function D(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, T.Eg)({ scheduledMessageId: t, content: n, flags: i }), L();
    } catch (e) {
        y(e.message);
    }
}
async function v(e) {
    try {
        await (0, T.mk)(e), (0, I.Dc)({ message: C.intl.string(C.t["JF/LWn"]), icon: l.Ck.CLOCK });
    } catch (e) {
        var t;
        (t = e.message), (0, o.P0)((0, d.o)(C.intl.formatToPlainString(C.t.sUvyW3, { error: t }), l.Ck.FAILURE));
    }
}
function b(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        s = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        l = [
            { display: C.intl.string(C.t.tjIn9i), value: n },
            { display: C.intl.string(C.t.EMRZyS), value: r },
            { display: C.intl.string(C.t["+P5MmK"]), value: s },
        ].map((e) =>
            (0, i.jsx)(
                u.Dr,
                {
                    id: e.display,
                    label: e.display,
                    action: () => E.A.changeScheduledMessage(t.id, { scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        l.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.bX, {}),
                    (0, i.jsx)(
                        u.Dr,
                        { id: "custom-time", label: C.intl.string(C.t.stHooC), action: () => M({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        l
    );
}
function M(e) {
    let { channel: t, defaultValue: r = (0, m.US)(), content: a } = e,
        s =
            null != a
                ? (e) =>
                      (function (e) {
                          let { channel: t, content: n, scheduledTimestamp: i } = e;
                          (0, T.pr)({
                              channelId: t.id,
                              scheduledTimestamp: i,
                              messageSendData: { channelId: t.id, content: n, nonce: (0, f.m)(), tts: !1 },
                          })
                              .then(() => {
                                  O(i);
                              })
                              .catch(R);
                      })({ channel: t, content: a, scheduledTimestamp: e })
                : void 0;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: s });
        },
        { modalKey: g.t },
    );
}
function P(e) {
    let { scheduledMessage: t } = e;
    (0, c.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: S.B },
    );
}
new h.A("Scheduled Messages");
