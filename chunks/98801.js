"use strict";
n.d(t, { k: () => p });
var r = n(824120),
    i = n.n(r),
    a = n(181370),
    s = n.n(a),
    o = n(403727),
    l = n(498642),
    u = n(71393),
    c = n(927813),
    d = n(661191);
function _(e, t, n) {
    let r, a, s;
    try {
        (r = i()(e)), (a = null != t ? i()(t) : null), (s = null != n ? i()(n) : null);
    } catch {
        return !1;
    }
    return !((null != a && r.lesser(a)) || (null != s && r.greater(s)));
}
function f(e) {
    let t, n;
    for (let [r, i] of e)
        switch (r) {
            case s().v3("min_id"):
                t = i;
                break;
            case s().v3("max_id"):
                n = i;
        }
    return { min: t, max: n };
}
let p = {
    [s().v3("guild_ids")]: (e) => {
        let t = [];
        for (let [n, r] of e) n === s().v3("guild_ids") && (t = r);
        return (e) => t.includes(e);
    },
    [s().v3("guild_id_range")]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => _(e, t, n);
    },
    [s().v3("guild_age_range_days")]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => _(Math.floor(d.default.age(e) / c.A.Millis.DAY), t, n);
    },
    [s().v3("guild_member_count_range")]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => {
            let r = l.A.getMemberCount(e);
            return null != r && _(r, t, n);
        };
    },
    [s().v3("guild_has_feature")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = u.A.getGuild(e) ?? o.A.getGuild(e);
            return null != n && t.some((e) => n.features.has(e));
        };
    },
    [s().v3("guild_hub_types")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = u.A.getGuild(e) ?? o.A.getGuild(e);
            return null != n && "number" == typeof n.hubType && t.some((e) => n.hubType === e);
        };
    },
    [s().v3("guild_has_vanity_url")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            let n = u.A.getGuild(e) ?? o.A.getGuild(e);
            return null != n && t === (null != n.vanityURLCode);
        };
    },
    [s().v3("guild_in_range_by_hash")]: (e) => {
        let t, n;
        for (let [r, i] of e)
            switch (r) {
                case s().v3("hash_key"):
                    t = i;
                    break;
                case s().v3("target"):
                    n = parseInt(i) ?? 0;
            }
        return (e) => {
            let r = s().v3(`${t}:${e}`);
            return (r > 0 ? r + r : r >>> 0) % 1e4 < n;
        };
    },
};
