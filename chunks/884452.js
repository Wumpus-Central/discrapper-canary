n.d(t, { Ay: () => x, is: () => _, sc: () => p });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(616075),
    r = n(637248),
    o = n(728321),
    d = n(244083),
    c = n(32603),
    u = n(823142),
    h = n(83766),
    A = n(652215),
    g = n(985018),
    m = n(495401);
function p(e, t, n, i) {
    let l = "compact" === i ? 8 : 12;
    if (e === c.PU) return l;
    if (e === c.bK) return t.features.has(A.GuildFeatures.HUB) ? 0 : l;
    if (e === n.voiceChannelsSectionNumber) {
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return 49;
        let i = n.getChannelFromSectionRow(e, 0)?.channel;
        return null == i || i.record.type === A.rbe.GUILD_CATEGORY ? 9 : 25;
    }
    return "compact" === i ? 32 : 40;
}
function _(e, t) {
    switch (e) {
        case c.PU:
            return "hoisted-spacer";
        case c.bK:
            return "uncategorized-spacer";
        case c.HP:
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
let x = l.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: p,
            guildChannelsVersion: _,
            selectedChannelId: x,
            disableManageChannels: f,
        } = e,
        { isFavoritesPerk: E } = (0, a.l)("ChannelListSection"),
        C = l.useCallback(() => {
            let e = p.getCategoryFromSection(p.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != x && i.includes(x) && (t = (0, r.xb)(p)), (0, r.DD)(n.id, i, t);
        }, [n.id, x, p, _]),
        { density: I } = (0, s.wRf)(),
        S = "compact" === I ? 8 : 12;
    switch (t) {
        case c.PU:
            return (0, i.jsx)("div", { style: { height: S } });
        case c.bK:
            if (n.features.has(A.GuildFeatures.HUB)) return null;
            return (0, i.jsx)("div", { style: { height: S } });
        case c.HP:
            return (0, i.jsx)(u.P4, { name: E ? g.intl.string(g.t.mlPMCy) : g.intl.string(g.t.k8fFjp) });
        case p.recentsSectionNumber:
            return (0, i.jsx)(u.P4, { name: g.intl.string(g.t.gKcrqM), onDismiss: C });
        case p.voiceChannelsSectionNumber: {
            let e = p.getCategoryFromSection(p.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = p.getChannelFromSectionRow(t, 0)?.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)("div", { className: m.ts }), (0, i.jsx)(u.kD, { category: e, channel: n })],
            });
        }
        case c.TF: {
            let e = p.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.Ay, {
                channel: e.record,
                position: e.position,
                disableManageChannels: f,
                children: (0, i.jsx)(o.A, {
                    inlineSpecs: h.qB,
                    arrowAlignment: d.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = p.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.Ay, { channel: e.record, position: e.position, disableManageChannels: f });
        }
    }
});
