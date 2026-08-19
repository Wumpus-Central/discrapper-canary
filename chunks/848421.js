"use strict";
n.d(t, { Kl: () => L });
var r,
    i,
    a,
    o,
    s,
    u,
    c = n(582128),
    l = n.t(c, 2),
    d = n(333007),
    f = n.t(d, 2),
    h = n(207970);
function p() {
    return (p = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
let m = c.createContext(null),
    g = c.createContext(null),
    _ = c.createContext(null),
    y = c.createContext(null),
    v = c.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    b = c.createContext(null);
function w() {
    return null != c.useContext(y);
}
let T = c.createElement(function () {
    var e;
    let t,
        n,
        r,
        i,
        a,
        o,
        s,
        u =
            ((a = c.useContext(b)),
            (o = (V.UseRouteError, (t = c.useContext(g)) || (0, h.Oi)(!1), t)),
            (s =
                (V.UseRouteError,
                (i = ((n = c.useContext(v)) || (0, h.Oi)(!1), (r = n)).matches[r.matches.length - 1]).route.id ||
                    (0, h.Oi)(!1),
                i.route.id)),
            void 0 !== a ? a : null == (e = o.errors) ? void 0 : e[s]),
        l = (0, h.pX)(u) ? u.status + " " + u.statusText : u instanceof Error ? u.message : JSON.stringify(u),
        d = u instanceof Error ? u.stack : null;
    return c.createElement(
        c.Fragment,
        null,
        c.createElement("h2", null, "Unexpected Application Error!"),
        c.createElement("h3", { style: { fontStyle: "italic" } }, l),
        d
            ? c.createElement("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" } }, d)
            : null,
        null,
    );
}, null);
class E extends c.Component {
    constructor(e) {
        super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                  error: void 0 !== e.error ? e.error : t.error,
                  location: t.location,
                  revalidation: e.revalidation || t.revalidation,
              };
    }
    componentDidCatch(e, t) {
        console.error("React Router caught the following error during render", e, t);
    }
    render() {
        return void 0 !== this.state.error
            ? c.createElement(
                  v.Provider,
                  { value: this.props.routeContext },
                  c.createElement(b.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function x(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = c.useContext(m);
    return (
        i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        c.createElement(v.Provider, { value: t }, r)
    );
}
var V =
    (((r = V || {}).UseBlocker = "useBlocker"),
    (r.UseLoaderData = "useLoaderData"),
    (r.UseActionData = "useActionData"),
    (r.UseRouteError = "useRouteError"),
    (r.UseNavigation = "useNavigation"),
    (r.UseRouteLoaderData = "useRouteLoaderData"),
    (r.UseMatches = "useMatches"),
    (r.UseRevalidator = "useRevalidator"),
    (r.UseNavigateStable = "useNavigate"),
    (r.UseRouteId = "useRouteId"),
    r);
let k = {};
function A(e) {
    (0, h.Oi)(!1);
}
function S(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = h.rc.Pop,
        navigator: a,
        static: o = !1,
        future: s,
    } = e;
    w() && (0, h.Oi)(!1);
    let u = t.replace(/^\/*/, "/"),
        l = c.useMemo(
            () => ({ basename: u, navigator: a, static: o, future: p({ v7_relativeSplatPath: !1 }, s) }),
            [u, s, a, o],
        );
    "string" == typeof r && (r = (0, h.Rr)(r));
    let { pathname: d = "/", search: f = "", hash: m = "", state: g = null, key: v = "default" } = r,
        b = c.useMemo(() => {
            let e = (0, h.pb)(d, u);
            return null == e
                ? null
                : { location: { pathname: e, search: f, hash: m, state: g, key: v }, navigationType: i };
        }, [u, d, f, m, g, v, i]);
    return null == b
        ? null
        : c.createElement(_.Provider, { value: l }, c.createElement(y.Provider, { children: n, value: b }));
}
function O(e) {
    let { children: t, location: n } = e;
    return (function (e, t) {
        let n;
        w() || (0, h.Oi)(!1);
        let { navigator: r } = c.useContext(_),
            { matches: i } = c.useContext(v),
            a = i[i.length - 1],
            o = a ? a.params : {};
        a && a.pathname;
        let s = a ? a.pathnameBase : "/";
        a && a.route;
        let u = (w() || (0, h.Oi)(!1), c.useContext(y).location);
        if (t) {
            var l;
            let e = "string" == typeof t ? (0, h.Rr)(t) : t;
            "/" === s || (null == (l = e.pathname) ? void 0 : l.startsWith(s)) || (0, h.Oi)(!1), (n = e);
        } else n = u;
        let d = n.pathname || "/",
            f = d;
        if ("/" !== s) {
            let e = s.replace(/^\//, "").split("/");
            f = "/" + d.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let m = (0, h.ue)(e, { pathname: f }),
            g = (function (e, t, n, r) {
                var i, a;
                if ((void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e)) {
                    if (!n) return null;
                    if (n.errors) e = n.matches;
                    else {
                        if (
                            null == (a = r) ||
                            !a.v7_partialHydration ||
                            0 !== t.length ||
                            n.initialized ||
                            !(n.matches.length > 0)
                        )
                            return null;
                        e = n.matches;
                    }
                }
                let o = e,
                    s = null == (i = n) ? void 0 : i.errors;
                if (null != s) {
                    let e = o.findIndex((e) => e.route.id && (null == s ? void 0 : s[e.route.id]) !== void 0);
                    e >= 0 || (0, h.Oi)(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
                }
                let u = !1,
                    l = -1;
                if (n && r && r.v7_partialHydration)
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id)) {
                            let { loaderData: e, errors: r } = n,
                                i = t.route.loader && void 0 === e[t.route.id] && (!r || void 0 === r[t.route.id]);
                            if (t.route.lazy || i) {
                                (u = !0), (o = l >= 0 ? o.slice(0, l + 1) : [o[0]]);
                                break;
                            }
                        }
                    }
                return o.reduceRight((e, r, i) => {
                    var a;
                    let d,
                        f = !1,
                        h = null,
                        p = null;
                    n &&
                        ((d = s && r.route.id ? s[r.route.id] : void 0),
                        (h = r.route.errorElement || T),
                        u &&
                            (l < 0 && 0 === i
                                ? ((a = "route-fallback"), k[a] || (k[a] = !0), (f = !0), (p = null))
                                : l === i && ((f = !0), (p = r.route.hydrateFallbackElement || null))));
                    let m = t.concat(o.slice(0, i + 1)),
                        g = () => {
                            let t;
                            return (
                                (t = d
                                    ? h
                                    : f
                                      ? p
                                      : r.route.Component
                                        ? c.createElement(r.route.Component, null)
                                        : r.route.element
                                          ? r.route.element
                                          : e),
                                c.createElement(x, {
                                    match: r,
                                    routeContext: { outlet: e, matches: m, isDataRoute: null != n },
                                    children: t,
                                })
                            );
                        };
                    return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === i)
                        ? c.createElement(E, {
                              location: n.location,
                              revalidation: n.revalidation,
                              component: h,
                              error: d,
                              children: g(),
                              routeContext: { outlet: null, matches: m, isDataRoute: !0 },
                          })
                        : g();
                }, null);
            })(
                m &&
                    m.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, o, e.params),
                            pathname: (0, h.HS)([
                                s,
                                r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname,
                            ]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? s
                                    : (0, h.HS)([
                                          s,
                                          r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                i,
                void 0,
                void 0,
            );
        return t && g
            ? c.createElement(
                  y.Provider,
                  {
                      value: {
                          location: p({ pathname: "/", search: "", hash: "", state: null, key: "default" }, n),
                          navigationType: h.rc.Pop,
                      },
                  },
                  g,
              )
            : g;
    })(
        (function e(t, n) {
            void 0 === n && (n = []);
            let r = [];
            return (
                c.Children.forEach(t, (t, i) => {
                    if (!c.isValidElement(t)) return;
                    let a = [...n, i];
                    if (t.type === c.Fragment) return void r.push.apply(r, e(t.props.children, a));
                    t.type !== A && (0, h.Oi)(!1), t.props.index && t.props.children && (0, h.Oi)(!1);
                    let o = {
                        id: t.props.id || a.join("-"),
                        caseSensitive: t.props.caseSensitive,
                        element: t.props.element,
                        Component: t.props.Component,
                        index: t.props.index,
                        path: t.props.path,
                        loader: t.props.loader,
                        action: t.props.action,
                        errorElement: t.props.errorElement,
                        ErrorBoundary: t.props.ErrorBoundary,
                        hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                        shouldRevalidate: t.props.shouldRevalidate,
                        handle: t.props.handle,
                        lazy: t.props.lazy,
                    };
                    t.props.children && (o.children = e(t.props.children, a)), r.push(o);
                }),
                r
            );
        })(t),
        n,
    );
}
l.startTransition;
var R =
    (((i = R || {})[(i.pending = 0)] = "pending"), (i[(i.success = 1)] = "success"), (i[(i.error = 2)] = "error"), i);
new Promise(() => {}), c.Component;
var P = n(806163);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
l.startTransition,
    f.flushSync,
    l.useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((a = s || (s = {})).UseScrollRestoration = "useScrollRestoration"),
    (a.UseSubmit = "useSubmit"),
    (a.UseSubmitFetcher = "useSubmitFetcher"),
    (a.UseFetcher = "useFetcher"),
    (a.useViewTransitionState = "useViewTransitionState"),
    ((o = u || (u = {})).UseFetcher = "useFetcher"),
    (o.UseFetchers = "useFetchers"),
    (o.UseScrollRestoration = "useScrollRestoration");
let C =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? c.useLayoutEffect
        : () => {};
function L(e) {
    let { children: t } = e,
        n = (0, P.W6)(),
        [r, i] = c.useState(() => ({ location: n.location, action: n.action }));
    return (
        C(() => {
            n.listen((e, t) => i({ location: e, action: t }));
        }, [n]),
        c.createElement(
            S,
            { navigationType: r.action, location: r.location, navigator: n },
            c.createElement(O, null, c.createElement(A, { path: "*", element: t })),
        )
    );
}
