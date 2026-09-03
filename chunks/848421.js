r.d(t, { Kl: () => N });
var n,
    i,
    o,
    a,
    s,
    u,
    c = r(582128),
    l = r.t(c, 2),
    d = r(333007),
    f = r.t(d, 2),
    p = r(207970);
function h() {
    return (h = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
          }).apply(this, arguments);
}
let g = c.createContext(null),
    v = c.createContext(null),
    y = c.createContext(null),
    m = c.createContext(null),
    b = c.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    E = c.createContext(null);
function O() {
    return null != c.useContext(m);
}
let T = c.createElement(function () {
    var e;
    let t,
        r,
        n,
        i,
        o,
        a,
        s,
        u =
            ((o = c.useContext(E)),
            (a = (x.UseRouteError, (t = c.useContext(v)) || (0, p.Oi)(!1), t)),
            (s =
                (x.UseRouteError,
                (i = ((r = c.useContext(b)) || (0, p.Oi)(!1), (n = r)).matches[n.matches.length - 1]).route.id ||
                    (0, p.Oi)(!1),
                i.route.id)),
            void 0 !== o ? o : null == (e = a.errors) ? void 0 : e[s]),
        l = (0, p.pX)(u) ? u.status + " " + u.statusText : u instanceof Error ? u.message : JSON.stringify(u),
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
class S extends c.Component {
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
                  b.Provider,
                  { value: this.props.routeContext },
                  c.createElement(E.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function w(e) {
    let { routeContext: t, match: r, children: n } = e,
        i = c.useContext(g);
    return (
        i &&
            i.static &&
            i.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
        c.createElement(b.Provider, { value: t }, n)
    );
}
var x =
    (((n = x || {}).UseBlocker = "useBlocker"),
    (n.UseLoaderData = "useLoaderData"),
    (n.UseActionData = "useActionData"),
    (n.UseRouteError = "useRouteError"),
    (n.UseNavigation = "useNavigation"),
    (n.UseRouteLoaderData = "useRouteLoaderData"),
    (n.UseMatches = "useMatches"),
    (n.UseRevalidator = "useRevalidator"),
    (n.UseNavigateStable = "useNavigate"),
    (n.UseRouteId = "useRouteId"),
    n);
let C = {};
function D(e) {
    (0, p.Oi)(!1);
}
function k(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: i = p.rc.Pop,
        navigator: o,
        static: a = !1,
        future: s,
    } = e;
    O() && (0, p.Oi)(!1);
    let u = t.replace(/^\/*/, "/"),
        l = c.useMemo(
            () => ({ basename: u, navigator: o, static: a, future: h({ v7_relativeSplatPath: !1 }, s) }),
            [u, s, o, a],
        );
    "string" == typeof n && (n = (0, p.Rr)(n));
    let { pathname: d = "/", search: f = "", hash: g = "", state: v = null, key: b = "default" } = n,
        E = c.useMemo(() => {
            let e = (0, p.pb)(d, u);
            return null == e
                ? null
                : { location: { pathname: e, search: f, hash: g, state: v, key: b }, navigationType: i };
        }, [u, d, f, g, v, b, i]);
    return null == E
        ? null
        : c.createElement(y.Provider, { value: l }, c.createElement(m.Provider, { children: r, value: E }));
}
function A(e) {
    let { children: t, location: r } = e;
    return (function (e, t) {
        let r;
        O() || (0, p.Oi)(!1);
        let { navigator: n } = c.useContext(y),
            { matches: i } = c.useContext(b),
            o = i[i.length - 1],
            a = o ? o.params : {};
        o && o.pathname;
        let s = o ? o.pathnameBase : "/";
        o && o.route;
        let u = (O() || (0, p.Oi)(!1), c.useContext(m).location);
        if (t) {
            var l;
            let e = "string" == typeof t ? (0, p.Rr)(t) : t;
            "/" === s || (null == (l = e.pathname) ? void 0 : l.startsWith(s)) || (0, p.Oi)(!1), (r = e);
        } else r = u;
        let d = r.pathname || "/",
            f = d;
        if ("/" !== s) {
            let e = s.replace(/^\//, "").split("/");
            f = "/" + d.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let g = (0, p.ue)(e, { pathname: f }),
            v = (function (e, t, r, n) {
                var i, o;
                if ((void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e)) {
                    if (!r) return null;
                    if (r.errors) e = r.matches;
                    else {
                        if (
                            null == (o = n) ||
                            !o.v7_partialHydration ||
                            0 !== t.length ||
                            r.initialized ||
                            !(r.matches.length > 0)
                        )
                            return null;
                        e = r.matches;
                    }
                }
                let a = e,
                    s = null == (i = r) ? void 0 : i.errors;
                if (null != s) {
                    let e = a.findIndex((e) => e.route.id && (null == s ? void 0 : s[e.route.id]) !== void 0);
                    e >= 0 || (0, p.Oi)(!1), (a = a.slice(0, Math.min(a.length, e + 1)));
                }
                let u = !1,
                    l = -1;
                if (r && n && n.v7_partialHydration)
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id)) {
                            let { loaderData: e, errors: n } = r,
                                i = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
                            if (t.route.lazy || i) {
                                (u = !0), (a = l >= 0 ? a.slice(0, l + 1) : [a[0]]);
                                break;
                            }
                        }
                    }
                return a.reduceRight((e, n, i) => {
                    var o;
                    let d,
                        f = !1,
                        p = null,
                        h = null;
                    r &&
                        ((d = s && n.route.id ? s[n.route.id] : void 0),
                        (p = n.route.errorElement || T),
                        u &&
                            (l < 0 && 0 === i
                                ? ((o = "route-fallback"), C[o] || (C[o] = !0), (f = !0), (h = null))
                                : l === i && ((f = !0), (h = n.route.hydrateFallbackElement || null))));
                    let g = t.concat(a.slice(0, i + 1)),
                        v = () => {
                            let t;
                            return (
                                (t = d
                                    ? p
                                    : f
                                      ? h
                                      : n.route.Component
                                        ? c.createElement(n.route.Component, null)
                                        : n.route.element
                                          ? n.route.element
                                          : e),
                                c.createElement(w, {
                                    match: n,
                                    routeContext: { outlet: e, matches: g, isDataRoute: null != r },
                                    children: t,
                                })
                            );
                        };
                    return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === i)
                        ? c.createElement(S, {
                              location: r.location,
                              revalidation: r.revalidation,
                              component: p,
                              error: d,
                              children: v(),
                              routeContext: { outlet: null, matches: g, isDataRoute: !0 },
                          })
                        : v();
                }, null);
            })(
                g &&
                    g.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, a, e.params),
                            pathname: (0, p.HS)([
                                s,
                                n.encodeLocation ? n.encodeLocation(e.pathname).pathname : e.pathname,
                            ]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? s
                                    : (0, p.HS)([
                                          s,
                                          n.encodeLocation ? n.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                i,
                void 0,
                void 0,
            );
        return t && v
            ? c.createElement(
                  m.Provider,
                  {
                      value: {
                          location: h({ pathname: "/", search: "", hash: "", state: null, key: "default" }, r),
                          navigationType: p.rc.Pop,
                      },
                  },
                  v,
              )
            : v;
    })(
        (function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
                c.Children.forEach(t, (t, i) => {
                    if (!c.isValidElement(t)) return;
                    let o = [...r, i];
                    if (t.type === c.Fragment) return void n.push.apply(n, e(t.props.children, o));
                    t.type !== D && (0, p.Oi)(!1), t.props.index && t.props.children && (0, p.Oi)(!1);
                    let a = {
                        id: t.props.id || o.join("-"),
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
                    t.props.children && (a.children = e(t.props.children, o)), n.push(a);
                }),
                n
            );
        })(t),
        r,
    );
}
l.startTransition;
var I =
    (((i = I || {})[(i.pending = 0)] = "pending"), (i[(i.success = 1)] = "success"), (i[(i.error = 2)] = "error"), i);
new Promise(() => {}), c.Component;
var P = r(806163);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
l.startTransition,
    f.flushSync,
    l.useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((o = s || (s = {})).UseScrollRestoration = "useScrollRestoration"),
    (o.UseSubmit = "useSubmit"),
    (o.UseSubmitFetcher = "useSubmitFetcher"),
    (o.UseFetcher = "useFetcher"),
    (o.useViewTransitionState = "useViewTransitionState"),
    ((a = u || (u = {})).UseFetcher = "useFetcher"),
    (a.UseFetchers = "useFetchers"),
    (a.UseScrollRestoration = "useScrollRestoration");
let j =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? c.useLayoutEffect
        : () => {};
function N(e) {
    let { children: t } = e,
        r = (0, P.W6)(),
        [n, i] = c.useState(() => ({ location: r.location, action: r.action }));
    return (
        j(() => {
            r.listen((e, t) => i({ location: e, action: t }));
        }, [r]),
        c.createElement(
            k,
            { navigationType: n.action, location: n.location, navigator: r },
            c.createElement(A, null, c.createElement(D, { path: "*", element: t })),
        )
    );
}
