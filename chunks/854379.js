n.r(t);
var s = n(477900),
    u = n(582128),
    i = n(621466),
    r = n(192308),
    c = n(315710),
    a = n(315246),
    o = n(267102),
    l = n(712687),
    d = n(188567),
    f = n(211401),
    p = n(500049),
    v = n(621377),
    E = n(699803),
    L = n(60809),
    b = n(652215),
    O = n(732139);
function j() {
    f.k(p.Se.DISMISSED);
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: f } = e,
                m = u.useRef(null),
                { renderWindow: S, windowDispatch: T } = u.useContext(o.Ay),
                h = null != f,
                A = (0, r.LA)(f ?? ""),
                C = u.useCallback(
                    (e) => {
                        if ((!h && (0, r.ue)()) || (h && !(A && n)) || l.A.isOpen() || e.defaultPrevented) return;
                        let { target: t } = e;
                        if ((0, i.vq)(t) && null != t.closest("." + L.Wx)) return;
                        for (; (0, i.vq)(t);) {
                            if (t === m.current) return;
                            if (t.classList.contains(L.KG) || t.classList.contains(L.Gu))
                                return void e.preventDefault();
                            if (t.classList.contains(L.qp)) return;
                            let n = [O.Do, a.n];
                            if (t.classList.contains(L.TY) || n.includes(t.id)) return;
                            t = t.parentNode;
                        }
                        j();
                        let s = (0, i.BF)(e)?.activeElement;
                        (null == s || "BODY" === s.tagName) && d._.dispatchToLastSubscribed(b.jej.TEXTAREA_FOCUS);
                    },
                    [n, A, h],
                );
            (u.useLayoutEffect(
                () => (
                    S.addEventListener("mousedown", C),
                    S.addEventListener("contextmenu", C),
                    T.subscribe(b.jej.POPOUT_CLOSE, j),
                    () => {
                        (S.removeEventListener("mousedown", C),
                            S.removeEventListener("contextmenu", C),
                            T.unsubscribe(b.jej.POPOUT_CLOSE, j));
                    }
                ),
                [C, S, T],
            ),
                (0, c.tj)(m),
                u.useEffect(() => {
                    ((!h && (0, r.ue)()) || (h && !A)) && j();
                }, [A, h]));
            let k = (0, E.A)();
            return (0, s.jsx)(v.A, {
                ref: m,
                context: { channel: t, type: "channel" },
                entrypoint: p.s4.TEXT,
                initHistory: k,
            });
        },
    },
);
