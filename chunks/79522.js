i.d(e, { default: () => y });
var n = i(627968),
    l = i(64700),
    r = i(189213),
    s = i(834730),
    d = i(644151),
    a = i(174459),
    u = i(975571),
    o = i(115063),
    S = i(885386),
    g = i(112469),
    A = i(464946),
    _ = i(750994),
    E = i(542457),
    c = i(355097),
    T = i(652215),
    R = i(375708);
function f(t) {
    let { ingress: e, guildId: i } = t,
        r = S.pE.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, o.CN)();
                t ? n.delete(i) : n.add(i),
                    S.pE.updateSetting([...n]),
                    a.default.track(T.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(A.h, {
              children: (0, n.jsx)(_.Ay, {
                  title: R.intl.string(R.t["T+nevN"]),
                  value: !r,
                  onChange: s,
                  note: R.intl.format(R.t.jXKQCu, {
                      helpdeskArticle: u.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function I(t) {
    let { ingress: e = c.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(f, { ingress: e, guildId: i ?? l });
}
var C = i(395277);
function G(t) {
    let { ingress: e, guildId: i } = t,
        r = S.JG.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, o.Kk)();
                t ? n.delete(i) : n.add(i),
                    S.JG.updateSetting([...n]),
                    a.default.track(T.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(A.h, {
              children: (0, n.jsx)(_.Ay, {
                  title: R.intl.string(C.default.WhdCGP),
                  value: !r,
                  onChange: s,
                  note: R.intl.string(C.default.UQ9RHJ),
              }),
          });
}
function p(t) {
    let { ingress: e = c.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(G, { ingress: e, guildId: i ?? l });
}
var x = i(862482),
    h = i(171316),
    U = i(71393),
    V = i(762183),
    j = i(445176),
    m = i(972737),
    k = i(602339);
function Y(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, g.q9)(),
        s = S.$s.useSetting().includes(i),
        d = (0, V.K)(),
        u = (0, j.e)(),
        c = (0, h.uM)(),
        f = l.useCallback(
            (t) => {
                let n = (0, o.Tb)();
                t ? n.delete(i) : n.add(i),
                    S.$s.updateSetting(Array.from(n)),
                    a.default.track(T.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [i, e],
        );
    function I(t, e) {
        a.default.track(T.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let C = u ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
    return (0, n.jsx)(A.h, {
        children:
            "0" === i
                ? (0, n.jsx)(_.Ay, {
                      title: C,
                      note: u ? R.intl.string(R.t.XXGmuB) : R.intl.string(R.t.wbYDfT),
                      value: !d,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, m.O)({
                                  header: R.intl.string(R.t["uUr+GR"]),
                                  body: R.intl.string(R.t.hjGJBp),
                                  confirmText: R.intl.string(R.t.gm1Vej),
                                  cancelText: R.intl.string(R.t.p89ACt),
                                  confirmButtonColor: x.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      S.n6.updateSetting(e), I(e, !1);
                                  },
                                  onCancel: () => {
                                      S.n6.updateSetting(e), S.$s.updateSetting(e ? U.A.getGuildIds() : []), I(e, !0);
                                  },
                              });
                      },
                      disabled: c,
                      tooltipText: c ? R.intl.string(k.default["6Af/cw"]) : void 0,
                  })
                : (0, n.jsx)(_.Ay, {
                      title: C,
                      note: r ? R.intl.string(R.t.V0ka0Q) : u ? R.intl.string(R.t.F9WY3f) : R.intl.string(R.t.G7c3Xo),
                      value: !s,
                      onChange: f,
                  }),
    });
}
function L(t) {
    let { ingress: e = c.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(Y, { ingress: e, guildId: i ?? l });
}
var b = i(139716),
    M = i(847599),
    N = i(152076);
function D(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, g.q9)(),
        s = (0, V.K)(),
        d = S.$s.useSetting().includes(i),
        c = (0, h.uM)(),
        f = S.YX.useSetting(),
        I = S.Zr.useSetting().includes(i),
        C = l.useCallback(
            (t) => {
                let n = (0, o.xo)();
                t ? n.delete(i) : n.add(i),
                    S.Zr.updateSetting(Array.from(n)),
                    a.default.track(T.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    function G(t, e) {
        a.default.track(T.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function p(t, e) {
        var i;
        !t && (0, N.w)()
            ? b.A.showAgeVerificationGetStartedModal({ entryPoint: M.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? C(t)
              : ((i = !t),
                (0, m.O)({
                    header: R.intl.string(R.t.yAfu1p),
                    body: R.intl.string(R.t.Ry2z74),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: x.$n.Colors.BRAND,
                    onConfirm: () => {
                        S.YX.updateSetting(i), G(i, !1);
                    },
                    onCancel: () => {
                        S.YX.updateSetting(i), S.Zr.updateSetting(i ? U.A.getGuildIds() : []), G(i, !0);
                    },
                }));
    }
    return (0, n.jsx)(A.h, {
        children:
            "0" === i
                ? (0, n.jsx)(_.Ay, {
                      title: R.intl.string(R.t["3o2ojh"]),
                      value: !s && !f,
                      onChange: (t) => p(t, !1),
                      disabled: s || c,
                      tooltipText: c ? R.intl.string(k.default["6Af/cw"]) : void 0,
                      note: R.intl.format(R.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(T.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, n.jsx)(_.Ay, {
                      title: R.intl.string(R.t["3o2ojh"]),
                      value: !d && !I,
                      onChange: (t) => p(t, !0),
                      disabled: d,
                      note: r
                          ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: u.A.getArticleURL(T.MVz.MESSAGE_REQUESTS) })
                          : R.intl.format(R.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(T.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function v(t) {
    let { ingress: e = c.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(D, { ingress: e, guildId: i ?? l });
}
function P(t) {
    let { guildId: e } = t;
    return (0, n.jsxs)(d.A, {
        children: [
            (0, n.jsx)(L, { ingress: c.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(v, { ingress: c.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(p, { ingress: c.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(I, { ingress: c.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(s.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: R.intl.format(R.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function y(t) {
    let { guild: e, transitionState: i, onClose: l } = t,
        s = `${R.intl.string(R.t.BayiAo)}\u{2014}${null != e ? e.name : "??"}`;
    return (0, n.jsx)(r.Modal, {
        transitionState: i,
        size: "sm",
        title: s,
        actions: [{ onClick: () => l(), variant: "primary", text: R.intl.string(R.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, n.jsx)(P, { guildId: e.id }),
    });
}
