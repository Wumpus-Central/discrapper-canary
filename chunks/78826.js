n.d(t, {
    Fl: () => _,
    d7: () => h,
    p: () => p
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
    return (0, o.k)(e, HTMLImageElement) ? e.getAttribute('src') : (0, o.k)(e, HTMLVideoElement) ? (null !== (n = null === (t = e.querySelectorAll('source')[0]) || void 0 === t ? void 0 : t.getAttribute('src')) && void 0 !== n ? n : 'video') : ((0, o.k)(e, HTMLDivElement), e.tagName);
}
function p(e) {
    let { children: t, isPreview: n = !1, source: o, questId: p } = e,
        [_, h] = i.useState(!1),
        [m, g] = i.useState(new Set()),
        [E, v] = i.useState(!1),
        b = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of m) u(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let y = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: c } = e;
                n ||
                    null == o ||
                    (a.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: o,
                        quest_id: p,
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
            [n, o, p]
        ),
        O = i.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        S = i.useCallback(
            (e, t) => {
                if ((v(!0), u(e))) return;
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
                        y({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: 'Error loading asset',
                            errorMessage: 'message' in n ? n.message : null
                        }),
                        e.removeEventListener('error', i);
                }
                e.addEventListener(n, r), e.addEventListener('error', i);
            },
            [y, O]
        ),
        I = i.useMemo(() => m.size > 0 || !E, [E, m]);
    i.useEffect(() => {
        I || (b.current = !0);
    }, [I]);
    let T = i.useMemo(
        () => ({
            registerAsset: S,
            unregisterAsset: O,
            hasError: _,
            isLoading: I && !b.current
        }),
        [S, O, _, I]
    );
    return (0, r.jsx)(c.Provider, {
        value: T,
        children: t
    });
}
function _(e) {
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
