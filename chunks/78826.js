n.d(t, {
    Fl: () => p,
    d7: () => h,
    p: () => _
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(374470),
    a = n(626135),
    s = n(960048),
    l = n(981631);
let c = i.createContext({
    registerAsset: () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0
});
function u(e) {
    return (0, o.k)(e, HTMLImageElement) ? e.complete : (0, o.k)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, o.k)(e, HTMLDivElement) || !0;
}
function d(e) {
    return (0, o.k)(e, HTMLImageElement) ? 'load' : (0, o.k)(e, HTMLVideoElement) ? 'canplaythrough' : ((0, o.k)(e, HTMLDivElement), 'load');
}
function f(e) {
    var t, n;
    return (0, o.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, o.k)(e, HTMLVideoElement) ? (null != (n = null == (t = e.querySelectorAll('source')[0]) ? void 0 : t.getAttribute('src')) ? n : 'video') : ((0, o.k)(e, HTMLDivElement), e.tagName);
}
function _(e) {
    let { children: t, isPreview: n = !1, source: o, questId: _ } = e,
        [p, h] = i.useState(!1),
        [m, g] = i.useState(new Set()),
        [E, b] = i.useState(!1),
        y = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of m) u(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let v = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: c } = e;
                n ||
                    null == o ||
                    (a.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: o,
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
                        { tags: { source: o } }
                    ),
                    h(!0));
            },
            [n, o, _]
        ),
        O = i.useCallback((e) => {
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
                    O(e), e.removeEventListener(n, r);
                }
                function i(n) {
                    O(e),
                        v({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in n ? n.message : null
                        }),
                        e.removeEventListener('error', i);
                }
                e.addEventListener(n, r), e.addEventListener('error', i);
            },
            [v, O]
        ),
        S = i.useMemo(() => m.size > 0 || !E, [E, m]);
    i.useEffect(() => {
        S || (y.current = !0);
    }, [S]);
    let T = i.useMemo(
        () => ({
            registerAsset: I,
            unregisterAsset: O,
            hasError: p,
            isLoading: S && !y.current
        }),
        [I, O, p, S]
    );
    return (0, r.jsx)(c.Provider, {
        value: T,
        children: t
    });
}
function p(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: o } = i.useContext(c),
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = a.current;
            return (
                null != e && r(e, t),
                () => {
                    null != e && o(e);
                }
            );
        }, [r, o, t]),
        n(a)
    );
}
function h() {
    let { hasError: e, isLoading: t } = i.useContext(c);
    return {
        hasError: e,
        isLoading: t
    };
}
