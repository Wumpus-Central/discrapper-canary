(n.d(t, { CI: () => S, XM: () => f, e0: () => g, fK: () => T, s: () => m, tu: () => p }), n(938796), n(321073));
var i = n(477900),
    r = n(477782),
    a = n(192308),
    s = n(465532),
    l = n(148494),
    o = n(626584),
    d = n(151282),
    c = n(859403),
    u = n(551640),
    _ = n(566908),
    E = n(896455),
    A = n(23395),
    h = n(381941),
    I = n(375708);
async function f(e) {
    let { scheduledMessageId: t, content: n, flags: i } = e;
    try {
        (await (0, d.Eg)({ scheduledMessageId: t, content: n, flags: i }), (0, c.kb)());
    } catch (e) {
        (0, c.xP)(e.message);
    }
}
async function p(e) {
    try {
        (await (0, d.mk)(e), (0, c.Re)());
    } catch (e) {
        (0, c.kM)(e.message);
    }
}
async function T(e) {
    try {
        (await (0, d.fK)(e), (0, c.Ki)());
    } catch (e) {
        (0, c.Do)(e.message);
    }
}
function m(e) {
    let { channel: t } = e,
        n = (0, _.FF)().map((e) =>
            (0, i.jsx)(
                r.Dr,
                {
                    id: e.label,
                    label: e.label,
                    action: () => s.A.changeScheduledMessage(t.id, { scheduledTimestamp: e.value.toISOString() }),
                },
                e.label,
            ),
        );
    return (
        n.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.bX, {}),
                    (0, i.jsx)(
                        r.Dr,
                        {
                            id: "custom-time",
                            label: I.intl.string(I.t.stHooC),
                            action: () => g({ channel: t, entryPoint: u.t.ATTACH_MENU }),
                        },
                        "custom-time",
                    ),
                ],
            }),
        ),
        n
    );
}
function g(e) {
    let {
        channel: t,
        defaultValue: r = (0, _.US)(),
        message: s,
        onSubmit: o,
        onClear: d,
        entryPoint: c,
        isEditing: u = !1,
    } = e;
    (0, _.q8)({ entryPoint: c, isEditing: u, channelId: t.id });
    let A =
        o ??
        (null != s
            ? (e) => {
                  l.A.sendMessage(t.id, s, void 0, { scheduledTimestamp: e, location: h.Hx.APP_COMMAND });
              }
            : void 0);
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: r, onSubmit: A, onClear: d });
        },
        { modalKey: E.t },
    );
}
function S(e) {
    let { scheduledMessage: t } = e;
    ((0, _.q8)({ entryPoint: u.t.INBOX, isEditing: !0, channelId: t.createArgs.channelId }),
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
                return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
            },
            { modalKey: A.B },
        ));
}
new o.A("Scheduled Messages");
