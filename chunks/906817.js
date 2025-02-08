n.d(t, {
    EM: () => f,
    WW: () => _,
    ZP: () => v
});
var i = n(200651),
    l = n(192379),
    r = n(997638),
    a = n(362658),
    o = n(216306),
    s = n(155409),
    c = n(540126),
    d = n(301342),
    u = n(327530),
    h = n(981631),
    p = n(388032),
    g = n(607686);
function m(e) {
    return e ? 9 : u.QP;
}
function f(e, t, n, i) {
    if (e === c.wZ) return u.$k;
    if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : u.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var l;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return u.Pw + m(i);
        let r = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
        return null == r || r.record.type === h.d4z.GUILD_CATEGORY ? m(i) : 16 + m(i);
    }
    return u.Pw;
}
function _(e, t) {
    switch (e) {
        case c.wZ:
            return 'hoisted-spacer';
        case c.wd:
            return 'uncategorized-spacer';
        case c.p2:
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
let v = l.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: m, guildChannelsVersion: f, selectedChannelId: _, disableManageChannels: v } = e,
        { isFavoritesPerk: C } = (0, a.z)('ChannelListSection'),
        x = l.useCallback(() => {
            let e = m.getCategoryFromSection(m.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != _ && i.includes(_) && (t = (0, o.KY)(m)), (0, o.Uo)(n.id, i, t);
        }, [n.id, _, m, f]);
    switch (t) {
        case c.wZ:
            return (0, i.jsx)('div', { style: { height: u.$k } });
        case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)('div', { style: { height: u.$k } });
        case c.p2:
            return (0, i.jsx)(d.P, { name: C ? p.intl.string(p.t.mlPMCw) : p.intl.string(p.t.k8fFjo) });
        case m.recentsSectionNumber:
            return (0, i.jsx)(d.P, {
                name: p.intl.string(p.t.gKcrqK),
                onDismiss: x
            });
        case m.voiceChannelsSectionNumber: {
            var Z;
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null === (Z = m.getChannelFromSectionRow(t, 0)) || void 0 === Z ? void 0 : Z.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: g.sectionDivider }),
                    (0, i.jsx)(d.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case c.wF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v,
                children: (0, i.jsx)(s.Z, {
                    inlineSpecs: u.MF,
                    arrowAlignment: r.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v
            });
        }
    }
});
