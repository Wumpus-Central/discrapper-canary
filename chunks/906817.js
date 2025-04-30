n.d(t, {
    EM: () => y,
    WW: () => _,
    ZP: () => v
});
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(997638),
    s = n(540059),
    a = n(362658),
    c = n(216306),
    u = n(155409),
    d = n(540126),
    h = n(301342),
    p = n(327530),
    f = n(981631),
    g = n(388032),
    m = n(789123);
function b(e) {
    return e ? 9 : p.QP;
}
function y(e, t, n, r, i) {
    let l = r && 'compact' === i ? 8 : p.$k;
    if (e === d.wZ) return l;
    if (e === d.wd) return t.hasFeature(f.oNc.HUB) ? 0 : l;
    if (e === n.voiceChannelsSectionNumber) {
        var o;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return p.Pw + b(r);
        let i = null == (o = n.getChannelFromSectionRow(e, 0)) ? void 0 : o.channel;
        return null == i || i.record.type === f.d4z.GUILD_CATEGORY ? b(r) : 16 + b(r);
    }
    return r && 'compact' === i ? 32 : p.Pw;
}
function _(e, t) {
    switch (e) {
        case d.wZ:
            return 'hoisted-spacer';
        case d.wd:
            return 'uncategorized-spacer';
        case d.p2:
            return 'favorites';
        case t.recentsSectionNumber:
            return 'recents-header';
        case t.voiceChannelsSectionNumber:
            return 'voice-channels-header';
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return 'category-'.concat(n.id);
            return 'section-'.concat(e);
        }
    }
}
let v = i.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: b, guildChannelsVersion: y, selectedChannelId: _, disableManageChannels: v } = e,
        { isFavoritesPerk: O } = (0, a.z)('ChannelListSection'),
        C = i.useCallback(() => {
            let e = b.getCategoryFromSection(b.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                r = e.getShownChannelAndThreadIds();
            null != _ && r.includes(_) && (t = (0, c.KY)(b)), (0, c.Uo)(n.id, r, t);
        }, [n.id, _, b, y]),
        j = (0, s.Q3)('ChannelListSection'),
        { density: S } = (0, l.TCT)(),
        E = j && 'compact' === S ? 8 : p.$k;
    switch (t) {
        case d.wZ:
            return (0, r.jsx)('div', { style: { height: E } });
        case d.wd:
            if (n.hasFeature(f.oNc.HUB)) return null;
            return (0, r.jsx)('div', { style: { height: E } });
        case d.p2:
            return (0, r.jsx)(h.P, { name: O ? g.intl.string(g.t.mlPMCw) : g.intl.string(g.t.k8fFjo) });
        case b.recentsSectionNumber:
            return (0, r.jsx)(h.P, {
                name: g.intl.string(g.t.gKcrqK),
                onDismiss: C
            });
        case b.voiceChannelsSectionNumber: {
            var x;
            let e = b.getCategoryFromSection(b.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null == (x = b.getChannelFromSectionRow(t, 0)) ? void 0 : x.channel;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)('div', { className: m.sectionDivider }),
                    (0, r.jsx)(h.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case d.wF: {
            let e = b.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(h.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v,
                children: (0, r.jsx)(u.Z, {
                    inlineSpecs: p.MF,
                    arrowAlignment: o.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = b.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(h.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v
            });
        }
    }
});
