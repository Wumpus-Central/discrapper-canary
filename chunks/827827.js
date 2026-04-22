"use strict";
n.d(t, { A: () => f });
var r = n(765178),
    i = n(406935),
    s = n(535586),
    a = n(594061),
    o = n(461213),
    l = n(954571),
    u = n(427262),
    d = n(146901),
    c = n(652215),
    _ = n(985018);
async function f(e) {
    let { nextStatus: t, prevStatus: n, analyticsContext: f, durationMillis: E, disableTracking: h = !1 } = e;
    null == n && (n = o.A.getStatus());
    let p = null != E ? `${Date.now() + E}` : "0";
    await a.wc.updateAsync(
        "status",
        (e) => {
            (e.status = i.hU.create({ value: t })),
                (e.statusExpiresAtMs = p),
                (e.statusCreatedAtMs =
                    n === t && null != e.statusCreatedAtMs
                        ? e.statusCreatedAtMs
                        : i.ol.create({ value: `${Date.now()}` }));
        },
        a.Sb.INFREQUENT_USER_ACTION,
    );
    let m = (function (e, t) {
        let n = (0, u.MU)(e);
        if ("0" === t) return _.intl.formatToPlainString(_.t.dO2aLi, { statusLabel: n });
        let { kind: r, dateString: i, timeString: s } = (0, d._)(t);
        return "today" === r
            ? _.intl.formatToPlainString(_.t["r50t/S"], { statusLabel: n, timeString: s })
            : _.intl.formatToPlainString(_.t["J+GJHv"], { statusLabel: n, dateString: i, timeString: s });
    })(t, p);
    if ((r.O.announce(m), h)) return;
    let g = { next_status: t, prev_status: n, ...s.A.getGlobalStats() };
    null != E && (g = { ...g, expire_duration_minutes: null != E ? E / 6e4 : null }),
        null != f && (g = { ...g, ...f }),
        l.default.track(c.HAw.USER_STATUS_UPDATED, g);
}
