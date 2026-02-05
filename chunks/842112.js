t.d(l, { default: () => b });
var r = t(627968);
t(64700);
var d = t(311907),
    i = t(397927),
    n = t(442433),
    a = t(686956),
    s = t(383394),
    o = t(711014),
    c = t(567035),
    u = t(652215),
    p = t(985018);
function b(e) {
    let { folderId: l, folderName: b, folderColor: f, unread: h, onSelect: x } = e,
        g = (0, d.bG)([o.Ay], () => o.Ay.getGuildFolderById(l), [l]),
        A = (0, d.bG)([s.A], () => s.A.getExpandedFolders().size > 0);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": p.intl.string(p.t.HpQykc),
        onClose: n.Z_,
        onSelect: x,
        children: [
            (0, r.jsx)(i.rXV, {
                children: (0, r.jsx)(i.Drp, {
                    id: "mark-folder-read",
                    label: p.intl.string(p.t.thzRJA),
                    action: function () {
                        if (null == g) return;
                        let { guildIds: e } = g;
                        (0, c.A)(e, u.JJy.GUILD_LIST);
                    },
                    disabled: !h,
                }),
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    (0, r.jsx)(i.Drp, {
                        id: "folder-settings",
                        label: p.intl.string(p.t.Dx7im5),
                        action: () =>
                            (0, i.mMO)(async () => {
                                let { default: e } = await t.e("99116").then(t.bind(t, 672551));
                                return (t) => (0, r.jsx)(e, { ...t, folderId: l, folderName: b, folderColor: f });
                            }),
                    }),
                    A &&
                        (0, r.jsx)(i.Drp, {
                            id: "folder-collapse",
                            label: p.intl.string(p.t.rCPsbo),
                            action: () => a.A.collapseAllFolders(),
                        }),
                ],
            }),
        ],
    });
}
