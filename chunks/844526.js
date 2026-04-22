n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(265486),
    o = n(775602),
    d = n(379848),
    c = n(832248),
    u = n(904481),
    p = n(203982),
    h = n(764231),
    m = n(881141),
    _ = n(149757),
    A = n(788868),
    f = n(652215),
    g = n(49999),
    x = n(985018);
function E(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = (0, m.A)(),
        r = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        p = (0, c.A)((e) => e.isOpen),
        h = (0, u.G)();
    return r || null == s || p || h
        ? null
        : (0, i.jsx)(d.zJ, {
              contentType: a.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, i.jsx)(C, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === a.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function C(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: l, shouldShow: a } = e,
        o = A.sp.indexOf(t),
        d = (0, _.I)(A.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, s.useCallback)(() => {
            n(g.i.TAKE_ACTION),
                c.A.setState({ shouldRenderTenureLevelUp: !0 }),
                p._.dispatch(f.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        m = (0, s.useCallback)(() => {
            n(g.i.USER_DISMISS);
        }, [n]),
        E = A.VD[t],
        C = x.intl.formatToPlainString(x.t.ewkaVR, {
            timeMilestone: (0, h.T)(E.id, E.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        T = [{ text: x.intl.string(x.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(r.A, {
        targetElementRef: l,
        onRequestClose: m,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != d ? { type: "image", src: d, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: x.intl.string(x.t.VoDxsV),
        body: C,
        actions: T,
    });
}
