n.d(t, {
    HJ: () => O,
    Z2: () => S,
    Zc: () => v,
    fI: () => Z,
    gI: () => T,
    hE: () => P,
    ur: () => E,
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
    o = n(442837),
    c = n(481060),
    u = n(592125),
    d = n(594174),
    h = n(5192),
    p = n(738018),
    f = n(518944),
    g = n(607802),
    m = n(532428),
    b = n(981631),
    y = n(388032);
function x(e) {
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
function _(e, t) {
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
function j(e) {
    let { user: t, guildId: n, channelId: r } = e,
        i = h.ZP.getName(n, r, t);
    return {
        value: t.id,
        label: i,
        key: t.id,
    };
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useMemo(() => (0, g.s5)(e), [e]),
        l = i.useMemo(() => (0, g.AH)(e), [e]),
        [a, s] = i.useState(n),
        [o, c] = i.useState(""),
        u = i.useMemo(() => {
            let n = p.Z.getFilterResults(e, t, o);
            if (0 === n.length && 0 === a.length) return [];
            let i = [],
                s = new Set();
            return (
                n.length > 0 &&
                    n.forEach((e) => {
                        let t = e.user,
                            n = j({
                                user: t,
                                guildId: r,
                                channelId: l,
                            });
                        s.add(t.id), i.push(n);
                    }),
                a.length > 0 &&
                    a.forEach((e) => {
                        if (s.has(e)) return;
                        let t = d.default.getUser(e);
                        if (null == t) return;
                        let n = j({
                            user: t,
                            guildId: r,
                            channelId: l,
                        });
                        s.add(e), i.unshift(n);
                    }),
                i
            );
        }, [e, t, o, a, r, l]),
        h = i.useCallback(() => {
            s([]), c("");
        }, []),
        f = i.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = m.ZP[e];
                return a
                    .map((e) => {
                        let n = d.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == n ? void 0 : n.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: u,
        query: a,
        setQuery: s,
        setQueryString: c,
        handleClearFilter: h,
        getApplyQueryString: f,
    };
}
function v(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: i.useCallback(
            (t) => {
                var n;
                if (null == t) return;
                let i = d.default.getUser(t.value);
                if (null == i) return;
                let l = null != (n = i.getAvatarURL(e, 80)) ? n : i.avatar;
                return (0, r.jsx)(c.qEK, {
                    src: l,
                    size: c.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: i.useCallback((e) => {
            if (null == e) return;
            let t = d.default.getUser(e.value);
            if (null != t)
                return (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function C(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, g.nl)(t),
        key: t.id,
    };
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [l, a] = i.useState(""),
        s = i.useMemo(() => {
            let t = p.Z.getFilterResults(e, b.dCx.FILTER_IN, l);
            if (0 === t.length && 0 === n.length) return [];
            let r = [],
                i = new Set();
            return (
                t.length > 0 &&
                    t.forEach((e) => {
                        let t = e.channel,
                            n = C({ channel: t });
                        i.add(t.id), r.push(n);
                    }),
                n.length > 0 &&
                    n.forEach((e) => {
                        if (i.has(e)) return;
                        let t = u.Z.getChannel(e);
                        if (null == t) return;
                        let n = C({ channel: t });
                        i.add(e), r.unshift(n);
                    }),
                r
            );
        }, [e, l, n]),
        o = i.useCallback(() => {
            r([]), a("");
        }, []),
        c = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = m.ZP[e];
                return n
                    .map((e) => {
                        let n = u.Z.getChannel(e);
                        if (null == n) return;
                        let r = (0, g.nl)(n);
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
        getApplyQueryString: c,
    };
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        l = i.useMemo(() => {
            let t = p.Z.getFilterResults(e, b.dCx.FILTER_HAS, "");
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
                let t = m.ZP[e];
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
let I = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = m.ZP[b.dCx.FILTER_BEFORE],
            i = m.ZP[b.dCx.FILTER_AFTER],
            l = m.ZP[b.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(y.intl.string(y.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(y.intl.string(y.t.KSDx7O), ":"),
            duringFilter: null != (n = null == l ? void 0 : l.key) ? n : "".concat(y.intl.string(y.t.h2NzSU), ":"),
        };
    }, []);
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, s.Z)(), []),
        l = i.useCallback((e) => e.date.isValid(), []),
        o = i.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = I(),
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
                    label: y.intl.string(y.t["ptL/DA"]),
                    value: c,
                },
                {
                    key: "After",
                    label: y.intl.string(y.t.waQeER),
                    value: u,
                },
                {
                    key: "During",
                    label: y.intl.string(y.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        f = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = _(x({}, n[r]), { query: t })), n;
            });
        }, []),
        g = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = _(x({}, n[r]), { date: t })), n;
            });
        }, []),
        m = i.useCallback(() => {
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
                                  r = n.format(b.b2L);
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
        handleDateChange: g,
        handleAddDateFilter: m,
        handleRemoveDateFilter: j,
        handleClearDateFilter: O,
        getDateQueryString: v,
    };
}
function P(e) {
    let { beforeFilter: t, afterFilter: n, duringFilter: r } = I();
    return i.useMemo(() => {
        let i = {
                [b.dCx.FILTER_FROM]: [],
                [b.dCx.FILTER_MENTIONS]: [],
                [b.dCx.FILTER_HAS]: [],
                [b.dCx.FILTER_IN]: [],
                [b.dCx.FILTER_ON]: [],
                [b.dCx.FILTER_BEFORE]: [],
                [b.dCx.FILTER_AFTER]: [],
            },
            l = 0;
        return (
            e.forEach((e) => {
                if (b.KA4.test(e.type))
                    switch (((l += 1), e.type)) {
                        case b.dCx.ANSWER_USERNAME_FROM:
                            let o = i[b.dCx.FILTER_FROM],
                                c = e.getData("userId");
                            o.push(c);
                            break;
                        case b.dCx.ANSWER_USERNAME_MENTIONS:
                            let u = i[b.dCx.FILTER_MENTIONS],
                                d = e.getData("userId");
                            u.push(d);
                            break;
                        case b.dCx.ANSWER_HAS:
                            let h = i[b.dCx.FILTER_HAS],
                                p = e.getData("has");
                            h.push(p);
                            break;
                        case b.dCx.ANSWER_IN:
                            var f;
                            let g = i[b.dCx.FILTER_IN],
                                m = (null != (f = e.getData("channels")) ? f : []).map((e) => e.id);
                            g.push(...m);
                            break;
                        case b.dCx.ANSWER_BEFORE:
                            let y = i[b.dCx.FILTER_BEFORE],
                                x = e.getData("end"),
                                _ = a()(x);
                            y.push({
                                query: t,
                                date: _,
                                id: (0, s.Z)(),
                            });
                            break;
                        case b.dCx.ANSWER_ON:
                            let j = i[b.dCx.FILTER_ON],
                                O = e.getData("start"),
                                v = a()(O);
                            j.push({
                                query: r,
                                date: v,
                                id: (0, s.Z)(),
                            });
                            break;
                        case b.dCx.ANSWER_AFTER:
                            let C = i[b.dCx.FILTER_AFTER],
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
function T(e) {
    let t = (0, o.e7)([f.Z], () => {
        let t = (0, g.Tm)(e);
        return f.Z.getSearchResultsQueryString(t);
    });
    return i.useMemo(() => (0, g.kG)(null != t ? t : ""), [t]);
}
