n.d(t, { CI: () => E, Re: () => p, c_: () => h, e0: () => _, kM: () => g, kb: () => m, s: () => f, xP: () => A }),
    n(321073);
var i = n(627968),
    l = n(989349),
    a = n.n(l),
    s = n(397927),
    r = n(626584),
    o = n(151282),
    c = n(896455),
    d = n(23395),
    u = n(985018);
function h(e) {
    let t = u.intl.formatToPlainString(u.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, s.showToast)((0, s.createToast)(t, s.ToastType.SUCCESS));
}
function m() {
    (0, s.showToast)((0, s.createToast)(u.intl.string(u.t.MXsMRk), s.ToastType.SUCCESS));
}
function A(e) {
    (0, s.showToast)((0, s.createToast)(u.intl.formatToPlainString(u.t.slM6In, { error: e }), s.ToastType.FAILURE));
}
function p() {
    (0, s.showToast)((0, s.createToast)(u.intl.string(u.t["JF/LWn"]), s.ToastType.SUCCESS));
}
function g(e) {
    (0, s.showToast)((0, s.createToast)(u.intl.formatToPlainString(u.t.sUvyW3, { error: e }), s.ToastType.FAILURE));
}
function f(e) {
    let { channel: t } = e,
        n = a()().add(1, "day").startOf("day").set("hours", 9),
        l = a()().add(1, "day").startOf("day").set("hours", 13),
        r = a()().startOf("isoWeek").add(1, "week").set("hours", 9),
        c = [
            { display: u.intl.string(u.t.tjIn9i), value: n },
            { display: u.intl.string(u.t.EMRZyS), value: l },
            { display: u.intl.string(u.t["+P5MmK"]), value: r },
        ].map((e) =>
            (0, i.jsx)(
                s.Drp,
                {
                    id: e.display,
                    label: e.display,
                    action: () => (0, o.yF)({ channelId: t.id, scheduledTimestamp: e.value.toISOString() }),
                },
                e.display,
            ),
        );
    return (
        c.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.bXX, {}),
                    (0, i.jsx)(
                        s.Drp,
                        { id: "custom-time", label: u.intl.string(u.t.stHooC), action: () => _({ channel: t }) },
                        "custom-time",
                    ),
                ],
            }),
        ),
        c
    );
}
function _(e) {
    let { channel: t, defaultValue: l = a()().startOf("hour").add(1, "hour") } = e;
    (0, s.mMO)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 896455));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, defaultValue: l });
        },
        { modalKey: c.t },
    );
}
function E(e) {
    let { scheduledMessage: t } = e;
    (0, s.mMO)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 23395));
            return (n) => (0, i.jsx)(e, { ...n, scheduledMessage: t });
        },
        { modalKey: d.B },
    );
}
new r.A("Scheduled Messages");
