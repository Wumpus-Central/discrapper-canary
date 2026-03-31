n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(382222),
    c = n(837381),
    d = n(317097),
    u = n(319060),
    h = n(397927),
    A = n(817281),
    _ = n(534409),
    m = n(711014),
    g = n(240248),
    p = n(263715),
    f = n(941971),
    x = n(447253),
    E = n(531053),
    I = n(107385),
    C = n(900848),
    N = n(550591),
    T = n(114329),
    S = n(985018),
    b = n(142163),
    y = n(604418);
let v = (0, g.xI)(u.A.FOLDER_ITEM_ANIMATION_DURATION),
    j = (0, o.animated)(h.BJc),
    R = l.memo(function (e) {
        var t;
        let n,
            s,
            o,
            {
                folderNode: u,
                setNodeRef: g,
                selected: R,
                expanded: O,
                mediaState: L,
                mentionCount: M = 0,
                isMentionLowImportance: D,
                unread: U = !1,
                defaultFolderName: G,
                draggable: P = !1,
                sorting: k = !1,
                onDragStart: w,
                onDragEnd: B,
                onExpandCollapse: V,
                onContextMenu: H,
                renderChildNode: F,
                folderButtonSize: K,
                folderButtonContent: W,
                "aria-setsize": Y,
                "aria-posinset": z,
            } = e,
            { id: q, name: X, children: J } = u,
            [Q, $] = l.useState(!1),
            [Z, ee] = l.useState(!1),
            et = Q || Z,
            en = (0, _.qK)("FolderItem");
        l.useEffect(() => {
            k && $(!1);
        }, [k]);
        let [{ dragging: ei }, el] = (0, r.i)({
                type: p.PJ.FOLDER,
                item: () => (w?.(), { type: p.PJ.FOLDER, nodeId: u.id }),
                end() {
                    B?.(), (0, A.um)(m.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            es = l.useCallback((e) => {
                ee(e);
            }, []),
            ea = l.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !O) || ("ArrowLeft" === e.key && O)) && V();
                },
                [V, O],
            ),
            er = null != X && "" !== X ? X : null != G && "" !== G ? G : S.intl.string(S.t.xV9hVh),
            eo = (0, c.Vd)(`${q}`),
            ec = `folder-items-${q}`,
            ed =
                ((t = J.length),
                (n = (0, h.rdh)(h.LU0.modules.guildbar.FOLDER_SIZE)),
                (s = (0, h.rdh)(h.LU0.modules.guildbar.AVATAR_SIZE)),
                t * (s + (o = (0, h.rdh)(h.LU0.space.SPACE_XS))) -
                    o +
                    (o - (n - s) / 2) +
                    (0, h.rdh)(h.LU0.space.SPACE_4)),
            eu = (0, h.pnh)(!ei && O, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: v },
            }),
            eh = l.useCallback((e) => g?.(q, e), [g, q]),
            eA = (0, i.jsxs)(C.c, {
                children: [
                    (0, i.jsx)(f.A, { disabled: ei || O, hovered: Q, selected: R, unread: U, className: y.Io }),
                    (0, i.jsx)(N.A, {
                        text: er,
                        disabled: k,
                        selected: R,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: P
                                ? (e) => {
                                      el(e);
                                  }
                                : void 0,
                            className: a()(b.MJ, { [b.L0]: "icon" === K || en, [y.oR]: !ei && Z && !O }),
                            "data-dnd-name": er,
                            children: ei
                                ? (0, i.jsx)(I.A, { isFolder: !0 })
                                : (0, i.jsx)(x.A, {
                                      folderNode: u,
                                      expanded: O,
                                      sorting: k,
                                      mediaState: L,
                                      mentionCount: M,
                                      isMentionLowImportance: D,
                                      tooltipName: er,
                                      folderGroupId: ec,
                                      onClick: V,
                                      onContextMenu: H,
                                      onHoverChange: $,
                                      onKeyDown: ea,
                                      treeItemProps: eo,
                                      folderButtonContent: W,
                                      "aria-setsize": Y,
                                      "aria-posinset": z,
                                  }),
                        }),
                    }),
                    P ? (0, i.jsx)(E.Ay, { name: er, targetNode: u, onDragOverChanged: es }) : null,
                ],
            }),
            e_ = null != u.color ? u.color : T.DO,
            em = e_ === T.DO ? void 0 : (0, d.Hl)(e_);
        return (0, i.jsxs)("div", {
            ref: eh,
            className: a()(b.qc, { [b.Av]: O, [b.Lg]: et }),
            style: { "--custom-folder-color": em ?? "" },
            "data-drop-hovering": Z,
            children: [
                !ei && O && (0, i.jsx)("span", { className: b.GO }),
                eA,
                eu((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            j,
                            {
                                id: ec,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: b.TN,
                                style: { height: e.height.to((e) => e * ed) },
                                "aria-label": u.name,
                                children: J.map((t, n) => F(t, n, J.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                P && O ? (0, i.jsx)(E.qv, { name: er, targetNode: u }) : null,
            ],
        });
    });
