n.d(t, { CI: () => C, XM: () => T, e0: () => N, fK: () => g, s: () => S, tu: () => m }), n(938796), n(321073);
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
    E = n(551640),
    A = n(566908),
    h = n(896455),
    I = n(23395),
    f = n(381941),
    p = n(375708);
async function T(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        await (0, u.Eg)({ scheduledMessageId: t, content: n, flags: i }), (0, _.kb)();
    } catch (e) {
        (0, _.xP)(e.message);
    }
}
async function m(e) {
    try {
        await (0, u.mk)(e), (0, _.Re)();
    } catch (e) {
        (0, _.kM)(e.message);
    }
}
async function g(e) {
    try {
        await (0, u.fK)(e), (0, _.Ki)();
    } catch (e) {
        (0, _.Do)(e.message);
    }
}
function S(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        r = a()().add(1, "day").startOf("day").set("hours", 13),
        l = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        d = [
            { display: p.intl.string(p.t.tjIn9i), value: n },
            { display: p.intl.string(p.t.EMRZyS), value: r },
            { display: p.intl.string(p.t["+P5MmK"]), value: l },
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
                        {
                            id: "custom-time",
                            label: p.intl.string(p.t.stHooC),
                            action: () => N({ channel: t, entryPoint: E.t.ATTACH_MENU }),
                        },
                        "custom-time",
                    ),
                ],
            }),
        ),
        d
    );
}
function N(e) {
    let {
        channel: t,
        defaultValue: r = (0, A.US)(),
        message: a,
        onSubmit: s,
        onClear: o,
        entryPoint: c,
        isEditing: u = !1,
    } = e;
    (0, A.q8)({ entryPoint: c, isEditing: u, channelId: t.id });
    let _ =
        s ??
        (null != a
            ? (e) => {
                  d.A.sendMessage(t.id, a, void 0, { scheduledTimestamp: e, location: f.Hx.APP_COMMAND });
              }
            : void 0);
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: _, onClear: o });
        },
        { modalKey: h.t },
    );
}
function C(e) {
    let { scheduledMessage: t } = e;
    (0, A.q8)({ entryPoint: E.t.INBOX, isEditing: !0, channelId: t.createArgs.channelId }),
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
                return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
            },
            { modalKey: I.B },
        );
}
new c.A("Scheduled Messages");
