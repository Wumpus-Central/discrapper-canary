n.d(t, { $: () => A, default: () => b });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(355622),
    c = n(408018),
    d = n(201349),
    u = n(659617),
    m = n(474078),
    h = n(747926),
    x = n(55294),
    g = n(376310),
    f = n(652215),
    j = n(375708),
    p = n(632159);
let v = o.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    A = "create-game-invite-post",
    C = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function b(e) {
    let t,
        { parentChannel: n, transitionState: o, onClose: b } = e,
        N = n.availableTags ?? [],
        [{ textValue: S, richValue: E }, y] = i.useState(() => (0, c.N3)()),
        [T, R] = i.useState(!1),
        [k, I] = i.useState(() => new Set()),
        [M, _] = i.useState(!0),
        [w, L] = i.useState(!1),
        D = i.useCallback((e, t, n) => {
            y({ textValue: t, richValue: n });
        }, []),
        P = i.useCallback((e) => {
            I((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        O = ((t = S.trim().split("\n")[0] ?? ""), (0, m.A)(t.slice(0, f.Ign), !0)),
        F = (0, u.w0)({ parentChannel: n, name: O, appliedTags: k, upload: x.Se }),
        U = S.length > 0 && S.length <= 120 && !w,
        z = i.useCallback(async () => {
            if (U) {
                L(!0);
                try {
                    let e = await F(S);
                    (0, h.JA)(e), b();
                } catch {
                    L(!1);
                }
            }
        }, [U, F, b, S]);
    return (0, l.jsx)(s.Modal, {
        title: j.intl.string(j.t.tOsHsu),
        transitionState: o,
        onClose: b,
        actions: [
            { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: b, disabled: w },
            { variant: "primary", text: j.intl.string(j.t.CumH4u), onClick: z, disabled: !U, loading: w },
        ],
        children: (0, l.jsxs)("div", {
            className: p.r,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: j.intl.string(j.t["/mEbGf"]),
                    children: (0, l.jsx)(d.Ay, {
                        type: v,
                        channel: n,
                        placeholder: j.intl.string(j.t["SU/IAE"]),
                        textValue: S,
                        richValue: E,
                        focused: T,
                        onChange: D,
                        onFocus: () => R(!0),
                        onBlur: () => R(!1),
                        onSubmit: C,
                        parentModalKey: A,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                N.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: j.intl.string(j.t.KM6lRG),
                          description: j.intl.string(j.t["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: p.G,
                              children: N.map((e) =>
                                  (0, l.jsx)(
                                      g.A,
                                      { tag: e, size: g.A.Sizes.SMALL, selected: k.has(e.id), onClick: () => P(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: j.intl.string(j.t.Xd2NFi),
                    description: j.intl.string(j.t.G91SYQ),
                    children: (0, l.jsx)(r.d, { checked: M, onChange: _ }),
                }),
            ],
        }),
    });
}
