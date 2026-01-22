n.d(t, { A: () => g });
var r = n(353640),
    l = n(499867),
    a = n(121894),
    o = n(506774),
    i = n(626584),
    c = n(954571),
    s = n(315290),
    u = n(652215);
function d(e) {
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
function p(e, t) {
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e) {
    var t = (function (e, t) {
        if ("object" !== _(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== _(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === _(t) ? t : String(t);
}
function _(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let m = "UserFlowAnalyticsStore_current",
    S = "UserFlowAnalyticsStore";
function N(e) {
    if (e === s.do.UNKNOWN) return null;
    let t = o.w.get("".concat(S, "-").concat(e));
    if (null == t) return null;
    let { version: n } = t,
        r = f(t, ["version"]);
    return 1 !== n ? null : r;
}
new i.A("UserFlowAnalytics");
let I = (0, r.v)()(
    (0, l.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            var e;
            let n = null != (e = t().currentFlow) ? e : o.w.get(m);
            if (null == n) return null;
            let { [n]: r } = t().flows,
                l = null != r ? r : N(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
    })),
);
function O(e, t) {
    let n = I.getState().flows,
        { [e]: r } = n,
        l = f(n, [b(e)]),
        o = null != r ? r : N(e);
    ((null == o ? void 0 : o.currentStep) == null || o.currentStep !== t) &&
        (0, a.r)(() => {
            I.setState({
                flows: p(d({}, l), {
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1,
                    },
                }),
                currentFlow: e,
            });
        });
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e;
    if (e === s.do.ANY) {
        var l;
        r = null != (l = I.getState().activeFlow()) ? l : s.do.UNKNOWN;
    }
    let o = I.getState().flows,
        { [r]: i } = o,
        c = f(o, [b(r)]),
        u = null != i ? i : N(r);
    null == u ||
        null == u.currentStep ||
        (u.currentStep !== t &&
            (0, a.r)(() => {
                I.setState({
                    flows: p(d({}, c), {
                        [r]: p(d({}, u), {
                            lastStep: u.currentStep,
                            lastTimestamp: u.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        }),
                    }),
                    currentFlow: r,
                });
            }));
}
function E() {
    return null != I.getState().activeFlow();
}
I.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        var t;
        if (
            null != e &&
            (!(function (e) {
                if (e.type === s.do.UNKNOWN) return;
                let t = "".concat(S, "-").concat(e.type);
                e.ended
                    ? (o.w.remove(t), o.w.remove(m))
                    : (o.w.set("".concat(S, "-").concat(e.type), p(d({}, e), { version: 1 })), o.w.set(m, e.type));
            })(e),
            c.default.track(
                u.HAw.NUO_TRANSITION,
                {
                    flow_type: e.type,
                    from_step: e.lastStep,
                    to_step: e.currentStep,
                    seconds_on_from_step:
                        "function" != typeof (null == (t = e.lastTimestamp) ? void 0 : t.getTime)
                            ? 0
                            : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1000,
                },
                { flush: !0 },
            ),
            e.ended)
        ) {
            let t = d({}, I.getState().flows);
            delete t[e.type],
                (0, a.r)(() => {
                    I.setState({
                        flows: t,
                        currentFlow: null,
                    });
                });
        }
    },
);
let g = {
    flowStart: O,
    flowStepOrStart: function (e, t) {
        E() ? T(e, t) : O(e, t);
    },
    flowStep: T,
    hasActiveFlow: E,
};
