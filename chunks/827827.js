"use strict";
n.d(t, { A: () => p });
var r = n(349941),
    i = n(406935),
    a = n(535586),
    s = n(594061),
    o = n(461213),
    l = n(954571),
    u = n(427262),
    c = n(146901),
    d = n(652215),
    _ = n(985018);
function f(e, t) {
    let n = (0, u.MU)(e);
    if ("0" === t) return _.intl.formatToPlainString(_.t.dO2aLi, { statusLabel: n });
    let { kind: r, dateString: i, timeString: a } = (0, c._)(t);
    return "today" === r
        ? _.intl.formatToPlainString(_.t["r50t/S"], { statusLabel: n, timeString: a })
        : _.intl.formatToPlainString(_.t["J+GJHv"], { statusLabel: n, dateString: i, timeString: a });
}
async function p(e) {
    let { nextStatus: t, prevStatus: n, analyticsContext: u, durationMillis: c, disableTracking: _ = !1 } = e;
    null == n && (n = o.A.getStatus());
    let p = null != c ? `${Date.now() + c}` : "0";
    await s.wc.updateAsync(
        "status",
        (e) => {
            (e.status = i.hU.create({ value: t })),
                (e.statusExpiresAtMs = p),
                (e.statusCreatedAtMs =
                    n === t && null != e.statusCreatedAtMs
                        ? e.statusCreatedAtMs
                        : i.ol.create({ value: `${Date.now()}` }));
        },
        s.Sb.INFREQUENT_USER_ACTION,
    );
    let h = f(t, p);
    if ((r.OR.announce(h), _)) return;
    let m = { next_status: t, prev_status: n, ...a.A.getGlobalStats() };
    null != c && (m = { ...m, expire_duration_minutes: null != c ? c / 6e4 : null }),
        null != u && (m = { ...m, ...u }),
        l.default.track(d.HAw.USER_STATUS_UPDATED, m);
}
