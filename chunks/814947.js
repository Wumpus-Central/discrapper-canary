"use strict";
n.d(t, { BV: () => y, Ix: () => S, qh: () => T });
var r,
    i,
    s,
    a = n(64700),
    o = n(207970);
function l() {
    return (l = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
let u = a.createContext(null),
    d = a.createContext(null),
    c = a.createContext(null),
    _ = a.createContext(null),
    f = a.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    E = a.createContext(null);
function h() {
    return null != a.useContext(_);
}
let p = a.createElement(function () {
    var e;
    let t,
        n,
        r,
        i,
        s,
        l,
        u,
        c =
            ((s = a.useContext(E)),
            (l = (A.UseRouteError, (t = a.useContext(d)) || (0, o.Oi)(!1), t)),
            (u =
                (A.UseRouteError,
                (i = ((n = a.useContext(f)) || (0, o.Oi)(!1), (r = n)).matches[r.matches.length - 1]).route.id ||
                    (0, o.Oi)(!1),
                i.route.id)),
            void 0 !== s ? s : null == (e = l.errors) ? void 0 : e[u]),
        _ = (0, o.pX)(c) ? c.status + " " + c.statusText : c instanceof Error ? c.message : JSON.stringify(c),
        h = c instanceof Error ? c.stack : null;
    return a.createElement(
        a.Fragment,
        null,
        a.createElement("h2", null, "Unexpected Application Error!"),
        a.createElement("h3", { style: { fontStyle: "italic" } }, _),
        h
            ? a.createElement("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" } }, h)
            : null,
        null,
    );
}, null);
class m extends a.Component {
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
            ? a.createElement(
                  f.Provider,
                  { value: this.props.routeContext },
                  a.createElement(E.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function g(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = a.useContext(u);
    return (
        i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        a.createElement(f.Provider, { value: t }, r)
    );
}
var A =
    (((r = A || {}).UseBlocker = "useBlocker"),
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
let I = {};
function T(e) {
    (0, o.Oi)(!1);
}
function S(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = o.rc.Pop,
        navigator: s,
        static: u = !1,
        future: d,
    } = e;
    h() && (0, o.Oi)(!1);
    let f = t.replace(/^\/*/, "/"),
        E = a.useMemo(
            () => ({ basename: f, navigator: s, static: u, future: l({ v7_relativeSplatPath: !1 }, d) }),
            [f, d, s, u],
        );
    "string" == typeof r && (r = (0, o.Rr)(r));
    let { pathname: p = "/", search: m = "", hash: g = "", state: A = null, key: I = "default" } = r,
        T = a.useMemo(() => {
            let e = (0, o.pb)(p, f);
            return null == e
                ? null
                : { location: { pathname: e, search: m, hash: g, state: A, key: I }, navigationType: i };
        }, [f, p, m, g, A, I, i]);
    return null == T
        ? null
        : a.createElement(c.Provider, { value: E }, a.createElement(_.Provider, { children: n, value: T }));
}
function y(e) {
    let { children: t, location: n } = e;
    return (function (e, t) {
        let n;
        h() || (0, o.Oi)(!1);
        let { navigator: r } = a.useContext(c),
            { matches: i } = a.useContext(f),
            s = i[i.length - 1],
            u = s ? s.params : {};
        s && s.pathname;
        let d = s ? s.pathnameBase : "/";
        s && s.route;
        let E = (h() || (0, o.Oi)(!1), a.useContext(_).location);
        if (t) {
            var A;
            let e = "string" == typeof t ? (0, o.Rr)(t) : t;
            "/" === d || (null == (A = e.pathname) ? void 0 : A.startsWith(d)) || (0, o.Oi)(!1), (n = e);
        } else n = E;
        let T = n.pathname || "/",
            S = T;
        if ("/" !== d) {
            let e = d.replace(/^\//, "").split("/");
            S = "/" + T.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let y = (0, o.ue)(e, { pathname: S }),
            N = (function (e, t, n, r) {
                var i, s;
                if ((void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e)) {
                    if (!n) return null;
                    if (n.errors) e = n.matches;
                    else {
                        if (
                            null == (s = r) ||
                            !s.v7_partialHydration ||
                            0 !== t.length ||
                            n.initialized ||
                            !(n.matches.length > 0)
                        )
                            return null;
                        e = n.matches;
                    }
                }
                let l = e,
                    u = null == (i = n) ? void 0 : i.errors;
                if (null != u) {
                    let e = l.findIndex((e) => e.route.id && (null == u ? void 0 : u[e.route.id]) !== void 0);
                    e >= 0 || (0, o.Oi)(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
                }
                let d = !1,
                    c = -1;
                if (n && r && r.v7_partialHydration)
                    for (let e = 0; e < l.length; e++) {
                        let t = l[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
                            let { loaderData: e, errors: r } = n,
                                i = t.route.loader && void 0 === e[t.route.id] && (!r || void 0 === r[t.route.id]);
                            if (t.route.lazy || i) {
                                (d = !0), (l = c >= 0 ? l.slice(0, c + 1) : [l[0]]);
                                break;
                            }
                        }
                    }
                return l.reduceRight((e, r, i) => {
                    var s;
                    let o,
                        _ = !1,
                        f = null,
                        E = null;
                    n &&
                        ((o = u && r.route.id ? u[r.route.id] : void 0),
                        (f = r.route.errorElement || p),
                        d &&
                            (c < 0 && 0 === i
                                ? ((s = "route-fallback"), I[s] || (I[s] = !0), (_ = !0), (E = null))
                                : c === i && ((_ = !0), (E = r.route.hydrateFallbackElement || null))));
                    let h = t.concat(l.slice(0, i + 1)),
                        A = () => {
                            let t;
                            return (
                                (t = o
                                    ? f
                                    : _
                                      ? E
                                      : r.route.Component
                                        ? a.createElement(r.route.Component, null)
                                        : r.route.element
                                          ? r.route.element
                                          : e),
                                a.createElement(g, {
                                    match: r,
                                    routeContext: { outlet: e, matches: h, isDataRoute: null != n },
                                    children: t,
                                })
                            );
                        };
                    return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === i)
                        ? a.createElement(m, {
                              location: n.location,
                              revalidation: n.revalidation,
                              component: f,
                              error: o,
                              children: A(),
                              routeContext: { outlet: null, matches: h, isDataRoute: !0 },
                          })
                        : A();
                }, null);
            })(
                y &&
                    y.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, u, e.params),
                            pathname: (0, o.HS)([
                                d,
                                r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname,
                            ]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? d
                                    : (0, o.HS)([
                                          d,
                                          r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                i,
                void 0,
                void 0,
            );
        return t && N
            ? a.createElement(
                  _.Provider,
                  {
                      value: {
                          location: l({ pathname: "/", search: "", hash: "", state: null, key: "default" }, n),
                          navigationType: o.rc.Pop,
                      },
                  },
                  N,
              )
            : N;
    })(
        (function e(t, n) {
            void 0 === n && (n = []);
            let r = [];
            return (
                a.Children.forEach(t, (t, i) => {
                    if (!a.isValidElement(t)) return;
                    let s = [...n, i];
                    if (t.type === a.Fragment) return void r.push.apply(r, e(t.props.children, s));
                    t.type !== T && (0, o.Oi)(!1), t.props.index && t.props.children && (0, o.Oi)(!1);
                    let l = {
                        id: t.props.id || s.join("-"),
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
                    t.props.children && (l.children = e(t.props.children, s)), r.push(l);
                }),
                r
            );
        })(t),
        n,
    );
}
(s || (s = n.t(a, 2))).startTransition;
var N =
    (((i = N || {})[(i.pending = 0)] = "pending"), (i[(i.success = 1)] = "success"), (i[(i.error = 2)] = "error"), i);
new Promise(() => {}), a.Component;
