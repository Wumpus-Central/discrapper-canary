n.d(t, {
    HJ: () => _,
    Z2: () => C,
    Zc: () => j,
    fI: () => S,
    hE: () => I,
    ur: () => v,
}),
    n(388685),
    n(539854),
    n(290780),
    n(35282);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l),
    s = n(772848),
    o = n(481060),
    c = n(592125),
    u = n(594174),
    d = n(5192),
    h = n(738018),
    p = n(607802),
    f = n(532428),
    g = n(981631),
    m = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { user: t, guildId: n, channelId: r } = e,
        i = d.ZP.getName(n, r, t);
    return {
        value: t.id,
        label: i,
        key: t.id,
    };
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useMemo(() => (0, p.s5)(e), [e]),
        l = i.useMemo(() => (0, p.AH)(e), [e]),
        [a, s] = i.useState(n),
        [o, c] = i.useState(""),
        d = i.useMemo(() => {
            let n = h.Z.getFilterResults(e, t, o);
            if (0 === n.length && 0 === a.length) return [];
            let i = [],
                s = new Set();
            return (
                n.length > 0 &&
                    n.forEach((e) => {
                        let t = e.user,
                            n = x({
                                user: t,
                                guildId: r,
                                channelId: l,
                            });
                        s.add(t.id), i.push(n);
                    }),
                a.length > 0 &&
                    a.forEach((e) => {
                        if (s.has(e)) return;
                        let t = u.default.getUser(e);
                        if (null == t) return;
                        let n = x({
                            user: t,
                            guildId: r,
                            channelId: l,
                        });
                        s.add(e), i.unshift(n);
                    }),
                i
            );
        }, [e, t, o, a, r, l]),
        g = i.useCallback(() => {
            s([]), c("");
        }, []),
        m = i.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = f.ZP[e];
                return a
                    .map((e) => {
                        let n = u.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == n ? void 0 : n.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: d,
        query: a,
        setQuery: s,
        setQueryString: c,
        handleClearFilter: g,
        getApplyQueryString: m,
    };
}
function j(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: i.useCallback(
            (t) => {
                var n;
                if (null == t) return;
                let i = u.default.getUser(t.value);
                if (null == i) return;
                let l = null != (n = i.getAvatarURL(e, 80)) ? n : i.avatar;
                return (0, r.jsx)(o.qEK, {
                    src: l,
                    size: o.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: i.useCallback((e) => {
            if (null == e) return;
            let t = u.default.getUser(e.value);
            if (null != t)
                return (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function O(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, p.nl)(t),
        key: t.id,
    };
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [l, a] = i.useState(""),
        s = i.useMemo(() => {
            let t = h.Z.getFilterResults(e, g.dCx.FILTER_IN, l);
            if (0 === t.length && 0 === n.length) return [];
            let r = [],
                i = new Set();
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let t = e.channel,
                            n = O({ channel: t });
                        i.add(t.id), r.push(n);
                    }),
                n.length > 0 &&
                    n.forEach((e) => {
                        if (i.has(e)) return;
                        let t = c.Z.getChannel(e);
                        if (null == t) return;
                        let n = O({ channel: t });
                        i.add(e), r.unshift(n);
                    }),
                r
            );
        }, [e, l, n]),
        o = i.useCallback(() => {
            r([]), a("");
        }, []),
        u = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = f.ZP[e];
                return n
                    .map((e) => {
                        let n = c.Z.getChannel(e);
                        if (null == n) return;
                        let r = (0, p.nl)(n);
                        return "".concat(t.key, " ").concat(r);
                    })
                    .join(" ");
            },
            [n],
        );
    return {
        options: s,
        query: n,
        setQuery: r,
        setQueryString: a,
        handleClearFilter: o,
        getApplyQueryString: u,
    };
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        l = i.useMemo(() => {
            let t = h.Z.getFilterResults(e, g.dCx.FILTER_HAS, "");
            if (0 === t.length) return [];
            let n = [];
            return (
                n.push(
                    ...t.map((e) => {
                        let { text: t } = e;
                        return {
                            value: t,
                            label: t,
                            key: t,
                        };
                    }),
                ),
                n
            );
        }, [e]),
        a = i.useCallback(() => {
            r([]);
        }, []),
        s = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = f.ZP[e];
                return n.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [n],
        );
    return {
        options: l,
        query: n,
        setQuery: r,
        handleClearFilter: a,
        getApplyQueryString: s,
    };
}
let E = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = f.ZP[g.dCx.FILTER_BEFORE],
            i = f.ZP[g.dCx.FILTER_AFTER],
            l = f.ZP[g.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(m.intl.string(m.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(m.intl.string(m.t.KSDx7O), ":"),
            duringFilter: null != (n = null == l ? void 0 : l.key) ? n : "".concat(m.intl.string(m.t.h2NzSU), ":"),
        };
    }, []);
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, s.Z)(), []),
        l = i.useCallback((e) => e.date.isValid(), []),
        o = i.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = E(),
        h = i.useCallback(
            () => ({
                query: c,
                date: a()(),
                id: r(),
            }),
            [c, r],
        ),
        p = i.useMemo(
            () => [
                {
                    key: "Before",
                    label: m.intl.string(m.t["ptL/DA"]),
                    value: c,
                },
                {
                    key: "After",
                    label: m.intl.string(m.t.waQeER),
                    value: u,
                },
                {
                    key: "During",
                    label: m.intl.string(m.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        f = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = y(b({}, n[r]), { query: t })), n;
            });
        }, []),
        x = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = y(b({}, n[r]), { date: t })), n;
            });
        }, []),
        _ = i.useCallback(() => {
            n((e) => [...e, h()]);
        }, [h]),
        j = i.useCallback((e) => {
            n((t) => {
                let n = [...t];
                return n.splice(e, 1), n;
            });
        }, []),
        O = i.useCallback(() => {
            n([]);
        }, []),
        v = i.useCallback(
            () =>
                0 === o.length
                    ? null
                    : o
                          .map((e) => {
                              let { query: t, date: n } = e,
                                  r = n.format(g.b2L);
                              return "".concat(t, " ").concat(r);
                          })
                          .join(" "),
            [o],
        );
    return {
        options: p,
        dates: t,
        validDates: o,
        handleDateQueryChange: f,
        handleDateChange: x,
        handleAddDateFilter: _,
        handleRemoveDateFilter: j,
        handleClearDateFilter: O,
        getDateQueryString: v,
    };
}
function I(e) {
    let { beforeFilter: t, afterFilter: n, duringFilter: r } = E();
    return i.useMemo(() => {
        let i = {
                [g.dCx.FILTER_FROM]: [],
                [g.dCx.FILTER_MENTIONS]: [],
                [g.dCx.FILTER_HAS]: [],
                [g.dCx.FILTER_IN]: [],
                [g.dCx.FILTER_ON]: [],
                [g.dCx.FILTER_BEFORE]: [],
                [g.dCx.FILTER_AFTER]: [],
            },
            l = 0;
        return (
            e.forEach((e) => {
                if (g.KA4.test(e.type))
                    switch (((l += 1), e.type)) {
                        case g.dCx.ANSWER_USERNAME_FROM:
                            let o = i[g.dCx.FILTER_FROM],
                                c = e.getData("userId");
                            o.push(c);
                            break;
                        case g.dCx.ANSWER_USERNAME_MENTIONS:
                            let u = i[g.dCx.FILTER_MENTIONS],
                                d = e.getData("userId");
                            u.push(d);
                            break;
                        case g.dCx.ANSWER_HAS:
                            let h = i[g.dCx.FILTER_HAS],
                                p = e.getData("has");
                            h.push(p);
                            break;
                        case g.dCx.ANSWER_IN:
                            var f;
                            let m = i[g.dCx.FILTER_IN],
                                b = (null != (f = e.getData("channels")) ? f : []).map((e) => e.id);
                            m.push(...b);
                            break;
                        case g.dCx.ANSWER_BEFORE:
                            let y = i[g.dCx.FILTER_BEFORE],
                                x = e.getData("end"),
                                _ = a()(x);
                            y.push({
                                query: t,
                                date: _,
                                id: (0, s.Z)(),
                            });
                            break;
                        case g.dCx.ANSWER_ON:
                            let j = i[g.dCx.FILTER_ON],
                                O = e.getData("start"),
                                v = a()(O);
                            j.push({
                                query: r,
                                date: v,
                                id: (0, s.Z)(),
                            });
                            break;
                        case g.dCx.ANSWER_AFTER:
                            let C = i[g.dCx.FILTER_AFTER],
                                E = e.getData("start"),
                                S = a()(E);
                            C.push({
                                query: n,
                                date: S,
                                id: (0, s.Z)(),
                            });
                    }
            }),
            {
                searchFilters: i,
                totalFilters: l,
            }
        );
    }, [e, t, n, r]);
}
