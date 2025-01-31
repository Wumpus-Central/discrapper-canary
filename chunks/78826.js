n.d(t, {
    Fl: () => p,
    d7: () => h,
    p: () => _
}),
    n(411104),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(374470),
    s = n(626135),
    o = n(960048),
    l = n(981631);
let u = r.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function c(e) {
    return (0, a.k)(e, HTMLImageElement) ? e.complete : (0, a.k)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, a.k)(e, HTMLDivElement) || !0;
}
function d(e) {
    return (0, a.k)(e, HTMLImageElement) ? 'load' : (0, a.k)(e, HTMLVideoElement) ? 'canplaythrough' : ((0, a.k)(e, HTMLDivElement), 'load');
}
function f(e) {
    var t, n;
    return (0, a.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, a.k)(e, HTMLVideoElement) ? (null !== (n = null === (t = e.querySelectorAll('source')[0]) || void 0 === t ? void 0 : t.getAttribute('src')) && void 0 !== n ? n : 'video') : ((0, a.k)(e, HTMLDivElement), e.tagName);
}
function _(e) {
    let { children: t, isPreview: n = !1, source: a, questId: _ } = e,
        [p, h] = r.useState(!1),
        [m, g] = r.useState(new Set()),
        [E, v] = r.useState(!1),
        y = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of m) c(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let I = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: i, errorPrefix: r, errorMessage: u } = e;
                n ||
                    null == a ||
                    (s.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: a,
                        quest_id: _,
                        asset_id: f(t)
                    }),
                    o.Z.captureException(
                        Error(
                            ''
                                .concat(r, ': ')
                                .concat(null != u ? ''.concat(u, ', ') : '')
                                .concat(f(t), ', ')
                                .concat(i)
                        ),
                        { tags: { source: a } }
                    ),
                    h(!0));
            },
            [n, a, _]
        ),
        b = r.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        T = r.useCallback(
            (e, t) => {
                if ((v(!0), c(e))) return;
                g((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                });
                let n = d(e);
                function i() {
                    b(e), e.removeEventListener(n, i);
                }
                function r(n) {
                    b(e),
                        I({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in n ? n.message : null
                        }),
                        e.removeEventListener('error', r);
                }
                e.addEventListener(n, i), e.addEventListener('error', r);
            },
            [I, b]
        ),
        S = r.useMemo(() => m.size > 0 || !E, [E, m]);
    r.useEffect(() => {
        S || (y.current = !0);
    }, [S]);
    let A = r.useMemo(
        () => ({
            registerAsset: T,
            unregisterAsset: b,
            hasError: p,
            isLoading: S && !y.current
        }),
        [T, b, p, S]
    );
    return (0, i.jsx)(u.Provider, {
        value: A,
        children: t
    });
}
function p(e) {
    let { id: t, children: n } = e,
        { registerAsset: i, unregisterAsset: a } = r.useContext(u),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = s.current;
            return (
                null != e && i(e, t),
                () => {
                    null != e && a(e);
                }
            );
        }, [i, a, t]),
        n(s)
    );
}
function h() {
    let { hasError: e, isLoading: t } = r.useContext(u);
    return {
        hasError: e,
        isLoading: t
    };
}
