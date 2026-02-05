"use strict";
n.d(t, { A: () => O });
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
    p = n(579940),
    h = n(915089),
    m = n(750506),
    g = n(513609),
    E = n(71393),
    A = n(374803),
    I = n(105330),
    T = n(638897),
    y = n(5867),
    S = n(130139);
let v = 490,
    C = 490,
    b = 245,
    N = 200,
    R = 120,
    O = i.forwardRef(function (e, t) {
        let { channel: n, type: a, editorHeight: O, onVisibilityChange: D, editorScrollerRef: L, barsHeight: w } = e,
            x = (0, h.GV)(),
            P = (0, l.bG)([E.A], () => E.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
            M = i.useRef(null),
            [k, U, G] = (0, T.A)({ ...e, guild: P }, t, M),
            V = a.autocomplete?.forceChatLayer ? g.Ay : m.Ay,
            F = (0, f.aI)(k.selectedIndex);
        (0, p.gf)(x, k.isVisible, F);
        let B = (0, I.l)({ editorHeight: O, type: a, state: k }),
            j = (0, l.bG)([d.Ay], () => {
                let e = d.Ay.getSelfEmbeddedActivityForChannel(n.id),
                    t = d.Ay.getActivityPanelMode();
                return (0, c.AX)(n) && null != e && (0, _.H)(e.location) === n.id && t === y.Gd.PANEL;
            }, [n]),
            H = i.useMemo(
                () =>
                    B?.top == null && B?.left == null && B?.bottom == null && B?.right == null
                        ? ""
                        : String(Date.now()),
                [B?.top, B?.left, B?.bottom, B?.right],
            );
        if (
            (i.useEffect(() => {
                D(k.isVisible, k.query?.type ?? null);
            }, [D, k.isVisible, k.query?.type]),
            !k.isVisible || null == k.query || void 0 === B)
        )
            return null;
        let Y =
            k.query.typeInfo.renderResults({
                results: k.query.results,
                selectedIndex: k.selectedIndex,
                channel: n,
                guild: P,
                query: k.query.queryText,
                options: k.query.options,
                onHover: (e) => U.onResultHover(e),
                onClick: (e) => U.onResultClick(e),
            }) ?? null;
        if (null == Y) return null;
        let W = {
                [S.pK]: null == B,
                [S.YB]: null != B,
                [S.sQ]: null == B && "bottom" === e.position,
                [S.mO]: j,
                [S.Wi]: k.query?.type === A.DB.MENTION_SUGGESTIONS,
            },
            K = v;
        null != B && (K = a.autocomplete?.small ? N : k.query?.type === A.DB.EMOJIS_AND_STICKERS ? C : b);
        let z = Math.max(O, L?.current?.clientHeight ?? 0),
            $ = Math.min(0.5 * window.innerHeight, z);
        K = Math.min(window.innerHeight - R - $ - (w ?? 0), K);
        let q = (0, r.jsx)(f.Ay, {
            id: x,
            className: s()(S.nx, W),
            innerClassName: S.Fv,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(o.hD, {
                navigator: G,
                children: (0, r.jsx)(o.PR, {
                    children: (e) => {
                        let { ref: t, ...n } = e;
                        return (0, r.jsx)(u.ChK, {
                            id: x,
                            ref: (e) => {
                                (t.current = e?.getScrollerNode() ?? null), (M.current = e);
                            },
                            orientation: "vertical",
                            overflow: "auto",
                            ...n,
                            className: S.XG,
                            style: { maxHeight: K },
                            role: "listbox",
                            "aria-labelledby": (0, f.Sz)(x),
                            children: Y,
                        });
                    },
                }),
            }),
        });
        return null != B
            ? (0, r.jsx)(V, {
                  children: (0, r.jsx)(u.QCO, {
                      targetRef: e.targetRef,
                      overrideTargetRect: B,
                      positionKey: H,
                      position: e.position ?? "top",
                      align: "left",
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => q,
                  }),
              })
            : q;
    });
