n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(131346),
    o = n(419354),
    d = n(837381),
    c = n(317097),
    u = n(319060),
    h = n(602853),
    A = n(827734),
    _ = n(331322),
    m = n(866323),
    g = n(817281),
    p = n(534409),
    f = n(711014),
    E = n(240248),
    x = n(263715),
    I = n(941971),
    C = n(447253),
    b = n(531053),
    N = n(107385),
    S = n(900848),
    v = n(550591),
    T = n(114329),
    y = n(985018),
    j = n(273923),
    R = n(620370);
let L = (0, E.xI)(u.A.FOLDER_ITEM_ANIMATION_DURATION),
    O = (0, o.animated)(_.B),
    G = l.memo(function (e) {
        var t;
        let n,
            s,
            o,
            {
                folderNode: u,
                setNodeRef: _,
                selected: E,
                expanded: G,
                mediaState: M,
                mentionCount: D = 0,
                isMentionLowImportance: U,
                unread: P = !1,
                defaultFolderName: w,
                draggable: k = !1,
                sorting: V = !1,
                onDragStart: B,
                onDragEnd: H,
                onExpandCollapse: F,
                onContextMenu: W,
                renderChildNode: Y,
                folderButtonSize: K,
                folderButtonContent: z,
                "aria-setsize": q,
                "aria-posinset": X,
            } = e,
            { id: Q, name: Z, children: J } = u,
            [$, ee] = l.useState(!1),
            [et, en] = l.useState(!1),
            ei = $ || et,
            el = (0, p.qK)("FolderItem");
        l.useEffect(() => {
            V && ee(!1);
        }, [V]);
        let [{ dragging: es }, ea] = (0, r.i)({
                type: x.PJ.FOLDER,
                item: () => (B?.(), { type: x.PJ.FOLDER, nodeId: u.id }),
                end() {
                    H?.(), (0, g.um)(f.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            er = l.useCallback((e) => {
                en(e);
            }, []),
            eo = l.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !G) || ("ArrowLeft" === e.key && G)) && F();
                },
                [F, G],
            ),
            ed = null != Z && "" !== Z ? Z : null != w && "" !== w ? w : y.intl.string(y.t.xV9hVh),
            ec = (0, d.Vd)(`${Q}`),
            eu = `folder-items-${Q}`,
            eh =
                ((t = J.length),
                (n = (0, h.r)(A.A.modules.guildbar.FOLDER_SIZE)),
                (s = (0, h.r)(A.A.modules.guildbar.AVATAR_SIZE)),
                t * (s + (o = (0, h.r)(A.A.space.SPACE_XS))) - o + (o - (n - s) / 2) + (0, h.r)(A.A.space.SPACE_4)),
            eA = (0, m.p)(!es && G, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: L },
            }),
            e_ = l.useCallback((e) => _?.(Q, e), [_, Q]),
            em = (0, i.jsxs)(S.c, {
                children: [
                    (0, i.jsx)(I.A, { disabled: es || G, hovered: $, selected: E, unread: P, className: R.Io }),
                    (0, i.jsx)(v.A, {
                        text: ed,
                        disabled: V,
                        selected: E,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: k
                                ? (e) => {
                                      ea(e);
                                  }
                                : void 0,
                            className: a()(j.MJ, { [j.L0]: "icon" === K || el, [R.oR]: !es && et && !G }),
                            "data-dnd-name": ed,
                            children: es
                                ? (0, i.jsx)(N.A, { isFolder: !0 })
                                : (0, i.jsx)(C.A, {
                                      folderNode: u,
                                      expanded: G,
                                      sorting: V,
                                      mediaState: M,
                                      mentionCount: D,
                                      isMentionLowImportance: U,
                                      tooltipName: ed,
                                      folderGroupId: eu,
                                      onClick: F,
                                      onContextMenu: W,
                                      onHoverChange: ee,
                                      onKeyDown: eo,
                                      treeItemProps: ec,
                                      folderButtonContent: z,
                                      "aria-setsize": q,
                                      "aria-posinset": X,
                                  }),
                        }),
                    }),
                    k ? (0, i.jsx)(b.Ay, { name: ed, targetNode: u, onDragOverChanged: er }) : null,
                ],
            }),
            eg = null != u.color ? u.color : T.DO,
            ep = eg === T.DO ? void 0 : (0, c.Hl)(eg);
        return (0, i.jsxs)("div", {
            ref: e_,
            className: a()(j.qc, { [j.Av]: G, [j.Lg]: ei }),
            style: { "--custom-folder-color": ep ?? "" },
            "data-drop-hovering": et,
            children: [
                !es && G && (0, i.jsx)("span", { className: j.GO }),
                em,
                eA((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            O,
                            {
                                id: eu,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: j.TN,
                                style: { height: e.height.to((e) => e * eh) },
                                "aria-label": u.name,
                                children: J.map((t, n) => Y(t, n, J.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                k && G ? (0, i.jsx)(b.qv, { name: ed, targetNode: u }) : null,
            ],
        });
    });
