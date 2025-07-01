n.d(t, {
    EM: () => m,
    WW: () => b,
    ZP: () => _
});
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(997638),
    a = n(362658),
    s = n(216306),
    c = n(155409),
    u = n(540126),
    d = n(301342),
    h = n(327530),
    p = n(981631),
    f = n(388032),
    g = n(789123);
function m(e, t, n, r) {
    let i = 'compact' === r ? 8 : h.$k;
    if (e === u.wZ) return i;
    if (e === u.wd) return t.hasFeature(p.oNc.HUB) ? 0 : i;
    if (e === n.voiceChannelsSectionNumber) {
        var l;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return h.Pw + 9;
        let r = null == (l = n.getChannelFromSectionRow(e, 0)) ? void 0 : l.channel;
        return null == r || r.record.type === p.d4z.GUILD_CATEGORY ? 9 : 25;
    }
    return 'compact' === r ? 32 : h.Pw;
}
function b(e, t) {
    switch (e) {
        case u.wZ:
            return 'hoisted-spacer';
        case u.wd:
            return 'uncategorized-spacer';
        case u.p2:
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
let _ = i.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: m, guildChannelsVersion: b, selectedChannelId: _, disableManageChannels: O } = e,
        { isFavoritesPerk: y } = (0, a.z)('ChannelListSection'),
        v = i.useCallback(() => {
            let e = m.getCategoryFromSection(m.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                r = e.getShownChannelAndThreadIds();
            (null != _ && r.includes(_) && (t = (0, s.KY)(m)), (0, s.Uo)(n.id, r, t));
        }, [n.id, _, m, b]),
        { density: C } = (0, l.TCT)(),
        j = 'compact' === C ? 8 : h.$k;
    switch (t) {
        case u.wZ:
            return (0, r.jsx)('div', { style: { height: j } });
        case u.wd:
            if (n.hasFeature(p.oNc.HUB)) return null;
            return (0, r.jsx)('div', { style: { height: j } });
        case u.p2:
            return (0, r.jsx)(d.P, { name: y ? f.intl.string(f.t.mlPMCw) : f.intl.string(f.t.k8fFjo) });
        case m.recentsSectionNumber:
            return (0, r.jsx)(d.P, {
                name: f.intl.string(f.t.gKcrqK),
                onDismiss: v
            });
        case m.voiceChannelsSectionNumber: {
            var E;
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null == (E = m.getChannelFromSectionRow(t, 0)) ? void 0 : E.channel;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)('div', { className: g.sectionDivider }),
                    (0, r.jsx)(d.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case u.wF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: O,
                children: (0, r.jsx)(c.Z, {
                    inlineSpecs: h.MF,
                    arrowAlignment: o.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: O
            });
        }
    }
});
