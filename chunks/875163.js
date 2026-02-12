"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(311907),
    u = n(397927),
    c = n(811024),
    d = n(933958),
    _ = n(969151),
    f = n(580424),
    h = n(579940),
    p = n(915089),
    g = n(750506),
    E = n(513609),
    A = n(71393),
    I = n(374803),
    T = n(105330),
    y = n(638897),
    S = n(5867),
    v = n(130139);
let C = 490,
    b = 490,
    N = 245,
    R = 200,
    O = 120,
    D = i.forwardRef(function (e, t) {
        let { channel: n, type: a, editorHeight: D, onVisibilityChange: L, editorScrollerRef: w, barsHeight: x } = e,
            P = (0, p.GV)(),
            M = (0, l.bG)([A.A], () => A.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
            k = i.useRef(null),
            [U, G, F] = (0, y.A)({ ...e, guild: M }, t, k),
            V = a.autocomplete?.forceChatLayer ? E.Ay : g.Ay,
            B = (0, f.aI)(U.selectedIndex);
        (0, h.gf)(P, U.isVisible, B);
        let j = (0, T.l)({ editorHeight: D, type: a, state: U }),
            H = (0, l.bG)([d.Ay], () => {
                let e = d.Ay.getSelfEmbeddedActivityForChannel(n.id),
                    t = d.Ay.getActivityPanelMode();
                return (0, c.AX)(n) && null != e && (0, _.H)(e.location) === n.id && t === S.Gd.PANEL;
            }, [n]),
            Y = i.useMemo(
                () =>
                    j?.top == null && j?.left == null && j?.bottom == null && j?.right == null
                        ? ""
                        : String(Date.now()),
                [j?.top, j?.left, j?.bottom, j?.right],
            );
        if (
            (i.useEffect(() => {
                L(U.isVisible, U.query?.type ?? null);
            }, [L, U.isVisible, U.query?.type]),
            !U.isVisible || null == U.query || void 0 === j)
        )
            return null;
        let W =
            U.query.typeInfo.renderResults({
                results: U.query.results,
                selectedIndex: U.selectedIndex,
                channel: n,
                guild: M,
                query: U.query.queryText,
                options: U.query.options,
                onHover: (e) => G.onResultHover(e),
                onClick: (e) => G.onResultClick(e),
            }) ?? null;
        if (null == W) return null;
        let K = {
                [v.pK]: null == j,
                [v.YB]: null != j,
                [v.sQ]: null == j && "bottom" === e.position,
                [v.mO]: H,
                [v.Wi]: U.query?.type === I.DB.MENTION_SUGGESTIONS,
            },
            $ = C;
        null != j && ($ = a.autocomplete?.small ? R : U.query?.type === I.DB.EMOJIS_AND_STICKERS ? b : N);
        let z = Math.max(D, w?.current?.clientHeight ?? 0),
            q = Math.min(0.5 * window.innerHeight, z);
        $ = Math.min(window.innerHeight - O - q - (x ?? 0), $);
        let X = (0, r.jsx)(f.Ay, {
            id: P,
            className: s()(v.nx, K),
            innerClassName: v.Fv,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(o.hD, {
                navigator: F,
                children: (0, r.jsx)(o.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, r.jsx)(u.ChK, {
                            id: P,
                            ref: (e) => {
                                (t.current = e?.getScrollerNode() ?? null), (k.current = e);
                            },
                            orientation: "vertical",
                            overflow: "auto",
                            ...n,
                            className: v.XG,
                            style: { maxHeight: $ },
                            role: "listbox",
                            "aria-labelledby": (0, f.Sz)(P),
                            children: W,
                        });
                    },
                }),
            }),
        });
        return null != j
            ? (0, r.jsx)(V, {
                  children: (0, r.jsx)(u.QCO, {
                      targetRef: e.targetRef,
                      overrideTargetRect: j,
                      positionKey: Y,
                      position: e.position ?? "top",
                      align: "left",
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => X,
                  }),
              })
            : X;
    });
