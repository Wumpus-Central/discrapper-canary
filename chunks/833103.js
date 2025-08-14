n.d(t, {
    Ek: () => R,
    HJ: () => C,
    LE: () => w,
    Z2: () => Z,
    Zc: () => E,
    fI: () => T,
    hE: () => N,
    ur: () => I,
}),
    n(781311),
    n(388685),
    n(539854),
    n(290780),
    n(35282);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(913527),
    s = n.n(a),
    o = n(772848),
    c = n(442837),
    u = n(481060),
    d = n(592125),
    h = n(594174),
    p = n(5192),
    f = n(748610),
    g = n(738018),
    m = n(607802),
    b = n(532428),
    y = n(981631),
    x = n(388032);
function j(e) {
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
function O(e) {
    let { searchContext: t, filter: n, queryString: r } = e,
        l = (0, c.e7)([g.Z], () => g.Z.getState(t)),
        a = i.useMemo(() => {
            let e = l.autocompletes[0];
            return null != e && e.group === n ? e.results : [];
        }, [l.autocompletes, n]),
        s = i.useMemo(() => {
            let e = b.ZP[n].key;
            return "".concat(e, " ").concat(r);
        }, [n, r]),
        o = i.useCallback(() => {
            let e = (0, m.kG)(s),
                n = (0, m.g9)(e, s.length - 1, s.length - 1);
            f.Z.updateAutocompleteQuery(t, e, n);
        }, [t, s]),
        u = i.useCallback(() => {
            o();
        }, [o]);
    return (
        i.useEffect(() => {
            r.trim().length > 0 && o();
        }, [s, t, o, r]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: u,
        }
    );
}
function v(e) {
    let { user: t, guildId: n, channelId: r } = e,
        i = p.ZP.getName(n, r, t);
    return {
        value: t.id,
        label: i,
        key: t.id,
    };
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = i.useMemo(() => (0, m.s5)(e), [e]),
        l = i.useMemo(() => (0, m.AH)(e), [e]),
        [a, s] = i.useState(n),
        [o, c] = i.useState(""),
        { filterAutocompleteResults: u, handleFocusFilter: d } = O({
            searchContext: e,
            filter: t,
            queryString: o,
        }),
        p = i.useMemo(() => {
            if (0 === u.length && 0 === a.length) return [];
            let e = [],
                t = new Set();
            return (
                u.length > 0 &&
                    u.forEach((n) => {
                        let i = n.user,
                            a = v({
                                user: i,
                                guildId: r,
                                channelId: l,
                            });
                        t.add(i.id), e.push(a);
                    }),
                a.length > 0 &&
                    a.forEach((n) => {
                        if (t.has(n)) return;
                        let i = h.default.getUser(n);
                        if (null == i) return;
                        let a = v({
                            user: i,
                            guildId: r,
                            channelId: l,
                        });
                        t.add(n), e.unshift(a);
                    }),
                e
            );
        }, [u, a, r, l]),
        f = i.useCallback(() => {
            s([]), c("");
        }, []),
        g = i.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = b.ZP[e];
                return a
                    .map((e) => {
                        let n = h.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == n ? void 0 : n.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: p,
        query: a,
        setQuery: s,
        setQueryString: c,
        handleClearFilter: f,
        getApplyQueryString: g,
        handleFocusFilter: d,
    };
}
function E(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: i.useCallback(
            (t) => {
                var n;
                if (null == t) return;
                let i = h.default.getUser(t.value);
                if (null == i) return;
                let l = null != (n = i.getAvatarURL(e, 80)) ? n : i.avatar;
                return (0, r.jsx)(u.qEK, {
                    src: l,
                    size: u.EFr.SIZE_16,
                    "aria-hidden": !0,
                });
            },
            [e],
        ),
        renderOptionSuffix: i.useCallback((e) => {
            if (null == e) return;
            let t = h.default.getUser(e.value);
            if (null != t)
                return (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: t.username,
                });
        }, []),
    };
}
function S(e) {
    let { channel: t } = e;
    return {
        value: t.id,
        label: (0, m.nl)(t),
        key: t.id,
    };
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [l, a] = i.useState(""),
        { filterAutocompleteResults: s, handleFocusFilter: o } = O({
            searchContext: e,
            filter: y.dCx.FILTER_IN,
            queryString: l,
        }),
        c = i.useMemo(() => {
            if (0 === s.length && 0 === n.length) return [];
            let e = [],
                t = new Set();
            return (
                s.length > 0 &&
                    s.forEach((n) => {
                        let r = n.channel,
                            i = S({ channel: r });
                        t.add(r.id), e.push(i);
                    }),
                n.length > 0 &&
                    n.forEach((n) => {
                        if (t.has(n)) return;
                        let r = d.Z.getChannel(n);
                        if (null == r) return;
                        let i = S({ channel: r });
                        t.add(n), e.unshift(i);
                    }),
                e
            );
        }, [s, n]),
        u = i.useCallback(() => {
            r([]), a("");
        }, []),
        h = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = b.ZP[e];
                return n
                    .map((e) => {
                        let n = d.Z.getChannel(e);
                        if (null == n) return;
                        let r = (0, m.nl)(n);
                        return "".concat(t.key, " ").concat(r);
                    })
                    .join(" ");
            },
            [n],
        );
    return {
        options: c,
        query: n,
        setQuery: r,
        setQueryString: a,
        handleClearFilter: u,
        getApplyQueryString: h,
        handleFocusFilter: o,
    };
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = O({
            searchContext: e,
            filter: y.dCx.FILTER_HAS,
            queryString: "",
        }),
        s = i.useMemo(() => {
            if (0 === l.length && 0 === n.length) return [];
            let e = [],
                t = new Set();
            return (
                n.length > 0 &&
                    n.forEach((n) => {
                        t.add(n),
                            e.push({
                                value: n,
                                label: n,
                                key: n,
                            });
                    }),
                l.length > 0 &&
                    l.forEach((n) => {
                        let { text: r } = n;
                        t.has(r) ||
                            (e.push({
                                value: r,
                                label: r,
                                key: r,
                            }),
                            t.add(r));
                    }),
                e
            );
        }, [l, n]),
        o = i.useCallback(() => {
            r([]);
        }, []),
        c = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = b.ZP[e];
                return n.map((e) => "".concat(t.key, " ").concat(e)).join(" ");
            },
            [n],
        );
    return {
        options: s,
        query: n,
        setQuery: r,
        handleClearFilter: o,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}
let P = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = b.ZP[y.dCx.FILTER_BEFORE],
            i = b.ZP[y.dCx.FILTER_AFTER],
            l = b.ZP[y.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(x.intl.string(x.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(x.intl.string(x.t.KSDx7O), ":"),
            duringFilter: null != (n = null == l ? void 0 : l.key) ? n : "".concat(x.intl.string(x.t.h2NzSU), ":"),
        };
    }, []);
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, o.Z)(), []),
        l = i.useCallback((e) => e.date.isValid(), []),
        a = i.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = P(),
        h = i.useCallback(
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
                    label: x.intl.string(x.t["ptL/DA"]),
                    value: c,
                },
                {
                    key: "After",
                    label: x.intl.string(x.t.waQeER),
                    value: u,
                },
                {
                    key: "During",
                    label: x.intl.string(x.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        f = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = _(j({}, n[r]), { query: t })), n;
            });
        }, []),
        g = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = _(j({}, n[r]), { date: t })), n;
            });
        }, []),
        m = i.useCallback(() => {
            n((e) => [...e, h()]);
        }, [h]),
        b = i.useCallback((e) => {
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
                0 === a.length
                    ? null
                    : a
                          .map((e) => {
                              let { query: t, date: n } = e,
                                  r = n.format(y.b2L);
                              return "".concat(t, " ").concat(r);
                          })
                          .join(" "),
            [a],
        );
    return {
        options: p,
        dates: t,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: g,
        handleAddDateFilter: m,
        handleRemoveDateFilter: b,
        handleClearDateFilter: O,
        getDateQueryString: v,
    };
}
function N(e) {
    let { beforeFilter: t, afterFilter: n, duringFilter: r } = P();
    return i.useMemo(() => {
        let i = {
                [y.dCx.FILTER_FROM]: [],
                [y.dCx.FILTER_MENTIONS]: [],
                [y.dCx.FILTER_HAS]: [],
                [y.dCx.FILTER_IN]: [],
                [y.dCx.FILTER_ON]: [],
                [y.dCx.FILTER_BEFORE]: [],
                [y.dCx.FILTER_AFTER]: [],
            },
            l = 0;
        return (
            e.forEach((e) => {
                if (y.KA4.test(e.type))
                    switch (((l += 1), e.type)) {
                        case y.dCx.ANSWER_USERNAME_FROM:
                            let a = i[y.dCx.FILTER_FROM],
                                c = e.getData("userId");
                            a.push(c);
                            break;
                        case y.dCx.ANSWER_USERNAME_MENTIONS:
                            let u = i[y.dCx.FILTER_MENTIONS],
                                d = e.getData("userId");
                            u.push(d);
                            break;
                        case y.dCx.ANSWER_HAS:
                            let h = i[y.dCx.FILTER_HAS],
                                p = e.getData("has");
                            h.push(p);
                            break;
                        case y.dCx.ANSWER_IN:
                            var f;
                            let g = i[y.dCx.FILTER_IN],
                                m = (null != (f = e.getData("channels")) ? f : []).map((e) => e.id);
                            g.push(...m);
                            break;
                        case y.dCx.ANSWER_BEFORE:
                            let b = i[y.dCx.FILTER_BEFORE],
                                x = e.getData("end"),
                                j = s()(x);
                            b.push({
                                query: t,
                                date: j,
                                id: (0, o.Z)(),
                            });
                            break;
                        case y.dCx.ANSWER_ON:
                            let _ = i[y.dCx.FILTER_ON],
                                O = e.getData("start"),
                                v = s()(O);
                            _.push({
                                query: r,
                                date: v,
                                id: (0, o.Z)(),
                            });
                            break;
                        case y.dCx.ANSWER_AFTER:
                            let C = i[y.dCx.FILTER_AFTER],
                                E = e.getData("start"),
                                S = s()(E);
                            C.push({
                                query: n,
                                date: S,
                                id: (0, o.Z)(),
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
function R(e, t) {
    return e === t || (0, l.isEqual)(e, t);
}
function w(e, t) {
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
