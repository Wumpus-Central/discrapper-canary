t.d(l, { default: () => h });
var r = t(627968);
t(64700);
var d = t(17928),
    i = t(980707),
    n = t(477782),
    a = t(192308),
    s = t(442433),
    o = t(66834),
    c = t(383394),
    u = t(711014),
    p = t(567035),
    b = t(652215),
    f = t(375708);
function h(e) {
    let { folderId: l, folderName: h, folderColor: x, unread: g, onSelect: A } = e,
        j = (0, d.bG)([u.Ay], () => u.Ay.getGuildFolderById(l), [l]),
        y = (0, d.bG)([c.A], () => c.A.getExpandedFolders().size > 0);
    return (0, r.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": f.intl.string(f.t.HpQykc),
        onClose: s.Z_,
        onSelect: A,
        children: [
            (0, r.jsx)(n.rX, {
                children: (0, r.jsx)(n.Dr, {
                    id: "mark-folder-read",
                    label: f.intl.string(f.t.thzRJA),
                    action: function () {
                        if (null == j) return;
                        let { guildIds: e } = j;
                        (0, p.A)(e, b.JJy.GUILD_LIST);
                    },
                    disabled: !g,
                }),
            }),
            (0, r.jsxs)(n.rX, {
                children: [
                    (0, r.jsx)(n.Dr, {
                        id: "folder-settings",
                        label: f.intl.string(f.t.Dx7im5),
                        action: () =>
                            (0, a.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([t.e("80155"), t.e("99116")]).then(
                                    t.bind(t, 672551),
                                );
                                return (t) => (0, r.jsx)(e, { ...t, folderId: l, folderName: h, folderColor: x });
                            }),
                    }),
                    y &&
                        (0, r.jsx)(n.Dr, {
                            id: "folder-collapse",
                            label: f.intl.string(f.t.rCPsbo),
                            action: () => o.A.collapseAllFolders(),
                        }),
                ],
            }),
        ],
    });
}
