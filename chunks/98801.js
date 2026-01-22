n.d(t, {
    k: () => _,
}),
    n(896048);
var r = n(824120),
    i = n.n(r),
    a = n(181370),
    s = n.n(a),
    o = n(403727),
    l = n(498642),
    c = n(71393),
    u = n(927813),
    d = n(661191);

function f(e, t, n) {
    let r, a, s;
    try {
        (r = i()(e)), (a = null != t ? i()(t) : null), (s = null != n ? i()(n) : null);
    } catch (e) {
        return !1;
    }
    return !((null != a && r.lesser(a)) || (null != s && r.greater(s)));
}

function p(e) {
    let t, n;
    for (let [r, i] of e)
        switch (r) {
            case s().v3("min_id"):
                t = i;
                break;
            case s().v3("max_id"):
                n = i;
        }
    return {
        min: t,
        max: n,
    };
}
let _ = {
    [s().v3("guild_ids")]: (e) => {
        let t = [];
        for (let [n, r] of e) n === s().v3("guild_ids") && (t = r);
        return (e) => t.includes(e);
    },
    [s().v3("guild_id_range")]: (e) => {
        let { min: t, max: n } = p(e);
        return (e) => f(e, t, n);
    },
    [s().v3("guild_age_range_days")]: (e) => {
        let { min: t, max: n } = p(e);
        return (e) => f(Math.floor(d.default.age(e) / u.A.Millis.DAY), t, n);
    },
    [s().v3("guild_member_count_range")]: (e) => {
        let { min: t, max: n } = p(e);
        return (e) => {
            let r = l.A.getMemberCount(e);
            return null != r && f(r, t, n);
        };
    },
    [s().v3("guild_has_feature")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.A.getGuild(e)) ? n : o.A.getGuild(e);
            return null != r && t.some((e) => r.features.has(e));
        };
    },
    [s().v3("guild_hub_types")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.A.getGuild(e)) ? n : o.A.getGuild(e);
            return null != r && "number" == typeof r.hubType && t.some((e) => r.hubType === e);
        };
    },
    [s().v3("guild_has_vanity_url")]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null != (n = c.A.getGuild(e)) ? n : o.A.getGuild(e);
            return null != r && t === (null != r.vanityURLCode);
        };
    },
    [s().v3("guild_in_range_by_hash")]: (e) => {
        let t, n;
        for (let [i, a] of e)
            switch (i) {
                case s().v3("hash_key"):
                    t = a;
                    break;
                case s().v3("target"):
                    var r;
                    n = null != (r = parseInt(a)) ? r : 0;
            }
        return (e) => {
            let r = s().v3("".concat(t, ":").concat(e));
            return (r > 0 ? r + r : r >>> 0) % 1e4 < n;
        };
    },
};
