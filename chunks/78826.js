n.d(t, {
    Fl: () => p,
    d7: () => h,
    p: () => _
}),
    n(415506),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(374470),
    o = n(626135),
    s = n(960048),
    l = n(981631);
let c = i.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function u(e) {
    return (0, a.k)(e, HTMLImageElement) ? e.complete : (0, a.k)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, a.k)(e, HTMLDivElement) || !0;
}
function d(e) {
    return (0, a.k)(e, HTMLImageElement) ? 'load' : (0, a.k)(e, HTMLVideoElement) ? 'canplaythrough' : ((0, a.k)(e, HTMLDivElement), 'load');
}
function f(e) {
    var t, n;
    return (0, a.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, a.k)(e, HTMLVideoElement) ? (null != (n = null == (t = e.querySelectorAll('source')[0]) ? void 0 : t.getAttribute('src')) ? n : 'video') : ((0, a.k)(e, HTMLDivElement), e.tagName);
}
function _(e) {
    let { children: t, isPreview: n = !1, source: a, questId: _ } = e,
        [p, h] = i.useState(!1),
        [m, g] = i.useState(new Set()),
        [E, b] = i.useState(!1),
        y = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of m) u(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let O = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: c } = e;
                n ||
                    null == a ||
                    (o.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: a,
                        quest_id: _,
                        asset_id: f(t)
                    }),
                    s.Z.captureException(
                        Error(
                            ''
                                .concat(i, ': ')
                                .concat(null != c ? ''.concat(c, ', ') : '')
                                .concat(f(t), ', ')
                                .concat(r)
                        ),
                        { tags: { source: a } }
                    ),
                    h(!0));
            },
            [n, a, _]
        ),
        v = i.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        I = i.useCallback(
            (e, t) => {
                if ((b(!0), u(e))) return;
                g((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                });
                let n = d(e);
                function r() {
                    v(e), e.removeEventListener(n, r);
                }
                function i(n) {
                    v(e),
                        O({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in n ? n.message : null
                        }),
                        e.removeEventListener('error', i);
                }
                e.addEventListener(n, r), e.addEventListener('error', i);
            },
            [O, v]
        ),
        S = i.useMemo(() => m.size > 0 || !E, [E, m]);
    i.useEffect(() => {
        S || (y.current = !0);
    }, [S]);
    let T = i.useMemo(
        () => ({
            registerAsset: I,
            unregisterAsset: v,
            hasError: p,
            isLoading: S && !y.current
        }),
        [I, v, p, S]
    );
    return (0, r.jsx)(c.Provider, {
        value: T,
        children: t
    });
}
function p(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(c),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = o.current;
            return (
                null != e && r(e, t),
                () => {
                    null != e && a(e);
                }
            );
        }, [r, a, t]),
        n(o)
    );
}
function h() {
    let { hasError: e, isLoading: t } = i.useContext(c);
    return {
        hasError: e,
        isLoading: t
    };
}
