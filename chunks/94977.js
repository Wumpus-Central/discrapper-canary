(n.d(t, { e: () => a, t: () => s }), n(323874), n(14289), n(35956), n(508300));
let i = /^https:\/\/(?:dads|dads-stg)\.discord\.tools\/(?:__development\/link\/?|_dev-tools)\?\S+$/i,
    r = "discord_campaign_builder";
function a(e) {
    if (null == e || !i.test(e)) return !1;
    try {
        let t = new URL(e);
        return "/_dev-tools" === t.pathname
            ? t.searchParams.has("buildOverride")
            : ("/__development/link" === t.pathname || "/__development/link/" === t.pathname) &&
                  t.searchParams.has("s");
    } catch {
        return !1;
    }
}
function s(e) {
    if (!a(e)) return null;
    try {
        let t = new URL(e);
        if ("/_dev-tools" === t.pathname) {
            let e = t.searchParams.getAll("buildOverride");
            if (1 !== e.length) return null;
            let n = e[0].indexOf(":"),
                i = e[0].slice(0, n),
                a = e[0].slice(n + 1).trim();
            if (
                -1 === n ||
                ("branch" !== i && "id" !== i) ||
                0 === a.length ||
                ("id" === i && !/^[a-f0-9]{7,40}$/i.test(a))
            )
                return null;
            return { targetBuildOverride: { [r]: { type: i, id: a } }, expiresAt: "", validForUserIds: [] };
        }
        let n = t.searchParams.getAll("s");
        if (1 !== n.length || n[0].length > 16384) return null;
        let i = /^([A-Za-z0-9+/=]+)\.([A-Za-z0-9+/=]+)$/.exec(n[0]);
        if (null == i) return null;
        let a = JSON.parse(atob(i[2]));
        if (null == a || "object" != typeof a || !("targetBuildOverride" in a) || !("expiresAt" in a)) return null;
        let { targetBuildOverride: s, expiresAt: l } = a;
        if (
            "string" != typeof l ||
            !Number.isFinite(Date.parse(l)) ||
            null == s ||
            "object" != typeof s ||
            1 !== Object.keys(s).length ||
            !(r in s)
        )
            return null;
        let o = s[r];
        if (
            null == o ||
            "object" != typeof o ||
            !("type" in o) ||
            ("branch" !== o.type && "id" !== o.type) ||
            !("id" in o) ||
            "string" != typeof o.id ||
            0 === o.id.trim().length
        )
            return null;
        return {
            targetBuildOverride: { [r]: { type: o.type, id: o.id } },
            expiresAt: new Date(l).toUTCString(),
            validForUserIds: [],
        };
    } catch {
        return null;
    }
}
