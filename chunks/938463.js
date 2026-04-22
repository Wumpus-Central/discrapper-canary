t.d(l, { A: () => o });
var r = t(735438),
    n = t.n(r),
    i = t(961350),
    a = t(986238),
    s = t(652215),
    d = t(985018);
function o(e, l, t) {
    if (null == e || null == l) return { valid: !1, reason: d.intl.string(d.t.d34xi4) };
    let { releaseChannel: r, expiresAt: o, validForUserIds: u, allowedVersions: c, targetBuildOverride: v } = e,
        C = Object.keys(v);
    if (0 === n().intersection(C, l).length)
        return {
            valid: !1,
            reason: d.intl.formatToPlainString(d.t.wySUzv, {
                requestedTargets: C.map((e) => a.v_[e] ?? "unknown").join(", "),
            }),
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === s.BIo.PTB ? r.toUpperCase() : `${r.charAt(0).toUpperCase()}${r.slice(1)}`;
        return { valid: !1, reason: d.intl.formatToPlainString(d.t.GOEF0C, { releaseChannel: e }) };
    }
    if (null != c) {
        let e = !1;
        if (null == t) e = !1;
        else if (c.includes(t)) e = !0;
        else {
            let [l] = t.split(".");
            for (let t of c) {
                let [r, n] = t.split(".");
                if ("*" === n && l === r) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e) return { valid: !1, reason: d.intl.formatToPlainString(d.t.GOEF0C, { releaseChannel: c.join(", ") }) };
    }
    let h = null != o ? new Date(o).getTime() : null;
    return null != h && h < Date.now()
        ? { valid: !1, reason: d.intl.string(d.t["8eRE6S"]) }
        : u.length > 0 && !u.includes(i.default.getId())
          ? { valid: !1, reason: d.intl.string(d.t.qZgV0a) }
          : { valid: !0 };
}
