n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(131346),
    o = n(92674),
    c = n(837381),
    u = n(317097),
    d = n(319060),
    p = n(397927),
    h = n(817281),
    g = n(534409),
    f = n(711014),
    m = n(240248),
    b = n(263715),
    A = n(941971),
    y = n(447253),
    O = n(531053),
    j = n(107385),
    x = n(900848),
    _ = n(550591),
    v = n(114329),
    E = n(985018),
    C = n(211170),
    S = n(837021);
let I = (0, m.xI)(d.A.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, o.animated)(p.BJc),
    T = l.memo(function (e) {
        var t;
        let n,
            i,
            o,
            {
                folderNode: d,
                setNodeRef: m,
                selected: T,
                expanded: P,
                mediaState: w,
                mentionCount: R = 0,
                isMentionLowImportance: D,
                unread: L = !1,
                defaultFolderName: M,
                draggable: G = !1,
                sorting: k = !1,
                onDragStart: U,
                onDragEnd: V,
                onExpandCollapse: B,
                onContextMenu: H,
                renderChildNode: F,
                folderButtonSize: Y,
                folderButtonContent: K,
                "aria-setsize": W,
                "aria-posinset": z,
            } = e,
            { id: X, name: q, children: J } = d,
            [Q, Z] = l.useState(!1),
            [$, ee] = l.useState(!1),
            et = Q || $,
            en = (0, g.qK)("FolderItem");
        l.useEffect(() => {
            k && Z(!1);
        }, [k]);
        let [{ dragging: er }, el] = (0, a.i)({
                type: b.PJ.FOLDER,
                item: () => (
                    null == U || U(),
                    {
                        type: b.PJ.FOLDER,
                        nodeId: d.id,
                    }
                ),
                end() {
                    null == V || V(), (0, h.um)(f.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({
                    dragging: e.isDragging(),
                }),
            }),
            ei = l.useCallback((e) => {
                ee(e);
            }, []),
            es = l.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !P) || ("ArrowLeft" === e.key && P)) && B();
                },
                [B, P],
            ),
            ea = null != q && "" !== q ? q : null != M && "" !== M ? M : E.intl.string(E.t.xV9hVh),
            eo = (0, c.Vd)("".concat(X)),
            ec = "folder-items-".concat(X),
            eu =
                ((t = J.length),
                (n = (0, p.rdh)(p.LU0.modules.guildbar.FOLDER_SIZE)),
                (i = (0, p.rdh)(p.LU0.modules.guildbar.AVATAR_SIZE)),
                t * (i + (o = (0, p.rdh)(p.LU0.space.SPACE_XS))) -
                    o +
                    (o - (n - i) / 2) +
                    (0, p.rdh)(p.LU0.space.SPACE_4)),
            ed = (0, p.pnh)(!er && P, {
                from: {
                    height: 0,
                },
                enter: {
                    height: 1,
                },
                leave: {
                    height: 0,
                },
                config: {
                    duration: I,
                },
            }),
            ep = l.useCallback((e) => (null == m ? void 0 : m(X, e)), [m, X]),
            eh = (0, r.jsxs)(x.c, {
                children: [
                    (0, r.jsx)(A.A, {
                        disabled: er || P,
                        hovered: Q,
                        selected: T,
                        unread: L,
                        className: S.Io,
                    }),
                    (0, r.jsx)(_.A, {
                        text: ea,
                        disabled: k,
                        selected: T,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: G
                                ? (e) => {
                                      el(e);
                                  }
                                : void 0,
                            className: s()(C.MJ, {
                                [C.L0]: "icon" === Y || en,
                                [S.oR]: !er && $ && !P,
                            }),
                            "data-dnd-name": ea,
                            children: er
                                ? (0, r.jsx)(j.A, {
                                      isFolder: !0,
                                  })
                                : (0, r.jsx)(y.A, {
                                      folderNode: d,
                                      expanded: P,
                                      sorting: k,
                                      mediaState: w,
                                      mentionCount: R,
                                      isMentionLowImportance: D,
                                      tooltipName: ea,
                                      folderGroupId: ec,
                                      onClick: B,
                                      onContextMenu: H,
                                      onHoverChange: Z,
                                      onKeyDown: es,
                                      treeItemProps: eo,
                                      folderButtonContent: K,
                                      "aria-setsize": W,
                                      "aria-posinset": z,
                                  }),
                        }),
                    }),
                    G
                        ? (0, r.jsx)(O.Ay, {
                              name: ea,
                              targetNode: d,
                              onDragOverChanged: ei,
                          })
                        : null,
                ],
            }),
            eg = null != d.color ? d.color : v.DO,
            ef = eg === v.DO ? void 0 : (0, u.Hl)(eg);
        return (0, r.jsxs)("div", {
            ref: ep,
            className: s()(C.qc, {
                [C.Av]: P,
                [C.Lg]: et,
            }),
            style: {
                "--custom-folder-color": null != ef ? ef : "",
            },
            "data-drop-hovering": $,
            children: [
                !er &&
                    P &&
                    (0, r.jsx)("span", {
                        className: C.GO,
                    }),
                eh,
                ed((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            N,
                            {
                                id: ec,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: C.TN,
                                style: {
                                    height: e.height.to((e) => e * eu),
                                },
                                "aria-label": d.name,
                                children: J.map((t, n) => F(t, n, J.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                G && P
                    ? (0, r.jsx)(O.qv, {
                          name: ea,
                          targetNode: d,
                      })
                    : null,
            ],
        });
    });
