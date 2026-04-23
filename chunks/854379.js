n.r(t), n.d(t, { default: () => A });
var s = n(627968),
    i = n(64700),
    u = n(621466),
    r = n(192308),
    a = n(315710),
    o = n(315246),
    c = n(267102),
    l = n(712687),
    d = n(625494),
    f = n(211401),
    p = n(500049),
    v = n(554601),
    E = n(699803),
    L = n(60809),
    O = n(652215),
    b = n(732139);
function h() {
    f.k(p.Se.DISMISSED);
}
let A = function (e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: f } = e,
        A = i.useRef(null),
        { renderWindow: T, windowDispatch: m } = i.useContext(c.Ay),
        S = null != f,
        j = (0, r.useIsModalAtTop)(f ?? ""),
        y = i.useCallback(
            (e) => {
                if ((!S && (0, r.hasAnyModalOpen)()) || (S && !(j && n)) || l.A.isOpen() || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, u.vq)(t) && null != t.closest("." + L.Wx)) return;
                for (; (0, u.vq)(t); ) {
                    if (t === A.current) return;
                    if (t.classList.contains(L.KG) || t.classList.contains(L.Gu)) return void e.preventDefault();
                    if (t.classList.contains(L.qp)) return;
                    let n = [b.Do, o.n];
                    if (t.classList.contains(L.TY) || n.includes(t.id)) return;
                    t = t.parentNode;
                }
                h();
                let s = (0, u.BF)(e)?.activeElement;
                (null == s || "BODY" === s.tagName) && d._.dispatchToLastSubscribed(O.jej.TEXTAREA_FOCUS);
            },
            [n, j, S],
        );
    i.useLayoutEffect(
        () => (
            T.addEventListener("mousedown", y),
            T.addEventListener("contextmenu", y),
            m.subscribe(O.jej.POPOUT_CLOSE, h),
            () => {
                T.removeEventListener("mousedown", y),
                    T.removeEventListener("contextmenu", y),
                    m.unsubscribe(O.jej.POPOUT_CLOSE, h);
            }
        ),
        [y, T, m],
    ),
        (0, a.t)(A),
        i.useEffect(() => {
            ((!S && (0, r.hasAnyModalOpen)()) || (S && !j)) && h();
        }, [j, S]);
    let C = (0, E.A)();
    return (0, s.jsx)(v.A, { ref: A, context: { channel: t, type: "channel" }, entrypoint: p.s4.TEXT, initHistory: C });
};
