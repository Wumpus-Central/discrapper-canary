n.d(t, {
    Ek: () => H,
    HJ: () => x,
    LE: () => Y,
    Lw: () => Z,
    Xb: () => M,
    YL: () => K,
    Z2: () => k,
    fI: () => G,
    fJ: () => F,
    p4: () => V,
    ur: () => j,
    zL: () => B,
}),
    n(781311),
    n(388685),
    n(539854),
    n(290780),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(913527),
    s = n.n(o),
    l = n(772848),
    c = n(442837),
    u = n(481060),
    d = n(668781),
    f = n(471445),
    p = n(592125),
    _ = n(594174),
    m = n(823379),
    h = n(5192),
    g = n(51144),
    E = n(748610),
    b = n(738018),
    y = n(607802),
    O = n(247902),
    v = n(532428),
    S = n(329790),
    I = n(397430),
    T = n(981631),
    C = n(388032);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { searchContext: t, filter: n, queryString: r } = e,
        a = (0, c.e7)([b.Z], () => b.Z.getState(t), [t], c.pF),
        o = i.useMemo(() => {
            let e = a.autocompletes[0];
            return null != e && e.group === n ? e.results : [];
        }, [a.autocompletes, n]),
        s = i.useMemo(() => {
            let e = v.ZP[n].key;
            return "".concat(e, " ").concat(r);
        }, [n, r]),
        l = i.useCallback(() => {
            let e = (0, y.kG)(s),
                n = (0, y.g9)(e, s.length - 1, s.length - 1);
            E.Z.updateAutocompleteQuery({
                searchContext: t,
                tokens: e,
                cursorScope: n,
                queryString: s,
            });
        }, [t, s]),
        u = i.useCallback(() => {
            l();
        }, [l]);
    return (
        i.useEffect(() => {
            r.trim().length > 0 && l();
        }, [s, t, l, r]),
        {
            filterAutocompleteResults: o,
            handleFocusFilter: u,
            autocompleteStoreState: a,
        }
    );
}
function D(e) {
    let { user: t, guildId: n, channelId: r } = e,
        i = h.ZP.getName(n, r, t),
        a = t.getAvatarURL(n, (0, u.dcp)(u.EFr.SIZE_24));
    return {
        value: t.id,
        label: i,
        key: t.id,
        id: t.id,
        leading: {
            type: "avatar",
            src: a,
        },
        trailing: t.username,
    };
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useMemo(() => (0, y.s5)(e), [e]),
        a = i.useMemo(() => (0, y.AH)(e), [e]),
        [o, s] = i.useState(n),
        [l, c] = i.useState(""),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: d,
            autocompleteStoreState: f,
        } = w({
            searchContext: e,
            filter: t,
            queryString: l,
        }),
        p = i.useMemo(() => {
            let e = [],
                t = new Set();
            if (u.length > 0)
                u.forEach((n) => {
                    let i = n.user,
                        o = D({
                            user: i,
                            guildId: r,
                            channelId: a,
                        });
                    t.add(i.id), e.push(o);
                });
            else {
                let { tokens: n } = f,
                    i = n[n.length - 1];
                if (
                    null != i &&
                    (i.type === T.dCx.ANSWER_USERNAME_FROM || i.type === T.dCx.ANSWER_USERNAME_MENTIONS) &&
                    (0, v.fx)(i)
                ) {
                    let n = i.getData("userId"),
                        o = _.default.getUser(n);
                    if (null != o) {
                        let n = D({
                            user: o,
                            guildId: r,
                            channelId: a,
                        });
                        t.add(o.id), e.push(n);
                    }
                }
            }
            return (
                o.length > 0 &&
                    o.forEach((n) => {
                        if (t.has(n)) return;
                        let i = _.default.getUser(n);
                        if (null == i) return;
                        let o = D({
                            user: i,
                            guildId: r,
                            channelId: a,
                        });
                        t.add(n), e.unshift(o);
                    }),
                e
            );
        }, [f, u, o, r, a]),
        h = i.useCallback(() => {
            s([]), c("");
        }, []),
        E = i.useCallback(() => {
            c("");
        }, []),
        b = i.useCallback(
            (e) => {
                if (0 === o.length) return null;
                let t = v.ZP[e];
                return o
                    .map((e) => {
                        let n = _.default.getUser(e);
                        if (null == n) return null;
                        let r = g.ZP.getUserTag(n);
                        return "" === r ? null : "".concat(t.key, " ").concat(r);
                    })
                    .filter(m.lm)
                    .join(" ");
            },
            [o],
        );
    return {
        options: p,
        query: o,
        setQuery: s,
        setQueryString: c,
        handleClearFilter: h,
        getApplyQueryString: b,
        handleFocusFilter: d,
        handleBlurFilter: E,
    };
}
function L(e) {
    let t,
        { channel: n } = e;
    if (n.isDM()) {
        let e = n.getRecipientId(),
            r = _.default.getUser(e);
        null != r &&
            (t = {
                type: "avatar",
                src: r.getAvatarURL(null, (0, u.dcp)(u.EFr.SIZE_20)),
            });
    } else
        t = n.isGroupDM()
            ? (0, r.jsx)(I.MC, {
                  channel: n,
                  avatarSize: u.EFr.SIZE_20,
                  iconSize: "refresh_sm",
              })
            : (0, f.KS)(n);
    return {
        value: n.id,
        label: (0, y.nl)(n),
        key: n.id,
        id: n.id,
        leading: t,
    };
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [a, o] = i.useState(""),
        {
            filterAutocompleteResults: s,
            handleFocusFilter: l,
            autocompleteStoreState: c,
        } = w({
            searchContext: e,
            filter: T.dCx.FILTER_IN,
            queryString: a,
        }),
        u = i.useMemo(() => {
            let t = [],
                r = new Set();
            if (s.length > 0)
                s.forEach((e) => {
                    let n = e.channel,
                        i = L({ channel: n });
                    r.add(n.id), t.push(i);
                });
            else {
                let { tokens: n } = c,
                    i = n[n.length - 1];
                if (null != i && i.type === T.dCx.ANSWER_IN && (0, v.Ni)(i, e)) {
                    let e = i.getData("channelIds");
                    null != e &&
                        e.length > 0 &&
                        e.forEach((e) => {
                            let n = p.Z.getChannel(e);
                            if (null != n) {
                                let e = L({ channel: n });
                                r.add(n.id), t.push(e);
                            }
                        });
                }
            }
            return (
                n.length > 0 &&
                    n.forEach((e) => {
                        if (r.has(e)) return;
                        let n = p.Z.getChannel(e);
                        if (null == n) return;
                        let i = L({ channel: n });
                        r.add(e), t.unshift(i);
                    }),
                t
            );
        }, [c, s, n, e]),
        d = i.useCallback(() => {
            r([]), o("");
        }, []),
        f = i.useCallback(() => {
            o("");
        }, []),
        _ = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = v.ZP[e];
                return n
                    .map((e) => {
                        let n = p.Z.getChannel(e);
                        if (null == n) return;
                        let r = (0, y.nl)(n),
                            i = (0, y.Jl)(r);
                        return "".concat(t.key, " ").concat(i);
                    })
                    .join(" ");
            },
            [n],
        );
    return {
        options: u,
        query: n,
        setQuery: r,
        setQueryString: o,
        handleClearFilter: d,
        getApplyQueryString: _,
        handleFocusFilter: l,
        handleBlurFilter: f,
    };
}
function M(e) {
    switch (e) {
        case C.intl.string(C.t.ZNR2fi):
            return u.xPt;
        case C.intl.string(C.t["20uQR3"]):
            return u.FLu;
        case C.intl.string(C.t.L4lxyE):
            return u.QDj;
        case C.intl.string(C.t["AV/v6i"]):
            return u.aAW;
        case C.intl.string(C.t.XM9XGP):
            return u.Odl;
        case C.intl.string(C.t.TNLcpx):
            return u.XBm;
        case C.intl.string(C.t.F8Wf0e):
            return u.KY1;
        case C.intl.string(C.t.PJgX2h):
            return u.SlE;
        case C.intl.string(C.t.nrpA5E):
            return u.WZu;
        default:
            return null;
    }
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [r, a] = i.useState(t),
        { filterAutocompleteResults: o, handleFocusFilter: s } = w({
            searchContext: e,
            filter: T.dCx.FILTER_HAS,
            queryString: "",
        }),
        l = i.useMemo(() => {
            if (0 === o.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r),
                            e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: n ? M(r) : void 0,
                            });
                    }),
                o.length > 0 &&
                    o.forEach((r) => {
                        let { text: i } = r;
                        t.has(i) ||
                            (e.push({
                                value: i,
                                label: i,
                                key: i,
                                id: i,
                                leading: n ? M(i) : void 0,
                            }),
                            t.add(i));
                    }),
                e
            );
        }, [o, r, n]),
        c = i.useCallback(() => {
            a([]);
        }, []),
        u = i.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = v.ZP[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: l,
        query: r,
        setQuery: a,
        handleClearFilter: c,
        getApplyQueryString: u,
        handleFocusFilter: s,
    };
}
let U = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = v.ZP[T.dCx.FILTER_BEFORE],
            i = v.ZP[T.dCx.FILTER_AFTER],
            a = v.ZP[T.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(C.intl.string(C.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(C.intl.string(C.t.KSDx7M), ":"),
            duringFilter: null != (n = null == a ? void 0 : a.key) ? n : "".concat(C.intl.string(C.t.h2NzSd), ":"),
        };
    }, []);
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, l.Z)(), []),
        a = i.useCallback((e) => e.date.isValid(), []),
        o = i.useMemo(() => t.filter(a), [t, a]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = U(),
        f = i.useCallback(
            () => ({
                query: c,
                date: s()(),
                id: r(),
            }),
            [c, r],
        ),
        p = i.useMemo(
            () => [
                {
                    key: "Before",
                    label: C.intl.string(C.t["ptL/DP"]),
                    value: c,
                },
                {
                    key: "After",
                    label: C.intl.string(C.t.waQeEV),
                    value: u,
                },
                {
                    key: "During",
                    label: C.intl.string(C.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        _ = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = R(N({}, n[r]), { query: t })), n;
            });
        }, []),
        m = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = R(N({}, n[r]), { date: t })), n;
            });
        }, []),
        h = i.useCallback(() => {
            n((e) => [...e, f()]);
        }, [f]),
        g = i.useCallback((e) => {
            n((t) => {
                let n = [...t];
                return n.splice(e, 1), n;
            });
        }, []),
        E = i.useCallback(() => {
            n([]);
        }, []),
        b = i.useCallback(
            () =>
                0 === o.length
                    ? null
                    : o
                          .map((e) => {
                              let { query: t, date: n } = e,
                                  r = n.format(T.b2L);
                              return "".concat(t, " ").concat(r);
                          })
                          .join(" "),
            [o],
        );
    return {
        options: p,
        dates: t,
        validDates: o,
        handleDateQueryChange: _,
        handleDateChange: m,
        handleAddDateFilter: h,
        handleRemoveDateFilter: g,
        handleClearDateFilter: E,
        getDateQueryString: b,
    };
}
function Z(e) {
    switch (e) {
        case C.intl.string(C.t.tPZo4p):
            return u.tBG;
        case C.intl.string(C.t.JL7sRS):
            return u.wGt;
        case C.intl.string(C.t.WjkIKU):
            return u.tYf;
    }
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [r, a] = i.useState(t),
        { filterAutocompleteResults: o, handleFocusFilter: s } = w({
            searchContext: e,
            filter: T.dCx.FILTER_AUTHOR_TYPE,
            queryString: "",
        }),
        l = i.useMemo(() => {
            if (0 === o.length && 0 === r.length) return [];
            let e = [],
                t = new Set();
            return (
                r.length > 0 &&
                    r.forEach((r) => {
                        t.add(r),
                            e.push({
                                value: r,
                                label: r,
                                key: r,
                                id: r,
                                leading: n ? Z(r) : void 0,
                            });
                    }),
                o.length > 0 &&
                    o.forEach((r) => {
                        let { text: i } = r;
                        t.has(i) ||
                            (e.push({
                                value: i,
                                label: i,
                                key: i,
                                id: i,
                                leading: n ? Z(i) : void 0,
                            }),
                            t.add(i));
                    }),
                e
            );
        }, [o, r, n]),
        c = i.useCallback(() => {
            a([]);
        }, []),
        u = i.useCallback(
            (e) => {
                if (0 === r.length) return null;
                let t = v.ZP[e];
                return r.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [r],
        );
    return {
        options: l,
        query: r,
        setQuery: a,
        handleClearFilter: c,
        getApplyQueryString: u,
        handleFocusFilter: s,
    };
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [n, r] = i.useState(t),
        a = i.useMemo(() => {
            var t, r, i;
            let a =
                null !=
                (i =
                    null == (t = (r = v.ZP[T.dCx.FILTER_PINNED]).getAutocompletions)
                        ? void 0
                        : t.call(r, {
                              query: "",
                              maxResults: 10,
                              searchContext: e,
                          }))
                    ? i
                    : [];
            if (0 === a.length && null === n) return [];
            let o = [];
            return (
                a.length > 0 &&
                    a.forEach((e) => {
                        let { text: t } = e;
                        o.push({
                            value: t,
                            label: t,
                            key: t,
                        });
                    }),
                o
            );
        }, [e, n]),
        o = i.useCallback(() => {
            r(null);
        }, []),
        s = i.useCallback(
            (e) => {
                if (null === n) return null;
                let t = v.ZP[e];
                return "".concat(t.key, " ").concat(n);
            },
            [n],
        );
    return {
        options: a,
        query: n,
        setQuery: r,
        handleClearFilter: o,
        getApplyQueryString: s,
    };
}
function V(e, t) {
    let { beforeFilter: n, afterFilter: r, duringFilter: a } = U(),
        o = (0, O.N)(t);
    return i.useMemo(() => {
        let t = {
                [T.dCx.FILTER_FROM]: [],
                [T.dCx.FILTER_MENTIONS]: [],
                [T.dCx.FILTER_HAS]: [],
                [T.dCx.FILTER_IN]: [],
                [T.dCx.FILTER_ON]: [],
                [T.dCx.FILTER_BEFORE]: [],
                [T.dCx.FILTER_AFTER]: [],
                [T.dCx.FILTER_PINNED]: null,
                [T.dCx.FILTER_AUTHOR_TYPE]: [],
            },
            i = [],
            c = 0;
        e.forEach((e) => {
            if (T.KA4.test(e.type))
                switch (e.type) {
                    case T.dCx.ANSWER_USERNAME_FROM:
                        if (o.has(T.dCx.FILTER_FROM)) {
                            let n = t[T.dCx.FILTER_FROM],
                                r = e.getData("userId");
                            n.push(r), (c += 1);
                        }
                        break;
                    case T.dCx.ANSWER_USERNAME_MENTIONS:
                        if (o.has(T.dCx.FILTER_MENTIONS)) {
                            let n = t[T.dCx.FILTER_MENTIONS],
                                r = e.getData("userId");
                            n.push(r), (c += 1);
                        }
                        break;
                    case T.dCx.ANSWER_HAS:
                        let u = t[T.dCx.FILTER_HAS],
                            d = e.getData("has");
                        u.push(d), (c += 1);
                        break;
                    case T.dCx.ANSWER_IN:
                        if (o.has(T.dCx.FILTER_IN)) {
                            var f;
                            let n = t[T.dCx.FILTER_IN],
                                r = null != (f = e.getData("channelIds")) ? f : [];
                            n.push(...r), (c += 1);
                        }
                        break;
                    case T.dCx.ANSWER_BEFORE:
                        let p = t[T.dCx.FILTER_BEFORE],
                            _ = e.getData("end"),
                            m = {
                                query: n,
                                date: s()(_),
                                id: (0, l.Z)(),
                            };
                        p.push(m), i.push(m), (c += 1);
                        break;
                    case T.dCx.ANSWER_ON:
                        let h = t[T.dCx.FILTER_ON],
                            g = e.getData("start"),
                            E = {
                                query: a,
                                date: s()(g),
                                id: (0, l.Z)(),
                            };
                        h.push(E), i.push(E), (c += 1);
                        break;
                    case T.dCx.ANSWER_AFTER:
                        let b = t[T.dCx.FILTER_AFTER],
                            y = e.getData("start"),
                            O = {
                                query: r,
                                date: s()(y),
                                id: (0, l.Z)(),
                            };
                        b.push(O), i.push(O), (c += 1);
                        break;
                    case T.dCx.ANSWER_PINNED:
                        let v = t[T.dCx.FILTER_PINNED],
                            S = e.getData("pinned").toString();
                        null === v ? (v = S) : "true" !== v && "true" === S && (v = S),
                            (t[T.dCx.FILTER_PINNED] = v),
                            (c += 1);
                        break;
                    case T.dCx.ANSWER_AUTHOR_TYPE:
                        if (o.has(T.dCx.FILTER_AUTHOR_TYPE)) {
                            let n = t[T.dCx.FILTER_AUTHOR_TYPE],
                                r = e.getData("author_type");
                            n.push(r), (c += 1);
                        }
                }
        });
        let u = {
            [T.dCx.FILTER_FROM]: t[T.dCx.FILTER_FROM],
            [T.dCx.FILTER_MENTIONS]: t[T.dCx.FILTER_MENTIONS],
            [T.dCx.FILTER_HAS]: t[T.dCx.FILTER_HAS],
            [T.dCx.FILTER_IN]: t[T.dCx.FILTER_IN],
            dateFilters: i,
            [T.dCx.FILTER_AUTHOR_TYPE]: t[T.dCx.FILTER_AUTHOR_TYPE],
            [T.dCx.FILTER_PINNED]: t[T.dCx.FILTER_PINNED],
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: c,
            prefilledSearchFilters: u,
            eligibleFilterTokens: o,
        };
    }, [e, n, r, a, o]);
}
function H(e, t) {
    return e === t || (0, a.isEqual)(e, t);
}
function Y(e, t) {
    var n, r;
    if (e.length !== t.length) return !1;
    let i = new Map();
    for (let t of e) {
        let e = "".concat(t.query, ":").concat(t.date.valueOf()),
            r = null != (n = i.get(e)) ? n : 0;
        i.set(e, r + 1);
    }
    for (let e of t) {
        let t = "".concat(e.query, ":").concat(e.date.valueOf()),
            n = null != (r = i.get(t)) ? r : 0;
        if (0 === n) return !1;
        i.set(t, n - 1);
    }
    for (let e of i.values()) if (0 !== e) return !1;
    return !0;
}
function W(e, t) {
    let n,
        r = v.ZP[e];
    switch (e) {
        case T.dCx.FILTER_FROM:
        case T.dCx.FILTER_MENTIONS:
            let i = _.default.getUser(t);
            n = null == i ? t : "".concat(i.username);
            break;
        case T.dCx.FILTER_IN:
            let a = p.Z.getChannel(t);
            if (null == a) n = t;
            else {
                let e = (0, y.nl)(a);
                n = (0, y.Jl)(e);
            }
            break;
        case T.dCx.FILTER_HAS:
        case T.dCx.FILTER_PINNED:
        case T.dCx.FILTER_AUTHOR_TYPE:
        default:
            n = t;
    }
    return r.key + " " + n;
}
function K(e) {
    let { nonFilterQueryString: t, filterQueryString: n } = e,
        r = +(n.length > 0),
        a = +(t.length > 0),
        o = S.uh - t.length - a - r,
        s = i.useCallback(
            (e) => {
                let { newFilterString: t } = e;
                return n.length + t.length > o;
            },
            [n.length, o],
        ),
        l = i.useMemo(() => {
            let e = 18;
            return n.length + e > o;
        }, [n.length, o]),
        c = i.useCallback(() => {
            d.Z.show({
                title: C.intl.string(C.t.nOqJcX),
                body: C.intl.string(C.t.zzAcsv),
                confirmText: C.intl.string(C.t["qcYY+/"]),
            });
        }, []);
    return {
        validateFilter: i.useCallback((e, t) => !s({ newFilterString: W(e, t) }) || (c(), !1), [s, c]),
        validateDateFilter: i.useCallback(() => !l || (c(), !1), [l, c]),
    };
}
