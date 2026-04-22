n.r(t), n.d(t, { default: () => _ });
var r = n(627968),
    s = n(64700),
    l = n(621466),
    i = n(192308),
    u = n(315710),
    a = n(315246),
    o = n(267102),
    c = n(712687),
    d = n(203982),
    p = n(211401),
    E = n(500049),
    f = n(7691),
    h = n(699803),
    A = n(60809),
    S = n(652215),
    T = n(732139);
function O() {
    p.k(E.Se.DISMISSED);
}
let _ = function (e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: p } = e,
        _ = s.useRef(null),
        { renderWindow: y, windowDispatch: v } = s.useContext(o.Ay),
        F = null != p,
        U = (0, i.useIsModalAtTop)(p ?? ""),
        L = s.useCallback(
            (e) => {
                if ((!F && (0, i.hasAnyModalOpen)()) || (F && !(U && n)) || c.A.isOpen() || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, l.vq)(t) && null != t.closest("." + A.Wx)) return;
                for (; (0, l.vq)(t); ) {
                    if (t === _.current) return;
                    if (t.classList.contains(A.KG) || t.classList.contains(A.Gu)) return void e.preventDefault();
                    if (t.classList.contains(A.qp)) return;
                    let n = [T.Do, a.n];
                    if (t.classList.contains(A.TY) || n.includes(t.id)) return;
                    t = t.parentNode;
                }
                O();
                let r = (0, l.BF)(e)?.activeElement;
                (null == r || "BODY" === r.tagName) && d._.dispatchToLastSubscribed(S.jej.TEXTAREA_FOCUS);
            },
            [n, U, F],
        );
    s.useLayoutEffect(
        () => (
            y.addEventListener("mousedown", L),
            y.addEventListener("contextmenu", L),
            v.subscribe(S.jej.POPOUT_CLOSE, O),
            () => {
                y.removeEventListener("mousedown", L),
                    y.removeEventListener("contextmenu", L),
                    v.unsubscribe(S.jej.POPOUT_CLOSE, O);
            }
        ),
        [L, y, v],
    ),
        (0, u.t)(_),
        s.useEffect(() => {
            ((!F && (0, i.hasAnyModalOpen)()) || (F && !U)) && O();
        }, [U, F]);
    let m = (0, h.A)();
    return (0, r.jsx)(f.A, { ref: _, context: { channel: t, type: "channel" }, entrypoint: E.s4.TEXT, initHistory: m });
};
