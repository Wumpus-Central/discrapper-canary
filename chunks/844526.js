n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(554146),
    r = n(265486),
    o = n(775602),
    d = n(379848),
    c = n(832248),
    u = n(995377),
    m = n(203982),
    h = n(764231),
    x = n(881141),
    p = n(149757),
    g = n(788868),
    _ = n(652215),
    f = n(49999),
    b = n(985018);
function v(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = (0, x.A)(),
        r = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        m = (0, c.A)((e) => e.isOpen),
        h = (0, u.G)();
    return r || null == i || m || h
        ? null
        : (0, a.jsx)(d.zJ, {
              contentType: l.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, a.jsx)(j, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === l.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function j(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: l } = e,
        o = g.sp.indexOf(t),
        d = (0, p.I)(g.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, i.useCallback)(() => {
            n(f.i.TAKE_ACTION),
                c.A.setState({ shouldRenderTenureLevelUp: !0 }),
                m._.dispatch(_.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        x = (0, i.useCallback)(() => {
            n(f.i.USER_DISMISS);
        }, [n]),
        v = g.VD[t],
        j = b.intl.formatToPlainString(b.t.ewkaVR, {
            timeMilestone: (0, h.T)(v.id, v.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        C = [{ text: b.intl.string(b.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, a.jsx)(r.A, {
        targetElementRef: s,
        onRequestClose: x,
        shouldShow: l,
        caretConfig: { align: "center" },
        graphic: null != d ? { type: "image", src: d, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: b.intl.string(b.t.VoDxsV),
        body: j,
        actions: C,
    });
}
