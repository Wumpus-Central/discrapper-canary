n.d(t, { A: () => c }), n(896048), n(747238);
var r = n(735438),
    i = n.n(r),
    a = n(961350),
    s = n(986238),
    o = n(652215),
    l = n(985018);
function c(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.intl.string(l.t.d34xi4),
        };
    let { releaseChannel: r, expiresAt: c, validForUserIds: u, allowedVersions: d, targetBuildOverride: f } = e,
        p = Object.keys(f);
    if (0 === i().intersection(p, t).length)
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.wySUzv, {
                requestedTargets: p
                    .map((e) => {
                        var t;
                        return null != (t = s.v_[e]) ? t : "unknown";
                    })
                    .join(", "),
            }),
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === o.BIo.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: e }),
        };
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
        if (!e)
            return {
                valid: !1,
                reason: l.intl.formatToPlainString(l.t.GOEF0C, { releaseChannel: d.join(", ") }),
            };
    }
    let _ = null != c ? new Date(c).getTime() : null;
    return null != _ && _ < Date.now()
        ? {
              valid: !1,
              reason: l.intl.string(l.t["8eRE6S"]),
          }
        : u.length > 0 && !u.includes(a.default.getId())
          ? {
                valid: !1,
                reason: l.intl.string(l.t.qZgV0a),
            }
          : { valid: !0 };
}
