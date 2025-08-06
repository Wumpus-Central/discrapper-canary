l.d(t, {
    HJ: () => C,
    Z2: () => O,
    Zc: () => S,
    fI: () => F,
    ur: () => j,
}),
    l(388685),
    l(539854),
    l(290780);
var n = l(255367),
    r = l(73800),
    a = l(913527),
    i = l.n(a),
    u = l(772848),
    s = l(481060),
    o = l(592125),
    c = l(594174),
    d = l(5192),
    h = l(738018),
    f = l(607802),
    g = l(532428),
    b = l(981631),
    p = l(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function y(e) {
    let { user: t, guildId: l, channelId: n } = e,
        r = d.ZP.getName(l, n, t);
    return {
        value: t.id,
        label: r,
        key: t.id,
    };
}
function C(e, t) {
    let l = r.useMemo(() => (0, f.s5)(e), [e]),
        n = r.useMemo(() => (0, f.AH)(e), [e]),
        [a, i] = r.useState([]),
        [u, s] = r.useState(""),
        o = r.useMemo(() => {
            let r = h.Z.getFilterResults(e, t, u);
            if (0 === r.length) return [];
            let i = [],
                s = new Set();
            return (
                r.forEach((e) => {
                    let t = e.user,
                        r = y({
                            user: t,
                            guildId: l,
                            channelId: n,
                        });
                    s.add(t.id), i.push(r);
                }),
                a.length > 0 &&
                    a.forEach((e) => {
                        if (s.has(e)) return;
                        let t = c.default.getUser(e);
                        if (null == t) return;
                        let r = y({
                            user: t,
                            guildId: l,
                            channelId: n,
                        });
                        i.unshift(r);
                    }),
                i
            );
        }, [e, t, u, a, l, n]),
        d = r.useCallback(() => {
            i([]), s("");
        }, []),
        b = r.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = g.ZP[e];
                return a
                    .map((e) => {
                        let l = c.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: o,
        query: a,
        setQuery: i,
        setQueryString: s,
        handleClearFilter: d,
        getApplyQueryString: b,
    };
}
function S(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: r.useCallback(
            (t) => {
                var l;
                if (null == t) return;
                let r = c.default.getUser(t.value);
                if (null == r) return;
                let a = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
                return (0, n.jsx)(s.qEK, {
                    src: a,
                    size: s.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: r.useCallback((e) => {
            if (null == e) return;
            let t = c.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function v(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, f.nl)(t),
        key: t.id,
    };
}
function j(e) {
    let [t, l] = r.useState([]),
        [n, a] = r.useState(""),
        i = r.useMemo(() => {
            let l = h.Z.getFilterResults(e, b.dCx.FILTER_IN, n);
            if (0 === l.length) return [];
            let r = [],
                a = new Set();
            return (
                l.forEach((e) => {
                    let t = e.channel,
                        l = v({ channel: t });
                    a.add(t.id), r.push(l);
                }),
                t.length > 0 &&
                    t.forEach((e) => {
                        if (a.has(e)) return;
                        let t = o.Z.getChannel(e);
                        if (null == t) return;
                        let l = v({ channel: t });
                        r.unshift(l);
                    }),
                r
            );
        }, [e, n, t]),
        u = r.useCallback(() => {
            l([]), a("");
        }, []),
        s = r.useCallback(
            (e) => {
                if (0 === t.length) return null;
                let l = g.ZP[e];
                return t
                    .map((e) => {
                        let t = o.Z.getChannel(e);
                        if (null == t) return;
                        let n = (0, f.nl)(t);
                        return "".concat(l.key, " ").concat(n);
                    })
                    .join(" ");
            },
            [t],
        );
    return {
        options: i,
        query: t,
        setQuery: l,
        setQueryString: a,
        handleClearFilter: u,
        getApplyQueryString: s,
    };
}
function O(e) {
    let [t, l] = r.useState([]),
        n = r.useMemo(() => {
            let t = h.Z.getFilterResults(e, b.dCx.FILTER_HAS, "");
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
                let l = g.ZP[e];
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
let k = () =>
    r.useMemo(() => {
        var e, t, l;
        let n = g.ZP[b.dCx.FILTER_BEFORE],
            r = g.ZP[b.dCx.FILTER_AFTER],
            a = g.ZP[b.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == n ? void 0 : n.key) ? e : "".concat(p.intl.string(p.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == r ? void 0 : r.key) ? t : "".concat(p.intl.string(p.t.KSDx7O), ":"),
            duringFilter: null != (l = null == a ? void 0 : a.key) ? l : "".concat(p.intl.string(p.t.h2NzSU), ":"),
        };
    }, []);
function F() {
    let [e, t] = r.useState([]),
        l = r.useCallback(() => (0, u.Z)(), []),
        n = r.useCallback((e) => e.date.isValid(), []),
        a = r.useMemo(() => e.filter(n), [e, n]),
        { beforeFilter: s, afterFilter: o, duringFilter: c } = k(),
        d = r.useCallback(
            () => ({
                query: s,
                date: i()(),
                id: l(),
            }),
            [s, l],
        ),
        h = r.useMemo(
            () => [
                {
                    key: "Before",
                    label: p.intl.string(p.t["ptL/DA"]),
                    value: s,
                    id: l(),
                },
                {
                    key: "After",
                    label: p.intl.string(p.t.waQeER),
                    value: o,
                    id: l(),
                },
                {
                    key: "During",
                    label: p.intl.string(p.t.LT5TnZ),
                    value: c,
                    id: l(),
                },
            ],
            [s, l, o, c],
        ),
        f = r.useCallback((e) => {
            let { query: l, index: n } = e;
            t((e) => {
                let t = [...e];
                return (t[n] = x(m({}, t[n]), { query: l })), t;
            });
        }, []),
        g = r.useCallback((e) => {
            let { date: l, index: n } = e;
            t((e) => {
                let t = [...e];
                return (t[n] = x(m({}, t[n]), { date: l })), t;
            });
        }, []),
        y = r.useCallback(() => {
            t((e) => [...e, d()]);
        }, [d]),
        C = r.useCallback((e) => {
            t((t) => {
                let l = [...t];
                return l.splice(e, 1), l;
            });
        }, []),
        S = r.useCallback(() => {
            t([]);
        }, []),
        v = r.useCallback(
            () =>
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: l } = e,
                                  n = l.format(b.b2L);
                              return "".concat(t, " ").concat(n);
                          })
                          .join(" "),
            [a],
        );
    return {
        options: h,
        dates: e,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: g,
        handleAddDateFilter: y,
        handleRemoveDateFilter: C,
        handleClearDateFilter: S,
        getDateQueryString: v,
    };
}
