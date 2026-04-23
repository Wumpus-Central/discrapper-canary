"use strict";
n.d(t, { A: () => u });
var r = n(735438),
    i = n.n(r),
    s = n(961350),
    a = n(986238),
    o = n(652215),
    l = n(985018);
function u(e, t, n) {
    if (null == e || null == t) return { valid: !1, reason: l.intl.string(l.t.d34xi4) };
    let { releaseChannel: r, expiresAt: u, validForUserIds: c, allowedVersions: d, targetBuildOverride: _ } = e,
        f = Object.keys(_);
    if (0 === i().intersection(f, t).length)
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.wySUzv, {
                requestedTargets: f.map((e) => a.v_[e] ?? "unknown").join(", "),
            }),
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === o.BIo.PTB ? r.toUpperCase() : `${r.charAt(0).toUpperCase()}${r.slice(1)}`;
        return { valid: !1, reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: e }) };
    }
    if (null != d) {
        let e = !1;
        if (null == n) e = !1;
        else if (d.includes(n)) e = !0;
        else {
            let [t] = n.split(".");
            for (let n of d) {
                let [r, i] = n.split(".");
                if ("*" === i && t === r) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e) return { valid: !1, reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: d.join(", ") }) };
    }
    let p = null != u ? new Date(u).getTime() : null;
    return null != p && p < Date.now()
        ? { valid: !1, reason: l.intl.string(l.t["8eRE6S"]) }
        : c.length > 0 && !c.includes(s.default.getId())
          ? { valid: !1, reason: l.intl.string(l.t.qZgV0a) }
          : { valid: !0 };
}
