n.d(t, {
    Ek: () => A,
    HJ: () => O,
    LE: () => w,
    Z2: () => I,
    Zc: () => E,
    fI: () => T,
    hE: () => N,
    ur: () => P,
}),
    n(781311),
    n(388685),
    n(539854),
    n(290780),
    n(35282);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(913527),
    o = n.n(a),
    s = n(772848),
    c = n(442837),
    u = n(481060),
    d = n(592125),
    p = n(594174),
    h = n(5192),
    f = n(748610),
    m = n(738018),
    g = n(607802),
    b = n(532428),
    y = n(981631),
    _ = n(388032);
function C(e) {
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
function x(e, t) {
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
function v(e) {
    let { searchContext: t, filter: n, queryString: r } = e,
        l = (0, c.e7)([m.Z], () => m.Z.getState(t)),
        a = i.useMemo(() => {
            let e = l.autocompletes[0];
            return null != e && e.group === n ? e.results : [];
        }, [l.autocompletes, n]),
        o = i.useMemo(() => {
            let e = b.ZP[n].key;
            return "".concat(e, " ").concat(r);
        }, [n, r]),
        s = i.useCallback(() => {
            let e = (0, g.kG)(o),
                n = (0, g.g9)(e, o.length - 1, o.length - 1);
            f.Z.updateAutocompleteQuery(t, e, n);
        }, [t, o]),
        u = i.useCallback(() => {
            s();
        }, [s]);
    return (
        i.useEffect(() => {
            r.trim().length > 0 && s();
        }, [o, t, s, r]),
        {
            filterAutocompleteResults: a,
            handleFocusFilter: u,
        }
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
        [a, o] = i.useState(n),
        [s, c] = i.useState(""),
        { filterAutocompleteResults: u, handleFocusFilter: d } = v({
            searchContext: e,
            filter: t,
            queryString: s,
        }),
        h = i.useMemo(() => {
            if (0 === u.length && 0 === a.length) return [];
            let e = [],
                t = new Set();
            return (
                u.length > 0 &&
                    u.forEach((n) => {
                        let i = n.user,
                            a = j({
                                user: i,
                                guildId: r,
                                channelId: l,
                            });
                        t.add(i.id), e.push(a);
                    }),
                a.length > 0 &&
                    a.forEach((n) => {
                        if (t.has(n)) return;
                        let i = p.default.getUser(n);
                        if (null == i) return;
                        let a = j({
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
            o([]), c("");
        }, []),
        m = i.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = b.ZP[e];
                return a
                    .map((e) => {
                        let n = p.default.getUser(e);
                        return "".concat(t.key, " ").concat(null == n ? void 0 : n.username);
                    })
                    .join(" ");
            },
            [a],
        );
    return {
        options: h,
        query: a,
        setQuery: o,
        setQueryString: c,
        handleClearFilter: f,
        getApplyQueryString: m,
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
                let i = p.default.getUser(t.value);
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
            let t = p.default.getUser(e.value);
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
        label: (0, g.nl)(t),
        key: t.id,
    };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        [l, a] = i.useState(""),
        { filterAutocompleteResults: o, handleFocusFilter: s } = v({
            searchContext: e,
            filter: y.dCx.FILTER_IN,
            queryString: l,
        }),
        c = i.useMemo(() => {
            if (0 === o.length && 0 === n.length) return [];
            let e = [],
                t = new Set();
            return (
                o.length > 0 &&
                    o.forEach((n) => {
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
        }, [o, n]),
        u = i.useCallback(() => {
            r([]), a("");
        }, []),
        p = i.useCallback(
            (e) => {
                if (0 === n.length) return null;
                let t = b.ZP[e];
                return n
                    .map((e) => {
                        let n = d.Z.getChannel(e);
                        if (null == n) return;
                        let r = (0, g.nl)(n);
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
        getApplyQueryString: p,
        handleFocusFilter: s,
    };
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [n, r] = i.useState(t),
        { filterAutocompleteResults: l, handleFocusFilter: a } = v({
            searchContext: e,
            filter: y.dCx.FILTER_HAS,
            queryString: "",
        }),
        o = i.useMemo(() => {
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
        s = i.useCallback(() => {
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
        options: o,
        query: n,
        setQuery: r,
        handleClearFilter: s,
        getApplyQueryString: c,
        handleFocusFilter: a,
    };
}
let Z = () =>
    i.useMemo(() => {
        var e, t, n;
        let r = b.ZP[y.dCx.FILTER_BEFORE],
            i = b.ZP[y.dCx.FILTER_AFTER],
            l = b.ZP[y.dCx.FILTER_ON];
        return {
            beforeFilter: null != (e = null == r ? void 0 : r.key) ? e : "".concat(_.intl.string(_.t["qZ+7BA"]), ":"),
            afterFilter: null != (t = null == i ? void 0 : i.key) ? t : "".concat(_.intl.string(_.t.KSDx7O), ":"),
            duringFilter: null != (n = null == l ? void 0 : l.key) ? n : "".concat(_.intl.string(_.t.h2NzSU), ":"),
        };
    }, []);
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, n] = i.useState(e),
        r = i.useCallback(() => (0, s.Z)(), []),
        l = i.useCallback((e) => e.date.isValid(), []),
        a = i.useMemo(() => t.filter(l), [t, l]),
        { beforeFilter: c, afterFilter: u, duringFilter: d } = Z(),
        p = i.useCallback(
            () => ({
                query: c,
                date: o()(),
                id: r(),
            }),
            [c, r],
        ),
        h = i.useMemo(
            () => [
                {
                    key: "Before",
                    label: _.intl.string(_.t["ptL/DA"]),
                    value: c,
                },
                {
                    key: "After",
                    label: _.intl.string(_.t.waQeER),
                    value: u,
                },
                {
                    key: "During",
                    label: _.intl.string(_.t.LT5TnZ),
                    value: d,
                },
            ],
            [c, u, d],
        ),
        f = i.useCallback((e) => {
            let { query: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = x(C({}, n[r]), { query: t })), n;
            });
        }, []),
        m = i.useCallback((e) => {
            let { date: t, index: r } = e;
            n((e) => {
                let n = [...e];
                return (n[r] = x(C({}, n[r]), { date: t })), n;
            });
        }, []),
        g = i.useCallback(() => {
            n((e) => [...e, p()]);
        }, [p]),
        b = i.useCallback((e) => {
            n((t) => {
                let n = [...t];
                return n.splice(e, 1), n;
            });
        }, []),
        v = i.useCallback(() => {
            n([]);
        }, []),
        j = i.useCallback(
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
        options: h,
        dates: t,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: m,
        handleAddDateFilter: g,
        handleRemoveDateFilter: b,
        handleClearDateFilter: v,
        getDateQueryString: j,
    };
}
function N(e) {
    let { beforeFilter: t, afterFilter: n, duringFilter: r } = Z();
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
                            let p = i[y.dCx.FILTER_HAS],
                                h = e.getData("has");
                            p.push(h);
                            break;
                        case y.dCx.ANSWER_IN:
                            var f;
                            let m = i[y.dCx.FILTER_IN],
                                g = (null != (f = e.getData("channels")) ? f : []).map((e) => e.id);
                            m.push(...g);
                            break;
                        case y.dCx.ANSWER_BEFORE:
                            let b = i[y.dCx.FILTER_BEFORE],
                                _ = e.getData("end"),
                                C = o()(_);
                            b.push({
                                query: t,
                                date: C,
                                id: (0, s.Z)(),
                            });
                            break;
                        case y.dCx.ANSWER_ON:
                            let x = i[y.dCx.FILTER_ON],
                                v = e.getData("start"),
                                j = o()(v);
                            x.push({
                                query: r,
                                date: j,
                                id: (0, s.Z)(),
                            });
                            break;
                        case y.dCx.ANSWER_AFTER:
                            let O = i[y.dCx.FILTER_AFTER],
                                E = e.getData("start"),
                                S = o()(E);
                            O.push({
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
function A(e, t) {
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
