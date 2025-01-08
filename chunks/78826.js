r.d(n, {
    Fl: function () {
        return g;
    },
    d7: function () {
        return E;
    },
    p: function () {
        return m;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(513431),
    u = r(626135),
    c = r(960048),
    d = r(981631);
let f = o.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function _(e) {
    return (0, l.k)(e, HTMLImageElement) ? e.complete : (0, l.k)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, l.k)(e, HTMLDivElement) || !0;
}
function h(e) {
    return (0, l.k)(e, HTMLImageElement) ? 'load' : (0, l.k)(e, HTMLVideoElement) ? 'canplaythrough' : (0, l.k)(e, HTMLDivElement) ? 'load' : 'load';
}
function p(e) {
    var n, r;
    return (0, l.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, l.k)(e, HTMLVideoElement) ? (null !== (r = null === (n = e.querySelectorAll('source')[0]) || void 0 === n ? void 0 : n.getAttribute('src')) && void 0 !== r ? r : 'video') : (0, l.k)(e, HTMLDivElement) ? e.tagName : e.tagName;
}
function m(e) {
    let { children: n, isPreview: r = !1, source: i, questId: a } = e,
        [l, m] = o.useState(!1),
        [g, E] = o.useState(new Set()),
        [v, I] = o.useState(!1),
        T = o.useRef(!1);
    o.useEffect(() => {
        let e = new Set();
        for (let n of g) !_(n) && e.add(n);
        e.size !== g.size && E(e);
    }, [g]);
    let b = o.useCallback(
            (e) => {
                let { assetNode: n, nodeId: s, errorPrefix: o, errorMessage: l } = e;
                !r &&
                    null != i &&
                    (u.default.track(d.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: i,
                        quest_id: a,
                        asset_id: p(n)
                    }),
                    c.Z.captureException(
                        Error(
                            ''
                                .concat(o, ': ')
                                .concat(null != l ? ''.concat(l, ', ') : '')
                                .concat(p(n), ', ')
                                .concat(s)
                        ),
                        { tags: { source: i } }
                    ),
                    m(!0));
            },
            [r, i, a]
        ),
        y = o.useCallback((e) => {
            E((n) => {
                let r = new Set(n);
                return r.delete(e), r;
            });
        }, []),
        S = o.useCallback(
            (e, n) => {
                if ((I(!0), _(e))) return;
                E((n) => {
                    let r = new Set(n);
                    return r.add(e), r;
                });
                let r = h(e);
                function i() {
                    y(e), e.removeEventListener(r, i);
                }
                function a(r) {
                    y(e),
                        b({
                            assetNode: e,
                            nodeId: n,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in r ? r.message : null
                        }),
                        e.removeEventListener('error', a);
                }
                e.addEventListener(r, i), e.addEventListener('error', a);
            },
            [b, y]
        ),
        A = o.useMemo(() => g.size > 0 || !v, [v, g]);
    o.useEffect(() => {
        !A && (T.current = !0);
    }, [A]);
    let N = o.useMemo(
        () => ({
            registerAsset: S,
            unregisterAsset: y,
            hasError: l,
            isLoading: A && !T.current
        }),
        [S, y, l, A]
    );
    return (0, s.jsx)(f.Provider, {
        value: N,
        children: n
    });
}
function g(e) {
    let { id: n, children: r } = e,
        { registerAsset: i, unregisterAsset: a } = o.useContext(f),
        s = o.useRef(null);
    return (
        o.useEffect(() => {
            let e = s.current;
            return (
                null != e && i(e, n),
                () => {
                    null != e && a(e);
                }
            );
        }, [i, a, n]),
        r(s)
    );
}
function E() {
    let { hasError: e, isLoading: n } = o.useContext(f);
    return {
        hasError: e,
        isLoading: n
    };
}
