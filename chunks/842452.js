"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(131346),
    o = n(475539),
    c = n(837381),
    d = n(317097),
    u = n(319060),
    h = n(397927),
    A = n(817281),
    p = n(534409),
    g = n(711014),
    m = n(240248),
    _ = n(263715),
    f = n(941971),
    x = n(447253),
    C = n(531053),
    E = n(107385),
    I = n(900848),
    b = n(550591),
    N = n(114329),
    S = n(985018),
    T = n(211170),
    v = n(837021);
let y = (0, m.xI)(u.A.FOLDER_ITEM_ANIMATION_DURATION),
    j = (0, o.animated)(h.BJc),
    R = s.memo(function (e) {
        var t;
        let n,
            l,
            o,
            {
                folderNode: u,
                setNodeRef: m,
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
            { id: X, name: q, children: J } = u,
            [Q, $] = s.useState(!1),
            [Z, ee] = s.useState(!1),
            et = Q || Z,
            en = (0, p.qK)("FolderItem");
        s.useEffect(() => {
            w && $(!1);
        }, [w]);
        let [{ dragging: ei }, es] = (0, a.i)({
                type: _.PJ.FOLDER,
                item: () => (k?.(), { type: _.PJ.FOLDER, nodeId: u.id }),
                end() {
                    V?.(), (0, A.um)(g.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            el = s.useCallback((e) => {
                ee(e);
            }, []),
            er = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !O) || ("ArrowLeft" === e.key && O)) && B();
                },
                [B, O],
            ),
            ea = null != q && "" !== q ? q : null != U && "" !== U ? U : S.intl.string(S.t.xV9hVh),
            eo = (0, c.Vd)(`${X}`),
            ec = `folder-items-${X}`,
            ed =
                ((t = J.length),
                (n = (0, h.rdh)(h.LU0.modules.guildbar.FOLDER_SIZE)),
                (l = (0, h.rdh)(h.LU0.modules.guildbar.AVATAR_SIZE)),
                t * (l + (o = (0, h.rdh)(h.LU0.space.SPACE_XS))) -
                    o +
                    (o - (n - l) / 2) +
                    (0, h.rdh)(h.LU0.space.SPACE_4)),
            eu = (0, h.pnh)(!ei && O, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: y },
            }),
            eh = s.useCallback((e) => m?.(X, e), [m, X]),
            eA = (0, i.jsxs)(I.c, {
                children: [
                    (0, i.jsx)(f.A, { disabled: ei || O, hovered: Q, selected: R, unread: G, className: v.Io }),
                    (0, i.jsx)(b.A, {
                        text: ea,
                        disabled: w,
                        selected: R,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: P
                                ? (e) => {
                                      es(e);
                                  }
                                : void 0,
                            className: r()(T.MJ, { [T.L0]: "icon" === K || en, [v.oR]: !ei && Z && !O }),
                            "data-dnd-name": ea,
                            children: ei
                                ? (0, i.jsx)(E.A, { isFolder: !0 })
                                : (0, i.jsx)(x.A, {
                                      folderNode: u,
                                      expanded: O,
                                      sorting: w,
                                      mediaState: L,
                                      mentionCount: M,
                                      isMentionLowImportance: D,
                                      tooltipName: ea,
                                      folderGroupId: ec,
                                      onClick: B,
                                      onContextMenu: H,
                                      onHoverChange: $,
                                      onKeyDown: er,
                                      treeItemProps: eo,
                                      folderButtonContent: W,
                                      "aria-setsize": Y,
                                      "aria-posinset": z,
                                  }),
                        }),
                    }),
                    P ? (0, i.jsx)(C.Ay, { name: ea, targetNode: u, onDragOverChanged: el }) : null,
                ],
            }),
            ep = null != u.color ? u.color : N.DO,
            eg = ep === N.DO ? void 0 : (0, d.Hl)(ep);
        return (0, i.jsxs)("div", {
            ref: eh,
            className: r()(T.qc, { [T.Av]: O, [T.Lg]: et }),
            style: { "--custom-folder-color": eg ?? "" },
            "data-drop-hovering": Z,
            children: [
                !ei && O && (0, i.jsx)("span", { className: T.GO }),
                eA,
                eu((e, t, n) => {
                    let { key: s } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            j,
                            {
                                id: ec,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: T.TN,
                                style: { height: e.height.to((e) => e * ed) },
                                "aria-label": u.name,
                                children: J.map((t, n) => F(t, n, J.length, e.height)),
                            },
                            s,
                        )
                    );
                }),
                P && O ? (0, i.jsx)(C.qv, { name: ea, targetNode: u }) : null,
            ],
        });
    });
