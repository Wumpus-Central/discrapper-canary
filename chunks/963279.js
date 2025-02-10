n.d(t, { default: () => P });
var i = n(200651);
n(192379);
var l = n(512722),
    s = n.n(l),
    a = n(442837),
    r = n(481060),
    d = n(239091),
    u = n(100527),
    c = n(906732),
    o = n(299206),
    g = n(894059),
    E = n(423589),
    h = n(837949),
    S = n(122074),
    N = n(314897),
    _ = n(984933),
    f = n(594174),
    Z = n(241851),
    x = n(94953),
    A = n(976192),
    p = n(904483),
    L = n(429824),
    b = n(919815),
    v = n(858822),
    I = n(993356),
    m = n(58338),
    M = n(422525),
    j = n(522762),
    T = n(466330),
    O = n(981631),
    C = n(388032);
function G(e) {
    let { guild: t, onSelect: l, hideSettings: u } = e,
        c = t.id,
        G = _.ZP.getDefaultChannel(c),
        P = (0, a.e7)(
            [f.default],
            () => {
                let e = f.default.getCurrentUser();
                return s()(null != e, 'GuildContextMenu: user cannot be undefined'), t.isOwner(e);
            },
            [t]
        ),
        y = (0, T.Z)({
            guild: t,
            source: O.t4x.GUILD_CONTEXT_MENU,
            channel: G
        }),
        U = (0, j.Z)(c),
        D = (0, v.Z)(t),
        k = (0, I.Z)(t),
        R = (0, M.Z)(t),
        B = (0, A.Z)({
            guildId: t.id,
            userId: N.default.getId(),
            analyticsLocation: {
                page: O.ZY5.GUILD_CHANNEL,
                section: O.jXE.CHAT_USERNAME,
                object: O.qAy.CONTEXT_MENU_ITEM
            }
        }),
        w = (0, x.Z)({
            guildId: t.id,
            userId: N.default.getId(),
            analyticsLocation: {
                page: O.ZY5.GUILD_CHANNEL,
                section: O.jXE.CHAT_USERNAME,
                object: O.qAy.CONTEXT_MENU_ITEM
            }
        }),
        H = (0, p.Z)(t),
        F = (0, g.Z)(t.id),
        Y = (0, o.Z)({
            id: t.id,
            label: C.intl.string(C.t['94lLDw'])
        }),
        Q = (0, b.Z)(t, { section: O.jXE.GUILD_LIST }),
        V = (0, h.Z)(t.id),
        q = (0, m.Z)(t.id),
        K = (0, S.ng)(t.id, !1),
        X = (0, L.Z)(t),
        W = (0, E.Mn)('GuildContextMenu');
    function z() {
        (0, r.h7j)((e) =>
            (0, i.jsx)(Z.g, {
                ...e,
                guild: t
            })
        );
    }
    return t.hasFeature(O.oNc.HUB)
        ? (0, i.jsxs)(r.v2r, {
              navId: 'guild-context',
              onClose: d.Zy,
              'aria-label': C.intl.string(C.t.HpQykZ),
              onSelect: l,
              children: [
                  (0, i.jsxs)(r.kSQ, {
                      children: [
                          y,
                          (0, i.jsx)(r.sNh, {
                              id: 'privacy',
                              label: C.intl.string(C.t.IlFwwc),
                              action: () =>
                                  (0, r.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('50506'), n.e('23217'), n.e('68880'), n.e('84605'), n.e('8016'), n.e('51269'), n.e('76540'), n.e('17938'), n.e('22878'), n.e('13351'), n.e('81966'), n.e('66711'), n.e('78447'), n.e('22646'), n.e('3940'), n.e('48923'), n.e('53937'), n.e('30419'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('18824'), n.e('86282'), n.e('18543'), n.e('28467'), n.e('72992'), n.e('22173'), n.e('99624'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('68241'), n.e('25183'), n.e('90783'), n.e('28044'), n.e('78593'), n.e('8930'), n.e('27541'), n.e('84466'), n.e('4877'), n.e('70828')]).then(n.bind(n, 241420));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t
                                          });
                                  })
                          }),
                          B
                      ]
                  }),
                  P
                      ? null
                      : (0, i.jsx)(r.kSQ, {
                            children: (0, i.jsx)(r.sNh, {
                                id: 'leave-guild',
                                label: C.intl.string(C.t.Dv8gFR),
                                action: z,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(r.kSQ, { children: Y })
              ]
          })
        : (0, i.jsxs)(r.v2r, {
              navId: 'guild-context',
              onClose: d.Zy,
              'aria-label': C.intl.string(C.t.HpQykZ),
              onSelect: l,
              children: [
                  (0, i.jsx)(r.kSQ, { children: Q }),
                  (0, i.jsx)(r.kSQ, { children: y }),
                  (0, i.jsxs)(r.kSQ, {
                      children: [D, W || __OVERLAY__ ? null : k, W && !__OVERLAY__ ? q : null, K, U, V]
                  }),
                  (0, i.jsxs)(r.kSQ, {
                      children: [
                          u ? null : R,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(r.sNh, {
                                    id: 'privacy',
                                    label: C.intl.string(C.t.BayiAg),
                                    action: () =>
                                        (0, r.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('50506'), n.e('23217'), n.e('68880'), n.e('84605'), n.e('8016'), n.e('51269'), n.e('76540'), n.e('17938'), n.e('22878'), n.e('13351'), n.e('81966'), n.e('66711'), n.e('78447'), n.e('22646'), n.e('3940'), n.e('48923'), n.e('53937'), n.e('30419'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('18824'), n.e('86282'), n.e('18543'), n.e('28467'), n.e('72992'), n.e('22173'), n.e('99624'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('68241'), n.e('25183'), n.e('90783'), n.e('28044'), n.e('78593'), n.e('8930'), n.e('27541'), n.e('84466'), n.e('4877'), n.e('70828')]).then(n.bind(n, 241420));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    guild: t
                                                });
                                        })
                                }),
                          B,
                          w
                      ]
                  }),
                  (0, i.jsxs)(r.kSQ, {
                      children: [H, F]
                  }),
                  (0, i.jsxs)(r.kSQ, {
                      children: [
                          X,
                          !P &&
                              (0, i.jsx)(r.sNh, {
                                  id: 'leave-guild',
                                  label: C.intl.string(C.t.J2TBi4),
                                  action: z,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(r.kSQ, { children: Y })
              ]
          });
}
function P(e) {
    let { analyticsLocations: t } = (0, c.ZP)(u.Z.CONTEXT_MENU);
    return (0, i.jsx)(c.Gt, {
        value: t,
        children: (0, i.jsx)(G, { ...e })
    });
}
