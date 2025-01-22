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
var o = r(200651),
    s = r(192379),
    l = r(513431),
    u = r(626135),
    c = r(960048),
    d = r(981631);
let f = s.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function p(e) {
    return (0, l.k)(e, HTMLImageElement) ? e.complete : (0, l.k)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, l.k)(e, HTMLDivElement) || !0;
}
function h(e) {
    return (0, l.k)(e, HTMLImageElement) ? 'load' : (0, l.k)(e, HTMLVideoElement) ? 'canplaythrough' : (0, l.k)(e, HTMLDivElement) ? 'load' : 'load';
}
function _(e) {
    var n, r;
    return (0, l.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, l.k)(e, HTMLVideoElement) ? (null !== (r = null === (n = e.querySelectorAll('source')[0]) || void 0 === n ? void 0 : n.getAttribute('src')) && void 0 !== r ? r : 'video') : (0, l.k)(e, HTMLDivElement) ? e.tagName : e.tagName;
}
function m(e) {
    let { children: n, isPreview: r = !1, source: i, questId: a } = e,
        [l, m] = s.useState(!1),
        [g, E] = s.useState(new Set()),
        [v, y] = s.useState(!1),
        b = s.useRef(!1);
    s.useEffect(() => {
        let e = new Set();
        for (let n of g) !p(n) && e.add(n);
        e.size !== g.size && E(e);
    }, [g]);
    let I = s.useCallback(
            (e) => {
                let { assetNode: n, nodeId: o, errorPrefix: s, errorMessage: l } = e;
                !r &&
                    null != i &&
                    (u.default.track(d.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: i,
                        quest_id: a,
                        asset_id: _(n)
                    }),
                    c.Z.captureException(
                        Error(
                            ''
                                .concat(s, ': ')
                                .concat(null != l ? ''.concat(l, ', ') : '')
                                .concat(_(n), ', ')
                                .concat(o)
                        ),
                        { tags: { source: i } }
                    ),
                    m(!0));
            },
            [r, i, a]
        ),
        T = s.useCallback((e) => {
            E((n) => {
                let r = new Set(n);
                return r.delete(e), r;
            });
        }, []),
        S = s.useCallback(
            (e, n) => {
                if ((y(!0), p(e))) return;
                E((n) => {
                    let r = new Set(n);
                    return r.add(e), r;
                });
                let r = h(e);
                function i() {
                    T(e), e.removeEventListener(r, i);
                }
                function a(r) {
                    T(e),
                        I({
                            assetNode: e,
                            nodeId: n,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in r ? r.message : null
                        }),
                        e.removeEventListener('error', a);
                }
                e.addEventListener(r, i), e.addEventListener('error', a);
            },
            [I, T]
        ),
        A = s.useMemo(() => g.size > 0 || !v, [v, g]);
    s.useEffect(() => {
        !A && (b.current = !0);
    }, [A]);
    let C = s.useMemo(
        () => ({
            registerAsset: S,
            unregisterAsset: T,
            hasError: l,
            isLoading: A && !b.current
        }),
        [S, T, l, A]
    );
    return (0, o.jsx)(f.Provider, {
        value: C,
        children: n
    });
}
function g(e) {
    let { id: n, children: r } = e,
        { registerAsset: i, unregisterAsset: a } = s.useContext(f),
        o = s.useRef(null);
    return (
        s.useEffect(() => {
            let e = o.current;
            return (
                null != e && i(e, n),
                () => {
                    null != e && a(e);
                }
            );
        }, [i, a, n]),
        r(o)
    );
}
function E() {
    let { hasError: e, isLoading: n } = s.useContext(f);
    return {
        hasError: e,
        isLoading: n
    };
}
