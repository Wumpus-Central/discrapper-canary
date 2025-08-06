l.d(t, {
    HJ: () => h,
    Z2: () => g,
    Zc: () => p,
}),
    l(388685),
    l(539854),
    l(290780);
var n = l(255367),
    r = l(73800),
    a = l(481060),
    i = l(594174),
    u = l(5192),
    s = l(738018),
    o = l(607802),
    c = l(532428),
    d = l(981631);
function f(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = u.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function h(e, t) {
    let l = r.useMemo(() => (0, o.s5)(e), [e]),
        n = r.useMemo(() => (0, o.AH)(e), [e]),
        [a, u] = r.useState([]),
        [d, h] = r.useState(""),
        p = r.useMemo(() => {
            let r = s.Z.getFilterResults(e, t, d);
            if (0 === r.length) return [];
            let u = [],
                o = r.map((e) =>
                    f({
                        user: e.user,
                        guildId: l,
                        channelId: n,
                    }),
                ),
                c = new Set(o.map((e) => (null == e ? void 0 : e.value)));
            return (
                u.push(...o),
                a.length > 0 &&
                    a.forEach((e) => {
                        if (c.has(e)) return;
                        let t = i.default.getUser(e);
                        if (null == t) return;
                        let r = f({
                            user: t,
                            guildId: l,
                            channelId: n,
                        });
                        u.unshift(r);
                    }),
                u
            );
        }, [e, t, d, a, l, n]),
        g = r.useCallback(() => {
            u([]), h("");
        }, []),
        b = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = c.ZP[e];
                return a
                    .map((e) => {
                        let l = i.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: p,
        query: a,
        setQuery: u,
        setQueryString: h,
        handleClearFilter: g,
        getApplyQueryString: b,
    };
}
function p(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: r.useCallback(
            (t) => {
                var l;
                if (null == t) return;
                let r = i.default.getUser(t.value);
                if (null == r) return;
                let u = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
                return (0, n.jsx)(a.qEK, {
                    src: u,
                    size: a.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: r.useCallback((e) => {
            if (null == e) return;
            let t = i.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function g(e) {
    let [t, l] = r.useState([]),
        n = r.useMemo(() => {
            let t = s.Z.getFilterResults(e, d.dCx.FILTER_HAS, "");
            if (0 === t.length) return [];
            let l = [];
            return (
                l.push(
                    ...t.map((e) => {
                        let { text: t } = e;
                        return {
                            value: t,
                            label: t,
                            key: t,
                        };
                    }),
                ),
                l
            );
        }, [e]),
        a = r.useCallback(() => {
            l([]);
        }, []),
        i = r.useCallback(
            (e) => {
                if (0 === t.length) return null;
                let l = c.ZP[e];
                return t.map((e) => "".concat(l.key, " ").concat(e)).join(" ");
            },
            [t],
        );
    return {
        options: n,
        query: t,
        setQuery: l,
        handleClearFilter: a,
        getApplyQueryString: i,
    };
}
