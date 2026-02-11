n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(563495),
    d = n(837381),
    c = n(317097),
    u = n(319060),
    h = n(397927),
    A = n(817281),
    m = n(534409),
    p = n(711014),
    g = n(240248),
    _ = n(263715),
    f = n(941971),
    x = n(447253),
    C = n(531053),
    E = n(107385),
    I = n(900848),
    b = n(550591),
    N = n(114329),
    S = n(985018),
    T = n(584352),
    v = n(508831);
let y = (0, g.xI)(u.A.FOLDER_ITEM_ANIMATION_DURATION),
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
                unread: G = !1,
                defaultFolderName: U,
                draggable: P = !1,
                sorting: w = !1,
                onDragStart: k,
                onDragEnd: V,
                onExpandCollapse: B,
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
            en = (0, m.qK)("FolderItem");
        l.useEffect(() => {
            w && $(!1);
        }, [w]);
        let [{ dragging: ei }, el] = (0, r.i)({
                type: _.PJ.FOLDER,
                item: () => (k?.(), { type: _.PJ.FOLDER, nodeId: u.id }),
                end() {
                    V?.(), (0, A.um)(p.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            es = l.useCallback((e) => {
                ee(e);
            }, []),
            ea = l.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !O) || ("ArrowLeft" === e.key && O)) && B();
                },
                [B, O],
            ),
            er = null != X && "" !== X ? X : null != U && "" !== U ? U : S.intl.string(S.t.xV9hVh),
            eo = (0, d.Vd)(`${q}`),
            ed = `folder-items-${q}`,
            ec =
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
                config: { duration: y },
            }),
            eh = l.useCallback((e) => g?.(q, e), [g, q]),
            eA = (0, i.jsxs)(I.c, {
                children: [
                    (0, i.jsx)(f.A, { disabled: ei || O, hovered: Q, selected: R, unread: G, className: v.Io }),
                    (0, i.jsx)(b.A, {
                        text: er,
                        disabled: w,
                        selected: R,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: P
                                ? (e) => {
                                      el(e);
                                  }
                                : void 0,
                            className: a()(T.MJ, { [T.L0]: "icon" === K || en, [v.oR]: !ei && Z && !O }),
                            "data-dnd-name": er,
                            children: ei
                                ? (0, i.jsx)(E.A, { isFolder: !0 })
                                : (0, i.jsx)(x.A, {
                                      folderNode: u,
                                      expanded: O,
                                      sorting: w,
                                      mediaState: L,
                                      mentionCount: M,
                                      isMentionLowImportance: D,
                                      tooltipName: er,
                                      folderGroupId: ed,
                                      onClick: B,
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
                    P ? (0, i.jsx)(C.Ay, { name: er, targetNode: u, onDragOverChanged: es }) : null,
                ],
            }),
            em = null != u.color ? u.color : N.DO,
            ep = em === N.DO ? void 0 : (0, c.Hl)(em);
        return (0, i.jsxs)("div", {
            ref: eh,
            className: a()(T.qc, { [T.Av]: O, [T.Lg]: et }),
            style: { "--custom-folder-color": ep ?? "" },
            "data-drop-hovering": Z,
            children: [
                !ei && O && (0, i.jsx)("span", { className: T.GO }),
                eA,
                eu((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            j,
                            {
                                id: ed,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: T.TN,
                                style: { height: e.height.to((e) => e * ec) },
                                "aria-label": u.name,
                                children: J.map((t, n) => F(t, n, J.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                P && O ? (0, i.jsx)(C.qv, { name: er, targetNode: u }) : null,
            ],
        });
    });
