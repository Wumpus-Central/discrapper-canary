"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(311907),
    u = n(599319),
    c = n(623646),
    d = n(811024),
    _ = n(933958),
    f = n(969151),
    p = n(580424),
    h = n(579940),
    E = n(915089),
    m = n(750506),
    g = n(513609),
    A = n(71393),
    I = n(374803),
    T = n(105330),
    S = n(638897),
    y = n(5867),
    N = n(122484);
let v = i.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: v, onVisibilityChange: C, editorScrollerRef: O, barsHeight: R } = e,
        b = (0, E.GV)(),
        D = (0, l.bG)([A.A], () => A.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        L = i.useRef(null),
        [w, M, P] = (0, S.A)({ ...e, guild: D }, t, L),
        x = s.autocomplete?.forceChatLayer ? g.Ay : m.Ay,
        k = (0, p.aI)(w.selectedIndex);
    (0, h.gf)(b, w.isVisible, k);
    let U = (0, T.l)({ editorHeight: v, type: s, state: w }),
        G = (0, l.bG)([_.Ay], () => {
            let e = _.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = _.Ay.getActivityPanelMode();
            return (0, d.AX)(n) && null != e && (0, f.H)(e.location) === n.id && t === y.Gd.PANEL;
        }, [n]),
        F = i.useMemo(
            () =>
                U?.top == null && U?.left == null && U?.bottom == null && U?.right == null ? "" : String(Date.now()),
            [U?.top, U?.left, U?.bottom, U?.right],
        );
    if (
        (i.useEffect(() => {
            C(w.isVisible);
        }, [C, w.isVisible]),
        !w.isVisible || null == w.query || void 0 === U)
    )
        return null;
    let V =
        w.query.typeInfo.renderResults({
            results: w.query.results,
            selectedIndex: w.selectedIndex,
            channel: n,
            guild: D,
            query: w.query.queryText,
            options: w.query.options,
            onHover: (e) => M.onResultHover(e),
            onClick: (e) => M.onResultClick(e),
        }) ?? null;
    if (null == V) return null;
    let B = { [N.pK]: null == U, [N.YB]: null != U, [N.sQ]: null == U && "bottom" === e.position, [N.mO]: G },
        H = 490;
    null != U && (H = s.autocomplete?.small ? 200 : w.query?.type === I.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let j = Math.max(v, O?.current?.clientHeight ?? 0),
        Y = Math.min(0.5 * window.innerHeight, j);
    H = Math.min(window.innerHeight - 120 - Y - (R ?? 0), H);
    let W = (0, r.jsx)(p.Ay, {
        id: b,
        className: a()(N.nx, B),
        innerClassName: N.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, r.jsx)(o.hD, {
            navigator: P,
            children: (0, r.jsx)(o.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, r.jsx)(u.Ch, {
                        id: b,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), (L.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: N.XG,
                        style: { maxHeight: H },
                        role: "listbox",
                        "aria-labelledby": (0, p.Sz)(b),
                        children: V,
                    });
                },
            }),
        }),
    });
    return null != U
        ? (0, r.jsx)(x, {
              children: (0, r.jsx)(c.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: U,
                  positionKey: F,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => W,
              }),
          })
        : W;
});
