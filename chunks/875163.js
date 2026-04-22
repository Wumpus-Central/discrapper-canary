"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(311907),
    c = n(599319),
    u = n(623646),
    d = n(811024),
    h = n(933958),
    m = n(969151),
    p = n(580424),
    f = n(579940),
    g = n(915089),
    _ = n(750506),
    x = n(513609),
    A = n(71393),
    C = n(374803),
    E = n(105330),
    I = n(638897),
    v = n(5867),
    y = n(122484);
let S = l.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: S, onVisibilityChange: b, editorScrollerRef: N, barsHeight: T } = e,
        j = (0, g.GV)(),
        R = (0, o.bG)([A.A], () => A.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        w = l.useRef(null),
        [L, M, k] = (0, I.A)({ ...e, guild: R }, t, w),
        O = s.autocomplete?.forceChatLayer ? x.Ay : _.Ay,
        P = (0, p.aI)(L.selectedIndex);
    (0, f.gf)(j, L.isVisible, P);
    let D = (0, E.l)({ editorHeight: S, type: s, state: L }),
        U = (0, o.bG)([h.Ay], () => {
            let e = h.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = h.Ay.getActivityPanelMode();
            return (0, d.AX)(n) && null != e && (0, m.H)(e.location) === n.id && t === v.Gd.PANEL;
        }, [n]),
        V = l.useMemo(
            () =>
                D?.top == null && D?.left == null && D?.bottom == null && D?.right == null ? "" : String(Date.now()),
            [D?.top, D?.left, D?.bottom, D?.right],
        );
    if (
        (l.useEffect(() => {
            b(L.isVisible);
        }, [b, L.isVisible]),
        !L.isVisible || null == L.query || void 0 === D)
    )
        return null;
    let G =
        L.query.typeInfo.renderResults({
            results: L.query.results,
            selectedIndex: L.selectedIndex,
            channel: n,
            guild: R,
            query: L.query.queryText,
            options: L.query.options,
            onHover: (e) => M.onResultHover(e),
            onClick: (e) => M.onResultClick(e),
        }) ?? null;
    if (null == G) return null;
    let F = { [y.pK]: null == D, [y.YB]: null != D, [y.sQ]: null == D && "bottom" === e.position, [y.mO]: U },
        B = 490;
    null != D && (B = s.autocomplete?.small ? 200 : L.query?.type === C.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let H = Math.max(S, N?.current?.clientHeight ?? 0),
        W = Math.min(0.5 * window.innerHeight, H);
    B = Math.min(window.innerHeight - 120 - W - (T ?? 0), B);
    let K = (0, i.jsx)(p.Ay, {
        id: j,
        className: r()(y.nx, F),
        innerClassName: y.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(a.hD, {
            navigator: k,
            children: (0, i.jsx)(a.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, i.jsx)(c.Ch, {
                        id: j,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), (w.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: y.XG,
                        style: { maxHeight: B },
                        role: "listbox",
                        "aria-labelledby": (0, p.Sz)(j),
                        children: G,
                    });
                },
            }),
        }),
    });
    return null != D
        ? (0, i.jsx)(O, {
              children: (0, i.jsx)(u.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: D,
                  positionKey: V,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => K,
              }),
          })
        : K;
});
