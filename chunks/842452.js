n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(131346),
    o = n(108531),
    c = n(837381),
    u = n(317097),
    d = n(319060),
    f = n(397927),
    p = n(817281),
    h = n(534409),
    b = n(711014),
    g = n(240248),
    m = n(263715),
    A = n(941971),
    y = n(447253),
    O = n(531053),
    j = n(107385),
    v = n(900848),
    x = n(550591),
    E = n(114329),
    _ = n(985018),
    C = n(211170),
    S = n(837021);
let I = (0, g.xI)(d.A.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, o.animated)(f.BJc),
    T = l.memo(function (e) {
        var t;
        let n,
            i,
            o,
            {
                folderNode: d,
                setNodeRef: g,
                selected: T,
                expanded: P,
                mediaState: w,
                mentionCount: R = 0,
                isMentionLowImportance: D,
                unread: M = !1,
                defaultFolderName: L,
                draggable: G = !1,
                sorting: k = !1,
                onDragStart: U,
                onDragEnd: V,
                onExpandCollapse: F,
                onContextMenu: H,
                renderChildNode: B,
                folderButtonSize: K,
                folderButtonContent: W,
                "aria-setsize": z,
                "aria-posinset": Y,
            } = e,
            { id: q, name: X, children: J } = d,
            [Q, Z] = l.useState(!1),
            [$, ee] = l.useState(!1),
            et = Q || $,
            en = (0, h.qK)("FolderItem");
        l.useEffect(() => {
            k && Z(!1);
        }, [k]);
        let [{ dragging: er }, el] = (0, s.i)({
                type: m.PJ.FOLDER,
                item: () => (
                    null == U || U(),
                    {
                        type: m.PJ.FOLDER,
                        nodeId: d.id,
                    }
                ),
                end() {
                    null == V || V(), (0, p.um)(b.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({
                    dragging: e.isDragging(),
                }),
            }),
            ei = l.useCallback((e) => {
                ee(e);
            }, []),
            ea = l.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !P) || ("ArrowLeft" === e.key && P)) && F();
                },
                [F, P],
            ),
            es = null != X && "" !== X ? X : null != L && "" !== L ? L : _.intl.string(_.t.xV9hVh),
            eo = (0, c.Vd)("".concat(q)),
            ec = "folder-items-".concat(q),
            eu =
                ((t = J.length),
                (n = (0, f.rdh)(f.LU0.modules.guildbar.FOLDER_SIZE)),
                (i = (0, f.rdh)(f.LU0.modules.guildbar.AVATAR_SIZE)),
                t * (i + (o = (0, f.rdh)(f.LU0.space.SPACE_XS))) -
                    o +
                    (o - (n - i) / 2) +
                    (0, f.rdh)(f.LU0.space.SPACE_4)),
            ed = (0, f.pnh)(!er && P, {
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
            ef = l.useCallback((e) => (null == g ? void 0 : g(q, e)), [g, q]),
            ep = (0, r.jsxs)(v.c, {
                children: [
                    (0, r.jsx)(A.A, {
                        disabled: er || P,
                        hovered: Q,
                        selected: T,
                        unread: M,
                        className: S.Io,
                    }),
                    (0, r.jsx)(x.A, {
                        text: es,
                        disabled: k,
                        selected: T,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: G
                                ? (e) => {
                                      el(e);
                                  }
                                : void 0,
                            className: a()(C.MJ, {
                                [C.L0]: "icon" === K || en,
                                [S.oR]: !er && $ && !P,
                            }),
                            "data-dnd-name": es,
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
                                      tooltipName: es,
                                      folderGroupId: ec,
                                      onClick: F,
                                      onContextMenu: H,
                                      onHoverChange: Z,
                                      onKeyDown: ea,
                                      treeItemProps: eo,
                                      folderButtonContent: W,
                                      "aria-setsize": z,
                                      "aria-posinset": Y,
                                  }),
                        }),
                    }),
                    G
                        ? (0, r.jsx)(O.Ay, {
                              name: es,
                              targetNode: d,
                              onDragOverChanged: ei,
                          })
                        : null,
                ],
            }),
            eh = null != d.color ? d.color : E.DO,
            eb = eh === E.DO ? void 0 : (0, u.Hl)(eh);
        return (0, r.jsxs)("div", {
            ref: ef,
            className: a()(C.qc, {
                [C.Av]: P,
                [C.Lg]: et,
            }),
            style: {
                "--custom-folder-color": null != eb ? eb : "",
            },
            "data-drop-hovering": $,
            children: [
                !er &&
                    P &&
                    (0, r.jsx)("span", {
                        className: C.GO,
                    }),
                ep,
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
                                children: J.map((t, n) => B(t, n, J.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                G && P
                    ? (0, r.jsx)(O.qv, {
                          name: es,
                          targetNode: d,
                      })
                    : null,
            ],
        });
    });
