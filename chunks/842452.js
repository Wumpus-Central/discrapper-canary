n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(92674),
    d = n(837381),
    c = n(317097),
    u = n(319060),
    h = n(397927),
    A = n(817281),
    g = n(534409),
    m = n(711014),
    p = n(240248),
    _ = n(263715),
    x = n(941971),
    f = n(447253),
    E = n(531053),
    C = n(107385),
    I = n(900848),
    S = n(550591),
    b = n(114329),
    N = n(985018),
    T = n(211170),
    j = n(837021);
let v = (0, p.xI)(u.A.FOLDER_ITEM_ANIMATION_DURATION),
    y = (0, o.animated)(h.BJc),
    R = l.memo(function (e) {
        var t;
        let n,
            s,
            o,
            {
                folderNode: u,
                setNodeRef: p,
                selected: R,
                expanded: O,
                mediaState: L,
                mentionCount: D = 0,
                isMentionLowImportance: M,
                unread: G = !1,
                defaultFolderName: U,
                draggable: P = !1,
                sorting: k = !1,
                onDragStart: w,
                onDragEnd: V,
                onExpandCollapse: B,
                onContextMenu: H,
                renderChildNode: F,
                folderButtonSize: Y,
                folderButtonContent: W,
                "aria-setsize": K,
                "aria-posinset": z,
            } = e,
            { id: X, name: q, children: J } = u,
            [Q, Z] = l.useState(!1),
            [$, ee] = l.useState(!1),
            et = Q || $,
            en = (0, g.qK)("FolderItem");
        l.useEffect(() => {
            k && Z(!1);
        }, [k]);
        let [{ dragging: ei }, el] = (0, r.i)({
                type: _.PJ.FOLDER,
                item: () => (w?.(), { type: _.PJ.FOLDER, nodeId: u.id }),
                end() {
                    V?.(), (0, A.um)(m.Ay.getCompatibleGuildFolders());
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
            er = null != q && "" !== q ? q : null != U && "" !== U ? U : N.intl.string(N.t.xV9hVh),
            eo = (0, d.Vd)(`${X}`),
            ed = `folder-items-${X}`,
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
                config: { duration: v },
            }),
            eh = l.useCallback((e) => p?.(X, e), [p, X]),
            eA = (0, i.jsxs)(I.c, {
                children: [
                    (0, i.jsx)(x.A, { disabled: ei || O, hovered: Q, selected: R, unread: G, className: j.Io }),
                    (0, i.jsx)(S.A, {
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
                            className: a()(T.MJ, { [T.L0]: "icon" === Y || en, [j.oR]: !ei && $ && !O }),
                            "data-dnd-name": er,
                            children: ei
                                ? (0, i.jsx)(C.A, { isFolder: !0 })
                                : (0, i.jsx)(f.A, {
                                      folderNode: u,
                                      expanded: O,
                                      sorting: k,
                                      mediaState: L,
                                      mentionCount: D,
                                      isMentionLowImportance: M,
                                      tooltipName: er,
                                      folderGroupId: ed,
                                      onClick: B,
                                      onContextMenu: H,
                                      onHoverChange: Z,
                                      onKeyDown: ea,
                                      treeItemProps: eo,
                                      folderButtonContent: W,
                                      "aria-setsize": K,
                                      "aria-posinset": z,
                                  }),
                        }),
                    }),
                    P ? (0, i.jsx)(E.Ay, { name: er, targetNode: u, onDragOverChanged: es }) : null,
                ],
            }),
            eg = null != u.color ? u.color : b.DO,
            em = eg === b.DO ? void 0 : (0, c.Hl)(eg);
        return (0, i.jsxs)("div", {
            ref: eh,
            className: a()(T.qc, { [T.Av]: O, [T.Lg]: et }),
            style: { "--custom-folder-color": em ?? "" },
            "data-drop-hovering": $,
            children: [
                !ei && O && (0, i.jsx)("span", { className: T.GO }),
                eA,
                eu((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            y,
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
                P && O ? (0, i.jsx)(E.qv, { name: er, targetNode: u }) : null,
            ],
        });
    });
