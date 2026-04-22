n.d(t, { Ay: () => p, is: () => g, sc: () => m });
var i = n(627968),
    l = n(64700),
    s = n(38021),
    a = n(637248),
    r = n(728321),
    o = n(244083),
    d = n(32603),
    c = n(600761),
    u = n(83766),
    h = n(652215),
    A = n(985018),
    _ = n(121880);
function m(e, t, n, i) {
    let l = "compact" === i ? 8 : 12;
    if (e === d.PU) return l;
    if (e === d.bK) return t.features.has(h.GuildFeatures.HUB) ? 0 : l;
    if (e === n.voiceChannelsSectionNumber) {
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return 49;
        let i = n.getChannelFromSectionRow(e, 0)?.channel;
        return null == i || i.record.type === h.rbe.GUILD_CATEGORY ? 9 : 25;
    }
    return "compact" === i ? 32 : 40;
}
function g(e, t) {
    switch (e) {
        case d.PU:
            return "hoisted-spacer";
        case d.bK:
            return "uncategorized-spacer";
        case d.HP:
            return "favorites";
        case t.recentsSectionNumber:
            return "recents-header";
        case t.voiceChannelsSectionNumber:
            return "voice-channels-header";
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return `category-${n.id}`;
            return `section-${e}`;
        }
    }
}
let p = l.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: m,
            guildChannelsVersion: g,
            selectedChannelId: p,
            disableManageChannels: f,
        } = e,
        E = l.useCallback(() => {
            let e = m.getCategoryFromSection(m.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != p && i.includes(p) && (t = (0, a.xb)(m)), (0, a.DD)(n.id, i, t);
        }, [n.id, p, m, g]),
        { density: x } = (0, s.wR)(),
        I = "compact" === x ? 8 : 12;
    switch (t) {
        case d.PU:
            return (0, i.jsx)("div", { style: { height: I } });
        case d.bK:
            if (n.features.has(h.GuildFeatures.HUB)) return null;
            return (0, i.jsx)("div", { style: { height: I } });
        case d.HP:
            return (0, i.jsx)(c.P4, { name: A.intl.string(A.t.mlPMCy) });
        case m.recentsSectionNumber:
            return (0, i.jsx)(c.P4, { name: A.intl.string(A.t.gKcrqM), onDismiss: E });
        case m.voiceChannelsSectionNumber: {
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = m.getChannelFromSectionRow(t, 0)?.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)("div", { className: _.ts }), (0, i.jsx)(c.kD, { category: e, channel: n })],
            });
        }
        case d.TF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(c.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: f,
                children: (0, i.jsx)(r.A, {
                    inlineSpecs: u.qB,
                    arrowAlignment: o.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(c.Ay, { channel: e.record, position: e.position, disableManageChannels: f });
        }
    }
});
