var r = n(477900),
    i = n(582128),
    a = n(188567),
    s = n(115063);
n(46121);
var l = n(652215);
let o = i.createContext(void 0);
n.d(
    t,
    {},
    {
        L_: function () {
            let e = i.useContext(o);
            if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
            return e;
        },
        ms: function (e) {
            let { children: t } = e,
                n = i.useRef(1.4),
                [u, c] = i.useState(!1),
                d = i.useCallback((e) => {
                    (c(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (n.current = 1.4));
                }, []),
                C = i.useCallback(
                    (e) => {
                        if (u) {
                            ((0, s.fO)({ duration: 300, intensity: n.current }),
                                (n.current = Math.min(n.current + 2, 15)),
                                a._.dispatch(l.jej.EMPHASIZE_NOTICE));
                            return;
                        }
                        e();
                    },
                    [u],
                ),
                O = i.useMemo(() => ({ navigateWithValidation: C, showNotice: u, handleStoreUpdate: d }), [C, u, d]);
            return (0, r.jsx)(o.Provider, { value: O, children: t });
        },
    },
);
